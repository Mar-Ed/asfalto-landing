import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jkoasfaltos.com' // Ajustar al dominio real cuando sea necesario
  
  const routes = [
    '',
    '/nosotros',
    '/anuncios',
    '/venta-de-asfalto-en-caliente',
    '/venta-de-asfalto-en-frio',
    '/venta-de-asfalto-mc30',
    '/venta-de-asfalto-pen',
    '/venta-de-asfalto-rc-250',
    '/productos/alquitran',
    '/productos/bitumen',
    '/productos/brea-liquida',
    '/productos/brea-solida',
    '/productos/emulsion-lenta',
    '/productos/emulsion-media',
    '/productos/emulsion-rapida',
    '/productos/manto-asfaltico-aluminizado',
    '/productos/manto-asfaltico-arenado',
    '/productos/manto-asfaltico-gravillado',
    '/productos/teja-asfaltica',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
