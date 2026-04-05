"use client"

import { useEffect, useRef } from "react"
import { Fuel, Construction, Truck, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    icon: Fuel,
    title: "Venta de Asfalto",
    description: "Mezclas asfálticas en caliente y frío, RC-250, PEN 60/70 y más. Productos certificados según normas MTC.",
    features: ["Mezclas en caliente", "Mezclas en frío", "RC-250 Premium", "PEN 60/70"],
  },
  {
    icon: Construction,
    title: "Ejecución de Obras",
    description: "Pavimentación de carreteras, bacheo profesional y señalización vial. Proyectos llave en mano.",
    features: ["Pavimentación vial", "Bacheo profesional", "Señalización", "Mantenimiento"],
  },
  {
    icon: Truck,
    title: "Soporte Logístico",
    description: "Maquinaria pesada especializada y transporte de materiales a nivel nacional.",
    features: ["Maquinaria pesada", "Transporte especializado", "Distribución nacional", "Asistencia técnica"],
  },
]

export function Services() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })

      // Header Premium Reveal
      tl.from(".serv-reveal", {
        y: "110%",
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out"
      })
      .from(".serv-fade", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.8")
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header with Animation */}
        <div ref={headerRef} className="text-center max-w-4xl mx-auto mb-20 space-y-8">
          <div className="serv-fade flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">
              Servicios Técnicos
            </span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          
          <h2 className="flex flex-col text-4xl sm:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight">
            <span className="block overflow-hidden">
              <span className="serv-reveal block font-light text-foreground/90 italic">
                Soluciones integrales en
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="serv-reveal block font-black text-foreground -mt-1 uppercase tracking-tighter">
                INFRAESTRUCTURA VIAL
              </span>
            </span>
          </h2>
          
          <p className="serv-fade text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Ofrecemos un portafolio completo de servicios para cubrir todas las necesidades 
            de su proyecto de pavimentación.
          </p>
        </div>

        {/* Services Grid (Restored Visuals) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#1E1E1E] border border-white/5 rounded-md p-8 lg:p-10 transition-all duration-500 hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary/20 transition-all duration-500">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm lg:text-base">
                {service.description}
              </p>

              <ul className="space-y-3 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground/90 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 text-primary text-sm font-bold transition-all hover:gap-3"
              >
                Solicitar información
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
