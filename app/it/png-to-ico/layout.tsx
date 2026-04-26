import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore PNG in ICO Online Gratis - Converti Immagini PNG | Pixselli',
  description:
    'Converti immagini PNG in ICO online con elaborazione privata nel browser e controllo qualita.',
  keywords: ['png in ico', 'converti png in ico', 'convertitore png ico', 'convertitore ico'],
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
    canonical: 'https://pixselli.com/it/png-to-ico',
    languages: {
      en: 'https://pixselli.com/png-to-ico',
      es: 'https://pixselli.com/es/png-to-ico',
      pt: 'https://pixselli.com/pt/png-to-ico',
      fr: 'https://pixselli.com/fr/png-to-ico',
      de: 'https://pixselli.com/de/png-to-ico',
      it: 'https://pixselli.com/it/png-to-ico',
      'x-default': 'https://pixselli.com/png-to-ico',
    },
  },
  openGraph: {
    title: 'Convertitore PNG in ICO Online Gratis - Pixselli',
    description: 'Converti PNG in ICO rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/png-to-ico',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore PNG in ICO Online Gratis - Pixselli',
    description: 'Converti PNG in ICO online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianPngToIcoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
