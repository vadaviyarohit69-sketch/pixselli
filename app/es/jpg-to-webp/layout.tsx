import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor de JPG a WebP - Convertir JPG a WebP gratis | Pixselli',
  description:
    'Convierte imagenes JPG a formato WebP con mejor compresion. Rapido, seguro y sin subir archivos al servidor.',
  keywords: ['jpg a webp', 'convertir jpg a webp', 'convertidor de imagen', 'herramienta webp', 'compresion webp'],
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
  openGraph: {
    title: 'Convertidor de JPG a WebP online gratis',
    description: 'Convierte JPG a WebP para obtener imagenes mas ligeras y mejorar rendimiento web.',
    url: 'https://pixselli.com/es/jpg-to-webp',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor de JPG a WebP gratis',
    description: 'Convierte JPG a WebP y reduce peso facilmente.',
    creator: '@pixselli',
  },
  alternates: {
    canonical: 'https://pixselli.com/es/jpg-to-webp',
    languages: {
      en: 'https://pixselli.com/jpg-to-webp',
      es: 'https://pixselli.com/es/jpg-to-webp',
      pt: 'https://pixselli.com/pt/jpg-to-webp',
      fr: 'https://pixselli.com/fr/jpg-to-webp',
      de: 'https://pixselli.com/de/jpg-to-webp',
      it: 'https://pixselli.com/it/jpg-to-webp',
      'x-default': 'https://pixselli.com/jpg-to-webp',
    },
  },
};

export default function SpanishJpgToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
