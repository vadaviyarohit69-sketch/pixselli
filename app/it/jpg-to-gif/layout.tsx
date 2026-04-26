import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore JPG in GIF Online Gratis - Converti Immagini JPG | Pixselli',
  description:
    'Converti immagini JPG in GIF online con elaborazione privata nel browser e controllo qualita.',
  keywords: ['jpg in gif', 'converti jpg in gif', 'convertitore jpg gif', 'convertitore gif'],
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
    canonical: 'https://pixselli.com/it/jpg-to-gif',
    languages: {
      en: 'https://pixselli.com/jpg-to-gif',
      es: 'https://pixselli.com/es/jpg-to-gif',
      pt: 'https://pixselli.com/pt/jpg-to-gif',
      fr: 'https://pixselli.com/fr/jpg-to-gif',
      de: 'https://pixselli.com/de/jpg-to-gif',
      it: 'https://pixselli.com/it/jpg-to-gif',
      'x-default': 'https://pixselli.com/jpg-to-gif',
    },
  },
  openGraph: {
    title: 'Convertitore JPG in GIF Online Gratis - Pixselli',
    description: 'Converti JPG in GIF rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/jpg-to-gif',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore JPG in GIF Online Gratis - Pixselli',
    description: 'Converti JPG in GIF online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianJpgToGifLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
