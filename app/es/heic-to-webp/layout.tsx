import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor HEIC a WebP online gratis - Convertir imagenes HEIC | Pixselli',
  description:
    'Convierte imagenes HEIC a formato WebP online con procesamiento privado en navegador y control de calidad.',
  keywords: ['heic a webp', 'convertir heic a webp', 'convertidor heic webp', 'convertidor heic iphone'],
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
    canonical: 'https://pixselli.com/es/heic-to-webp',
    languages: {
      en: 'https://pixselli.com/heic-to-webp',
      es: 'https://pixselli.com/es/heic-to-webp',
      pt: 'https://pixselli.com/pt/heic-to-webp',
      fr: 'https://pixselli.com/fr/heic-to-webp',
      de: 'https://pixselli.com/de/heic-to-webp',
      it: 'https://pixselli.com/it/heic-to-webp',
      'x-default': 'https://pixselli.com/heic-to-webp',
    },
  },
  openGraph: {
    title: 'Convertidor HEIC a WebP online gratis - Pixselli',
    description: 'Convierte HEIC a WebP rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/heic-to-webp',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor HEIC a WebP de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor HEIC a WebP online gratis - Pixselli',
    description: 'Convierte HEIC a WebP online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishHeicToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
