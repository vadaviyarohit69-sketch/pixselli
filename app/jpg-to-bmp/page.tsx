"use client";

import { useState } from 'react';
import { RefreshCw, CheckCircle2, ChevronDown } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { JPG_TO_BMP_TEXT_BY_LOCALE } from '@/lib/jpgToBmpTranslations';

export default function JPGtoBMPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = JPG_TO_BMP_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Legacy Compatibility', 'Compatibilidad heredada'),
      desc: tx('BMP works with many legacy tools and Windows workflows.', 'BMP funciona con muchas herramientas heredadas y flujos de Windows.'),
    },
    {
      title: tx('Uncompressed Output', 'Salida sin compresion'),
      desc: tx('Useful where raw bitmap format is required.', 'Util cuando se requiere formato mapa de bits sin compresion.'),
    },
    {
      title: tx('Quality Presets', 'Preajustes de calidad'),
      desc: tx('Choose quality levels and size variants easily.', 'Elige niveles de calidad y variantes de tamano facilmente.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Generate multiple outputs and download one ZIP.', 'Genera multiples salidas y descarga un solo ZIP.'),
    },
    {
      title: tx('Private Processing', 'Procesamiento privado'),
      desc: tx('Everything runs locally in your browser.', 'Todo se ejecuta localmente en tu navegador.'),
    },
    {
      title: tx('No Signup Needed', 'Sin registro'),
      desc: tx('Convert instantly without creating an account.', 'Convierte al instante sin crear una cuenta.'),
    },
  ];

  const faqs = [
    {
      q: tx('Why is BMP file size larger?', 'Por que el archivo BMP es mas grande?'),
      a: tx(
        'BMP is usually uncompressed, so file sizes can be much bigger than JPG or WebP.',
        'BMP suele ser sin compresion, por eso los tamanos pueden ser mucho mayores que JPG o WebP.'
      ),
    },
    {
      q: tx('Why convert JPG to BMP?', 'Por que convertir JPG a BMP?'),
      a: tx(
        'Some legacy systems require BMP format for compatibility and processing pipelines.',
        'Algunos sistemas heredados requieren formato BMP para compatibilidad y pipelines de procesamiento.'
      ),
    },
    {
      q: tx('Is conversion private?', 'La conversion es privada?'),
      a: tx(
        'Yes. Files are processed in your browser and not uploaded to servers.',
        'Si. Los archivos se procesan en tu navegador y no se suben a servidores.'
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
                {tx('JPG to BMP Converter', 'Convertidor JPG a BMP')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('JPG to BMP Converter', 'Convertidor JPG a BMP')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert JPG images to BMP format for legacy compatibility and bitmap workflows.',
              'Convierte imagenes JPG a formato BMP para compatibilidad heredada y flujos de mapa de bits.'
            )}
          </p>
        </div>

        <BulkImageVariantsCard
          uploadTitle={tx('Upload JPG Image to Convert', 'Sube una imagen JPG para convertir')}
          accept="image/jpeg"
          validateFile={(file) => {
            if (file.type.toLowerCase() === 'image/jpeg') return null;
            const name = file.name.toLowerCase();
            if (name.endsWith('.jpg') || name.endsWith('.jpeg')) return null;
            return tx('Please select a JPG image file', 'Por favor selecciona un archivo de imagen JPG');
          }}
          defaultFormats={['bmp']}
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'Use this converter when BMP output is required by old software or specialized print and editing workflows.',
              'Usa este convertidor cuando se requiere salida BMP por software antiguo o flujos especializados de impresion y edicion.'
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
