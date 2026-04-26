import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionneur de Signature Gratuit - Ajuster Signature en Ligne | Pixselli',
  description:
    'Redimensionnez les signatures en ligne avec dimensions personnalisees et fond transparent. Ideal pour formulaires et documents.',
  keywords: ['redimensionner signature', 'signature numerique', 'taille signature', 'signature documents'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/signature-resizer',
    languages: {
      en: 'https://pixselli.com/signature-resizer',
      es: 'https://pixselli.com/es/signature-resizer',
      pt: 'https://pixselli.com/pt/signature-resizer',
      fr: 'https://pixselli.com/fr/signature-resizer',
      de: 'https://pixselli.com/de/signature-resizer',
      it: 'https://pixselli.com/it/signature-resizer',
      'x-default': 'https://pixselli.com/signature-resizer',
    },
  },
  openGraph: {
    title: 'Redimensionneur de Signature Gratuit en Ligne',
    description: 'Ajustez les signatures avec taille personnalisee et fond transparent.',
    url: 'https://pixselli.com/fr/signature-resizer',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function FrenchSignatureResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
