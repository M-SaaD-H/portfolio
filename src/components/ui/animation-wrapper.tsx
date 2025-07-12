'use client'

import React from 'react'
import { motion, MotionProps, Variants } from 'motion/react'

export const childVariant: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    filter: 'blur(8px)',
    transition: {
      type: 'tween',
      duration: 0.4
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'tween',
      duration: 0.4,
    }
  }
}

export const parentVariant: Variants = {
  initial: {},
  animate: {
    transition: {
      duration: 0.4,
      staggerChildren: 0.05
    }
  }
}

type AnimationWrapperProps = MotionProps & React.HTMLAttributes<HTMLDivElement>

export const AnimationWrapper = ({ children, ...props }: AnimationWrapperProps) => (
  <motion.div
    variants={parentVariant}
    initial='initial'
    animate='animate'
    {...props}
  >
    {children}
  </motion.div>
)