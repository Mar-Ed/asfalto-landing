import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manto Asfáltico Gravillado | JKO Asfaltos | Impermeabilización Definitiva',
  description: 'Membrana asfáltica gravillada para protección de techos y azoteas con acabado estético mineral. Protección UV y estanqueidad total garantizada.',
  keywords: 'manto asfáltico gravillado, manto asfáltico, impermeabilización techos, membrana asfáltica Perú, JKO Asfaltos',
}

export default function MantoGravilladoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
