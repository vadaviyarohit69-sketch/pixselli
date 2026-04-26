import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressore JPEG online gratis - Riduci la dimensione JPEG | Pixselli',
  description:
    'Comprimi immagini JPEG online con qualita regolabile per file piu piccoli e elaborazione privata rapida nel browser.',
  keywords: ['compressore jpeg', 'comprimere jpeg', 'ottimizzare jpeg', 'ridurre dimensione jpeg'],
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
    canonical: 'https://pixselli.com/it/jpeg-compressor',
    languages: {
      en: 'https://pixselli.com/jpeg-compressor',
      es: 'https://pixselli.com/es/jpeg-compressor',
      pt: 'https://pixselli.com/pt/jpeg-compressor',
      fr: 'https://pixselli.com/fr/jpeg-compressor',
      de: 'https://pixselli.com/de/jpeg-compressor',
      it: 'https://pixselli.com/it/jpeg-compressor',
      'x-default': 'https://pixselli.com/jpeg-compressor',
    },
  },
  openGraph: {
    title: 'Compressore JPEG online gratis - Pixselli',
    description: 'Riduci la dimensione dei JPEG con compressione rapida nel browser.',
    url: 'https://pixselli.com/it/jpeg-compressor',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressore JPEG online gratis - Pixselli',
    description: 'Comprimi JPEG e riduci la dimensione del file rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianJpegCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
