import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressore PNG Online Gratis - Riduci Dimensione PNG | Pixselli',
  description:
    'Comprimi immagini PNG online con ottimizzazione della qualita per file piu leggeri e un elaborazione privata veloce nel browser.',
  keywords: ['compressore png', 'comprimere png', 'ottimizzare png', 'ridurre dimensione png'],
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
    canonical: 'https://pixselli.com/it/png-compressor',
    languages: {
      en: 'https://pixselli.com/png-compressor',
      es: 'https://pixselli.com/es/png-compressor',
      pt: 'https://pixselli.com/pt/png-compressor',
      fr: 'https://pixselli.com/fr/png-compressor',
      de: 'https://pixselli.com/de/png-compressor',
      it: 'https://pixselli.com/it/png-compressor',
      'x-default': 'https://pixselli.com/png-compressor',
    },
  },
  openGraph: {
    title: 'Compressore PNG Online Gratis - Pixselli',
    description: 'Riduci la dimensione dei PNG con compressione rapida nel browser.',
    url: 'https://pixselli.com/it/png-compressor',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressore PNG Online Gratis - Pixselli',
    description: 'Comprimi PNG e riduci la dimensione del file rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianPngCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
