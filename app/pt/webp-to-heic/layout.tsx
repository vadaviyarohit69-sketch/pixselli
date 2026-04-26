import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor WebP para HEIC Online Gratis - Converter Imagens WebP | Pixselli',
  description:
    'Converta imagens WebP para HEIC online com processamento privado no navegador e controle de qualidade.',
  keywords: ['webp para heic', 'converter webp para heic', 'conversor webp heic', 'heic converter'],
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
    canonical: 'https://pixselli.com/pt/webp-to-heic',
    languages: {
      en: 'https://pixselli.com/webp-to-heic',
      es: 'https://pixselli.com/es/webp-to-heic',
      pt: 'https://pixselli.com/pt/webp-to-heic',
      fr: 'https://pixselli.com/fr/webp-to-heic',
      de: 'https://pixselli.com/de/webp-to-heic',
      it: 'https://pixselli.com/it/webp-to-heic',
      'x-default': 'https://pixselli.com/webp-to-heic',
    },
  },
  openGraph: {
    title: 'Conversor WebP para HEIC Online Gratis - Pixselli',
    description: 'Converta WebP para HEIC rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/webp-to-heic',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor WebP para HEIC Online Gratis - Pixselli',
    description: 'Converta WebP para HEIC online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseWebpToHeicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
