import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresor JPEG online gratis - Reducir tamano JPEG | Pixselli',
  description:
    'Comprime imagenes JPEG online con calidad ajustable para archivos mas ligeros y procesamiento privado rapido.',
  keywords: ['compresor jpeg', 'comprimir jpeg', 'optimizar jpeg', 'reducir tamano jpeg'],
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
    canonical: 'https://pixselli.com/es/jpeg-compressor',
    languages: {
      en: 'https://pixselli.com/jpeg-compressor',
      es: 'https://pixselli.com/es/jpeg-compressor',
      pt: 'https://pixselli.com/pt/jpeg-compressor',
      fr: 'https://pixselli.com/fr/jpeg-compressor',
      de: 'https://pixselli.com/de/jpeg-compressor',
      it: 'https://pixselli.com/it/jpeg-compressor',
      'x-default': 'https://pixselli.com/jpeg-compressor',
    },
  },
  openGraph: {
    title: 'Compresor JPEG online gratis - Pixselli',
    description: 'Reduce el tamano de imagen JPEG con control de calidad y salida rapida.',
    url: 'https://pixselli.com/es/jpeg-compressor',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta compresor JPEG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresor JPEG online gratis - Pixselli',
    description: 'Comprime JPEG y reduce tamano de archivo online rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishJpegCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
