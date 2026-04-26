import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PNG zu ICO Konverter Online Kostenlos - PNG Bilder umwandeln | Pixselli',
  description:
    'Konvertiere PNG-Bilder online in ICO mit privater Browser-Verarbeitung und Qualitatskontrolle.',
  keywords: ['png zu ico', 'png in ico umwandeln', 'png ico konverter', 'ico konverter'],
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
    canonical: 'https://pixselli.com/de/png-to-ico',
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
    title: 'PNG zu ICO Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere PNG zu ICO schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/png-to-ico',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG zu ICO Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere PNG zu ICO online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanPngToIcoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
