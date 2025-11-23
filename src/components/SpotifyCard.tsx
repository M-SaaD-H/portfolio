"use client"

import React, { useEffect, useState } from 'react'
import { Song } from '@/lib/spotify';
import Image from 'next/image';
import Link from 'next/link';
import { MusicPlayingAnimation } from './ui/music-playing-animation';
import { IconPlayerPlay } from '@tabler/icons-react';

const SpotifyCard = () => {
  const [song, setSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const fetchSpotifyStatus = () => {
      fetch("/api/spotify/status")
        .then(res => res.json())
        .then(data => {
          setIsPlaying(data.isPlaying);
          setSong(data.song);
        })
        .catch(err => {
          // Defensive: fallback to string if getMessage not present
          console.error("Failed to fetch spotify status. E: " + (err?.getMessage?.() || err?.message || err));
        })
        .finally(() => {
          timeoutId = setTimeout(fetchSpotifyStatus, 30000); // re-fetch every 30s
        });
    };

    fetchSpotifyStatus();

    return () => clearTimeout(timeoutId);
  }, []);

  if (!song) {
    return (
      <div className="w-full bg-card text-card-foreground border border-border rounded-lg p-4">
        Fetching song data
      </div>
    )
  }

  return (
    <div className="w-full bg-card text-card-foreground border border-border rounded-xl p-2 flex items-center justify-between">
      <div className="flex justify-center items-center gap-4">
        <Image
          src={song.imageUrl}
          height={56}
          width={56}
          alt={song.title}
          className="rounded-lg"
        />
        <div>
          <div className="flex gap-1 items-center">
            <Image
              src={"/assets/spotify.svg"}
              height={12}
              width={12}
              alt="Spotify Logo"
            />
            <p className="text-xs text-muted-foreground">{isPlaying ? "Listening to" : "Last Played"}</p>
          </div>
          <Link
            href={song.externalLink}
            target="_blank"
            className="font-sans tracking-tight font-medium truncate text-sm hover:text-green-500 hover:underline transition-colors duration-100"
          >
            {song.title}
          </Link>
          <p className="text-xs text-muted-foreground">by {song.artists.join(", ")}</p>
        </div>
      </div>
      <div>
        {
          isPlaying ? (
            <div className="mr-4">
              <MusicPlayingAnimation />
            </div>
          ) : (
            <Link href={song.externalLink} className="bg-accent/30 hover:bg-accent/50 btn-inner-shadow transition-colors rounded-xl p-2 flex items-center justify-center mr-4">
              <IconPlayerPlay size={18} className="text-white" stroke={2} />
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default SpotifyCard