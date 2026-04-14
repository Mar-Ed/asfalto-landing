"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

const products = [
  {
    id: 1,
    name: "Asfalto Líquido RC-250",
    category: "Asfaltos Líquidos",
    image: "/asfaltos/ASFALTO_250.png",
    href: "/venta-de-asfalto-rc-250",
    description: "Curado rápido ideal para imprimación y tratamientos superficiales.",
    specs: { "Viscosidad": "250-500 cSt", "Punto Inf.": "> 27°C" },
  },
  {
    id: 2,
    name: "Asfalto Líquido MC-30",
    category: "Asfaltos Líquidos",
    image: "/asfaltos/asfalto_mc30.png",
    href: "/venta-de-asfalto-mc30",
    description: "Imprimación técnica de máxima penetración para bases granulares.",
    specs: { "Penetración": "Alta", "Curado": "Medio" },
  },
  {
    id: 3,
    name: "Asfalto PEN 60/70",
    category: "Cementos Asfálticos",
    image: "/asfaltos/asfalto_pen.png",
    href: "/venta-de-asfalto-pen",
    description: "Cemento asfáltico de alta pureza para mezclas de tráfico pesado.",
    specs: { "Penetración": "60-70 dmm", "Punto Abl.": "> 48°C" },
  },
  {
    id: 4,
    name: "Asfalto en Frío",
    category: "Mezclas Especiales",
    image: "/asfaltos/asfalto_frio.png",
    href: "/venta-de-asfalto-en-frio",
    description: "Mezcla pre-elaborada lista para usar sin calentamiento previo.",
    specs: { "Uso": "Inmediato", "Eco": "100%" },
  },
  {
    id: 5,
    name: "Asfalto en Caliente",
    category: "Mezclas en Caliente",
    image: "/asfaltos/asfalto_caliente.png",
    href: "/venta-de-asfalto-en-caliente",
    description: "Mezcla de alta densidad para carpetas de rodadura definitivas.",
    specs: { "Estabilidad": "> 815 kg", "Flujo": "2-4 mm" },
  },
  {
    id: 6,
    name: "Emulsión Lenta",
    category: "Emulsiones",
    image: "/asfaltos/emulsion_asffaltica_lenta.png",
    href: "/productos/emulsion-lenta",
    description: "Rotura controlada para estabilización y sellado profundo.",
    specs: { "Tipo": "Catiónica", "Uso": "Estabilización" },
  },
  {
    id: 7,
    name: "Emulsión Media",
    category: "Emulsiones",
    image: "/asfaltos/emulsion_asffaltica_media.png",
    href: "/productos/emulsion-media",
    description: "Equilibrio perfecto para bacheo profundo y mezclas abiertas.",
    specs: { "Rotura": "Intermedia", "Cohesión": "Alta" },
  },
  {
    id: 8,
    name: "Emulsión Rápida",
    category: "Emulsiones",
    image: "/asfaltos/emulsion_asffaltica_rapida.png",
    href: "/productos/emulsion-rapida",
    description: "Fijación instantánea para riegos de liga y tratamientos superficiales.",
    specs: { "Rotura": "Instantánea", "Liga": "Superior" },
  },
  {
    id: 9,
    name: "Brea Sólida",
    category: "Impermeabilizantes",
    image: "/asfaltos/brea_solida.png",
    href: "/productos/brea-solida",
    description: "Sellado elástico e impenetrable para juntas de dilatación.",
    specs: { "Estado": "Bloque", "Peso": "14 kg" },
  },
  {
    id: 10,
    name: "Brea Líquida",
    category: "Impermeabilizantes",
    image: "/asfaltos/brea_liquida.png",
    href: "/productos/brea-liquida",
    description: "Protección hidrófuga activa aplicable en frío sobre cualquier superficie.",
    specs: { "Uso": "Directo", "Capas": "Multicapa" },
  },
  {
    id: 11,
    name: "Teja Asfáltica",
    category: "Arquitectónicos",
    image: "/asfaltos/teja_asfaltica.png",
    href: "/productos/teja-asfaltica",
    description: "Estética superior con protección de 3mm de asfalto modificado.",
    specs: { "Espesor": "3 mm", "Pack": "3 m²" },
  },
  {
    id: 12,
    name: "Bitumen Puro",
    category: "Ligantes",
    image: "/asfaltos/venta_bitumen.png",
    href: "/productos/bitumen",
    description: "Ligante hidrocarbonado de máxima pureza para mezclas industriales.",
    specs: { "Pureza": "Máxima", "Uso": "Ligante" },
  },
  {
    id: 13,
    name: "Alquitrán Refinado",
    category: "Protección",
    image: "/asfaltos/venta_alquitran.png",
    href: "/productos/alquitran",
    description: "Protector natural de madera y metales contra corrosión y salitre.",
    specs: { "Acción": "Fungicida", "Sello": "Hidrófugo" },
  },
]

interface RelatedProductsProps {
  currentProductId: number;
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const filteredProducts = products.filter(p => p.id !== currentProductId)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    
    const container = scrollRef.current
    const scrollWidth = container.clientWidth
    const targetScroll = direction === "left" 
      ? container.scrollLeft - scrollWidth 
      : container.scrollLeft + scrollWidth

    gsap.to(container, {
      scrollLeft: targetScroll,
      duration: 1.4,
      ease: "expo.out",
      overwrite: "auto"
    })
  }

  return (
    <section className="py-24 bg-background border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header UI/UX Engineer Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary text-xs font-black tracking-[0.3em] uppercase">Sugerencias</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none">
              EXPLORA MÁS <br /> <span className="text-primary italic font-light">SOLUCIONES ASFÁLTICAS</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 transition-all duration-300 group shadow-xl"
            >
              <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 transition-all duration-300 group shadow-xl"
            >
              <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProducts.map((p) => (
            <div 
              key={p.id}
              className="min-w-[300px] md:min-w-[400px] group bg-card border border-white/5 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src={p.image} 
                  alt={p.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-primary text-[10px] font-black uppercase tracking-widest text-primary-foreground rounded-full">
                     {p.category}
                   </span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="h-28">
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tighter mb-3 leading-tight group-hover:text-primary transition-colors text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium line-clamp-2 leading-relaxed">{p.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-6 border-t border-white/5 pt-6">
                  {Object.entries(p.specs).map(([key, val]) => (
                    <div key={key}>
                      <span className="block text-[10px] uppercase font-black tracking-widest text-muted-foreground mb-1">{key}</span>
                      <span className="text-sm font-bold text-foreground">{val}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild
                  variant="ghost"
                  className="w-full justify-between hover:bg-primary hover:text-primary-foreground rounded-xl h-12 px-0 group/btn hover:px-6 transition-all duration-500"
                >
                  <Link href={p.href}>
                    <span className="font-black uppercase tracking-widest text-[10px]">Descubrir Producto</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
