"use client";

import { useState } from 'react';
import { RefreshCw, CheckCircle2, ChevronDown } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { AVIF_TO_PNG_TEXT_BY_LOCALE } from '@/lib/avifToPngTranslations';

export default function AVIFtoPNGPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = AVIF_TO_PNG_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Broad Compatibility', 'Compatibilidad amplia'),
      desc: tx('PNG works across most apps, editors, and platforms.', 'PNG funciona en la mayoria de apps, editores y plataformas.'),
    },
    {
      title: tx('Transparency Friendly', 'Compatible con transparencia'),
      desc: tx('PNG supports alpha channel, ideal for layered design assets.', 'PNG soporta canal alpha, ideal para recursos de diseno por capas.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Create multiple output variants and download in one ZIP.', 'Crea multiples variantes de salida y descarga en un ZIP.'),
    },
    {
      title: tx('Resize Presets', 'Preajustes de tamano'),
      desc: tx('Generate social and marketplace dimensions quickly.', 'Genera dimensiones para redes y marketplace rapidamente.'),
    },
    {
      title: tx('Private Processing', 'Procesamiento privado'),
      desc: tx('Your AVIF files stay local in your browser.', 'Tus archivos AVIF permanecen locales en tu navegador.'),
    },
    {
      title: tx('No Signup Needed', 'Sin registro'),
      desc: tx('Convert instantly without creating an account.', 'Convierte al instante sin crear una cuenta.'),
    },
  ];

  const faqs = [
    {
      q: tx('Why convert AVIF to PNG?', 'Por que convertir AVIF a PNG?'),
      a: tx(
        'PNG is widely compatible and supports transparency, which is useful for editing and graphic workflows.',
        'PNG es ampliamente compatible y soporta transparencia, lo que es util para edicion y flujos graficos.'
      ),
    },
    {
      q: tx('Will file size change?', 'Cambiara el tamano del archivo?'),
      a: tx(
        'Often yes. PNG can be larger than AVIF, but it provides dependable compatibility and transparency support.',
        'A menudo si. PNG puede ser mas grande que AVIF, pero ofrece compatibilidad confiable y soporte de transparencia.'
      ),
    },
    {
      q: tx('Is conversion private?', 'La conversion es privada?'),
      a: tx(
        'Yes. Processing happens locally in your browser and files are not uploaded to servers.',
        'Si. El procesamiento ocurre localmente en tu navegador y los archivos no se suben a servidores.'
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
                {tx('AVIF to PNG Converter', 'Convertidor AVIF a PNG')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('AVIF to PNG Converter', 'Convertidor AVIF a PNG')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert AVIF images to PNG format for strong compatibility and transparency support.',
              'Convierte imagenes AVIF a formato PNG para compatibilidad solida y soporte de transparencia.'
            )}
          </p>
        </div>

        <BulkImageVariantsCard
          uploadTitle={tx('Upload AVIF Image to Convert', 'Sube una imagen AVIF para convertir')}
          accept="image/avif"
          validateFile={(file) => {
            if (file.type.toLowerCase() === 'image/avif') return null;
            if (file.name.toLowerCase().endsWith('.avif')) return null;
            return tx('Please select an AVIF image file', 'Por favor selecciona un archivo de imagen AVIF');
          }}
          defaultFormats={['png']}
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'Use this converter when you need dependable PNG outputs from AVIF images for design, uploads, and editing tools.',
              'Usa este convertidor cuando necesites salidas PNG confiables desde imagenes AVIF para diseno, subidas y herramientas de edicion.'
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
