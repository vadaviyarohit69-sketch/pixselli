"use client";

import ImageToPdfToolPage from '@/components/ImageToPdfToolPage';
import { useLanguage } from '@/components/LanguageProvider';
import { AVIF_TO_PDF_TEXT_BY_LOCALE } from '@/lib/avifToPdfTranslations';

export default function AVIFtoPDFPage() {
  const { locale } = useLanguage();
  const dict = AVIF_TO_PDF_TEXT_BY_LOCALE[locale] ?? {};

  return (
    <ImageToPdfToolPage
      sourceFormat="AVIF"
      sourceFormatEs="AVIF"
      accept="image/avif"
      validMimeTypes={['image/avif']}
      validExtensions={['.avif']}
      pdfImageType="PNG"
      dict={dict}
    />
  );
}
