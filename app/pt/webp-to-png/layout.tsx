import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor WebP para PNG Online Gratis - Converter Imagens WebP | Pixselli',
  description:
    'Converta imagens WebP para PNG online com compatibilidade ampla e processamento privado no navegador.',
  keywords: ['webp para png', 'converter webp para png', 'conversor webp png', 'png online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/pt/webp-to-png',
    languages: {
      en: 'https://pixselli.com/webp-to-png',
      es: 'https://pixselli.com/es/webp-to-png',
      pt: 'https://pixselli.com/pt/webp-to-png',
      fr: 'https://pixselli.com/fr/webp-to-png',
      de: 'https://pixselli.com/de/webp-to-png',
      it: 'https://pixselli.com/it/webp-to-png',
      'x-default': 'https://pixselli.com/webp-to-png',
    },
  },
};

export default function PortugueseWebpToPngLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
