import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Createur de Photo RRB Gratuit - 3.5x4.5cm, 20-40KB | Pixselli',
  description:
    'Creez des photos examen RRB en ligne avec dimensions exactes 3.5x4.5cm et taille 20-40KB pour NTPC, Group D, JE et ALP.',
  keywords: ['photo rrb', 'taille photo rrb', '3.5x4.5cm', 'photo examen ferroviaire', 'redimensionner photo rrb'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/rrb-photo',
    languages: {
      en: 'https://pixselli.com/rrb-photo',
      es: 'https://pixselli.com/es/rrb-photo',
      pt: 'https://pixselli.com/pt/rrb-photo',
      fr: 'https://pixselli.com/fr/rrb-photo',
      de: 'https://pixselli.com/de/rrb-photo',
      it: 'https://pixselli.com/it/rrb-photo',
      'x-default': 'https://pixselli.com/rrb-photo',
    },
  },
  openGraph: {
    title: 'Createur de Photo RRB Gratuit',
    description: 'Generez une photo conforme RRB en 3.5x4.5cm et 20-40KB en quelques secondes.',
    url: 'https://pixselli.com/fr/rrb-photo',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function FrenchRrbPhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
