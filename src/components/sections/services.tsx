import { Fuel, Construction, Truck, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Fuel,
    title: "Venta de Asfalto",
    description: "Mezclas asfálticas en caliente y frío, RC-250, PEN 60/70 y más. Productos certificados según normas MTC.",
    features: ["Mezclas en caliente", "Mezclas en frío", "RC-250 Premium", "PEN 60/70"],
  },
  {
    icon: Construction,
    title: "Ejecución de Obras",
    description: "Pavimentación de carreteras, bacheo profesional y señalización vial. Proyectos llave en mano.",
    features: ["Pavimentación vial", "Bacheo profesional", "Señalización", "Mantenimiento"],
  },
  {
    icon: Truck,
    title: "Soporte Logístico",
    description: "Maquinaria pesada especializada y transporte de materiales a nivel nacional.",
    features: ["Maquinaria pesada", "Transporte especializado", "Distribución nacional", "Asistencia técnica"],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Servicios Técnicos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Soluciones integrales en infraestructura vial
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos un portafolio completo de servicios para cubrir todas las necesidades 
            de su proyecto de pavimentación.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                Solicitar información
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
