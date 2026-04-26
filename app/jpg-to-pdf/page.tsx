"use client";

import ImageToPdfToolPage from '@/components/ImageToPdfToolPage';
import { useLanguage } from '@/components/LanguageProvider';
import { JPG_TO_PDF_TEXT_BY_LOCALE } from '@/lib/jpgToPdfTranslations';

export default function JPGtoPDFPage() {
  const { locale } = useLanguage();
  const dict = JPG_TO_PDF_TEXT_BY_LOCALE[locale] ?? {};

  return (
    <ImageToPdfToolPage
      sourceFormat="JPG"
      sourceFormatEs="JPG"
      accept="image/jpeg,image/jpg"
      validMimeTypes={['image/jpeg']}
      validExtensions={['.jpg', '.jpeg']}
      pdfImageType="JPEG"
      dict={dict}
    />
  );
}
