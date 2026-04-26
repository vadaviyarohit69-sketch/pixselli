import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UPSC-Foto-Ersteller Kostenlos - 35x45mm, 10-40KB | Pixselli',
  description:
    'Erstelle UPSC-Fotos mit 35x45mm (413x531px), 300 DPI und Dateigroesse zwischen 10-40KB.',
  keywords: ['upsc foto', 'upsc bildgroesse', '35x45mm', 'upsc formular foto'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/upsc-photo',
    languages: {
      en: 'https://pixselli.com/upsc-photo',
      es: 'https://pixselli.com/es/upsc-photo',
      pt: 'https://pixselli.com/pt/upsc-photo',
      fr: 'https://pixselli.com/fr/upsc-photo',
      de: 'https://pixselli.com/de/upsc-photo',
      it: 'https://pixselli.com/it/upsc-photo',
      'x-default': 'https://pixselli.com/upsc-photo',
    },
  },
  openGraph: {
    title: 'UPSC-Foto-Ersteller Kostenlos',
    description: 'Erzeuge in Sekunden ein UPSC-35x45mm-Foto mit korrekter Dateigroesse.',
    url: 'https://pixselli.com/de/upsc-photo',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanUpscPhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
