import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress to 60KB Online Free - Exact Image Size Tool | Pixselli',
  description:
    'Compress image to exact 60KB size online with smart quality adjustment. Fast private processing for JPG, PNG, and WebP files.',
  keywords: ['compress-60kb', 'image compression', 'compress images', 'reduce file size', 'online compressor'],
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
    canonical: 'https://pixselli.com/compress-60kb',
    languages: {
      en: 'https://pixselli.com/compress-60kb',
      es: 'https://pixselli.com/es/compress-60kb',
      pt: 'https://pixselli.com/pt/compress-60kb',
      fr: 'https://pixselli.com/fr/compress-60kb',
      de: 'https://pixselli.com/de/compress-60kb',
      it: 'https://pixselli.com/it/compress-60kb',
      'x-default': 'https://pixselli.com/compress-60kb',
    },
  },
  openGraph: {
    title: 'Compress to 60KB Online Free - Pixselli',
    description: 'Make your image exactly 60KB online for forms and uploads with private browser-based compression.',
    url: 'https://pixselli.com/compress-60kb',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Compress image to 60KB tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress to 60KB Online Free - Pixselli',
    description: 'Compress images to exact 60KB online with fast and private processing.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}