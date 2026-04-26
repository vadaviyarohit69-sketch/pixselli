import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor GIF a JPG online gratis - Convertir imagenes GIF | Pixselli',
  description:
    'Convierte imagenes GIF a formato JPG online con procesamiento privado en navegador y control de calidad.',
  keywords: ['gif a jpg', 'convertir gif a jpg', 'convertidor gif jpg', 'convertidor jpg'],
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
    canonical: 'https://pixselli.com/es/gif-to-jpg',
    languages: {
      en: 'https://pixselli.com/gif-to-jpg',
      es: 'https://pixselli.com/es/gif-to-jpg',
      pt: 'https://pixselli.com/pt/gif-to-jpg',
      fr: 'https://pixselli.com/fr/gif-to-jpg',
      de: 'https://pixselli.com/de/gif-to-jpg',
      it: 'https://pixselli.com/it/gif-to-jpg',
      'x-default': 'https://pixselli.com/gif-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertidor GIF a JPG online gratis - Pixselli',
    description: 'Convierte GIF a JPG rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/gif-to-jpg',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor GIF a JPG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor GIF a JPG online gratis - Pixselli',
    description: 'Convierte GIF a JPG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishGifToJpgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
