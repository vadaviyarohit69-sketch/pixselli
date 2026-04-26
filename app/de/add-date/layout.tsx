import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datum zum Foto hinzufuegen - Zeitstempel kostenlos online | Pixselli',
  description:
    'Fuege Datums- und Zeitstempel kostenlos online zu Bildern hinzu. Schnell, sicher und lokale Verarbeitung im Browser.',
  keywords: ['datum zum foto', 'zeitstempel', 'datumsstempel', 'bildeditor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/add-date',
    languages: {
      en: 'https://pixselli.com/add-date',
      es: 'https://pixselli.com/es/add-date',
      pt: 'https://pixselli.com/pt/add-date',
      fr: 'https://pixselli.com/fr/add-date',
      de: 'https://pixselli.com/de/add-date',
      it: 'https://pixselli.com/it/add-date',
      'x-default': 'https://pixselli.com/add-date',
    },
  },
  openGraph: {
    title: 'Datum zum Foto hinzufuegen Kostenlos Online',
    description: 'Fuege Datum und Uhrzeit in Sekunden zu Fotos hinzu.',
    url: 'https://pixselli.com/de/add-date',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanAddDateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
