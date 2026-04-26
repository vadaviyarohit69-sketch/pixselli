import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para formularios online gratis - Optimizador para cargas | Pixselli',
  description:
    'Comprime imagenes para formularios online con tamano mas ligero para cumplir limites de carga.',
  keywords: ['comprimir para formularios', 'compresor para formularios', 'optimizar imagen para formularios', 'reducir tamano'],
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
    canonical: 'https://pixselli.com/es/compress-for-forms',
    languages: {
      en: 'https://pixselli.com/compress-for-forms',
      es: 'https://pixselli.com/es/compress-for-forms',
      pt: 'https://pixselli.com/pt/compress-for-forms',
      fr: 'https://pixselli.com/fr/compress-for-forms',
      de: 'https://pixselli.com/de/compress-for-forms',
      it: 'https://pixselli.com/it/compress-for-forms',
      'x-default': 'https://pixselli.com/compress-for-forms',
    },
  },
  openGraph: {
    title: 'Comprimir para formularios online gratis - Pixselli',
    description: 'Prepara imagenes para formularios y portales con menor tamano.',
    url: 'https://pixselli.com/es/compress-for-forms',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta para comprimir para formularios de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimir para formularios online gratis - Pixselli',
    description: 'Optimiza imagenes para cargas de formularios y reduce peso rapido.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishCompressForFormsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
