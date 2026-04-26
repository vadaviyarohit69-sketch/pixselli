import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ajouter une Date a la Photo - Horodatage Gratuit en Ligne | Pixselli',
  description:
    'Ajoutez un horodatage date et heure aux images en ligne gratuitement. Rapide, securise et traitement local.',
  keywords: ['ajouter date photo', 'horodatage', 'tampon date', 'editeur image'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/add-date',
    languages: {
      en: 'https://pixselli.com/add-date',
      es: 'https://pixselli.com/es/add-date',
      pt: 'https://pixselli.com/pt/add-date',
      fr: 'https://pixselli.com/fr/add-date',
      de: 'https://pixselli.com/de/add-date',
      it: 'https://pixselli.com/it/add-date',
      'x-default': 'https://pixselli.com/add-date',
    },
  },
  openGraph: {
    title: 'Ajouter une Date a la Photo Gratuitement en Ligne',
    description: 'Ajoutez date et heure a vos photos en quelques secondes.',
    url: 'https://pixselli.com/fr/add-date',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function FrenchAddDateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
