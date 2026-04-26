import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube-Banner-Ersteller Kostenlos - Kanalgrafik 2560x1440 | Pixselli',
  description:
    'Erstelle YouTube-Kanalbanner online kostenlos mit perfekten 2560x1440 Abmessungen und sicheren Bereichshilfen.',
  keywords: ['youtube banner erstellen', 'youtube kanalbild', 'youtube banner groesse', '2560x1440'],
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
    canonical: 'https://pixselli.com/de/youtube-banner',
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
    title: 'YouTube-Banner-Ersteller Kostenlos - Pixselli',
    description: 'Erstelle YouTube-Banner in 2560x1440 mit Hilfslinien fuer Desktop, Mobil und TV.',
    url: 'https://pixselli.com/de/youtube-banner',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function GermanYoutubeBannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
