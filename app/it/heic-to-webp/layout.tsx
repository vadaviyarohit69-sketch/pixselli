import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore HEIC in WebP Online Gratis - Converti Immagini HEIC | Pixselli',
  description:
    'Converti immagini HEIC in WebP online con elaborazione privata nel browser e controllo qualita.',
  keywords: ['heic in webp', 'converti heic in webp', 'convertitore heic webp', 'heic iphone'],
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
    canonical: 'https://pixselli.com/it/heic-to-webp',
    languages: {
      en: 'https://pixselli.com/heic-to-webp',
      es: 'https://pixselli.com/es/heic-to-webp',
      pt: 'https://pixselli.com/pt/heic-to-webp',
      fr: 'https://pixselli.com/fr/heic-to-webp',
      de: 'https://pixselli.com/de/heic-to-webp',
      it: 'https://pixselli.com/it/heic-to-webp',
      'x-default': 'https://pixselli.com/heic-to-webp',
    },
  },
  openGraph: {
    title: 'Convertitore HEIC in WebP Online Gratis - Pixselli',
    description: 'Converti HEIC in WebP rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/heic-to-webp',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore HEIC in WebP Online Gratis - Pixselli',
    description: 'Converti HEIC in WebP online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianHeicToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
