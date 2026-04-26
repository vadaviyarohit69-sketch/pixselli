"use client";

import { AlertTriangle, CheckCircle, ExternalLink, FileText, Info, Shield } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { DISCLAIMER_TEXT_BY_LOCALE } from '@/lib/disclaimerTranslations';

export default function DisclaimerPage() {
  const { locale } = useLanguage();
  const dict = DISCLAIMER_TEXT_BY_LOCALE[locale];
  const tx = (en: string, es: string) => (locale === 'es' ? es : dict?.[en] ?? en);

  const pageUrl =
    locale === 'es'
      ? 'https://pixselli.com/es/disclaimer'
      : locale === 'en'
        ? 'https://pixselli.com/disclaimer'
        : `https://pixselli.com/${locale}/disclaimer`;

  const contactHref = locale === 'en' ? '/contact' : `/${locale}/contact`;
  const termsHref = locale === 'en' ? '/terms' : `/${locale}/terms`;

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: tx('Disclaimer - Pixselli', 'Descargo de responsabilidad - Pixselli'),
            description: tx(
              'Important notes and limitations related to Pixselli services.',
              'Notas importantes y limitaciones relacionadas con los servicios de Pixselli.'
            ),
            url: pageUrl,
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <AlertTriangle className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{tx('Disclaimer', 'Descargo de responsabilidad')}</h1>
          <p className="text-lg text-gray-600">{tx('Last Updated: April 18, 2026', 'Ultima actualizacion: 18 de abril de 2026')}</p>
        </header>

        <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl shadow-sm p-8 mb-8 border border-orange-200">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{tx('Please Read Carefully', 'Lee esto con atencion')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {tx(
                  'Pixselli tools are provided for general information and utility purposes. By using the website, you accept this disclaimer and related legal pages.',
                  'Las herramientas de Pixselli se proporcionan para fines generales de informacion y utilidad. Al usar el sitio web, aceptas este descargo y las paginas legales relacionadas.'
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">{tx('General Information', 'Informacion general')}</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            {tx(
              'We work hard to keep tools accurate and stable, but we do not guarantee that every output is correct for every use case.',
              'Trabajamos para mantener las herramientas precisas y estables, pero no garantizamos que cada resultado sea correcto para todos los casos de uso.'
            )}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {tx(
              'Use your own judgment and validate files before legal, medical, financial, or business-critical usage.',
              'Usa tu propio criterio y valida los archivos antes de uso legal, medico, financiero o critico para negocio.'
            )}
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-teal-600" />
            <h2 className="text-2xl font-bold text-gray-900">{tx('Image Processing Limitations', 'Limitaciones del procesamiento')}</h2>
          </div>
          <ul className="space-y-2 text-gray-700 ml-5">
            <li>{tx('Output quality may vary by browser engine and hardware.', 'La calidad de salida puede variar segun motor de navegador y hardware.')}</li>
            <li>{tx('Some formats may not preserve all metadata or color profiles.', 'Algunos formatos pueden no preservar todos los metadatos o perfiles de color.')}</li>
            <li>{tx('You should keep backup copies of original files.', 'Debes conservar copias de seguridad de archivos originales.')}</li>
            <li>{tx('You are responsible for confirming compatibility before final delivery.', 'Eres responsable de confirmar compatibilidad antes de la entrega final.')}</li>
          </ul>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                {tx(
                  'Most conversions are processed client-side, helping keep your files private on your device.',
                  'La mayoria de conversiones se procesan del lado cliente, ayudando a mantener tus archivos privados en tu dispositivo.'
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <ExternalLink className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">{tx('Third-Party Links and Ads', 'Enlaces y anuncios de terceros')}</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            {tx(
              'Pixselli may include third-party links and advertising. We do not control external policies, offers, or product claims.',
              'Pixselli puede incluir enlaces y publicidad de terceros. No controlamos politicas externas, ofertas o afirmaciones de productos.'
            )}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {tx(
              'Review third-party terms and privacy policies before interacting with those services.',
              'Revisa terminos y politicas de privacidad de terceros antes de interactuar con esos servicios.'
            )}
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('Limitation of Liability', 'Limitacion de responsabilidad')}</h2>
          <p className="text-gray-700 leading-relaxed">
            {tx(
              'To the maximum extent allowed by law, Pixselli is not liable for indirect or consequential losses caused by use or inability to use the website, tools, or outputs.',
              'En la maxima medida permitida por la ley, Pixselli no es responsable por perdidas indirectas o consecuentes causadas por uso o imposibilidad de uso del sitio web, herramientas o resultados.'
            )}
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl shadow-sm p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{tx('Need Clarification?', 'Necesitas aclaracion?')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {tx(
              'If you have questions about this disclaimer, contact us and include the page or tool you are asking about.',
              'Si tienes preguntas sobre este descargo, contactanos e incluye la pagina o herramienta sobre la que preguntas.'
            )}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={locale === 'es' ? '/es/contact' : contactHref} className="inline-flex items-center px-5 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium">
              {tx('Contact Us', 'Contactanos')}
            </Link>
            <Link href={locale === 'es' ? '/es/terms' : termsHref} className="inline-flex items-center px-5 py-2.5 bg-white text-teal-700 border border-teal-300 rounded-lg hover:bg-teal-50 transition-colors font-medium">
              {tx('View Terms', 'Ver terminos')}
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
