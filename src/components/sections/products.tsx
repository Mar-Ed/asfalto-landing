"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const products = [
  {
    id: 1,
    name: "Asfalto Líquido RC-250",
    category: "Asfaltos Líquidos",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop",
    description: "Asfalto de curado rápido ideal para imprimación y tratamientos superficiales.",
    specs: {
      "Viscosidad": "250-500 cSt",
      "Punto inflamación": "> 27°C",
      "Solvente": "Nafta",
    },
  },
  {
    id: 2,
    name: "Mezcla Asfáltica Convencional",
    category: "Mezclas en Caliente",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=2036&auto=format&fit=crop",
    description: "Mezcla asfáltica en caliente de alta densidad para carpetas de rodadura.",
    specs: {
      "Estabilidad": "> 815 kg",
      "Flujo": "2-4 mm",
      "Vacíos": "3-5%",
    },
  },
  {
    id: 3,
    name: "Emulsión Catiónica CRS-1",
    category: "Emulsiones",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
    description: "Emulsión de rotura rápida para tratamientos superficiales y riegos de liga.",
    specs: {
      "Residuo": "> 60%",
      "Viscosidad": "20-100 SSF",
      "Carga": "Catiónica",
    },
  },
  {
    id: 4,
    name: "PEN 60/70",
    category: "Cementos Asfálticos",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
    description: "Cemento asfáltico de penetración 60-70 para mezclas de alto tráfico.",
    specs: {
      "Penetración": "60-70 dmm",
      "Punto abland.": "> 48°C",
      "Ductilidad": "> 100 cm",
    },
  },
]

// Duplicate products for seamless loop
const allProducts = [...products, ...products, ...products]

export function Products() {
  const [hoveredId, setHoveredId] = useState<number | string | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Animation (Consistent with Apple Style)
      gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      })
      .from(".prod-reveal", { y: "110%", duration: 1, stagger: 0.1, ease: "expo.out" })
      .from(".prod-fade", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" }, "-=0.6")

      // 2. Infinite Horizontal Loop
      const scroller = scrollerRef.current
      if (scroller) {
        const totalWidth = scroller.scrollWidth / 3 // Width of one set
        
        timelineRef.current = gsap.timeline({
          repeat: -1,
          defaults: { ease: "none" }
        })
        .to(scroller, {
          x: -totalWidth,
          duration: 35, // Adjust speed for premium feel
        })
      }
    })

    return () => ctx.revert()
  }, [])

  const handleMouseEnter = (id: number | string) => {
    setHoveredId(id)
    timelineRef.current?.pause() // Pause carousel on hover
  }

  const handleMouseLeave = () => {
    setHoveredId(null)
    timelineRef.current?.play() // Resume carousel
  }

  return (
    <section id="productos" className="py-20 lg:py-32 bg-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="prod-fade flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase">Catálogo</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="flex flex-col text-4xl lg:text-6xl leading-[1.1] tracking-tighter">
            <span className="block overflow-hidden"><span className="prod-reveal block font-light italic text-foreground/80 leading-tight">Gama Premium de</span></span>
            <span className="block overflow-hidden"><span className="prod-reveal block font-black uppercase text-foreground">PRODUCTOS ASFÁLTICOS</span></span>
          </h2>
        </div>
      </div>

      {/* Infinite Horizontal Scroller */}
      <div className="relative w-full">
        <div 
          ref={scrollerRef}
          className="flex gap-6 px-4 w-fit"
          style={{ willChange: "transform" }}
        >
          {allProducts.map((p, idx) => (
            <div 
              key={`${p.id}-${idx}`}
              onMouseEnter={() => handleMouseEnter(`${p.id}-${idx}`)}
              onMouseLeave={handleMouseLeave}
              className="w-[300px] lg:w-[400px] shrink-0 group bg-card/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-3xl hover:shadow-black/40"
            >
              {/* Product Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 py-1 px-3 bg-primary text-[10px] font-black uppercase tracking-widest text-primary-foreground rounded-full">
                  {p.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="font-serif text-xl lg:text-2xl font-black text-foreground mb-3 leading-tight tracking-tight">{p.name}</h3>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed line-clamp-2">{p.description}</p>
                </div>

                {/* Quick Specs */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(p.specs).map(([key, val]) => (
                      <div key={key}>
                        <p className="text-[10px] uppercase font-black tracking-widest text-muted-foreground mb-1">{key}</p>
                        <p className="text-xs font-bold text-foreground">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  asChild
                  className="w-full bg-white/5 border border-white/10 text-white/90 hover:bg-primary hover:text-primary-foreground font-black uppercase tracking-widest text-[10px] h-12 transition-all duration-500 rounded-xl shadow-inner shadow-white/5"
                >
                  <Link href="#contacto">Solicitar Cotización</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Vignettes */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 lg:w-64 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 lg:w-64 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  )
}
