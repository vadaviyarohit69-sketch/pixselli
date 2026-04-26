import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore JPG in PDF Online Gratis - Converti Immagini JPG | Pixselli',
  description:
    'Converti immagini JPG in PDF online con dimensione pagina, orientamento, margini e opzioni di unione grazie all\'elaborazione privata nel browser.',
  keywords: ['jpg in pdf', 'jpeg in pdf', 'converti jpg in pdf', 'immagine in pdf', 'unire jpg in pdf'],
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
    canonical: 'https://pixselli.com/it/jpg-to-pdf',
    languages: {
      en: 'https://pixselli.com/jpg-to-pdf',
      es: 'https://pixselli.com/es/jpg-to-pdf',
      pt: 'https://pixselli.com/pt/jpg-to-pdf',
      fr: 'https://pixselli.com/fr/jpg-to-pdf',
      de: 'https://pixselli.com/de/jpg-to-pdf',
      it: 'https://pixselli.com/it/jpg-to-pdf',
      'x-default': 'https://pixselli.com/jpg-to-pdf',
    },
  },
  openGraph: {
    title: 'Convertitore JPG in PDF Online Gratis - Pixselli',
    description: 'Converti JPG in PDF rapidamente con controlli avanzati di pagina.',
    url: 'https://pixselli.com/it/jpg-to-pdf',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore JPG in PDF Online Gratis - Pixselli',
    description: 'Converti JPG in PDF online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianJpgToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
