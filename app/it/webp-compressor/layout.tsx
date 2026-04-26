import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressore WebP Online Gratis - Riduci Dimensione WebP | Pixselli',
  description:
    'Comprimi immagini WebP online con ottimizzazione della qualita per file piu leggeri e un elaborazione privata veloce nel browser.',
  keywords: ['compressore webp', 'comprimere webp', 'ottimizzare webp', 'ridurre dimensione webp'],
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
    canonical: 'https://pixselli.com/it/webp-compressor',
    languages: {
      en: 'https://pixselli.com/webp-compressor',
      es: 'https://pixselli.com/es/webp-compressor',
      pt: 'https://pixselli.com/pt/webp-compressor',
      fr: 'https://pixselli.com/fr/webp-compressor',
      de: 'https://pixselli.com/de/webp-compressor',
      it: 'https://pixselli.com/it/webp-compressor',
      'x-default': 'https://pixselli.com/webp-compressor',
    },
  },
  openGraph: {
    title: 'Compressore WebP Online Gratis - Pixselli',
    description: 'Riduci la dimensione delle immagini WebP con compressione rapida nel browser.',
    url: 'https://pixselli.com/it/webp-compressor',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressore WebP Online Gratis - Pixselli',
    description: 'Comprimi WebP e riduci la dimensione del file rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianWebpCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
