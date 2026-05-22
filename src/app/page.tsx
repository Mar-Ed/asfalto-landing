import { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { BrandStory } from "@/components/sections/brand-story"
import { Services } from "@/components/sections/services"
import { Products } from "@/components/sections/products"
import { QualityCommitment } from "@/components/sections/quality-commitment"
import { ContactForm } from "@/components/sections/contact-form"

export const metadata: Metadata = {
  title: 'JKO Asfaltos | Asfaltos Lima, Asfaltos Perú, Venta de Brea',
  description: 'JKO Asfaltos es la empresa líder en Asfaltos en Lima y Asfaltos en Perú. Venta de Asfaltos, Brea, Mantos Asfálticos y servicios de pavimentación con certificación MTC.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Services />
      <Products />
      <QualityCommitment />
      <ContactForm />
    </>
  )
}
