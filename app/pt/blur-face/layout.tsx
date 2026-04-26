import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desfocar Rosto - Ferramenta Gratis Online',
  description:
    'Desfoque rostos e areas sensiveis em imagens online gratuitamente. Rapido, seguro e com processamento local no navegador.',
  keywords: ['desfocar rosto', 'privacidade em fotos', 'desfoque online', 'editor de imagem'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://pixselli.com/pt/blur-face',
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
    title: 'Desfocar Rosto Gratis Online',
    description: 'Desfoque rostos e informacoes sensiveis em segundos.',
    url: 'https://pixselli.com/pt/blur-face',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'pt_PT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desfocar Rosto - Ferramenta Gratis',
    description: 'Desfoque rostos online sem complicacao',
    creator: '@pixselli',
  },
};

export default function PortugueseBlurFaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
