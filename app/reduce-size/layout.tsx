import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reduce Image Size Online Free - Compress JPG, PNG, WebP | PIXSELLI',
  description:
    'Reduce image size online for free with our fast and secure tool. Compress JPG, PNG, and WebP files while maintaining quality. No signup required.',
  keywords: ['reduce image size', 'compress image online', 'image compressor', 'reduce photo size', 'optimize images'],
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
    title: 'Reduce Image Size Online Free - PIXSELLI',
    description:
      'Compress and reduce image file size while keeping quality. Fast, free, and private image size reducer for JPG, PNG, WebP.',
    url: 'https://pixselli.com/reduce-size',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Reduce Image Size Tool by PIXSELLI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reduce Image Size Online Free - PIXSELLI',
    description:
      'Compress and reduce image size online instantly. Free and secure browser-based image reducer.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://pixselli.com/reduce-size',
    languages: {
      en: 'https://pixselli.com/reduce-size',
      es: 'https://pixselli.com/es/reduce-size',
      pt: 'https://pixselli.com/pt/reduce-size',
      fr: 'https://pixselli.com/fr/reduce-size',
      de: 'https://pixselli.com/de/reduce-size',
      it: 'https://pixselli.com/it/reduce-size',
      'x-default': 'https://pixselli.com/reduce-size',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}