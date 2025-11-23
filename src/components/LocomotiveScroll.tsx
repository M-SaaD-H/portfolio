"use client"

import { useEffect, useRef, useState } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

interface LocomotiveScrollProps {
  children: React.ReactNode
}

// Detect if device is mobile
const isMobile = () => {
  if (typeof window === "undefined") return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768
}

export default function LocomotiveScrollWrapper({ children }: LocomotiveScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null)
  const [isMobileDevice, setIsMobileDevice] = useState(false)

  useEffect(() => {
    setIsMobileDevice(isMobile())
  }, [])

  useEffect(() => {
    if (!scrollRef.current) return

    // On mobile, use native scroll for better performance
    // Locomotive Scroll will still work for scroll-triggered animations
    if (isMobileDevice) {
      // Use minimal configuration on mobile - native scroll handles the actual scrolling
      locomotiveScrollRef.current = new LocomotiveScroll({
        lenisOptions: {
          smoothWheel: false, // Use native scroll on mobile
          syncTouch: false, // Disable touch sync to prevent lag
        },
        autoStart: true,
        autoResize: true,
      })
    } else {
      // Desktop: full smooth scrolling experience
      locomotiveScrollRef.current = new LocomotiveScroll({
        lenisOptions: {
          smoothWheel: true,
          syncTouch: false,
          touchMultiplier: 1.2,
          wheelMultiplier: 1,
          duration: 1.2,
          lerp: 0.1,
        },
        autoStart: true,
        autoResize: true,
      })
    }

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy()
      }
    }
  }, [isMobileDevice])

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}

