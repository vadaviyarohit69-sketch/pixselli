import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress to 70KB Online Free - Exact Image Size Tool | Pixselli',
  description:
    'Compress image to exact 70KB size online with smart quality adjustment. Fast private processing for JPG, PNG, and WebP files.',
  keywords: ['compress-70kb', 'image compression', 'compress images', 'reduce file size', 'online compressor'],
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
    canonical: 'https://pixselli.com/compress-70kb',
    languages: {
      en: 'https://pixselli.com/compress-70kb',
      es: 'https://pixselli.com/es/compress-70kb',
      pt: 'https://pixselli.com/pt/compress-70kb',
      fr: 'https://pixselli.com/fr/compress-70kb',
      de: 'https://pixselli.com/de/compress-70kb',
      it: 'https://pixselli.com/it/compress-70kb',
      'x-default': 'https://pixselli.com/compress-70kb',
    },
  },
  openGraph: {
    title: 'Compress to 70KB Online Free - Pixselli',
    description: 'Make your image exactly 70KB online for forms and uploads with private browser-based compression.',
    url: 'https://pixselli.com/compress-70kb',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Compress image to 70KB tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress to 70KB Online Free - Pixselli',
    description: 'Compress images to exact 70KB online with fast and private processing.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}