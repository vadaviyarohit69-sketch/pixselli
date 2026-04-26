import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rotate Image Online Free - Any Angle Rotator | Pixselli',
  description:
    'Rotate images online by any angle with instant preview. Free browser-based rotator with PNG, JPG, and WebP output.',
  keywords: ['rotate image', 'image rotator', 'rotate photo online', 'custom angle rotate', 'free image rotation'],
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
    canonical: 'https://pixselli.com/rotate-image',
    languages: {
      en: 'https://pixselli.com/rotate-image',
      es: 'https://pixselli.com/es/rotate-image',
      pt: 'https://pixselli.com/pt/rotate-image',
      fr: 'https://pixselli.com/fr/rotate-image',
      de: 'https://pixselli.com/de/rotate-image',
      it: 'https://pixselli.com/it/rotate-image',
      'x-default': 'https://pixselli.com/rotate-image',
    },
  },
  openGraph: {
    title: 'Rotate Image Online Free - Pixselli',
    description:
      'Rotate photos at any angle instantly with live preview. Private browser processing and multi-format downloads.',
    url: 'https://pixselli.com/rotate-image',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rotate Image Tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotate Image Online Free - Pixselli',
    description: 'Rotate images by custom angle online in seconds.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
