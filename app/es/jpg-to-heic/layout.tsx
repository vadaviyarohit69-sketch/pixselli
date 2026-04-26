import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor JPG a HEIC online gratis - Convertir imagenes JPG | Pixselli',
  description:
    'Convierte imagenes JPG a formato HEIC online con procesamiento privado en navegador y control de calidad.',
  keywords: ['jpg a heic', 'convertir jpg a heic', 'convertidor jpg heic', 'convertidor heic'],
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
    canonical: 'https://pixselli.com/es/jpg-to-heic',
    languages: {
      en: 'https://pixselli.com/jpg-to-heic',
      es: 'https://pixselli.com/es/jpg-to-heic',
      pt: 'https://pixselli.com/pt/jpg-to-heic',
      fr: 'https://pixselli.com/fr/jpg-to-heic',
      de: 'https://pixselli.com/de/jpg-to-heic',
      it: 'https://pixselli.com/it/jpg-to-heic',
      'x-default': 'https://pixselli.com/jpg-to-heic',
    },
  },
  openGraph: {
    title: 'Convertidor JPG a HEIC online gratis - Pixselli',
    description: 'Convierte JPG a HEIC rapidamente con salida confiable.',
    url: 'https://pixselli.com/es/jpg-to-heic',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor JPG a HEIC de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor JPG a HEIC online gratis - Pixselli',
    description: 'Convierte JPG a HEIC online de forma rapida y segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishJpgToHeicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
