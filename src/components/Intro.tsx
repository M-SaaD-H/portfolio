'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { IconBrandX } from '@tabler/icons-react'
import { Socials } from './ui/socials'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { SiPeerlist } from 'react-icons/si'
import { Highlight } from './ui/highlight'

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
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/muhammad-saad-haider-942167317',
    icon: FaLinkedinIn
  }
]

const Intro = () => {
  const childVariant = {
    hidden: {
      opacity: 0.5,
      y: 20,
      filter: 'blur(10px)',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  }

  const parentVariant = {
    hidden: {},
    show: {
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  }

  return (
    <motion.div
      initial={'hidden'}
      animate={'show'}
      variants={parentVariant}
      className='my-4'
    >
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
          />
        </motion.div>
        <motion.div
          variants={childVariant}
        >
          <h1 className='text-4xl md:text-5xl font-sans font-bold tracking-tight my-2'>
            Saad
          </h1>
          <p className='text-muted-foreground text-sm'>Someone who loves building cool stuffs and Anime.</p>
          <Socials socials={socials} />
        </motion.div>
      </div>
      <AboutMe />
    </motion.div>
  )
}

const AboutMe = () => (
  <div className='text-muted-foreground text-sm my-4 flex flex-col gap-2 text-justify'>
    <p>
      Hey! I&apos;m <Highlight>Saad</Highlight>, a developer who loves turning <Highlight>ideas into reality</Highlight> through code. Whether it&apos;s building <Highlight>sleek web apps</Highlight>, automating boring stuff, or just tinkering with new tech, I&apos;m always up for a challenge.
    </p>
    <p>
      When I&apos;m not <Highlight>coding</Highlight>, you&apos;ll probably find me watching <Highlight>anime</Highlight>, exploring <Highlight>open source projects</Highlight>, or learning <Highlight>something new</Highlight>. I believe in writing clean, <Highlight>maintainable</Highlight> code and enjoy <Highlight>collaborating</Highlight> with others to create <Highlight>awesome things</Highlight>.
    </p>
  </div>
)

export default Intro
