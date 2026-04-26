"use client";

import ImageToPdfToolPage from '@/components/ImageToPdfToolPage';
import { useLanguage } from '@/components/LanguageProvider';
import { HEIC_TO_PDF_TEXT_BY_LOCALE } from '@/lib/heicToPdfTranslations';

export default function HEICtoPDFPage() {
  const { locale } = useLanguage();
  const dict = HEIC_TO_PDF_TEXT_BY_LOCALE[locale] ?? {};

  return (
    <ImageToPdfToolPage
      sourceFormat="HEIC"
      sourceFormatEs="HEIC"
      accept="image/heic,image/heif"
      validMimeTypes={['image/heic', 'image/heif']}
      validExtensions={['.heic', '.heif']}
      pdfImageType="PNG"
      needsHeicDecode
      dict={dict}
    />
  );
}
