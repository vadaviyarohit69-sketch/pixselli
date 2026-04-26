"use client";

import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import BlogIndexStructuredData from '@/components/blog/BlogIndexStructuredData';
import { blogPostsData } from '@/lib/blogPostsData';
import {
  BLOG_INDEX_TRANSLATIONS,
  buildBlogIndexPath,
  buildBlogPostPath,
  getBlogPostLocalizedFields,
  getDateLocale,
  type BlogLocale,
} from '@/lib/blogI18n';

export default function BlogPage() {
  const { locale } = useLanguage();
  const dict = BLOG_INDEX_TRANSLATIONS[locale as BlogLocale];
  const tx = (en: string, es: string) => (locale === 'es' ? es : dict?.[en] ?? en);
  const toRoute = (slug?: string) => (slug ? buildBlogPostPath(locale as BlogLocale, slug) : buildBlogIndexPath(locale as BlogLocale));

  const sortedPosts = [...blogPostsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredPost = sortedPosts.find((post) => post.featured);
  const regularPosts = sortedPosts.filter((post) => !post.featured);

  const dateLocale = getDateLocale(locale as BlogLocale);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BlogIndexStructuredData locale={locale as BlogLocale} />

      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>{tx('Blog', 'Blog')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tx('Image Optimization Guides', 'Guias de optimizacion de imagenes')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx('Learn tips, workflows, and best practices for image quality, speed, and formats.', 'Aprende consejos, flujos y buenas practicas para calidad, velocidad y formatos de imagen.')}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {featuredPost && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{tx('Featured', 'Destacado')}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>

              <Link href={toRoute(featuredPost.slug)} className="block group">
                <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-300 hover:shadow-xl transition-all">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto min-h-[300px]">
                      <Image
                        src={featuredPost.coverImage}
                        alt={getBlogPostLocalizedFields(featuredPost.slug, locale as BlogLocale)?.title ?? featuredPost.title.en}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                          {getBlogPostLocalizedFields(featuredPost.slug, locale as BlogLocale)?.category ?? featuredPost.category.en}
                        </span>
                        <span className="text-sm text-gray-500">
                          {getBlogPostLocalizedFields(featuredPost.slug, locale as BlogLocale)?.readTime ?? featuredPost.readTime.en}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                        {getBlogPostLocalizedFields(featuredPost.slug, locale as BlogLocale)?.title ?? featuredPost.title.en}
                      </h2>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {getBlogPostLocalizedFields(featuredPost.slug, locale as BlogLocale)?.excerpt ?? featuredPost.excerpt.en}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">
                          {new Date(featuredPost.date).toLocaleDateString(dateLocale, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                          {tx('Read More', 'Leer mas')} <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          )}

          {regularPosts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{tx('All Articles', 'Todos los articulos')}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <Link key={post.id} href={toRoute(post.slug)} className="group">
                    <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-teal-300 hover:shadow-lg transition-all h-full flex flex-col">
                      <div
                        className={`h-1 ${
                          post.categoryColor === 'pink'
                            ? 'bg-gradient-to-r from-pink-500 to-purple-500'
                            : post.categoryColor === 'teal'
                              ? 'bg-gradient-to-r from-teal-500 to-emerald-500'
                              : post.categoryColor === 'blue'
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                                : post.categoryColor === 'emerald'
                                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600'
                                  : post.categoryColor === 'orange'
                                    ? 'bg-gradient-to-r from-orange-500 to-amber-500'
                                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                        }`}
                      ></div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                              post.categoryColor === 'pink'
                                ? 'bg-pink-50 text-pink-700'
                                : post.categoryColor === 'teal'
                                  ? 'bg-teal-50 text-teal-700'
                                  : post.categoryColor === 'blue'
                                    ? 'bg-blue-50 text-blue-700'
                                    : post.categoryColor === 'emerald'
                                      ? 'bg-emerald-50 text-emerald-700'
                                      : post.categoryColor === 'orange'
                                        ? 'bg-orange-50 text-orange-700'
                                        : 'bg-purple-50 text-purple-700'
                            }`}
                          >
                            {getBlogPostLocalizedFields(post.slug, locale as BlogLocale)?.category ?? post.category.en}
                          </span>
                          <span className="text-xs text-gray-400">
                            {getBlogPostLocalizedFields(post.slug, locale as BlogLocale)?.readTime ?? post.readTime.en}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2 flex-1">
                          {getBlogPostLocalizedFields(post.slug, locale as BlogLocale)?.title ?? post.title.en}
                        </h3>

                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {getBlogPostLocalizedFields(post.slug, locale as BlogLocale)?.excerpt ?? post.excerpt.en}
                        </p>

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString(dateLocale, {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          <ArrowRight className="w-4 h-4 text-teal-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {blogPostsData.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{tx('No Articles Yet', 'Aun no hay articulos')}</h2>
              <p className="text-gray-600">{tx('Check back soon for new guides and tutorials.', 'Vuelve pronto para nuevas guias y tutoriales.')}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
