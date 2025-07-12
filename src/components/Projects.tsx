'use client'

import Card from './Card'
import Link from 'next/link'
import { IconBrandFramerMotion, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconChevronDown } from '@tabler/icons-react'
import { motion } from 'motion/react'
import { Button } from './ui/button'

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

const NextJS = {
  name: 'Next.js',
  logo: <IconBrandNextjs size={18} />
}

const React = {
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

const projects: Project[] = [
  {
    title: 'Vynk',
    description: "Open-source library for UI components, blocks and spinnets available with a single CLI command to accelerate the developement.",
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
    title: 'VidChat',
    description: 'A real-time browser video chat app built to learn and demonstrate WebRTC, featuring peer-to-peer video calls and simple signaling.',
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
    description: 'A simple web app for tracking finances, designed specifically for students.',
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
    description: 'A Spotify-inspired music streaming clone with additional functionalities like chat and jamming rooms.',
    image: '/projects/sputify.png',
    liveLink: 'https://github.com/M-SaaD-H/Sputify',
    sourceLink: 'https://github.com/M-SaaD-H/Sputify',
    tags: [
      React,
      NodeJS,
      { name: 'ShadCN' },
      JavaScript,
      Tailwind
    ]
  },
  {
    title: 'Zootube',
    description: 'A YouTube-style backend clone with uploads and authentication, built to learn Express and backend development.',
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

const upcomingProjects: Project[] = [
  {
    title: 'AlgoBud',
    description: "An AI-powered DSA platform with a personal tutor that spots your mistakes, explains patterns, and helps you level up—smarter than brute force.",
    image: '',
    liveLink: '/',
    sourceLink: '/',
    tags: [
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind
    ]
  }
]

function Projects() {
  const childVariant = {
    hidden: {
      opacity: 0.5,
      y: 50,
      filter: 'blur(10px)',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  }

  const parentVariant = {
    hidden: {},
    show: {
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      initial={'hidden'}
      animate={'show'}
      variants={parentVariant}
      id='projects'
      className='mt-12'
    >
      <motion.h1 variants={childVariant} className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight max-md:text-center text-balance'>
        Projects I&apos;ve Crafted & Shipped
      </motion.h1>
      <div className='space-y-4'>
        {
          projects.map(project => (
            <Card project={project} key={project.title} />
          ))
        }
      </div>

      <Button variant={'hidden'} asChild className='flex items-center gap-1 text-sm mx-auto my-8'>
        <Link href={'https://github.com/M-SaaD-H'} target='_blank'>
          See More <IconChevronDown size={16} />
        </Link>
      </Button>

      <h1 className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight'>Upcoming Projects</h1>
      <div className='grid md:grid-cols-2 gap-4 w-full'>
        {
          upcomingProjects.map(project => (
            <Card project={project} key={project.title} />
          ))
        }
      </div>
    </motion.div>
  )
}

export default Projects
