import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor HEIC a PNG online gratis - Convertir imagenes HEIC | Pixselli',
  description:
    'Convierte imagenes HEIC a formato PNG online con procesamiento privado en navegador y salida de alta calidad.',
  keywords: ['heic a png', 'convertir heic a png', 'convertidor heic png', 'convertidor heic iphone'],
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
    canonical: 'https://pixselli.com/es/heic-to-png',
    languages: {
      en: 'https://pixselli.com/heic-to-png',
      es: 'https://pixselli.com/es/heic-to-png',
      pt: 'https://pixselli.com/pt/heic-to-png',
      fr: 'https://pixselli.com/fr/heic-to-png',
      de: 'https://pixselli.com/de/heic-to-png',
      it: 'https://pixselli.com/it/heic-to-png',
      'x-default': 'https://pixselli.com/heic-to-png',
    },
  },
  openGraph: {
    title: 'Convertidor HEIC a PNG online gratis - Pixselli',
    description: 'Convierte HEIC a PNG rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/heic-to-png',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor HEIC a PNG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor HEIC a PNG online gratis - Pixselli',
    description: 'Convierte HEIC a PNG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishHeicToPngLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
