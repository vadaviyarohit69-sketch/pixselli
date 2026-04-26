import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Criador de Banner do YouTube Gratis - Arte de Canal 2560x1440 | Pixselli',
  description:
    'Crie banners de canal do YouTube online gratis com dimensoes perfeitas de 2560x1440 e guias de area segura.',
  keywords: ['banner do youtube', 'arte de canal youtube', 'tamanho banner youtube', '2560x1440'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pixselli.com/pt/youtube-banner',
    languages: {
      en: 'https://pixselli.com/youtube-banner',
      es: 'https://pixselli.com/es/youtube-banner',
      pt: 'https://pixselli.com/pt/youtube-banner',
      fr: 'https://pixselli.com/fr/youtube-banner',
      de: 'https://pixselli.com/de/youtube-banner',
      it: 'https://pixselli.com/it/youtube-banner',
      'x-default': 'https://pixselli.com/youtube-banner',
    },
  },
  openGraph: {
    title: 'Criador de Banner do YouTube Gratis - Pixselli',
    description: 'Crie banners do YouTube 2560x1440 com guias de area segura para desktop, celular e TV.',
    url: 'https://pixselli.com/pt/youtube-banner',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function PortugueseYoutubeBannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
