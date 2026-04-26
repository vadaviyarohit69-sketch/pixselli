import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sfoca Volto - Strumento Gratis Online',
  description:
    'Sfoca volti e aree sensibili nelle immagini online gratis. Veloce, sicuro e con elaborazione locale nel browser.',
  keywords: ['sfoca volto', 'privacy foto', 'sfocare immagine', 'editor immagini online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://pixselli.com/it/blur-face',
    languages: {
      en: 'https://pixselli.com/blur-face',
      es: 'https://pixselli.com/es/blur-face',
      pt: 'https://pixselli.com/pt/blur-face',
      fr: 'https://pixselli.com/fr/blur-face',
      de: 'https://pixselli.com/de/blur-face',
      it: 'https://pixselli.com/it/blur-face',
      'x-default': 'https://pixselli.com/blur-face',
    },
  },
  openGraph: {
    title: 'Sfoca Volto Gratis Online',
    description: 'Sfoca volti e dati sensibili nelle immagini in pochi secondi.',
    url: 'https://pixselli.com/it/blur-face',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'it_IT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sfoca Volto - Strumento Gratis',
    description: 'Sfoca volti online in modo semplice e rapido',
    creator: '@pixselli',
  },
};

export default function ItalianBlurFaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
