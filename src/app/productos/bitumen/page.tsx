"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Droplets, Timer, ShieldCheck, CheckCircle2, Factory, Truck, Package, Box, Waves, Leaf, Settings2, BarChart3, ClipboardCheck, Scale, Hammer, Zap, Anchor, ThermometerSun, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCTA, WhatsAppIcon } from "@/components/sections/product-cta"
import { RelatedProducts } from "@/components/sections/related-products"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function BitumenPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const waUrl = "https://wa.me/51901080254?text=Solicito%20informacion%20sobre%20el%20Bitumen%20puro%20para%20proyectos%20industriales"

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
              <FlaskConical className="w-4 h-4" />
              El Ligante Hidrocarbonado de Alta Pureza
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Bitumen <span className="text-primary">Puro</span>: La Esencia de la Carpeta Asfáltica
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Material viscoso, semisólido y altamente adherente obtenido bajo rigurosos procesos de refinación. El agente ligante definitivo que garantiza flexibilidad y resistencia estructural.
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
                src="/asfaltos/venta_bitumen.png"
                alt="Bitumen Puro JKO Asfalto"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-primary info-reveal">BITUMEN: LIGANTE DE ALTA PUREZA</h2>
              <p className="text-muted-foreground leading-relaxed text-lg info-reveal">
                <span className="text-foreground font-bold block mb-2 underline decoration-primary/30 underline-offset-8">Realizamos envíos a todo Lima, Perú.</span>
                El Bitumen de JKO Asfalto es un material viscoso, semisólido y altamente adherente, obtenido a través de un riguroso proceso de refinación. Es la esencia de las mezclas asfálticas, actuando como el agente ligante que mantiene unidos los agregados pétreos, proporcionando flexibilidad y resistencia estructural.
              </p>
              <div className="p-6 rounded-2xl bg-card border border-border info-reveal">
                <p className="text-sm font-medium italic">
                  "Su naturaleza técnica es extremadamente resistente a la acción de ácidos y sales, convirtiéndolo en el recubrimiento protector definitivo para infraestructuras en entornos químicos agresivos."
                </p>
              </div>

              <div className="info-reveal">
                <ProductCTA 
                  whatsappUrl={waUrl} 
                  productName="Bitumen"
                  info="Garantizamos la pureza molecular de nuestro Bitumen, asegurando una adherencia industrial superior y una termoplasticidad avanzada para sus proyectos de pavimentación."
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Termoplasticidad", desc: "Se ablanda con el calor para aplicación precisa y recupera rigidez total al enfriarse.", icon: ThermometerSun },
              { title: "Adherencia Pro", desc: "Vínculo molecular potente con piedra, metal, concreto y madera industrial.", icon: Anchor },
              { title: "Cero Absorción", desc: "Sello hermético natural que elimina cualquier posibilidad de filtración o capilaridad.", icon: Droplets },
              { title: "Antioxidación", desc: "Mantiene sus propiedades elásticas durante periodos prolongados, evitando cuartenamiento.", icon: ShieldCheck }
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

      {/* Applications Section */}
      <section className="py-20 lg:py-32 bg-foreground text-background reveal-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none">
                Base <span className="text-primary text-stroke-white">Industrial</span>
              </h2>
              <p className="text-background/70 text-lg">
                La materia prima esencial para la infraestructura pesada:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Producción de Mezclas Asfálticas modificadas",
                  "Protección de Infraestructura Enterrada y Tuberías",
                  "Materia prima para Mantos y Membranas Asfálticas",
                  "Pavimentación Industrial y Patios de Maniobras",
                  "Sellado técnico de cimientos en suelos salinos"
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
                  <Factory className="w-8 h-8 text-primary" />
                  <p className="text-sm text-background/80">
                    <strong className="text-primary uppercase tracking-widest block mb-1">Nota de Planta:</strong>
                    Suministramos bitumen con la consistencia exacta requerida por las normativas técnicas nacionales e internacionales.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                 <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                   <Image src="/asfaltos/venta_bitumen.png" alt="Obra Bitumen 1" fill className="object-cover transition-transform group-hover:scale-110 duration-700" />
                 </div>
                 <div className="aspect-square relative rounded-2xl overflow-hidden border border-primary/30 bg-white/5">
                    <Image src="/logo_oficial.png" alt="Logo" fill className="object-contain p-8" />
                 </div>
               </div>
               <div className="space-y-4 pt-12">
                 <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                   <Image src="/asphalt_workers_premium_1775080184201.png" alt="Obra Bitumen 2" fill className="object-cover" />
                 </div>
                 <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                    <Image src="/quality_asphalt_premium_bg.png" alt="Obra Bitumen 3" fill className="object-cover" />
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
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">Consistencia y Suministro</h2>
            <p className="text-muted-foreground">Logística pesada para abastecimiento de obras de gran envergadura.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center text-primary-foreground">
            {[
              { name: "Cilindro", size: "55 Galones", ideal: "Suministro masivo para plantas y proyectos pesados.", icon: Box },
              { name: "Balde", size: "05 Galones", ideal: "Formato ergonómico para mantenimiento especializado.", icon: Package },
              { name: "Galón", size: "Individual", ideal: "Format de precisión para sellados y reparaciones puntuales.", icon: Truck }
            ].map((p, idx) => (
              <div key={idx} className="flex flex-col items-center p-10 rounded-3xl bg-card border border-border group hover:bg-secondary/5 transition-colors text-foreground">
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
            La potencia ligante en su proyecto
          </h2>
          <p className="text-primary-foreground/80 text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Contacte con nuestros especialistas para el suministro de bitumen de alta pureza.
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

      <RelatedProducts currentProductId={12} />

    </div>
  )
}
