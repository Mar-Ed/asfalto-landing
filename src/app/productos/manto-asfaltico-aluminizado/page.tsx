"use client"

import { Sun, ThermometerSun, Sparkles, Settings2, ShieldCheck } from "lucide-react"
import { MantoTemplate, MantoData } from "@/components/templates/manto-template"

const aluminizadoData: MantoData = {
  id: 16,
  hero: {
    badge: "Escudo Térmico",
    badgeIcon: Sun,
    title: "Manto Asfáltico",
    highlight: "Aluminizado",
    description: "Membrana autoprotegida avanzada diseñada para proporcionar no solo una barrera hidráulica total, sino también un control térmico eficiente mediante reflexión solar.",
    bgImage: "/fondo_asfalto.png"
  },
  intro: {
    title: "Protección Autoprotegida",
    text: "Mantos aluminizados elaborados con asfalto de penetración modificado con resinas especiales y polímeros SBS/APP. Su terminación exclusiva de lámina de aluminio gofrado actúa como un espejo técnico.",
    image: "/manto_asfalto_aluminizado.png",
    note: "Diseñado como un sistema de capa única para permanecer expuesto a la intemperie total, manteniendo el confort térmico interior con un mantenimiento extremadamente simplificado.",
    specs: "Fusión térmica rápida con rollos de 1m x 10m², y un núcleo de refuerzo central. Lámina superior de aluminio de 40 micras para máxima protección térmica y espesores desde 3.0 mm a 4.0 mm."
  },
  features: {
    title: "Estructurales",
    cards: [
      { title: "Reflexión Solar Activa", desc: "Rechaza rayos ultravioleta controlando la temperatura interior de la edificación notablemente.", icon: Sun },
      { title: "Alta Elasticidad Térmica", desc: "Resinas selectas que soportan los cambios bruscos de temperatura ambiental sin fisurarse.", icon: ThermometerSun },
      { title: "Mantenimiento Simple", desc: "Su coraza exterior requiere mínimo cuidado, apenas necesitando limpieza con agua.", icon: Sparkles },
      { title: "Estabilidad Dimensional Absoluta", desc: "No se expande ni contrae, asegurando una adherencia permanente garantizada.", icon: Settings2 }
    ]
  },
  applications: {
    title: "Soluciones Térmicas",
    intro: "El Manto Asfáltico Aluminizado de JKO Asfalto es la solución estandarizada para:",
    items: [
      "Techos y Azoteas Expuestas completamente a las zonas de alta radiación constante.",
      "Coberturas de Naves Industriales y galpones de gran escala y superficie.",
      "Impermeabilización de Losas Nervadas expuestas con arquitectura y geometrías complejas.",
      "Sistemas pasivos de ahorro energético para estabilización interna de clima."
    ],
    images: [
      "/mantos/manto_imagen1.png",
      "/mantos/manto_imagen2.png"
    ]
  }
}

export default function MantoAluminizadoPage() {
  return <MantoTemplate data={aluminizadoData} />
}
