import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blur Face - Blur faces in images for privacy Online Free',
  description: 'Blur faces in images for privacy online for free. Fast, secure, client-side processing.',
  keywords: ['blur-face', 'image editor', 'photo editor', 'online tool'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Free Blur Face Online',
    description: 'Blur faces in images for privacy. Fast, free, and secure.',
    url: 'https://pixselli.com/blur-face',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blur Face - Free Online Tool',
    description: 'Blur faces and sensitive areas online',
    creator: '@pixselli',
  },
  alternates: {
    canonical: 'https://pixselli.com/blur-face',
    languages: {
      en: 'https://pixselli.com/blur-face',
      es: 'https://pixselli.com/es/blur-face',
      pt: 'https://pixselli.com/pt/blur-face',
      fr: 'https://pixselli.com/fr/blur-face',
      de: 'https://pixselli.com/de/blur-face',
      it: 'https://pixselli.com/it/blur-face',
      'x-default': 'https://pixselli.com/blur-face',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}