import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionador de Assinatura Gratis - Ajustar Assinatura Online | Pixselli',
  description:
    'Redimensione assinaturas online com dimensoes personalizadas e suporte a fundo transparente. Ideal para formularios e documentos.',
  keywords: ['redimensionar assinatura', 'assinatura digital', 'tamanho assinatura', 'assinatura para documentos'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/signature-resizer',
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
    title: 'Redimensionador de Assinatura Online Gratis',
    description: 'Ajuste assinaturas com tamanho personalizado e fundo transparente.',
    url: 'https://pixselli.com/pt/signature-resizer',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function PortugueseSignatureResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
