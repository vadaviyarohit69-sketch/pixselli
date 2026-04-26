import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor PNG para WebP Online Gratis - Converter Imagens PNG | Pixselli',
  description:
    'Converta imagens PNG para WebP online com compressao moderna e processamento privado no navegador.',
  keywords: ['png para webp', 'converter png para webp', 'conversor png webp', 'webp online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/pt/png-to-webp',
    languages: {
      en: 'https://pixselli.com/png-to-webp',
      es: 'https://pixselli.com/es/png-to-webp',
      pt: 'https://pixselli.com/pt/png-to-webp',
      fr: 'https://pixselli.com/fr/png-to-webp',
      de: 'https://pixselli.com/de/png-to-webp',
      it: 'https://pixselli.com/it/png-to-webp',
      'x-default': 'https://pixselli.com/png-to-webp',
    },
  },
};

export default function PortuguesePngToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
