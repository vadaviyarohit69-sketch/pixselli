"use client";

import { useState } from 'react';
import { RefreshCw, CheckCircle2, ChevronDown } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { PNG_TO_HEIC_TEXT_BY_LOCALE } from '@/lib/pngToHeicTranslations';

export default function PNGtoHEICPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = PNG_TO_HEIC_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Modern Apple Format', 'Formato moderno de Apple'),
      desc: tx('Convert PNG images to HEIC for Apple-focused workflows.', 'Convierte imagenes PNG a HEIC para flujos centrados en Apple.'),
    },
    {
      title: tx('Storage Friendly', 'Ahorro de almacenamiento'),
      desc: tx('HEIC can reduce final file size compared to PNG.', 'HEIC puede reducir el tamano final frente a PNG.'),
    },
    {
      title: tx('Quality Presets', 'Preajustes de calidad'),
      desc: tx('Pick quality levels that match your needs.', 'Elige niveles de calidad que se adapten a tus necesidades.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Export multiple versions at once in a ZIP package.', 'Exporta multiples versiones de una vez en un paquete ZIP.'),
    },
    {
      title: tx('Private Conversion', 'Conversion privada'),
      desc: tx('Everything runs locally in your browser.', 'Todo se ejecuta localmente en tu navegador.'),
    },
    {
      title: tx('No Signup Needed', 'Sin registro'),
      desc: tx('Use the tool instantly at no cost.', 'Usa la herramienta al instante sin costo.'),
    },
  ];

  const faqs = [
    {
      q: tx('Why convert PNG to HEIC?', 'Por que convertir PNG a HEIC?'),
      a: tx(
        'When your workflow targets Apple devices, HEIC can be more storage efficient than PNG.',
        'Cuando tu flujo apunta a dispositivos Apple, HEIC puede ser mas eficiente en almacenamiento que PNG.'
      ),
    },
    {
      q: tx('Will PNG transparency remain?', 'Se mantiene la transparencia de PNG?'),
      a: tx(
        'HEIC export support varies by browser. Some encoders flatten transparency into a background color.',
        'El soporte HEIC export varia por navegador. Algunos codificadores aplanan la transparencia a un color de fondo.'
      ),
    },
    {
      q: tx('Is this conversion private?', 'Esta conversion es privada?'),
      a: tx(
        'Yes. Files are processed in your browser and never uploaded to our servers.',
        'Si. Los archivos se procesan en tu navegador y nunca se suben a nuestros servidores.'
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
                {tx('PNG to HEIC Converter', 'Convertidor PNG a HEIC')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('PNG to HEIC Converter', 'Convertidor PNG a HEIC')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert PNG files to HEIC format for Apple workflows and potentially smaller output sizes.',
              'Convierte archivos PNG a formato HEIC para flujos Apple y posibles tamanos de salida mas pequenos.'
            )}
          </p>
        </div>

        <BulkImageVariantsCard
          uploadTitle={tx('Upload PNG Image to Convert', 'Sube una imagen PNG para convertir')}
          accept="image/png"
          validateFile={(file) => {
            if (file.type.toLowerCase() === 'image/png') return null;
            if (file.name.toLowerCase().endsWith('.png')) return null;
            return tx('Please select a PNG image file', 'Por favor selecciona un archivo de imagen PNG');
          }}
          defaultFormats={['heic']}
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'Use PNG to HEIC when you need Apple-centric compatibility and smaller files for storage or sync workflows.',
              'Usa PNG a HEIC cuando necesitas compatibilidad centrada en Apple y archivos mas pequenos para almacenamiento o sincronizacion.'
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
