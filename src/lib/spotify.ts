import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: clientId,
  SPOTIFY_CLIENT_SECRET: clientSecret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1"; // limit = 1 -> get one recently played track

export interface Song {
  title: string;
  artists: string[];
  albumName: string;
  imageUrl: string;
  duration: number;
  progress?: number;
  externalLink: string;
  preview: string | null;
  timestamp?: number;
}

interface SpotifyTrackData {
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  duration_ms: number;
  external_urls: { spotify: string };
  preview_url: string | null;
};

const formatSong = (songData: SpotifyTrackData): Song => {
  return {
    title: songData.name,
    artists: songData.artists.map((a: { name: string }) => a.name),
    albumName: songData.album.name,
    imageUrl: songData.album.images[1].url,
    duration: songData.duration_ms,
    externalLink: songData.external_urls.spotify,
    preview: songData.preview_url
  }
}

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error while getting access token: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};

let accessToken: string | null = null;
let accessTokenExpiresAt: number = 0;

async function getCachedAccessToken() {
  const safetyBuffer = 10; // Buffer (in seconds) to avoid edge expiry cases
  const now = Math.floor(Date.now() / 1000);

  if (!accessToken || now >= accessTokenExpiresAt - safetyBuffer) {
    const { access_token, expires_in } = await getAccessToken();
    accessToken = access_token;
    // expires_in is in seconds, Date.now() is milliseconds
    accessTokenExpiresAt = now + expires_in;
  }

  return accessToken;
}

export const getSpotifyStatus = async () => {
  const token = await getCachedAccessToken();

  if (!token) {
    throw new Error("Access token found to be null.");
  }

  let song = await getNowPlaying(token);

  if (song) {
    return {
      isPlaying: true,
      song
    };
  }

  console.log("getting recently played song");

  song = await getRecentlyPlayed(token)

  return {
    isPlaying: false,
    song
  };
}

const getNowPlaying = async (token: string) => {
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // 204 -> No Content means nothing is currently playing
  if (response.status === 204 || response.status > 400) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Spotify API Error: ${response.status} : ${response.statusText}`);
  }

  const data = await response.json()
  
  return formatSong(data.item);
};

const getRecentlyPlayed = async (token: string) => {
  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status > 400) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Spotify API Error: ${response.status} : ${response.statusText}`);
  }

  const data = await response.json();

  return formatSong(data.items[0].track);
}