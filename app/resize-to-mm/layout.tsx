import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resize Image to MM Online Free - Custom DPI/PPI | Pixselli',
  description:
    'Resize images to exact millimeter dimensions online with custom DPI/PPI settings. Perfect for passport photos, ID cards, and metric printing.',
  keywords: ['resize image to mm', 'millimeter image resize', 'passport photo size mm', 'mm to pixels', 'metric print size'],
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
    canonical: 'https://pixselli.com/resize-to-mm',
    languages: {
      en: 'https://pixselli.com/resize-to-mm',
      es: 'https://pixselli.com/es/resize-to-mm',
      pt: 'https://pixselli.com/pt/resize-to-mm',
      fr: 'https://pixselli.com/fr/resize-to-mm',
      de: 'https://pixselli.com/de/resize-to-mm',
      it: 'https://pixselli.com/it/resize-to-mm',
      'x-default': 'https://pixselli.com/resize-to-mm',
    },
  },
  openGraph: {
    title: 'Resize Image to MM Online Free - Pixselli',
    description:
      'Set exact millimeter dimensions and DPI/PPI for print-ready images online. Fast and precise browser tool.',
    url: 'https://pixselli.com/resize-to-mm',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Resize to MM Tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to MM Online Free - Pixselli',
    description: 'Resize photos to exact millimeters with custom DPI/PPI online.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}