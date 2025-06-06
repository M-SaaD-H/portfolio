'use client'

import React from 'react'
import { IconBrandFramerMotion, IconBrandNextjs, IconBrandReact, IconBrandTailwind } from '@tabler/icons-react'
import { motion } from 'motion/react'

type ItemType = {
  name: string,
  logo?: React.ReactNode
}

export const Tags = ({ items }: { items: ItemType[] }) => {
  return (
    <div className='flex'>
      {
        items.map(i => (
          <TagItem item={i} key={i.name} />
        ))
      }
    </div>
  )
}

const TagItem = ({ item }: { item: ItemType }) => {
  return (
    <motion.div
      layout
      whileHover={'animate'}
      whileTap={'animate'}
      initial={'initial'}
      className='flex cursor-pointer'
    >
      <motion.div
        variants={{
          animate: { paddingRight: 2 }
        }}
        transition={{
          type: 'spring'
        }}
        className='flex items-center'
      >
        {item.logo ?? <div className='h-6 w-6 rounded-full dark:bg-neutral-200 bg-zinc-800' />}
      </motion.div>
      <motion.div
        variants={{
          initial: { width: 0 },
          animate: { width: 'auto' },
          exit: { width: 0 }
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.5
        }}
        className='overflow-hidden whitespace-nowrap font-sans'
      >
        {item.name}
      </motion.div>
    </motion.div>
  )
}