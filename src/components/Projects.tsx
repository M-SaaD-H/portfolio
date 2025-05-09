import React from 'react'
import Card from './Card'
import Link from 'next/link'
import { IconChevronDown } from '@tabler/icons-react'

export type Project = {
  title: string,
  description: string,
  link?: string,
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'VidChat',
    description: 'VidChat is a real-time video chat app. It lets users instantly get straight-up face-to-face conversations in the browser.',
    link: 'https://vid-chat-peach.vercel.app',
    tags: [
      'Next.js',
      'TypeScript',
      'Socket.io',
      'WebRTC'
    ]
  },
  {
    title: 'FinTrack',
    description: 'FinTrack is a sleek finance tracking web app, designed to make adulting (aka budgeting) slightly less painful.',
    link: 'https://fintrack-flax-beta.vercel.app',
    tags: [
      'Next.js',
      'TypeScript',
      'ShadCN',
      'Aceternity UI'
    ]
  },
  {
    title: 'Sputify',
    description: 'Sputify is my take on Spotify—built from scratch to stream bops. To deliver a vibe-heavy music experience... minus the licensing fees.',
    link: 'https://github.com/M-SaaD-H/Sputify',
    tags: [
      'React.js',
      'Node.js',
      'ShadCN',
      'JavaScript'
    ]
  },
  {
    title: 'Zootube',
    description: 'ZooTube is a YouTube-inspired backend clone. It handles user auth, video uploads, likes, and comments like the real deal (minus the copyright strikes).',
    link: 'https://github.com/M-SaaD-H/Zootube',
    tags: [
      'Node.js',
      'MongoDB',
      'Cloudinary',
      'JavaScript'
    ]
  }
]

const upcomingProjects: Project[] = [
  {
    title: 'UI Component Library',
    description: "A clean, reusable UI component library—because writing the same button for the 47th time shouldn't be a personality trait.",
    tags: [
      'Next.js',
      'Motion',
      'ShadCN',
      'TypScript'
    ]
  },
  {
    title: 'AlgoBud',
    description: "An AI-powered DSA platform with a personal tutor that spots your mistakes, explains patterns, and helps you level up—smarter than brute force.",
    tags: [
      'Next.js',
      'Express',
      'TypeScript',
    ]
  }
]

function Projects() {
  return (
    <div className='p-2'>
      <h1 className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight'>Projects</h1>
      <div className='grid grid-cols-2 gap-4'>
        {
          projects.map(project => (
            <Card project={project} key={project.title} />
          ))
        }
      </div>
      <Link href={'https://github.com/M-SaaD-H'} target='_blank'>
        <button className='flex items-center gap-1 text-sm mx-auto my-8 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200 cursor-pointer'>
          See More <IconChevronDown size={16} />
        </button>
      </Link>

      <h1 className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight'>Upcoming Projects</h1>
      <div className='grid grid-cols-2 gap-4'>
        {
          upcomingProjects.map(project => (
            <Card project={project} key={project.title} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects
