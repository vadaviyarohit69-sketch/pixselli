import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressore JPG Online Gratis - Riduci Dimensione JPG | Pixselli',
  description:
    'Comprimi immagini JPG online con qualita regolabile per file piu leggeri e un elaborazione privata veloce nel browser.',
  keywords: ['compressore jpg', 'comprimere jpg', 'ottimizzare jpg', 'ridurre dimensione jpg'],
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
    canonical: 'https://pixselli.com/it/jpg-compressor',
    languages: {
      en: 'https://pixselli.com/jpg-compressor',
      es: 'https://pixselli.com/es/jpg-compressor',
      pt: 'https://pixselli.com/pt/jpg-compressor',
      fr: 'https://pixselli.com/fr/jpg-compressor',
      de: 'https://pixselli.com/de/jpg-compressor',
      it: 'https://pixselli.com/it/jpg-compressor',
      'x-default': 'https://pixselli.com/jpg-compressor',
    },
  },
  openGraph: {
    title: 'Compressore JPG Online Gratis - Pixselli',
    description: 'Riduci la dimensione dei JPG con compressione rapida nel browser.',
    url: 'https://pixselli.com/it/jpg-compressor',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressore JPG Online Gratis - Pixselli',
    description: 'Comprimi JPG e riduci la dimensione del file rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianJpgCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
