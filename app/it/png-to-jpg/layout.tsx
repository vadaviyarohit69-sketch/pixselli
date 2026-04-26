import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore PNG in JPG Online Gratis - Converti Immagini PNG | Pixselli',
  description:
    'Converti immagini PNG in JPG online con controllo qualita e elaborazione privata nel browser.',
  keywords: ['png in jpg', 'converti png in jpg', 'convertitore png in jpg', 'png in jpeg'],
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
    canonical: 'https://pixselli.com/it/png-to-jpg',
    languages: {
      en: 'https://pixselli.com/png-to-jpg',
      es: 'https://pixselli.com/es/png-to-jpg',
      pt: 'https://pixselli.com/pt/png-to-jpg',
      fr: 'https://pixselli.com/fr/png-to-jpg',
      de: 'https://pixselli.com/de/png-to-jpg',
      it: 'https://pixselli.com/it/png-to-jpg',
      'x-default': 'https://pixselli.com/png-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertitore PNG in JPG Online Gratis - Pixselli',
    description: 'Converti PNG in JPG rapidamente con controllo qualita.',
    url: 'https://pixselli.com/it/png-to-jpg',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore PNG in JPG Online Gratis - Pixselli',
    description: 'Converti file PNG in JPG online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianPngToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
