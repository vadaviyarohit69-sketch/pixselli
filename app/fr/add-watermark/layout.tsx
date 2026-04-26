import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ajouter un Filigrane - Outil Gratuit en Ligne | Pixselli',
  description:
    'Ajoutez un filigrane texte a vos photos en ligne gratuitement. Rapide, securise et traitement local dans le navigateur.',
  keywords: ['ajouter filigrane', 'filigrane photo', 'editeur image', 'outil en ligne'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/add-watermark',
    languages: {
      en: 'https://pixselli.com/add-watermark',
      es: 'https://pixselli.com/es/add-watermark',
      pt: 'https://pixselli.com/pt/add-watermark',
      fr: 'https://pixselli.com/fr/add-watermark',
      de: 'https://pixselli.com/de/add-watermark',
      it: 'https://pixselli.com/it/add-watermark',
      'x-default': 'https://pixselli.com/add-watermark',
    },
  },
  openGraph: {
    title: 'Ajouter un Filigrane Gratuitement en Ligne',
    description: 'Ajoutez des filigranes texte a vos images en quelques secondes.',
    url: 'https://pixselli.com/fr/add-watermark',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function FrenchAddWatermarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
