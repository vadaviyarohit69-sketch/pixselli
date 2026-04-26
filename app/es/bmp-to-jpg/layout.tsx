import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor BMP a JPG online gratis - Convertir imagenes BMP | Pixselli',
  description:
    'Convierte imagenes BMP a formato JPG online con procesamiento privado en navegador y control de calidad.',
  keywords: ['bmp a jpg', 'convertir bmp a jpg', 'convertidor bmp jpg', 'convertidor jpg'],
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
    canonical: 'https://pixselli.com/es/bmp-to-jpg',
    languages: {
      en: 'https://pixselli.com/bmp-to-jpg',
      es: 'https://pixselli.com/es/bmp-to-jpg',
      pt: 'https://pixselli.com/pt/bmp-to-jpg',
      fr: 'https://pixselli.com/fr/bmp-to-jpg',
      de: 'https://pixselli.com/de/bmp-to-jpg',
      it: 'https://pixselli.com/it/bmp-to-jpg',
      'x-default': 'https://pixselli.com/bmp-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertidor BMP a JPG online gratis - Pixselli',
    description: 'Convierte BMP a JPG rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/bmp-to-jpg',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor BMP a JPG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor BMP a JPG online gratis - Pixselli',
    description: 'Convierte BMP a JPG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishBmpToJpgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
