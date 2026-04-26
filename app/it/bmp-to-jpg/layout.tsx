import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore BMP in JPG Online Gratis - Converti Immagini BMP | Pixselli',
  description:
    'Converti immagini BMP in JPG online con elaborazione privata nel browser e controllo qualita.',
  keywords: ['bmp in jpg', 'converti bmp in jpg', 'convertitore bmp jpg', 'convertitore jpg'],
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
    canonical: 'https://pixselli.com/it/bmp-to-jpg',
    languages: {
      en: 'https://pixselli.com/bmp-to-jpg',
      es: 'https://pixselli.com/es/bmp-to-jpg',
      pt: 'https://pixselli.com/pt/bmp-to-jpg',
      fr: 'https://pixselli.com/fr/bmp-to-jpg',
      de: 'https://pixselli.com/de/bmp-to-jpg',
      it: 'https://pixselli.com/it/bmp-to-jpg',
      'x-default': 'https://pixselli.com/bmp-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertitore BMP in JPG Online Gratis - Pixselli',
    description: 'Converti BMP in JPG rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/bmp-to-jpg',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore BMP in JPG Online Gratis - Pixselli',
    description: 'Converti BMP in JPG online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianBmpToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
