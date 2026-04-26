import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signatur-Resizer Kostenlos - Signatur Online Anpassen | Pixselli',
  description:
    'Skaliere Signaturen online mit benutzerdefinierten Groessen und transparentem Hintergrund. Ideal fuer Formulare und Dokumente.',
  keywords: ['signatur resizer', 'signatur groesse', 'digitale signatur', 'signatur fuer dokumente'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/signature-resizer',
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
    title: 'Signatur-Resizer Kostenlos Online',
    description: 'Passe Signaturen mit individueller Groesse und transparentem Hintergrund an.',
    url: 'https://pixselli.com/de/signature-resizer',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanSignatureResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
