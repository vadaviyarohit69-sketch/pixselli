import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi per Web Online Gratis - Ottimizzatore Web | Pixselli',
  description:
    'Comprimi immagini per siti web con dimensioni e qualita ottimizzate. Elaborazione veloce nel browser.',
  keywords: ['comprimi per web', 'ottimizzatore web', 'compressione immagini sito', 'ridurre dimensione immagine'],
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
    canonical: 'https://pixselli.com/it/compress-for-web',
    languages: {
      en: 'https://pixselli.com/compress-for-web',
      es: 'https://pixselli.com/es/compress-for-web',
      pt: 'https://pixselli.com/pt/compress-for-web',
      fr: 'https://pixselli.com/fr/compress-for-web',
      de: 'https://pixselli.com/de/compress-for-web',
      it: 'https://pixselli.com/it/compress-for-web',
      'x-default': 'https://pixselli.com/compress-for-web',
    },
  },
  openGraph: {
    title: 'Comprimi per Web Online Gratis - Pixselli',
    description: 'Ottimizza le immagini per il web con un buon equilibrio tra peso e qualita.',
    url: 'https://pixselli.com/it/compress-for-web',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimi per Web Online Gratis - Pixselli',
    description: 'Prepara immagini per siti web con compressione orientata alle prestazioni.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianCompressForWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
