"use client"

import { ShieldCheck, Truck, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCTAProps {
  whatsappUrl: string;
  productName: string;
  info?: string;
}

export const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export function ProductCTA({ whatsappUrl, productName, info }: ProductCTAProps) {
  return (
    <div className="mt-8 pt-8 border-t border-border space-y-6">
      <div className="flex items-center gap-4 group">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
          <ShieldCheck className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-lg text-foreground uppercase tracking-tight">Somos JKO Asfalto</h4>
          <p className="text-xs text-primary font-black uppercase tracking-[0.2em]">Compromiso con la Excelencia</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
          Ofrecemos productos de calidad y altamente resistentes, diseñados para la infraestructura vial más exigente del Perú. 
          {info && <span className="block mt-2 font-medium text-foreground/80">{info}</span>}
        </p>
        
        <div className="grid grid-cols-2 gap-4">
           <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
             <Truck className="w-4 h-4 text-primary" />
             Envío Rápido
           </div>
           <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
             <Award className="w-4 h-4 text-primary" />
             Calidad MTC
           </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto rounded-full px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            Solicitar Cotización de {productName}
          </a>
        </Button>
        <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest text-center sm:text-left leading-tight">
          Respuesta inmediata <br/> vía WhatsApp
        </p>
      </div>
    </div>
  )
}
