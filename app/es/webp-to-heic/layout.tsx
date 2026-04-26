import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor WebP a HEIC online gratis - Convertir imagenes WebP | Pixselli',
  description:
    'Convierte imagenes WebP a formato HEIC online con procesamiento privado en navegador y control de calidad.',
  keywords: ['webp a heic', 'convertir webp a heic', 'convertidor webp heic', 'convertidor heic'],
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
    canonical: 'https://pixselli.com/es/webp-to-heic',
    languages: {
      en: 'https://pixselli.com/webp-to-heic',
      es: 'https://pixselli.com/es/webp-to-heic',
      pt: 'https://pixselli.com/pt/webp-to-heic',
      fr: 'https://pixselli.com/fr/webp-to-heic',
      de: 'https://pixselli.com/de/webp-to-heic',
      it: 'https://pixselli.com/it/webp-to-heic',
      'x-default': 'https://pixselli.com/webp-to-heic',
    },
  },
  openGraph: {
    title: 'Convertidor WebP a HEIC online gratis - Pixselli',
    description: 'Convierte WebP a HEIC rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/webp-to-heic',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor WebP a HEIC de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor WebP a HEIC online gratis - Pixselli',
    description: 'Convierte WebP a HEIC online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishWebpToHeicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
