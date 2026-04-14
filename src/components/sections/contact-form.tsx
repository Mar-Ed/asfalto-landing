"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, MapPin, Phone, Mail, Clock, ChevronDown, MoveRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const projectTypes = [
  "Pavimentación de carreteras",
  "Bacheo y mantenimiento",
  "Compra de asfalto",
  "Proyecto integral",
  "Otro",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    tipoObra: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const sectionRef = useRef<HTMLElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      })

      // Masked Title Reveal
      tl.from(".contact-reveal", {
        y: "110%",
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out"
      })
      .from(".contact-fade", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.8")
      .from(formRef.current, {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Build a premium corporate WhatsApp message
    const message = `🏗️  *SOLICITUD DE COTIZACIÓN - JKO ASFALTOS*  🏗️
_______________________________________

👤  *DATOS DEL CLIENTE:*
•  *Nombre:* ${formData.nombre}
•  *Empresa:* ${formData.empresa || 'Particular'}
•  *Email:* ${formData.email}
•  *Teléfono:* ${formData.telefono || 'No proporcionado'}

🛠️  *DETALLES DEL PROYECTO:*
•  *Tipo de Obra:* ${formData.tipoObra || 'Consulta general'}

💬  *REQUERIMIENTO ADICIONAL:*
"${formData.mensaje || 'Sin comentarios adicionales.'}"

_______________________________________
💻  *Enviado desde el Portal Web - JKO Asfaltos*`

    const whatsappUrl = `https://wa.me/51901080254?text=${encodeURIComponent(message)}`

    // Simulation delay for UX
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ nombre: "", empresa: "", email: "", telefono: "", tipoObra: "", mensaje: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section ref={sectionRef} id="contacto" className="py-20 lg:py-32 bg-background overflow-hidden border-t border-border/30">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column - Info with Animation */}
          <div ref={infoRef} className="space-y-10">
            <div className="space-y-6 overflow-hidden">
              <div className="contact-fade flex items-center gap-4">
                <div className="w-12 h-[2px] bg-primary" />
                <span className="text-primary text-xs font-black tracking-[0.4em] uppercase">Contáctenos</span>
              </div>
              
              <h2 className="flex flex-col text-4xl lg:text-[4rem] leading-[1.1] tracking-tighter">
                <span className="block overflow-hidden">
                  <span className="contact-reveal block font-light text-foreground/80 italic">Inicie su proyecto</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="contact-reveal block font-black text-foreground uppercase">CON NOSOTROS</span>
                </span>
              </h2>
              
              <p className="contact-fade text-muted-foreground text-lg lg:text-xl font-medium leading-relaxed max-w-lg">
                Complete el formulario y nuestro equipo técnico analizará su proyecto en menos de 24 horas.
              </p>
            </div>

            {/* Contact Info Stagger */}
            <div className="grid sm:grid-cols-2 gap-8 contact-fade">
              {[
                { icon: MapPin, title: "Ubicación", detail: "Av. Industrial 1234, Lima" },
                { icon: Phone, title: "Teléfono", detail: "+51 901 080 254" },
                { icon: Mail, title: "Email", detail: "jecko.company05@gmail.com" },
                { icon: Clock, title: "Atención", detail: "Lun-Vie: 8AM - 6PM" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{item.title}</p>
                    <p className="text-sm font-bold text-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form Container */}
          <div ref={formRef} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] blur-2xl opacity-20" />
            <div className="relative bg-card/50 backdrop-blur-xl border border-white/5 rounded-[2rem] p-10 lg:p-14 shadow-3xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-bounce">
                    <Send className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-foreground uppercase tracking-tight">¡Enviado!</h3>
                  <p className="text-muted-foreground font-medium">Nuestro equipo le contactará pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground px-1">Nombre *</label>
                      <Input name="nombre" required value={formData.nombre} onChange={handleChange} className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground px-1">Empresa</label>
                      <Input name="empresa" value={formData.empresa} onChange={handleChange} className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary transition-all font-bold" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground px-1">Email *</label>
                      <Input name="email" type="email" required value={formData.email} onChange={handleChange} className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground px-1">Teléfono</label>
                      <Input name="telefono" type="tel" value={formData.telefono} onChange={handleChange} className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary transition-all font-bold" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground px-1">Tipo de Proyecto</label>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={cn(
                          "w-full bg-white/5 border border-white/10 h-12 rounded-xl px-4 text-sm font-bold flex items-center justify-between transition-all",
                          isDropdownOpen ? "border-primary ring-1 ring-primary/20" : "hover:border-white/20"
                        )}
                      >
                        <span className={cn(formData.tipoObra ? "text-foreground" : "text-muted-foreground")}>
                          {formData.tipoObra || "Seleccionar..."}
                        </span>
                        <motion.div
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
                            className="absolute bottom-full lg:bottom-auto lg:top-full left-0 w-full z-50 pt-2 pb-2 lg:pt-2"
                          >
                            <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">
                              <div className="p-2 flex flex-col gap-1 max-h-[240px] overflow-y-auto">
                                {projectTypes.map((type) => (
                                  <button
                                    key={type}
                                    type="button"
                                    onClick={() => {
                                      setFormData(prev => ({ ...prev, tipoObra: type }))
                                      setIsDropdownOpen(false)
                                    }}
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary group/item transition-all text-left"
                                  >
                                    <span className={cn(
                                      "text-sm font-medium transition-colors",
                                      formData.tipoObra === type ? "text-primary" : "text-foreground/90 group-hover/item:text-primary"
                                    )}>
                                      {type}
                                    </span>
                                    <MoveRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground px-1">Mensaje</label>
                    <textarea name="mensaje" rows={3} value={formData.mensaje} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-bold text-foreground focus:border-primary transition-all resize-none" />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-8 text-xs font-black uppercase tracking-[0.3em] rounded-xl shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95">
                    {isSubmitting ? "PROCESANDO..." : "ENVIAR SOLICITUD"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
