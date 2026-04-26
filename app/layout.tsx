import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';
import { LanguageProvider } from '@/components/LanguageProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pixselli - Free Online Image Tools | Convert, Compress, Resize & Edit Images',
  description: 'Professional online image tools for free. Convert, compress, resize, crop, and edit images instantly. Fast, secure, and works in your browser. No signup required. Support for JPG, PNG, WebP, GIF, and more.',
  keywords: ['image converter', 'image compressor', 'resize image', 'crop image', 'image editor', 'online image tools', 'free image converter', 'compress image', 'convert to webp', 'jpg to png', 'png to jpg'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pixselli.com'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      es: '/es',
      pt: '/pt',
      fr: '/fr',
      de: '/de',
      it: '/it',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'Pixselli - Free Online Image Tools',
    description: 'Convert, compress, resize, and edit your images instantly. All processing happens in your browser - completely private and secure.',
    url: 'https://pixselli.com',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixselli - Professional Image Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixselli - Free Online Image Tools',
    description: 'Convert, compress, resize, and edit your images instantly in your browser.',
    images: ['/og-image.png'],
    creator: '@pixselli',
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C95RYMR411"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-C95RYMR411');`,
          }}
        />
        <link rel="icon" href="/Pixselli.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Pixselli.png" />
        <link rel="shortcut icon" href="/Pixselli.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d9488" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
