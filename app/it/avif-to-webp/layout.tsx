import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore AVIF in WebP Online Gratis - Converti Immagini AVIF | Pixselli',
  description:
    'Converti immagini AVIF in WebP online con elaborazione privata nel browser e controllo qualita.',
  keywords: ['avif in webp', 'converti avif in webp', 'convertitore avif webp', 'convertitore webp'],
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
    canonical: 'https://pixselli.com/it/avif-to-webp',
    languages: {
      en: 'https://pixselli.com/avif-to-webp',
      es: 'https://pixselli.com/es/avif-to-webp',
      pt: 'https://pixselli.com/pt/avif-to-webp',
      fr: 'https://pixselli.com/fr/avif-to-webp',
      de: 'https://pixselli.com/de/avif-to-webp',
      it: 'https://pixselli.com/it/avif-to-webp',
      'x-default': 'https://pixselli.com/avif-to-webp',
    },
  },
  openGraph: {
    title: 'Convertitore AVIF in WebP Online Gratis - Pixselli',
    description: 'Converti AVIF in WebP rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/avif-to-webp',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore AVIF in WebP Online Gratis - Pixselli',
    description: 'Converti AVIF in WebP online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianAvifToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
