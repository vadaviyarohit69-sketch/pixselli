import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creatore Foto UPSC Gratis - 35x45mm, 10-40KB | Pixselli',
  description:
    'Crea foto UPSC con dimensioni 35x45mm (413x531px), 300 DPI e peso file 10-40KB.',
  keywords: ['foto upsc', 'dimensione foto upsc', '35x45mm', 'foto modulo upsc'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/upsc-photo',
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
    title: 'Creatore Foto UPSC Gratis',
    description: 'Genera in pochi secondi una foto UPSC 35x45mm con dimensione file corretta.',
    url: 'https://pixselli.com/it/upsc-photo',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianUpscPhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
