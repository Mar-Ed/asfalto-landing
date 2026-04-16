"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, Shield, Users, Target, CheckCircle2 } from "lucide-react"

export default function NosotrosPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Animate sections on scroll
    const sections = gsap.utils.toArray('.gsap-section')
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="bg-background min-h-screen pt-24 lg:pt-32 pb-20">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/asfalto_hero1.png"
            alt="Nosotros JKO Hero"
            fill
            className="object-cover object-center brightness-[0.25]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background"></div>
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-black tracking-[0.2em] uppercase mb-4 text-sm lg:text-lg">
              Empresa de Asfalto en Lima Perú
            </span>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 text-white drop-shadow-2xl leading-none">
              JKO ASFALTOS: <br/> <span className="text-primary italic">INGENIERÍA VIAL</span>
            </h1>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Presentación Corporativa */}
      <section className="container mx-auto px-4 py-16 lg:py-24 gsap-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
              <CheckCircle2 size={14} /> Sobre JKO Asfaltos
            </div>
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9]">
              Trayectoria <br /> & <span className="text-primary text-outline-primary">Confianza</span>
            </h2>
            <div className="relative">
              <p className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-6">
                Somos una empresa que comercializa, transporta y abastece productos asfálticos en todo el Perú.
              </p>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg lg:text-xl">
                <p>
                  Bajo la dirección de profesionales de gran trayectoria y experiencia, contamos con <strong>más de 30 años</strong> trabajando en el rubro de la construcción de carreteras y vías.
                </p>
                <p>
                  Creamos esta empresa con el objetivo de dar solución a las grandes dificultades que se tienen en este sector de la construcción, garantizando el correcto y oportuno abastecimiento de insumos asfálticos con un producto avalado y certificado.
                </p>
                <p>
                  Tenemos la firme convicción que lo que empieza bien termina mejor y el tiempo nos lo confirma con años de experiencia participando progresivamente en múltiples obras y respondiendo con eficiencia a las exigencias de nuestros clientes y socios estratégicos.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 border border-white/10"
            >
              <Image 
                src="/asphalt_workers_premium_1775080184201.png"
                alt="Operarios JKO Asfatos"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </motion.div>
            
            {/* Decals */}
            <div className="absolute -bottom-10 -right-6 lg:-right-10 bg-card p-8 rounded-[2.5rem] border border-white/10 shadow-2xl flex items-center gap-6 backdrop-blur-xl">
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground transform -rotate-6 group-hover:rotate-0 transition-transform">
                <Award size={40} />
              </div>
              <div>
                <p className="text-4xl font-black">+30</p>
                <p className="text-xs text-muted-foreground uppercase font-black tracking-widest leading-none">Años de <br />Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos / Nuestro Diferencial */}
      <section 
        className="relative py-16 lg:py-24 overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/asfalto_aplanadora.png')" }}
      >
        {/* Overlays matching EXACTLY the Services Section style */}
        <div className="absolute inset-0 bg-black/55 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0" />

        <div className="container relative z-10 mx-auto px-4 gsap-section">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary text-[10px] uppercase font-black tracking-[0.4em]">Por qué elegir JKO</span>
              <div className="w-12 h-[2px] bg-primary" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none text-white">
              Nuestro <span className="text-primary italic">Diferencial</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
              Garantizamos soluciones eficientes y abastecimiento oportuno en cada rincón del Perú.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Abastecimiento Oportuno", desc: "Logística diseñada para erradicar las dificultades de suministro en obras de gran escala." },
              { title: "Calidad Certificada", desc: "Productos asfálticos avalados y certificados bajo las normas más exigentes del sector." },
              { title: "Dirección Experta", desc: "Liderados por profesionales con tres décadas de experiencia en construcción de vías." },
              { title: "Eficacia Operativa", desc: "Participación progresiva en múltiples obras con resultados eficientes y duraderos." },
              { title: "Socios Estratégicos", desc: "Construimos relaciones de confianza respondiendo a las altas exigencias del mercado." },
              { title: "Cobertura Nacional", desc: "Llegamos a todo el Perú, comercializando y transportando el asfalto que tu obra necesita." }
            ].map((item, idx) => (
              <div key={idx} className="bg-card/50 backdrop-blur-sm p-10 rounded-[2rem] border border-white/5 hover:border-primary/50 transition-all group hover:bg-card">
                <CheckCircle2 className="text-primary w-12 h-12 mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-muted-foreground transition-colors group-hover:text-foreground/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Equipo Grid */}
      <section className="container mx-auto px-4 py-16 lg:py-24 gsap-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-xl">
             <Image 
                src="/TRABAJANDO_CONSTRUCTORES.jpg"
                alt="Constructores trabajando asfalto"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight">
              Un Equipo <span className="text-primary">Especializado</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Detrás de cada metro cúbico de asfalto producido en JKO Asfaltos, hay un equipo humano comprometido. Nuestra familia operativa y administrativa trabaja en sincronía para ofrecer soluciones viales perfectas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Creemos firmemente que la infraestructura une personas, negocios y ciudades completas. Es por ello que no solo vendemos materiales, construimos el camino hacia el desarrollo.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                   <div key={i} className="w-12 h-12 rounded-full border-2 border-background overflow-hidden relative bg-muted">
                      <Image src="/placeholder-user.jpg" alt="Team member" fill className="object-cover" />
                   </div>
                ))}
              </div>
              <span className="text-sm font-bold uppercase text-muted-foreground">Expertos a tu servicio</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
