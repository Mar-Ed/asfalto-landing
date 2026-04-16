import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros | JKO Asfaltos | Innovación y Calidad en Ingeniería Vial',
  description: 'Conozca JKO Asfaltos, una empresa moderna dedicada a la comercialización y transporte de productos asfálticos en todo el Perú. Garantizamos excelencia y tecnología en cada obra.',
  keywords: 'empresa de asfalto Perú, JKO Asfaltos historia, proveedores de asfalto Lima, infraestructura vial Perú',
}

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
