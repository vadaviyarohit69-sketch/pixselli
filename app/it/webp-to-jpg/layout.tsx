import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore WebP in JPG Online Gratis - Converti Immagini WebP | Pixselli',
  description:
    'Converti immagini WebP in JPG online con elaborazione privata nel browser e risultato di qualita.',
  keywords: ['webp in jpg', 'converti webp in jpg', 'convertitore webp jpg', 'webp in jpeg'],
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
    canonical: 'https://pixselli.com/it/webp-to-jpg',
    languages: {
      en: 'https://pixselli.com/webp-to-jpg',
      es: 'https://pixselli.com/es/webp-to-jpg',
      pt: 'https://pixselli.com/pt/webp-to-jpg',
      fr: 'https://pixselli.com/fr/webp-to-jpg',
      de: 'https://pixselli.com/de/webp-to-jpg',
      it: 'https://pixselli.com/it/webp-to-jpg',
      'x-default': 'https://pixselli.com/webp-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertitore WebP in JPG Online Gratis - Pixselli',
    description: 'Converti file WebP in JPG rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/webp-to-jpg',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore WebP in JPG Online Gratis - Pixselli',
    description: 'Converti WebP in JPG online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianWebpToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
