"use client";

import { useState } from 'react';
import { RefreshCw, CheckCircle2, ChevronDown } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { PNG_TO_ICO_TEXT_BY_LOCALE } from '@/lib/pngToIcoTranslations';

export default function PNGtoICOPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = PNG_TO_ICO_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Icon Generation', 'Generacion de iconos'),
      desc: tx('Create ICO files from PNG for app and favicon use.', 'Crea archivos ICO desde PNG para uso en apps y favicons.'),
    },
    {
      title: tx('Transparency Support', 'Soporte de transparencia'),
      desc: tx('ICO output keeps transparency from PNG when supported.', 'La salida ICO conserva transparencia de PNG cuando es compatible.'),
    },
    {
      title: tx('Resize Presets', 'Preajustes de tamano'),
      desc: tx('Export common icon dimensions quickly.', 'Exporta rapidamente dimensiones comunes de iconos.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Generate multiple outputs and download one ZIP file.', 'Genera multiples salidas y descarga un solo archivo ZIP.'),
    },
    {
      title: tx('Private Processing', 'Procesamiento privado'),
      desc: tx('Your images stay local during conversion.', 'Tus imagenes permanecen locales durante la conversion.'),
    },
    {
      title: tx('No Signup Needed', 'Sin registro'),
      desc: tx('Use instantly without account creation.', 'Usa al instante sin crear cuenta.'),
    },
  ];

  const faqs = [
    {
      q: tx('What icon sizes should I export?', 'Que tamanos de icono debo exportar?'),
      a: tx(
        'Common icon sizes are 16x16, 32x32, 48x48, 64x64, and 256x256 depending on your use case.',
        'Los tamanos comunes son 16x16, 32x32, 48x48, 64x64 y 256x256 segun tu caso de uso.'
      ),
    },
    {
      q: tx('Does ICO support transparency?', 'ICO soporta transparencia?'),
      a: tx(
        'Yes. Transparency can be preserved when converting from PNG sources.',
        'Si. La transparencia puede conservarse al convertir desde fuentes PNG.'
      ),
    },
    {
      q: tx('Is conversion private?', 'La conversion es privada?'),
      a: tx(
        'Yes. Everything is processed locally in your browser.',
        'Si. Todo se procesa localmente en tu navegador.'
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
                {tx('PNG to ICO Converter', 'Convertidor PNG a ICO')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('PNG to ICO Converter', 'Convertidor PNG a ICO')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert PNG images to ICO format for favicons and application icons.',
              'Convierte imagenes PNG a formato ICO para favicons e iconos de aplicacion.'
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
          defaultFormats={['ico']}
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'Use this converter to prepare ICO files from PNG sources for websites, desktop apps, and shortcuts.',
              'Usa este convertidor para preparar archivos ICO desde fuentes PNG para sitios web, apps de escritorio y accesos directos.'
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
