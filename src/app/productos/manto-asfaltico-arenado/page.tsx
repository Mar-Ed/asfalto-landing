"use client"

import { Grip, Layers, ThermometerSun, Anchor, ArrowUpRight } from "lucide-react"
import { MantoTemplate, MantoData } from "@/components/templates/manto-template"

const arenadoData: MantoData = {
  id: 15,
  hero: {
    badge: "Resistencia Multicapa",
    badgeIcon: Grip,
    title: "Manto Asfáltico",
    highlight: "Arenado",
    description: "Membrana prefabricada de alta ingeniería ideal para proyectos que exigen una impermeabilización robusta bajo acabados duros, con adherencia insuperable.",
    bgImage: "/fondo_asfalto.png"
  },
  intro: {
    title: "Asfalto Modificado APP",
    text: "Compuestos por una selección especial de asfalto modificado con polímero APP (Polipropileno Atáctico) virgen. Esta formulación crea una barrera elástica, plástica y altamente durable ante las exigencias de la intemperie.",
    image: "/manto_asfalto_arenado.png",
    note: "El acabado arenado proporciona la rugosidad necesaria para un anclaje perfecto con materiales de construcción posteriores, siendo excelente como capa única o primera membrana.",
    specs: "Presentación en rollos de 1m x 10m², núcleo de poliéster no tejido de 180g/m² y espesores de 2.7 mm a 4.0 mm. Con cara inferior de polietileno flameable para fusión térmica total."
  },
  features: {
    title: "Alto Desempeño",
    cards: [
      { title: "Membrana Adaptativa", desc: "Soporta cambios bruscos de temperatura climática, expandiéndose y contrayéndose térmicamente sin rasgarse.", icon: ThermometerSun },
      { title: "Memoria Elástica Absoluta", desc: "En áreas sujetas a movimientos, se adapta y recupera rápidamente su dimensión estructural original.", icon: Layers },
      { title: "Poder de Punzonamiento", desc: "Estructura reforzada en el núcleo que soporta acabados pesados como tejas arquitectónicas y losetas.", icon: ArrowUpRight },
      { title: "Máxima Adherencia Superior", desc: "La terminación arenada brinda exactamente la rugosidad requerida para anclajes con morteros.", icon: Anchor }
    ]
  },
  applications: {
    title: "Usos Críticos",
    intro: "El Manto Asfáltico Arenado de JKO Asfalto es la base fundamental estructural para:",
    items: [
      "Sistemas Bajo Acabado: Terrazas y balcones para losetas cerámicas.",
      "Obras Estructurales: Cimientos y muros de contención de hormigón.",
      "Proyectos Hidráulicos: Canales de regadío subterráneos.",
      "Infraestructura Urbana: Sistemas bicapa de impermeabilización puente."
    ],
    images: [
      "/mantos/manto_imagen1.png",
      "/mantos/manto_imagen2.png"
    ]
  }
}

export default function MantoArenadoPage() {
  return <MantoTemplate data={arenadoData} />
}
