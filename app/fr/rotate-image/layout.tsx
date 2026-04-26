import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pivoter image en ligne gratuit - Rotateur tout angle | Pixselli',
  description:
    'Faites pivoter des images en ligne avec n importe quel angle et apercu instantane. Outil gratuit dans le navigateur avec sortie PNG, JPG et WebP.',
  keywords: ['pivoter image', 'rotation photo', 'rotateur image', 'angle personnalise', 'rotation gratuite'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pixselli.com/fr/rotate-image',
    languages: {
      en: 'https://pixselli.com/rotate-image',
      es: 'https://pixselli.com/es/rotate-image',
      pt: 'https://pixselli.com/pt/rotate-image',
      fr: 'https://pixselli.com/fr/rotate-image',
      de: 'https://pixselli.com/de/rotate-image',
      it: 'https://pixselli.com/it/rotate-image',
      'x-default': 'https://pixselli.com/rotate-image',
    },
  },
  openGraph: {
    title: 'Pivoter image en ligne gratuit - Pixselli',
    description: 'Pivotez vos photos a n importe quel angle avec apercu instantane.',
    url: 'https://pixselli.com/fr/rotate-image',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function FrenchRotateImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
