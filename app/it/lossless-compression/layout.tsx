import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressione lossless online gratis - Mantieni la qualita | Pixselli',
  description:
    'Comprimi immagini con impostazioni senza perdita per ridurre la dimensione mantenendo la qualita, con elaborazione privata nel browser.',
  keywords: ['compressione lossless', 'compressione senza perdita', 'riduci dimensione', 'compressore online'],
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
    canonical: 'https://pixselli.com/it/lossless-compression',
    languages: {
      en: 'https://pixselli.com/lossless-compression',
      es: 'https://pixselli.com/es/lossless-compression',
      pt: 'https://pixselli.com/pt/lossless-compression',
      fr: 'https://pixselli.com/fr/lossless-compression',
      de: 'https://pixselli.com/de/lossless-compression',
      it: 'https://pixselli.com/it/lossless-compression',
      'x-default': 'https://pixselli.com/lossless-compression',
    },
  },
  openGraph: {
    title: 'Compressione lossless online gratis - Pixselli',
    description: 'Ottimizza immagini con compressione senza perdita mantenendo alta qualita.',
    url: 'https://pixselli.com/it/lossless-compression',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Strumento di compressione lossless di Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressione lossless online gratis - Pixselli',
    description: 'Riduci la dimensione delle immagini senza perdere qualita con compressione lossless.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianLosslessCompressionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
