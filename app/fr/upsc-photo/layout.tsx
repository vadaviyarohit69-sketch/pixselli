import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Createur de Photo UPSC Gratuit - 35x45mm, 10-40KB | Pixselli',
  description:
    'Creez des photos UPSC avec dimensions 35x45mm (413x531px), 300 DPI et taille de fichier 10-40KB.',
  keywords: ['photo upsc', 'taille photo upsc', '35x45mm', 'photo formulaire upsc'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/upsc-photo',
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
    title: 'Createur de Photo UPSC Gratuit',
    description: 'Generez une photo UPSC 35x45mm avec taille de fichier correcte en quelques secondes.',
    url: 'https://pixselli.com/fr/upsc-photo',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function FrenchUpscPhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
