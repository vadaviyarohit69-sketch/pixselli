"use client";

import { useState } from 'react';
import { RefreshCw, ChevronDown, CheckCircle2 } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { JPG_TO_AVIF_TEXT_BY_LOCALE } from '@/lib/jpgToAvifTranslations';

export default function JPGtoAVIFPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = JPG_TO_AVIF_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Modern AVIF Output', 'Salida AVIF moderna'),
      desc: tx('Convert JPG images into AVIF for next-gen image delivery.', 'Convierte imagenes JPG a AVIF para entrega de imagen moderna.'),
    },
    {
      title: tx('Smaller File Sizes', 'Archivos mas pequenos'),
      desc: tx('AVIF can provide strong compression with good perceived quality.', 'AVIF puede ofrecer buena compresion con buena calidad percibida.'),
    },
    {
      title: tx('Quality Control', 'Control de calidad'),
      desc: tx('Adjust output quality for performance and fidelity.', 'Ajusta la calidad de salida para rendimiento y fidelidad.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Generate multiple variants and download them together.', 'Genera multiples variantes y descargalas juntas.'),
    },
    {
      title: tx('Private Conversion', 'Conversion privada'),
      desc: tx('Files stay on your device throughout processing.', 'Los archivos permanecen en tu dispositivo durante todo el proceso.'),
    },
    {
      title: tx('No Signup Needed', 'Sin registro'),
      desc: tx('Use the converter instantly at no cost.', 'Usa el convertidor al instante y sin costo.'),
    },
  ];

  const faqs = [
    {
      q: tx('Why convert JPG to AVIF?', 'Por que convertir JPG a AVIF?'),
      a: tx(
        'AVIF can reduce image size significantly while keeping visual quality, which can improve page load speed.',
        'AVIF puede reducir bastante el tamano de imagen manteniendo calidad visual, lo que puede mejorar la carga de pagina.'
      ),
    },
    {
      q: tx('Is AVIF supported everywhere?', 'AVIF es compatible en todas partes?'),
      a: tx(
        'Most modern browsers support AVIF, but some older platforms may still need JPG or WebP fallbacks.',
        'La mayoria de navegadores modernos soportan AVIF, pero algunas plataformas antiguas aun necesitan JPG o WebP como alternativa.'
      ),
    },
    {
      q: tx('Why might AVIF export fail?', 'Por que podria fallar la exportacion AVIF?'),
      a: tx(
        'Some browser and device combinations do not support AVIF canvas export yet. In that case, try another browser/device.',
        'Algunas combinaciones de navegador y dispositivo aun no soportan exportacion AVIF en canvas. En ese caso, prueba otro navegador/dispositivo.'
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
                {tx('JPG to AVIF Converter', 'Convertidor JPG a AVIF')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('JPG to AVIF Converter', 'Convertidor JPG a AVIF')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert JPG images to AVIF format for modern compression and improved web performance.',
              'Convierte imagenes JPG a formato AVIF para compresion moderna y mejor rendimiento web.'
            )}
          </p>
        </div>

        <BulkImageVariantsCard
          uploadTitle={tx('Upload JPG Image to Convert', 'Sube una imagen JPG para convertir')}
          accept="image/jpeg"
          validateFile={(file) => {
            const isJpegMime = file.type.startsWith('image/jpeg');
            const isJpegName = /\.jpe?g$/i.test(file.name);
            if (isJpegMime || isJpegName) return null;
            return tx('Please select a JPG image file', 'Por favor selecciona un archivo de imagen JPG');
          }}
          defaultFormats={['avif']}
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'Use this converter to generate AVIF files from JPG when your priority is lower file size and modern delivery.',
              'Usa este convertidor para generar AVIF desde JPG cuando tu prioridad es menor tamano de archivo y entrega moderna.'
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
