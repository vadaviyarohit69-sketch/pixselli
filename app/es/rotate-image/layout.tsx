import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rotar imagen gratis online - Rotador en cualquier angulo | Pixselli',
  description:
    'Rota imagenes online con cualquier angulo y vista previa instantanea. Herramienta gratis en navegador con salida PNG, JPG y WebP.',
  keywords: ['rotar imagen', 'rotador de imagen', 'rotar foto online', 'angulo personalizado', 'rotacion gratis'],
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
    canonical: 'https://pixselli.com/es/rotate-image',
    languages: {
      en: 'https://pixselli.com/rotate-image',
      es: 'https://pixselli.com/es/rotate-image',
      pt: 'https://pixselli.com/pt/rotate-image',
      fr: 'https://pixselli.com/fr/rotate-image',
      de: 'https://pixselli.com/de/rotate-image',
      it: 'https://pixselli.com/it/rotate-image',
      'x-default': 'https://pixselli.com/rotate-image',
    },
  },
  openGraph: {
    title: 'Rotar imagen gratis online - Pixselli',
    description:
      'Rota fotos con cualquier angulo al instante con vista previa en vivo. Procesamiento privado en navegador y descarga en varios formatos.',
    url: 'https://pixselli.com/es/rotate-image',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta para rotar imagen de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotar imagen gratis online - Pixselli',
    description: 'Rota imagenes por angulo personalizado online en segundos.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishRotateImageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
