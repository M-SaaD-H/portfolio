'use client';

import { Navigation } from "./Navigation";
import { motion } from "motion/react";
import { childVariant } from "./ui/animation-wrapper";
import Image from "next/image";
import { DarkModeToggle } from "./ui/theme-toggle";

const Header = () => {
  return (
    <div>
      <div className='flex gap-2 items-center'>
        <motion.div
          variants={childVariant}
          className='overflow-hidden w-max h-max rounded-xl shrink-0 border border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'
        >
          <Image
            src={'/avatar.png'}
            height={36}
            width={36}
            alt='Avatar'
          />
        </motion.div>
        <motion.h1 variants={childVariant} className='text-4xl font-instrument-serif'>
          Saad Haider
        </motion.h1>
      </div>
      <motion.div variants={childVariant} className='my-2'>
        <Navigation />
      </motion.div>
    </div>
  )
}

export default Header