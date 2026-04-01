import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-background">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Certificados por Normas Técnicas MTC
          </p>

          {/* Main Heading - SEO H1 */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 text-balance">
            Ingeniería en Asfalto:{" "}
            <span className="text-primary">Infraestructura de Alta Resistencia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Especialistas en Mezclas Asfálticas RC-250, Emulsiones Catiónicas y 
            Pavimentación Integral en Lima. Calidad que construye el futuro.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold"
            >
              <Link href="#contacto">
                Cotización Inmediata
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary px-8 py-6 text-base"
            >
              <Link href="#servicios">
                <Play className="mr-2 w-5 h-5" />
                Ver Proyectos
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border max-w-2xl mx-auto">
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-4xl font-semibold text-primary">15+</p>
              <p className="text-sm text-muted-foreground mt-1">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-4xl font-semibold text-primary">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Proyectos Ejecutados</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-4xl font-semibold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Garantía de Calidad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
