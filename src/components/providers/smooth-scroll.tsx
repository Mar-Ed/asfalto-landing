"use client"

import { useEffect, ReactNode } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // 1. Refined Lenis for natural feeling smoothness
    const lenis = new Lenis({
      duration: 1.0, // Reduced for better responsiveness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1, // Standard speed
      touchMultiplier: 2,
      infinite: false,
    })

    function update(time: number) {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0) // Crucial for GSAP + Lenis sync

    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
    }
  }, [])

  return <>{children}</>
}
