import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresor JPG online gratis - Reducir tamano JPG | Pixselli',
  description:
    'Comprime imagenes JPG online con calidad ajustable para archivos mas ligeros y procesamiento privado rapido.',
  keywords: ['compresor jpg', 'comprimir jpg', 'optimizar jpg', 'reducir tamano jpg'],
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
    canonical: 'https://pixselli.com/es/jpg-compressor',
    languages: {
      en: 'https://pixselli.com/jpg-compressor',
      es: 'https://pixselli.com/es/jpg-compressor',
      pt: 'https://pixselli.com/pt/jpg-compressor',
      fr: 'https://pixselli.com/fr/jpg-compressor',
      de: 'https://pixselli.com/de/jpg-compressor',
      it: 'https://pixselli.com/it/jpg-compressor',
      'x-default': 'https://pixselli.com/jpg-compressor',
    },
  },
  openGraph: {
    title: 'Compresor JPG online gratis - Pixselli',
    description: 'Reduce el tamano de imagen JPG con control de calidad y salida rapida.',
    url: 'https://pixselli.com/es/jpg-compressor',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta compresor JPG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresor JPG online gratis - Pixselli',
    description: 'Comprime JPG y reduce tamano de archivo online rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishJpgCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
