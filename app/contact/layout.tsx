import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Pixselli - Support and Feedback',
  description:
    'Contact Pixselli for support, product feedback, and business inquiries related to our image tools.',
  keywords: ['contact pixselli', 'support', 'feedback', 'help desk', 'image tool support'],
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
    canonical: 'https://pixselli.com/contact',
    languages: {
      en: 'https://pixselli.com/contact',
      es: 'https://pixselli.com/es/contact',
      pt: 'https://pixselli.com/pt/contact',
      fr: 'https://pixselli.com/fr/contact',
      de: 'https://pixselli.com/de/contact',
      it: 'https://pixselli.com/it/contact',
      'x-default': 'https://pixselli.com/contact',
    },
  },
  openGraph: {
    title: 'Contact Pixselli - Support and Feedback',
    description: 'Reach Pixselli for support, feedback, and collaboration inquiries.',
    url: 'https://pixselli.com/contact',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Pixselli - Support and Feedback',
    description: 'Reach Pixselli for support, feedback, and collaboration inquiries.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
