import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor PDF a JPG online gratis - Convertir paginas PDF | Pixselli',
  description:
    'Convierte paginas PDF a imagenes JPG online con controles de calidad y resolucion usando procesamiento privado en navegador.',
  keywords: ['pdf a jpg', 'pdf a jpeg', 'convertir pdf a jpg', 'extraer paginas pdf', 'pdf a imagen'],
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
    canonical: 'https://pixselli.com/es/pdf-to-jpg',
    languages: {
      en: 'https://pixselli.com/pdf-to-jpg',
      es: 'https://pixselli.com/es/pdf-to-jpg',
      pt: 'https://pixselli.com/pt/pdf-to-jpg',
      fr: 'https://pixselli.com/fr/pdf-to-jpg',
      de: 'https://pixselli.com/de/pdf-to-jpg',
      it: 'https://pixselli.com/it/pdf-to-jpg',
      'x-default': 'https://pixselli.com/pdf-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertidor PDF a JPG online gratis - Pixselli',
    description: 'Convierte paginas PDF a JPG rapidamente con control de calidad.',
    url: 'https://pixselli.com/es/pdf-to-jpg',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor PDF a JPG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor PDF a JPG online gratis - Pixselli',
    description: 'Convierte PDF a JPG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishPdfToJpgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
