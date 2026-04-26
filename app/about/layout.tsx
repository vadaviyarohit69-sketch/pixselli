import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Pixselli - Free Image Tools Platform',
  description:
    'Learn about Pixselli, our mission, and how we build free browser-based image tools focused on privacy and speed.',
  keywords: ['about pixselli', 'image tools platform', 'browser image processing', 'free image tools', 'pixselli mission'],
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
    canonical: 'https://pixselli.com/about',
    languages: {
      en: 'https://pixselli.com/about',
      es: 'https://pixselli.com/es/about',
      pt: 'https://pixselli.com/pt/about',
      fr: 'https://pixselli.com/fr/about',
      de: 'https://pixselli.com/de/about',
      it: 'https://pixselli.com/it/about',
      'x-default': 'https://pixselli.com/about',
    },
  },
  openGraph: {
    title: 'About Pixselli - Free Image Tools Platform',
    description: 'Learn about Pixselli and our privacy-first image tool mission.',
    url: 'https://pixselli.com/about',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Pixselli - Free Image Tools Platform',
    description: 'Learn about Pixselli and our privacy-first image tool mission.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
