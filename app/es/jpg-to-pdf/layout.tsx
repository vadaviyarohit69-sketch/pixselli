import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor JPG a PDF online gratis - Convertir imagenes JPG | Pixselli',
  description:
    'Convierte imagenes JPG a PDF online con control de tamano de pagina, orientacion, margenes y union de imagenes con procesamiento privado en navegador.',
  keywords: ['jpg a pdf', 'convertir jpg a pdf', 'imagen a pdf', 'unir jpg a pdf'],
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
    canonical: 'https://pixselli.com/es/jpg-to-pdf',
    languages: {
      en: 'https://pixselli.com/jpg-to-pdf',
      es: 'https://pixselli.com/es/jpg-to-pdf',
      pt: 'https://pixselli.com/pt/jpg-to-pdf',
      fr: 'https://pixselli.com/fr/jpg-to-pdf',
      de: 'https://pixselli.com/de/jpg-to-pdf',
      it: 'https://pixselli.com/it/jpg-to-pdf',
      'x-default': 'https://pixselli.com/jpg-to-pdf',
    },
  },
  openGraph: {
    title: 'Convertidor JPG a PDF online gratis - Pixselli',
    description: 'Convierte JPG a PDF rapidamente con controles avanzados de pagina.',
    url: 'https://pixselli.com/es/jpg-to-pdf',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor JPG a PDF de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor JPG a PDF online gratis - Pixselli',
    description: 'Convierte JPG a PDF online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishJpgToPdfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
