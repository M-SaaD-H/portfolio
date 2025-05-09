import React from 'react'
import { Project } from './Projects'
import Link from 'next/link'

const Card = ({ project }: { project: Project }) => {
  return (
    <div className='flex flex-col justify-between p-6 rounded-lg border dark:border-neutral-700 border-neutral-300 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] relative'>
      <div>
        <h1 className='text-2xl font-sans tracking-tight font-semibold my-4'>{project.title}</h1>
        <p className='text-zinc-700 dark:text-zinc-300 mb-8'>{project.description}</p>
      </div>
      <div className='flex gap-2 flex-wrap'>
        {
          project.tags.map(tag => (
            <div key={tag} className='text-xs italic text-neutral-700 px-2 py-1 bg-gray-100 dark:text-white dark:bg-transparent dark:border dark:border-gray-800 rounded-md'>
              {tag}
            </div>
          ))
        }
      </div>
      <Link href={project.link} target={'_blank'} className='absolute inset-0' />
    </div>
  )
}

export default Card
