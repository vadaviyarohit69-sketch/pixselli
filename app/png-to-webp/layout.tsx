import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PNG to WebP Converter Online Free - Convert PNG Images | Pixselli',
  description:
    'Convert PNG images to WebP format online with quality control and browser-based private processing.',
  keywords: ['png to webp', 'convert png to webp', 'png webp converter', 'webp converter'],
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
    canonical: 'https://pixselli.com/png-to-webp',
    languages: {
      en: 'https://pixselli.com/png-to-webp',
      es: 'https://pixselli.com/es/png-to-webp',
      pt: 'https://pixselli.com/pt/png-to-webp',
      fr: 'https://pixselli.com/fr/png-to-webp',
      de: 'https://pixselli.com/de/png-to-webp',
      it: 'https://pixselli.com/it/png-to-webp',
      'x-default': 'https://pixselli.com/png-to-webp',
    },
  },
  openGraph: {
    title: 'PNG to WebP Converter Online Free - Pixselli',
    description: 'Convert PNG images to WebP quickly with quality controls.',
    url: 'https://pixselli.com/png-to-webp',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PNG to WebP converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to WebP Converter Online Free - Pixselli',
    description: 'Convert PNG to WebP online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
