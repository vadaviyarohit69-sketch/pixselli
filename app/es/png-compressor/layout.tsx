import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresor PNG online gratis - Reducir tamano PNG | Pixselli',
  description:
    'Comprime imagenes PNG online con optimizacion de calidad para archivos mas ligeros y procesamiento privado rapido.',
  keywords: ['compresor png', 'comprimir png', 'optimizar png', 'reducir tamano png'],
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
    canonical: 'https://pixselli.com/es/png-compressor',
    languages: {
      en: 'https://pixselli.com/png-compressor',
      es: 'https://pixselli.com/es/png-compressor',
      pt: 'https://pixselli.com/pt/png-compressor',
      fr: 'https://pixselli.com/fr/png-compressor',
      de: 'https://pixselli.com/de/png-compressor',
      it: 'https://pixselli.com/it/png-compressor',
      'x-default': 'https://pixselli.com/png-compressor',
    },
  },
  openGraph: {
    title: 'Compresor PNG online gratis - Pixselli',
    description: 'Reduce el tamano de imagen PNG con compresion rapida en navegador.',
    url: 'https://pixselli.com/es/png-compressor',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta compresor PNG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresor PNG online gratis - Pixselli',
    description: 'Comprime PNG y reduce tamano de archivo online rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishPngCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}