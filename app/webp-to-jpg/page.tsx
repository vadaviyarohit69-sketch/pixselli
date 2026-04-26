"use client";

import { useState } from 'react';
import { RefreshCw, ChevronDown, CheckCircle2 } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { WEBP_TO_JPG_TEXT_BY_LOCALE } from '@/lib/webpToJpgTranslations';

export default function WebPtoJPGPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = WEBP_TO_JPG_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };

  const features = [
    {
      title: tx('Wide Compatibility', 'Amplia compatibilidad'),
      desc: tx('JPG works with older apps and systems.', 'JPG funciona con apps y sistemas antiguos.'),
    },
    {
      title: tx('Fast Conversion', 'Conversion rapida'),
      desc: tx('Convert WebP files to JPG in seconds.', 'Convierte archivos WebP a JPG en segundos.'),
    },
    {
      title: tx('Quality Control', 'Control de calidad'),
      desc: tx('Choose output quality for your use case.', 'Elige la calidad de salida segun tu caso de uso.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Produce multiple variants and download one ZIP.', 'Genera multiples variantes y descarga un ZIP.'),
    },
    {
      title: tx('Private in Browser', 'Privado en navegador'),
      desc: tx('Files are processed locally on your device.', 'Los archivos se procesan localmente en tu dispositivo.'),
    },
    {
      title: tx('Free and Easy', 'Gratis y sencillo'),
      desc: tx('No signup, no extra steps.', 'Sin registro y sin pasos extra.'),
    },
  ];

  const faqs = [
    {
      q: tx('Why convert WebP to JPG?', 'Por que convertir WebP a JPG?'),
      a: tx(
        'Some websites, tools, and apps still require JPG images. Conversion improves compatibility.',
        'Algunos sitios, herramientas y apps aun requieren imagenes JPG. La conversion mejora compatibilidad.'
      ),
    },
    {
      q: tx('Can WebP transparency be preserved?', 'Se puede preservar transparencia de WebP?'),
      a: tx(
        'JPG does not support transparency. Transparent areas are flattened with a background color.',
        'JPG no soporta transparencia. Las areas transparentes se aplanan con un color de fondo.'
      ),
    },
    {
      q: tx('Is conversion secure?', 'La conversion es segura?'),
      a: tx(
        'Yes. Processing happens in browser and your files are not uploaded to our server.',
        'Si. El procesamiento ocurre en el navegador y tus archivos no se suben a nuestro servidor.'
      ),
    },
  ];

  const page = (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-12" aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2 text-sm text-gray-600">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a itemProp="item" href={locale === 'es' ? '/es' : '/'} className="hover:text-purple-600 transition-colors">
                <span itemProp="name">{tx('Home', 'Inicio')}</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-gray-900 font-medium">
                {tx('WebP to JPG Converter', 'Convertidor WebP a JPG')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('WebP to JPG Converter', 'Convertidor WebP a JPG')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert modern WebP images to JPG format for universal compatibility.',
              'Convierte imagenes WebP modernas a formato JPG para compatibilidad universal.'
            )}
          </p>
        </div>

        <BulkImageVariantsCard
          uploadTitle={tx('Upload WebP Image to Convert', 'Sube una imagen WebP para convertir')}
          accept="image/webp"
          validateFile={(file) => {
            const isWebpMime = file.type.startsWith('image/webp');
            const isWebpExt = /\.webp$/i.test(file.name);
            if (isWebpMime || isWebpExt) return null;
            return tx('Please select a WebP image file', 'Por favor selecciona un archivo de imagen WebP');
          }}
          defaultFormats={['jpg']}
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'WebP is efficient for modern web delivery, but JPG is still needed in many workflows. Use this tool when compatibility matters.',
              'WebP es eficiente para la web moderna, pero JPG aun se necesita en muchos flujos. Usa esta herramienta cuando la compatibilidad sea importante.'
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
