import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor HEIC a JPG online gratis - Convertir fotos HEIC | Pixselli',
  description:
    'Convierte imagenes HEIC a JPG online con procesamiento privado en navegador para mejor compatibilidad.',
  keywords: ['heic a jpg', 'convertir heic a jpg', 'convertidor heic iphone', 'convertidor heic jpg'],
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
    canonical: 'https://pixselli.com/es/heic-to-jpg',
    languages: {
      en: 'https://pixselli.com/heic-to-jpg',
      es: 'https://pixselli.com/es/heic-to-jpg',
      pt: 'https://pixselli.com/pt/heic-to-jpg',
      fr: 'https://pixselli.com/fr/heic-to-jpg',
      de: 'https://pixselli.com/de/heic-to-jpg',
      it: 'https://pixselli.com/it/heic-to-jpg',
      'x-default': 'https://pixselli.com/heic-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertidor HEIC a JPG online gratis - Pixselli',
    description: 'Convierte fotos HEIC de iPhone a JPG rapidamente.',
    url: 'https://pixselli.com/es/heic-to-jpg',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor HEIC a JPG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor HEIC a JPG online gratis - Pixselli',
    description: 'Convierte HEIC a JPG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishHeicToJpgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
