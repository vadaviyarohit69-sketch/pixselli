import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Passfoto-Generator - Passfotos Online Kostenlos Erstellen',
  description:
    'Erstelle Passfotos online kostenlos. Passe Groesse und Hintergrund mit schneller und sicherer Browser-Verarbeitung an.',
  keywords: [
    'passfoto online',
    'passfoto generator',
    'passfoto groesse',
    'passfoto editor',
    'biometrisches passfoto online',
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
    canonical: 'https://pixselli.com/de/passport-photo-maker',
    languages: {
      en: 'https://pixselli.com/passport-photo-maker',
      es: 'https://pixselli.com/es/passport-photo-maker',
      pt: 'https://pixselli.com/pt/passport-photo-maker',
      fr: 'https://pixselli.com/fr/passport-photo-maker',
      de: 'https://pixselli.com/de/passport-photo-maker',
      it: 'https://pixselli.com/it/passport-photo-maker',
      'x-default': 'https://pixselli.com/passport-photo-maker',
    },
  },
  openGraph: {
    title: 'Kostenloser Passfoto-Generator Online',
    description: 'Erstelle Passfotos online mit offiziellen Massen und individuellem Hintergrund.',
    url: 'https://pixselli.com/de/passport-photo-maker',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'de_DE',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passfoto Online - Kostenloses Tool',
    description: 'Erstelle Passfotos mit offiziellen Groessen',
    creator: '@pixselli',
  },
};

export default function GermanPassportPhotoMakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
