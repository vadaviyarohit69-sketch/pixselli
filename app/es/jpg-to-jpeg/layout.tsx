import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor JPG a JPEG online gratis - Convertir archivos JPG | Pixselli',
  description:
    'Convierte formato JPG a JPEG online con procesamiento rapido en navegador y salida de alta calidad.',
  keywords: ['jpg a jpeg', 'convertir jpg a jpeg', 'convertidor jpg jpeg', 'convertidor jpeg'],
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
    canonical: 'https://pixselli.com/es/jpg-to-jpeg',
    languages: {
      en: 'https://pixselli.com/jpg-to-jpeg',
      es: 'https://pixselli.com/es/jpg-to-jpeg',
      pt: 'https://pixselli.com/pt/jpg-to-jpeg',
      fr: 'https://pixselli.com/fr/jpg-to-jpeg',
      de: 'https://pixselli.com/de/jpg-to-jpeg',
      it: 'https://pixselli.com/it/jpg-to-jpeg',
      'x-default': 'https://pixselli.com/jpg-to-jpeg',
    },
  },
  openGraph: {
    title: 'Convertidor JPG a JPEG online gratis - Pixselli',
    description: 'Convierte archivos JPG a JPEG de forma rapida y segura.',
    url: 'https://pixselli.com/es/jpg-to-jpeg',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta convertidor JPG a JPEG de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor JPG a JPEG online gratis - Pixselli',
    description: 'Convierte JPG a JPEG online con salida rapida y privada.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishJpgToJpegLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
