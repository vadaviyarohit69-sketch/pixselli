import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor JPG a PNG online gratis - Convertir imagenes JPG | Pixselli',
  description:
    'Convierte imagenes JPG a formato PNG online con procesamiento privado en navegador y salida de alta calidad.',
  keywords: ['jpg a png', 'convertir jpg a png', 'convertidor jpg a png', 'jpeg a png'],
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
    canonical: 'https://pixselli.com/es/jpg-to-png',
    languages: {
      en: 'https://pixselli.com/jpg-to-png',
      es: 'https://pixselli.com/es/jpg-to-png',
      pt: 'https://pixselli.com/pt/jpg-to-png',
      fr: 'https://pixselli.com/fr/jpg-to-png',
      de: 'https://pixselli.com/de/jpg-to-png',
      it: 'https://pixselli.com/it/jpg-to-png',
      'x-default': 'https://pixselli.com/jpg-to-png',
    },
  },
  openGraph: {
    title: 'Convertidor JPG a PNG online gratis - Pixselli',
    description: 'Convierte archivos JPG a PNG rapido con salida de calidad.',
    url: 'https://pixselli.com/es/jpg-to-png',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor JPG a PNG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor JPG a PNG online gratis - Pixselli',
    description: 'Convierte JPG a PNG online en segundos y de forma segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishJpgToPngLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
