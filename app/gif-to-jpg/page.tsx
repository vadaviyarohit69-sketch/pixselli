"use client";

import { useState } from 'react';
import { RefreshCw, CheckCircle2, ChevronDown } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { GIF_TO_JPG_TEXT_BY_LOCALE } from '@/lib/gifToJpgTranslations';

export default function GIFtoJPGPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = GIF_TO_JPG_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Wide Compatibility', 'Compatibilidad amplia'),
      desc: tx('JPG works across apps, sites, and platforms.', 'JPG funciona en apps, sitios y plataformas.'),
    },
    {
      title: tx('Static Preview Output', 'Salida de vista estatica'),
      desc: tx('Useful when you need a still image from GIF content.', 'Util cuando necesitas una imagen fija de contenido GIF.'),
    },
    {
      title: tx('Quality Control', 'Control de calidad'),
      desc: tx('Tune JPG quality for size and visual clarity.', 'Ajusta calidad JPG para tamano y claridad visual.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Generate multiple variants and download as one ZIP.', 'Genera multiples variantes y descarga como un solo ZIP.'),
    },
    {
      title: tx('Private Processing', 'Procesamiento privado'),
      desc: tx('Everything runs in your browser locally.', 'Todo se ejecuta localmente en tu navegador.'),
    },
    {
      title: tx('No Signup Needed', 'Sin registro'),
      desc: tx('Convert instantly without account creation.', 'Convierte al instante sin crear una cuenta.'),
    },
  ];

  const faqs = [
    {
      q: tx('Can I convert animated GIFs?', 'Puedo convertir GIF animados?'),
      a: tx(
        'Yes, but output is a static JPG image from a single frame.',
        'Si, pero la salida es una imagen JPG estatica de un solo fotograma.'
      ),
    },
    {
      q: tx('Why convert GIF to JPG?', 'Por que convertir GIF a JPG?'),
      a: tx(
        'JPG is often better for static image sharing and can reduce file size for non-animated use.',
        'JPG suele ser mejor para compartir imagenes estaticas y puede reducir tamano en uso sin animacion.'
      ),
    },
    {
      q: tx('Is conversion private?', 'La conversion es privada?'),
      a: tx(
        'Yes. Processing happens locally in your browser and files are not uploaded.',
        'Si. El procesamiento ocurre localmente en tu navegador y los archivos no se suben.'
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
                {tx('GIF to JPG Converter', 'Convertidor GIF a JPG')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('GIF to JPG Converter', 'Convertidor GIF a JPG')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert GIF images to JPG format for static previews and easy compatibility.',
              'Convierte imagenes GIF a formato JPG para vistas estaticas y compatibilidad sencilla.'
            )}
          </p>
        </div>

        <BulkImageVariantsCard
          uploadTitle={tx('Upload GIF Image to Convert', 'Sube una imagen GIF para convertir')}
          accept="image/gif"
          validateFile={(file) => {
            if (file.type.toLowerCase() === 'image/gif') return null;
            if (file.name.toLowerCase().endsWith('.gif')) return null;
            return tx('Please select a GIF image file', 'Por favor selecciona un archivo de imagen GIF');
          }}
          defaultFormats={['jpg']}
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'Use this converter to transform GIF assets into JPG when your workflow needs a static image format.',
              'Usa este convertidor para transformar recursos GIF a JPG cuando tu flujo necesita un formato de imagen estatica.'
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
