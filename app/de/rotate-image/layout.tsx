import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bild online kostenlos drehen - Rotator fuer jeden Winkel | Pixselli',
  description:
    'Drehen Sie Bilder online in jedem Winkel mit sofortiger Vorschau. Kostenloses Browser-Tool mit PNG-, JPG- und WebP-Ausgabe.',
  keywords: ['bild drehen', 'foto rotieren', 'bild rotator', 'benutzerdefinierter winkel', 'kostenlose rotation'],
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
    canonical: 'https://pixselli.com/de/rotate-image',
    languages: {
      en: 'https://pixselli.com/rotate-image',
      es: 'https://pixselli.com/es/rotate-image',
      pt: 'https://pixselli.com/pt/rotate-image',
      fr: 'https://pixselli.com/fr/rotate-image',
      de: 'https://pixselli.com/de/rotate-image',
      it: 'https://pixselli.com/it/rotate-image',
      'x-default': 'https://pixselli.com/rotate-image',
    },
  },
  openGraph: {
    title: 'Bild online kostenlos drehen - Pixselli',
    description: 'Drehen Sie Fotos in jedem Winkel mit sofortiger Vorschau.',
    url: 'https://pixselli.com/de/rotate-image',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function GermanRotateImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
