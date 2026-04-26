import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor WebP a JPG online gratis - Convertir imagenes WebP | Pixselli',
  description:
    'Convierte imagenes WebP a formato JPG online con procesamiento privado en navegador y resultado de calidad.',
  keywords: ['webp a jpg', 'convertir webp a jpg', 'convertidor webp jpg', 'webp a jpeg'],
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
    canonical: 'https://pixselli.com/es/webp-to-jpg',
    languages: {
      en: 'https://pixselli.com/webp-to-jpg',
      es: 'https://pixselli.com/es/webp-to-jpg',
      pt: 'https://pixselli.com/pt/webp-to-jpg',
      fr: 'https://pixselli.com/fr/webp-to-jpg',
      de: 'https://pixselli.com/de/webp-to-jpg',
      it: 'https://pixselli.com/it/webp-to-jpg',
      'x-default': 'https://pixselli.com/webp-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertidor WebP a JPG online gratis - Pixselli',
    description: 'Convierte archivos WebP a JPG rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/webp-to-jpg',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor WebP a JPG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor WebP a JPG online gratis - Pixselli',
    description: 'Convierte WebP a JPG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishWebpToJpgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
