import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore JPG in BMP Online Gratis - Converti Immagini JPG | Pixselli',
  description:
    'Converti immagini JPG in BMP online con elaborazione privata nel browser e controlli di qualita.',
  keywords: ['jpg in bmp', 'converti jpg in bmp', 'convertitore jpg bmp', 'convertitore bmp'],
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
    canonical: 'https://pixselli.com/it/jpg-to-bmp',
    languages: {
      en: 'https://pixselli.com/jpg-to-bmp',
      es: 'https://pixselli.com/es/jpg-to-bmp',
      pt: 'https://pixselli.com/pt/jpg-to-bmp',
      fr: 'https://pixselli.com/fr/jpg-to-bmp',
      de: 'https://pixselli.com/de/jpg-to-bmp',
      it: 'https://pixselli.com/it/jpg-to-bmp',
      'x-default': 'https://pixselli.com/jpg-to-bmp',
    },
  },
  openGraph: {
    title: 'Convertitore JPG in BMP Online Gratis - Pixselli',
    description: 'Converti JPG in BMP rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/jpg-to-bmp',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore JPG in BMP Online Gratis - Pixselli',
    description: 'Converti JPG in BMP online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianJpgToBmpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
