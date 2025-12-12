'use client'

import Link from 'next/link'
import React from 'react'
import { Socials } from './ui/socials'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { IconBrandX, IconMail } from '@tabler/icons-react'
import { SiPeerlist } from 'react-icons/si'
import { Highlight } from './ui/highlight'
import { motion } from 'motion/react'
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
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/muhammad-saad-haider-942167317',
    icon: FaLinkedinIn
  },
  {
    name: 'Email',
    link: 'mailto:mohd.saadhaider@gmail.com',
    icon: IconMail
  }
]


const Footer = () => {
  return (
    <motion.footer variants={childVariant} className='w-full flex flex-col gap-2 justify-center items-center mt-16 min-h-[16rem]'>
      <h1 className='font-sans font-bold tracking-tight text-4xl md:text-5xl'>Get in Touch</h1>
      <p className='text-muted-foreground text-center text-balance'>Want to chat? Just shoot me a
        <Link href={'https://x.com/intent/follow?screen_name=_MSaaDH'} target='_blank'>
          <Highlight className='hover:underline underline-offset-2 mx-1'>
            DM
          </Highlight>
        </Link>
        and I&apos;ll respond whenever I can.</p>
      <div className='mt-4'>
        <Socials socials={socials} />
      </div>
    </motion.footer>
  )
}

export default Footer
