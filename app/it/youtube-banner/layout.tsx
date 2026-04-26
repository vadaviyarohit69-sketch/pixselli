import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creatore Banner YouTube Gratis - Grafica Canale 2560x1440 | Pixselli',
  description:
    'Crea banner canale YouTube online gratis con dimensioni perfette 2560x1440 e guide area sicura.',
  keywords: ['banner youtube', 'grafica canale youtube', 'dimensioni banner youtube', '2560x1440'],
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
    canonical: 'https://pixselli.com/it/youtube-banner',
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
    title: 'Creatore Banner YouTube Gratis - Pixselli',
    description: 'Crea banner YouTube 2560x1440 con guide area sicura per desktop, mobile e TV.',
    url: 'https://pixselli.com/it/youtube-banner',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function ItalianYoutubeBannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
