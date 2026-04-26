"use client";

import ImageToPdfToolPage from '@/components/ImageToPdfToolPage';
import { useLanguage } from '@/components/LanguageProvider';
import { PNG_TO_PDF_TEXT_BY_LOCALE } from '@/lib/pngToPdfTranslations';

export default function PNGtoPDFPage() {
  const { locale } = useLanguage();
  const dict = PNG_TO_PDF_TEXT_BY_LOCALE[locale] ?? {};

  return (
    <ImageToPdfToolPage
      sourceFormat="PNG"
      sourceFormatEs="PNG"
      accept="image/png"
      validMimeTypes={['image/png']}
      validExtensions={['.png']}
      pdfImageType="PNG"
      dict={dict}
    />
  );
}
