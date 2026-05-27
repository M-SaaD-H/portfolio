import React from 'react'
import { cn } from '@/lib/utils'

export const Highlight = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <span
      className={cn(
        'text-foreground',
        className
      )}
    >
      {children}
    </span>
  )
}