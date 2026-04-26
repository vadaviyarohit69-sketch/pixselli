import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress for Forms Online Free - Image Optimizer for Upload Forms | Pixselli',
  description:
    'Compress images for online forms with size-friendly dimensions and quality settings to meet upload limits quickly.',
  keywords: ['compress-for-forms', 'form image compressor', 'optimize image for forms', 'reduce image size'],
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
    canonical: 'https://pixselli.com/compress-for-forms',
    languages: {
      en: 'https://pixselli.com/compress-for-forms',
      es: 'https://pixselli.com/es/compress-for-forms',
      pt: 'https://pixselli.com/pt/compress-for-forms',
      fr: 'https://pixselli.com/fr/compress-for-forms',
      de: 'https://pixselli.com/de/compress-for-forms',
      it: 'https://pixselli.com/it/compress-for-forms',
      'x-default': 'https://pixselli.com/compress-for-forms',
    },
  },
  openGraph: {
    title: 'Compress for Forms Online Free - Pixselli',
    description: 'Prepare images for online forms and upload portals with reduced size.',
    url: 'https://pixselli.com/compress-for-forms',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Compress for forms tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress for Forms Online Free - Pixselli',
    description: 'Optimize images for form uploads and reduce file size quickly.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
