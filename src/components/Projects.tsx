'use client'

import React, { useState } from 'react'
import { ProjectCard, ProjectPopup } from './ProjectCards'
import { AnimatePresence, motion } from 'motion/react'
import { childVariant } from './ui/animation-wrapper'
import { projects, type Project } from '@/data/projects'
import { IconChevronRight } from '@tabler/icons-react'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { useIsMobile } from '@/hooks/isMobile'
import Link from 'next/link'
import { socials } from '@/data/socials'

function Projects() {
  const [current, setCurrent] = useState<Project | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));

  const isMobile = useIsMobile();

  const handleProjectCardClick = (e: React.MouseEvent, project: Project) => {
    // don't trigger animations for mobile
    // animations are jittering on mobile, so have to optimize it for mobile before enabling it
    if (isMobile) return;

    // Don't trigger popup if the click target is a button or inside a button/link
    const target = e.target as HTMLElement;
    if (
      target.closest('button') ||
      target.closest('a')
    ) {
      return;
    }

    setCurrent(project);
  }

  return (
    <div id='projects' className='mt-6 mb-4'>
      <AnimatePresence>
        {
          current && (
            <motion.div
              key={current.title}
              className='fixed inset-0 flex justify-center items-center z-50'>
              <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                className='bg-background/50 absolute inset-0'
              />
              <ProjectPopup ref={ref} project={current} />
            </motion.div>
          )
        }
      </AnimatePresence>
      <div className='flex justify-between items-center'>
        <motion.h3 variants={childVariant} className='text-2xl font-bold tracking-tight mb-2'>Projects</motion.h3>
        <motion.div variants={childVariant}>
          <Link href={socials.github.href} target='_blank' className='text-sm text-muted-foreground flex gap-1 items-center mb-1 hover:text-primary transition-colors'>
            View all <IconChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
      <div>
        {
          projects.map(project => (
            <motion.div
              variants={childVariant}
              onClick={(e) => handleProjectCardClick(e, project)}
              key={project.title}
              className='h-full w-full'
            >
              <ProjectCard project={project} />
            </motion.div>
          ))
        }
      </div>

      {/* <motion.h1 variants={childVariant} className='text-2xl ml-2 mt-12 mb-4 font-bold font-sans tracking-tight max-md:text-center text-balance'>Upcoming Projects</motion.h1>
      <div className='grid md:grid-cols-2 gap-4 w-full'>
        {
          upcomingProjects.map(project => (
            <motion.div variants={childVariant} key={project.title}>
              <UpcomingProjectCard project={project} />
            </motion.div>
          ))
        }
      </div> */}
    </div>
  )
}

export default Projects
