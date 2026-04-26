import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor ICO a PNG online gratis - Convertir archivos ICO | Pixselli',
  description:
    'Convierte archivos ICO a formato PNG online con procesamiento privado en navegador y salida de alta calidad.',
  keywords: ['ico a png', 'convertir ico a png', 'convertidor ico png', 'convertidor png'],
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
    canonical: 'https://pixselli.com/es/ico-to-png',
    languages: {
      en: 'https://pixselli.com/ico-to-png',
      es: 'https://pixselli.com/es/ico-to-png',
      pt: 'https://pixselli.com/pt/ico-to-png',
      fr: 'https://pixselli.com/fr/ico-to-png',
      de: 'https://pixselli.com/de/ico-to-png',
      it: 'https://pixselli.com/it/ico-to-png',
      'x-default': 'https://pixselli.com/ico-to-png',
    },
  },
  openGraph: {
    title: 'Convertidor ICO a PNG online gratis - Pixselli',
    description: 'Convierte ICO a PNG rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/ico-to-png',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor ICO a PNG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor ICO a PNG online gratis - Pixselli',
    description: 'Convierte ICO a PNG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishIcoToPngLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
