import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Criador de Foto UPSC Gratis - 35x45mm, 10-40KB | Pixselli',
  description:
    'Crie fotos para exames UPSC com 35x45mm (413x531px), 300 DPI e tamanho entre 10-40KB.',
  keywords: ['foto upsc', 'tamanho foto upsc', '35x45mm', 'foto para formulario upsc'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/upsc-photo',
    languages: {
      en: 'https://pixselli.com/upsc-photo',
      es: 'https://pixselli.com/es/upsc-photo',
      pt: 'https://pixselli.com/pt/upsc-photo',
      fr: 'https://pixselli.com/fr/upsc-photo',
      de: 'https://pixselli.com/de/upsc-photo',
      it: 'https://pixselli.com/it/upsc-photo',
      'x-default': 'https://pixselli.com/upsc-photo',
    },
  },
  openGraph: {
    title: 'Criador de Foto UPSC Gratis',
    description: 'Gere foto UPSC 35x45mm com tamanho de arquivo correto em segundos.',
    url: 'https://pixselli.com/pt/upsc-photo',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function PortugueseUpscPhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
