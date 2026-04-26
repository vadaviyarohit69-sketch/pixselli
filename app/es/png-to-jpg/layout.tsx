import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor PNG a JPG online gratis - Convertir imagenes PNG | Pixselli',
  description:
    'Convierte imagenes PNG a formato JPG online con control de calidad y procesamiento privado en navegador.',
  keywords: ['png a jpg', 'convertir png a jpg', 'convertidor png a jpg', 'png a jpeg'],
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
    canonical: 'https://pixselli.com/es/png-to-jpg',
    languages: {
      en: 'https://pixselli.com/png-to-jpg',
      es: 'https://pixselli.com/es/png-to-jpg',
      pt: 'https://pixselli.com/pt/png-to-jpg',
      fr: 'https://pixselli.com/fr/png-to-jpg',
      de: 'https://pixselli.com/de/png-to-jpg',
      it: 'https://pixselli.com/it/png-to-jpg',
      'x-default': 'https://pixselli.com/png-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertidor PNG a JPG online gratis - Pixselli',
    description: 'Convierte archivos PNG a JPG rapido con buen control de calidad.',
    url: 'https://pixselli.com/es/png-to-jpg',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor PNG a JPG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor PNG a JPG online gratis - Pixselli',
    description: 'Convierte PNG a JPG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishPngToJpgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
