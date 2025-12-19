import React, { useState } from 'react'
import { IconLoader2 } from '@tabler/icons-react'

export const Video = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full flex justify-center items-center min-h-[282px]">
      {loading && <VideoSkeleton />}
      <iframe
        src={src}
        width={512}
        height={282}
        allowFullScreen={true}
        onLoad={() => setLoading(false)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{
          display: loading ? 'none' : 'block'
        }}
      />
    </div>
  )
}

const VideoSkeleton = () => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <IconLoader2 className='animate-spin mr-2' />
      <p className='text-muted-foreground'>Loading Video...</p>
    </div>
  )
}
