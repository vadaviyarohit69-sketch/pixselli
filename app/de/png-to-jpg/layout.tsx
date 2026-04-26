import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PNG zu JPG Konverter Online Kostenlos - PNG Bilder umwandeln | Pixselli',
  description:
    'Wandle PNG-Bilder online in JPG um, mit Qualitatskontrolle und privater Verarbeitung im Browser.',
  keywords: ['png zu jpg', 'png in jpg umwandeln', 'png zu jpg konverter', 'png zu jpeg'],
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
    canonical: 'https://pixselli.com/de/png-to-jpg',
    languages: {
      en: 'https://pixselli.com/png-to-jpg',
      es: 'https://pixselli.com/es/png-to-jpg',
      pt: 'https://pixselli.com/pt/png-to-jpg',
      fr: 'https://pixselli.com/fr/png-to-jpg',
      de: 'https://pixselli.com/de/png-to-jpg',
      it: 'https://pixselli.com/it/png-to-jpg',
      'x-default': 'https://pixselli.com/png-to-jpg',
    },
  },
  openGraph: {
    title: 'PNG zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere PNG zu JPG schnell mit Qualitatskontrolle.',
    url: 'https://pixselli.com/de/png-to-jpg',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere PNG-Dateien schnell und sicher online zu JPG.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanPngToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
