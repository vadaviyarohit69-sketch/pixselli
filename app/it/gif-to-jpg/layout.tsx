import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore GIF in JPG Online Gratis - Converti Immagini GIF | Pixselli',
  description:
    'Converti immagini GIF in JPG online con elaborazione privata nel browser e controllo qualita.',
  keywords: ['gif in jpg', 'converti gif in jpg', 'convertitore gif jpg', 'convertitore jpg'],
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
    canonical: 'https://pixselli.com/it/gif-to-jpg',
    languages: {
      en: 'https://pixselli.com/gif-to-jpg',
      es: 'https://pixselli.com/es/gif-to-jpg',
      pt: 'https://pixselli.com/pt/gif-to-jpg',
      fr: 'https://pixselli.com/fr/gif-to-jpg',
      de: 'https://pixselli.com/de/gif-to-jpg',
      it: 'https://pixselli.com/it/gif-to-jpg',
      'x-default': 'https://pixselli.com/gif-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertitore GIF in JPG Online Gratis - Pixselli',
    description: 'Converti GIF in JPG rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/gif-to-jpg',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore GIF in JPG Online Gratis - Pixselli',
    description: 'Converti GIF in JPG online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianGifToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
