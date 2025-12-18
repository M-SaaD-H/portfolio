import React, { useState } from 'react'
import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { IHeroButton } from '../Intro'

const HeroButton = ({ button }: { button: IHeroButton }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={button.href}
      target='_blank'
      className='flex items-center gap-1 text-sm font-sans text-muted-foreground group'
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <motion.span
        initial={false}
        animate={{
          x: isHovered ? '-3px' : 0,
          scale: isHovered ? 0 : 1
        }}
      >
        <button.icon size={14} />
      </motion.span>
      <span className="relative flex flex-col items-start">
        <motion.p
          initial={false}
          animate={{
            x: isHovered ? '-4px' : 0
          }}
        >
          {button.name.toLowerCase()}
          <motion.span
            className="block h-px bg-muted-foreground absolute left-0 -bottom-[0.1rem] rounded"
            initial={{ width: 0 }}
            animate={{
              width: isHovered ? '100%' : 0
            }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ originX: 0 }}
          />
        </motion.p>
      </span>
      <motion.span
        initial={{
          scale: 0,
          x: '2px'
        }}
        animate={{
          x: isHovered ? '-6px' : '2px',
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? -45 : 0
        }}
      >
        <IconArrowRight size={14} />
      </motion.span>
    </Link>
  )
}

export default HeroButton