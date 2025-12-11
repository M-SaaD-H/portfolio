'use client'

import React from 'react'
import { Project, UpcomingProject } from './Projects'
import Link from 'next/link'
import { TagItem, Tags } from './Tags'
import { Button } from './ui/button'
import Image from 'next/image'
import { IconExternalLink } from '@tabler/icons-react'
import { FaGithub } from 'react-icons/fa6'

const Card = ({ project }: { project: Project | UpcomingProject }) => {
  return (
    <div className='flex flex-col overflow-hidden rounded-xl w-full h-full border transition-colors duration-200 hover:bg-muted/30 border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] relative group'>
      {
        project.image && (
          <div className='w-full h-[50%] overflow-hidden shrink-0'>
            <Image
              src={project.image}
              height={300}
              width={400}
              alt={project.title + ' Landing Image'}
              className='shrink-0 object-cover h-full w-full transition-all duration-300 group-hover:scale-105 grayscale-100 opacity-50 hover:grayscale-0 hover:opacity-100'
              quality={90}
              priority={false}
            />
          </div>
        )
      }

      <div className='p-3 w-full flex flex-col justify-between flex-1'>
        <div>
          <h1 className='font-sans tracking-tight font-semibold'>{project.title}</h1>
          <p className='text-muted-foreground text-xs'>{project.description}</p>
        </div>
        <div className='grid grid-cols-2 gap-2 h-max'>
        {
            project.sourceLink && (
              <Button size={'small'} variant={"secondary"} asChild className='text-xs group/button rounded-lg'>
                <Link href={project.sourceLink} target='_blank'>
                  <FaGithub size={14} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[2px] transition-transform duration-300' />
                  Source
                </Link>
              </Button>
            )
          }
          {
            project.liveLink && (
              <Button size={'small'} asChild className='text-xs group/button rounded-lg'>
                <Link href={project.liveLink} target='_blank'>
                  <IconExternalLink size={14} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[2px] transition-transform duration-300' />
                  Live
                </Link>
              </Button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Card
