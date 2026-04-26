import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi per Email Online Gratis - Ottimizzatore Allegati | Pixselli',
  description:
    'Comprimi immagini per allegati email con dimensioni leggere e qualita bilanciata per invii piu rapidi.',
  keywords: ['comprimi per email', 'ottimizzatore allegati', 'compressione email', 'ridurre dimensione'],
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
    canonical: 'https://pixselli.com/it/compress-for-email',
    languages: {
      en: 'https://pixselli.com/compress-for-email',
      es: 'https://pixselli.com/es/compress-for-email',
      pt: 'https://pixselli.com/pt/compress-for-email',
      fr: 'https://pixselli.com/fr/compress-for-email',
      de: 'https://pixselli.com/de/compress-for-email',
      it: 'https://pixselli.com/it/compress-for-email',
      'x-default': 'https://pixselli.com/compress-for-email',
    },
  },
  openGraph: {
    title: 'Comprimi per Email Online Gratis - Pixselli',
    description: 'Ottimizza allegati immagine per email con file piu leggeri.',
    url: 'https://pixselli.com/it/compress-for-email',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimi per Email Online Gratis - Pixselli',
    description: 'Comprimi immagini per email in modo rapido e semplice.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianCompressForEmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
