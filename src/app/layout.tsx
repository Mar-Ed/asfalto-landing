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
  title: 'Venta de Asfalto RC-250 y Pavimentación en Lima | Especialistas en Infraestructura',
  description: 'Ingeniería en Asfalto de Alta Resistencia. Especialistas en Mezclas Asfálticas RC-250, Emulsiones Catiónicas y Pavimentación Integral en Lima, Perú. Cumplimiento de Normas Técnicas Peruanas MTC.',
  keywords: 'asfalto RC-250, pavimentación Lima, mezcla asfáltica, emulsión catiónica, PEN 60/70, infraestructura vial, asfalto Perú',
  generator: 'v0.app',
  openGraph: {
    title: 'Ingeniería en Asfalto de Alta Resistencia | Lima, Perú',
    description: 'Especialistas en Mezclas Asfálticas RC-250, Emulsiones y Pavimentación Integral. Calidad certificada según Normas Técnicas Peruanas.',
    type: 'website',
    locale: 'es_PE',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
