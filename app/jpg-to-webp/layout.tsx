import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG to WebP Converter - Convert JPG to WebP Online Free',
  description: 'Convert JPEG images to WebP format for better compression online for free. Fast, secure, client-side processing.',
  keywords: ['jpg to webp', 'convert jpg to webp', 'image converter', 'online converter', 'free jpg to webp'],
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
  openGraph: {
    title: 'Free JPG to WebP Converter Online',
    description: 'Convert JPEG images to WebP format for better compression. Fast, free, and secure.',
    url: 'https://pixselli.com/jpg-to-webp',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free JPG to WebP Converter',
    description: 'Convert JPEG images to WebP format for better compression. Free and secure.',
    creator: '@pixselli',
  },
  alternates: {
    canonical: 'https://pixselli.com/jpg-to-webp',
    languages: {
      en: 'https://pixselli.com/jpg-to-webp',
      es: 'https://pixselli.com/es/jpg-to-webp',
      pt: 'https://pixselli.com/pt/jpg-to-webp',
      fr: 'https://pixselli.com/fr/jpg-to-webp',
      de: 'https://pixselli.com/de/jpg-to-webp',
      it: 'https://pixselli.com/it/jpg-to-webp',
      'x-default': 'https://pixselli.com/jpg-to-webp',
    },
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}