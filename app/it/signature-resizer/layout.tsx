import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ridimensionatore Firma Gratis - Adatta Firma Online | Pixselli',
  description:
    'Ridimensiona firme online con dimensioni personalizzate e sfondo trasparente. Ideale per moduli e documenti.',
  keywords: ['ridimensionare firma', 'firma digitale', 'dimensione firma', 'firma documenti'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/signature-resizer',
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
    title: 'Ridimensionatore Firma Gratis Online',
    description: 'Adatta firme con dimensioni personalizzate e sfondo trasparente.',
    url: 'https://pixselli.com/it/signature-resizer',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianSignatureResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
