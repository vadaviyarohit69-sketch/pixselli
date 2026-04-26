import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bilder fuer Web Komprimieren - Kostenloser Web Optimizer | Pixselli',
  description:
    'Komprimieren Sie Bilder fuer Websites mit webfreundlichen Abmessungen und Qualitaet. Schnelle Verarbeitung im Browser.',
  keywords: ['bilder fuer web komprimieren', 'web optimizer', 'website bild komprimierung', 'bildgroesse reduzieren'],
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
    canonical: 'https://pixselli.com/de/compress-for-web',
    languages: {
      en: 'https://pixselli.com/compress-for-web',
      es: 'https://pixselli.com/es/compress-for-web',
      pt: 'https://pixselli.com/pt/compress-for-web',
      fr: 'https://pixselli.com/fr/compress-for-web',
      de: 'https://pixselli.com/de/compress-for-web',
      it: 'https://pixselli.com/it/compress-for-web',
      'x-default': 'https://pixselli.com/compress-for-web',
    },
  },
  openGraph: {
    title: 'Bilder fuer Web Komprimieren - Pixselli',
    description: 'Optimieren Sie Website-Bilder fuer schnellere Ladezeiten bei guter Qualitaet.',
    url: 'https://pixselli.com/de/compress-for-web',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilder fuer Web Komprimieren - Pixselli',
    description: 'Bereiten Sie Bilder fuer Websites mit performance-fokussierter Komprimierung vor.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanCompressForWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
