import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresor WebP online gratis - Reducir tamano WebP | Pixselli',
  description:
    'Comprime imagenes WebP online con optimizacion de calidad para archivos mas ligeros y procesamiento privado rapido.',
  keywords: ['compresor webp', 'comprimir webp', 'optimizar webp', 'reducir tamano webp'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pixselli.com/es/webp-compressor',
    languages: {
      en: 'https://pixselli.com/webp-compressor',
      es: 'https://pixselli.com/es/webp-compressor',
      pt: 'https://pixselli.com/pt/webp-compressor',
      fr: 'https://pixselli.com/fr/webp-compressor',
      de: 'https://pixselli.com/de/webp-compressor',
      it: 'https://pixselli.com/it/webp-compressor',
      'x-default': 'https://pixselli.com/webp-compressor',
    },
  },
  openGraph: {
    title: 'Compresor WebP online gratis - Pixselli',
    description: 'Reduce el tamano de imagen WebP con compresion rapida en navegador.',
    url: 'https://pixselli.com/es/webp-compressor',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta compresor WebP de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresor WebP online gratis - Pixselli',
    description: 'Comprime WebP y reduce tamano de archivo online rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishWebpCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}