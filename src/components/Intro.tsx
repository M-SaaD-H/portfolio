'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Highlight } from './ui/highlight'
import { childVariant } from './ui/animation-wrapper'
import TextAnimation from './ui/text-animation'
import HeroButton from './ui/hero-button'
import { IconFileFilled } from '@tabler/icons-react'
import { FaGithub } from 'react-icons/fa6'

export interface IHeroButton {
  text: string;
  href: string;
  icon: React.ElementType;
}

const heroButtons: IHeroButton[] = [
  {
    text: 'resume',
    href: 'resume.pdf',
    icon: IconFileFilled
  },
  {
    text: 'github',
    href: 'https://github.com/M-SaaD-H',
    icon: FaGithub
  }
]

const Intro = () => {
  return (
    <div className='my-4'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <motion.div
            variants={childVariant}
            className='overflow-hidden w-max h-max rounded-xl shrink-0 border border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'
          >
            <Image
              src={'/avatar.png'}
              height={75}
              width={75}
              alt='Avatar'
            />
          </motion.div>
          <div>
            <motion.h1 variants={childVariant} className='text-3xl font-instrument-serif mt-1'>
              Saad Haider
            </motion.h1>
            <motion.p variants={childVariant} className='flex gap-1 items-center text-sm text-muted-foreground'>19 • <TextAnimation /></motion.p>
          </div>
        </div>
        {/* Motion div below */}
        <div className='flex flex-col gap-1 mt-1'>
          {
            heroButtons.map(h => (
              <HeroButton
                button={h}
                key={h.text}
              />
            ))
          }
        </div>
      </div>
      <AboutMe />
    </div>
  )
}

const AboutMe = () => (
  <div className='text-muted-foreground text-sm my-4 flex flex-col gap-2 text-justify font-sans'>
    <motion.p variants={childVariant}>
      Hey! I&apos;m <Highlight>Saad</Highlight>, a developer who loves turning <Highlight>ideas into reality</Highlight> through code. Whether it&apos;s building <Highlight>sleek web apps</Highlight>, automating boring stuff, or just tinkering with new tech, I&apos;m always up for it.
    </motion.p>
    <motion.p variants={childVariant}>
      When I&apos;m not <Highlight>coding</Highlight>, you&apos;ll probably find me watching <Highlight>anime</Highlight>, exploring <Highlight>open source projects</Highlight>, or learning <Highlight>something new</Highlight>. I&apos;m always curious and <Highlight>love connecting</Highlight> with people who share the same passion for tech and creativity.
    </motion.p>
  </div>
)

export default Intro
