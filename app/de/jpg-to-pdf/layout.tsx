import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG zu PDF Konverter Online Kostenlos - JPG Bilder umwandeln | Pixselli',
  description:
    'Konvertiere JPG-Bilder online in PDF mit Seitengrosse, Ausrichtung, Randern und Zusammenfuhren-Optionen durch private Browser-Verarbeitung.',
  keywords: ['jpg zu pdf', 'jpeg zu pdf', 'jpg in pdf umwandeln', 'bild zu pdf', 'jpg zu pdf zusammenfuhren'],
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
    canonical: 'https://pixselli.com/de/jpg-to-pdf',
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
    title: 'JPG zu PDF Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu PDF schnell mit erweiterten Seiteneinstellungen.',
    url: 'https://pixselli.com/de/jpg-to-pdf',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG zu PDF Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu PDF online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanJpgToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
