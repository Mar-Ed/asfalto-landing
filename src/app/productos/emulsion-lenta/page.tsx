"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Droplets, Timer, ShieldCheck, CheckCircle2, Factory, Truck, Package, Box, Waves, Leaf, Settings2, BarChart3, ClipboardCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCTA, WhatsAppIcon } from "@/components/sections/product-cta"
import { RelatedProducts } from "@/components/sections/related-products"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function EmulsionLentaPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const waUrl = "https://wa.me/51901080254?text=Solicito%20informacion%20sobre%20la%20Emulsi%C3%B3n%20Asf%C3%A1ltica%20Lenta%20para%20estabilizaci%C3%B3n"

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
              <Settings2 className="w-4 h-4" />
              Precisión en Estabilización
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Emulsión Asfáltica <span className="text-primary">Lenta</span>: Tecnología de Sellado
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              La dispersión bituminosa más estable para proyectos que exigen un tiempo de trabajabilidad prolongado y una mezcla homogénea superior con agregados finos.
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
                src="/asfaltos/emulsion_asffaltica_lenta.png"
                alt="Emulsión Asfáltica Lenta"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-primary info-reveal">EMULSIÓN ASFÁLTICA LENTA (CSS-1h)</h2>
              <p className="text-muted-foreground leading-relaxed text-lg info-reveal">
                <span className="text-foreground font-bold block mb-2 underline decoration-primary/30 underline-offset-8">Realizamos envíos a todo Lima, Perú.</span>
                La Emulsión Asfáltica Lenta de JKO Asfalto es una dispersión líquida de cemento asfáltico en agua, estabilizada químicamente para ofrecer un tiempo de rotura prolongado. Su formulación técnica permite una mezcla íntima y homogénea con agregados finos y polvos minerales sin fraguar de forma prematura.
              </p>
              <div className="p-6 rounded-2xl bg-card border border-border info-reveal">
                <p className="text-sm font-medium italic">
                  "Es la solución de ingeniería predilecta para la estabilización de suelos y la creación de lechadas asfálticas (slurry seal) de alta precisión."
                </p>
              </div>

              <div className="info-reveal">
                <ProductCTA 
                  whatsappUrl={waUrl} 
                  productName="Emulsión Lenta CSS-1h"
                  info="Garantizamos la estabilidad química de nuestras emulsiones lentas, asegurando un tiempo de trabajabilidad óptimo para mezclas densas y sellados profundos."
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
              { title: "Rotura Controlada", desc: "Diseñada para no romper instantáneamente, eliminando grumos en el mezclado.", icon: Timer },
              { title: "Alta Penetración", desc: "Fluidez extrema que permite sellar poros microscópicos en bases y suelos.", icon: Droplets },
              { title: "Eco-Segura", desc: "Aplicación a temperatura ambiente sin emisiones tóxicas ni riesgos térmicos.", icon: Leaf },
              { title: "Adherencia Total", desc: "Compatibilidad química superior con diversas variedades de agregados pétreos.", icon: CheckCircle2 }
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
                Aplicaciones <span className="text-primary text-stroke-white">Estratégicas</span>
              </h2>
              <p className="text-background/70 text-lg">
                La herramienta definitiva para el mantenimiento preventivo y la base estructural:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Estabilización de Suelos para creación de bases y sub-bases",
                  "Riegos de Neblina (Fog Seal) para rejuvenecimiento de pavimentos",
                  "Lechadas Asfálticas (Slurry Seal) en vías urbanas",
                  "Control de Polvo en caminos no afirmados y canteras",
                  "Tratamientos preventivos de sellado de microfisuras"
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
                    <strong className="text-primary uppercase tracking-widest block mb-1">Dato Técnico:</strong>
                    Su capacidad de mezclado íntimo permite transformar suelos inestables en superficies compactas y resistentes al agua.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                 <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                   <Image src="/asphalt_workers_premium_1775080184201.png" alt="Obra Emulsión 1" fill className="object-cover" />
                 </div>
                 <div className="aspect-square relative rounded-2xl overflow-hidden border border-primary/30">
                    <Image src="/asfaltos/FONDOS_ASFALTOS/ASFALTOS_FONDOS2.png" alt="Fondo Industrial" fill className="object-cover" />
                 </div>
               </div>
               <div className="space-y-4 pt-12">
                 <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                   <Image src="/asfaltos/FONDOS_ASFALTOS/ASFALTOS_FONDOS3.png" alt="Obra 2" fill className="object-cover" />
                 </div>
                 <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image src="/TRABAJANDO_CONSTRUCTORES.jpg" alt="Obra Emulsión 3" fill className="object-cover" />
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
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">Stock Garantizado</h2>
            <p className="text-muted-foreground">Productos de viscosidad exacta listos para despacho inmediato.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { name: "Cilindro", size: "55 Galones", ideal: "Formato estándar para estabilización y bacheo técnico.", icon: Box },
              { name: "Balde", size: "05 Galones", ideal: "Presentación ideal para reparaciones menores o mantenimiento.", icon: Package },
              { name: "Galón", size: "Individual", ideal: "Para detalles de acabado o aplicaciones domésticas exigentes.", icon: Truck }
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
            Estabilización con precisión técnica
          </h2>
          <p className="text-primary-foreground/80 text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Contacte ahora con nuestros especialistas para el suministro de emulsiones de alto rendimiento.
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

      <RelatedProducts currentProductId={6} />

    </div>
  )
}
