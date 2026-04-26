"use client";

import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User, Share2, CheckCircle2, AlertTriangle, Smartphone, Monitor, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import BlogStructuredData from '@/components/blog/BlogStructuredData';
import { getBlogPostBySlug } from '@/lib/blogPostsData';

export default function HEICGuideArticle() {
  const { locale } = useLanguage();
  const tx = (en: string, es: string) => (locale === 'es' ? es : en);
  const post = getBlogPostBySlug('what-is-heic-format-complete-guide');
  const localizedTitle = post ? (locale === 'es' ? post.title.es : post.title.en) : 'What is HEIC Format? Complete Guide to iPhone Image Format';
  const localizedSubtitle = post
    ? locale === 'es'
      ? post.heroSubtitle.es
      : post.heroSubtitle.en
    : 'Everything you need to know about HEIC: why Apple uses it, how to open these files, and how to convert them.';

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
        slug="what-is-heic-format-complete-guide"
        locale={locale === 'es' ? 'es' : 'en'}
      />
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Link 
            href={locale === 'es' ? '/es/blog' : '/blog'}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-4 transition-all hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            {tx('Back to Blog', 'Volver al blog')}
          </Link>
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-bold bg-white/20 text-white rounded-full">
              📱 Format Guide
            </span>
            <span className="px-3 py-1 text-xs font-bold bg-blue-500/20 text-blue-100 rounded-full">
              ✨ Updated 2025
            </span>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {localizedTitle}
          </h1>
          
          <p className="text-base md:text-lg text-white/80 max-w-2xl mb-6">
            {localizedSubtitle}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="text-white text-sm">Pixselli Team</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Calendar className="w-3.5 h-3.5" />
              <span>Dec 20, 2025</span>
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
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-6 md:p-10 lg:p-14 -mt-8 relative z-10">

            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you've ever transferred photos from your iPhone to a Windows computer, you've probably encountered files ending in <strong>.HEIC</strong> that won't open. Don't worry—you're not alone. Millions of people face this same frustration every day.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                HEIC (High Efficiency Image Container) is Apple's default photo format since iOS 11 (2017). It's actually a brilliant format that saves storage space while maintaining excellent quality—but its lack of universal support causes major headaches.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In this complete guide, we'll explain exactly what HEIC is, why Apple chose it, and most importantly, <strong>how to open and convert HEIC files</strong> so you can use your photos anywhere.
              </p>
            </section>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-bold text-gray-900 mb-4">📑 In This Guide</h2>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#what-is-heic" className="hover:text-blue-600 transition-colors">→ What is HEIC Format?</a></li>
                <li><a href="#heic-vs-jpg" className="hover:text-blue-600 transition-colors">→ HEIC vs JPG: Key Differences</a></li>
                <li><a href="#why-apple-uses-heic" className="hover:text-blue-600 transition-colors">→ Why Does Apple Use HEIC?</a></li>
                <li><a href="#open-heic-windows" className="hover:text-blue-600 transition-colors">→ How to Open HEIC on Windows</a></li>
                <li><a href="#convert-heic" className="hover:text-blue-600 transition-colors">→ How to Convert HEIC to JPG</a></li>
                <li><a href="#stop-iphone-heic" className="hover:text-blue-600 transition-colors">→ How to Stop iPhone Taking HEIC Photos</a></li>
              </ul>
            </nav>

            {/* Section: What is HEIC */}
            <section id="what-is-heic" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is HEIC Format?</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>HEIC</strong> stands for <strong>High Efficiency Image Container</strong>. It's Apple's implementation of the HEIF (High Efficiency Image Format) standard, developed by the Moving Picture Experts Group (MPEG)—the same organization behind MP3 and MP4.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-blue-900 mb-2">🔑 Key Facts About HEIC</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /> Uses advanced HEVC (H.265) compression codec</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /> Files are typically 40-50% smaller than equivalent JPGs</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /> Supports 16-bit color depth (vs. JPG's 8-bit)</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /> Can store multiple images in one file (Live Photos, bursts)</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /> Preserves editing history non-destructively</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Think of HEIC as a "smarter" image format. It uses the same compression technology as 4K video (HEVC/H.265), which is incredibly efficient at reducing file size while maintaining quality that's often indistinguishable from the original.
              </p>
            </section>

            {/* Section: HEIC vs JPG */}
            <section id="heic-vs-jpg" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">HEIC vs JPG: Complete Comparison</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Feature</th>
                      <th className="text-left py-3 px-4 font-bold text-blue-700">HEIC</th>
                      <th className="text-left py-3 px-4 font-bold text-amber-700">JPG</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4 font-medium">File Size (12MP photo)</td>
                      <td className="py-3 px-4 text-blue-600">~1.5-2 MB</td>
                      <td className="py-3 px-4 text-amber-600">~3-5 MB</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 font-medium">Color Depth</td>
                      <td className="py-3 px-4 text-blue-600">16-bit (billions of colors)</td>
                      <td className="py-3 px-4 text-amber-600">8-bit (16.7M colors)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Transparency</td>
                      <td className="py-3 px-4 text-green-600">✅ Supported</td>
                      <td className="py-3 px-4 text-red-600">❌ Not supported</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 font-medium">Multiple Images</td>
                      <td className="py-3 px-4 text-green-600">✅ Yes (Live Photos, bursts)</td>
                      <td className="py-3 px-4 text-red-600">❌ No</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Browser Support</td>
                      <td className="py-3 px-4 text-amber-600">⚠️ Limited (Safari only)</td>
                      <td className="py-3 px-4 text-green-600">✅ Universal</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 font-medium">Windows Support</td>
                      <td className="py-3 px-4 text-amber-600">⚠️ Requires extension</td>
                      <td className="py-3 px-4 text-green-600">✅ Native</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Social Media Upload</td>
                      <td className="py-3 px-4 text-amber-600">⚠️ Usually converted</td>
                      <td className="py-3 px-4 text-green-600">✅ Universal</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">The Compatibility Problem</h4>
                    <p className="text-sm text-gray-700">
                      HEIC's main drawback is compatibility. While it's technically superior to JPG, many websites, applications, and older devices can't handle it. This is why many people convert their HEIC photos to JPG for sharing.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Why Apple Uses HEIC */}
            <section id="why-apple-uses-heic" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Does Apple Use HEIC?</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Apple adopted HEIC as the default format in iOS 11 (September 2017) for several compelling reasons:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                  <div className="text-2xl mb-2">💾</div>
                  <h3 className="font-bold text-gray-900 mb-2">Storage Savings</h3>
                  <p className="text-sm text-gray-700">
                    A 256GB iPhone can store roughly twice as many photos in HEIC format compared to JPG. For users who never delete photos, this is massive.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100">
                  <div className="text-2xl mb-2">🎨</div>
                  <h3 className="font-bold text-gray-900 mb-2">Better Quality</h3>
                  <p className="text-sm text-gray-700">
                    16-bit color depth captures more subtle color gradations, especially important for HDR photos and professional photography.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
                  <div className="text-2xl mb-2">📸</div>
                  <h3 className="font-bold text-gray-900 mb-2">Live Photos Support</h3>
                  <p className="text-sm text-gray-700">
                    HEIC can store the video portion of Live Photos in the same file as the image, keeping everything neatly packaged together.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100">
                  <div className="text-2xl mb-2">✏️</div>
                  <h3 className="font-bold text-gray-900 mb-2">Non-Destructive Editing</h3>
                  <p className="text-sm text-gray-700">
                    Photo edits are stored as instructions, not baked into the image. You can always revert to the original without quality loss.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                From Apple's perspective, HEIC is objectively better technology. The problem is that Apple moved to HEIC before the rest of the industry, creating compatibility issues that still persist today.
              </p>
            </section>

            {/* Section: Open HEIC on Windows */}
            <section id="open-heic-windows" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Open HEIC Files on Windows</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Windows 10 and 11 don't natively support HEIC files, but there are several solutions:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Install HEIF Image Extensions (Free)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        Microsoft offers a free extension from the Microsoft Store. Search for "HEIF Image Extensions" and install it. This adds basic HEIC viewing support to Windows.
                      </p>
                      <p className="text-xs text-gray-500">Note: You may also need "HEVC Video Extensions" ($0.99) for full support.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Use Our Free Online Converter (Recommended)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        For quick, hassle-free conversion without installing anything, use our <a href="/heic-to-jpg" className="text-blue-600 hover:underline font-medium">HEIC to JPG converter</a>. It works entirely in your browser—files never upload to any server.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Use Third-Party Software</h3>
                      <p className="text-gray-700 text-sm">
                        Programs like IrfanView (with plugins), XnView, or CopyTrans HEIC can open and convert HEIC files. These are useful for batch processing many files.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Convert HEIC */}
            <section id="convert-heic" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Convert HEIC to JPG</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Converting HEIC to JPG is the most practical solution for sharing photos. Here's how to do it:
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">🚀 Fastest Method: Online Converter</h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span className="text-gray-700">Go to <a href="/heic-to-jpg" className="text-blue-600 hover:underline font-medium">Pixselli HEIC to JPG Converter</a></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span className="text-gray-700">Drag and drop your HEIC file (or click to browse)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span className="text-gray-700">Adjust quality if needed (default 90% is great for most uses)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span className="text-gray-700">Click "Convert" and download your JPG</span>
                  </li>
                </ol>
                <p className="text-sm text-blue-800 mt-4 bg-blue-100 rounded-lg p-3">
                  💡 <strong>Privacy note:</strong> Our converter processes files entirely in your browser. Your photos never upload to any server—it's completely private.
                </p>
              </div>

              <h3 className="font-bold text-gray-900 mb-3">Other Conversion Options:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>On Mac:</strong> Preview app can export HEIC as JPG (File → Export)</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>On iPhone:</strong> Share to yourself via email (iOS auto-converts to JPG)</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>iCloud:</strong> Download photos via iCloud.com (auto-converts to JPG)</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>Batch conversion:</strong> Use desktop software like XnConvert for hundreds of files</li>
              </ul>
            </section>

            {/* Section: Stop iPhone HEIC */}
            <section id="stop-iphone-heic" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Stop iPhone from Taking HEIC Photos</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                If you want to avoid the hassle entirely, you can set your iPhone to capture photos in JPG format instead:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <Smartphone className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Change Camera Capture Format</h3>
                    <ol className="space-y-2 text-gray-700">
                      <li>1. Open <strong>Settings</strong> on your iPhone</li>
                      <li>2. Scroll down and tap <strong>Camera</strong></li>
                      <li>3. Tap <strong>Formats</strong></li>
                      <li>4. Select <strong>Most Compatible</strong> (instead of "High Efficiency")</li>
                    </ol>
                  </div>
                </div>
                <div className="bg-amber-100 rounded-lg p-3 text-sm text-amber-800">
                  ⚠️ <strong>Trade-off:</strong> Photos will take up roughly twice as much storage space on your iPhone. Make sure you have enough iCloud or device storage.
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Monitor className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Auto-Convert When Transferring to PC</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Alternatively, keep shooting in HEIC but have iOS convert automatically when transferring:
                    </p>
                    <ol className="space-y-2 text-gray-700 text-sm">
                      <li>1. Go to <strong>Settings → Photos</strong></li>
                      <li>2. Under "Transfer to Mac or PC", select <strong>Automatic</strong></li>
                    </ol>
                    <p className="text-gray-600 text-sm mt-3">
                      This keeps HEIC on your phone (saving space) but converts to JPG when you copy files to a computer.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion: HEIC is Great, But Compatibility Matters</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                HEIC is genuinely a better image format than JPG in terms of compression efficiency and features. Apple made a technically sound decision adopting it. The problem is that the rest of the world hasn't caught up yet.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Until HEIC support becomes universal (which may take years), you'll likely need to convert your iPhone photos for sharing, uploading to websites, or opening on Windows computers. The good news is that conversion is quick and easy with tools like our <a href="/heic-to-jpg" className="text-blue-600 hover:underline font-medium">free HEIC to JPG converter</a>.
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-3">🔧 Quick Tip Summary</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>✅ Keep shooting in HEIC to save storage on your iPhone</li>
                  <li>✅ Set iPhone to auto-convert when transferring to PC</li>
                  <li>✅ Use online converters for quick one-off conversions</li>
                  <li>✅ Install Windows HEIF extensions for native viewing</li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <section className="border-t border-gray-200 pt-8">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Convert Your HEIC Files Now</h3>
              <p className="text-gray-700 mb-6">
                Need to convert HEIC photos right now? Our free online converter works instantly in your browser with complete privacy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/heic-to-jpg"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Convert HEIC to JPG
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/heic-to-png"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-700 rounded-xl font-semibold transition-all"
                >
                  Convert HEIC to PNG
                </Link>
              </div>
            </section>

            {/* Share */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Found this helpful?</span>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share Article
                </button>
              </div>
            </div>

          </div>
        </div>
      </article>
    </main>
  );
}
