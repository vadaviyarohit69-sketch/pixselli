import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schwarzweiss-Konverter Kostenlos - Bilder in Graustufen Umwandeln | Pixselli',
  description:
    'Wandle Bilder online kostenlos in Schwarzweiss/Graustufen um. Schnell, sicher und lokale Verarbeitung im Browser.',
  keywords: ['schwarzweiss', 'graustufen', 'bild konvertieren', 'foto editor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/black-and-white',
    languages: {
      en: 'https://pixselli.com/black-and-white',
      es: 'https://pixselli.com/es/black-and-white',
      pt: 'https://pixselli.com/pt/black-and-white',
      fr: 'https://pixselli.com/fr/black-and-white',
      de: 'https://pixselli.com/de/black-and-white',
      it: 'https://pixselli.com/it/black-and-white',
      'x-default': 'https://pixselli.com/black-and-white',
    },
  },
  openGraph: {
    title: 'Schwarzweiss-Konverter Kostenlos Online',
    description: 'Wandle Bilder in Sekunden in Schwarzweiss um.',
    url: 'https://pixselli.com/de/black-and-white',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'de_DE',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanBlackAndWhiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
