"use client";

import { useState } from 'react';
import { RefreshCw, ChevronDown, CheckCircle2 } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { HEIC_TO_WEBP_TEXT_BY_LOCALE } from '@/lib/heicToWebpTranslations';

export default function HEICtoWebPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = HEIC_TO_WEBP_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Web Ready Output', 'Salida lista para web'),
      desc: tx('Convert HEIC images to modern WebP for websites and apps.', 'Convierte imagenes HEIC a WebP moderno para sitios y apps.'),
    },
    {
      title: tx('Smaller File Sizes', 'Archivos mas pequenos'),
      desc: tx('WebP can significantly reduce file size versus older formats.', 'WebP puede reducir bastante el tamano frente a formatos antiguos.'),
    },
    {
      title: tx('Quality Control', 'Control de calidad'),
      desc: tx('Tune output quality for speed, size, or visual fidelity.', 'Ajusta la calidad para velocidad, tamano o fidelidad visual.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Export multiple variants at once as a single ZIP.', 'Exporta multiples variantes de una vez en un solo ZIP.'),
    },
    {
      title: tx('Private Conversion', 'Conversion privada'),
      desc: tx('All processing stays in your browser on-device.', 'Todo el procesamiento queda en tu navegador y dispositivo.'),
    },
    {
      title: tx('No Signup Needed', 'Sin registro'),
      desc: tx('Free conversion without creating an account.', 'Conversion gratis sin crear cuenta.'),
    },
  ];

  const faqs = [
    {
      q: tx('Why convert HEIC to WebP?', 'Por que convertir HEIC a WebP?'),
      a: tx(
        'WebP is excellent for web delivery because it balances quality and compression very well.',
        'WebP es excelente para web porque equilibra muy bien calidad y compresion.'
      ),
    },
    {
      q: tx('Can I convert multiple HEIC files together?', 'Puedo convertir varios archivos HEIC juntos?'),
      a: tx(
        'Yes. Upload files and generate multiple variants, then download everything in a ZIP.',
        'Si. Sube archivos y genera multiples variantes, luego descarga todo en un ZIP.'
      ),
    },
    {
      q: tx('Is this secure and private?', 'Es seguro y privado?'),
      a: tx(
        'Yes. Conversion is performed in your browser and files are not uploaded to servers.',
        'Si. La conversion se realiza en tu navegador y los archivos no se suben a servidores.'
      ),
    },
  ];

  const page = (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-12" aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2 text-sm text-gray-600">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a itemProp="item" href={homeHref} className="hover:text-purple-600 transition-colors">
                <span itemProp="name">{tx('Home', 'Inicio')}</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-gray-900 font-medium">
                {tx('HEIC to WebP Converter', 'Convertidor HEIC a WebP')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('HEIC to WebP Converter', 'Convertidor HEIC a WebP')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert HEIC photos to WebP format for faster loading and modern web compatibility.',
              'Convierte fotos HEIC a formato WebP para carga rapida y compatibilidad web moderna.'
            )}
          </p>
        </div>

        <BulkImageVariantsCard
          uploadTitle={tx('Upload HEIC Image to Convert', 'Sube una imagen HEIC para convertir')}
          accept="image/heic,image/heif"
          validateFile={(file) => {
            const t = file.type.toLowerCase();
            if (t === 'image/heic' || t === 'image/heif') return null;
            const name = file.name.toLowerCase();
            if (name.endsWith('.heic') || name.endsWith('.heif')) return null;
            return tx('Please select a HEIC image file', 'Por favor selecciona un archivo de imagen HEIC');
          }}
          defaultFormats={['webp']}
          enableMarketplaceWorkflow
          prepareFile={async (file) => {
            const { default: heic2any } = await import('heic2any');
            const result = await heic2any({ blob: file, toType: 'image/png', quality: 1 });
            const blob = Array.isArray(result) ? result[0] : result;
            const objectUrl = URL.createObjectURL(blob as Blob);
            return { url: objectUrl, objectUrlToRevoke: objectUrl };
          }}
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'HEIC to WebP is useful when you want modern compression for web publishing, ecommerce, or social sharing workflows.',
              'HEIC a WebP es util cuando buscas compresion moderna para publicacion web, ecommerce o flujos de redes sociales.'
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Features', 'Caracteristicas')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Frequently Asked Questions', 'Preguntas frecuentes')}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );

  return translateReactNode(page, dict);
}
