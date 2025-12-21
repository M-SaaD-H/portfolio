'use client'

import React, { useState } from 'react'
import { ProjectCard, ProjectPopup, UpcomingProjectCard } from './ProjectCards'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from './ui/button'
import { childVariant } from './ui/animation-wrapper'
import { projects, type Project, upcomingProjects } from '@/data/projects'
import { IconChevronDown } from '@tabler/icons-react'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { useIsMobile } from '@/hooks/isMobile'

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

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
    <div id='projects' className='mt-12'>
      <AnimatePresence>
        {
          current && (
            <motion.div
              initial={{
                backdropFilter: "blur(0px)",
                opacity: 0,
              }}
              animate={{
                backdropFilter: "blur(10px)",
                opacity: 1,
              }}
              exit={{
                backdropFilter: "blur(0px)",
                opacity: 0,
              }}
              key={current.title}
              className='bg-background/50 fixed inset-0 flex justify-center items-center z-10'
            >
              <ProjectPopup ref={ref} project={current} />
            </motion.div>
          )
        }
      </AnimatePresence>
      <motion.h3 variants={childVariant} className='text-2xl font-bold tracking-tight mb-4 ml-2'>Projects</motion.h3>
      <div className='grid gap-3 md:grid-cols-2 md:auto-rows-[20rem]'>
        {
          visibleProjects.map(project => (
            <motion.div
              variants={childVariant}
              layoutId={`project-${project.title}`}
              onClick={(e) => handleProjectCardClick(e, project)}
              key={project.title}
              className='h-full w-full'
            >
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

      <motion.h1 variants={childVariant} className='text-2xl ml-2 mt-12 mb-4 font-bold font-sans tracking-tight max-md:text-center text-balance'>Upcoming Projects</motion.h1>
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
