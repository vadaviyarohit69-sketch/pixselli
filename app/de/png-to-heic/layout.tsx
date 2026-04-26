import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PNG zu HEIC Konverter Online Kostenlos - PNG Bilder umwandeln | Pixselli',
  description:
    'Konvertiere PNG-Bilder online in HEIC mit privater Browser-Verarbeitung und Qualitatskontrolle.',
  keywords: ['png zu heic', 'png in heic umwandeln', 'png heic konverter', 'heic converter'],
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
    canonical: 'https://pixselli.com/de/png-to-heic',
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
    title: 'PNG zu HEIC Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere PNG zu HEIC schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/png-to-heic',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG zu HEIC Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere PNG zu HEIC online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanPngToHeicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
