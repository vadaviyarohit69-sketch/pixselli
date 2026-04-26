import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bild Spiegeln Online Kostenlos - Horizontal und Vertikal | Pixselli',
  description:
    'Spiegele Bilder horizontal oder vertikal online kostenlos. Schnell, sicher und lokale Verarbeitung im Browser.',
  keywords: ['bild spiegeln', 'bild horizontal spiegeln', 'bild vertikal spiegeln', 'bild invertieren', 'foto spiegeln'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/flip-image',
    languages: {
      en: 'https://pixselli.com/flip-image',
      es: 'https://pixselli.com/es/flip-image',
      pt: 'https://pixselli.com/pt/flip-image',
      fr: 'https://pixselli.com/fr/flip-image',
      de: 'https://pixselli.com/de/flip-image',
      it: 'https://pixselli.com/it/flip-image',
      'x-default': 'https://pixselli.com/flip-image',
    },
  },
  openGraph: {
    title: 'Bild Spiegeln Kostenlos Online',
    description: 'Spiegele Bilder horizontal oder vertikal in Sekunden.',
    url: 'https://pixselli.com/de/flip-image',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'de_DE',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanFlipImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
