import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bildgroessenanderer - Bilder Online Kostenlos Skalieren',
  description:
    'Skaliere Bilder online kostenlos. Passe Breite und Hohe mit schneller und sicherer Verarbeitung im Browser an.',
  keywords: [
    'bildgroessenanderer',
    'bild skalieren',
    'foto vergroessern oder verkleinern',
    'bildgroesse andern',
    'online bild skalieren',
  ],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://pixselli.com/de/image-resizer',
    languages: {
      en: 'https://pixselli.com/image-resizer',
      es: 'https://pixselli.com/es/image-resizer',
      pt: 'https://pixselli.com/pt/image-resizer',
      fr: 'https://pixselli.com/fr/image-resizer',
      de: 'https://pixselli.com/de/image-resizer',
      it: 'https://pixselli.com/it/image-resizer',
      'x-default': 'https://pixselli.com/image-resizer',
    },
  },
  openGraph: {
    title: 'Kostenloser Bildgroessenanderer online',
    description: 'Skaliere Bilder auf jede Dimension schnell und sicher.',
    url: 'https://pixselli.com/de/image-resizer',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'de_DE',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bildgroessenanderer - Kostenloses Online-Tool',
    description: 'Skaliere Bilder online auf jede gewunschte Groesse',
    creator: '@pixselli',
  },
};

export default function GermanImageResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
