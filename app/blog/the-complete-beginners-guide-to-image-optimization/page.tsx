"use client";

import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User, Share2, CheckCircle2, Image, Zap, Shield, ArrowRight, Lightbulb, FileImage, Gauge, Search, Smartphone, Monitor } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import BlogStructuredData from '@/components/blog/BlogStructuredData';
import { getBlogPostBySlug } from '@/lib/blogPostsData';

export default function ImageOptimizationGuideArticle() {
  const { locale } = useLanguage();
  const tx = (en: string, es: string) => (locale === 'es' ? es : en);
  const post = getBlogPostBySlug('the-complete-beginners-guide-to-image-optimization');
  const localizedTitle = post ? (locale === 'es' ? post.title.es : post.title.en) : "The Complete Beginner's Guide to Image Optimization";
  const localizedSubtitle = post
    ? locale === 'es'
      ? post.heroSubtitle.es
      : post.heroSubtitle.en
    : 'Everything you need to know about making your images faster, smaller, and better. Perfect for beginners!';

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
        slug="the-complete-beginners-guide-to-image-optimization"
        locale={locale === 'es' ? 'es' : 'en'}
      />
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
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
              📚 Beginner Guide
            </span>
            <span className="px-3 py-1 text-xs font-bold bg-emerald-500/30 text-emerald-100 rounded-full">
              ✨ Complete Tutorial
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
              <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="text-white text-sm">Pixselli Team</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Calendar className="w-3.5 h-3.5" />
              <span>Nov 25, 2025</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>8 min read</span>
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
                Are your images slowing down your website? Taking forever to upload? Using too much storage space? You're not alone!
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Image optimization is the secret weapon that every website owner, blogger, and content creator needs. In this complete guide, I'll teach you everything from scratch. No prior knowledge needed!
              </p>
            </div>

            {/* Quick Summary Box */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 mb-12 border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">What You'll Learn</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">What image optimization means (in simple words)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Why it's important for your website and SEO</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">5 easy techniques to optimize any image</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Free tools you can use right now</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">What is Image Optimization?</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Image optimization is the process of making your images as small as possible (in file size) while keeping them looking good. Think of it like packing for a trip - you want to fit everything you need in the smallest bag possible!
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                When you optimize an image, you're doing one or more of these things:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Compressing</h3>
                  <p className="text-sm text-gray-600">Reducing file size by removing unnecessary data</p>
                </div>

                <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mb-3">
                    <Monitor className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Resizing</h3>
                  <p className="text-sm text-gray-600">Making images the right dimensions for their use</p>
                </div>

                <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-cyan-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center mb-3">
                    <FileImage className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Converting</h3>
                  <p className="text-sm text-gray-600">Changing to a better format (like WEBP)</p>
                </div>

                <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                    <Search className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Adding Metadata</h3>
                  <p className="text-sm text-gray-600">Including alt text and descriptions for SEO</p>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <p className="text-emerald-900">
                  <strong>🎯 The Goal:</strong> Make images load faster without making them look bad. A well-optimized image can be 80% smaller than the original!
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Why Does Image Optimization Matter?</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                You might think "My images look fine, why should I optimize them?" Well, there are some very important reasons:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Website Speed</h4>
                    <p className="text-gray-600 mt-1">Images are usually the biggest files on a webpage. Large images = slow website. And 53% of visitors leave if a page takes more than 3 seconds to load!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <span className="text-2xl">📈</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Better SEO Rankings</h4>
                    <p className="text-gray-600 mt-1">Google loves fast websites! Page speed is a ranking factor. Optimized images help you rank higher in search results.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Save Money on Hosting</h4>
                    <p className="text-gray-600 mt-1">Smaller images = less storage space = lower hosting costs. You also use less bandwidth, which can save a lot of money!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Better Mobile Experience</h4>
                    <p className="text-gray-600 mt-1">Most people browse on phones with slower connections. Optimized images load quickly even on 3G or 4G networks.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <p className="text-yellow-900">
                  <strong>📊 Fun Fact:</strong> The average webpage is about 2MB, and images make up about 50% of that! Optimizing images can cut your page size in half.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">5 Easy Image Optimization Techniques</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Now let's get practical! Here are 5 techniques you can use right now to optimize your images:
              </p>

              {/* Technique 1 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <h3 className="text-lg font-bold text-gray-900">Compress Your Images</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  This is the #1 thing you should do. Compression removes unnecessary data from your image file. You can often reduce file size by 60-80% with no visible quality loss!
                </p>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    <strong>💡 How to do it:</strong> Use our free <Link href="/image-compressor" className="text-emerald-600 hover:underline">Image Compressor</Link> tool. Just upload, adjust quality, and download!
                  </p>
                </div>
              </div>

              {/* Technique 2 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-lg font-bold text-gray-900">Resize to the Right Dimensions</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Don't upload a 4000px wide image if it will only display at 800px. Resize your images to match their display size. This alone can reduce file size by 80%!
                </p>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    <strong>💡 How to do it:</strong> Use our free <Link href="/image-resizer" className="text-emerald-600 hover:underline">Image Resizer</Link> tool. Enter your target dimensions and resize instantly!
                  </p>
                </div>
              </div>

              {/* Technique 3 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-lg font-bold text-gray-900">Use the Right Format</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Different formats are better for different types of images. JPG for photos, PNG for graphics with transparency, WEBP for the best of both worlds!
                </p>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Pro tip:</strong> WEBP is 25-35% smaller than JPG. Convert your images using our <Link href="/jpg-to-webp" className="text-emerald-600 hover:underline">JPG to WEBP</Link> converter!
                  </p>
                </div>
              </div>

              {/* Technique 4 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <h3 className="text-lg font-bold text-gray-900">Remove Unnecessary Metadata</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Photos from cameras and phones contain hidden data like GPS location, camera settings, and more. This adds to file size. Removing it can save 10-20%!
                </p>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Good news:</strong> Most compression tools automatically remove this data for you!
                  </p>
                </div>
              </div>

              {/* Technique 5 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <h3 className="text-lg font-bold text-gray-900">Add Descriptive Alt Text</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Alt text describes your image for search engines and screen readers. It doesn't reduce file size, but it's essential for SEO and accessibility!
                </p>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Example:</strong> Instead of "IMG_1234.jpg", use "golden-retriever-playing-in-park.jpg" as filename and add descriptive alt text.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 - Optimization Checklist */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">4</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Quick Optimization Checklist</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Before uploading any image, run through this simple checklist:
              </p>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Is the image resized to the correct dimensions?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Is it compressed (preferably under 200KB for web)?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Is it in the right format (JPG, PNG, or WEBP)?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Does it have a descriptive filename?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Have I added alt text for SEO?</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 - Tools */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">5</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Free Tools for Image Optimization</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                You don't need expensive software! Here are free tools you can use right now:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Link href="/image-compressor" className="block bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-emerald-600">Image Compressor</h3>
                  </div>
                  <p className="text-sm text-gray-600">Reduce file size without losing quality</p>
                </Link>

                <Link href="/image-resizer" className="block bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-teal-300 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Monitor className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-teal-600">Image Resizer</h3>
                  </div>
                  <p className="text-sm text-gray-600">Resize to exact dimensions</p>
                </Link>

                <Link href="/jpg-to-webp" className="block bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-cyan-300 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FileImage className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-cyan-600">JPG to WEBP</h3>
                  </div>
                  <p className="text-sm text-gray-600">Convert to modern web format</p>
                </Link>

                <Link href="/image-cropper" className="block bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Image className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Image Cropper</h3>
                  </div>
                  <p className="text-sm text-gray-600">Crop to perfect aspect ratios</p>
                </Link>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 my-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Ready to Optimize Your Images?
                  </h3>
                  <p className="text-sm text-white/80">
                    Start with our free Image Compressor. Fast, easy, no signup needed!
                  </p>
                </div>
                <Link 
                  href="/image-compressor"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-600 font-bold text-sm rounded-lg hover:bg-emerald-50 transition-all flex-shrink-0"
                >
                  Try Now Free
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
                  Image optimization isn't rocket science! With the right tools and techniques, anyone can do it. Here's what to remember:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Always compress images before uploading
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Resize images to match their display size
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Use WEBP format for websites when possible
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Add descriptive filenames and alt text
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Use free tools like Pixselli to make it easy
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Start optimizing your images today and watch your website get faster! 🚀
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
              <Link href="/image-compressor" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-emerald-200">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-emerald-600 transition-colors">Image Compressor</h4>
                  <p className="text-xs text-gray-600">Reduce file size</p>
                </div>
              </Link>
              
              <Link href="/image-resizer" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-teal-200">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Shield className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-teal-600 transition-colors">Image Resizer</h4>
                  <p className="text-xs text-gray-600">Resize images</p>
                </div>
              </Link>
              
              <Link href="/jpg-to-webp" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-cyan-200">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Image className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-cyan-600 transition-colors">JPG to WEBP</h4>
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
