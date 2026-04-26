import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore JPG in JPEG Online Gratis - Converti File JPG | Pixselli',
  description:
    'Converti formato JPG in JPEG online con elaborazione rapida nel browser e output di alta qualita.',
  keywords: ['jpg in jpeg', 'converti jpg in jpeg', 'convertitore jpg jpeg', 'convertitore jpeg'],
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
    canonical: 'https://pixselli.com/it/jpg-to-jpeg',
    languages: {
      en: 'https://pixselli.com/jpg-to-jpeg',
      es: 'https://pixselli.com/es/jpg-to-jpeg',
      pt: 'https://pixselli.com/pt/jpg-to-jpeg',
      fr: 'https://pixselli.com/fr/jpg-to-jpeg',
      de: 'https://pixselli.com/de/jpg-to-jpeg',
      it: 'https://pixselli.com/it/jpg-to-jpeg',
      'x-default': 'https://pixselli.com/jpg-to-jpeg',
    },
  },
  openGraph: {
    title: 'Convertitore JPG in JPEG Online Gratis - Pixselli',
    description: 'Converti file JPG in JPEG rapidamente e in modo sicuro.',
    url: 'https://pixselli.com/it/jpg-to-jpeg',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore JPG in JPEG Online Gratis - Pixselli',
    description: 'Converti JPG in JPEG online con output rapido e privato.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianJpgToJpegLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
