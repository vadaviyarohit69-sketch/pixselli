import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image Cropper - Crop images online with custom dimensions Online Free',
  description: 'Crop images online with custom dimensions online for free. Fast, secure, client-side processing.',
  keywords: ['image-cropper', 'image editor', 'photo editor', 'online tool'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Free Image Cropper Online',
    description: 'Crop images online with custom dimensions. Fast, free, and secure.',
    url: 'https://pixselli.com/image-cropper',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Cropper - Free Online Tool',
    description: 'Crop images online with custom dimensions',
    creator: '@pixselli',
  },
  alternates: {
    canonical: 'https://pixselli.com/image-cropper',
    languages: {
      en: 'https://pixselli.com/image-cropper',
      es: 'https://pixselli.com/es/image-cropper',
      pt: 'https://pixselli.com/pt/image-cropper',
      fr: 'https://pixselli.com/fr/image-cropper',
      de: 'https://pixselli.com/de/image-cropper',
      it: 'https://pixselli.com/it/image-cropper',
      'x-default': 'https://pixselli.com/image-cropper',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}