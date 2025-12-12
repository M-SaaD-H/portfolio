'use client'

import { ProjectCard, UpcomingProjectCard } from './ProjectCards'
import Link from 'next/link'
import { IconBrandFramerMotion, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconChevronDown, IconChevronRight } from '@tabler/icons-react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { childVariant } from './ui/animation-wrapper'
import Image from 'next/image'
import React, { useState } from 'react'

export type Project = {
  title: string,
  description: string,
  image: string,
  liveLink: string,
  sourceLink: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

export type UpcomingProject = {
  title: string,
  description: string,
  image?: string,
  liveLink?: string,
  sourceLink?: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

const NextJS = {
  name: 'Next.js',
  logo: <IconBrandNextjs size={18} />
}

const ReactTech = {
  name: 'React',
  logo: <IconBrandReact size={18} />
}

const Tailwind = {
  name: 'Tailwind CSS',
  logo: <IconBrandTailwind size={18} />
}

const Motion = {
  name: 'Motion',
  logo: <IconBrandFramerMotion size={18} />
}

const TypeScript = {
  name: 'TypeScript',
  logo: <IconBrandTypescript size={18} />
}

const NodeJS = {
  name: 'NodeJS',
  logo: <IconBrandNodejs size={18} />
}

const JavaScript = {
  name: 'JavaScript',
  logo: <IconBrandJavascript size={18} />
}

const MongoDB = {
  name: 'MongoDB',
  logo: <IconBrandMongodb size={18} />
}

const Java = {
  name: 'Java',
  logo: <Image src={"/skills/java.svg"} height={20} width={20} alt='Java Icon' style={{ filter: 'brightness(1000%) saturate(0)', WebkitFilter: 'brightness(1000%) saturate(0)' }} />
}

const projects: Project[] = [
  {
    title: 'Vynk',
    description: "CLI tool for ready-to-use UI components and blocks to speed up your web development.",
    image: '/projects/vynk.png',
    liveLink: 'https://vynk.live',
    sourceLink: 'https://github.com/M-SaaD-H/vynk',
    tags: [
      NextJS,
      Motion,
      { name: 'ShadCN' },
      TypeScript,
      Tailwind
    ]
  },
  {
    title: 'Anton',
    description: "A SQL-like Java database, built from scratch, for learning database internals.",
    image: '/projects/anton.png',
    liveLink: 'https://github.com/M-SaaD-H/Anton',
    sourceLink: 'https://github.com/M-SaaD-H/Anton',
    tags: [
      Java
    ]
  },
  {
    title: 'Autotone',
    description: "Browser extension to automatically balance and keep tab audio volume steady.",
    image: '/projects/autotone.png',
    liveLink: 'https://github.com/M-SaaD-H/autotone',
    sourceLink: 'https://github.com/M-SaaD-H/autotone',
    tags: [
      JavaScript
    ]
  },
  {
    title: '2D Game',
    description: "Simple 2D adventure game built in Java, featuring exploration and basic obstacles and power-ups.",
    image: '/projects/game.png',
    liveLink: 'https://github.com/M-SaaD-H/2D-Adventure-Game',
    sourceLink: 'https://github.com/M-SaaD-H/2D-Adventure-Game',
    tags: [
      Java
    ]
  },
  {
    title: 'VidChat',
    description: "Peer-to-peer browser video chat app using WebRTC and Socket.io for real-time calls.",
    image: '/projects/vidchat.png',
    liveLink: 'https://vid-chat-peach.vercel.app',
    sourceLink: 'https://github.com/M-SaaD-H/VidChat',
    tags: [
      NextJS,
      TypeScript,
      { name: 'Socket.io' },
      { name: 'WebRTC' },
      Tailwind
    ]
  },
  {
    title: 'FinTrack',
    description: "A student-focused finance tracker app to manage and monitor expenses with ease.",
    image: '/projects/fintrack.png',
    liveLink: 'https://fintrack-flax-beta.vercel.app',
    sourceLink: 'https://github.com/M-SaaD-H/fintrack',
    tags: [
      NextJS,
      TypeScript,
      { name: 'ShadCN' },
      { name: 'Aceternity UI' },
      Tailwind
    ]
  },
  {
    title: 'Sputify',
    description: "Spotify-like web music streaming clone. Features playlists, playback, and more.",
    image: '/projects/sputify.png',
    liveLink: 'https://github.com/M-SaaD-H/Sputify',
    sourceLink: 'https://github.com/M-SaaD-H/Sputify',
    tags: [
      ReactTech,
      NodeJS,
      { name: 'ShadCN' },
      JavaScript,
      Tailwind
    ]
  },
  {
    title: 'Zootube',
    description: "YouTube-style backend with secure uploads, authentication, and cloud media management.",
    image: '/projects/zootube.png',
    liveLink: 'https://github.com/M-SaaD-H/Zootube',
    sourceLink: 'https://github.com/M-SaaD-H/Zootube',
    tags: [
      NodeJS,
      MongoDB,
      { name: 'Cloudinary' },
      JavaScript
    ]
  }
]

const upcomingProjects: UpcomingProject[] = [
  {
    title: 'AlgoBud',
    description: "An AI-powered DSA platform with a personal tutor that spots your mistakes, explains patterns, and helps you level up smarter than brute force.",
    tags: [
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind
    ]
  },
  {
    title: 'Zuno',
    description: "An AI agent that keeps track of your personal life, so you can focus on getting work done without missing anything important.",
    tags: [
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind
    ]
  }
]

function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <div id='projects' className='mt-12'>
      <motion.h3 variants={childVariant} className='text-2xl font-bold tracking-tight mb-4'>Projects</motion.h3>
      <div className='grid gap-3 md:grid-cols-2 md:auto-rows-[19rem]'>
        {
          visibleProjects.map(project => (
            <motion.div variants={childVariant} key={project.title} className='h-full w-full flex'>
              <ProjectCard project={project} />
            </motion.div>
          ))
        }
      </div>

      {!showAll && (
        <motion.div variants={childVariant}>
          <Button
            variant={'hidden'}
            className='flex items-center gap-1 w-max text-sm mx-auto my-8 rounded-xl'
            onClick={() => setShowAll(true)}
          >
            See More <IconChevronDown size={16} />
          </Button>
        </motion.div>
      )}

      <motion.h1 variants={childVariant} className='text-2xl ml-2 mt-8 mb-4 font-bold font-sans tracking-tight max-md:text-center text-balance'>Upcoming Projects</motion.h1>
      <div className='grid md:grid-cols-2 gap-4 w-full'>
        {
          upcomingProjects.map(project => (
            <motion.div variants={childVariant} key={project.title}>
              <UpcomingProjectCard project={project} />
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
