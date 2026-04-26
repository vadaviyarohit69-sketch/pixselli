"use client";

import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User, Share2, CheckCircle2, Image, Zap, Shield, ArrowRight, Lightbulb, Target, Sparkles, TrendingUp, Globe, Gauge } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import BlogStructuredData from '@/components/blog/BlogStructuredData';
import { getBlogPostBySlug } from '@/lib/blogPostsData';

export default function SEOArticle() {
  const { locale } = useLanguage();
  const tx = (en: string, es: string) => (locale === 'es' ? es : en);
  const post = getBlogPostBySlug('why-image-compression-is-important-for-seo-and-page-speed');
  const localizedTitle = post ? (locale === 'es' ? post.title.es : post.title.en) : 'Why Image Compression Is Important for SEO and Page Speed';
  const localizedSubtitle = post
    ? locale === 'es'
      ? post.heroSubtitle.es
      : post.heroSubtitle.en
    : 'Learn how optimizing images can boost your Google rankings and make your website faster.';

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
        slug="why-image-compression-is-important-for-seo-and-page-speed"
        locale={locale === 'es' ? 'es' : 'en'}
      />
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
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
              🚀 SEO
            </span>
            <span className="px-3 py-1 text-xs font-bold bg-yellow-500/20 text-yellow-100 rounded-full">
              ⚡ Performance
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
              <span>5 min read</span>
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
            <div className="mb-10">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Did you know that slow websites lose visitors? Studies show that 53% of people leave a page if it takes more than 3 seconds to load.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                One of the biggest reasons for slow websites is <strong>large image files</strong>. In this article, I'll explain why image compression is so important for both SEO and page speed.
              </p>
            </div>

            {/* Quick Summary Box */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 mb-10 border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Key Takeaways</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Google uses page speed as a ranking factor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Images make up 50% of most webpage sizes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Compressed images = faster loading = better rankings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Faster websites have lower bounce rates</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">What is Page Speed?</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Page speed is how fast your website loads. When someone clicks on your website link, they want to see the content quickly. If your site takes too long, they will leave and go somewhere else.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Google measures page speed in different ways. The most important ones are called Core Web Vitals. These include how fast the first content appears, how quickly the page becomes interactive, and how stable the page is while loading.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Images are often the heaviest elements on a webpage. A single uncompressed photo can be 5MB or more. That's bigger than the entire code of most websites! This is why compressing images is so important.
              </p>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-blue-900 font-medium">
                  <strong>Fun Fact:</strong> Amazon found that every 100ms of delay in page load time cost them 1% in sales. For a company that big, that's millions of dollars!
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">How Page Speed Affects SEO</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                SEO stands for Search Engine Optimization. It's how you make your website appear higher in Google search results. And guess what? Google cares a lot about page speed.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                In 2021, Google made page speed an official ranking factor. This means faster websites have a better chance of ranking higher than slow ones. Here's why this matters:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Higher Rankings</h3>
                  <p className="text-gray-600">Fast websites rank better on Google. More visibility means more traffic to your site.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Lower Bounce Rate</h3>
                  <p className="text-gray-600">When pages load fast, visitors stay longer. This tells Google your site is valuable.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Better User Experience</h3>
                  <p className="text-gray-600">Happy visitors are more likely to share your content and come back again.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Gauge className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">More Conversions</h3>
                  <p className="text-gray-600">Fast websites convert better. Whether it's sales, signups, or downloads.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Why Images Slow Down Websites</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Let me give you a simple example. Imagine you're sending a letter. A small postcard arrives quickly. But a heavy package takes longer to deliver. Websites work the same way.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                When someone visits your website, their browser has to download all the files. Images are usually the biggest files. The bigger the images, the longer it takes to load.
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Here's what typically happens with uncompressed images:
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                  <span className="text-xl">❌</span>
                  <div>
                    <p className="text-gray-700"><strong>A 5MB photo</strong> takes 4+ seconds to load on a fast connection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                  <span className="text-xl">❌</span>
                  <div>
                    <p className="text-gray-700"><strong>On mobile data</strong>, it can take 10+ seconds or fail completely</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                  <span className="text-xl">❌</span>
                  <div>
                    <p className="text-gray-700"><strong>Multiple large images</strong> can make your page unusable</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <span className="text-xl">✅</span>
                  <div>
                    <p className="text-gray-700"><strong>A 200KB compressed image</strong> loads in under 1 second</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <span className="text-xl">✅</span>
                  <div>
                    <p className="text-gray-700"><strong>Works great on mobile</strong> even with slow connections</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <span className="text-xl">✅</span>
                  <div>
                    <p className="text-gray-700"><strong>Looks exactly the same</strong> to visitors</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">4</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">How to Optimize Images for SEO</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Now let's talk about what you can do. Optimizing images for SEO is not complicated. Here are the simple steps you should follow:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Compress Your Images</h4>
                    <p className="text-gray-600">Use <Link href="/image-compressor" className="text-teal-600 hover:text-teal-700 underline">Pixselli Image Compressor</Link> to reduce file size by 70-90% without losing quality.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Use the Right Size</h4>
                    <p className="text-gray-600">Don't upload a 4000px image if you only need 800px. <Link href="/image-resizer" className="text-teal-600 hover:text-teal-700 underline">Resize your images</Link> first.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Choose Modern Formats</h4>
                    <p className="text-gray-600">WebP images are 30% smaller than JPG. <Link href="/jpg-to-webp" className="text-teal-600 hover:text-teal-700 underline">Convert to WebP</Link> for best results.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Add Alt Text</h4>
                    <p className="text-gray-600">Write descriptive alt text for every image. This helps Google understand your images.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 my-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Start Optimizing Your Images Now
                  </h3>
                  <p className="text-sm text-white/80">
                    Free, fast, and no signup required. Boost your SEO today!
                  </p>
                </div>
                <Link 
                  href="/image-compressor"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-600 font-bold text-sm rounded-lg hover:bg-emerald-50 transition-all flex-shrink-0"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Section 5 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">5</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Real Results You Can Expect</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                When you compress your images properly, you'll see real improvements. Here's what typically happens:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-100">
                  <span className="text-2xl">📈</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Page Speed Score Improves</h4>
                    <p className="text-gray-600 mt-1">Your Google PageSpeed Insights score can jump from 40 to 90+ just by optimizing images.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <span className="text-2xl">👥</span>
                  <div>
                    <h4 className="font-bold text-gray-900">More Visitors Stay</h4>
                    <p className="text-gray-600 mt-1">Bounce rate drops because people don't leave due to slow loading. They actually see your content.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Better Search Rankings</h4>
                    <p className="text-gray-600 mt-1">Over time, your pages start appearing higher in Google search results.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Lower Hosting Costs</h4>
                    <p className="text-gray-600 mt-1">Smaller images use less bandwidth. This can save money on hosting, especially for busy websites.</p>
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
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Image compression is one of the easiest ways to improve your website's SEO and page speed. It doesn't require coding skills or expensive tools.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Remember these key points:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Google uses page speed as a ranking factor
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Images are often the biggest files on a webpage
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Compressed images load faster without looking different
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Use tools like Pixselli to compress images for free
                  </li>
                </ul>
                <p className="text-base text-gray-700 leading-relaxed">
                  Start compressing your images today. Your visitors will thank you, and Google will reward you with better rankings!
                </p>
              </div>
            </section>

            {/* Author Box */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-emerald-100">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border-2 border-emerald-200">
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
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100 rounded-lg transition-all border border-emerald-200"
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
              
              <Link href="/image-resizer" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-teal-200">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Shield className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-teal-600 transition-colors">Image Resizer</h4>
                  <p className="text-xs text-gray-600">Change dimensions</p>
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
