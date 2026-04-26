import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore JPG in AVIF Online Gratis - Converti Immagini JPG | Pixselli',
  description:
    'Converti immagini JPG in AVIF online con elaborazione privata nel browser e controllo qualita.',
  keywords: ['jpg in avif', 'converti jpg in avif', 'convertitore jpg avif', 'convertitore avif'],
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
    canonical: 'https://pixselli.com/it/jpg-to-avif',
    languages: {
      en: 'https://pixselli.com/jpg-to-avif',
      es: 'https://pixselli.com/es/jpg-to-avif',
      pt: 'https://pixselli.com/pt/jpg-to-avif',
      fr: 'https://pixselli.com/fr/jpg-to-avif',
      de: 'https://pixselli.com/de/jpg-to-avif',
      it: 'https://pixselli.com/it/jpg-to-avif',
      'x-default': 'https://pixselli.com/jpg-to-avif',
    },
  },
  openGraph: {
    title: 'Convertitore JPG in AVIF Online Gratis - Pixselli',
    description: 'Converti JPG in AVIF rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/jpg-to-avif',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore JPG in AVIF Online Gratis - Pixselli',
    description: 'Converti JPG in AVIF online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianJpgToAvifLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
