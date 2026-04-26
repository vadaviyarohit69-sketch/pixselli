import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor JPG a AVIF online gratis - Convertir imagenes JPG | Pixselli',
  description:
    'Convierte imagenes JPG a formato AVIF online con procesamiento privado en navegador y control de calidad.',
  keywords: ['jpg a avif', 'convertir jpg a avif', 'convertidor jpg avif', 'convertidor avif'],
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
    canonical: 'https://pixselli.com/es/jpg-to-avif',
    languages: {
      en: 'https://pixselli.com/jpg-to-avif',
      es: 'https://pixselli.com/es/jpg-to-avif',
      pt: 'https://pixselli.com/pt/jpg-to-avif',
      fr: 'https://pixselli.com/fr/jpg-to-avif',
      de: 'https://pixselli.com/de/jpg-to-avif',
      it: 'https://pixselli.com/it/jpg-to-avif',
      'x-default': 'https://pixselli.com/jpg-to-avif',
    },
  },
  openGraph: {
    title: 'Convertidor JPG a AVIF online gratis - Pixselli',
    description: 'Convierte JPG a AVIF rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/jpg-to-avif',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor JPG a AVIF de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor JPG a AVIF online gratis - Pixselli',
    description: 'Convierte JPG a AVIF online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishJpgToAvifLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
