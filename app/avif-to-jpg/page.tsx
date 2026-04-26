"use client";

import { useState } from 'react';
import { RefreshCw, ChevronDown, CheckCircle2 } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { AVIF_TO_JPG_TEXT_BY_LOCALE } from '@/lib/avifToJpgTranslations';

export default function AVIFtoJPGPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = AVIF_TO_JPG_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Wide Compatibility', 'Compatibilidad amplia'),
      desc: tx('JPG works with most apps, websites, and operating systems.', 'JPG funciona con la mayoria de apps, sitios y sistemas operativos.'),
    },
    {
      title: tx('Fast Conversion', 'Conversion rapida'),
      desc: tx('Convert modern AVIF files into easy-to-use JPG outputs quickly.', 'Convierte archivos AVIF modernos en salidas JPG faciles de usar rapidamente.'),
    },
    {
      title: tx('Quality Control', 'Control de calidad'),
      desc: tx('Adjust output quality for size and visual balance.', 'Ajusta la calidad de salida para equilibrio entre tamano y apariencia.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Generate multiple variants and download everything in one ZIP.', 'Genera multiples variantes y descarga todo en un solo ZIP.'),
    },
    {
      title: tx('Private Processing', 'Procesamiento privado'),
      desc: tx('All conversion happens locally in your browser.', 'Toda conversion ocurre localmente en tu navegador.'),
    },
    {
      title: tx('No Signup Needed', 'Sin registro'),
      desc: tx('Start converting immediately for free.', 'Empieza a convertir de inmediato y gratis.'),
    },
  ];

  const faqs = [
    {
      q: tx('Why convert AVIF to JPG?', 'Por que convertir AVIF a JPG?'),
      a: tx(
        'JPG offers very broad compatibility across software and platforms where AVIF support can still vary.',
        'JPG ofrece compatibilidad muy amplia en software y plataformas donde el soporte AVIF aun puede variar.'
      ),
    },
    {
      q: tx('What happens to AVIF transparency?', 'Que pasa con la transparencia de AVIF?'),
      a: tx(
        'JPG does not support transparency, so transparent areas are flattened during conversion.',
        'JPG no admite transparencia, por lo que las areas transparentes se aplanan durante la conversion.'
      ),
    },
    {
      q: tx('Is conversion secure?', 'La conversion es segura?'),
      a: tx(
        'Yes. Files are processed in browser and are not uploaded to a server.',
        'Si. Los archivos se procesan en el navegador y no se suben a un servidor.'
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
                {tx('AVIF to JPG Converter', 'Convertidor AVIF a JPG')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('AVIF to JPG Converter', 'Convertidor AVIF a JPG')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert AVIF images to JPG format for universal sharing and editing compatibility.',
              'Convierte imagenes AVIF a formato JPG para compatibilidad universal al compartir y editar.'
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
          defaultFormats={['jpg']}
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'Use this converter when you need reliable JPG output from AVIF images for uploads, messaging, and legacy-compatible workflows.',
              'Usa este convertidor cuando necesites salida JPG confiable desde imagenes AVIF para subidas, mensajeria y flujos compatibles con sistemas antiguos.'
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
