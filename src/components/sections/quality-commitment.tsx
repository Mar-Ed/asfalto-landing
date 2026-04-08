"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Headset, Users, Award, MoveRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function QualityCommitment() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Premium Header Reveal
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      })
      .from(".qual-reveal", {
        y: "110%",
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out"
      })
      .from(".qual-fade", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.8")

      // 2. Staggered Card Reveal
      gsap.from(".qual-card", {
        scale: 0.9,
        opacity: 0,
        y: 40,
        duration: 1.4,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".qual-card-spacer",
          start: "top 85%",
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 lg:py-40 bg-black overflow-hidden group bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/TRABAJANDO_aSFALTO.jpg')" }}
    >
      {/* Dark Overlay for Readability - Softened for better image visibility */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />

      <div className="container relative z-20 mx-auto px-4 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-20 gap-10">
          <div className="space-y-6 max-w-2xl text-center lg:text-left">
            <div className="qual-fade flex items-center justify-center lg:justify-start gap-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary text-[10px] uppercase font-black tracking-[0.4em]">Certificaciones</span>
            </div>
            
            <h2 className="flex flex-col text-4xl lg:text-6xl leading-[1.1] tracking-tighter text-white">
              <span className="block overflow-hidden">
                <span className="qual-reveal block font-light italic text-white/70">Asfaltos con</span>
              </span>
              <span className="block overflow-hidden">
                <span className="qual-reveal block font-black uppercase text-primary">CERTIFICADO DE CALIDAD</span>
              </span>
            </h2>
            
            <p className="qual-fade text-white/60 text-lg lg:text-xl font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              Garantizamos la durabilidad y resistencia de cada m&sup3; bajo los est&aacute;ndares m&aacute;s exigentes del mercado peruano.
            </p>
          </div>

          <div className="qual-fade">
            <Button 
              asChild
              className="bg-primary hover:bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] h-14 px-10 rounded-full transition-all duration-500 hover:scale-110 shadow-[0_0_40px_rgba(242,183,5,0.2)]"
            >
              <Link href="#contacto" className="flex items-center gap-2">
                Cont&aacute;ctanos Hoy <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Action Cards (Geometric Design) */}
        <div className="qual-card-spacer grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          
          {/* Support Circle/Card - Orange Highlight */}
          <div className="qual-card relative group/item">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-primary text-black rounded-[3rem] p-10 lg:p-14 h-full flex flex-col justify-center items-center text-center space-y-6 transition-all duration-700 hover:scale-[1.02] cursor-default border-4 border-transparent hover:border-white/20">
              <div className="w-20 h-20 rounded-full bg-black/10 flex items-center justify-center mb-4">
                <Headset className="w-10 h-10" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black uppercase leading-tight tracking-tighter">
                SOPORTE Y ASESOR&Iacute;A T&Eacute;CNICA
              </h3>
              <p className="text-black/80 font-bold leading-relaxed text-sm lg:text-base">
                Contamos con un &aacute;rea de atenci&oacute;n al cliente donde podr&aacute;s consultarnos en cualquier momento 24/7.
              </p>
            </div>
          </div>

          {/* Personnel Circle/Card - Dark Aesthetic */}
          <div className="qual-card relative group/item">
            <div className="absolute inset-0 bg-white/10 rounded-[3rem] blur-3xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-[#1A1A1A] border border-white/10 text-white rounded-[3rem] p-10 lg:p-14 h-full flex flex-col justify-center items-center text-center space-y-6 transition-all duration-700 hover:scale-[1.02] cursor-default hover:bg-[#222222]">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black uppercase leading-tight tracking-tighter">
                PERSONAL T&Eacute;CNICO <br /> CALIFICADO
              </h3>
              <p className="text-white/60 font-medium leading-relaxed text-sm lg:text-base">
                Contamos con un equipo de l&iacute;deres altamente capacitados, para la atenci&oacute;n de todos los proyectos.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 blur-3xl pointer-events-none" />
    </section>
  )
}
