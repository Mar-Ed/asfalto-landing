"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, ArrowUpRight, Tag } from "lucide-react"
import Link from "next/link"

const ANUNCIOS = [
  {
    id: 1,
    title: "Nueva Planta Asfáltica en el Sur Activa y Operando",
    excerpt: "Con orgullo anunciamos la apertura de nuestra nueva planta de proceso asfáltico en Ica, que incrementará nuestra capacidad de respuesta en un 40% para proyectos sureños.",
    date: "12 Abril, 2026",
    category: "Noticias",
    image: "/quality_asphalt_premium_bg.png",
    featured: true
  },
  {
    id: 2,
    title: "Innovación: Polímeros Modificados para Extrema Durabilidad",
    excerpt: "Lanzamos nuestra nueva línea de asfaltos modificados con polímeros (SMA), diseñados para soportar el clima extremo de la sierra peruana sin fisuras.",
    date: "05 Marzo, 2026",
    category: "Innovación",
    image: "/TRABAJANDO_aSFALTO.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Culminación Exitosa: Carretera Interprovincial Tramo B",
    excerpt: "Más de 50km de vía asfáltica entregada en tiempo récord en colaboración con consorcios nacionales. Un hito logístico para JKO.",
    date: "28 Febrero, 2026",
    category: "Proyectos",
    image: "/asphalt_workers_premium_1775080184201.png",
    featured: false
  },
  {
    id: 4,
    title: "Certificación Ambiental ISO 14001:2015 Renovada",
    excerpt: "Reafirmamos nuestro compromiso con el planeta validando nuestros procesos de producción de mezcla asfáltica en frío con cero emisiones.",
    date: "15 Enero, 2026",
    category: "Sostenibilidad",
    image: "/manto_asfalto_gravillado.png",
    featured: false
  },
  {
    id: 5,
    title: "Alianzas Estratégicas 2026",
    excerpt: "Firmamos nuevos acuerdos comerciales para la distribución de mantos asfálticos importados de alta gama, ampliando nuestro catálogo.",
    date: "10 Enero, 2026",
    category: "Comercial",
    image: "/manto_asfalto_aluminizado.png",
    featured: false
  }
]

export default function AnunciosPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Masonry/Grid staggered entrance
    const cards = gsap.utils.toArray('.anuncio-card')
    gsap.fromTo(cards, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="bg-background min-h-screen pt-32 pb-24" ref={containerRef}>
      <div className="container mx-auto px-4">
        
        {/* Header Anuncios */}
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4 text-foreground">
              Noticias & <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Mantente informado con los últimos avances, proyectos e innovaciones en el mundo del asfalto e infraestructura vial por parte de JKO Asfaltos.
            </p>
          </motion.div>
        </div>

        {/* Featured Post */}
        {ANUNCIOS.filter(a => a.featured).map((post) => (
          <div key={post.id} className="anuncio-card mb-16 grid lg:grid-cols-2 gap-8 bg-card border border-white/5 rounded-[2rem] overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="relative aspect-video lg:aspect-auto">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 bg-primary text-primary-foreground text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full">
                Destacado
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 font-medium">
                <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
                <span className="flex items-center gap-1"><Tag size={16} /> {post.category}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 hover:text-primary transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {post.excerpt}
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:gap-4 transition-all">
                Leer Artículo Completo <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
        ))}

        {/* Grid Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ANUNCIOS.filter(a => !a.featured).map((post) => (
            <div key={post.id} className="anuncio-card flex flex-col bg-card border border-white/5 rounded-3xl overflow-hidden group hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 font-bold uppercase tracking-wider">
                  <span className="text-primary">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 line-clamp-2 title-hover truncate-lines">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5">
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors group/link">
                    Leer Más <ArrowUpRight size={16} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}
