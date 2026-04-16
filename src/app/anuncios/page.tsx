"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, ArrowUpRight, Tag, BookOpen, Layers, Settings, X, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const ANUNCIOS = [
  {
    id: 1,
    title: "Nueva Planta Asfáltica en el Sur Activa y Operando",
    excerpt: "Con orgullo anunciamos la apertura de nuestra nueva planta de proceso asfáltico en Ica, que incrementará nuestra capacidad de respuesta.",
    date: "12 Abril, 2026",
    category: "Noticias",
    image: "/quality_asphalt_premium_bg.png",
    featured: true,
    content: "Nuestra nueva sede en Ica representa un hito estratégico para JKO Asfaltos. Equipada con tecnología de última generación para la dosificación precisa de mezclas asfálticas en caliente, esta planta nos permite reducir los tiempos de entrega en toda la región sur del país. Con una capacidad de producción optimizada, estamos listos para abastecer proyectos de gran envergadura con la misma certificación de calidad que nos caracteriza."
  },
  {
    id: 2,
    title: "¿Qué es el Asfalto?",
    excerpt: "Definición técnica del ligante bituminoso más utilizado en la construcción y su origen derivado del petróleo.",
    date: "Educativo",
    category: "Conocimiento",
    image: "/TRABAJANDO_aSFALTO.jpg",
    featured: false,
    icon: BookOpen,
    content: "El asfalto es un material viscoso, pegajoso y de color negro que se utiliza principalmente como ligante en mezclas asfálticas para la construcción de carreteras, autovías y autopistas. Es un derivado del petróleo crudo que se obtiene mediante procesos de destilación controlada. Su naturaleza termoplástica le permite ser moldeable a altas temperaturas y extremadamente resistente a temperatura ambiente, lo que lo convierte en el material ideal para soportar cargas dinámicas pesadas."
  },
  {
    id: 3,
    title: "Funciones del Asfalto",
    excerpt: "Descubra cómo el asfalto protege, cohesiona y da flexibilidad a las estructuras viales modernas en todo el mundo.",
    date: "Técnico",
    category: "Ingeniería",
    image: "/asphalt_workers_premium_1775080184201.png",
    featured: false,
    icon: Layers,
    content: "El asfalto cumple diversas funciones críticas: actúa como impermeabilizante impidiendo que el agua dañe la base granular de las vías, proporciona una superficie de rodadura suave y silenciosa, y sirve como elemento cohesivo que mantiene unidos los agregados pétreos. Además, su inherente flexibilidad permite absorber las cargas de tráfico pesado y los movimientos sísmicos ligeros sin fracturarse inmediatamente, prolongando la vida útil de la infraestructura."
  },
  {
    id: 4,
    title: "Principales Usos del Asfalto",
    excerpt: "Desde pavimentación urbana hasta impermeabilización industrial y techados residenciales de alta gama.",
    date: "Práctico",
    category: "Aplicaciones",
    image: "/asfaltos/FONDOS_ASFALTOS/ASFALTOS_FONDOS4.png",
    featured: false,
    icon: Settings,
    content: "La versatilidad del asfalto lo hace indispensable en múltiples industrias: 1. PAVIMENTACIÓN: Carreteras, aeropuertos y estacionamientos. 2. IMPERMEABILIZACIÓN: Techados en edificaciones (mantos y tejas), canales de riego y embalses. 3. PROTECCIÓN: Recubrimiento de tuberías metálicas para prevenir la corrosión en ambientes salinos. Su capacidad de sellado hermético es fundamental para la ingeniería civil global."
  },
  {
    id: 5,
    title: "Innovación: Polímeros Modificados",
    excerpt: "Lanzamos nuestra nueva línea de asfaltos modificados con polímeros para soportar climas extremos sin fisuras.",
    date: "05 Marzo, 2026",
    category: "Innovación",
    image: "/asfaltos/FONDOS_ASFALTOS/ASFALTOS_FONDOS2.png",
    featured: false,
    icon: Info,
    content: "Nuestros nuevos asfaltos modificados incorporan polímeros de alta resistencia que mejoran la elasticidad y el punto de ablandamiento de la mezcla. Esto permite que el asfalto se comporte de manera óptima tanto en el intenso calor de la costa como en el frío extremo de los Andes peruanos, evitando el agrietamiento térmico y el ahuellamiento por tráfico pesado."
  }
]

export default function AnunciosPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedPost, setSelectedPost] = useState<typeof ANUNCIOS[0] | null>(null)

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
    <div className="bg-background min-h-screen pt-40 lg:pt-52 pb-24" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Anuncios */}
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Conocimiento Vial</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4 text-foreground">
              Noticias & <span className="text-primary italic">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Mantente informado con los últimos avances, proyectos e innovaciones en el mundo del asfalto e infraestructura vial por parte de <span className="text-foreground">JKO Asfaltos</span>.
            </p>
          </motion.div>
        </div>

        {/* Featured Post */}
        {ANUNCIOS.filter(a => a.featured).map((post) => (
          <div key={post.id} className="anuncio-card mb-16 grid lg:grid-cols-2 gap-8 bg-card border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-primary/50 transition-all duration-500 shadow-2xl">
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-8 left-8 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-xl">
                Novedades JKO
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
            <div className="p-8 lg:p-16 flex flex-col justify-center bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-4 text-[10px] text-primary mb-8 font-black uppercase tracking-[0.2em]">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="flex items-center gap-1.5"><Tag size={14} /> {post.category}</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight tracking-tight text-foreground uppercase">
                {post.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium line-clamp-3">
                {post.excerpt}
              </p>
              <button 
                onClick={() => setSelectedPost(post)}
                className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-[0.2em] text-xs hover:gap-6 transition-all group/btn"
              >
                Leer Artículo Completo 
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-primary-foreground transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </button>
            </div>
          </div>
        ))}

        {/* Grid Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ANUNCIOS.filter(a => !a.featured).map((post) => (
            <div key={post.id} className="anuncio-card flex flex-col bg-card border border-white/5 rounded-[2rem] overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/40">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {post.icon && (
                  <div className="absolute bottom-6 right-6 w-12 h-12 rounded-2xl bg-primary/90 text-primary-foreground flex items-center justify-center backdrop-blur-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                    <post.icon size={24} strokeWidth={2.5} />
                  </div>
                )}
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-1 bg-card/30">
                <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-6 font-black uppercase tracking-widest">
                  <span className="text-primary">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-black mb-4 leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed font-medium text-sm">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors group/link"
                  >
                    Leer Más 
                    <ArrowUpRight size={14} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Info Modal */}
      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent showCloseButton={false} className="max-w-[95vw] lg:max-w-5xl bg-[#121212] border-white/5 p-0 overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-2xl">
          <AnimatePresence>
            {selectedPost && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "backOut" }}
                className="grid lg:grid-cols-5 min-h-[400px]"
              >
                {/* Modal Graphic Column */}
                <div className="relative h-48 lg:h-auto lg:col-span-2 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                  <Image 
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#121212] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                    {selectedPost.icon && (
                      <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                        <selectedPost.icon size={20} strokeWidth={2.5} />
                      </div>
                    )}
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">{selectedPost.category}</span>
                  </div>
                </div>

                {/* Modal Information Column */}
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center relative">
                  {/* Close Action */}
                  <div className="absolute top-6 right-6 z-10">
                    <button 
                      onClick={() => setSelectedPost(null)}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center text-muted-foreground"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
                        <Calendar size={12} /> {selectedPost.date}
                      </div>
                      <h2 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter text-foreground leading-[1.1]">
                        {selectedPost.title}
                      </h2>
                    </div>

                    <div className="h-[2px] w-12 bg-primary/40" />

                    <div className="max-h-[300px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-medium">
                        {selectedPost.content}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5 grid sm:grid-cols-2 gap-4 items-center">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Info size={14} className="text-primary" />
                         </div>
                         <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">Certificación Calidad JKO</span>
                      </div>
                      <a 
                        href="https://wa.me/51901080254" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground text-center font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white hover:text-black transition-all text-xs shadow-lg shadow-primary/10"
                      >
                        Consultar Técnico
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  )
}
