"use client";

import PdfToImageToolPage from '@/components/PdfToImageToolPage';
import { useLanguage } from '@/components/LanguageProvider';
import { PDF_TO_WEBP_TEXT_BY_LOCALE } from '@/lib/pdfToWebpTranslations';

export default function PDFtoWebPPage() {
  const { locale } = useLanguage();
  const dict = PDF_TO_WEBP_TEXT_BY_LOCALE[locale];

  return (
    <PdfToImageToolPage
      targetFormat="WebP"
      targetFormatEs="WebP"
      outputMimeType="image/webp"
      outputExtension="webp"
      supportsQuality
      dict={dict}
    />
  );
}
