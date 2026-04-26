"use client";

import { useState } from 'react';
import { RefreshCw, CheckCircle2, ChevronDown } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { BMP_TO_JPG_TEXT_BY_LOCALE } from '@/lib/bmpToJpgTranslations';

export default function BMPtoJPGPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = BMP_TO_JPG_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Smaller Output Files', 'Archivos de salida mas pequenos'),
      desc: tx('Convert large BMP images into compact JPG files.', 'Convierte imagenes BMP grandes en archivos JPG compactos.'),
    },
    {
      title: tx('Wide Compatibility', 'Compatibilidad amplia'),
      desc: tx('JPG works across websites, apps, and devices.', 'JPG funciona en sitios web, apps y dispositivos.'),
    },
    {
      title: tx('Quality Control', 'Control de calidad'),
      desc: tx('Tune JPG quality to balance size and clarity.', 'Ajusta calidad JPG para equilibrar tamano y claridad.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Generate multiple outputs and download one ZIP.', 'Genera multiples salidas y descarga un solo ZIP.'),
    },
    {
      title: tx('Private Processing', 'Procesamiento privado'),
      desc: tx('Files stay on your device during conversion.', 'Los archivos permanecen en tu dispositivo durante la conversion.'),
    },
    {
      title: tx('No Signup Needed', 'Sin registro'),
      desc: tx('Convert instantly with no account required.', 'Convierte al instante sin requerir cuenta.'),
    },
  ];

  const faqs = [
    {
      q: tx('Why are BMP files usually large?', 'Por que los archivos BMP suelen ser grandes?'),
      a: tx(
        'BMP often uses little or no compression, so file sizes are typically larger than JPG or WebP.',
        'BMP suele usar poca o ninguna compresion, por eso los tamanos son mayores que JPG o WebP.'
      ),
    },
    {
      q: tx('Will quality change after conversion?', 'Cambiara la calidad tras la conversion?'),
      a: tx(
        'JPG is lossy, so some detail can be reduced depending on quality settings.',
        'JPG es con perdida, por lo que parte del detalle puede reducirse segun el ajuste de calidad.'
      ),
    },
    {
      q: tx('Is conversion private?', 'La conversion es privada?'),
      a: tx(
        'Yes. Processing happens in your browser and files are not uploaded.',
        'Si. El procesamiento ocurre en tu navegador y los archivos no se suben.'
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
                {tx('BMP to JPG Converter', 'Convertidor BMP a JPG')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('BMP to JPG Converter', 'Convertidor BMP a JPG')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert BMP bitmap images to JPG format for smaller files and easier sharing.',
              'Convierte imagenes BMP a formato JPG para archivos mas pequenos y compartir mas facil.'
            )}
          </p>
        </div>

        <BulkImageVariantsCard
          uploadTitle={tx('Upload BMP Image to Convert', 'Sube una imagen BMP para convertir')}
          accept="image/bmp"
          validateFile={(file) => {
            const t = file.type.toLowerCase();
            if (t === 'image/bmp' || t === 'image/x-ms-bmp') return null;
            if (file.name.toLowerCase().endsWith('.bmp')) return null;
            return tx('Please select a BMP image file', 'Por favor selecciona un archivo de imagen BMP');
          }}
          defaultFormats={['jpg']}
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'Use this converter to reduce BMP file sizes and create JPG outputs that are easier to upload and share.',
              'Usa este convertidor para reducir tamanos BMP y crear salidas JPG mas faciles de subir y compartir.'
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
