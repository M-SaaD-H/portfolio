import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
  <div className='p-8 my-4'>
      <div className='flex justify-between max-md:flex-col-reverse'>
        <div>
          <h1 className='text-5xl md:text-7xl font-sans mt-5 font-bold tracking-tight my-2'>
            Saad
          </h1>
          <p className='text-zinc-700 dark:text-zinc-300'>Someone who loves building cool stuffs and Anime.</p>
        </div>
        <div className='overflow-hidden rounded-lg w-max h-max shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] border border-zinc-700/70'>
          <Image
            src={'/avatar.jpeg'}
            height={120}
            width={120}
            alt='Image'
          />
        </div>
      </div>
      <p className='text-zinc-700 dark:text-zinc-400 mt-8'>
        I&apos;m just a guy who likes turning coffee into code. Building cool stuffs that don&apos;t live forever in my GitHub graveyard is kinda my thing—because the world has enough abandoned side projects already. Coding stuff that slaps harder than my GPA ever did.
      </p>
    </div>
  )
}

export default Intro
