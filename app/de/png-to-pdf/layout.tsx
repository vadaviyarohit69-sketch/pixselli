import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PNG zu PDF Konverter Online Kostenlos - PNG Bilder umwandeln | Pixselli',
  description:
    'Konvertiere PNG-Bilder online in PDF mit Seitengrosse, Ausrichtung, Randern und Zusammenfuhren-Optionen durch private Browser-Verarbeitung.',
  keywords: ['png zu pdf', 'png in pdf umwandeln', 'bild zu pdf', 'png zu pdf zusammenfuhren'],
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
    canonical: 'https://pixselli.com/de/png-to-pdf',
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
    title: 'PNG zu PDF Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere PNG zu PDF schnell mit erweiterten Seiteneinstellungen.',
    url: 'https://pixselli.com/de/png-to-pdf',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG zu PDF Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere PNG zu PDF online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanPngToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
