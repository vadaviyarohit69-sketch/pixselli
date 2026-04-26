import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube Banner Maker Online Free - 2560x1440 Channel Art | Pixselli',
  description:
    'Create YouTube channel banners online for free with perfect 2560x1440 dimensions and safe area guides. Fast, secure, and browser-based.',
  keywords: ['youtube banner maker', 'youtube channel art', 'youtube banner size', '2560x1440 banner', 'safe area guide'],
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
    canonical: 'https://pixselli.com/youtube-banner',
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
    title: 'YouTube Banner Maker Online Free - Pixselli',
    description:
      'Make YouTube channel art at 2560x1440 with safe area guides for desktop, mobile, and TV. Free and private.',
    url: 'https://pixselli.com/youtube-banner',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YouTube Banner Maker by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Banner Maker Online Free - Pixselli',
    description: 'Create 2560x1440 YouTube channel banners online instantly with safe area guides.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}