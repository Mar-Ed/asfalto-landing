"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Globe, Truck, ShoppingCart, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/sections/product-cta"
import { RelatedProducts } from "@/components/sections/related-products"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export interface MantoData {
  id: number
  themeColor?: string 
  hero: {
    badge: string
    badgeIcon: any
    title: string
    highlight: string
    description: string
    bgImage: string
  }
  intro: {
    title: string
    text: string
    image: string
    note: string
    specs: string
  }
  features: {
    title: string
    cards: Array<{ title: string; desc: string; icon: any }>
  }
  applications: {
    title: string
    intro: string
    items: string[]
    images: string[]
  }
}

export function MantoTemplate({ data }: { data: MantoData }) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const waUrl = `https://wa.me/51901080254?text=Solicito%20informaci%C3%B3n%20sobre%20el%20${encodeURIComponent(data.hero.title)}%20${encodeURIComponent(data.hero.highlight)}`

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".m-hero-text > *", {
        y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: "power4.out", delay: 0.2
      })

      const reveals = gsap.utils.toArray(".m-reveal")
      reveals.forEach((el: any) => {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative bg-[#0f0f0f] min-h-screen text-foreground" ref={containerRef}>
      
      {/* 1. Technical Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image src={data.hero.bgImage} alt="Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-5xl m-hero-text">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8 backdrop-blur-md">
              <data.hero.badgeIcon className="w-4 h-4" />
              {data.hero.badge}
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.8] text-white">
              {data.hero.title}<br />
              <span className="text-primary italic">
                {data.hero.highlight}
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/60 leading-relaxed mb-12 max-w-2xl font-medium">
              {data.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-20 px-12 text-lg font-black uppercase tracking-widest group shadow-2xl shadow-primary/40">
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-6 h-6 mr-3" />
                  Cotizar Proyecto
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 h-20 px-12 text-lg font-black uppercase tracking-widest text-white backdrop-blur-sm">
                <a href="#especificaciones">
                  Detalles Técnicos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro / Specs Section */}
      <section className="py-24 lg:py-40 bg-[#0f0f0f]" id="especificaciones">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-12 space-y-12 m-reveal text-center relative">
              <div className="space-y-6 max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-8xl font-black uppercase text-white tracking-tighter leading-[0.9]">{data.intro.title}</h2>
                <div className="w-24 h-2 bg-primary mx-auto" />
                <p className="text-xl lg:text-2xl text-white/60 leading-relaxed font-medium">
                  {data.intro.text}
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start pt-12">
                <div className="lg:col-span-7 relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
                  <Image src={data.intro.image} alt={data.hero.title} fill className="object-cover" />
                </div>
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-xl text-left">
                    <p className="text-white/80 italic text-xl leading-relaxed mb-6">"{data.intro.note}"</p>
                    <p className="text-sm uppercase tracking-widest font-black text-primary">Compromiso Tecnológico</p>
                  </div>
                  <div className="p-10 rounded-[2.5rem] bg-primary border border-primary/20 text-left">
                    <p className="text-[#0a0a0a] text-xs font-black uppercase tracking-widest mb-2">Ficha de Suministro</p>
                    <p className="text-[#0a0a0a] text-lg font-black leading-tight uppercase tracking-tighter">{data.intro.specs}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section (WITH FIXED BACKGROUND) */}
      <section 
        className="relative py-24 lg:py-32 bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/asfaltos/FONDOS_ASFALTOS/ASFALTOS_FONDOS4.png')" }}
      >
        {/* Lighter overlays for visibility */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-0" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mb-20 m-reveal text-center">
            <h2 className="text-4xl lg:text-8xl font-black uppercase text-white tracking-tighter">
              ATRIBUTOS <span className="text-primary">ÚNICOS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.features.cards.map((card, idx) => (
              <div key={idx} className="p-12 rounded-[2.5rem] bg-black/60 backdrop-blur-xl border border-white/10 hover:border-primary transition-all m-reveal flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all">
                  <card.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-4 leading-none">{card.title}</h3>
                <p className="text-white/50 text-sm font-medium leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Applications Section (Tech Look) */}
      <section className="py-24 lg:py-40 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8 m-reveal">
              <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none">
                CAMPO DE <br/><span className="text-primary italic">APLICACIÓN</span>
              </h2>
              <p className="text-white/60 text-xl font-medium max-w-lg">{data.applications.intro}</p>
              
              <div className="grid gap-4">
                {data.applications.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 p-7 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-primary/10 hover:border-primary/20 transition-all group">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                    <span className="font-bold text-white/90 text-lg uppercase tracking-tight group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 m-reveal">
               <div className="aspect-[3/4] relative rounded-[3rem] overflow-hidden border border-white/5 mt-12 shadow-2xl">
                 <Image src={data.applications.images[0]} alt="Instalación" fill className="object-cover" />
               </div>
               <div className="aspect-[3/4] relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                 <Image src={data.applications.images[1]} alt="Manto Técnico" fill className="object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. Professional Experts Section (WITH PARALLAX BACKGROUND - MOVED HERE) */}
      <section 
        className="relative py-24 bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/TRABAJANDO_aSFALTO.jpg')" }}
      >
        {/* Lighter Overlays for better image visibility */}
        <div className="absolute inset-0 bg-black/45 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-0" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Variedad en Marcas", icon: Globe, desc: "Stock permanente de fabricantes líderes." },
              { title: "Envíos a todo el Perú", icon: Truck, desc: "Logística especializada a nivel nacional." },
              { title: "Stock Permanente", icon: ShoppingCart, desc: "Disponibilidad inmediata para su obra." },
              { title: "Asesoría Personalizada", icon: UserCheck, desc: "Soporte técnico por ingenieros expertos." }
            ].map((item, idx) => (
              <div key={idx} className="bg-black/60 backdrop-blur-md p-10 rounded-3xl border border-white/10 flex flex-col items-center text-center m-reveal group hover:bg-black/80 transition-all duration-500">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-white font-black text-xl uppercase tracking-tighter mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. High Contrast CTA (COPYING USER DESIGN) */}
      <section className="relative py-24 bg-primary overflow-hidden m-reveal">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-7xl font-black uppercase text-[#0a0a0a] mb-6 tracking-tighter leading-none">
            Diseño y Protección en la Cima
          </h2>
          <p className="text-[#0a0a0a]/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-bold uppercase tracking-tight">
            Contacte con nuestros expertos para el cálculo preciso de suministros para su techado.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-[#0a0a0a] hover:bg-white/90 h-16 px-10 text-sm font-black uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-5 h-5 mr-3 text-[#0a0a0a]" />
              SOLICITAR COTIZACIÓN POR WHATSAPP
            </a>
          </Button>
        </div>
      </section>

      <div className="bg-[#0f0f0f]">
        <RelatedProducts currentProductId={data.id} />
      </div>
    </div>
  )
}
