"use client";

import { Globe, Heart, Lock, Shield, Target, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { ABOUT_TEXT_BY_LOCALE } from '@/lib/aboutTranslations';

export default function AboutPage() {
  const { locale } = useLanguage();
  const dict = ABOUT_TEXT_BY_LOCALE[locale];
  const tx = (en: string, es: string) => (locale === 'es' ? es : dict?.[en] ?? en);

  const pageUrl =
    locale === 'es'
      ? 'https://pixselli.com/es/about'
      : locale === 'en'
        ? 'https://pixselli.com/about'
        : `https://pixselli.com/${locale}/about`;

  const toolsHref = locale === 'en' ? '/' : `/${locale}`;
  const contactHref = locale === 'es' ? '/es/contact' : '/contact';

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: tx('About Pixselli', 'Sobre Pixselli'),
            description: tx(
              'Learn about Pixselli, the free online image tool platform built for fast, private browser-based processing.',
              'Conoce Pixselli, la plataforma gratuita de herramientas de imagen creada para procesamiento rapido y privado en el navegador.'
            ),
            url: pageUrl,
            publisher: {
              '@type': 'Organization',
              name: 'Pixselli',
              logo: 'https://pixselli.com/logo.png',
            },
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{tx('About Pixselli', 'Sobre Pixselli')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              'A free image toolkit designed for speed, privacy, and practical results.',
              'Un kit gratuito de herramientas de imagen disenado para velocidad, privacidad y resultados practicos.'
            )}
          </p>
        </header>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('Our Mission', 'Nuestra mision')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {tx(
              'Pixselli exists to make everyday image tasks simple for everyone. We focus on browser-first tools so users can convert, compress, and edit files without heavy software or account friction.',
              'Pixselli existe para simplificar tareas de imagen para todos. Nos enfocamos en herramientas en navegador para convertir, comprimir y editar archivos sin software pesado ni friccion de cuentas.'
            )}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {tx(
              'Our core promise is simple: private processing, reliable output, and no hidden paywall for basic workflows.',
              'Nuestra promesa central es simple: procesamiento privado, salida confiable y sin muro de pago oculto para flujos basicos.'
            )}
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('What We Build', 'Lo que construimos')}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: <Target className="w-5 h-5 text-blue-600" />,
                title: tx('Image Utilities', 'Utilidades de imagen'),
                desc: tx('Resize, crop, rotate, watermark, and optimize for real upload requirements.', 'Redimensiona, recorta, rota, agrega marca de agua y optimiza para requisitos reales de carga.'),
              },
              {
                icon: <Zap className="w-5 h-5 text-purple-600" />,
                title: tx('Fast Format Conversion', 'Conversion rapida de formatos'),
                desc: tx('Move between JPG, PNG, WebP, HEIC, AVIF, and PDF with consistent controls.', 'Cambia entre JPG, PNG, WebP, HEIC, AVIF y PDF con controles consistentes.'),
              },
              {
                icon: <Shield className="w-5 h-5 text-emerald-600" />,
                title: tx('Privacy by Design', 'Privacidad por diseno'),
                desc: tx('Most processing runs directly in your browser, keeping files on-device.', 'La mayoria del procesamiento corre en tu navegador, manteniendo archivos en tu dispositivo.'),
              },
              {
                icon: <Globe className="w-5 h-5 text-orange-600" />,
                title: tx('Global Accessibility', 'Accesibilidad global'),
                desc: tx('Responsive UI and bilingual support for users across desktop and mobile.', 'Interfaz responsive y soporte bilingue para usuarios en desktop y movil.'),
              },
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl shadow-sm p-8 mb-8 border border-teal-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Our Principles', 'Nuestros principios')}</h2>
          <div className="space-y-4">
            {[
              {
                icon: <Lock className="w-4 h-4 text-teal-600" />,
                title: tx('Keep user files private', 'Mantener archivos privados'),
                text: tx('We avoid unnecessary uploads and store as little personal data as possible.', 'Evitamos cargas innecesarias y almacenamos la menor cantidad posible de datos personales.'),
              },
              {
                icon: <Users className="w-4 h-4 text-teal-600" />,
                title: tx('Design for non-experts', 'Disenar para no expertos'),
                text: tx('Tools should work for first-time users without reading long documentation.', 'Las herramientas deben funcionar para usuarios nuevos sin leer documentacion extensa.'),
              },
              {
                icon: <Heart className="w-4 h-4 text-teal-600" />,
                title: tx('Keep core tools free', 'Mantener herramientas clave gratis'),
                text: tx('Essential image workflows should remain accessible to everyone.', 'Los flujos esenciales de imagen deben seguir accesibles para todos.'),
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('Get in Touch', 'Ponte en contacto')}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {tx(
              'Have feedback or feature ideas? We review user suggestions regularly and use them to prioritize what we build next.',
              'Tienes comentarios o ideas de funciones? Revisamos sugerencias de usuarios con frecuencia y las usamos para priorizar lo proximo que construimos.'
            )}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={contactHref} className="inline-flex items-center px-5 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium">
              {tx('Contact Us', 'Contactanos')}
            </Link>
            <Link href={toolsHref} className="inline-flex items-center px-5 py-2.5 bg-white text-teal-700 border border-teal-300 rounded-lg hover:bg-teal-50 transition-colors font-medium">
              {tx('Explore Tools', 'Explorar herramientas')}
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
