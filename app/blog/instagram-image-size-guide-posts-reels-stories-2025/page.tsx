"use client";

import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User, Share2, CheckCircle2, Image, Zap, Shield, ArrowRight, Lightbulb, Smartphone, Square, RectangleVertical, Monitor } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import BlogStructuredData from '@/components/blog/BlogStructuredData';
import { getBlogPostBySlug } from '@/lib/blogPostsData';

export default function InstagramSizeGuideArticle() {
  const { locale } = useLanguage();
  const tx = (en: string, es: string) => (locale === 'es' ? es : en);
  const post = getBlogPostBySlug('instagram-image-size-guide-posts-reels-stories-2025');
  const localizedTitle = post ? (locale === 'es' ? post.title.es : post.title.en) : 'Instagram Image Size Guide (Posts, Reels, Stories) - 2025 Updated';
  const localizedSubtitle = post
    ? locale === 'es'
      ? post.heroSubtitle.es
      : post.heroSubtitle.en
    : 'Get the perfect size for every Instagram post. No more cropping issues or blurry images!';

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
        slug="instagram-image-size-guide-posts-reels-stories-2025"
        locale={locale === 'es' ? 'es' : 'en'}
      />
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400"></div>
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
              📱 Social Media
            </span>
            <span className="px-3 py-1 text-xs font-bold bg-pink-500/30 text-pink-100 rounded-full">
              ✨ 2025 Updated
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
              <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="text-white text-sm">Pixselli Team</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Calendar className="w-3.5 h-3.5" />
              <span>Nov 20, 2025</span>
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

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Posting on Instagram but your images look blurry or cut off? That's because Instagram has specific size rules for each type of content.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Using the right image size makes your posts look professional. It also helps your content get more reach because Instagram loves high-quality images!
              </p>
            </div>

            {/* Quick Summary Box */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 mb-12 border border-pink-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Quick Size Reference</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">📷 Feed Posts</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Square: 1080 × 1080 px</li>
                    <li>Portrait: 1080 × 1350 px</li>
                    <li>Landscape: 1080 × 566 px</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">📱 Stories & Reels</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Stories: 1080 × 1920 px</li>
                    <li>Reels: 1080 × 1920 px</li>
                    <li>Aspect Ratio: 9:16</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Instagram Feed Post Sizes</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Feed posts are the main images that show on your profile grid. You can use three different shapes. Each one has its own purpose and look.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Let me explain each type so you can choose the right one for your content:
              </p>

              <div className="space-y-4 mb-6">
                {/* Square Post */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Square className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Square Post (1:1)</h3>
                      <p className="text-sm text-gray-500">The classic Instagram look</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Square posts work great for product photos, quotes, and graphics. This is the original Instagram format that everyone knows.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span><strong>Size:</strong> 1080 × 1080 pixels</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span><strong>Ratio:</strong> 1:1</span>
                    </div>
                  </div>
                </div>

                {/* Portrait Post */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <RectangleVertical className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Portrait Post (4:5)</h3>
                      <p className="text-sm text-gray-500">Takes more screen space</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Portrait takes more space in the feed when people scroll. Best for photos of people, fashion, and detailed images. This is the most popular format now!
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span><strong>Size:</strong> 1080 × 1350 pixels</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span><strong>Ratio:</strong> 4:5</span>
                    </div>
                  </div>
                </div>

                {/* Landscape Post */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Landscape Post (1.91:1)</h3>
                      <p className="text-sm text-gray-500">Wide images</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Wide images for landscapes, group photos, and cinematic shots. Takes less feed space but shows more width.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span><strong>Size:</strong> 1080 × 566 pixels</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span><strong>Ratio:</strong> 1.91:1</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <p className="text-yellow-900">
                  <strong>💡 Pro Tip:</strong> Portrait (4:5) posts get more engagement because they take up more screen space when people scroll!
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Instagram Stories Size</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Stories are full-screen vertical content that disappears after 24 hours. They're perfect for behind-the-scenes content, polls, and quick updates.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Getting the size right is very important. Wrong size means your story will look blurry or get cropped badly.
              </p>

              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-6 h-6" />
                  <h3 className="font-bold text-lg">Stories Dimensions</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold">1080</p>
                    <p className="text-sm opacity-90">Width (px)</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold">1920</p>
                    <p className="text-sm opacity-90">Height (px)</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold">9:16</p>
                    <p className="text-sm opacity-90">Ratio</p>
                  </div>
                </div>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Keep important text and stickers away from the top and bottom edges. Instagram covers about 250 pixels at the top (for your username) and 200 pixels at the bottom (for reply bar).
              </p>

              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <p className="text-purple-900">
                  <strong>📱 Safe Zone:</strong> Keep your main content in the middle 1420 pixels. This makes sure nothing gets cut off!
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Instagram Reels Size</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Reels are Instagram's answer to TikTok. Short videos up to 90 seconds that can reach millions of people. Getting the size right is super important for quality!
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Reels use the same size as Stories, but there are some extra things to know:
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Size:</strong> 1080 × 1920 pixels (same as Stories)</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Aspect Ratio:</strong> 9:16 (vertical)</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Max Length:</strong> 90 seconds</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700"><strong>File Format:</strong> MP4 or MOV</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Max File Size:</strong> 4GB</span>
                </div>
              </div>

              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                <p className="text-orange-900">
                  <strong>🎬 Cover Image:</strong> Your reel cover shows as 1080 × 1350 in the feed grid. Design covers with the center portion in mind!
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">4</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Profile Picture & Carousel Size</h2>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Here are two more important sizes you should know. Your profile picture is circular on Instagram, and carousel posts let you share up to 10 images.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-200 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-teal-900 mb-3">👤 Profile Picture</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Displays as a circle. Keep your face or logo centered!
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>Minimum:</strong> 320 × 320 pixels</p>
                      <p className="text-sm text-gray-600"><strong>Recommended:</strong> 400 × 400 pixels</p>
                      <p className="text-sm text-teal-700 font-medium">✓ Upload square, Instagram crops to circle</p>
                    </div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">🎠 Carousel Posts</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Share up to 10 images in one post. Great for tutorials!
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>Best size:</strong> 1080 × 1350 pixels</p>
                      <p className="text-sm text-gray-600"><strong>Max slides:</strong> 10 images or videos</p>
                      <p className="text-sm text-blue-700 font-medium">✓ All slides must have same aspect ratio</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 - Complete Table */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">5</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Complete Instagram Size Chart (2025)</h2>
              </div>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Here's a complete reference table with all Instagram image sizes. Save this page for future reference!
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <thead className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Content Type</th>
                      <th className="px-4 py-3 text-left font-semibold">Size (px)</th>
                      <th className="px-4 py-3 text-left font-semibold">Aspect Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">Feed Post (Square)</td>
                      <td className="px-4 py-3 font-mono text-sm">1080 × 1080</td>
                      <td className="px-4 py-3">1:1</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">Feed Post (Portrait)</td>
                      <td className="px-4 py-3 font-mono text-sm">1080 × 1350</td>
                      <td className="px-4 py-3">4:5</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">Feed Post (Landscape)</td>
                      <td className="px-4 py-3 font-mono text-sm">1080 × 566</td>
                      <td className="px-4 py-3">1.91:1</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">Stories</td>
                      <td className="px-4 py-3 font-mono text-sm">1080 × 1920</td>
                      <td className="px-4 py-3">9:16</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">Reels</td>
                      <td className="px-4 py-3 font-mono text-sm">1080 × 1920</td>
                      <td className="px-4 py-3">9:16</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">Reels Cover</td>
                      <td className="px-4 py-3 font-mono text-sm">1080 × 1350</td>
                      <td className="px-4 py-3">4:5</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">Profile Picture</td>
                      <td className="px-4 py-3 font-mono text-sm">400 × 400</td>
                      <td className="px-4 py-3">1:1</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">IGTV Cover</td>
                      <td className="px-4 py-3 font-mono text-sm">420 × 654</td>
                      <td className="px-4 py-3">1:1.55</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-6 my-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Need to Resize Images for Instagram?
                  </h3>
                  <p className="text-sm text-white/80">
                    Use our free Image Resizer tool to get the perfect size instantly!
                  </p>
                </div>
                <Link 
                  href="/image-resizer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-pink-600 font-bold text-sm rounded-lg hover:bg-pink-50 transition-all flex-shrink-0"
                >
                  Try Image Resizer
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
                  Using the right image sizes on Instagram is super important! It makes your posts look professional and helps you get more engagement.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Remember these key points:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Portrait (4:5) posts get more engagement
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Stories and Reels are always 1080 × 1920
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Keep important content in the safe zone
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    Use our Image Resizer for perfect sizes!
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Now go create amazing Instagram content! 🎉
                </p>
              </div>
            </section>

            {/* Author Box */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-pink-100">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border-2 border-pink-200">
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
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-pink-600 hover:text-pink-700 hover:bg-pink-100 rounded-lg transition-all border border-pink-200"
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
              <Link href="/image-resizer" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-pink-200">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Image className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-pink-600 transition-colors">Image Resizer</h4>
                  <p className="text-xs text-gray-600">Resize for Instagram</p>
                </div>
              </Link>
              
              <Link href="/image-compressor" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-purple-200">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-purple-600 transition-colors">Image Compressor</h4>
                  <p className="text-xs text-gray-600">Reduce file size</p>
                </div>
              </Link>
              
              <Link href="/image-cropper" className="group flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-orange-200">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-orange-600 transition-colors">Image Cropper</h4>
                  <p className="text-xs text-gray-600">Crop to ratio</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
