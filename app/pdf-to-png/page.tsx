"use client";

import PdfToImageToolPage from '@/components/PdfToImageToolPage';
import { useLanguage } from '@/components/LanguageProvider';
import { PDF_TO_PNG_TEXT_BY_LOCALE } from '@/lib/pdfToPngTranslations';

export default function PDFtoPNGPage() {
  const { locale } = useLanguage();
  const dict = PDF_TO_PNG_TEXT_BY_LOCALE[locale];

  return (
    <PdfToImageToolPage
      targetFormat="PNG"
      targetFormatEs="PNG"
      outputMimeType="image/png"
      outputExtension="png"
      supportsQuality={false}
      dict={dict}
    />
  );
}
