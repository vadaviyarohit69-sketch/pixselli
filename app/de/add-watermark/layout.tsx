import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wasserzeichen Hinzufuegen - Kostenloses Online-Tool | Pixselli',
  description:
    'Fuege Text-Wasserzeichen kostenlos online zu deinen Fotos hinzu. Schnell, sicher und lokale Verarbeitung im Browser.',
  keywords: ['wasserzeichen hinzufuegen', 'foto wasserzeichen', 'bildeditor', 'online tool'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/add-watermark',
    languages: {
      en: 'https://pixselli.com/add-watermark',
      es: 'https://pixselli.com/es/add-watermark',
      pt: 'https://pixselli.com/pt/add-watermark',
      fr: 'https://pixselli.com/fr/add-watermark',
      de: 'https://pixselli.com/de/add-watermark',
      it: 'https://pixselli.com/it/add-watermark',
      'x-default': 'https://pixselli.com/add-watermark',
    },
  },
  openGraph: {
    title: 'Wasserzeichen Hinzufuegen Kostenlos Online',
    description: 'Fuege Text-Wasserzeichen in Sekunden zu Bildern hinzu.',
    url: 'https://pixselli.com/de/add-watermark',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanAddWatermarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
