import React from 'react'
import Link from 'next/link';
import { IconType } from 'react-icons';

type social = {
  name: string;
  href: string;
  icon: IconType;
}

export const Socials = ({ socials } : { socials: social[] }) => {
  return (
    <div className='flex flex-wrap gap-1.5 my-2'>
      {
        socials.map(s => (
          <Link href={s.href} key={s.name} target='_blank' className='rounded-lg border border-border p-2 transition-colors duration-200 hover:bg-muted/40'>
            <span>{<s.icon className='size-5' />}</span>
          </Link>
        ))
      }
    </div>
  )
}
