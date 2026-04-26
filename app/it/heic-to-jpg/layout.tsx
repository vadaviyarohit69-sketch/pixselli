import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore HEIC in JPG Online Gratis - Converti Foto HEIC | Pixselli',
  description:
    'Converti immagini HEIC in JPG online con elaborazione privata nel browser per migliore compatibilita.',
  keywords: ['heic in jpg', 'converti heic in jpg', 'convertitore heic iphone', 'convertitore heic jpg'],
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
    canonical: 'https://pixselli.com/it/heic-to-jpg',
    languages: {
      en: 'https://pixselli.com/heic-to-jpg',
      es: 'https://pixselli.com/es/heic-to-jpg',
      pt: 'https://pixselli.com/pt/heic-to-jpg',
      fr: 'https://pixselli.com/fr/heic-to-jpg',
      de: 'https://pixselli.com/de/heic-to-jpg',
      it: 'https://pixselli.com/it/heic-to-jpg',
      'x-default': 'https://pixselli.com/heic-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertitore HEIC in JPG Online Gratis - Pixselli',
    description: 'Converti foto HEIC di iPhone in JPG rapidamente.',
    url: 'https://pixselli.com/it/heic-to-jpg',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore HEIC in JPG Online Gratis - Pixselli',
    description: 'Converti HEIC in JPG online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianHeicToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
