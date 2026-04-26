import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image Resizer - Resize Images Online Free',
  description: 'Resize images online for free. Change dimensions, width, height. Fast and secure client-side processing.',
  keywords: ['image resizer', 'resize image', 'resize photo', 'change image size', 'online image resizer'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Free Image Resizer Online',
    description: 'Resize images to any dimension. Fast, free, and secure online tool.',
    url: 'https://pixselli.com/image-resizer',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Resizer - Free Online Tool',
    description: 'Resize images to any dimension online',
    creator: '@pixselli',
  },
  alternates: {
    canonical: 'https://pixselli.com/image-resizer',
    languages: {
      en: 'https://pixselli.com/image-resizer',
      es: 'https://pixselli.com/es/image-resizer',
      pt: 'https://pixselli.com/pt/image-resizer',
      fr: 'https://pixselli.com/fr/image-resizer',
      de: 'https://pixselli.com/de/image-resizer',
      it: 'https://pixselli.com/it/image-resizer',
      'x-default': 'https://pixselli.com/image-resizer',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}