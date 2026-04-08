"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown, MoveRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"


const asfaltosItems = [
  { label: "Venta De Asfalto RC 250", href: "/productos/asfalto-rc250" },
  { label: "Venta De Asfalto MC 30", href: "/productos/asfalto-mc30" },
  { label: "Venta De Asfalto PEN", href: "/productos/asfalto-pen" },
  { label: "Venta De Asfalto En Frio", href: "/productos/asfalto-frio" },
  { label: "Venta De Asfalto En Caliente", href: "/productos/asfalto-caliente" },
  { label: "Venta De Emulsion Asfaltica Lenta", href: "/productos/emulsion-lenta" },
  { label: "Venta De Emulsion Asfaltica Media", href: "/productos/emulsion-media" },
  { label: "Venta De Emulsion Asfaltica Rapida", href: "/productos/emulsion-rapida" },
  { label: "Venta De Brea Solida", href: "/productos/brea-solida" },
  { label: "Venta De Brea Liquida", href: "/productos/brea-liquida" },
  { label: "Venta De Teja Asfaltica", href: "/productos/teja-asfaltica" },
  { label: "Venta De Bitumen", href: "/productos/bitumen" },
  { label: "Venta De Alquitran", href: "/productos/alquitran" },
]

const mantosItems = [
  { label: "Manto Asfaltico Gravillado", href: "/productos/manto-gravillado" },
  { label: "Manto Asfaltico Arenado", href: "/productos/manto-arenado" },
  { label: "Manto Asfaltico Aluminizado", href: "/productos/manto-aluminizado" },
]

function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors py-2",
          isOpen ? "text-primary" : "text-foreground hover:text-primary"
        )}
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
            className="absolute top-full left-0 pt-2 w-72 z-50 pointer-events-auto"
          >
            <div className="bg-card border border-border rounded-xl shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-md">
              <div className="p-2 flex flex-col gap-1">
                {items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary group/item transition-all"
                  >
                    <span className="text-sm font-medium text-foreground/90 group-hover/item:text-primary transition-colors">
                      {item.label}
                    </span>
                    <MoveRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="JKO Asfaltos Logo"
                width={160}
                height={160}
                className="w-20 h-20 lg:w-32 lg:h-32 object-contain group-hover:scale-110 transition-all duration-700 drop-shadow-2xl"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-black tracking-tighter leading-none text-foreground uppercase">
                <span className="text-primary">JKO</span> ASFALTOS
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.1em] font-bold">
                Calidad en cada kilómetro
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="#nosotros" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
              Empresa
            </Link>
            
            <NavDropdown label="Asfaltos" items={asfaltosItems} />
            <NavDropdown label="Mantos" items={mantosItems} />
            <Link href="#anuncios" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
              Anuncios
            </Link>
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-6">
            <div className="hidden xl:flex flex-col items-end">
              <a
                href="tel:+51999888777"
                className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +51 999 888 777
              </a>
              <span className="text-[10px] text-muted-foreground uppercase font-medium">Asistencia 24/7</span>
            </div>
            
            <Button
              asChild
              className="hidden sm:flex rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-12 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              <Link href="#contacto">Contáctanos</Link>
            </Button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-secondary text-foreground hover:ring-2 hover:ring-primary/50 transition-all"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-border bg-card pb-8"
            >
              <div className="flex flex-col gap-2 pt-6">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold p-3 hover:bg-secondary rounded-lg transition-colors"
                >
                  Inicio
                </Link>
                <Link
                  href="#nosotros"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold p-3 hover:bg-secondary rounded-lg transition-colors"
                >
                  Empresa
                </Link>
                

                {/* Mobile Asfaltos Accordion */}
                <div>
                  <button 
                    onClick={() => toggleSection('asfaltos')}
                    className="w-full flex items-center justify-between text-lg font-bold p-3 hover:bg-secondary rounded-lg transition-colors"
                  >
                    Asfaltos
                    <ChevronDown className={cn("w-5 h-5 transition-transform", expandedSection === 'asfaltos' && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {expandedSection === 'asfaltos' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-6 flex flex-col gap-1 overflow-hidden"
                      >
                        {asfaltosItems.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-base font-medium py-3 text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Mantos Accordion */}
                <div>
                  <button 
                    onClick={() => toggleSection('mantos')}
                    className="w-full flex items-center justify-between text-lg font-bold p-3 hover:bg-secondary rounded-lg transition-colors"
                  >
                    Mantos
                    <ChevronDown className={cn("w-5 h-5 transition-transform", expandedSection === 'mantos' && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {expandedSection === 'mantos' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-6 flex flex-col gap-1 overflow-hidden"
                      >
                        {mantosItems.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-base font-medium py-3 text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href="#anuncios"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold p-3 hover:bg-secondary rounded-lg transition-colors"
                >
                  Anuncios
                </Link>
                
                <Button
                  asChild
                  className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-black h-14 rounded-xl shadow-xl shadow-primary/20"
                >
                  <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
                    COTIZACIÓN INMEDIATA
                  </Link>
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
