import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresser pour le Web en Ligne Gratuit - Optimiseur Web | Pixselli',
  description:
    'Compressez des images pour sites web avec des dimensions et une qualite optimisees. Traitement rapide dans le navigateur.',
  keywords: ['compresser pour le web', 'optimiseur web', 'compression image site', 'reduire taille image'],
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
    canonical: 'https://pixselli.com/fr/compress-for-web',
    languages: {
      en: 'https://pixselli.com/compress-for-web',
      es: 'https://pixselli.com/es/compress-for-web',
      pt: 'https://pixselli.com/pt/compress-for-web',
      fr: 'https://pixselli.com/fr/compress-for-web',
      de: 'https://pixselli.com/de/compress-for-web',
      it: 'https://pixselli.com/it/compress-for-web',
      'x-default': 'https://pixselli.com/compress-for-web',
    },
  },
  openGraph: {
    title: 'Compresser pour le Web en Ligne Gratuit - Pixselli',
    description: 'Optimisez les images pour le web avec un bon equilibre poids/qualite.',
    url: 'https://pixselli.com/fr/compress-for-web',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresser pour le Web en Ligne Gratuit - Pixselli',
    description: 'Preparez des images pour sites web avec une compression orientee performance.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchCompressForWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
