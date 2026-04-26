"use client";

import PdfToImageToolPage from '@/components/PdfToImageToolPage';
import { useLanguage } from '@/components/LanguageProvider';
import { PDF_TO_JPG_TEXT_BY_LOCALE } from '@/lib/pdfToJpgTranslations';

export default function PDFtoJPGPage() {
  const { locale } = useLanguage();
  const dict = PDF_TO_JPG_TEXT_BY_LOCALE[locale];

  return (
    <PdfToImageToolPage
      targetFormat="JPG"
      targetFormatEs="JPG"
      outputMimeType="image/jpeg"
      outputExtension="jpg"
      supportsQuality
      dict={dict}
    />
  );
}
