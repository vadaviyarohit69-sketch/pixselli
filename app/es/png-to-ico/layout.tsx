import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor PNG a ICO online gratis - Convertir imagenes PNG | Pixselli',
  description:
    'Convierte imagenes PNG a formato ICO online con procesamiento privado en navegador y control de calidad.',
  keywords: ['png a ico', 'convertir png a ico', 'convertidor png ico', 'convertidor ico'],
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
    canonical: 'https://pixselli.com/es/png-to-ico',
    languages: {
      en: 'https://pixselli.com/png-to-ico',
      es: 'https://pixselli.com/es/png-to-ico',
      pt: 'https://pixselli.com/pt/png-to-ico',
      fr: 'https://pixselli.com/fr/png-to-ico',
      de: 'https://pixselli.com/de/png-to-ico',
      it: 'https://pixselli.com/it/png-to-ico',
      'x-default': 'https://pixselli.com/png-to-ico',
    },
  },
  openGraph: {
    title: 'Convertidor PNG a ICO online gratis - Pixselli',
    description: 'Convierte PNG a ICO rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/png-to-ico',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor PNG a ICO de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor PNG a ICO online gratis - Pixselli',
    description: 'Convierte PNG a ICO online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishPngToIcoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
