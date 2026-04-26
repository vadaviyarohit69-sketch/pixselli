import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resize Image to Inches Online Free - Custom DPI/PPI | Pixselli',
  description:
    'Resize images to exact inch dimensions online with custom DPI/PPI settings. Perfect for print-ready photos and documents. Fast and secure.',
  keywords: ['resize image to inches', 'dpi converter', 'print image size', 'inch to pixel image', 'photo print dimensions'],
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
    canonical: 'https://pixselli.com/resize-to-inches',
    languages: {
      en: 'https://pixselli.com/resize-to-inches',
      es: 'https://pixselli.com/es/resize-to-inches',
      pt: 'https://pixselli.com/pt/resize-to-inches',
      fr: 'https://pixselli.com/fr/resize-to-inches',
      de: 'https://pixselli.com/de/resize-to-inches',
      it: 'https://pixselli.com/it/resize-to-inches',
      'x-default': 'https://pixselli.com/resize-to-inches',
    },
  },
  openGraph: {
    title: 'Resize Image to Inches Online Free - Pixselli',
    description:
      'Set exact inch dimensions and DPI/PPI for print-ready images. Quick, accurate, and browser-based.',
    url: 'https://pixselli.com/resize-to-inches',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Resize to Inches Tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resize Image to Inches Online Free - Pixselli',
    description: 'Resize photos to exact inches with custom DPI/PPI for printing online.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}