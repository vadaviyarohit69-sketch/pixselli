import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PNG to JPG Converter Online Free - Convert PNG Images | Pixselli',
  description:
    'Convert PNG images to JPG format online with quality control and browser-based private processing.',
  keywords: ['png to jpg', 'png to jpeg', 'convert png to jpg', 'png to jpg converter'],
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
    title: 'PNG to JPG Converter Online Free - Pixselli',
    description: 'Convert PNG to JPG with quality control and fast output.',
    url: 'https://pixselli.com/png-to-jpg',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PNG to JPG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to JPG Converter Online Free - Pixselli',
    description: 'Convert PNG files to JPG online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://pixselli.com/png-to-jpg',
    languages: {
      en: 'https://pixselli.com/png-to-jpg',
      es: 'https://pixselli.com/es/png-to-jpg',
      pt: 'https://pixselli.com/pt/png-to-jpg',
      fr: 'https://pixselli.com/fr/png-to-jpg',
      de: 'https://pixselli.com/de/png-to-jpg',
      it: 'https://pixselli.com/it/png-to-jpg',
      'x-default': 'https://pixselli.com/png-to-jpg',
    },
  },
};

export default function PNGtoJPGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}