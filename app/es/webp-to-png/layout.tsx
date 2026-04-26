import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor WebP a PNG online gratis - Convertir imagenes WebP | Pixselli',
  description:
    'Convierte imagenes WebP a formato PNG online con procesamiento en navegador y salida confiable.',
  keywords: ['webp a png', 'convertir webp a png', 'convertidor webp png', 'convertidor png'],
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
    canonical: 'https://pixselli.com/es/webp-to-png',
    languages: {
      en: 'https://pixselli.com/webp-to-png',
      es: 'https://pixselli.com/es/webp-to-png',
      pt: 'https://pixselli.com/pt/webp-to-png',
      fr: 'https://pixselli.com/fr/webp-to-png',
      de: 'https://pixselli.com/de/webp-to-png',
      it: 'https://pixselli.com/it/webp-to-png',
      'x-default': 'https://pixselli.com/webp-to-png',
    },
  },
  openGraph: {
    title: 'Convertidor WebP a PNG online gratis - Pixselli',
    description: 'Convierte WebP a PNG rapido con salida confiable.',
    url: 'https://pixselli.com/es/webp-to-png',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor WebP a PNG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor WebP a PNG online gratis - Pixselli',
    description: 'Convierte WebP a PNG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishWebpToPngLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
