import React from 'react'

export const Highlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className='text-foreground'>
      {children}
    </span>
  )
}