import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor AVIF a WebP online gratis - Convertir imagenes AVIF | Pixselli',
  description:
    'Convierte imagenes AVIF a formato WebP online con procesamiento privado en navegador y control de calidad.',
  keywords: ['avif a webp', 'convertir avif a webp', 'convertidor avif webp', 'convertidor webp'],
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
    canonical: 'https://pixselli.com/es/avif-to-webp',
    languages: {
      en: 'https://pixselli.com/avif-to-webp',
      es: 'https://pixselli.com/es/avif-to-webp',
      pt: 'https://pixselli.com/pt/avif-to-webp',
      fr: 'https://pixselli.com/fr/avif-to-webp',
      de: 'https://pixselli.com/de/avif-to-webp',
      it: 'https://pixselli.com/it/avif-to-webp',
      'x-default': 'https://pixselli.com/avif-to-webp',
    },
  },
  openGraph: {
    title: 'Convertidor AVIF a WebP online gratis - Pixselli',
    description: 'Convierte AVIF a WebP rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/avif-to-webp',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor AVIF a WebP de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor AVIF a WebP online gratis - Pixselli',
    description: 'Convierte AVIF a WebP online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishAvifToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
