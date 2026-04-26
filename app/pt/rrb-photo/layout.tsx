import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Criador de Foto RRB Gratis - 3.5x4.5cm, 20-40KB | Pixselli',
  description:
    'Crie fotos para exame RRB online com tamanho exato 3.5x4.5cm e requisito de 20-40KB para NTPC, Group D, JE e ALP.',
  keywords: ['foto rrb', 'tamanho foto rrb', '3.5x4.5cm', 'foto exame ferroviario', 'redimensionar foto rrb'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/rrb-photo',
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
    title: 'Criador de Foto RRB Gratis',
    description: 'Gere foto compativel com RRB em 3.5x4.5cm e 20-40KB em segundos.',
    url: 'https://pixselli.com/pt/rrb-photo',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function PortugueseRrbPhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
