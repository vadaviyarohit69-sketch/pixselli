"use client";

import { useState } from 'react';
import { CheckCircle, Mail, Send } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { CONTACT_TEXT_BY_LOCALE } from '@/lib/contactTranslations';

export default function ContactPage() {
  const { locale } = useLanguage();
  const dict = CONTACT_TEXT_BY_LOCALE[locale];
  const tx = (en: string, es: string) => (locale === 'es' ? es : dict?.[en] ?? en);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const pageUrl =
    locale === 'es'
      ? 'https://pixselli.com/es/contact'
      : locale === 'en'
        ? 'https://pixselli.com/contact'
        : `https://pixselli.com/${locale}/contact`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: tx('Contact Pixselli', 'Contactar Pixselli'),
            description: tx(
              'Reach Pixselli for support, feedback, and partnership inquiries.',
              'Contacta a Pixselli para soporte, comentarios y consultas de colaboracion.'
            ),
            url: pageUrl,
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('Contact Us', 'Contactanos')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {tx("Have questions or feedback? We'd love to hear from you.", 'Tienes preguntas o comentarios? Nos encantaria saber de ti.')}
          </p>
        </header>

        <div className="grid md:grid-cols-1 gap-8 mb-10">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center max-w-md mx-auto">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{tx('Email Us', 'Escribenos')}</h3>
            <p className="text-sm text-gray-600">support@pixselli.com</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Send Us a Message', 'Envianos un mensaje')}</h2>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12">
              <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tx('Thank You!', 'Gracias!')}</h3>
              <p className="text-gray-600 text-center">
                {tx('Your message has been sent successfully. We will get back to you soon.', 'Tu mensaje fue enviado correctamente. Te responderemos pronto.')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {tx('Your Name', 'Tu nombre')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder={tx('John Doe', 'Juan Perez')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {tx('Your Email', 'Tu correo')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {tx('Subject', 'Asunto')} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder={tx('How can we help you?', 'Como podemos ayudarte?')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {tx('Your Message', 'Tu mensaje')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  placeholder={tx('Tell us more about your request...', 'Cuentanos mas sobre tu solicitud...')}
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {tx('Send Message', 'Enviar mensaje')}
              </button>

              <p className="text-sm text-gray-500 mt-4">{tx('* Required fields. We usually respond within 24-48 business hours.', '* Campos obligatorios. Normalmente respondemos en 24-48 horas habiles.')}</p>
            </form>
          )}
        </div>
      </div>
    </article>
  );
}
