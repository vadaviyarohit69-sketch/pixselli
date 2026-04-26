import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bildkompressor Online Kostenlos - JPG, PNG, WebP verkleinern | Pixselli',
  description:
    'Komprimieren Sie Bilder online mit anpassbarer Qualitaet und Formatoptionen. Verkleinern Sie JPG, PNG und WebP schnell bei guter visueller Qualitaet.',
  keywords: ['bildkompressor', 'bildkomprimierung', 'bilder komprimieren', 'dateigroesse reduzieren', 'online kompressor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/image-compressor',
    languages: {
      en: 'https://pixselli.com/image-compressor',
      es: 'https://pixselli.com/es/image-compressor',
      pt: 'https://pixselli.com/pt/image-compressor',
      fr: 'https://pixselli.com/fr/image-compressor',
      de: 'https://pixselli.com/de/image-compressor',
      it: 'https://pixselli.com/it/image-compressor',
      'x-default': 'https://pixselli.com/image-compressor',
    },
  },
  openGraph: {
    title: 'Bildkompressor Online Kostenlos - Pixselli',
    description: 'Komprimieren Sie JPG, PNG und WebP online mit Qualitaetskontrollen und schnellem privatem Processing.',
    url: 'https://pixselli.com/de/image-compressor',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanImageCompressorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
