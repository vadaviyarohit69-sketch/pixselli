"use client";

import { AlertCircle, Cookie, Database, Eye, Lock, Mail, Shield } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { PRIVACY_TEXT_BY_LOCALE } from '@/lib/privacyTranslations';

export default function PrivacyPage() {
  const { locale } = useLanguage();
  const dict = PRIVACY_TEXT_BY_LOCALE[locale];
  const tx = (en: string, es: string) => (locale === 'es' ? es : dict?.[en] ?? en);

  const pageUrl =
    locale === 'es'
      ? 'https://pixselli.com/es/privacy'
      : locale === 'en'
        ? 'https://pixselli.com/privacy'
        : `https://pixselli.com/${locale}/privacy`;

  const contactHref = locale === 'en' ? '/contact' : `/${locale}/contact`;

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: tx('Privacy Policy - Pixselli', 'Politica de Privacidad - Pixselli'),
            description: tx(
              'Learn how Pixselli protects your privacy and handles data while you use browser-based image tools.',
              'Conoce como Pixselli protege tu privacidad y maneja datos mientras usas herramientas de imagen en navegador.'
            ),
            url: pageUrl,
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Shield className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{tx('Privacy Policy', 'Politica de privacidad')}</h1>
          <p className="text-lg text-gray-600">{tx('Last Updated: April 18, 2026', 'Ultima actualizacion: 18 de abril de 2026')}</p>
        </header>

        <section className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl shadow-sm p-8 mb-8 border border-teal-100">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{tx('Your Privacy Matters', 'Tu privacidad importa')}</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                {tx(
                  'Pixselli is designed so image processing runs in your browser whenever possible. This means your files usually stay on your device.',
                  'Pixselli esta disenado para que el procesamiento de imagen ocurra en tu navegador siempre que sea posible. Esto significa que tus archivos normalmente permanecen en tu dispositivo.'
                )}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>{tx('Important:', 'Importante:')}</strong>{' '}
                {tx(
                  'By using this website, you agree to this policy and our Terms of Service.',
                  'Al usar este sitio web, aceptas esta politica y nuestros Terminos de servicio.'
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <Database className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">{tx('What We Collect', 'Que recopilamos')}</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>{tx('Depending on how you interact with Pixselli, we may collect:', 'Dependiendo de como interactues con Pixselli, podemos recopilar:')}</p>
            <ul className="space-y-2 ml-5">
              <li>{tx('Contact details you submit (name, email, message).', 'Datos de contacto que envias (nombre, correo, mensaje).')}</li>
              <li>{tx('Technical data such as browser type, device type, and usage analytics.', 'Datos tecnicos como tipo de navegador, tipo de dispositivo y analitica de uso.')}</li>
              <li>{tx('Advertising and cookie preferences when consent tools are used.', 'Preferencias de publicidad y cookies cuando se usan herramientas de consentimiento.')}</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p>
                <strong>{tx('File Privacy:', 'Privacidad de archivos:')}</strong>{' '}
                {tx(
                  'Your image files are processed client-side in typical tool flows and are not stored by Pixselli servers.',
                  'Tus archivos de imagen se procesan del lado cliente en flujos tipicos de herramientas y no se almacenan en servidores de Pixselli.'
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <Eye className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">{tx('How We Use Data', 'Como usamos los datos')}</h2>
          </div>
          <ul className="space-y-2 text-gray-700 ml-5">
            <li>{tx('Operate and improve our tools and website performance.', 'Operar y mejorar nuestras herramientas y el rendimiento del sitio.')}</li>
            <li>{tx('Respond to support and legal inquiries.', 'Responder consultas de soporte y legales.')}</li>
            <li>{tx('Detect abuse, fraud, or security threats.', 'Detectar abuso, fraude o amenazas de seguridad.')}</li>
            <li>{tx('Comply with legal obligations.', 'Cumplir obligaciones legales.')}</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <Cookie className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">{tx('Cookies and Ads', 'Cookies y anuncios')}</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            {tx(
              'We may use essential, analytics, and advertising cookies. You can manage many of these through your browser and consent settings.',
              'Podemos usar cookies esenciales, de analitica y de publicidad. Puedes gestionar muchas de ellas desde tu navegador y configuracion de consentimiento.'
            )}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {tx(
              'Some third-party partners (for example ad networks) may process data under their own policies.',
              'Algunos socios externos (por ejemplo redes de anuncios) pueden procesar datos segun sus propias politicas.'
            )}
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <Lock className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-gray-900">{tx('Your Rights', 'Tus derechos')}</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            {tx(
              'Depending on your location, you may have rights to access, correct, delete, or restrict personal data processing.',
              'Dependiendo de tu ubicacion, puedes tener derechos para acceder, corregir, eliminar o limitar el procesamiento de datos personales.'
            )}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {tx('To submit a privacy request, contact: ', 'Para enviar una solicitud de privacidad, contacta: ')}
            <a href="mailto:privacy@pixselli.com" className="text-teal-600 hover:text-teal-700 underline">privacy@pixselli.com</a>
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl shadow-sm p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-teal-700" />
            <h2 className="text-2xl font-bold text-gray-900">{tx('Questions?', 'Preguntas?')}</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            {tx(
              'If you have questions about this Privacy Policy, please contact our team.',
              'Si tienes preguntas sobre esta Politica de privacidad, por favor contacta a nuestro equipo.'
            )}
          </p>
          <Link href={locale === 'es' ? '/es/contact' : contactHref} className="inline-flex items-center px-5 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium">
            {tx('Contact Support', 'Contactar soporte')}
          </Link>
        </section>
      </div>
    </article>
  );
}
