import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor AVIF a PNG online gratis - Convertir imagenes AVIF | Pixselli',
  description:
    'Convierte imagenes AVIF a formato PNG online con procesamiento privado en navegador y salida de alta calidad.',
  keywords: ['avif a png', 'convertir avif a png', 'convertidor avif png', 'convertidor png'],
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
    canonical: 'https://pixselli.com/es/avif-to-png',
    languages: {
      en: 'https://pixselli.com/avif-to-png',
      es: 'https://pixselli.com/es/avif-to-png',
      pt: 'https://pixselli.com/pt/avif-to-png',
      fr: 'https://pixselli.com/fr/avif-to-png',
      de: 'https://pixselli.com/de/avif-to-png',
      it: 'https://pixselli.com/it/avif-to-png',
      'x-default': 'https://pixselli.com/avif-to-png',
    },
  },
  openGraph: {
    title: 'Convertidor AVIF a PNG online gratis - Pixselli',
    description: 'Convierte AVIF a PNG rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/avif-to-png',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor AVIF a PNG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor AVIF a PNG online gratis - Pixselli',
    description: 'Convierte AVIF a PNG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishAvifToPngLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
