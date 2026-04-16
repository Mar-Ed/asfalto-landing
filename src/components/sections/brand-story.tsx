"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    "Materiales de primera calidad certificados",
    "Cumplimiento de Normas Técnicas Peruanas (MTC)",
    "Equipo técnico altamente capacitado",
    "Maquinaria de última generación",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Masked Reveal Animation (Mirroring Hero)
      tl.from(".story-reveal", {
        y: "110%",
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
      })
        .from(
          ".story-fade",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.8",
        )
        .from(
          imageContainerRef.current,
          {
            x: -50,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=1",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="relative py-20 lg:py-32 bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content */}
          <div className="space-y-10 lg:order-last">
            <div className="space-y-6 overflow-hidden">
              {/* Eyebrow Accent Bar - Gold */}
              <div className="story-fade flex items-center gap-4">
                <div className="w-12 h-[2px] bg-primary" />
                <span className="text-primary font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase px-1">
                  Nuestra Historia
                </span>
              </div>

              {/* Heading with Masked Reveal */}
              <h2 className="flex flex-col text-3xl sm:text-4xl lg:text-[3.5rem] leading-[1.1] tracking-tight">
                <span className="block overflow-hidden">
                  <span className="story-reveal block font-light text-foreground/90 italic">
                    Excelencia en cada
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="story-reveal block font-black text-primary -mt-1 uppercase tracking-tighter">
                    METRO DE ASFALTO
                  </span>
                </span>
              </h2>
            </div>

            <div className="space-y-8 story-fade">
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                  En{" "}
                  <span className="text-primary font-black">JKO Asfaltos</span>,
                  nos dedicamos a transformar la infraestructura vial de Lima y
                  el Perú con una visión moderna y un rigor técnico inigualable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trabajamos con los mejores materiales del mercado, incluyendo
                  mezclas asfálticas de alta especificación, RC-250 y emulsiones
                  catiónicas. Cada proyecto es un sello de calidad.
                </p>
              </div>

              {/* Features List with Blue Icons */}
              <ul className="space-y-4 pt-4 border-t border-border/50">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 transition-transform hover:translate-x-2 duration-300"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground font-semibold text-sm lg:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageContainerRef}
            className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl lg:order-first"
          >
            <Image
              src="/asfaltos/FONDOS_ASFALTOS/ASFALTOS_FONDOS3.png"
              alt="Equipo de ingeniería trabajando en obra de pavimentación"
              fill
              className="object-cover"
            />
            {/* Overlay badge with Industrial Blue */}
            <div className="absolute bottom-8 left-8 right-8 bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                  <span className="text-primary-foreground text-2xl font-black">
                    JKO
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-foreground text-lg font-black tracking-tight">
                    Innovación Vial
                  </p>
                  <p className="text-muted-foreground text-sm font-medium">
                    Tecnología de vanguardia para sus proyectos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
