import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  asfaltos: [
    { label: "Asfalto RC-250", href: "/venta-de-asfalto-rc-250" },
    { label: "Asfalto MC-30", href: "/venta-de-asfalto-mc30" },
    { label: "Asfalto PEN 60/70", href: "/venta-de-asfalto-pen" },
    { label: "Asfalto en Frío", href: "/venta-de-asfalto-en-frio" },
    { label: "Asfalto en Caliente", href: "/venta-de-asfalto-en-caliente" },
  ],
  mantos: [
    { label: "Manto Gravillado", href: "/productos/manto-asfaltico-gravillado" },
    { label: "Manto Arenado", href: "/productos/manto-asfaltico-arenado" },
    { label: "Manto Aluminizado", href: "/productos/manto-asfaltico-aluminizado" },
  ],
  empresa: [
    { label: "Acerca de Nosotros", href: "/nosotros" },
    { label: "Catálogo", href: "/#productos" },
    { label: "Certificaciones", href: "/#certificaciones" },
    { label: "Contacto", href: "/#contacto" },
  ],
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.031c0 2.122.553 4.197 1.604 6.04L0 24l6.104-1.602a11.803 11.803 0 005.94 1.597h.005c6.634 0 12.032-5.39 12.035-12.028a11.752 11.752 0 00-3.393-8.532z"/>
  </svg>
)

const socialLinks = [
  { icon: Mail, href: "mailto:jecko.company05@gmail.com", label: "Gmail" },
  { icon: WhatsAppIcon, href: "https://wa.me/51901080254", label: "WhatsApp" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="pt-12 pb-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="group mb-8">
              <div className="relative">
                <Image
                  src="/logo_oficial.png"
                  alt="JKO Asfaltos Logo"
                  width={160}
                  height={160}
                  className="w-28 h-28 lg:w-40 lg:h-40 object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(242,183,5,0.1)]"
                />
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm text-sm">
              Especialistas en la provisi&oacute;n y log&iacute;stica de asfaltos de alta calidad para proyectos de infraestructura en todo el Per&uacute;.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground/80">
              <p className="flex items-center gap-2">Av. Industrial 1234, Lima</p>
              <span className="hidden sm:block w-[1px] h-3 bg-border" />
              <p>jecko.company05@gmail.com</p>
              <span className="hidden sm:block w-[1px] h-3 bg-border" />
              <p>+51 901 080 254</p>
            </div>
          </div>

          {/* Asfaltos Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary">Asfaltos</h4>
            <ul className="space-y-4">
              {footerLinks.asfaltos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 text-sm"
                  >
                    <span className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mantos Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary">Mantos</h4>
            <ul className="space-y-4">
              {footerLinks.mantos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 text-sm"
                  >
                    <span className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nosotros Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary">Nosotros</h4>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 text-sm"
                  >
                    <span className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer - Polished UI */}
        <div className="py-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-xs text-muted-foreground font-medium tracking-wide">
              © {new Date().getFullYear()} JKO Asfaltos - Calidad en cada kilómetro.
            </p>
            <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest font-bold">
              Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1 transition-all duration-500 shadow-lg shadow-black/20"
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
