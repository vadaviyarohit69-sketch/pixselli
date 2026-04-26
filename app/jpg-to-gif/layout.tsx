import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG to GIF Converter Online Free - Convert JPG Images | Pixselli',
  description:
    'Convert JPG images to GIF format online with browser-based private processing and quality controls.',
  keywords: ['jpg to gif', 'convert jpg to gif', 'jpg gif converter', 'gif converter'],
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
    canonical: 'https://pixselli.com/jpg-to-gif',
    languages: {
      en: 'https://pixselli.com/jpg-to-gif',
      es: 'https://pixselli.com/es/jpg-to-gif',
      pt: 'https://pixselli.com/pt/jpg-to-gif',
      fr: 'https://pixselli.com/fr/jpg-to-gif',
      de: 'https://pixselli.com/de/jpg-to-gif',
      it: 'https://pixselli.com/it/jpg-to-gif',
      'x-default': 'https://pixselli.com/jpg-to-gif',
    },
  },
  openGraph: {
    title: 'JPG to GIF Converter Online Free - Pixselli',
    description: 'Convert JPG images to GIF quickly with dependable output.',
    url: 'https://pixselli.com/jpg-to-gif',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JPG to GIF converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to GIF Converter Online Free - Pixselli',
    description: 'Convert JPG to GIF online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
