import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress by Percentage Online Free - 10% to 90% Image Reduction | Pixselli',
  description:
    'Compress image by percentage online from 10% to 90% with fast private browser processing and format options.',
  keywords: ['compress-percentage', 'image compression by percentage', 'reduce image size', 'online compressor'],
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
    canonical: 'https://pixselli.com/compress-percentage',
    languages: {
      en: 'https://pixselli.com/compress-percentage',
      es: 'https://pixselli.com/es/compress-percentage',
      pt: 'https://pixselli.com/pt/compress-percentage',
      fr: 'https://pixselli.com/fr/compress-percentage',
      de: 'https://pixselli.com/de/compress-percentage',
      it: 'https://pixselli.com/it/compress-percentage',
      'x-default': 'https://pixselli.com/compress-percentage',
    },
  },
  openGraph: {
    title: 'Compress by Percentage Online Free - Pixselli',
    description: 'Reduce image size by percentage with adjustable target and private client-side processing.',
    url: 'https://pixselli.com/compress-percentage',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Compress by percentage tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress by Percentage Online Free - Pixselli',
    description: 'Compress images by percentage from 10% to 90% online quickly and privately.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
