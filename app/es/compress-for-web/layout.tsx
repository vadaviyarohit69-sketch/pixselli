import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para web online gratis - Optimizador web | Pixselli',
  description:
    'Comprime imagenes para uso web con dimensiones y calidad optimizadas. Procesamiento rapido en el navegador.',
  keywords: ['comprimir para web', 'optimizador web de imagen', 'compresion para sitio web', 'reducir tamano'],
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
    canonical: 'https://pixselli.com/es/compress-for-web',
    languages: {
      en: 'https://pixselli.com/compress-for-web',
      es: 'https://pixselli.com/es/compress-for-web',
      pt: 'https://pixselli.com/pt/compress-for-web',
      fr: 'https://pixselli.com/fr/compress-for-web',
      de: 'https://pixselli.com/de/compress-for-web',
      it: 'https://pixselli.com/it/compress-for-web',
      'x-default': 'https://pixselli.com/compress-for-web',
    },
  },
  openGraph: {
    title: 'Comprimir para web online gratis - Pixselli',
    description: 'Optimiza imagenes para web con mejor equilibrio entre tamano y calidad.',
    url: 'https://pixselli.com/es/compress-for-web',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta para comprimir para web de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimir para web online gratis - Pixselli',
    description: 'Prepara imagenes para paginas web con compresion enfocada en rendimiento.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishCompressForWebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
