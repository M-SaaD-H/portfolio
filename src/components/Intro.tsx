'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Highlight } from './ui/highlight'
import { childVariant } from './ui/animation-wrapper'
import TextAnimation from './ui/text-animation'
import HeroButton from './ui/hero-button'
import { IconFileFilled } from '@tabler/icons-react'
import { socials } from '@/data/socials'
import { IconType } from 'react-icons'

export interface IHeroButton {
  name: string;
  href: string;
  icon: IconType;
}

const Intro = () => (
  <div className='text-primary text-sm my-4 flex flex-col gap-2 text-justify font-sans'>
    <motion.p variants={childVariant} className='-z-10'>
      I&apos;m a developer who enjoys building backend systems, developer tools, and performance-focused software.
    </motion.p>
    <motion.p variants={childVariant} className='-z-10'>
      I write about the things I build, the engineering decisions behind them, and the lessons that come from breaking and rebuilding systems. I also contribute to open source projects that align with my interests and curiosity.
    </motion.p>
  </div>
)

export default Intro
