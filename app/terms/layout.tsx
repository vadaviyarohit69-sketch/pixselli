import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Pixselli',
  description:
    'Review Pixselli Terms of Service, acceptable use rules, and legal responsibilities for platform usage.',
  keywords: ['terms of service', 'pixselli terms', 'acceptable use', 'legal terms', 'service conditions'],
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
    canonical: 'https://pixselli.com/terms',
    languages: {
      en: 'https://pixselli.com/terms',
      es: 'https://pixselli.com/es/terms',
      pt: 'https://pixselli.com/pt/terms',
      fr: 'https://pixselli.com/fr/terms',
      de: 'https://pixselli.com/de/terms',
      it: 'https://pixselli.com/it/terms',
      'x-default': 'https://pixselli.com/terms',
    },
  },
  openGraph: {
    title: 'Terms of Service - Pixselli',
    description: 'Read service terms, usage rules, and legal conditions for Pixselli.',
    url: 'https://pixselli.com/terms',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Pixselli',
    description: 'Read service terms, usage rules, and legal conditions for Pixselli.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
