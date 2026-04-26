import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresser pour Formulaires en Ligne Gratuit - Optimiseur d Upload | Pixselli',
  description:
    'Compressez des images pour les formulaires en ligne avec des dimensions et une qualite optimisee pour respecter les limites de televersement.',
  keywords: ['compresser pour formulaires', 'compresseur image formulaire', 'optimiser image formulaire', 'reduire la taille'],
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
    canonical: 'https://pixselli.com/fr/compress-for-forms',
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
    title: 'Compresser pour Formulaires en Ligne Gratuit - Pixselli',
    description: 'Preparez des images pour les formulaires et les uploads avec une taille reduite.',
    url: 'https://pixselli.com/fr/compress-for-forms',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresser pour Formulaires en Ligne Gratuit - Pixselli',
    description: 'Optimisez les images pour les uploads de formulaires et reduisez la taille rapidement.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchCompressForFormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
