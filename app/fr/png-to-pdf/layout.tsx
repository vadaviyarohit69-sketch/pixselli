import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur PNG vers PDF en Ligne Gratuit - Convertir des Images PNG | Pixselli',
  description:
    'Convertissez des images PNG en PDF en ligne avec taille de page, orientation, marges et options de fusion grace au traitement prive dans le navigateur.',
  keywords: ['png vers pdf', 'convertir png en pdf', 'image vers pdf', 'fusionner png en pdf'],
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
    canonical: 'https://pixselli.com/fr/png-to-pdf',
    languages: {
      en: 'https://pixselli.com/png-to-pdf',
      es: 'https://pixselli.com/es/png-to-pdf',
      pt: 'https://pixselli.com/pt/png-to-pdf',
      fr: 'https://pixselli.com/fr/png-to-pdf',
      de: 'https://pixselli.com/de/png-to-pdf',
      it: 'https://pixselli.com/it/png-to-pdf',
      'x-default': 'https://pixselli.com/png-to-pdf',
    },
  },
  openGraph: {
    title: 'Convertisseur PNG vers PDF en Ligne Gratuit - Pixselli',
    description: 'Convertissez PNG en PDF rapidement avec des controles avances de page.',
    url: 'https://pixselli.com/fr/png-to-pdf',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur PNG vers PDF en Ligne Gratuit - Pixselli',
    description: 'Convertissez PNG en PDF en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchPngToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
