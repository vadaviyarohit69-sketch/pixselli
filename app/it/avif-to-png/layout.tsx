import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore AVIF in PNG Online Gratis - Converti Immagini AVIF | Pixselli',
  description:
    'Converti immagini AVIF in PNG online con elaborazione privata nel browser e output di alta qualita.',
  keywords: ['avif in png', 'converti avif in png', 'convertitore avif png', 'convertitore png'],
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
    canonical: 'https://pixselli.com/it/avif-to-png',
    languages: {
      en: 'https://pixselli.com/avif-to-png',
      es: 'https://pixselli.com/es/avif-to-png',
      pt: 'https://pixselli.com/pt/avif-to-png',
      fr: 'https://pixselli.com/fr/avif-to-png',
      de: 'https://pixselli.com/de/avif-to-png',
      it: 'https://pixselli.com/it/avif-to-png',
      'x-default': 'https://pixselli.com/avif-to-png',
    },
  },
  openGraph: {
    title: 'Convertitore AVIF in PNG Online Gratis - Pixselli',
    description: 'Converti AVIF in PNG rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/avif-to-png',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore AVIF in PNG Online Gratis - Pixselli',
    description: 'Converti AVIF in PNG online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianAvifToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
