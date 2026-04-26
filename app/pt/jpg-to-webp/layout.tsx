import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor JPG para WebP Online Gratis - Converter Imagens JPG | Pixselli',
  description:
    'Converta imagens JPG para WebP online com melhor compressao e processamento privado no navegador.',
  keywords: ['jpg para webp', 'converter jpg para webp', 'conversor jpg webp', 'webp online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/pt/jpg-to-webp',
    languages: {
      en: 'https://pixselli.com/jpg-to-webp',
      es: 'https://pixselli.com/es/jpg-to-webp',
      pt: 'https://pixselli.com/pt/jpg-to-webp',
      fr: 'https://pixselli.com/fr/jpg-to-webp',
      de: 'https://pixselli.com/de/jpg-to-webp',
      it: 'https://pixselli.com/it/jpg-to-webp',
      'x-default': 'https://pixselli.com/jpg-to-webp',
    },
  },
};

export default function PortugueseJpgToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
