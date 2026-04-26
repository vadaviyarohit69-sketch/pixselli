import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor PDF a PNG online gratis - Convertir paginas PDF | Pixselli',
  description:
    'Convierte paginas PDF a imagenes PNG online con control de resolucion usando procesamiento privado en navegador.',
  keywords: ['pdf a png', 'convertir pdf a png', 'extraer paginas pdf', 'pdf a imagen png'],
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
    canonical: 'https://pixselli.com/es/pdf-to-png',
    languages: {
      en: 'https://pixselli.com/pdf-to-png',
      es: 'https://pixselli.com/es/pdf-to-png',
      pt: 'https://pixselli.com/pt/pdf-to-png',
      fr: 'https://pixselli.com/fr/pdf-to-png',
      de: 'https://pixselli.com/de/pdf-to-png',
      it: 'https://pixselli.com/it/pdf-to-png',
      'x-default': 'https://pixselli.com/pdf-to-png',
    },
  },
  openGraph: {
    title: 'Convertidor PDF a PNG online gratis - Pixselli',
    description: 'Convierte paginas PDF a PNG rapidamente con control de resolucion.',
    url: 'https://pixselli.com/es/pdf-to-png',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor PDF a PNG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor PDF a PNG online gratis - Pixselli',
    description: 'Convierte PDF a PNG online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishPdfToPngLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
