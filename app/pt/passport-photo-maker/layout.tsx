import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Criador de Foto para Passaporte - Criar Fotos Online Gratis',
  description:
    'Crie fotos de passaporte online gratis. Ajuste tamanho e fundo com processamento rapido e seguro no navegador.',
  keywords: [
    'foto passaporte online',
    'criador foto passaporte',
    'tamanho foto passaporte',
    'editor foto passaporte',
    'foto 3x4 online',
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
    canonical: 'https://pixselli.com/pt/passport-photo-maker',
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
    title: 'Criador de Foto para Passaporte Gratis',
    description: 'Crie fotos de passaporte online com tamanhos oficiais e fundo personalizado.',
    url: 'https://pixselli.com/pt/passport-photo-maker',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'pt_PT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foto para Passaporte Online - Ferramenta Gratis',
    description: 'Crie fotos de passaporte com tamanhos oficiais',
    creator: '@pixselli',
  },
};

export default function PortuguesePassportPhotoMakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
