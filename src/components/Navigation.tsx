'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react';
import { IconMenu2, IconX } from '@tabler/icons-react';

const items = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/#projects',
  },
  {
    name: 'Dashboard',
    link: '/dashboard',
  },
  {
    name: 'Socials',
    link: '/#socials',
  }
]

function Navigation() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavToggle = () => setIsOpen(prev => !prev);

  return (
    <div className='p-8'>
      <div
        onMouseLeave={() => setHoveredIdx(null)}
        className='hidden flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2 h-max'
      >
        {
          items.map((item, idx) => (
            <AnimatePresence
              key={`link-${idx}`}
            >
              <motion.div
                onMouseEnter={() => setHoveredIdx(idx)}
                className='relative px-4 py-2 text-neutral-600 dark:text-neutral-300'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15, ease: 'easeInOut' } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              >
                <Link
                  href={item.link}
                >
                  {
                    hoveredIdx === idx && (
                      <motion.div
                        layoutId="hovered"
                        className="absolute inset-0 h-full w-full rounded-lg bg-gray-100 dark:bg-zinc-900"
                      />
                    )
                  }
                  <span className="relative z-20">{item.name}</span>
                </Link>
              </motion.div>
            </AnimatePresence>
          ))
        }
      </div>
      <div className='lg:hidden m-2 p-2 w-max rounded-lg ml-auto bg-gray-100 dark:bg-neutral-900'>
        <MobileNavToggle isOpen={isOpen} onClick={handleMobileNavToggle} />
        <AnimatePresence>
          {
            isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                transition={{ duration: 0.3, type: 'tween' }}
                className='absolute inset-x-0 mx-auto top-24 z-50 flex w-[23rem] flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950'
              >
                {
                  items.map((item, idx) => (
                    <Link
                      key={`link-${idx}`}
                      href={item.link}
                      className='p-2 border-b-2 border-gray-100 dark:border-neutral-900 w-full'
                      onClick={() => setTimeout(() => setIsOpen(prev => !prev), 300)}
                    >
                      {item.name}
                    </Link>
                  ))
                }
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  );
};

const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

export default Navigation
