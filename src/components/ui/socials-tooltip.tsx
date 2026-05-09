'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState, type FocusEvent } from 'react'

import { socials } from '@/data/socials'

type SocialsTooltipProps = {
  label?: string
}

export const SocialsTooltip = ({ label = 'Socials' }: SocialsTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (wrapperRef.current?.contains(event.relatedTarget as Node)) return
    setIsOpen(false)
  }

  return (
    <div
      ref={wrapperRef}
      className="relative z-[9999] inline-flex px-2"
      onPointerEnter={() => setIsOpen(true)}
      onPointerLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={handleBlur}
    >
      <Link
        href="/socials"
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {label}
      </Link>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{
              opacity: 0,
              y: 6,
              scale: 0.98
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: 6,
              scale: 0.98,
              transition: {
                delay: 0.1
              }
            }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 24,
              duration: 0.5,
            }}
            className="absolute left-1/2 -translate-x-1/2 top-full z-[9999] mt-1 flex min-w-[12rem] items-center justify-center rounded-full border border-border bg-card p-1 shadow-lg shadow-black/10 backdrop-blur-md"
          >
            {Object.entries(socials).map(([key, social]) => {
              const Icon = social.icon
              return (
                <Link
                  href={social.href}
                  key={key}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted/40"
                  aria-label={social.name}
                >
                  <Icon className="size-5" />
                </Link>
              )
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
