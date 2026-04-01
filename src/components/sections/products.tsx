"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Asfalto Líquido RC-250",
    category: "Asfaltos Líquidos",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop",
    description: "Asfalto de curado rápido ideal para imprimación y tratamientos superficiales.",
    specs: {
      "Viscosidad": "250-500 cSt",
      "Punto de inflamación": "> 27°C",
      "Solvente": "Nafta",
      "Aplicación": "Imprimación",
    },
  },
  {
    id: 2,
    name: "Mezcla Asfáltica Convencional",
    category: "Mezclas en Caliente",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=2036&auto=format&fit=crop",
    description: "Mezcla asfáltica en caliente de alta densidad para carpetas de rodadura.",
    specs: {
      "Granulometría": "MAC-2, MAC-3",
      "Estabilidad": "> 815 kg",
      "Flujo": "2-4 mm",
      "Vacíos": "3-5%",
    },
  },
  {
    id: 3,
    name: "Emulsión Catiónica CRS-1",
    category: "Emulsiones",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
    description: "Emulsión de rotura rápida para tratamientos superficiales y riegos de liga.",
    specs: {
      "Residuo asfáltico": "> 60%",
      "Viscosidad": "20-100 SSF",
      "Carga": "Catiónica",
      "Rotura": "Rápida",
    },
  },
  {
    id: 4,
    name: "PEN 60/70",
    category: "Cementos Asfálticos",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
    description: "Cemento asfáltico de penetración 60-70 para mezclas de alto tráfico.",
    specs: {
      "Penetración": "60-70 dmm",
      "Punto abland.": "> 48°C",
      "Ductilidad": "> 100 cm",
      "Índice PVN": "-1 a +1",
    },
  },
]

export function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="productos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Catálogo de Productos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Materiales de ingeniería de alta especificación
          </h2>
          <p className="text-muted-foreground text-lg">
            Productos certificados que cumplen con las Normas Técnicas Peruanas y 
            estándares internacionales de calidad.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs Table */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredId === product.id ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <table className="w-full text-sm mb-4">
                    <tbody>
                      {Object.entries(product.specs).map(([key, value]) => (
                        <tr key={key} className="border-b border-border/50 last:border-0">
                          <td className="py-1.5 text-muted-foreground">{key}</td>
                          <td className="py-1.5 text-foreground text-right font-medium">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <Link href="#contacto">Solicitar Cotización</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
