import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add Watermark - Add text watermark to photos Online Free',
  description: 'Add text watermark to photos online for free. Fast, secure, client-side processing.',
  keywords: ['add-watermark', 'watermark tool', 'photo editor', 'online tool'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Free Add Watermark Online',
    description: 'Add custom text watermarks to photos. Fast, free, and secure.',
    url: 'https://pixselli.com/add-watermark',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add Watermark - Free Online Tool',
    description: 'Add custom text watermarks to images online',
    creator: '@pixselli',
  },
  alternates: {
    canonical: 'https://pixselli.com/add-watermark',
    languages: {
      en: 'https://pixselli.com/add-watermark',
      es: 'https://pixselli.com/es/add-watermark',
      pt: 'https://pixselli.com/pt/add-watermark',
      fr: 'https://pixselli.com/fr/add-watermark',
      de: 'https://pixselli.com/de/add-watermark',
      it: 'https://pixselli.com/it/add-watermark',
      'x-default': 'https://pixselli.com/add-watermark',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}