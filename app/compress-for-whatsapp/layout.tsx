import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress for WhatsApp Online Free - Optimize Images for Sharing | Pixselli',
  description:
    'Compress images for WhatsApp sharing with lightweight dimensions and quality settings. Fast and private browser-based processing.',
  keywords: ['compress-for-whatsapp', 'whatsapp image compressor', 'optimize images for whatsapp', 'reduce image size'],
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
    canonical: 'https://pixselli.com/compress-for-whatsapp',
    languages: {
      en: 'https://pixselli.com/compress-for-whatsapp',
      es: 'https://pixselli.com/es/compress-for-whatsapp',
      pt: 'https://pixselli.com/pt/compress-for-whatsapp',
      fr: 'https://pixselli.com/fr/compress-for-whatsapp',
      de: 'https://pixselli.com/de/compress-for-whatsapp',
      it: 'https://pixselli.com/it/compress-for-whatsapp',
      'x-default': 'https://pixselli.com/compress-for-whatsapp',
    },
  },
  openGraph: {
    title: 'Compress for WhatsApp Online Free - Pixselli',
    description: 'Reduce image size for WhatsApp chats and status updates quickly.',
    url: 'https://pixselli.com/compress-for-whatsapp',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Compress for WhatsApp tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress for WhatsApp Online Free - Pixselli',
    description: 'Optimize images for WhatsApp with faster upload-friendly size.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
