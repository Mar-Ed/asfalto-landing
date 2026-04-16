"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ShieldAlert, Droplets, Timer, ShieldCheck, CheckCircle2, Factory, Truck, Package, Box, Waves, Leaf, Settings2, BarChart3, ClipboardCheck, Scale, Hammer, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCTA, WhatsAppIcon } from "@/components/sections/product-cta"
import { RelatedProducts } from "@/components/sections/related-products"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function BreaSolidaPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const waUrl = "https://wa.me/51901080254?text=Solicito%20informacion%20sobre%20la%20Brea%20S%C3%B3lida%20para%20juntas%20de%20dilataci%C3%B3n"

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out"
      })

      // Section reveals
      const sections = gsap.utils.toArray(".reveal-section")
      sections.forEach((section: any) => {
        gsap.fromTo(section, 
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        )
      })

      // Staggered reveal for info content
      gsap.from(".info-reveal", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".info-reveal",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-background" ref={containerRef}>
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo_asfalto.png')" }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-0" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8"
            >
              <Layers className="w-4 h-4" />
              Sellado Estructural y Juntas de Dilatación
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Brea <span className="text-primary">Sólida</span>: Protección de Concreto e Ingeniería
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Compuesto bituminoso de alta densidad para impermeabilización estructural que forma una barrera elástica y hermética de extrema durabilidad ante agentes químicos.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-secondary/10 reveal-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 hover:border-primary transition-all duration-500 group">
              <Image
                src="/asfaltos/brea_solida.png"
                alt="Brea Sólida JKO Asfalto"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-primary info-reveal">BREA SÓLIDA JKO</h2>
              <p className="text-muted-foreground leading-relaxed text-lg info-reveal">
                <span className="text-foreground font-bold block mb-2 underline decoration-primary/30 underline-offset-8">Realizamos envíos a todo Lima, Perú.</span>
                La Brea Sólida de JKO Asfalto es un compuesto bituminoso de alta densidad, obtenido mediante procesos de refinación y oxidación controlada. Se presenta en estado sólido a temperatura ambiente y requiere ser fundida in situ para su aplicación, formando una barrera elástica y hermética de extrema durabilidad.
              </p>
              <div className="p-6 rounded-2xl bg-card border border-border info-reveal">
                <p className="text-sm font-medium italic">
                  "Es el material técnico por excelencia para el tratamiento de juntas en pavimentos rígidos y la impermeabilización de estructuras hidráulicas."
                </p>
              </div>

              <div className="info-reveal">
                <ProductCTA 
                  whatsappUrl={waUrl} 
                  productName="Brea Sólida"
                  info="Garantizamos una brea sólida con nula absorción de agua y máxima cohesión, evitando filtraciones en las juntas de concreto de forma definitiva."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section 
        className="relative py-24 lg:py-40 overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/asfaltos/FONDOS_ASFALTOS/ASFALTOS_FONDOS4.png')" }}
      >
        {/* Overlays matching Servicios Técnicos style for maximum image visibility */}
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-0" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8 reveal-section">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary text-[10px] uppercase font-black tracking-[0.4em]">Especificaciones</span>
              <div className="w-12 h-[2px] bg-primary" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-none">
              Propiedades <span className="text-primary italic">Técnicas</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: "Impermeabilidad", desc: "Barrera física 100% impenetrable contra agua, salitre y humedad.", icon: Droplets },
              { title: "Flexibilidad", desc: "Absorbe los movimientos de expansión y contracción del concreto sin fisurarse.", icon: Scale },
              { title: "Alta Cohesión", desc: "Adherencia estructural extrema a las paredes de las juntas de concreto.", icon: ShieldCheck },
              { title: "Anticorrosión", desc: "Protección absoluta de las armaduras de acero internas contra la oxidación.", icon: ShieldAlert }
            ].map((prop, idx) => (
              <div 
                key={idx} 
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative h-full p-8 rounded-[2.5rem] bg-[#1A1A1A]/80 border border-white/10 backdrop-blur-md hover:bg-[#222222] transition-all duration-500 hover:scale-[1.02] flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <prop.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-black mb-4 uppercase tracking-tight text-white">{prop.title}</h3>
                  <p className="text-sm text-white/60 font-medium leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 lg:py-32 bg-foreground text-background reveal-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none">
                Uso <span className="text-primary text-stroke-white">Estructural</span>
              </h2>
              <p className="text-background/70 text-lg">
                La técnica definitiva para la protección de la infraestructura rígida:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Sellado de Juntas de Dilatación en Losas y Veredas",
                  "Impermeabilización de Cimientos y bases enterradas",
                  "Obras Hidráulicas como Reservorios y Canales de Riego",
                  "Protección de Elementos Sanitarios y Eléctricos pesados",
                  "Recubrimiento de Estructuras metálicas de alta corrosión"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                      <div className="w-2.5 h-2.5 rounded-sm bg-primary group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                    <span className="font-bold text-lg text-background/90 uppercase tracking-tight leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="flex gap-4 items-center">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <p className="text-sm text-background/80">
                    <strong className="text-primary uppercase tracking-widest block mb-1">Nota Técnica:</strong>
                    Su nula absorción de agua la convierte en la opción superior para revestimientos que estarán en contacto constante con líquidos.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                 <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                   <Image src="/asfalto_hero1.png" alt="Obra Brea Sólida" fill className="object-cover transition-transform group-hover:scale-110 duration-700" />
                 </div>
                  <div className="aspect-square relative rounded-2xl overflow-hidden border border-primary/30">
                    <Image src="/asfaltos/FONDOS_ASFALTOS/ASFALTOS_FONDOS2.png" alt="Fondo Industrial" fill className="object-cover" />
                  </div>
               </div>
               <div className="space-y-4 pt-12">
                  <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                    <Image src="/asfaltos/FONDOS_ASFALTOS/ASFALTOS_FONDOS3.png" alt="Obra 2" fill className="object-cover" />
                  </div>
                 <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                    <Image src="/TRABAJANDO_CONSTRUCTORES.jpg" alt="Obra Brea 3" fill className="object-cover" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section className="py-20 lg:py-32 reveal-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">Stock de Alta Pureza</h2>
            <p className="text-muted-foreground">Formatos optimizados para fundición industrial y dosificación exacta.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
            {[
              { name: "Bloque", size: "14 Kilogramos", ideal: "La presentación estándar para obras de ingeniería y fundición por calderas.", icon: Box },
              { name: "Bloque", size: "01 Kilogramo", ideal: "Formato práctico para reparaciones puntuales y mantenimiento doméstico.", icon: Package }
            ].map((p, idx) => (
              <div key={idx} className="flex flex-col items-center p-10 rounded-3xl bg-card border border-border group hover:bg-secondary/5 transition-colors">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
                  <p.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-all" />
                </div>
                <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">{p.name}</h3>
                <p className="text-primary font-bold text-xl mb-4">{p.size}</p>
                <p className="text-sm text-muted-foreground">{p.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-40 bg-primary reveal-section overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-7xl font-black uppercase text-primary-foreground mb-8 tracking-tighter leading-none">
            Protección impenetrable para su obra
          </h2>
          <p className="text-primary-foreground/80 text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Suministramos la brea de mayor pureza para sus proyectos de sellado e impermeabilización.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-black uppercase tracking-widest px-12 h-20 text-lg transition-transform hover:scale-110 shadow-3xl"
          >
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-6 h-6 mr-3" />
              Solicitar Cotización por WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <RelatedProducts currentProductId={9} />

    </div>
  )
}
