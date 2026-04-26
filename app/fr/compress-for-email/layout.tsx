import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresser pour Email en Ligne Gratuit - Optimiseur de Pieces Jointes | Pixselli',
  description:
    'Compressez les images pour les pieces jointes email avec des dimensions legeres et une qualite equilibree.',
  keywords: ['compresser pour email', 'optimiseur de pieces jointes', 'compression email', 'reduire taille'],
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
    canonical: 'https://pixselli.com/fr/compress-for-email',
    languages: {
      en: 'https://pixselli.com/compress-for-email',
      es: 'https://pixselli.com/es/compress-for-email',
      pt: 'https://pixselli.com/pt/compress-for-email',
      fr: 'https://pixselli.com/fr/compress-for-email',
      de: 'https://pixselli.com/de/compress-for-email',
      it: 'https://pixselli.com/it/compress-for-email',
      'x-default': 'https://pixselli.com/compress-for-email',
    },
  },
  openGraph: {
    title: 'Compresser pour Email en Ligne Gratuit - Pixselli',
    description: 'Optimisez les pieces jointes image pour email avec une taille reduite.',
    url: 'https://pixselli.com/fr/compress-for-email',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresser pour Email en Ligne Gratuit - Pixselli',
    description: 'Compressez vos images pour email avec un envoi plus rapide.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchCompressForEmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
