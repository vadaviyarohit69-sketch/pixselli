import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor AVIF a PDF online gratis - Convertir imagenes AVIF | Pixselli',
  description:
    'Convierte imagenes AVIF a PDF online con control de tamano de pagina, orientacion, margenes y union de imagenes con procesamiento privado en navegador.',
  keywords: ['avif a pdf', 'convertir avif a pdf', 'imagen a pdf', 'unir avif a pdf'],
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
    canonical: 'https://pixselli.com/es/avif-to-pdf',
    languages: {
      en: 'https://pixselli.com/avif-to-pdf',
      es: 'https://pixselli.com/es/avif-to-pdf',
      pt: 'https://pixselli.com/pt/avif-to-pdf',
      fr: 'https://pixselli.com/fr/avif-to-pdf',
      de: 'https://pixselli.com/de/avif-to-pdf',
      it: 'https://pixselli.com/it/avif-to-pdf',
      'x-default': 'https://pixselli.com/avif-to-pdf',
    },
  },
  openGraph: {
    title: 'Convertidor AVIF a PDF online gratis - Pixselli',
    description: 'Convierte AVIF a PDF rapidamente con controles avanzados de pagina.',
    url: 'https://pixselli.com/es/avif-to-pdf',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor AVIF a PDF de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor AVIF a PDF online gratis - Pixselli',
    description: 'Convierte AVIF a PDF online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishAvifToPdfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
