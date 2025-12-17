import { Suspense } from 'react'
import { IconLoader2 } from '@tabler/icons-react'
import SpotifyCardClient from './SpotifyCardClient'
import { Song } from '@/lib/spotify'

async function getSpotifyStatus() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/status`, {
      next: { revalidate: 30 }, // Cache for 30 seconds
    })
    
    if (!res.ok) return null
    
    const data: { song: Song | null; isPlaying: boolean } = await res.json()
    return data
  } catch (err) {
    console.error('Failed to fetch spotify status:', err)
    return null
  }
}

async function SpotifyContent() {
  const data = await getSpotifyStatus()
  
  return <SpotifyCardClient data={data} />
}

// Not using fallback, because it is staggering the animation
// will to solve it later

// function SpotifyCardSkeleton() {
//   return (
//     <div className="w-full h-18 bg-card text-card-foreground border border-border rounded-2xl p-4 flex items-center gap-2">
//       <p className="text-sm font-sans tracking-tight">Loading Spotify...</p>
//       <IconLoader2 className="animate-spin" size={18} />
//     </div>
//   )
// }

export default function SpotifyCard() {
  return (
    <Suspense fallback={<div />}>
      <SpotifyContent />
    </Suspense>
  )
}