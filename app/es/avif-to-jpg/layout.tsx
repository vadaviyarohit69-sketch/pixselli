import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor AVIF a JPG online gratis - Convertir imagenes AVIF | Pixselli',
  description:
    'Convierte imagenes AVIF a formato JPG online con procesamiento privado en navegador y control de calidad.',
  keywords: ['avif a jpg', 'convertir avif a jpg', 'convertidor avif jpg', 'convertidor jpg'],
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
    canonical: 'https://pixselli.com/es/avif-to-jpg',
    languages: {
      en: 'https://pixselli.com/avif-to-jpg',
      es: 'https://pixselli.com/es/avif-to-jpg',
      pt: 'https://pixselli.com/pt/avif-to-jpg',
      fr: 'https://pixselli.com/fr/avif-to-jpg',
      de: 'https://pixselli.com/de/avif-to-jpg',
      it: 'https://pixselli.com/it/avif-to-jpg',
      'x-default': 'https://pixselli.com/avif-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertidor AVIF a JPG online gratis - Pixselli',
    description: 'Convierte AVIF a JPG rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/avif-to-jpg',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor AVIF a JPG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor AVIF a JPG online gratis - Pixselli',
    description: 'Convierte AVIF a JPG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishAvifToJpgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
