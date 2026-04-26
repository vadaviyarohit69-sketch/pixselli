import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore JPG in HEIC Online Gratis - Converti Immagini JPG | Pixselli',
  description:
    'Converti immagini JPG in HEIC online con elaborazione privata nel browser e controllo qualita.',
  keywords: ['jpg in heic', 'converti jpg in heic', 'convertitore jpg heic', 'convertitore heic'],
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
    canonical: 'https://pixselli.com/it/jpg-to-heic',
    languages: {
      en: 'https://pixselli.com/jpg-to-heic',
      es: 'https://pixselli.com/es/jpg-to-heic',
      pt: 'https://pixselli.com/pt/jpg-to-heic',
      fr: 'https://pixselli.com/fr/jpg-to-heic',
      de: 'https://pixselli.com/de/jpg-to-heic',
      it: 'https://pixselli.com/it/jpg-to-heic',
      'x-default': 'https://pixselli.com/jpg-to-heic',
    },
  },
  openGraph: {
    title: 'Convertitore JPG in HEIC Online Gratis - Pixselli',
    description: 'Converti JPG in HEIC rapidamente con output compatibile con Apple.',
    url: 'https://pixselli.com/it/jpg-to-heic',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore JPG in HEIC Online Gratis - Pixselli',
    description: 'Converti JPG in HEIC online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianJpgToHeicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
