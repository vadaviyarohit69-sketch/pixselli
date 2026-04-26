import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore HEIC in PNG Online Gratis - Converti Immagini HEIC | Pixselli',
  description:
    'Converti immagini HEIC in PNG online con elaborazione privata nel browser e output di alta qualita.',
  keywords: ['heic in png', 'converti heic in png', 'convertitore heic png', 'heic iphone'],
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
    canonical: 'https://pixselli.com/it/heic-to-png',
    languages: {
      en: 'https://pixselli.com/heic-to-png',
      es: 'https://pixselli.com/es/heic-to-png',
      pt: 'https://pixselli.com/pt/heic-to-png',
      fr: 'https://pixselli.com/fr/heic-to-png',
      de: 'https://pixselli.com/de/heic-to-png',
      it: 'https://pixselli.com/it/heic-to-png',
      'x-default': 'https://pixselli.com/heic-to-png',
    },
  },
  openGraph: {
    title: 'Convertitore HEIC in PNG Online Gratis - Pixselli',
    description: 'Converti HEIC in PNG rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/heic-to-png',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore HEIC in PNG Online Gratis - Pixselli',
    description: 'Converti HEIC in PNG online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianHeicToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
