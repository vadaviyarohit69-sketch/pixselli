import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir a 80KB online gratis - Herramienta de tamano exacto | Pixselli',
  description:
    'Comprime imagen a 80KB exactos online con ajuste inteligente de calidad. Procesamiento rapido y privado para archivos JPG, PNG y WebP.',
  keywords: ['comprimir a 80kb', 'compresion de imagen', 'reducir tamano', 'compresor online', 'tamano exacto'],
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
    canonical: 'https://pixselli.com/es/compress-80kb',
    languages: {
      en: 'https://pixselli.com/compress-80kb',
      es: 'https://pixselli.com/es/compress-80kb',
      pt: 'https://pixselli.com/pt/compress-80kb',
      fr: 'https://pixselli.com/fr/compress-80kb',
      de: 'https://pixselli.com/de/compress-80kb',
      it: 'https://pixselli.com/it/compress-80kb',
      'x-default': 'https://pixselli.com/compress-80kb',
    },
  },
  openGraph: {
    title: 'Comprimir a 80KB online gratis - Pixselli',
    description: 'Ajusta tu imagen a 80KB exactos online con compresion privada en el navegador.',
    url: 'https://pixselli.com/es/compress-80kb',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta para comprimir imagen a 80KB de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimir a 80KB online gratis - Pixselli',
    description: 'Comprime imagenes a 80KB exactos online con procesamiento rapido y privado.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishCompress80kbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
