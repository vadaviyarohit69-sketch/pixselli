"use client";

import { AlertTriangle, CheckCircle, FileText, Scale, Shield, XCircle } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { TERMS_TEXT_BY_LOCALE } from '@/lib/termsTranslations';

export default function TermsPage() {
  const { locale } = useLanguage();
  const dict = TERMS_TEXT_BY_LOCALE[locale];
  const tx = (en: string, es: string) => (locale === 'es' ? es : dict?.[en] ?? en);

  const pageUrl =
    locale === 'es'
      ? 'https://pixselli.com/es/terms'
      : locale === 'en'
        ? 'https://pixselli.com/terms'
        : `https://pixselli.com/${locale}/terms`;

  const privacyHref = locale === 'en' ? '/privacy' : `/${locale}/privacy`;

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: tx('Terms of Service - Pixselli', 'Terminos de servicio - Pixselli'),
            description: tx(
              'Review the terms that govern your use of Pixselli tools and website.',
              'Revisa los terminos que regulan el uso de las herramientas y sitio de Pixselli.'
            ),
            url: pageUrl,
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FileText className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{tx('Terms of Service', 'Terminos de servicio')}</h1>
          <p className="text-lg text-gray-600">{tx('Last Updated: April 18, 2026', 'Ultima actualizacion: 18 de abril de 2026')}</p>
        </header>

        <section className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl shadow-sm p-8 mb-8 border border-teal-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{tx('Agreement', 'Acuerdo')}</h2>
          <p className="text-gray-700 leading-relaxed">
            {tx(
              'By accessing Pixselli, you agree to these Terms and to our Privacy Policy. If you disagree, please do not use the service.',
              'Al acceder a Pixselli, aceptas estos Terminos y nuestra Politica de privacidad. Si no estas de acuerdo, no uses el servicio.'
            )}
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">{tx('Service Description', 'Descripcion del servicio')}</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            {tx(
              'Pixselli provides browser-based image and document tools, including conversion, compression, and editing utilities.',
              'Pixselli ofrece herramientas de imagen y documentos en navegador, incluyendo utilidades de conversion, compresion y edicion.'
            )}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {tx(
              'Features may change over time and availability can vary by browser, device capabilities, or maintenance windows.',
              'Las funciones pueden cambiar con el tiempo y la disponibilidad puede variar por navegador, capacidades del dispositivo o ventanas de mantenimiento.'
            )}
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <Scale className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">{tx('Acceptable Use', 'Uso aceptable')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {tx('You may', 'Puedes')}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>{tx('Use tools for lawful personal or business workflows.', 'Usar herramientas para flujos legales personales o de negocio.')}</li>
                <li>{tx('Process only files you have rights to use.', 'Procesar solo archivos sobre los que tengas derechos de uso.')}</li>
                <li>{tx('Share feedback to help improve the platform.', 'Compartir comentarios para mejorar la plataforma.')}</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                {tx('You may not', 'No puedes')}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>{tx('Upload or process illegal or infringing content.', 'Subir o procesar contenido ilegal o que infrinja derechos.')}</li>
                <li>{tx('Attempt to disrupt or abuse service infrastructure.', 'Intentar interrumpir o abusar de la infraestructura del servicio.')}</li>
                <li>{tx('Use automated scraping or attacks against the website.', 'Usar scraping automatizado o ataques contra el sitio web.')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('Intellectual Property', 'Propiedad intelectual')}</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            {tx(
              'Pixselli branding, product design, and platform content are protected by applicable intellectual property laws.',
              'La marca Pixselli, el diseno del producto y el contenido de la plataforma estan protegidos por leyes aplicables de propiedad intelectual.'
            )}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {tx(
              'You retain rights to your own files. You are responsible for ensuring your use does not violate third-party rights.',
              'Conservas los derechos de tus propios archivos. Eres responsable de asegurar que tu uso no viole derechos de terceros.'
            )}
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">{tx('Disclaimers and Liability', 'Descargos y responsabilidad')}</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            {tx(
              'Services are provided "as is" and "as available" without warranties of uninterrupted access or fitness for a specific purpose.',
              'Los servicios se proporcionan "tal cual" y "segun disponibilidad" sin garantias de acceso ininterrumpido o aptitud para un fin especifico.'
            )}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {tx(
              'To the maximum extent allowed by law, Pixselli is not liable for indirect, incidental, or consequential damages from service use.',
              'En la maxima medida permitida por la ley, Pixselli no es responsable por danos indirectos, incidentales o consecuentes derivados del uso del servicio.'
            )}
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('Termination and Changes', 'Terminacion y cambios')}</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            {tx(
              'We may suspend access for abuse, legal risk, or security reasons. We may also update these Terms over time.',
              'Podemos suspender acceso por abuso, riesgo legal o razones de seguridad. Tambien podemos actualizar estos Terminos con el tiempo.'
            )}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {tx(
              'Continued use after updates means you accept the revised Terms.',
              'El uso continuo despues de actualizaciones implica que aceptas los Terminos revisados.'
            )}
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl shadow-sm p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('Questions About These Terms?', 'Preguntas sobre estos terminos?')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {tx('For legal questions, contact us at legal@pixselli.com.', 'Para consultas legales, contactanos en legal@pixselli.com.')}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:legal@pixselli.com" className="inline-flex items-center px-5 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium">legal@pixselli.com</a>
            <Link href={locale === 'es' ? '/es/privacy' : privacyHref} className="inline-flex items-center px-5 py-2.5 bg-white text-teal-700 border border-teal-300 rounded-lg hover:bg-teal-50 transition-colors font-medium">
              {tx('View Privacy Policy', 'Ver politica de privacidad')}
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
