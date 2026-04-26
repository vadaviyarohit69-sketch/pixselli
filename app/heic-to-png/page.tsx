"use client";

import { useState } from 'react';
import { RefreshCw, ChevronDown, CheckCircle2 } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { HEIC_TO_PNG_TEXT_BY_LOCALE } from '@/lib/heicToPngTranslations';

export default function HEICtoPNGPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = HEIC_TO_PNG_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Broad Compatibility', 'Compatibilidad amplia'),
      desc: tx('PNG works across most editors, apps, and platforms.', 'PNG funciona en la mayoria de editores, apps y plataformas.'),
    },
    {
      title: tx('High Quality Output', 'Salida de alta calidad'),
      desc: tx('PNG preserves detail for design and editing workflows.', 'PNG preserva detalle para flujos de diseno y edicion.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Generate many output versions and download one ZIP file.', 'Genera muchas versiones de salida y descarga un archivo ZIP.'),
    },
    {
      title: tx('Resize Presets', 'Preajustes de tamano'),
      desc: tx('Use social and marketplace size presets quickly.', 'Usa rapidamente preajustes de redes y marketplace.'),
    },
    {
      title: tx('Private Processing', 'Procesamiento privado'),
      desc: tx('Your HEIC images remain local in your browser.', 'Tus imagenes HEIC permanecen locales en tu navegador.'),
    },
    {
      title: tx('No Signup Needed', 'Sin registro'),
      desc: tx('Start converting immediately for free.', 'Empieza a convertir de inmediato y gratis.'),
    },
  ];

  const faqs = [
    {
      q: tx('Why convert HEIC to PNG?', 'Por que convertir HEIC a PNG?'),
      a: tx(
        'PNG is supported almost everywhere and is ideal when you need easy editing and consistent rendering.',
        'PNG es compatible casi en todas partes y es ideal cuando necesitas edicion facil y renderizado consistente.'
      ),
    },
    {
      q: tx('Is transparency supported?', 'Se admite transparencia?'),
      a: tx(
        'PNG supports transparency. If your source includes alpha data, PNG is usually the safer choice.',
        'PNG admite transparencia. Si tu origen incluye datos alpha, PNG suele ser la opcion mas segura.'
      ),
    },
    {
      q: tx('Is conversion private?', 'La conversion es privada?'),
      a: tx(
        'Yes. All processing happens in your browser and files are not uploaded to a server.',
        'Si. Todo el procesamiento ocurre en tu navegador y los archivos no se suben a un servidor.'
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
                {tx('HEIC to PNG Converter', 'Convertidor HEIC a PNG')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('HEIC to PNG Converter', 'Convertidor HEIC a PNG')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert HEIC photos to PNG format for broad compatibility and high visual fidelity.',
              'Convierte fotos HEIC a formato PNG para compatibilidad amplia y alta fidelidad visual.'
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
          defaultFormats={['png']}
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
              'HEIC is common on iPhone, but not always supported in every app. PNG gives you a reliable format for editing, sharing, and publishing.',
              'HEIC es comun en iPhone, pero no siempre es compatible en todas las apps. PNG te da un formato confiable para editar, compartir y publicar.'
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
