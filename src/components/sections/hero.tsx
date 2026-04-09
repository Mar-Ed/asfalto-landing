"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Reveal - UX/UI Engineer Style
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } })

      tl.from(".reveal-text", {
        y: "110%",
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
      })
      .from(".fade-in", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
      }, "-=1")
      .from(imageRef.current, {
        scale: 1.25,
        opacity: 0,
        duration: 2.5,
        ease: "expo.inOut",
      }, "-=2")

      // 2. Subtle Cinematic Movement (Non-blocking)
      // Just a very light image movement that doesn't feel like pinning
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1, // Add lag for more fluid feel
        },
        y: 80,
        ease: "none"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen lg:h-screen flex flex-col bg-background overflow-hidden"
    >
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="flex-1 flex items-center px-6 lg:px-24 pt-28 lg:pt-16">
          <div className="max-w-3xl hero-content space-y-10 py-12 lg:py-0">
            {/* Header / Eyebrow */}
            <div className="space-y-6 overflow-hidden">
              <div className="fade-in flex items-center gap-4">
                <div className="w-12 h-[2px] bg-primary" />
                <span className="text-primary font-bold tracking-[0.3em] text-[10px] sm:text-xs">
                  EXPERIENCIA Y COMPROMISO A TUS SERVICIOS
                </span>
              </div>

              {/* Main Heading UX/UI Refined */}
              <h1 className="flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.1] tracking-tight">
                <span className="block overflow-hidden">
                  <span className="reveal-text block font-light text-foreground/90 italic">
                    Venta de
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-text block font-black text-foreground -mt-1 uppercase tracking-tighter">
                    ASFALTO DE CALIDAD
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="reveal-text block font-black text-foreground -mt-2 uppercase tracking-tighter">
                    EN TODO EL PERÚ.
                  </span>
                </span>
              </h1>
            </div>
            
            <div className="space-y-8 fade-in">
              <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed font-medium">
                Proveedores líderes de <span className="text-foreground">asfalto líquido y mezclas en caliente</span> con certificación de calidad. 
                Distribución nacional y asesoría técnica especializada.
              </p>

              <div className="flex flex-wrap gap-6">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-primary text-primary-foreground font-black px-12 py-10 text-lg lg:text-xl rounded-none transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/10"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center gap-3 tracking-wider">
                    COTIZAR PROYECTO <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div 
          className="lg:w-1/2 relative min-h-[400px] sm:min-h-[500px] lg:min-h-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent z-10 lg:block hidden" />
          <div ref={imageRef} className="absolute inset-0">
            <Image
              src="/asfalto_hero1.png"
              alt="Venta de asfalto premium"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-background/30 mix-blend-multiply pointer-events-none" />
          
          {/* Subtle UI Overlay Element */}
          <div className="absolute bottom-12 right-12 z-20 hidden xl:block animate-pulse">
            <div className="bg-background/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-white text-xs font-bold tracking-widest uppercase">OBRA EN EJECUCIÓN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
