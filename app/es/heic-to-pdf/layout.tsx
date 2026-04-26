import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor HEIC a PDF online gratis - Convertir fotos HEIC | Pixselli',
  description:
    'Convierte fotos HEIC a PDF online con control de tamano de pagina, orientacion, margenes y union de imagenes con procesamiento privado en navegador.',
  keywords: ['heic a pdf', 'convertir heic a pdf', 'foto de iphone a pdf', 'unir heic a pdf'],
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
    canonical: 'https://pixselli.com/es/heic-to-pdf',
    languages: {
      en: 'https://pixselli.com/heic-to-pdf',
      es: 'https://pixselli.com/es/heic-to-pdf',
      pt: 'https://pixselli.com/pt/heic-to-pdf',
      fr: 'https://pixselli.com/fr/heic-to-pdf',
      de: 'https://pixselli.com/de/heic-to-pdf',
      it: 'https://pixselli.com/it/heic-to-pdf',
      'x-default': 'https://pixselli.com/heic-to-pdf',
    },
  },
  openGraph: {
    title: 'Convertidor HEIC a PDF online gratis - Pixselli',
    description: 'Convierte HEIC a PDF rapidamente con controles avanzados de pagina.',
    url: 'https://pixselli.com/es/heic-to-pdf',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor HEIC a PDF de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor HEIC a PDF online gratis - Pixselli',
    description: 'Convierte HEIC a PDF online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishHeicToPdfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
