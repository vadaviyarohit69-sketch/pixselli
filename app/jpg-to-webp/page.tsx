"use client";

import { useState } from 'react';
import { RefreshCw, ChevronDown, CheckCircle2 } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { JPG_TO_WEBP_TEXT_BY_LOCALE } from '@/lib/jpgToWebpTranslations';

export default function JPGtoWebPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = JPG_TO_WEBP_TEXT_BY_LOCALE[locale] ?? {};
  const t = (en: string) => dict[en] ?? en;
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const page = (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <nav className="mb-12" aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2 text-sm text-gray-600">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a 
                itemProp="item" 
                href={homeHref} 
                className="hover:text-purple-600 transition-colors"
              >
                <span itemProp="name">{t('Home')}</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-gray-900 font-medium">JPG to WebP Converter</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            JPG to WebP Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Convert JPG to modern WebP format. Get better compression with WebP.
          </p>
        </div>

        {/* Converter Tool */}
        <BulkImageVariantsCard
          uploadTitle={t('Upload JPG Image to Convert')}
          accept="image/jpeg"
          validateFile={(file) => {
            if (!file.type.startsWith('image/jpeg')) return t('Please select a JPG image file');
            return null;
          }}
          defaultFormats={['webp']}
          enableMarketplaceWorkflow
        />

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About JPG to WebP Converter</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our JPG to WebP Converter transforms your JPG images into Google's modern WebP format. 
            WebP typically produces files 25-35% smaller than JPG while maintaining equivalent visual quality, 
            making it the preferred format for web performance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This tool is essential for web developers, bloggers, and anyone who wants faster-loading websites. 
            Google's PageSpeed Insights specifically recommends WebP for better Core Web Vitals scores.
          </p>
        </div>

        {/* Why Convert to WebP Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 mb-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Convert JPG to WebP?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl">
              <h3 className="font-bold text-green-700 mb-3">🚀 Better Compression</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                WebP uses advanced compression (based on VP8 video codec) to achieve 25-35% smaller files 
                than JPG at the same quality. This means faster page loads and less bandwidth usage.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-xl">
              <h3 className="font-bold text-green-700 mb-3">📈 SEO Benefits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Google rewards fast-loading websites with better search rankings. Using WebP images can 
                significantly improve your Core Web Vitals scores, especially Largest Contentful Paint (LCP).
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl">
              <h3 className="font-bold text-green-700 mb-3">🌐 Wide Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                WebP is now supported by 95%+ of browsers including Chrome, Firefox, Edge, Safari (14+), 
                and Opera. It's safe to use WebP as your primary image format for the web.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl">
              <h3 className="font-bold text-green-700 mb-3">💡 Transparency Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unlike JPG, WebP supports transparency (alpha channel). You can have the compression 
                benefits of JPG with the transparency capability of PNG in a single format.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-green-100">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Comparison</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">JPG</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">WebP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 font-medium">File Size (same quality)</td>
                  <td className="py-3 px-4">100 KB</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">~70 KB (30% smaller)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Transparency</td>
                  <td className="py-3 px-4 text-red-600">Not supported</td>
                  <td className="py-3 px-4 text-green-600">Supported</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Animation</td>
                  <td className="py-3 px-4 text-red-600">Not supported</td>
                  <td className="py-3 px-4 text-green-600">Supported</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Browser Support</td>
                  <td className="py-3 px-4 text-green-600">100%</td>
                  <td className="py-3 px-4 text-green-600">95%+</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Best For</td>
                  <td className="py-3 px-4">Maximum compatibility</td>
                  <td className="py-3 px-4">Web performance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Custom Background', desc: 'Choose any background color for transparency' },
              { title: 'Quality Control', desc: 'Adjust WebP Quality from 10% to 100%' },
              { title: 'Instant Preview', desc: 'See results before downloading' },
              { title: 'Client-Side Processing', desc: 'Your images never leave your device' },
              { title: 'No File Limits', desc: 'Convert images of any size' },
              { title: 'Free Forever', desc: 'No registration or payment required' },
            ].map((feature, index) => (
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

        {/* How to Use */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Upload PNG Image', desc: 'Click the upload area or drag and drop your PNG file' },
              { step: '2', title: 'Choose Settings', desc: 'Select background color and adjust quality slider' },
              { step: '3', title: 'Convert', desc: 'Click "Convert to WebP" button to start conversion' },
              { step: '4', title: 'Download', desc: 'Preview and download your Converted WebP image' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is WebP and why should I convert my JPGs to it?',
                a: 'WebP is a modern image format developed by Google that provides 25-35% better compression than JPG while maintaining similar quality. Converting to WebP reduces your website\'s bandwidth usage and improves page load times, which helps with SEO and user experience.',
              },
              {
                q: 'Is WebP supported by all browsers?',
                a: 'WebP is now supported by over 95% of browsers including Chrome, Firefox, Edge, Safari (version 14+), and Opera. For the remaining users, you can use the HTML picture element to serve JPG as a fallback.',
              },
              {
                q: 'How much smaller will my WebP files be?',
                a: 'Typically 25-35% smaller than equivalent JPG files at the same visual quality. A 100KB JPG often converts to a 65-75KB WebP. Results vary depending on image content and quality settings.',
              },
              {
                q: 'What quality setting should I use for WebP?',
                a: 'For web use, 75-85% is usually optimal—it provides excellent visual quality with significant file size reduction. For photographs, try 80-85%. For graphics with text, use 85-90%. WebP maintains quality better than JPG at lower settings.',
              },
              {
                q: 'Will converting to WebP affect image quality?',
                a: 'WebP uses different compression than JPG, so there may be subtle differences, but at 80%+ quality, the visual difference is typically imperceptible. WebP actually preserves details better than JPG at equivalent file sizes.',
              },
              {
                q: 'Can I use WebP for social media?',
                a: 'Most social platforms now accept WebP uploads (Facebook, Twitter, etc.), but they often re-compress images anyway. For maximum control over quality, some platforms still prefer JPG.',
              },
              {
                q: 'How do I serve WebP with JPG fallback on my website?',
                a: 'Use the HTML <picture> element: <picture><source srcset="image.webp" type="image/webp"><img src="image.jpg"></picture>. Browsers that support WebP will load the WebP version; others get the JPG.',
              },
              {
                q: 'Is my image data safe during conversion?',
                a: 'Yes, 100% safe! All conversion happens entirely in your browser using JavaScript and HTML5 Canvas. Your images never leave your device or get uploaded to any server.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
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

