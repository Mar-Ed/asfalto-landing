import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function BrandStory() {
  const features = [
    "Materiales de primera calidad certificados",
    "Cumplimiento de Normas Técnicas Peruanas (MTC)",
    "Equipo técnico altamente capacitado",
    "Maquinaria de última generación",
  ]

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
              alt="Equipo de ingeniería trabajando en obra de pavimentación"
              fill
              className="object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-serif text-xl font-bold">15</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Años de Trayectoria</p>
                  <p className="text-muted-foreground text-sm">Construyendo infraestructura que perdura</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Nuestra Historia
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
              Excelencia en cada metro de asfalto
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Desde hace más de 15 años, nos dedicamos a transformar la infraestructura vial 
              de Lima y el Perú. Nuestra pasión por la calidad y el compromiso con las normas 
              técnicas más exigentes nos han convertido en referentes del sector.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Trabajamos con los mejores materiales del mercado, incluyendo mezclas asfálticas 
              de alta especificación, asfaltos líquidos RC-250 y emulsiones catiónicas de grado 
              superior. Cada proyecto refleja nuestra dedicación a la durabilidad y la seguridad vial.
            </p>

            {/* Features */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
