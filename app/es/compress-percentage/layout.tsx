import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir por porcentaje online gratis - 10% a 90% | Pixselli',
  description:
    'Comprime imagenes por porcentaje online del 10% al 90% con procesamiento rapido y privado en el navegador.',
  keywords: ['comprimir por porcentaje', 'compresion de imagen por porcentaje', 'reducir tamano', 'compresor online'],
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
    canonical: 'https://pixselli.com/es/compress-percentage',
    languages: {
      en: 'https://pixselli.com/compress-percentage',
      es: 'https://pixselli.com/es/compress-percentage',
      pt: 'https://pixselli.com/pt/compress-percentage',
      fr: 'https://pixselli.com/fr/compress-percentage',
      de: 'https://pixselli.com/de/compress-percentage',
      it: 'https://pixselli.com/it/compress-percentage',
      'x-default': 'https://pixselli.com/compress-percentage',
    },
  },
  openGraph: {
    title: 'Comprimir por porcentaje online gratis - Pixselli',
    description: 'Reduce el tamano de imagen por porcentaje con ajuste flexible y salida rapida.',
    url: 'https://pixselli.com/es/compress-percentage',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta de compresion por porcentaje de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimir por porcentaje online gratis - Pixselli',
    description: 'Comprime imagenes por porcentaje del 10% al 90% online.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishCompressPercentageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
