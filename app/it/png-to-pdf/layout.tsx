import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore PNG in PDF Online Gratis - Converti Immagini PNG | Pixselli',
  description:
    'Converti immagini PNG in PDF online con dimensione pagina, orientamento, margini e opzioni di unione grazie all\'elaborazione privata nel browser.',
  keywords: ['png in pdf', 'converti png in pdf', 'immagine in pdf', 'unire png in pdf'],
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
    canonical: 'https://pixselli.com/it/png-to-pdf',
    languages: {
      en: 'https://pixselli.com/png-to-pdf',
      es: 'https://pixselli.com/es/png-to-pdf',
      pt: 'https://pixselli.com/pt/png-to-pdf',
      fr: 'https://pixselli.com/fr/png-to-pdf',
      de: 'https://pixselli.com/de/png-to-pdf',
      it: 'https://pixselli.com/it/png-to-pdf',
      'x-default': 'https://pixselli.com/png-to-pdf',
    },
  },
  openGraph: {
    title: 'Convertitore PNG in PDF Online Gratis - Pixselli',
    description: 'Converti PNG in PDF rapidamente con controlli avanzati di pagina.',
    url: 'https://pixselli.com/it/png-to-pdf',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore PNG in PDF Online Gratis - Pixselli',
    description: 'Converti PNG in PDF online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianPngToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
