import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur JPG vers PDF en Ligne Gratuit - Convertir des Images JPG | Pixselli',
  description:
    'Convertissez des images JPG en PDF en ligne avec taille de page, orientation, marges et options de fusion grace au traitement prive dans le navigateur.',
  keywords: ['jpg vers pdf', 'jpeg vers pdf', 'convertir jpg en pdf', 'image vers pdf', 'fusionner jpg en pdf'],
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
    canonical: 'https://pixselli.com/fr/jpg-to-pdf',
    languages: {
      en: 'https://pixselli.com/jpg-to-pdf',
      es: 'https://pixselli.com/es/jpg-to-pdf',
      pt: 'https://pixselli.com/pt/jpg-to-pdf',
      fr: 'https://pixselli.com/fr/jpg-to-pdf',
      de: 'https://pixselli.com/de/jpg-to-pdf',
      it: 'https://pixselli.com/it/jpg-to-pdf',
      'x-default': 'https://pixselli.com/jpg-to-pdf',
    },
  },
  openGraph: {
    title: 'Convertisseur JPG vers PDF en Ligne Gratuit - Pixselli',
    description: 'Convertissez JPG en PDF rapidement avec des controles avances de page.',
    url: 'https://pixselli.com/fr/jpg-to-pdf',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur JPG vers PDF en Ligne Gratuit - Pixselli',
    description: 'Convertissez JPG en PDF en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchJpgToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
