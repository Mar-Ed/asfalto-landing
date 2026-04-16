import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brea Sólida | JKO Asfaltos | Sello de Alta Resistencia para Obras Civiles',
  description: 'Provisión de Brea Sólida certificada para juntas de dilatación y rellenos industriales. Resistencia extrema y adherencia garantizada en todo el Perú.',
  keywords: 'brea sólida, juntas de dilatación, brea industrial, asfalto sólido, JKO Asfaltos brea',
}

export default function BreaSolidaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
