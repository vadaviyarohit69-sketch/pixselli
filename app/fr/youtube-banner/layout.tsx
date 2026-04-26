import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Createur de Banniere YouTube Gratuit - Art de Chaine 2560x1440 | Pixselli',
  description:
    'Creez des bannieres de chaine YouTube en ligne gratuitement avec dimensions parfaites 2560x1440 et guides de zone securisee.',
  keywords: ['banniere youtube', 'art de chaine youtube', 'taille banniere youtube', '2560x1440'],
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
    canonical: 'https://pixselli.com/fr/youtube-banner',
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
    title: 'Createur de Banniere YouTube Gratuit - Pixselli',
    description: 'Creez des bannieres YouTube 2560x1440 avec guides de zone securisee pour ordinateur, mobile et TV.',
    url: 'https://pixselli.com/fr/youtube-banner',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function FrenchYoutubeBannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
