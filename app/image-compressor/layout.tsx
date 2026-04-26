import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image Compressor Online Free - Reduce JPG, PNG, WebP Size | Pixselli',
  description:
    'Compress images online with adjustable quality and format options. Reduce JPG, PNG, and WebP size quickly while keeping good visual quality.',
  keywords: ['image-compressor', 'image compression', 'compress images', 'reduce file size', 'online compressor'],
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
    canonical: 'https://pixselli.com/image-compressor',
    languages: {
      en: 'https://pixselli.com/image-compressor',
      es: 'https://pixselli.com/es/image-compressor',
      pt: 'https://pixselli.com/pt/image-compressor',
      fr: 'https://pixselli.com/fr/image-compressor',
      de: 'https://pixselli.com/de/image-compressor',
      it: 'https://pixselli.com/it/image-compressor',
      'x-default': 'https://pixselli.com/image-compressor',
    },
  },
  openGraph: {
    title: 'Image Compressor Online Free - Pixselli',
    description: 'Compress JPG, PNG, and WebP images online with custom quality controls and fast private processing.',
    url: 'https://pixselli.com/image-compressor',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Image Compressor by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Compressor Online Free - Pixselli',
    description: 'Reduce image size online with quality control for JPG, PNG, and WebP files.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}