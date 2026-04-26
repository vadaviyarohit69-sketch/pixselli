import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add Date to Photo - Add date and time stamp to images Online Free',
  description: 'Add date and time stamp to images online for free. Fast, secure, client-side processing.',
  keywords: ['add-date', 'image editor', 'photo editor', 'online tool'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Free Add Date to Photo Online',
    description: 'Add date and time stamp to images. Fast, free, and secure.',
    url: 'https://pixselli.com/add-date',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add Date to Photo - Free Online Tool',
    description: 'Add date and timestamp to photos online',
    creator: '@pixselli',
  },
  alternates: {
    canonical: 'https://pixselli.com/add-date',
    languages: {
      en: 'https://pixselli.com/add-date',
      es: 'https://pixselli.com/es/add-date',
      pt: 'https://pixselli.com/pt/add-date',
      fr: 'https://pixselli.com/fr/add-date',
      de: 'https://pixselli.com/de/add-date',
      it: 'https://pixselli.com/it/add-date',
      'x-default': 'https://pixselli.com/add-date',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}