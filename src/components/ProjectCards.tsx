'use client'

import React from 'react'
import { type Project, type UpcomingProject } from '@/data/projects'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { IconExternalLink } from '@tabler/icons-react'
import { FaGithub } from 'react-icons/fa6'
import { motion } from 'motion/react'
import { Video } from './ui/video'

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className='bg-background flex flex-col overflow-hidden rounded-xl w-full h-full border transition-colors duration-200 hover:bg-muted/30 border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] group'>
      <div className='w-full h-[60%] overflow-hidden shrink-0'>
        <motion.div layoutId={`project-${project.title}-image`} className='h-full w-full'>
          <Image
            src={project.image}
            height={300}
            width={400}
            alt={project.title + ' Landing Image'}
            className='shrink-0 object-cover h-full w-full transition-all duration-300 group-hover:scale-105 grayscale-100 opacity-50 group-hover:grayscale-0 group-hover:opacity-100'
            priority={false}
          />
        </motion.div>
      </div>

      <div className='p-3 w-full flex flex-col justify-between flex-1'>
        <div>
          <motion.h1 layoutId={project.title} className='font-sans tracking-tight font-semibold'>{project.title}</motion.h1>
          <motion.p layoutId={`project-desc-${project.title}`} className='font-sans text-muted-foreground text-sm line-clamp-2'>{project.description}</motion.p>
        </div>
        <motion.div layoutId={`project-cta-${project.title}`} className='grid grid-cols-2 gap-2 h-max mt-4'>
          <Button size={'small'} variant={"secondary"} asChild className='text-xs group/button rounded-lg'>
            <Link href={project.sourceLink} target='_blank'>
              <FaGithub size={14} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[2px] transition-transform duration-300' />
              Source
            </Link>
          </Button>
          <Button size={'small'} asChild className='text-xs group/button rounded-lg'>
            <Link href={project.liveLink} target='_blank'>
              <IconExternalLink size={14} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[2px] transition-transform duration-300' />
              Live
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export const UpcomingProjectCard = ({ project }: { project: UpcomingProject }) => {
  return (
    <div className='flex flex-col overflow-hidden rounded-2xl w-full h-full border transition-colors duration-200 hover:bg-muted/30 border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] relative group'>
      <div className='p-3 w-full flex flex-col justify-between flex-1'>
        <div>
          <h1 className='font-sans tracking-tight font-semibold'>{project.title}</h1>
          <p className='text-muted-foreground text-sm'>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export const ProjectPopup = ({ project, ref }: { project: Project, ref: React.Ref<HTMLDivElement> }) => {
  return (
    <motion.div
      layoutId={`project-${project.title}`}
      ref={ref}
      className='bg-card text-card-foreground border border-border rounded-2xl max-w-[32rem] overflow-hidden relative z-50'
    >
      <motion.div layoutId={`project-${project.title}-image`}>
        {
          project.demoLink ? (
            <Video src={project.demoLink} />
          ) : (
            <Image
              src={project.image}
              height={300}
              width={400}
              alt={`${project.title}-image`}
              className='w-full h-full object-cover'
            />
          )
        }
      </motion.div>
      <div className='p-3 w-full flex flex-col justify-between flex-1'>
        <div>
          <motion.h1 layoutId={project.title} className='font-sans tracking-tight font-semibold text-xl'>{project.title}</motion.h1>
          <motion.div
            layoutId={`project-desc-${project.title}`}
            initial={{
              filter: "blur(10px)",
            }}
            animate={{
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0
            }}
            className='text-sm text-muted-foreground'
          >
            {project.content}
          </motion.div>
        </div>
        <motion.div layoutId={`project-cta-${project.title}`} className='grid grid-cols-2 gap-2 h-max mt-4'>
          <Button variant={"secondary"} asChild className='group/button rounded-lg'>
            <Link href={project.sourceLink} target='_blank'>
              <FaGithub size={16} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[2px] transition-transform duration-300' />
              Source
            </Link>
          </Button>
          <Button asChild className='group/button rounded-lg'>
            <Link href={project.liveLink} target='_blank'>
              <IconExternalLink size={16} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[2px] transition-transform duration-300' />
              Live
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}