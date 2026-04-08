import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  servicios: [
    { label: "Venta de Asfalto", href: "#servicios" },
    { label: "Pavimentación", href: "#servicios" },
    { label: "Bacheo", href: "#servicios" },
    { label: "Señalización", href: "#servicios" },
  ],
  productos: [
    { label: "RC-250", href: "#productos" },
    { label: "Mezcla Asfáltica", href: "#productos" },
    { label: "Emulsión Catiónica", href: "#productos" },
    { label: "PEN 60/70", href: "#productos" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proyectos", href: "#" },
    { label: "Certificaciones", href: "#" },
    { label: "Contacto", href: "#contacto" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.png"
                alt="AsfaltoPro Logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Especialistas en ingeniería de asfaltos con más de 15 años de experiencia 
              construyendo la infraestructura vial del Perú.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Av. Industrial 1234, Chorrillos, Lima</p>
              <p>RUC: 20123456789</p>
              <p>+51 999 888 777</p>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 JKO Asfaltos - Calidad en cada kilómetro. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
