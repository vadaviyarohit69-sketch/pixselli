import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor PDF a WebP online gratis - Convertir paginas PDF | Pixselli',
  description:
    'Convierte paginas PDF a imagenes WebP online con controles de calidad y resolucion usando procesamiento privado en navegador.',
  keywords: ['pdf a webp', 'convertir pdf a webp', 'extraer paginas pdf', 'pdf a imagen webp'],
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
    canonical: 'https://pixselli.com/es/pdf-to-webp',
    languages: {
      en: 'https://pixselli.com/pdf-to-webp',
      es: 'https://pixselli.com/es/pdf-to-webp',
      pt: 'https://pixselli.com/pt/pdf-to-webp',
      fr: 'https://pixselli.com/fr/pdf-to-webp',
      de: 'https://pixselli.com/de/pdf-to-webp',
      it: 'https://pixselli.com/it/pdf-to-webp',
      'x-default': 'https://pixselli.com/pdf-to-webp',
    },
  },
  openGraph: {
    title: 'Convertidor PDF a WebP online gratis - Pixselli',
    description: 'Convierte paginas PDF a WebP rapidamente con control de calidad.',
    url: 'https://pixselli.com/es/pdf-to-webp',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor PDF a WebP de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor PDF a WebP online gratis - Pixselli',
    description: 'Convierte PDF a WebP online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishPdfToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
