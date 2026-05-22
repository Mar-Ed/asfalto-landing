import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JKO Asfaltos | Asfaltos Lima, Asfaltos Perú y Brea',
  description: 'JKO Asfaltos: Especialistas en Asfaltos Lima y Asfaltos Perú. Venta de Asfaltos, Brea Líquida y Sólida, Mantos Asfálticos y Pavimentación Integral en todo el Perú.',
  keywords: 'ASFALTOS LIMA, ASFALTOS PERU, ASFALTOS, BREA, JKO ASFALTOS, venta de asfalto en Perú, pavimentación Lima, asfalto RC-250, mezcla asfáltica, impermeabilización',
  generator: 'JKO Asfaltos',
  openGraph: {
    title: 'JKO Asfaltos | Asfaltos y Brea en Lima y Perú',
    description: 'Venta de asfaltos, brea y soluciones de pavimentación con los más altos estándares de calidad (MTC). Atención en Lima y a nivel nacional.',
    type: 'website',
    url: 'https://jkoasfaltos.com',
    siteName: 'JKO Asfaltos',
    locale: 'es_PE',
  },
  icons: {
    icon: '/logo_oficial.png',
    apple: '/logo_oficial.png',
  },
}

import { ThemeProvider } from '@/components/providers/theme-provider'
import { SmoothScroll } from '@/components/providers/smooth-scroll'
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Analytics />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
