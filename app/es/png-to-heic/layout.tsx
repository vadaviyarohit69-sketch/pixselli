import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor PNG a HEIC online gratis - Convertir imagenes PNG | Pixselli',
  description:
    'Convierte imagenes PNG a formato HEIC online con procesamiento privado en navegador y control de calidad.',
  keywords: ['png a heic', 'convertir png a heic', 'convertidor png heic', 'convertidor heic'],
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
    canonical: 'https://pixselli.com/es/png-to-heic',
    languages: {
      en: 'https://pixselli.com/png-to-heic',
      es: 'https://pixselli.com/es/png-to-heic',
      pt: 'https://pixselli.com/pt/png-to-heic',
      fr: 'https://pixselli.com/fr/png-to-heic',
      de: 'https://pixselli.com/de/png-to-heic',
      it: 'https://pixselli.com/it/png-to-heic',
      'x-default': 'https://pixselli.com/png-to-heic',
    },
  },
  openGraph: {
    title: 'Convertidor PNG a HEIC online gratis - Pixselli',
    description: 'Convierte PNG a HEIC rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/png-to-heic',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor PNG a HEIC de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor PNG a HEIC online gratis - Pixselli',
    description: 'Convierte PNG a HEIC online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishPngToHeicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
