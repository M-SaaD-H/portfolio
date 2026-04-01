"use client";

import { motion } from 'motion/react'
import { childVariant } from './animation-wrapper'
import type { Quote } from '@/data/quotes';

type QuoteProps = {
  quote: Quote
}

const Quote = ({ quote }: QuoteProps) => {
  return (
    <motion.section variants={childVariant} className='mt-12'>
      <div className='rounded-2xl border border-border bg-card px-5 py-4 md:px-6 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
        <blockquote className='mt-3 space-y-3'>
          <p className='text-base md:text-lg leading-relaxed text-foreground font-instrument-serif'>
            &ldquo;{quote.text}&rdquo;
          </p>
          <footer className='text-sm text-muted-foreground text-right font-sans'>
             &mdash; {quote.author}
          </footer>
        </blockquote>
      </div>
    </motion.section>
  )
}

export default Quote
