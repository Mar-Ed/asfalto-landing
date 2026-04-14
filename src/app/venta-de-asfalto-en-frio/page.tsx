"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Timer, Snowflake, Package, Truck, Droplets, HardHat, ShieldCheck, CheckCircle2, Factory, ZapOff, Archive, Box, Leaf, Hammer, ClipboardCheck, Anchor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCTA, WhatsAppIcon } from "@/components/sections/product-cta"
import { RelatedProducts } from "@/components/sections/related-products"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AsfaltoEnFrioPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const waUrl = "https://wa.me/51901080254?text=Solicito%20informacion%20del%20productos%20de%20Venta%20de%20Asfalto%20en%20Fr%C3%ADo"

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
        gsap.from(section, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        })
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
        {/* Dark Overlay for Readability (Matching Servicios Técnicos) */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-0" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8"
            >
              <Snowflake className="w-4 h-4" />
              Tecnología de Aplicación Inmediata
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Asfalto en <span className="text-primary">Frío</span>: Eficiencia a Temperatura Ambiente
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Mezcla asfáltica de alto rendimiento, pre-elaborada con agregados seleccionados y emulsiones modificadas. No requiere calentamiento ni maquinaria pesada.
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
                src="/asfaltos/asfalto_frio.png"
                alt="Asfalto en Frío JKO Asfalto"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-primary info-reveal">VENTA DE ASFALTO EN FRÍO</h2>
              <p className="text-muted-foreground leading-relaxed text-lg info-reveal">
                <span className="text-foreground font-bold block mb-2 underline decoration-primary/30 underline-offset-8">Realizamos envíos a todo Lima, Perú.</span>
                Es la solución definitiva para el mantenimiento vial urbano, ya que permite rehabilitar superficies dañadas en minutos, minimizando el impacto en el flujo vehicular y optimizando los costos operativos de la obra.
              </p>
              <div className="p-6 rounded-2xl bg-card border border-border info-reveal">
                <p className="text-sm font-medium italic">
                  "Somos JKO Asfalto, ofrecemos productos de calidad y altamente resistentes, ideales para bacheo inmediato y reparaciones eficientes."
                </p>
              </div>

              <div className="info-reveal">
                <ProductCTA 
                  whatsappUrl={waUrl} 
                  productName="Asfalto en Frío"
                  info="Nuestro asfalto en frío mantiene su consistencia maleable durante el almacenamiento, facilitando su distribución uniforme sobre la superficie."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 lg:py-32 reveal-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">Propiedades Técnicas</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { title: "Eficiencia Energética", desc: "Producto 100% ecológico que elimina quemadores o calderas, reduciendo la huella de carbono.", icon: Leaf },
              { title: "Trabajabilidad Superior", desc: "Consistencia maleable que facilita la distribución uniforme en cualquier bache.", icon: Hammer },
              { title: "Adherencia de Alto Grado", desc: "Agentes químicos que aseguran un anclaje perfecto incluso en superficies húmedas.", icon: Anchor }
            ].map((prop, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all group">
                <prop.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{prop.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications / Guide Section */}
      <section className="py-20 lg:py-32 bg-foreground text-background reveal-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none">
                ¿Cómo <span className="text-primary text-stroke-white">Aplicarlo?</span>
              </h2>
              <div className="space-y-6">
                 <ol className="space-y-4">
                   <li className="flex gap-3">
                     <span className="text-primary font-black">01.</span>
                     Limpiar la zona dañada retirando material suelto o agua estancada.
                   </li>
                   <li className="flex gap-3">
                     <span className="text-primary font-black">02.</span>
                     Verter la mezcla directamente desde la bolsa sobre la zona afectada.
                   </li>
                   <li className="flex gap-3">
                     <span className="text-primary font-black">03.</span>
                     Compactar firmemente hasta alcanzar una superficie uniforme y estable.
                   </li>
                 </ol>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                 <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                   <Image src="/TRABAJANDO_CONSTRUCTORES.jpg" alt="Obra 1" fill className="object-cover" />
                 </div>
                 <div className="aspect-square relative rounded-2xl overflow-hidden">
                   <Image src="/quality_asphalt_premium_bg.png" alt="Obra 2" fill className="object-cover" />
                 </div>
               </div>
               <div className="space-y-4 pt-12">
                 <div className="aspect-square relative rounded-2xl overflow-hidden border border-primary/50">
                   <Image src="/logo_oficial.png" alt="Sello" fill className="object-contain p-8" />
                 </div>
                 <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                   <Image src="/asphalt_workers_premium_1775080184201.png" alt="Obra 3" fill className="object-cover" />
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
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">Suministro Adaptable</h2>
            <p className="text-muted-foreground">Logística Integral según la magnitud de su proyecto.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Bolsa 25 kg", size: "Ergonómica", ideal: "Bacheo puntual / Cero desperdicio", icon: Box },
              { name: "Bolsa 50 kg", size: "Industrial", ideal: "Mayor volumen de cobertura x unidad", icon: Package },
              { name: "Metro Cúbico", size: "Al Granel", ideal: "Proyectos de pavimentación extensiva", icon: Truck }
            ].map((p, idx) => (
              <div key={idx} className="flex flex-col items-center p-10 rounded-3xl bg-card border border-border text-center hover:bg-secondary/5 transition-colors group">
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
            Reparación vial inmediata
          </h2>
          <p className="text-primary-foreground/80 text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Despacho express de Asfalto en Frío para bacheo y mantenimiento preventivo.
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

      <RelatedProducts currentProductId={4} />

    </div>
  )
}
