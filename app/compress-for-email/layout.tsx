import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress for Email Online Free - Email Image Optimizer | Pixselli',
  description:
    'Compress images for email attachments with lightweight dimensions and quality settings to reduce send size and improve delivery.',
  keywords: ['compress-for-email', 'email image optimizer', 'email attachment compression', 'reduce image size'],
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
    canonical: 'https://pixselli.com/compress-for-email',
    languages: {
      en: 'https://pixselli.com/compress-for-email',
      es: 'https://pixselli.com/es/compress-for-email',
      pt: 'https://pixselli.com/pt/compress-for-email',
      fr: 'https://pixselli.com/fr/compress-for-email',
      de: 'https://pixselli.com/de/compress-for-email',
      it: 'https://pixselli.com/it/compress-for-email',
      'x-default': 'https://pixselli.com/compress-for-email',
    },
  },
  openGraph: {
    title: 'Compress for Email Online Free - Pixselli',
    description: 'Optimize image attachments for email with smaller size and clear output.',
    url: 'https://pixselli.com/compress-for-email',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Compress for email tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress for Email Online Free - Pixselli',
    description: 'Compress image attachments for email and reduce file size quickly.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
