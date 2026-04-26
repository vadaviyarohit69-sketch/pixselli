import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Pixselli',
  description:
    'Read the Pixselli Privacy Policy and understand how data, cookies, and browser-based processing are handled.',
  keywords: ['privacy policy', 'pixselli privacy', 'cookie policy', 'data protection', 'browser processing privacy'],
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
    canonical: 'https://pixselli.com/privacy',
    languages: {
      en: 'https://pixselli.com/privacy',
      es: 'https://pixselli.com/es/privacy',
      pt: 'https://pixselli.com/pt/privacy',
      fr: 'https://pixselli.com/fr/privacy',
      de: 'https://pixselli.com/de/privacy',
      it: 'https://pixselli.com/it/privacy',
      'x-default': 'https://pixselli.com/privacy',
    },
  },
  openGraph: {
    title: 'Privacy Policy - Pixselli',
    description: 'How Pixselli handles data and privacy for browser-based tools.',
    url: 'https://pixselli.com/privacy',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Pixselli',
    description: 'How Pixselli handles data and privacy for browser-based tools.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
