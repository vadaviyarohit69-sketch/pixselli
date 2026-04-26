import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recadreur d image - Recadrer des Images en Ligne Gratuitement',
  description:
    'Recadrez des images en ligne gratuitement avec des rapports personnalises. Rapide, securise et traite localement dans votre navigateur.',
  keywords: [
    'recadreur d image',
    'recadrer image',
    'recadrer photo en ligne',
    'editeur image en ligne',
    'recadrage image gratuit',
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
    canonical: 'https://pixselli.com/fr/image-cropper',
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
  openGraph: {
    title: 'Recadreur d image gratuit en ligne',
    description: 'Recadrez vos images avec precision et telechargez instantanement.',
    url: 'https://pixselli.com/fr/image-cropper',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recadreur d image - Outil gratuit',
    description: 'Recadrez des images en ligne avec des dimensions personnalisees',
    creator: '@pixselli',
  },
};

export default function FrenchImageCropperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
