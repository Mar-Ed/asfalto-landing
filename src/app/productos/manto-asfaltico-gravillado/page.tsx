"use client"

import { ShieldCheck, Layers, Sun, Factory, ArrowUpRight } from "lucide-react"
import { MantoTemplate, MantoData } from "@/components/templates/manto-template"

const gravilladoData: MantoData = {
  id: 14,
  hero: {
    badge: "Solución Integral",
    badgeIcon: ShieldCheck,
    title: "Manto Asfáltico",
    highlight: "Gravillado",
    description: "Diseñado como una solución de ingeniería preelaborada, se consolida como la capa única de impermeabilización definitiva para grandes proyectos y edificaciones civiles.",
    bgImage: "/fondo_asfalto.png"
  },
  intro: {
    title: "Protección y Estética",
    text: "Cada rollo es el resultado de un proceso de fabricación multicapa que asegura durabilidad extrema. Está conformado por una capa central de refuerzo de poliéster, capas antiadherentes, una terminación superficial de protección mineral y asfalto impermeabilizante modificado.",
    image: "/manto_asfalto_gravillado.png",
    note: "En JKO Asfalto no solo proveemos el material; garantizamos el éxito con instaladores expertos. Aseguramos una soldadura por termofusión impecable.",
    specs: "Formatos exactos de suministro: Manto asfáltico por rollo de 1m x 10m², con espesores técnicos desde 2.7 mm hasta 4.0 mm, adaptables a su requerimiento."
  },
  features: {
    title: "Composición Avanzada",
    cards: [
      { title: "Refuerzo Estructural", desc: "Capa central de poliéster que brinda alta resistencia mecánica ante la elongación y tensión.", icon: Layers },
      { title: "Cara Inferior Termofusionable", desc: "Polietileno flameable de 10 micras diseñado para una fusión adherente y anclaje perfecto.", icon: Factory },
      { title: "Defensa Mineral", desc: "Cara superior con granilla de cuarzo ceramizado que funciona como barrera protectora visual.", icon: ArrowUpRight },
      { title: "Protección UV", desc: "El acabado mineral repele la radiación ultravioleta extendiendo su vida al exterior.", icon: Sun }
    ]
  },
  applications: {
    title: "Usos Estratégicos",
    intro: "Nuestra tecnología de protección está certificada para garantizar hermeticidad total y absoluta en:",
    items: [
      "Cubiertas: Techos, azoteas y losas nervadas de cualquier inclinación.",
      "Obras Subterráneas: Sótanos y cimientos expuestos.",
      "Sistemas Hidráulicos: Piscinas, canales y reservorios estructurados.",
      "Infraestructura Pesada: Puentes, viaductos y pavimentaciones."
    ],
    images: [
      "/mantos/manto_imagen1.png",
      "/mantos/manto_imagen2.png"
    ]
  }
}

export default function MantoGravilladoPage() {
  return <MantoTemplate data={gravilladoData} />
}
