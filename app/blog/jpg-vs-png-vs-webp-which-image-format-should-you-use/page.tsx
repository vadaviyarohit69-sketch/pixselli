"use client";

import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User, Share2, CheckCircle2, Image, Zap, Shield, ArrowRight, Lightbulb, FileImage, Camera, Palette, Globe } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import BlogStructuredData from '@/components/blog/BlogStructuredData';
import { getBlogPostBySlug } from '@/lib/blogPostsData';

export default function ImageFormatsGuideArticle() {
  const { locale } = useLanguage();
  const tx = (en: string, es: string) => (locale === 'es' ? es : en);
  const post = getBlogPostBySlug('jpg-vs-png-vs-webp-which-image-format-should-you-use');
  const localizedTitle = post ? (locale === 'es' ? post.title.es : post.title.en) : 'JPG vs PNG vs WEBP: Which Image Format Should You Use?';
  const localizedSubtitle = post
    ? locale === 'es'
      ? post.heroSubtitle.es
      : post.heroSubtitle.en
    : 'A simple guide to help you choose the right image format. No confusing technical stuff!';

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: localizedTitle,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(tx('Link copied to clipboard!', 'Enlace copiado al portapapeles!'));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BlogStructuredData
        slug="jpg-vs-png-vs-webp-which-image-format-should-you-use"
        locale={locale === 'es' ? 'es' : 'en'}
      />
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Breadcrumb */}
          <Link 
            href={locale === 'es' ? '/es/blog' : '/blog'}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-4 transition-all hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            {tx('Back to Blog', 'Volver al blog')}
          </Link>
          
          {/* Category Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-bold bg-white/20 text-white rounded-full">
              📁 File Formats
            </span>
            <span className="px-3 py-1 text-xs font-bold bg-blue-500/30 text-blue-100 rounded-full">
              ✨ Complete Guide
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {localizedTitle}
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/80 max-w-2xl mb-6">
            {localizedSubtitle}
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="text-white text-sm">Pixselli Team</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Calendar className="w-3.5 h-3.5" />
              <span>Nov 23, 2025</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-6 md:p-10 lg:p-14 -mt-8 relative z-10">

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Confused about which image format to use? JPG, PNG, WEBP... what's the difference? And which one is best for your needs?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Don't worry! In this guide, I'll explain each format in simple words. By the end, you'll know exactly which format to use and when!
              </p>
            </div>

            {/* Quick Summary Box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 mb-12 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Quick Answer</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>JPG</strong> → Best for photos and complex images</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>PNG</strong> → Best for logos, graphics, and transparent images</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>WEBP</strong> → Best for websites (smaller files, good quality)</span>
                </li>
              </ul>
            </div>

            {/* Section 1 - JPG */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">What is JPG (JPEG)?</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                JPG is the most common image format in the world. When you take a photo with your phone, it's usually saved as JPG. It's been around since 1992!
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                JPG uses "lossy compression" which means it removes some tiny details to make files smaller. But don't worry - if done right, you can't see the difference with your eyes.
              </p>

              <div className="bg-white rounded-2xl p-6 border-2 border-orange-200 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Camera className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">JPG Quick Facts</h3>
                    <p className="text-sm text-gray-500">The photography standard</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">✅ Pros</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Very small file sizes</li>
                      <li>• Works everywhere (all browsers, apps)</li>
                      <li>• Perfect for photos</li>
                      <li>• Easy to share</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">❌ Cons</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• No transparency support</li>
                      <li>• Quality loss when compressed</li>
                      <li>• Bad for text and logos</li>
                      <li>• Gets worse each time you edit</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                <p className="text-orange-900">
                  <strong>📷 Best for:</strong> Photos, social media images, email attachments, and any image with lots of colors and details.
                </p>
              </div>
            </section>

            {/* Section 2 - PNG */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">What is PNG?</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                PNG stands for "Portable Network Graphics". It was created in 1996 as a better alternative to GIF. The best thing about PNG? It supports <strong>transparency</strong>!
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                PNG uses "lossless compression" which means it keeps every single detail. Your image looks exactly the same as the original. No quality loss at all!
              </p>

              <div className="bg-white rounded-2xl p-6 border-2 border-green-200 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">PNG Quick Facts</h3>
                    <p className="text-sm text-gray-500">The graphics standard</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">✅ Pros</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Supports transparency</li>
                      <li>• No quality loss</li>
                      <li>• Sharp text and edges</li>
                      <li>• Great for logos and icons</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">❌ Cons</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Larger file sizes</li>
                      <li>• Not ideal for photos</li>
                      <li>• Can slow down websites</li>
                      <li>• Overkill for simple images</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <p className="text-green-900">
                  <strong>🎨 Best for:</strong> Logos, icons, graphics with text, screenshots, and any image that needs a transparent background.
                </p>
              </div>
            </section>

            {/* Section 3 - WEBP */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">What is WEBP?</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                WEBP is the newest format, created by Google in 2010. It's designed specifically for the web. Think of it as the "best of both worlds" - it combines benefits of both JPG and PNG!
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                WEBP files are usually 25-35% smaller than JPG with the same quality. And unlike JPG, it supports transparency too! That's why all modern websites are switching to WEBP.
              </p>

              <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">WEBP Quick Facts</h3>
                    <p className="text-sm text-gray-500">The modern web standard</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">✅ Pros</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Smallest file sizes</li>
                      <li>• Supports transparency</li>
                      <li>• Supports animation</li>
                      <li>• Great quality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">❌ Cons</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Not supported by all apps</li>
                      <li>• Some old browsers don't support it</li>
                      <li>• Can't open in some image editors</li>
                      <li>• Not ideal for printing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                <p className="text-purple-900">
                  <strong>🌐 Best for:</strong> Websites, web apps, and anywhere you need small file sizes with good quality. Perfect for SEO!
                </p>
              </div>
            </section>

            {/* Section 4 - Comparison Table */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">4</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Format Comparison Chart</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Here's a simple comparison table to help you decide which format to use:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Feature</th>
                      <th className="px-4 py-3 text-center font-semibold">JPG</th>
                      <th className="px-4 py-3 text-center font-semibold">PNG</th>
                      <th className="px-4 py-3 text-center font-semibold">WEBP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">File Size</td>
                      <td className="px-4 py-3 text-center">Small 👍</td>
                      <td className="px-4 py-3 text-center">Large 👎</td>
                      <td className="px-4 py-3 text-center">Smallest 🏆</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Quality</td>
                      <td className="px-4 py-3 text-center">Good</td>
                      <td className="px-4 py-3 text-center">Perfect 🏆</td>
                      <td className="px-4 py-3 text-center">Great</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Transparency</td>
                      <td className="px-4 py-3 text-center">❌ No</td>
                      <td className="px-4 py-3 text-center">✅ Yes</td>
                      <td className="px-4 py-3 text-center">✅ Yes</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Animation</td>
                      <td className="px-4 py-3 text-center">❌ No</td>
                      <td className="px-4 py-3 text-center">❌ No</td>
                      <td className="px-4 py-3 text-center">✅ Yes</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Browser Support</td>
                      <td className="px-4 py-3 text-center">100% 🏆</td>
                      <td className="px-4 py-3 text-center">100% 🏆</td>
                      <td className="px-4 py-3 text-center">97%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Best For</td>
                      <td className="px-4 py-3 text-center">Photos</td>
                      <td className="px-4 py-3 text-center">Graphics</td>
                      <td className="px-4 py-3 text-center">Web</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 - When to Use What */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">5</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">When to Use Each Format</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Still confused? Here's a simple guide to help you choose:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
                  <span className="text-2xl">📷</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Use JPG when...</h4>
                    <p className="text-gray-600 mt-1">You have photos, social media posts, or any image with many colors. Also use JPG for email attachments and when file size matters more than perfect quality.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Use PNG when...</h4>
                    <p className="text-gray-600 mt-1">You need transparency (like logos on different backgrounds), sharp text, screenshots, or graphics with few colors. Also use PNG when quality is more important than file size.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Use WEBP when...</h4>
                    <p className="text-gray-600 mt-1">You're building a website and want fast loading times. WEBP gives you small files with great quality. It's the best choice for modern websites!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 my-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Need to Convert Image Formats?
                  </h3>
                  <p className="text-sm text-white/80">
                    Use our free converter tools. Convert JPG to PNG, PNG to WEBP, and more!
                  </p>
                </div>
                <Link 
                  href="/jpg-to-png"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 font-bold text-sm rounded-lg hover:bg-blue-50 transition-all flex-shrink-0"
                >
                  Try Converter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Conclusion */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Conclusion</h2>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Choosing the right image format doesn't have to be complicated. Just remember these simple rules:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Photos → JPG
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Logos & Graphics → PNG
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Websites → WEBP
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Need transparency? → PNG or WEBP
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Now you know exactly which format to use! Go ahead and optimize your images like a pro! 🎉
                </p>
              </div>
            </section>

            {/* Author Box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border-2 border-blue-200">
                  <span className="text-3xl">✍️</span>
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Written by Pixselli Team</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We create simple, free image tools for everyone. Our mission is to make image editing easy and accessible.
                  </p>
                </div>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-lg transition-all border border-blue-200"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Try These Free Tools</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/jpg-to-png" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Image className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">JPG to PNG</h4>
                  <p className="text-xs text-gray-600">Add transparency</p>
                </div>
              </Link>
              
              <Link href="/png-to-jpg" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-orange-200">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-orange-600 transition-colors">PNG to JPG</h4>
                  <p className="text-xs text-gray-600">Reduce file size</p>
                </div>
              </Link>
              
              <Link href="/jpg-to-webp" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-purple-200">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-purple-600 transition-colors">JPG to WEBP</h4>
                  <p className="text-xs text-gray-600">Modern format</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
