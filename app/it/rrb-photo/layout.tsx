import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creatore Foto RRB Gratis - 3.5x4.5cm, 20-40KB | Pixselli',
  description:
    'Crea foto esame RRB online con dimensione esatta 3.5x4.5cm e peso file 20-40KB per NTPC, Group D, JE e ALP.',
  keywords: ['foto rrb', 'dimensione foto rrb', '3.5x4.5cm', 'foto esame ferroviario', 'ridimensiona foto rrb'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/rrb-photo',
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
    title: 'Creatore Foto RRB Gratis',
    description: 'Genera una foto conforme RRB in 3.5x4.5cm e 20-40KB in pochi secondi.',
    url: 'https://pixselli.com/it/rrb-photo',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianRrbPhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
