import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RRB Photo Maker Online Free - 3.5x4.5cm, 20-40KB | Pixselli',
  description:
    'Create RRB exam photos online with exact 3.5x4.5cm size and 20-40KB file requirement. Perfect for NTPC, Group D, JE, ALP, and other RRB forms.',
  keywords: ['rrb photo maker', 'rrb photo size', '3.5x4.5cm photo', 'railway exam photo', 'rrb image resizer'],
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
    canonical: 'https://pixselli.com/rrb-photo',
    languages: {
      en: 'https://pixselli.com/rrb-photo',
      es: 'https://pixselli.com/es/rrb-photo',
      pt: 'https://pixselli.com/pt/rrb-photo',
      fr: 'https://pixselli.com/fr/rrb-photo',
      de: 'https://pixselli.com/de/rrb-photo',
      it: 'https://pixselli.com/it/rrb-photo',
      'x-default': 'https://pixselli.com/rrb-photo',
    },
  },
  openGraph: {
    title: 'RRB Photo Maker Online Free - Pixselli',
    description:
      'Generate RRB-compliant photos at 3.5x4.5cm with 20-40KB target size in seconds. Private and free browser tool.',
    url: 'https://pixselli.com/rrb-photo',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RRB Photo Maker by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RRB Photo Maker Online Free - Pixselli',
    description: 'Create RRB exam photos with correct 3.5x4.5cm size and 20-40KB limits online.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}