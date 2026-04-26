import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Createur de Photo Passeport - Creer des Photos en Ligne Gratuitement',
  description:
    'Creez des photos passeport en ligne gratuitement. Ajustez taille et fond avec un traitement rapide et securise dans le navigateur.',
  keywords: [
    'photo passeport en ligne',
    'createur photo passeport',
    'taille photo passeport',
    'editeur photo passeport',
    'photo identite en ligne',
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
    canonical: 'https://pixselli.com/fr/passport-photo-maker',
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
    title: 'Createur de Photo Passeport Gratuit',
    description: 'Creez des photos passeport en ligne avec dimensions officielles et fond personnalise.',
    url: 'https://pixselli.com/fr/passport-photo-maker',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Passeport en Ligne - Outil Gratuit',
    description: 'Creez des photos passeport aux dimensions officielles',
    creator: '@pixselli',
  },
};

export default function FrenchPassportPhotoMakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
