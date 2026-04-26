import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor JPG a BMP online gratis - Convertir imagenes JPG | Pixselli',
  description:
    'Convierte imagenes JPG a formato BMP online con procesamiento privado en navegador y control de calidad.',
  keywords: ['jpg a bmp', 'convertir jpg a bmp', 'convertidor jpg bmp', 'convertidor bmp'],
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
    canonical: 'https://pixselli.com/es/jpg-to-bmp',
    languages: {
      en: 'https://pixselli.com/jpg-to-bmp',
      es: 'https://pixselli.com/es/jpg-to-bmp',
      pt: 'https://pixselli.com/pt/jpg-to-bmp',
      fr: 'https://pixselli.com/fr/jpg-to-bmp',
      de: 'https://pixselli.com/de/jpg-to-bmp',
      it: 'https://pixselli.com/it/jpg-to-bmp',
      'x-default': 'https://pixselli.com/jpg-to-bmp',
    },
  },
  openGraph: {
    title: 'Convertidor JPG a BMP online gratis - Pixselli',
    description: 'Convierte JPG a BMP rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/jpg-to-bmp',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor JPG a BMP de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor JPG a BMP online gratis - Pixselli',
    description: 'Convierte JPG a BMP online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishJpgToBmpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
