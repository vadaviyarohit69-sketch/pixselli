import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresor GIF online gratis - Reducir tamano GIF | Pixselli',
  description:
    'Comprime imagenes GIF online con optimizacion de calidad para archivos mas ligeros y procesamiento privado rapido.',
  keywords: ['compresor gif', 'comprimir gif', 'optimizar gif', 'reducir tamano gif'],
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
    canonical: 'https://pixselli.com/es/gif-compressor',
    languages: {
      en: 'https://pixselli.com/gif-compressor',
      es: 'https://pixselli.com/es/gif-compressor',
      pt: 'https://pixselli.com/pt/gif-compressor',
      fr: 'https://pixselli.com/fr/gif-compressor',
      de: 'https://pixselli.com/de/gif-compressor',
      it: 'https://pixselli.com/it/gif-compressor',
      'x-default': 'https://pixselli.com/gif-compressor',
    },
  },
  openGraph: {
    title: 'Compresor GIF online gratis - Pixselli',
    description: 'Reduce el tamano de archivo GIF con compresion rapida en navegador.',
    url: 'https://pixselli.com/es/gif-compressor',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta compresor GIF de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresor GIF online gratis - Pixselli',
    description: 'Comprime GIF y reduce tamano de archivo online rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishGifCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}