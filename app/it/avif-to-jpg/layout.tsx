import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore AVIF in JPG Online Gratis - Converti Immagini AVIF | Pixselli',
  description:
    'Converti immagini AVIF in JPG online con elaborazione privata nel browser e controllo qualita.',
  keywords: ['avif in jpg', 'converti avif in jpg', 'convertitore avif jpg', 'convertitore jpg'],
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
    canonical: 'https://pixselli.com/it/avif-to-jpg',
    languages: {
      en: 'https://pixselli.com/avif-to-jpg',
      es: 'https://pixselli.com/es/avif-to-jpg',
      pt: 'https://pixselli.com/pt/avif-to-jpg',
      fr: 'https://pixselli.com/fr/avif-to-jpg',
      de: 'https://pixselli.com/de/avif-to-jpg',
      it: 'https://pixselli.com/it/avif-to-jpg',
      'x-default': 'https://pixselli.com/avif-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertitore AVIF in JPG Online Gratis - Pixselli',
    description: 'Converti AVIF in JPG rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/avif-to-jpg',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore AVIF in JPG Online Gratis - Pixselli',
    description: 'Converti AVIF in JPG online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianAvifToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
