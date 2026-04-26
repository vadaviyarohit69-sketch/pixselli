import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresion sin perdida online gratis - Mantener calidad | Pixselli',
  description:
    'Comprime imagenes con configuracion sin perdida para reducir tamano manteniendo calidad visual con procesamiento privado.',
  keywords: ['compresion sin perdida', 'reducir tamano sin perdida', 'optimizacion de imagen', 'compresor online'],
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
    canonical: 'https://pixselli.com/es/lossless-compression',
    languages: {
      en: 'https://pixselli.com/lossless-compression',
      es: 'https://pixselli.com/es/lossless-compression',
      pt: 'https://pixselli.com/pt/lossless-compression',
      fr: 'https://pixselli.com/fr/lossless-compression',
      de: 'https://pixselli.com/de/lossless-compression',
      it: 'https://pixselli.com/it/lossless-compression',
      'x-default': 'https://pixselli.com/lossless-compression',
    },
  },
  openGraph: {
    title: 'Compresion sin perdida online gratis - Pixselli',
    description: 'Optimiza imagenes sin perdida manteniendo alta calidad.',
    url: 'https://pixselli.com/es/lossless-compression',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta de compresion sin perdida de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresion sin perdida online gratis - Pixselli',
    description: 'Reduce tamano de imagen sin perder calidad con compresion sin perdida.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishLosslessCompressionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
