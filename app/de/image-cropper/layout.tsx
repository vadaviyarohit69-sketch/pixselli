import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bildzuschneider - Bilder Online Kostenlos Zuschneiden',
  description:
    'Schneide Bilder online kostenlos mit benutzerdefinierten Seitenverhaltnissen zu. Schnell, sicher und lokal im Browser verarbeitet.',
  keywords: [
    'bild zuschneiden',
    'bildzuschneider',
    'foto zuschneiden online',
    'bild editor online',
    'kostenlos bild zuschneiden',
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
    canonical: 'https://pixselli.com/de/image-cropper',
    languages: {
      en: 'https://pixselli.com/image-cropper',
      es: 'https://pixselli.com/es/image-cropper',
      pt: 'https://pixselli.com/pt/image-cropper',
      fr: 'https://pixselli.com/fr/image-cropper',
      de: 'https://pixselli.com/de/image-cropper',
      it: 'https://pixselli.com/it/image-cropper',
      'x-default': 'https://pixselli.com/image-cropper',
    },
  },
  openGraph: {
    title: 'Kostenloser Bildzuschneider online',
    description: 'Schneide Bilder prazise zu und lade sie sofort herunter.',
    url: 'https://pixselli.com/de/image-cropper',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'de_DE',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bildzuschneider - Kostenloses Tool',
    description: 'Bilder online mit benutzerdefinierten Abmessungen zuschneiden',
    creator: '@pixselli',
  },
};

export default function GermanImageCropperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
