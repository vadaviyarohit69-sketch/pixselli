import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor JPG a GIF online gratis - Convertir imagenes JPG | Pixselli',
  description:
    'Convierte imagenes JPG a formato GIF online con procesamiento privado en navegador y control de calidad.',
  keywords: ['jpg a gif', 'convertir jpg a gif', 'convertidor jpg gif', 'convertidor gif'],
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
    canonical: 'https://pixselli.com/es/jpg-to-gif',
    languages: {
      en: 'https://pixselli.com/jpg-to-gif',
      es: 'https://pixselli.com/es/jpg-to-gif',
      pt: 'https://pixselli.com/pt/jpg-to-gif',
      fr: 'https://pixselli.com/fr/jpg-to-gif',
      de: 'https://pixselli.com/de/jpg-to-gif',
      it: 'https://pixselli.com/it/jpg-to-gif',
      'x-default': 'https://pixselli.com/jpg-to-gif',
    },
  },
  openGraph: {
    title: 'Convertidor JPG a GIF online gratis - Pixselli',
    description: 'Convierte JPG a GIF rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/jpg-to-gif',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor JPG a GIF de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor JPG a GIF online gratis - Pixselli',
    description: 'Convierte JPG a GIF online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishJpgToGifLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
