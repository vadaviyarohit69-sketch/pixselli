import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG zu GIF Konverter Online Kostenlos - JPG Bilder umwandeln | Pixselli',
  description:
    'Konvertiere JPG-Bilder online in GIF mit privater Browser-Verarbeitung und Qualitatskontrolle.',
  keywords: ['jpg zu gif', 'jpg in gif umwandeln', 'jpg gif konverter', 'gif konverter'],
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
    canonical: 'https://pixselli.com/de/jpg-to-gif',
    languages: {
      en: 'https://pixselli.com/jpg-to-gif',
      es: 'https://pixselli.com/es/jpg-to-gif',
      pt: 'https://pixselli.com/pt/jpg-to-gif',
      fr: 'https://pixselli.com/fr/jpg-to-gif',
      de: 'https://pixselli.com/de/jpg-to-gif',
      it: 'https://pixselli.com/it/jpg-to-gif',
      'x-default': 'https://pixselli.com/jpg-to-gif',
    },
  },
  openGraph: {
    title: 'JPG zu GIF Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu GIF schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/jpg-to-gif',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG zu GIF Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu GIF online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanJpgToGifLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
