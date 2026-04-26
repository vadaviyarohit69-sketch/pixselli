import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UPSC Photo Maker Online Free - 35x45mm, 10-40KB | Pixselli',
  description:
    'Create UPSC exam photos online with exact 35x45mm (413x531px), 300 DPI and 10-40KB size requirements. Fast, secure, browser-based processing.',
  keywords: ['upsc photo maker', 'upsc photo size', '35x45mm photo', 'upsc form photo', 'upsc image resizer'],
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
    canonical: 'https://pixselli.com/upsc-photo',
    languages: {
      en: 'https://pixselli.com/upsc-photo',
      es: 'https://pixselli.com/es/upsc-photo',
      pt: 'https://pixselli.com/pt/upsc-photo',
      fr: 'https://pixselli.com/fr/upsc-photo',
      de: 'https://pixselli.com/de/upsc-photo',
      it: 'https://pixselli.com/it/upsc-photo',
      'x-default': 'https://pixselli.com/upsc-photo',
    },
  },
  openGraph: {
    title: 'UPSC Photo Maker Online Free - Pixselli',
    description:
      'Generate UPSC-compliant photos at 35x45mm with 10-40KB target size and 300 DPI in seconds. Private and free.',
    url: 'https://pixselli.com/upsc-photo',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UPSC Photo Maker by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPSC Photo Maker Online Free - Pixselli',
    description: 'Create UPSC 35x45mm photos with correct size and file limit online instantly.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}