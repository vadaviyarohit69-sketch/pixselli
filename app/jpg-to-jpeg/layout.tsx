import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG to JPEG Converter Online Free - Convert JPG Files | Pixselli',
  description:
    'Convert JPG to JPEG format online with fast browser-based processing and high-quality output.',
  keywords: ['jpg to jpeg', 'convert jpg to jpeg', 'jpg jpeg converter', 'jpeg converter'],
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
  openGraph: {
    title: 'JPG to JPEG Converter Online Free - Pixselli',
    description: 'Convert JPG files to JPEG quickly and securely.',
    url: 'https://pixselli.com/jpg-to-jpeg',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JPG to JPEG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to JPEG Converter Online Free - Pixselli',
    description: 'Convert JPG to JPEG online in seconds with private processing.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://pixselli.com/jpg-to-jpeg',
    languages: {
      en: 'https://pixselli.com/jpg-to-jpeg',
      es: 'https://pixselli.com/es/jpg-to-jpeg',
      pt: 'https://pixselli.com/pt/jpg-to-jpeg',
      fr: 'https://pixselli.com/fr/jpg-to-jpeg',
      de: 'https://pixselli.com/de/jpg-to-jpeg',
      it: 'https://pixselli.com/it/jpg-to-jpeg',
      'x-default': 'https://pixselli.com/jpg-to-jpeg',
    },
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}