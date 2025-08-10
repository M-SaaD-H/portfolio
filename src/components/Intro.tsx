'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { IconBrandX } from '@tabler/icons-react'
import { Socials } from './ui/socials'
import { FaGithub } from 'react-icons/fa6'
import { SiPeerlist } from 'react-icons/si'
import { Highlight } from './ui/highlight'
import { childVariant } from './ui/animation-wrapper'

const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/M-SaaD-H',
    icon: FaGithub
  },
  {
    name: 'X',
    link: 'https://x.com/_MSaaDH',
    icon: IconBrandX
  },
  {
    name: 'Peerlist',
    link: 'https://peerlist.io/m_saad_h',
    icon: SiPeerlist
  }
]

const Intro = () => {
  return (
    <div className='my-4'>
      <div className='flex gap-4'>
        <motion.div
          variants={childVariant}
          className='overflow-hidden rounded-full w-max h-max shrink-0 border border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'
        >
          <Image
            src={'/avatar.png'}
            height={120}
            width={120}
            alt='Image'
            className='max-md:size-[6rem]'
          />
        </motion.div>
        <div>
          <motion.h1 variants={childVariant} className='text-4xl md:text-5xl font-sans font-bold tracking-tight'>
            Saad
          </motion.h1>
          <motion.p variants={childVariant} className='text-muted-foreground text-sm'>Someone who loves building cool stuffs and Anime.</motion.p>
          <motion.div variants={childVariant}><Socials socials={socials} /></motion.div>
        </div>
      </div>
      <AboutMe />
    </div>
  )
}

const AboutMe = () => (
  <div className='text-muted-foreground text-sm my-4 flex flex-col gap-2 text-justify'>
    <motion.p variants={childVariant}>
      Hey! I&apos;m <Highlight>Saad</Highlight>, a developer who loves turning <Highlight>ideas into reality</Highlight> through code. Whether it&apos;s building <Highlight>sleek web apps</Highlight>, automating boring stuff, or just tinkering with new tech, I&apos;m always up for it.
    </motion.p>
    <motion.p variants={childVariant}>
      When I&apos;m not <Highlight>coding</Highlight>, you&apos;ll probably find me watching <Highlight>anime</Highlight>, exploring <Highlight>open source projects</Highlight>, or learning <Highlight>something new</Highlight>. I&apos;m always curious and <Highlight>love connecting</Highlight> with people who share the same passion for tech and creativity.
    </motion.p>
  </div>
)

export default Intro
