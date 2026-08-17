'use client'

import { motion } from 'motion/react'
import { childVariant } from './ui/animation-wrapper'

const Intro = () => (
  <div className='text-sm my-4 flex flex-col gap-2 text-justify font-sans'>
    <motion.p variants={childVariant}>
      I'm a developer driven by curiosity. I build things, break things, and occasionally write about them.
    </motion.p>
  </div>
)

export default Intro
