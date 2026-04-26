import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor PNG a WebP online gratis - Convertir imagenes PNG | Pixselli',
  description:
    'Convierte imagenes PNG a formato WebP online con control de calidad y procesamiento privado en navegador.',
  keywords: ['png a webp', 'convertir png a webp', 'convertidor png webp', 'convertidor webp'],
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
    canonical: 'https://pixselli.com/es/png-to-webp',
    languages: {
      en: 'https://pixselli.com/png-to-webp',
      es: 'https://pixselli.com/es/png-to-webp',
      pt: 'https://pixselli.com/pt/png-to-webp',
      fr: 'https://pixselli.com/fr/png-to-webp',
      de: 'https://pixselli.com/de/png-to-webp',
      it: 'https://pixselli.com/it/png-to-webp',
      'x-default': 'https://pixselli.com/png-to-webp',
    },
  },
  openGraph: {
    title: 'Convertidor PNG a WebP online gratis - Pixselli',
    description: 'Convierte PNG a WebP rapidamente con control de calidad.',
    url: 'https://pixselli.com/es/png-to-webp',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor PNG a WebP de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor PNG a WebP online gratis - Pixselli',
    description: 'Convierte PNG a WebP online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishPngToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
