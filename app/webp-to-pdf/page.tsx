"use client";

import ImageToPdfToolPage from '@/components/ImageToPdfToolPage';
import { useLanguage } from '@/components/LanguageProvider';
import { WEBP_TO_PDF_TEXT_BY_LOCALE } from '@/lib/webpToPdfTranslations';

export default function WEBPtoPDFPage() {
  const { locale } = useLanguage();
  const dict = WEBP_TO_PDF_TEXT_BY_LOCALE[locale] ?? {};

  return (
    <ImageToPdfToolPage
      sourceFormat="WebP"
      sourceFormatEs="WebP"
      accept="image/webp"
      validMimeTypes={['image/webp']}
      validExtensions={['.webp']}
      pdfImageType="PNG"
      dict={dict}
    />
  );
}
