import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresor de imagen gratis online - Reducir JPG, PNG, WebP | Pixselli',
  description:
    'Comprime imagenes online con calidad ajustable y opciones de formato. Reduce rapidamente el tamano de JPG, PNG y WebP manteniendo buena calidad visual.',
  keywords: ['compresor de imagen', 'comprimir imagenes', 'reducir tamano de imagen', 'compresion jpg png webp', 'compresor online'],
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
    canonical: 'https://pixselli.com/es/image-compressor',
    languages: {
      en: 'https://pixselli.com/image-compressor',
      es: 'https://pixselli.com/es/image-compressor',
      pt: 'https://pixselli.com/pt/image-compressor',
      fr: 'https://pixselli.com/fr/image-compressor',
      de: 'https://pixselli.com/de/image-compressor',
      it: 'https://pixselli.com/it/image-compressor',
      'x-default': 'https://pixselli.com/image-compressor',
    },
  },
  openGraph: {
    title: 'Compresor de imagen gratis online - Pixselli',
    description: 'Comprime JPG, PNG y WebP online con controles de calidad personalizados y procesamiento privado rapido.',
    url: 'https://pixselli.com/es/image-compressor',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Compresor de imagen de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresor de imagen gratis online - Pixselli',
    description: 'Reduce el tamano de imagen online con control de calidad para archivos JPG, PNG y WebP.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishImageCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
