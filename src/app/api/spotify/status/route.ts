import { NextResponse } from "next/server";
import { getSpotifyStatus } from "@/lib/spotify";

export async function GET() {
  try {
    const response = await getSpotifyStatus();

    if (!response) {
      return NextResponse.json({ isPlaying: false, song: null }, { status: 200 });
    }

    return NextResponse.json(
      {
        isPlaying:  response.isPlaying,
        song: response.song
      }, { status: 200 }
    );
  } catch (err) {
    console.error('Spotify API error:', err);
    return NextResponse.json({ error: 'Failed to fetch spotify status. ' + err }, { status: 500 });
  }
}