import Link from 'next/link'
import React from 'react'
import { Socials } from './ui/socials'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { IconBrandX, IconMail } from '@tabler/icons-react'
import { SiPeerlist } from 'react-icons/si'

type Link = {
  name: string,
  link: string
}

const primaryLinks: Link[] = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Dashboard',
    link: '/#dashboard'
  },
  {
    name: 'Projects',
    link: '/#projects'
  },
  {
    name: 'Socials',
    link: '/#socials'
  }
]

const socialLinks: Link[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/M-SaaD-H'
  },
  {
    name: 'X',
    link: 'https://x.com/_MSaaDH'
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/muhammad-saad-haider-942167317'
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/mohd.saadhaider'
  }
]

const projectLinks: Link[] = [
  {
    name: 'FinTrack',
    link: 'https://fintrack-flax-beta.vercel.app'
  },
  {
    name: 'VidChat',
    link: 'https://vid-chat-peach.vercel.app'
  },
  {
    name: 'Sputify',
    link: 'https://github.com/M-SaaD-H/Sputify'
  },
  {
    name: 'Zootube',
    link: 'https://github.com/M-SaaD-H/Zootube',
  }
]

// const Footer = () => {
//   return (
//     <div className='mt-10'>
//       <hr className='text-gray-300 dark:text-neutral-700 my-8' />
//       <div className='flex flex-col md:flex-row max-md:ml-12 max-md:gap-12 justify-between max-w-lg mx-auto my-12'>
//         <ul className='flex flex-col space-y-4'>
//           {
//             primaryLinks.map(l => (
//               <Link key={l.name} href={l.link} className='text-gray-500 hover:text-gray-600'>
//                 <li>{l.name}</li>
//               </Link>
//             ))
//           }
//         </ul>
//         <ul className='flex flex-col space-y-4' id='socials'>
//           {
//             socialLinks.map(l => (
//               <Link key={l.name} href={l.link} className='text-gray-500 hover:text-gray-600'>
//                 <li>{l.name}</li>
//               </Link>
//             ))
//           }
//         </ul>
//         <ul className='flex flex-col space-y-4'>
//           {
//             projectLinks.map(l => (
//               <Link key={l.name} href={l.link} className='text-gray-500 hover:text-gray-600'>
//                 <li>{l.name}</li>
//               </Link>
//             ))
//           }
//         </ul>
//       </div>
//     </div>
//   )
// }

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
    <footer className='w-full flex flex-col gap-2 justify-center items-center min-h-[20rem]'>
      <h1 className='font-sans font-bold tracking-tight text-4xl md:text-5xl'>Get in Touch</h1>
      <p className='text-muted-foreground text-center text-balance'>Want to chat? Just shoot me a <Link href={'https://x.com/intent/follow?screen_name=_MSaaDH'} target='_blank' className='text-blue-400 hover:underline'>DM</Link> and I'll respond whenever I can.</p>
      <div className='my-4'>
        <Socials socials={socials} />
      </div>
    </footer>
  )
}

export default Footer
