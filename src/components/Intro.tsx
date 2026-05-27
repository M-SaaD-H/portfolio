'use client'

import { motion } from 'motion/react'
import { childVariant } from './ui/animation-wrapper'

const Intro = () => (
  <div className='text-sm my-4 flex flex-col gap-2 text-justify font-sans'>
    <motion.p variants={childVariant}>
      I&apos;m a developer focused on building backend systems, developer tools, and performance-focused software.
    </motion.p>
    <motion.p variants={childVariant}>
      I write about the things I build, the engineering decisions behind them, and the lessons that come from breaking and rebuilding systems. I also contribute to open source projects that align with my interests and curiosity.
    </motion.p>
  </div>
)

export default Intro
