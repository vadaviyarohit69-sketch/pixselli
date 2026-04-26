import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress to 10KB Online Free - Exact Image Size Tool | Pixselli',
  description:
    'Compress image to exact 10KB size online with smart quality adjustment. Fast private processing for JPG, PNG, and WebP files.',
  keywords: ['compress-10kb', 'image compression', 'compress images', 'reduce file size', 'online compressor'],
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
    canonical: 'https://pixselli.com/compress-10kb',
    languages: {
      en: 'https://pixselli.com/compress-10kb',
      es: 'https://pixselli.com/es/compress-10kb',
      pt: 'https://pixselli.com/pt/compress-10kb',
      fr: 'https://pixselli.com/fr/compress-10kb',
      de: 'https://pixselli.com/de/compress-10kb',
      it: 'https://pixselli.com/it/compress-10kb',
      'x-default': 'https://pixselli.com/compress-10kb',
    },
  },
  openGraph: {
    title: 'Compress to 10KB Online Free - Pixselli',
    description: 'Make your image exactly 10KB online for forms and uploads with private browser-based compression.',
    url: 'https://pixselli.com/compress-10kb',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Compress image to 10KB tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress to 10KB Online Free - Pixselli',
    description: 'Compress images to exact 10KB online with fast and private processing.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}