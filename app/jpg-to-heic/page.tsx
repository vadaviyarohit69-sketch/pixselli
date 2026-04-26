"use client";

import { useState } from 'react';
import { RefreshCw, CheckCircle2, ChevronDown } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { JPG_TO_HEIC_TEXT_BY_LOCALE } from '@/lib/jpgToHeicTranslations';

export default function JPGtoHEICPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = JPG_TO_HEIC_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const features = [
    {
      title: tx('Modern Apple Format', 'Formato moderno de Apple'),
      desc: tx('Export JPG images to HEIC for Apple ecosystem workflows.', 'Exporta imagenes JPG a HEIC para flujos del ecosistema Apple.'),
    },
    {
      title: tx('Smaller File Options', 'Opciones de menor tamano'),
      desc: tx('HEIC can reduce size while keeping good visual quality.', 'HEIC puede reducir tamano manteniendo buena calidad visual.'),
    },
    {
      title: tx('Quality Control', 'Control de calidad'),
      desc: tx('Choose quality levels that fit your storage or sharing needs.', 'Elige niveles de calidad segun almacenamiento o uso compartido.'),
    },
    {
      title: tx('Bulk Variants ZIP', 'Variantes en ZIP'),
      desc: tx('Create many outputs at once and download a single ZIP.', 'Crea muchas salidas de una vez y descarga un solo ZIP.'),
    },
    {
      title: tx('Private Processing', 'Procesamiento privado'),
      desc: tx('All conversion runs in your browser on your device.', 'Toda conversion se ejecuta en tu navegador y dispositivo.'),
    },
    {
      title: tx('No Signup Required', 'Sin registro'),
      desc: tx('Use instantly without account creation.', 'Usa al instante sin crear cuenta.'),
    },
  ];

  const faqs = [
    {
      q: tx('Why convert JPG to HEIC?', 'Por que convertir JPG a HEIC?'),
      a: tx(
        'HEIC is commonly used in Apple devices and can provide better storage efficiency than JPG in many cases.',
        'HEIC se usa mucho en dispositivos Apple y puede ofrecer mejor eficiencia de almacenamiento que JPG en muchos casos.'
      ),
    },
    {
      q: tx('What if HEIC export is not supported?', 'Que pasa si HEIC export no es compatible?'),
      a: tx(
        'Some browsers do not support HEIC encoding. If that happens, try another browser or device with HEIC export support.',
        'Algunos navegadores no soportan codificacion HEIC. Si pasa eso, prueba otro navegador o dispositivo con soporte HEIC export.'
      ),
    },
    {
      q: tx('Is this conversion secure?', 'Esta conversion es segura?'),
      a: tx(
        'Yes. Files are processed locally in your browser and are not uploaded to a server.',
        'Si. Los archivos se procesan localmente en tu navegador y no se suben a un servidor.'
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
                {tx('JPG to HEIC Converter', 'Convertidor JPG a HEIC')}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('JPG to HEIC Converter', 'Convertidor JPG a HEIC')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'Convert JPG photos to HEIC format for Apple-friendly output and potential size savings.',
              'Convierte fotos JPG a formato HEIC para salida compatible con Apple y posible ahorro de tamano.'
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
          defaultFormats={['heic']}
          enableMarketplaceWorkflow
        />

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About this tool', 'Sobre esta herramienta')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              'Use this converter to move JPG images into HEIC format when your workflow targets iPhone, iPad, or macOS environments.',
              'Usa este convertidor para llevar imagenes JPG a formato HEIC cuando tu flujo apunta a iPhone, iPad o macOS.'
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
