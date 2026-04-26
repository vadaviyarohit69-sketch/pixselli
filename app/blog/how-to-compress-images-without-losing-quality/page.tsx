"use client";

import Link from 'next/link';
import NextImage from 'next/image';
import { Calendar, Clock, ArrowLeft, User, Share2, CheckCircle2, Image, Zap, Shield, ArrowRight, Lightbulb, Target, Sparkles } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import BlogStructuredData from '@/components/blog/BlogStructuredData';
import { getBlogPostBySlug } from '@/lib/blogPostsData';

export default function CompressGuideArticle() {
  const { locale } = useLanguage();
  const tx = (en: string, es: string) => (locale === 'es' ? es : en);
  const post = getBlogPostBySlug('how-to-compress-images-without-losing-quality');
  const localizedTitle = post ? (locale === 'es' ? post.title.es : post.title.en) : 'How to Compress Images Without Losing Quality';
  const localizedSubtitle = post
    ? locale === 'es'
      ? post.heroSubtitle.es
      : post.heroSubtitle.en
    : 'A simple guide to make your images smaller and faster. No technical skills needed!';

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
        slug="how-to-compress-images-without-losing-quality"
        locale={locale === 'es' ? 'es' : 'en'}
      />
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
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
              📚 Guide
            </span>
            <span className="px-3 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-100 rounded-full">
              ✨ Beginner Friendly
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
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="text-white text-sm">Pixselli Team</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Calendar className="w-3.5 h-3.5" />
              <span>Dec 5, 2025</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-6 md:p-10 lg:p-14 -mt-8 relative z-10">

            {/* Featured Thumbnail Image */}
            <div className="mb-12 -mt-8 -mx-6 md:-mx-10 lg:-mx-14">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-t-3xl overflow-hidden">
                <NextImage
                  src="/Compress-Images-Without Losing-Quality.webp"
                  alt="How to Compress Images Without Losing Quality - Complete Guide"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Have you ever tried to upload a photo, but it was too big? Or maybe your website loads slowly because of large images? 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Don't worry! In this guide, I'll show you <strong>how to make your images smaller</strong> without making them look bad. It's easier than you think!
              </p>
            </div>

            {/* Quick Summary Box */}
            <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-2xl p-6 md:p-8 mb-12 border border-violet-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Quick Summary</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Image compression = Making files smaller</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Smaller images = Faster websites</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">You can reduce size by 70-80% without visible quality loss</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Use online tools like Pixselli - no software needed!</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">What is Image Compression?</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Think of it like packing a suitcase. You want to fit more clothes, so you fold them neatly and remove extra space. Image compression works the same way!
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                When you take a photo with your phone, it saves a lot of extra information. This includes details about every single pixel, color data, and sometimes even location info. Most of this data is not needed for viewing the image.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Image compression removes this unnecessary data to make the file smaller. The best part? If done right, <strong>your image looks exactly the same</strong> to human eyes. You won't notice any difference!
              </p>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-blue-900 font-medium">
                  <strong>Example:</strong> A 5MB photo from your phone can become 500KB after compression. That's 10x smaller! And it still looks great.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Why Should You Compress Images?</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Large images are one of the biggest problems on the internet. They slow down websites, use too much data on mobile phones, and take forever to upload. That's why image compression is so important.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Here are the main reasons why smaller images are better:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Faster Websites</h3>
                  <p className="text-gray-600">Small images load quickly. Visitors don't have to wait, and Google loves fast websites!</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Save Storage Space</h3>
                  <p className="text-gray-600">Keep more photos on your phone or computer. Smaller files = more space for you.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Easy to Share</h3>
                  <p className="text-gray-600">Send images via email or WhatsApp easily. No more "file too large" errors!</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Better SEO</h3>
                  <p className="text-gray-600">Google prefers websites with optimized images. Rank higher in search results!</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Types */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Two Types of Compression</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                There are two ways to compress images. Each method has its own benefits. Understanding both will help you choose the right one for your needs.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Let me explain them in simple words:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">🔥 Lossy Compression</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Removes some tiny details that your eyes can't see. Makes files very small!
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>Best for:</strong> Photos, social media images</p>
                      <p className="text-sm text-gray-600"><strong>File types:</strong> JPG, JPEG</p>
                      <p className="text-sm text-emerald-700 font-medium">✓ Can reduce size by 70-90%</p>
                    </div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-200 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-teal-900 mb-3">💎 Lossless Compression</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Keeps every single detail. Perfect quality, but files are a bit larger.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>Best for:</strong> Logos, graphics, text images</p>
                      <p className="text-sm text-gray-600"><strong>File types:</strong> PNG, WebP</p>
                      <p className="text-sm text-emerald-700 font-medium">✓ Zero quality loss</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <p className="text-yellow-900">
                  <strong>💡 Pro Tip:</strong> For most photos, lossy compression at 80-85% quality is perfect. You won't see any difference, but the file will be much smaller!
                </p>
              </div>
            </section>

            {/* Section 4 - How To */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">4</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">How to Compress Images (Easy Steps)</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Now let's get to the practical part. Compressing images is very easy when you use the right tools. You don't need to install any software or have technical knowledge.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Follow these simple steps to compress your images:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Go to <Link href="/image-compressor" className="text-violet-600 hover:text-violet-700 underline">Pixselli Image Compressor</Link></h4>
                    <p className="text-gray-600">Open our free online tool. No download or signup needed.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Upload Your Image</h4>
                    <p className="text-gray-600">Drag and drop your image, or click to select from your device.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Choose Quality Level</h4>
                    <p className="text-gray-600">Slide the quality bar. 80% is usually perfect for most images.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Download Compressed Image</h4>
                    <p className="text-gray-600">Click download. Your smaller image is ready to use!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-6 my-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Ready to Compress Your Images?
                  </h3>
                  <p className="text-sm text-white/80">
                    Try our free Image Compressor. Fast, easy, no signup needed!
                  </p>
                </div>
                <Link 
                  href="/image-compressor"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-violet-600 font-bold text-sm rounded-lg hover:bg-violet-50 transition-all flex-shrink-0"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Section 5 - Tips */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">5</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Quick Tips for Best Results</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Here are some extra tips that will help you get the best results when compressing images. These are based on what works best for most people:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-100">
                  <span className="text-2xl">📐</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Resize First, Then Compress</h4>
                    <p className="text-gray-600 mt-1">If your image is 4000px wide but you only need 800px, resize it first. This makes a huge difference!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Use the Right Format</h4>
                    <p className="text-gray-600 mt-1">JPG for photos, PNG for logos and graphics, WebP for the web (it's 30% smaller!).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-bold text-gray-900">80% Quality is Sweet Spot</h4>
                    <p className="text-gray-600 mt-1">Most people can't tell difference between 80% and 100% quality, but file size is much smaller.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Don't Compress Already Compressed Images</h4>
                    <p className="text-gray-600 mt-1">Compressing twice can reduce quality. Always start with the original image.</p>
                  </div>
                </div>
              </div>
            </section>

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
                  Image compression is not complicated! With the right tools, you can make your images 70-90% smaller while keeping them looking great.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Remember these key points:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Use online tools like Pixselli - it's free and easy
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    80-85% quality is perfect for most photos
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Resize large images before compressing
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Choose the right format for your needs
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Start compressing your images today and enjoy faster websites, more storage space, and easy sharing!
                </p>
              </div>
            </section>

            {/* Author Box */}
            <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-2xl p-6 md:p-8 border border-violet-100">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border-2 border-violet-200">
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
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-violet-600 hover:text-violet-700 hover:bg-violet-100 rounded-lg transition-all border border-violet-200"
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
              <Link href="/image-compressor" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-violet-200">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Image className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-violet-600 transition-colors">Image Compressor</h4>
                  <p className="text-xs text-gray-600">Reduce image size</p>
                </div>
              </Link>
              
              <Link href="/lossless-compression" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-teal-200">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Shield className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-teal-600 transition-colors">Lossless Compression</h4>
                  <p className="text-xs text-gray-600">Zero quality loss</p>
                </div>
              </Link>
              
              <Link href="/jpg-to-webp" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-emerald-200">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-emerald-600 transition-colors">JPG to WebP</h4>
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
