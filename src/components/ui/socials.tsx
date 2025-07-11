import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';

type social = {
  name: string;
  link: string;
  icon: IconType;
}

export const Socials = ({ socials } : { socials: social[] }) => {
  return (
    <div className='flex flex-wrap gap-1.5 my-2'>
      {
        socials.map(s => (
          <Link href={s.link} key={s.name} target='_blank' className='rounded-lg border border-border p-2 transition-colors duration-200 hover:bg-muted/40'>
            <span>{<s.icon className='size-5' />}</span>
          </Link>
        ))
      }
    </div>
  )
}
