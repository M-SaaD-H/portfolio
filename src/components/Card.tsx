'use client'

import React from 'react'
import { Project } from './Projects'
import Link from 'next/link'
import { Tags } from './Tags'
import { Button } from './ui/button'
import Image from 'next/image'
import { IconExternalLink } from '@tabler/icons-react'
import { FaGithub } from 'react-icons/fa6'

const Card = ({ project }: { project: Project }) => {
  return (
    <div className='flex max-md:flex-col overflow-hidden rounded-lg border transition-colors duration-200 hover:bg-muted/20 border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] relative group'>
      {
        project.image && (
          <div className='w-full md:w-1/3 h-auto overflow-hidden shrink-0'>
            <Image
              src={project.image}
              height={300}
              width={400}
              alt={project.title + 'Landing Image'}
              className='shrink-0 object-cover h-full w-full transition-transform duration-200 group-hover:scale-105'
              quality={90}
              priority={false}
            />
          </div>
        )
      }

      <div className='p-4 w-full flex flex-col justify-between min-h-[8rem]'>
        <div>
          <h1 className='text-xl font-sans tracking-tight font-semibold'>{project.title}</h1>
          <p className='text-muted-foreground text-sm'>{project.description}</p>
        </div>
        <div className='flex justify-between items-end w-full'>
          <div className='flex gap-2 flex-wrap mt-4'>
            <Tags items={project.tags} />
          </div>
          <div className='flex gap-2 h-max'>
            <Button size={'small'} asChild className='text-xs'>
              <Link href={project.liveLink} target='_blank'>
                <IconExternalLink size={14} />
                Live
              </Link>
            </Button>
            <Button size={'small'} asChild className='text-xs'>
              <Link href={project.sourceLink} target='_blank'>
                <FaGithub size={14} />
                Source
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
