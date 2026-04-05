"use client"

import { useEffect, useRef } from "react"
import { ShieldCheck, Handshake, Users, Award } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  {
    icon: ShieldCheck,
    percentage: "100%",
    label: "COMPROMISO",
  },
  {
    icon: Handshake,
    percentage: "100%",
    label: "RESPONSABILIDAD",
  },
  {
    icon: Users,
    percentage: "100%",
    label: "GARANTÍA",
  },
  {
    icon: Award,
    percentage: "100%",
    label: "CALIDAD",
  },
]

export function BrandValues() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".value-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="bg-background py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="value-card group relative bg-primary flex flex-col items-center justify-center p-12 text-center transition-all duration-500 hover:z-10 hover:shadow-[0_20px_50px_rgba(242,183,5,0.4)]"
            >
              <div className="mb-6 p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <stat.icon className="w-12 h-12 text-primary-foreground" />
              </div>
              <div className="space-y-1">
                <span className="text-4xl lg:text-5xl font-black text-primary-foreground block tracking-tighter">
                  {stat.percentage}
                </span>
                <span className="text-primary-foreground/80 font-bold tracking-[0.1em] text-sm lg:text-xs">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
