import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor PNG a PDF online gratis - Convertir imagenes PNG | Pixselli',
  description:
    'Convierte imagenes PNG a PDF online con control de tamano de pagina, orientacion, margenes y union de imagenes con procesamiento privado en navegador.',
  keywords: ['png a pdf', 'convertir png a pdf', 'imagen a pdf', 'unir png a pdf'],
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
    canonical: 'https://pixselli.com/es/png-to-pdf',
    languages: {
      en: 'https://pixselli.com/png-to-pdf',
      es: 'https://pixselli.com/es/png-to-pdf',
      pt: 'https://pixselli.com/pt/png-to-pdf',
      fr: 'https://pixselli.com/fr/png-to-pdf',
      de: 'https://pixselli.com/de/png-to-pdf',
      it: 'https://pixselli.com/it/png-to-pdf',
      'x-default': 'https://pixselli.com/png-to-pdf',
    },
  },
  openGraph: {
    title: 'Convertidor PNG a PDF online gratis - Pixselli',
    description: 'Convierte PNG a PDF rapidamente con controles avanzados de pagina.',
    url: 'https://pixselli.com/es/png-to-pdf',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor PNG a PDF de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor PNG a PDF online gratis - Pixselli',
    description: 'Convierte PNG a PDF online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishPngToPdfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
