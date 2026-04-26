import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Black and White Converter - Convert images to black and white/grayscale Online Free',
  description: 'Convert images to black and white/grayscale online for free. Fast, secure, client-side processing.',
  keywords: ['black-and-white', 'image editor', 'photo editor', 'online tool'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Free Black and White Converter Online',
    description: 'Convert images to black and white/grayscale. Fast, free, and secure.',
    url: 'https://pixselli.com/black-and-white',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black and White Converter - Free Online Tool',
    description: 'Convert images to black and white online in seconds',
    creator: '@pixselli',
  },
  alternates: {
    canonical: 'https://pixselli.com/black-and-white',
    languages: {
      en: 'https://pixselli.com/black-and-white',
      es: 'https://pixselli.com/es/black-and-white',
      pt: 'https://pixselli.com/pt/black-and-white',
      fr: 'https://pixselli.com/fr/black-and-white',
      de: 'https://pixselli.com/de/black-and-white',
      it: 'https://pixselli.com/it/black-and-white',
      'x-default': 'https://pixselli.com/black-and-white',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}