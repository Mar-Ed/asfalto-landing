import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brea Líquida | JKO Asfaltos | Impermeabilización y Protección Hidrófuga',
  description: 'Venta de Brea Líquida de alta calidad en Lima y todo el Perú. Ideal para impermeabilización de techos, cimientos y muros de contención. Envíos inmediatos.',
  keywords: 'brea líquida, venta de brea, impermeabilización de techos, brea asfáltica, JKO Asfaltos brea',
}

export default function BreaLiquidaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
