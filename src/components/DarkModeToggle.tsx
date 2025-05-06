'use client'

import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    console.log(theme);
  }, [])
  
  return (
    <button
      className='relative bg-gray-100 dark:bg-neutral-900 h-[2.4rem] w-[2.4rem] rounded-full m-4'
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log('Theme switched')
      }}
    >
      <IconMoon className='rotate-0 scale-100 dark:rotate-90 dark:scale-0 transition-all duration-200 absolute left-1/2 top-1/2 -translate-1/2' />
      <IconSun className='rotate-90 scale-0 dark:rotate-0 dark:scale-90 transition-all duration-200 absolute left-1/2 top-1/2 -translate-1/2' />
    </button>
  )
}

export default DarkModeToggle
