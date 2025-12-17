"use client"

import React, { useEffect, useState } from 'react'
import { Song } from '@/lib/spotify'
import Image from 'next/image'
import Link from 'next/link'
import { MusicPlayingAnimation } from './ui/music-playing-animation'
import { IconPlayerPlay } from '@tabler/icons-react'
import { motion } from "motion/react"
import { childVariant } from './ui/animation-wrapper'

interface SpotifyCardClientProps {
  data: { song: Song | null; isPlaying: boolean } | null
}

export default function SpotifyCardClient({ data }: SpotifyCardClientProps) {
  const [song, setSong] = useState<Song | null>(data?.song ?? null)
  const [isPlaying, setIsPlaying] = useState(data?.isPlaying ?? false)

  useEffect(() => {
    // Only fetch updates if we have initial data
    if (!data) return

    const fetchSpotifyStatus = () => {
      fetch("/api/spotify/status")
        .then(res => res.json())
        .then(data => {
          setIsPlaying(data.isPlaying)
          setSong(data.song)
        })
        .catch(err => {
          console.error("Failed to fetch spotify status:", err)
        })
    }

    // Poll every 30 seconds for live updates
    const intervalId = setInterval(fetchSpotifyStatus, 30000)
    return () => clearInterval(intervalId)
  }, [data])

  if (!song) {
    return (
      <motion.div 
        variants={childVariant} 
        className="w-full h-18 bg-card text-card-foreground border border-border rounded-2xl p-4 flex items-center gap-2"
      >
        <p className="text-sm font-sans tracking-tight">No song data available</p>
      </motion.div>
    )
  }

  return (
    <motion.div 
      variants={childVariant} 
      className="w-full bg-card text-card-foreground border border-border rounded-2xl p-2 flex items-center justify-between gap-2"
    >
      <div className="flex justify-center items-center gap-4">
        <Image
          src={song.imageUrl}
          height={56}
          width={56}
          alt={song.title}
          className="rounded-lg"
        />
        <div className='mr-2'>
          <div className="flex gap-1 items-center">
            <Image
              src="/assets/spotify.svg"
              height={12}
              width={12}
              alt="Spotify Logo"
            />
            <p className="text-xs text-muted-foreground">
              {isPlaying ? "Listening to" : "Last Played"}
            </p>
          </div>
          <Link
            href={song.externalLink}
            target="_blank"
            className="font-sans tracking-tight font-medium line-clamp-1 truncate text-sm hover:text-green-500 hover:underline transition-colors duration-100"
          >
            {song.title}
          </Link>
          <p className="text-xs text-muted-foreground line-clamp-1">
            by {song.artists.join(", ")}
          </p>
        </div>
      </div>
      <div className='shrink-0'>
        {isPlaying ? (
          <div className="mr-4">
            <MusicPlayingAnimation />
          </div>
        ) : (
          <Link 
            href={song.externalLink} 
            className="bg-accent/30 hover:bg-accent/50 btn-inner-shadow transition-colors rounded-xl p-2 flex items-center justify-center mr-4"
          >
            <IconPlayerPlay size={18} className="text-white" stroke={2} />
          </Link>
        )}
      </div>
    </motion.div>
  )
}