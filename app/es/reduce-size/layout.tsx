import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reducir tamano de imagen online gratis - Comprimir JPG, PNG, WebP | PIXSELLI',
  description:
    'Reduce el tamano de imagen online gratis con una herramienta rapida y segura. Comprime archivos JPG, PNG y WebP manteniendo buena calidad. Sin registro.',
  keywords: ['reducir tamano imagen', 'comprimir imagen online', 'compresor de imagen', 'optimizar imagenes', 'reducir peso foto'],
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
    canonical: 'https://pixselli.com/es/reduce-size',
    languages: {
      en: 'https://pixselli.com/reduce-size',
      es: 'https://pixselli.com/es/reduce-size',
      pt: 'https://pixselli.com/pt/reduce-size',
      fr: 'https://pixselli.com/fr/reduce-size',
      de: 'https://pixselli.com/de/reduce-size',
      it: 'https://pixselli.com/it/reduce-size',
      'x-default': 'https://pixselli.com/reduce-size',
    },
  },
  openGraph: {
    title: 'Reducir tamano de imagen online gratis - PIXSELLI',
    description:
      'Comprime y reduce el tamano de imagen manteniendo calidad. Herramienta rapida, gratis y privada para JPG, PNG y WebP.',
    url: 'https://pixselli.com/es/reduce-size',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta para reducir tamano de imagen de PIXSELLI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reducir tamano de imagen online gratis - PIXSELLI',
    description: 'Comprime y reduce imagenes online al instante. Gratis y seguro en el navegador.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function EsReduceSizeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
