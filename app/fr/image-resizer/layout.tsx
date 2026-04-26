import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionneur d image - Redimensionner des Images en Ligne Gratuitement',
  description:
    'Redimensionnez des images en ligne gratuitement. Ajustez largeur et hauteur avec un traitement rapide et securise dans votre navigateur.',
  keywords: [
    'redimensionneur d image',
    'redimensionner image',
    'redimensionner photo',
    'changer taille image',
    'redimensionneur en ligne',
  ],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://pixselli.com/fr/image-resizer',
    languages: {
      en: 'https://pixselli.com/image-resizer',
      es: 'https://pixselli.com/es/image-resizer',
      pt: 'https://pixselli.com/pt/image-resizer',
      fr: 'https://pixselli.com/fr/image-resizer',
      de: 'https://pixselli.com/de/image-resizer',
      it: 'https://pixselli.com/it/image-resizer',
      'x-default': 'https://pixselli.com/image-resizer',
    },
  },
  openGraph: {
    title: 'Redimensionneur d image gratuit en ligne',
    description: 'Redimensionnez vos images a n importe quelle dimension rapidement et en toute securite.',
    url: 'https://pixselli.com/fr/image-resizer',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redimensionneur d image - Outil gratuit',
    description: 'Redimensionnez des images en ligne a la taille souhaitee',
    creator: '@pixselli',
  },
};

export default function FrenchImageResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
