import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock, User } from 'lucide-react';
import BlogStructuredData from '@/components/blog/BlogStructuredData';
import { getBlogPostBySlug } from '@/lib/blogPostsData';
import type { BlogSlug } from '@/lib/blogSpanishArticles';
import { blogExtraLocaleArticles, blogExtraLocaleEnhancements } from '@/lib/blogExtraLocaleContent';
import {
  buildBlogIndexPath,
  getBlogPostLocalizedFields,
  getBlogPostUiStrings,
  getDateLocale,
  type BlogLocale,
} from '@/lib/blogI18n';

type ExtraLocale = 'pt' | 'fr' | 'de' | 'it';

interface LocalizedBlogPostPageProps {
  slug: BlogSlug;
  locale: ExtraLocale;
}

export default function LocalizedBlogPostPage({ slug, locale }: LocalizedBlogPostPageProps) {
  const post = getBlogPostBySlug(slug);
  const content = blogExtraLocaleArticles[locale]?.[slug];
  const enhancement = blogExtraLocaleEnhancements[locale]?.[slug];
  const ui = getBlogPostUiStrings(locale as BlogLocale);

  if (!post || !content || !enhancement) {
    notFound();
  }

  const meta = getBlogPostLocalizedFields(slug, locale);
  const dateLocale = getDateLocale(locale);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BlogStructuredData slug={slug} locale={locale} faqs={enhancement.faqs} />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <Link
            href={buildBlogIndexPath(locale)}
            className="inline-flex items-center gap-2 text-white/75 hover:text-white text-sm font-medium mb-5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {ui.backToBlog}
          </Link>

          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-4">
              {meta?.category ?? post.category.en}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{meta?.title ?? post.title.en}</h1>
            <p className="text-white/85 text-base md:text-lg mb-6">{meta?.heroSubtitle ?? post.heroSubtitle.en}</p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/75">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString(dateLocale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {meta?.readTime ?? post.readTime.en}
              </span>
              <span className="inline-flex items-center gap-2">
                <User className="w-4 h-4" />
                {meta?.author ?? post.author.en}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="relative h-56 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image src={post.coverImage} alt={meta?.title ?? post.title.en} fill className="object-cover" priority />
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {content.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>

              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 mt-4">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-12 p-6 rounded-2xl border border-teal-100 bg-teal-50">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{ui.quickTipsTitle}</h2>
            <ul className="space-y-3">
              {content.quickTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 p-6 rounded-2xl border border-rose-100 bg-rose-50">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{ui.commonMistakesTitle}</h2>
            <ul className="space-y-3">
              {enhancement.commonMistakes.map((mistake) => (
                <li key={mistake} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" />
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 p-6 rounded-2xl border border-indigo-100 bg-indigo-50">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{ui.finalChecklistTitle}</h2>
            <ul className="space-y-3">
              {enhancement.finalChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 p-6 rounded-2xl border border-gray-200 bg-white">
            <h2 className="text-xl font-bold text-gray-900 mb-5">{ui.faqTitle}</h2>
            <div className="space-y-5">
              {enhancement.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.cta.title}</h3>
          <p className="text-gray-600 mb-5">{content.cta.description}</p>
          <Link
            href={content.cta.href}
            className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            {content.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </article>
    </main>
  );
}
