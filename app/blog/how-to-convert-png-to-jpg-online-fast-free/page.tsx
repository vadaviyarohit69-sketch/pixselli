"use client";

import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User, Share2, CheckCircle2, Image, Zap, Shield, ArrowRight, Lightbulb, FileImage, Upload, Download, Settings } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import BlogStructuredData from '@/components/blog/BlogStructuredData';
import { getBlogPostBySlug } from '@/lib/blogPostsData';

export default function PngToJpgGuideArticle() {
  const { locale } = useLanguage();
  const tx = (en: string, es: string) => (locale === 'es' ? es : en);
  const post = getBlogPostBySlug('how-to-convert-png-to-jpg-online-fast-free');
  const localizedTitle = post ? (locale === 'es' ? post.title.es : post.title.en) : 'How to Convert PNG to JPG Online (Fast & Free)';
  const localizedSubtitle = post
    ? locale === 'es'
      ? post.heroSubtitle.es
      : post.heroSubtitle.en
    : 'Learn how to convert PNG images to JPG format in seconds. No software needed, completely free!';

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
        slug="how-to-convert-png-to-jpg-online-fast-free"
        locale={locale === 'es' ? 'es' : 'en'}
      />
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
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
              🔄 Tutorial
            </span>
            <span className="px-3 py-1 text-xs font-bold bg-orange-500/30 text-orange-100 rounded-full">
              ✨ Step-by-Step
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
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="text-white text-sm">Pixselli Team</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Calendar className="w-3.5 h-3.5" />
              <span>Nov 28, 2025</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>4 min read</span>
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
                Need to convert a PNG image to JPG? Maybe you want a smaller file size, or a website only accepts JPG uploads. Whatever the reason, it's super easy!
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                In this quick tutorial, I'll show you how to convert PNG to JPG online in just a few clicks. No software to download, no account to create. Let's go!
              </p>
            </div>

            {/* Quick Summary Box */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 md:p-8 mb-12 border border-orange-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Quick Summary</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">PNG → JPG conversion takes just 3 clicks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">JPG files are usually 50-80% smaller than PNG</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Use our free online tool - no signup needed!</span>
                </li>
              </ul>
            </div>

            {/* Section 1 - Why Convert */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Why Convert PNG to JPG?</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Both PNG and JPG are popular image formats, but they're designed for different purposes. Here's why you might want to convert PNG to JPG:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Smaller File Size</h3>
                  <p className="text-sm text-gray-600">JPG files are much smaller than PNG. A 5MB PNG might become just 500KB as JPG!</p>
                </div>

                <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                    <Upload className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Easy Uploads</h3>
                  <p className="text-sm text-gray-600">Some websites and apps only accept JPG. Converting lets you upload anywhere!</p>
                </div>

                <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center mb-3">
                    <FileImage className="w-5 h-5 text-pink-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Faster Loading</h3>
                  <p className="text-sm text-gray-600">Smaller files mean faster website loading. Great for SEO and user experience!</p>
                </div>

                <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Universal Support</h3>
                  <p className="text-sm text-gray-600">JPG works everywhere - all browsers, devices, and apps support it perfectly.</p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <p className="text-yellow-900">
                  <strong>⚠️ Note:</strong> When you convert PNG to JPG, you lose transparency. If your PNG has a transparent background, it will become white in JPG.
                </p>
              </div>
            </section>

            {/* Section 2 - Step by Step */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">How to Convert PNG to JPG (3 Easy Steps)</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Follow these simple steps to convert your PNG images to JPG format:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Go to <Link href="/png-to-jpg" className="text-orange-600 hover:text-orange-700 underline">Pixselli PNG to JPG Converter</Link></h4>
                    <p className="text-gray-600">Open our free online converter tool. No download or signup needed!</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Upload Your PNG Image</h4>
                    <p className="text-gray-600">Drag and drop your PNG file, or click to select from your device. You can upload multiple files at once!</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Download Your JPG</h4>
                    <p className="text-gray-600">Click the download button to save your converted JPG image. That's it - you're done!</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <p className="text-green-900">
                  <strong>✨ Bonus:</strong> You can also adjust the quality before downloading. Lower quality = smaller file size!
                </p>
              </div>
            </section>

            {/* Section 3 - Tips */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Tips for Best Results</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Here are some tips to get the best results when converting PNG to JPG:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
                  <span className="text-2xl">📸</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Use for Photos</h4>
                    <p className="text-gray-600 mt-1">JPG is perfect for photographs. If your PNG is a photo, converting to JPG makes total sense!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="font-bold text-gray-900">80-85% Quality is Perfect</h4>
                    <p className="text-gray-600 mt-1">You can reduce quality to 80-85% without any visible difference. This gives you the best balance of quality and file size.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Keep PNG for Logos</h4>
                    <p className="text-gray-600 mt-1">If your image is a logo or has transparency, keep it as PNG. JPG will add a white background.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <span className="text-2xl">💾</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Keep the Original</h4>
                    <p className="text-gray-600 mt-1">Always save your original PNG file. You can't convert JPG back to PNG with transparency!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 - PNG vs JPG */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">4</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">PNG vs JPG: Quick Comparison</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Here's a quick comparison to help you decide which format to use:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Feature</th>
                      <th className="px-4 py-3 text-center font-semibold">PNG</th>
                      <th className="px-4 py-3 text-center font-semibold">JPG</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">File Size</td>
                      <td className="px-4 py-3 text-center">Large 👎</td>
                      <td className="px-4 py-3 text-center">Small 👍</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Transparency</td>
                      <td className="px-4 py-3 text-center">✅ Yes</td>
                      <td className="px-4 py-3 text-center">❌ No</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Quality</td>
                      <td className="px-4 py-3 text-center">Lossless</td>
                      <td className="px-4 py-3 text-center">Lossy</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Best For</td>
                      <td className="px-4 py-3 text-center">Logos, Graphics</td>
                      <td className="px-4 py-3 text-center">Photos</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Web Speed</td>
                      <td className="px-4 py-3 text-center">Slower</td>
                      <td className="px-4 py-3 text-center">Faster 🚀</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 my-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Ready to Convert Your PNG?
                  </h3>
                  <p className="text-sm text-white/80">
                    Try our free PNG to JPG converter. Fast, easy, no signup needed!
                  </p>
                </div>
                <Link 
                  href="/png-to-jpg"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-orange-600 font-bold text-sm rounded-lg hover:bg-orange-50 transition-all flex-shrink-0"
                >
                  Convert Now
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
                  Converting PNG to JPG is quick and easy with the right tool. In just 3 steps, you can reduce your file size dramatically!
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Use JPG for photos and when file size matters
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Keep PNG for logos and transparent images
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    80-85% quality gives best results
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Always keep your original files
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Start converting your images today! 🎉
                </p>
              </div>
            </section>

            {/* Author Box */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 md:p-8 border border-orange-100">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border-2 border-orange-200">
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
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-600 hover:text-orange-700 hover:bg-orange-100 rounded-lg transition-all border border-orange-200"
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
              <Link href="/png-to-jpg" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-orange-200">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Image className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-orange-600 transition-colors">PNG to JPG</h4>
                  <p className="text-xs text-gray-600">Convert formats</p>
                </div>
              </Link>
              
              <Link href="/jpg-to-png" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-green-200">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-green-600 transition-colors">JPG to PNG</h4>
                  <p className="text-xs text-gray-600">Add transparency</p>
                </div>
              </Link>
              
              <Link href="/image-compressor" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-purple-200">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-purple-600 transition-colors">Image Compressor</h4>
                  <p className="text-xs text-gray-600">Reduce file size</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
