import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flip Image - Flip images horizontally or vertically Online Free',
  description: 'Flip images horizontally or vertically online for free. Fast, secure, client-side processing.',
  keywords: ['flip-image', 'image editor', 'photo editor', 'online tool'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Free Flip Image Online',
    description: 'Flip images horizontally or vertically. Fast, free, and secure.',
    url: 'https://pixselli.com/flip-image',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flip Image - Free Online Tool',
    description: 'Flip images horizontally or vertically online',
    creator: '@pixselli',
  },
  alternates: {
    canonical: 'https://pixselli.com/flip-image',
    languages: {
      en: 'https://pixselli.com/flip-image',
      es: 'https://pixselli.com/es/flip-image',
      pt: 'https://pixselli.com/pt/flip-image',
      fr: 'https://pixselli.com/fr/flip-image',
      de: 'https://pixselli.com/de/flip-image',
      it: 'https://pixselli.com/it/flip-image',
      'x-default': 'https://pixselli.com/flip-image',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}