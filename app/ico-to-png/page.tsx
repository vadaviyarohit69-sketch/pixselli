"use client";

import { useState } from 'react';
import { RefreshCw, CheckCircle2, ChevronDown } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { ICO_TO_PNG_TEXT_BY_LOCALE } from '@/lib/icoToPngTranslations';

export default function ICOtoPNGPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = ICO_TO_PNG_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Icon Compatibility', 'Compatibilidad de iconos'),
      desc: tx('Convert ICO files into editable PNG images easily.', 'Convierte archivos ICO en imagenes PNG editables facilmente.'),
    },
    {
      title: tx('Transparency Support', 'Soporte de transparencia'),
      desc: tx('PNG preserves transparency where available.', 'PNG conserva transparencia cuando esta disponible.'),
    },
    {
      title: tx('Resize Presets', 'Preajustes de tamano'),
      desc: tx('Export useful icon and social dimensions quickly.', 'Exporta rapidamente dimensiones utiles de icono y redes.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Generate multiple variants and download one ZIP.', 'Genera multiples variantes y descarga un solo ZIP.'),
    },
    {
      title: tx('Private Processing', 'Procesamiento privado'),
      desc: tx('Files are processed locally in your browser.', 'Los archivos se procesan localmente en tu navegador.'),
    },
    {
      title: tx('No Signup Needed', 'Sin registro'),
      desc: tx('Use instantly without account creation.', 'Usa al instante sin crear cuenta.'),
    },
  ];

  const faqs = [
    {
      q: tx('Do ICO files contain multiple sizes?', 'Los archivos ICO contienen multiples tamanos?'),
      a: tx(
        'Yes. ICO can store multiple icon sizes, and browsers decode a suitable frame for display.',
        'Si. ICO puede guardar multiples tamanos de icono y el navegador decodifica un fotograma adecuado para mostrar.'
      ),
    },
    {
      q: tx('Why convert ICO to PNG?', 'Por que convertir ICO a PNG?'),
      a: tx(
        'PNG is easier to edit, share, and reuse in web and design workflows.',
        'PNG es mas facil de editar, compartir y reutilizar en flujos web y de diseno.'
      ),
    },
    {
      q: tx('Is conversion private?', 'La conversion es privada?'),
      a: tx(
        'Yes. All processing happens locally in your browser.',
        'Si. Todo el procesamiento ocurre localmente en tu navegador.'
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
                {tx('ICO to PNG Converter', 'Convertidor ICO a PNG')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('ICO to PNG Converter', 'Convertidor ICO a PNG')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert Windows icon ICO files to PNG images for easier editing and sharing.',
              'Convierte archivos ICO de iconos de Windows a imagenes PNG para edicion y comparticion mas faciles.'
            )}
          </p>
        </div>

        <BulkImageVariantsCard
          uploadTitle={tx('Upload ICO File to Convert', 'Sube un archivo ICO para convertir')}
          accept="image/x-icon,image/vnd.microsoft.icon"
          validateFile={(file) => {
            const t = file.type.toLowerCase();
            if (t === 'image/x-icon' || t === 'image/vnd.microsoft.icon') return null;
            if (file.name.toLowerCase().endsWith('.ico')) return null;
            return tx('Please select an ICO file', 'Por favor selecciona un archivo ICO');
          }}
          defaultFormats={['png']}
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'Use this converter when you need PNG output from icon files for design edits, documentation, or web assets.',
              'Usa este convertidor cuando necesites salida PNG desde archivos de icono para edicion de diseno, documentacion o recursos web.'
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
