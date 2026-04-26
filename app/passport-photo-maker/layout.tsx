import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Passport Photo Maker - Create passport size photos online Online Free',
  description: 'Create passport size photos online online for free. Fast, secure, client-side processing.',
  keywords: ['passport-photo-maker', 'image editor', 'photo editor', 'online tool'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Free Passport Photo Maker Online',
    description: 'Create passport size photos online. Fast, free, and secure.',
    url: 'https://pixselli.com/passport-photo-maker',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passport Photo Maker - Free Online Tool',
    description: 'Create passport size photos online for free',
    creator: '@pixselli',
  },
  alternates: {
    canonical: 'https://pixselli.com/passport-photo-maker',
    languages: {
      en: 'https://pixselli.com/passport-photo-maker',
      es: 'https://pixselli.com/es/passport-photo-maker',
      pt: 'https://pixselli.com/pt/passport-photo-maker',
      fr: 'https://pixselli.com/fr/passport-photo-maker',
      de: 'https://pixselli.com/de/passport-photo-maker',
      it: 'https://pixselli.com/it/passport-photo-maker',
      'x-default': 'https://pixselli.com/passport-photo-maker',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}