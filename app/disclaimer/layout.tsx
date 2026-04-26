import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - Pixselli',
  description:
    'Read the Pixselli disclaimer covering service limitations, third-party links, and liability information.',
  keywords: ['disclaimer', 'pixselli disclaimer', 'service limitations', 'liability', 'legal notice'],
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
    canonical: 'https://pixselli.com/disclaimer',
    languages: {
      en: 'https://pixselli.com/disclaimer',
      es: 'https://pixselli.com/es/disclaimer',
      pt: 'https://pixselli.com/pt/disclaimer',
      fr: 'https://pixselli.com/fr/disclaimer',
      de: 'https://pixselli.com/de/disclaimer',
      it: 'https://pixselli.com/it/disclaimer',
      'x-default': 'https://pixselli.com/disclaimer',
    },
  },
  openGraph: {
    title: 'Disclaimer - Pixselli',
    description: 'Important legal and service limitation information for Pixselli users.',
    url: 'https://pixselli.com/disclaimer',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer - Pixselli',
    description: 'Important legal and service limitation information for Pixselli users.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
