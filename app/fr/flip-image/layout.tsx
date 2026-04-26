import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retourner une Image en Ligne Gratuit - Horizontal et Vertical | Pixselli',
  description:
    'Retournez des images horizontalement ou verticalement en ligne gratuitement. Rapide, securise et traitement local.',
  keywords: ['retourner image', 'effet miroir image', 'inverser image', 'retournement horizontal', 'retournement vertical'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/flip-image',
    languages: {
      en: 'https://pixselli.com/flip-image',
      es: 'https://pixselli.com/es/flip-image',
      pt: 'https://pixselli.com/pt/flip-image',
      fr: 'https://pixselli.com/fr/flip-image',
      de: 'https://pixselli.com/de/flip-image',
      it: 'https://pixselli.com/it/flip-image',
      'x-default': 'https://pixselli.com/flip-image',
    },
  },
  openGraph: {
    title: 'Retourner une Image Gratuitement en Ligne',
    description: 'Retournez des images horizontalement ou verticalement en quelques secondes.',
    url: 'https://pixselli.com/fr/flip-image',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function FrenchFlipImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
