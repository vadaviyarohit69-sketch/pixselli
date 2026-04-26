import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor WebP a PDF online gratis - Convertir imagenes WebP | Pixselli',
  description:
    'Convierte imagenes WebP a PDF online con control de tamano de pagina, orientacion, margenes y union de imagenes con procesamiento privado en navegador.',
  keywords: ['webp a pdf', 'convertir webp a pdf', 'imagen a pdf', 'unir webp a pdf'],
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
    canonical: 'https://pixselli.com/es/webp-to-pdf',
    languages: {
      en: 'https://pixselli.com/webp-to-pdf',
      es: 'https://pixselli.com/es/webp-to-pdf',
      pt: 'https://pixselli.com/pt/webp-to-pdf',
      fr: 'https://pixselli.com/fr/webp-to-pdf',
      de: 'https://pixselli.com/de/webp-to-pdf',
      it: 'https://pixselli.com/it/webp-to-pdf',
      'x-default': 'https://pixselli.com/webp-to-pdf',
    },
  },
  openGraph: {
    title: 'Convertidor WebP a PDF online gratis - Pixselli',
    description: 'Convierte WebP a PDF rapidamente con controles avanzados de pagina.',
    url: 'https://pixselli.com/es/webp-to-pdf',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor WebP a PDF de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor WebP a PDF online gratis - Pixselli',
    description: 'Convierte WebP a PDF online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishWebpToPdfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
