import React from 'react'
import Link from 'next/link'

const CTA = () => {
  return (
    <div className='my-8 p-8 bg-gray-100 dark:bg-neutral-900 md:rounded-lg shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
      <h1 className='text-3xl font-sans font-bold tracking-tight my-2'>Let&apos;s build something that doesn&apos;t end up in the GitHub graveyard.</h1>
      <p className='text-zinc-700 dark:text-zinc-400 my-1'>Freelance, full-time, or just vibing with an idea—I&apos;m all ears.</p>
      <div className='text-zinc-700 dark:text-zinc-400 flex gap-2'>👉 <CTALink href={'mailto:mohd.saadhaider@gmail.com'} text={'Email me'} /> or <CTALink href={'https://x.com/_MSaaDH'} text={'DM me'} /></div>
    </div>
  )
}

const CTALink = ({ href, text }: { href: string, text: string }) => {
  return (
    <div>
      <Link href={href} className='peer'>
        {text}
      </Link>
      <div className='h-0.5 rounded-4xl w-0 bg-zinc-700 dark:bg-zinc-400 peer-hover:w-full transition-all' />
    </div>
  )
}

export default CTA
