import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para email online gratis - Optimizador de adjuntos | Pixselli',
  description:
    'Comprime imagenes para adjuntos de correo con dimensiones y calidad ligeras para envio mas rapido.',
  keywords: ['comprimir para email', 'optimizador de adjuntos', 'compresion para correo', 'reducir tamano'],
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
    canonical: 'https://pixselli.com/es/compress-for-email',
    languages: {
      en: 'https://pixselli.com/compress-for-email',
      es: 'https://pixselli.com/es/compress-for-email',
      pt: 'https://pixselli.com/pt/compress-for-email',
      fr: 'https://pixselli.com/fr/compress-for-email',
      de: 'https://pixselli.com/de/compress-for-email',
      it: 'https://pixselli.com/it/compress-for-email',
      'x-default': 'https://pixselli.com/compress-for-email',
    },
  },
  openGraph: {
    title: 'Comprimir para email online gratis - Pixselli',
    description: 'Optimiza imagenes para correo y reduce tamano de adjuntos facilmente.',
    url: 'https://pixselli.com/es/compress-for-email',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta para comprimir para email de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimir para email online gratis - Pixselli',
    description: 'Comprime imagenes para adjuntos de email y reduce peso rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishCompressForEmailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
