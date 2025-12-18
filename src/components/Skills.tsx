"use client"

import Image from 'next/image';
import React from 'react'
import { AnimationWrapper, childVariant } from './ui/animation-wrapper';
import { motion } from 'motion/react';
import { skills, type Skill } from '@/data/skills';

const Skills = () => {
  return (
    <div className='my-8'>
      <motion.h3 variants={childVariant} className='text-2xl font-bold tracking-tight ml-2'>Skills</motion.h3>
      <motion.div variants={childVariant} className='my-2'>
        <AnimationWrapper className='flex flex-wrap gap-2'>
          {
            skills.map(s => (
              <motion.div variants={childVariant} key={s.name}>
                <Tag tag={s} />
              </motion.div>
            ))
          }
        </AnimationWrapper>
      </motion.div>
    </div>
  )
}

const Tag = ({ tag }: { tag: Skill }) => (
  <div className='flex items-center gap-2 bg-muted border border-border rounded-lg px-2 py-1 transition-colors duration-200 hover:border-foreground/70 select-none'>
    <Image
      src={tag.icon}
      height={18}
      width={18}
      alt={tag.name}
    />
    <span className='text-xs'>{tag.name}</span>
  </div>
)

export default Skills
