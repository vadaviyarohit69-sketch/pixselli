import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur Noir et Blanc Gratuit - Convertir en Niveaux de Gris | Pixselli',
  description:
    'Convertissez des images en noir et blanc/niveaux de gris gratuitement en ligne. Rapide, securise et traitement local.',
  keywords: ['noir et blanc', 'niveaux de gris', 'convertir image', 'editeur photo'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/black-and-white',
    languages: {
      en: 'https://pixselli.com/black-and-white',
      es: 'https://pixselli.com/es/black-and-white',
      pt: 'https://pixselli.com/pt/black-and-white',
      fr: 'https://pixselli.com/fr/black-and-white',
      de: 'https://pixselli.com/de/black-and-white',
      it: 'https://pixselli.com/it/black-and-white',
      'x-default': 'https://pixselli.com/black-and-white',
    },
  },
  openGraph: {
    title: 'Convertisseur Noir et Blanc Gratuit en Ligne',
    description: 'Convertissez des images en noir et blanc en quelques secondes.',
    url: 'https://pixselli.com/fr/black-and-white',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function FrenchBlackAndWhiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
