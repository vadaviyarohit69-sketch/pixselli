import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gesicht Verpixeln - Kostenloses Online-Tool',
  description:
    'Verpixeln Sie Gesichter und sensible Bereiche in Bildern kostenlos online. Schnell, sicher und lokal im Browser verarbeitet.',
  keywords: ['gesicht verpixeln', 'datenschutz foto', 'bild verpixeln', 'online bildeditor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://pixselli.com/de/blur-face',
    languages: {
      en: 'https://pixselli.com/blur-face',
      es: 'https://pixselli.com/es/blur-face',
      pt: 'https://pixselli.com/pt/blur-face',
      fr: 'https://pixselli.com/fr/blur-face',
      de: 'https://pixselli.com/de/blur-face',
      it: 'https://pixselli.com/it/blur-face',
      'x-default': 'https://pixselli.com/blur-face',
    },
  },
  openGraph: {
    title: 'Gesicht Verpixeln Kostenlos Online',
    description: 'Verpixeln Sie Gesichter und sensible Informationen in Sekunden.',
    url: 'https://pixselli.com/de/blur-face',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'de_DE',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gesicht Verpixeln - Kostenloses Tool',
    description: 'Gesichter online schnell und einfach verpixeln',
    creator: '@pixselli',
  },
};

export default function GermanBlurFaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
