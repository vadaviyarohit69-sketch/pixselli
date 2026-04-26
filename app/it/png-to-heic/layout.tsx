import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore PNG in HEIC Online Gratis - Converti Immagini PNG | Pixselli',
  description:
    'Converti immagini PNG in HEIC online con elaborazione privata nel browser e controllo qualita.',
  keywords: ['png in heic', 'converti png in heic', 'convertitore png heic', 'heic converter'],
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
    canonical: 'https://pixselli.com/it/png-to-heic',
    languages: {
      en: 'https://pixselli.com/png-to-heic',
      es: 'https://pixselli.com/es/png-to-heic',
      pt: 'https://pixselli.com/pt/png-to-heic',
      fr: 'https://pixselli.com/fr/png-to-heic',
      de: 'https://pixselli.com/de/png-to-heic',
      it: 'https://pixselli.com/it/png-to-heic',
      'x-default': 'https://pixselli.com/png-to-heic',
    },
  },
  openGraph: {
    title: 'Convertitore PNG in HEIC Online Gratis - Pixselli',
    description: 'Converti PNG in HEIC rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/png-to-heic',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore PNG in HEIC Online Gratis - Pixselli',
    description: 'Converti PNG in HEIC online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianPngToHeicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
