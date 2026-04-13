"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MessageCircle, CheckCircle2, Droplets, Thermometer, ShieldCheck, Factory, Truck, Droplet, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function AsfaltoRC250Page() {
  const containerRef = useRef<HTMLDivElement>(null)

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

      // Image parallax
      gsap.to(".parallax-img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true
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
              <Droplets className="w-4 h-4" />
              Solución Bituminosa de Alta Ingeniería
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Asfalto Líquido <span className="text-primary">RC-250</span>: Excelencia en Curado Rápido
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              El Asfalto RC-250 (Rapid Curing) es una solución diseñada para proyectos que exigen una puesta en servicio inmediata. Garantiza una penetración óptima y una adherencia estructural superior.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="rounded-full px-10 h-16 bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 transition-all hover:scale-105"
              >
                <a href="https://wa.me/51901080254?text=Solicito%20informacion%20del%20productos%20de%20Venta%20de%20Asfalto%20l%C3%ADquido%20RC%20250" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Solicitar Cotización
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-secondary/10 reveal-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl parallax-container">
              <Image
                src="/quality_asphalt_premium_bg.png"
                alt="Proceso Asfáltico"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">¿Qué es el RC-250?</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Se compone de una base de asfalto de penetración diluida con solventes derivados del petróleo de alta volatilidad, lo que permite una aplicación fluida a temperatura ambiente y un fraguado acelerado.
              </p>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-sm font-medium italic">
                  "Su nomenclatura '250' hace referencia a su viscosidad cinemática medida a 60°C (144°F), garantizando un desempeño técnico superior."
                </p>
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
              { title: "Alto Desempeño", desc: "Formulado para resistir las condiciones climáticas más exigentes.", icon: ShieldCheck },
              { title: "Adherencia Superior", desc: "Crea un vínculo permanente entre las capas de la estructura vial.", icon: CheckCircle2 },
              { title: "Versatilidad Térmica", desc: "Aplicación eficiente tanto en climas fríos como templados.", icon: Thermometer },
              { title: "Calidad Certificada", desc: "Cumple con normativas técnicas nacionales e internacionales.", icon: Factory }
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
                Aplicaciones <span className="text-primary text-stroke-white">Estratégicas</span>
              </h2>
              <p className="text-background/70 text-lg">
                El Asfalto RC-250 es el aliado fundamental en la construcción y mantenimiento de infraestructura:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Mezclas Asfálticas en Frío (Sitio, cancha o planta)",
                  "Infraestructura Vial y Rehabilitación",
                  "Protección de Estructuras y Estabilización de Taludes",
                  "Tratamientos Superficiales y Morteros Asfálticos",
                  "Impermeabilización Industrial de alto rendimiento"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    </div>
                    <span className="font-medium text-lg text-background/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex gap-4 items-center">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <p className="text-sm">
                    <strong className="text-primary uppercase tracking-wider block mb-1">Nota Técnica:</strong>
                    Para asegurar la integridad de la mezcla en frío, el agregado pétreo debe mantener un nivel de humedad inferior al 1.5% antes de su combinación.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/TRABAJANDO_aSFALTO.jpg" alt="Obra 1" fill className="object-cover" />
                </div>
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/asphalt_workers_premium_1775080184201.png" alt="Obra 2" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/TRABAJANDO_CONSTRUCTORES.jpg" alt="Obra 3" fill className="object-cover" />
                </div>
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/asfalto_hero1.png" alt="Obra 4" fill className="object-cover" />
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
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">Presentaciones Disponibles</h2>
            <p className="text-muted-foreground">Mantenemos stock permanente para atender su proyecto.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Cilindro", size: "55 Galones", ideal: "Obras de gran escala", icon: Truck },
              { name: "Balde", size: "5 Galones", ideal: "Mantenimientos puntuales", icon: Package },
              { name: "Envase", size: "1 Galón", ideal: "Pruebas de laboratorio", icon: Droplet }
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
            ¿Listo para iniciar tu obra?
          </h2>
          <p className="text-primary-foreground/80 text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Contamos con despacho inmediato en Lima y todo el Perú. Nuestros productos cuentan con garantía total de calidad.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-black uppercase tracking-widest px-12 h-20 text-lg transition-transform hover:scale-110 shadow-3xl"
          >
            <a href="https://wa.me/51901080254?text=Solicito%20informacion%20del%20productos%20de%20Venta%20de%20Asfalto%20l%C3%ADquido%20RC%20250" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-6 h-6 mr-3" />
              Solicitar Cotización por WhatsApp
            </a>
          </Button>
        </div>
      </section>

    </div>
  )
}
