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
  title: 'JKO Asfaltos | Venta de Asfalto, Brea y Mantos en Perú | Pavimentación en Lima',
  description: 'JKO Asfaltos: Especialistas en Ingeniería Vial. Venta de Asfalto RC-250, Brea Líquida y Sólida, Mantos Asfálticos y Pavimentación Integral en Lima y todo el Perú. Calidad certificada MTC.',
  keywords: 'JKO Asfaltos, venta de asfalto en Perú, brea líquida, brea sólida, mantos asfálticos, pavimentación Lima, asfalto RC-250, mezcla asfáltica, infraestructura vial, impermeabilización techos',
  generator: 'JKO Asfaltos Dashboard',
  openGraph: {
    title: 'JKO Asfaltos | Ingeniería y Suministros de Asfalto en Perú',
    description: 'Venta de asfalto, brea y soluciones de pavimentación con los más altos estándares de calidad (MTC). Atención a nivel nacional.',
    type: 'website',
    url: 'https://jkoasfaltos.com', // Asumiendo el domino principal
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
