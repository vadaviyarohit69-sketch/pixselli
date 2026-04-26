import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore JPG in PNG Online Gratis - Converti Immagini JPG | Pixselli',
  description:
    'Converti immagini JPG in PNG online con elaborazione privata nel browser e output di alta qualita.',
  keywords: ['jpg in png', 'converti jpg in png', 'convertitore jpg in png', 'jpeg in png'],
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
    canonical: 'https://pixselli.com/it/jpg-to-png',
    languages: {
      en: 'https://pixselli.com/jpg-to-png',
      es: 'https://pixselli.com/es/jpg-to-png',
      pt: 'https://pixselli.com/pt/jpg-to-png',
      fr: 'https://pixselli.com/fr/jpg-to-png',
      de: 'https://pixselli.com/de/jpg-to-png',
      it: 'https://pixselli.com/it/jpg-to-png',
      'x-default': 'https://pixselli.com/jpg-to-png',
    },
  },
  openGraph: {
    title: 'Convertitore JPG in PNG Online Gratis - Pixselli',
    description: 'Converti JPG in PNG rapidamente con output di alta qualita.',
    url: 'https://pixselli.com/it/jpg-to-png',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore JPG in PNG Online Gratis - Pixselli',
    description: 'Converti file JPG in PNG online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianJpgToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
