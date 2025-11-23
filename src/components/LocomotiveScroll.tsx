"use client"

import { useEffect, useRef } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

interface LocomotiveScrollProps {
  children: React.ReactNode
}

export default function LocomotiveScrollWrapper({ children }: LocomotiveScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    locomotiveScrollRef.current = new LocomotiveScroll({
      lenisOptions: {
        smoothWheel: true,
        syncTouch: true,
      },
      autoStart: true,
      autoResize: true,
    })

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy()
      }
    }
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}

