import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros | JKO Asfaltos | 30 Años de Experiencia en Ingeniería Vial',
  description: 'Conozca JKO Asfaltos, empresa líder en comercialización y transporte de productos asfálticos en todo el Perú. Más de 30 años garantizando calidad en obras viales.',
  keywords: 'empresa de asfalto Perú, JKO Asfaltos historia, proveedores de asfalto Lima, infraestructura vial Perú',
}

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
