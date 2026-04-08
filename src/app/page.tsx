import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { BrandStory } from "@/components/sections/brand-story"
import { Services } from "@/components/sections/services"
import { Products } from "@/components/sections/products"
import { QualityCommitment } from "@/components/sections/quality-commitment"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStory />
        <Services />
        <Products />
        <QualityCommitment />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
