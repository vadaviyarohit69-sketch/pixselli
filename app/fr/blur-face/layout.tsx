import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flouter un Visage - Outil Gratuit en Ligne',
  description:
    'Floutez visages et zones sensibles dans les images en ligne gratuitement. Rapide, securise et traitement local dans le navigateur.',
  keywords: ['flouter visage', 'proteger la vie privee', 'flou photo', 'editeur image'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://pixselli.com/fr/blur-face',
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
    title: 'Flouter un Visage Gratuitement en Ligne',
    description: 'Floutez visages et donnees sensibles en quelques secondes.',
    url: 'https://pixselli.com/fr/blur-face',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flouter un Visage - Outil Gratuit',
    description: 'Floutez visages en ligne facilement',
    creator: '@pixselli',
  },
};

export default function FrenchBlurFaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
