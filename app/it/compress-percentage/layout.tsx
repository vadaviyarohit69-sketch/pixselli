import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi per percentuale online gratis - 10% a 90% | Pixselli',
  description:
    'Comprimi immagini per percentuale online dal 10% al 90% con elaborazione rapida e privata nel browser.',
  keywords: ['comprimi per percentuale', 'compressione per percentuale', 'riduci dimensione', 'compressore online'],
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
    canonical: 'https://pixselli.com/it/compress-percentage',
    languages: {
      en: 'https://pixselli.com/compress-percentage',
      es: 'https://pixselli.com/es/compress-percentage',
      pt: 'https://pixselli.com/pt/compress-percentage',
      fr: 'https://pixselli.com/fr/compress-percentage',
      de: 'https://pixselli.com/de/compress-percentage',
      it: 'https://pixselli.com/it/compress-percentage',
      'x-default': 'https://pixselli.com/compress-percentage',
    },
  },
  openGraph: {
    title: 'Comprimi per percentuale online gratis - Pixselli',
    description: 'Riduci la dimensione dell immagine in percentuale con target flessibile e output veloce.',
    url: 'https://pixselli.com/it/compress-percentage',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Strumento di compressione per percentuale di Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimi per percentuale online gratis - Pixselli',
    description: 'Comprimi immagini per percentuale dal 10% al 90% online.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianCompressPercentageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
