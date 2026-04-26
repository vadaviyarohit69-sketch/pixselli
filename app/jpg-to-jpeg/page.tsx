"use client";

import { useState } from 'react';
import { RefreshCw, CheckCircle2, ChevronDown } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { JPG_TO_JPEG_TEXT_BY_LOCALE } from '@/lib/jpgToJpegTranslations';

export default function JPGtoJPEGPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = JPG_TO_JPEG_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };

  const features = [
    {
      title: tx('Format Standardization', 'Estandarizacion de formato'),
      desc: tx('Save output with .jpeg extension where required.', 'Guarda salida con extension .jpeg donde sea requerido.'),
    },
    {
      title: tx('Quick Processing', 'Procesamiento rapido'),
      desc: tx('Convert and download in a few clicks.', 'Convierte y descarga en pocos clics.'),
    },
    {
      title: tx('No Quality Loss Intent', 'Enfoque sin perdida de calidad'),
      desc: tx('Useful when you need extension consistency.', 'Util cuando necesitas consistencia de extension.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Generate variant outputs and download ZIP.', 'Genera salidas variantes y descarga ZIP.'),
    },
    {
      title: tx('Client-Side Privacy', 'Privacidad local'),
      desc: tx('Image processing stays in browser.', 'El procesamiento de imagen se mantiene en el navegador.'),
    },
    {
      title: tx('Free Tool', 'Herramienta gratuita'),
      desc: tx('No sign-up required.', 'No requiere registro.'),
    },
  ];

  const faqs = [
    {
      q: tx('Is JPG different from JPEG?', 'Es diferente JPG de JPEG?'),
      a: tx(
        'They refer to the same image format. This tool helps with extension compatibility and file naming needs.',
        'Se refieren al mismo formato de imagen. Esta herramienta ayuda con compatibilidad de extension y nombres de archivo.'
      ),
    },
    {
      q: tx('Will my image be uploaded?', 'Se sube mi imagen?'),
      a: tx(
        'No. Conversion runs in your browser and files stay on your device.',
        'No. La conversion corre en tu navegador y los archivos permanecen en tu dispositivo.'
      ),
    },
    {
      q: tx('Can I convert many files?', 'Puedo convertir muchos archivos?'),
      a: tx(
        'You can process multiple images through variant workflow and export zipped results.',
        'Puedes procesar multiples imagenes con el flujo de variantes y exportar resultados en ZIP.'
      ),
    },
  ];

  const page = (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-12" aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2 text-sm text-gray-600">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a itemProp="item" href={locale === 'es' ? '/es' : '/'} className="hover:text-purple-600 transition-colors">
                <span itemProp="name">{tx('Home', 'Inicio')}</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-gray-900 font-medium">
                {tx('JPG to JPEG Converter', 'Convertidor JPG a JPEG')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('JPG to JPEG Converter', 'Convertidor JPG a JPEG')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert JPG files to JPEG extension quickly for standardized naming and compatibility.',
              'Convierte archivos JPG a extension JPEG rapidamente para nombres estandarizados y compatibilidad.'
            )}
          </p>
        </div>

        <BulkImageVariantsCard
          uploadTitle={tx('Upload JPG/JPEG Image to Convert', 'Sube una imagen JPG/JPEG para convertir')}
          accept="image/jpeg"
          validateFile={(file) => {
            const isJpegMime = file.type.startsWith('image/jpeg');
            const isJpegName = /\.jpe?g$/i.test(file.name);
            if (isJpegMime || isJpegName) return null;
            return tx('Please select a JPG/JPEG image file', 'Por favor selecciona un archivo de imagen JPG/JPEG');
          }}
          defaultFormats={['jpg']}
          jpegFileExtension="jpeg"
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'JPG and JPEG represent the same format, but some systems expect the .jpeg extension. This tool helps you export with that naming requirement.',
              'JPG y JPEG representan el mismo formato, pero algunos sistemas esperan la extension .jpeg. Esta herramienta te ayuda a exportar con ese requisito.'
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
