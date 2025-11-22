"use client"

import { Song } from '@/lib/spotify';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const SpotifyCard = () => {
  const [song, setSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetch("/api/spotify/status")
      .then(res => res.json())
      .then(data => {
        setIsPlaying(data.isPlaying)
        setSong(data.song);
        console.log(song)
      })
  }, [])

  if (!song) {
    return (
      <div className="w-full bg-card text-card-foreground border border-border rounded-lg p-4">
        Fetching song data
      </div>
    )
  }

  return (
    <div className="w-full bg-card text-card-foreground border border-border rounded-lg p-2 flex items-center gap-4">
      <Image
        src={song.imageUrl}
        height={54}
        width={54}
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
        <p className="text-xs text-muted-foreground">by {song.artists[0]}</p>
      </div>
    </div>
  )
}

export default SpotifyCard