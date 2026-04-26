import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RRB Foto-Ersteller Kostenlos - 3.5x4.5cm, 20-40KB | Pixselli',
  description:
    'Erstellen Sie RRB Pruefungsfotos online mit exakter Groesse 3.5x4.5cm und 20-40KB Dateigroesse fuer NTPC, Group D, JE und ALP.',
  keywords: ['rrb foto', 'rrb fotogroesse', '3.5x4.5cm', 'bahnpruefung foto', 'rrb foto anpassen'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/rrb-photo',
    languages: {
      en: 'https://pixselli.com/rrb-photo',
      es: 'https://pixselli.com/es/rrb-photo',
      pt: 'https://pixselli.com/pt/rrb-photo',
      fr: 'https://pixselli.com/fr/rrb-photo',
      de: 'https://pixselli.com/de/rrb-photo',
      it: 'https://pixselli.com/it/rrb-photo',
      'x-default': 'https://pixselli.com/rrb-photo',
    },
  },
  openGraph: {
    title: 'RRB Foto-Ersteller Kostenlos',
    description: 'Erstellen Sie ein RRB-konformes Foto in 3.5x4.5cm und 20-40KB in Sekunden.',
    url: 'https://pixselli.com/de/rrb-photo',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanRrbPhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
