"use client";

import { Search, Zap, Lock, UserX, ArrowUp } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { allTools } from "@/lib/toolsData";
import { useLanguage } from "@/components/LanguageProvider";
import { getLocaleBasePath } from "@/lib/i18n";
import { localizeTools } from "@/lib/toolTranslations";
import {
  buildBlogIndexPath,
  buildBlogPostPath,
  type BlogLocale,
} from "@/lib/blogI18n";

export default function Home() {
  const { locale, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const localeBaseUrl = `https://pixselli.com${getLocaleBasePath(locale)}`;
  const blogLocale = locale as BlogLocale;
  const blogIndexHref = buildBlogIndexPath(blogLocale);
  const blogPost1Href = buildBlogPostPath(
    blogLocale,
    "what-is-heic-format-complete-guide",
  );
  const blogPost2Href = buildBlogPostPath(
    blogLocale,
    "how-to-compress-images-without-losing-quality",
  );
  const blogPost3Href = buildBlogPostPath(
    blogLocale,
    "jpg-vs-png-vs-webp-which-image-format-should-you-use",
  );
  const localizedTools = useMemo(
    () => localizeTools(allTools, locale),
    [locale],
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".search-container")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter tools based on search query
  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return localizedTools.filter(
      (tool) =>
        tool.title.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query),
    );
  }, [searchQuery, localizedTools]);

  // Get tools by color/category
  const getToolsByColor = (color: string) => {
    return localizedTools.filter((tool) => tool.color === color);
  };

  // Helper function to get color classes
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> =
      {
        blue: {
          bg: "bg-blue-50",
          text: "text-blue-600",
          border: "border-blue-400",
        },
        purple: {
          bg: "bg-purple-50",
          text: "text-purple-600",
          border: "border-purple-400",
        },
        emerald: {
          bg: "bg-emerald-50",
          text: "text-emerald-600",
          border: "border-emerald-400",
        },
        orange: {
          bg: "bg-orange-50",
          text: "text-orange-600",
          border: "border-orange-400",
        },
      };
    return colors[color] || colors.blue;
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: t("home.seo.webAppName"),
    url: localeBaseUrl,
    description: t("home.seo.webAppDescription"),
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      t("home.seo.feature.converter"),
      t("home.seo.feature.compressor"),
      t("home.seo.feature.resizer"),
      t("home.seo.feature.cropper"),
      t("home.seo.feature.editor"),
      t("home.seo.feature.pdf"),
    ],
    screenshot: "https://pixselli.com/screenshot.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pixselli",
    url: "https://pixselli.com",
    logo: "https://pixselli.com/logo.png",
    sameAs: [
      "https://twitter.com/pixselli",
      "https://facebook.com/pixselli",
      "https://instagram.com/pixselli",
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("home.seo.breadcrumbHome"),
        item: localeBaseUrl,
      },
    ],
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <main className="bg-gray-50">
        {/* Hero Section */}
        <section
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          aria-label={t("home.heroAria")}
        >
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t("home.title")}
            </h1>

            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              {t("home.subtitle")}
            </p>

            <div className="max-w-xl mx-auto pt-2">
              <div
                className="relative search-container"
                role="search"
                aria-label={t("home.searchAria")}
              >
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                  <Search className="w-5 h-5 text-teal-600" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder={t("home.searchPlaceholder")}
                  className="w-full pl-12 pr-4 py-3.5 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:shadow-lg transition-all bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                />

                {/* Dropdown Search Results */}
                {searchQuery.trim() && showDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-teal-300 rounded-xl shadow-2xl max-h-96 overflow-y-auto z-50">
                    {filteredTools.length > 0 ? (
                      <>
                        <div className="sticky top-0 bg-teal-50 px-4 py-2 border-b border-teal-200">
                          <p className="text-sm text-teal-800 font-medium">
                            {filteredTools.length}{" "}
                            {filteredTools.length === 1
                              ? t("home.toolFound")
                              : t("home.resultsFound")}
                          </p>
                        </div>
                        <div className="divide-y divide-gray-100">
                          {filteredTools.map((tool) => {
                            const Icon = tool.icon;
                            return (
                              <Link
                                key={tool.href}
                                href={tool.href}
                                onClick={() => setShowDropdown(false)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                              >
                                <div
                                  className={`w-10 h-10 ${tool.color === "blue" ? "bg-blue-50" : tool.color === "purple" ? "bg-purple-50" : tool.color === "emerald" ? "bg-emerald-50" : "bg-orange-50"} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                                >
                                  <Icon
                                    className={`w-5 h-5 ${tool.color === "blue" ? "text-blue-600" : tool.color === "purple" ? "text-purple-600" : tool.color === "emerald" ? "text-emerald-600" : "text-orange-600"}`}
                                  />
                                </div>
                                <div className="flex-1 min-w-0 text-left">
                                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                                    {tool.title}
                                  </h4>
                                  <p className="text-xs text-gray-600 mt-0.5">
                                    {tool.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <div className="px-4 py-8 text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Search className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          {t("home.noTools")}
                        </p>
                        <p className="text-xs text-gray-500">
                          {t("home.tryKeywords")}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg shadow-sm">
                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center shadow-sm">
                  <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-bold text-blue-900">
                  {t("home.instant")}
                </span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-300 rounded-lg shadow-sm">
                <div className="w-7 h-7 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-md flex items-center justify-center shadow-sm">
                  <Lock className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-bold text-emerald-900">
                  {t("home.secure")}
                </span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-300 rounded-lg shadow-sm">
                <div className="w-7 h-7 bg-gradient-to-br from-amber-500 to-amber-600 rounded-md flex items-center justify-center shadow-sm">
                  <UserX className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-bold text-amber-900">
                  {t("home.noSignup")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Image Editing Tools Section */}
        <section
          id="editing-tools"
          className="py-12"
          aria-labelledby="editing-tools-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2
                id="editing-tools-heading"
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
              >
                {t("home.editingTitle")}
              </h2>
              <p className="text-base text-gray-600">{t("home.editingDesc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getToolsByColor("blue").map((tool) => {
                const IconComponent = tool.icon;
                const colorClasses = getColorClasses(tool.color);
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={`group p-4 bg-white border border-gray-200 rounded-xl hover:${colorClasses.border} hover:shadow-md transition-all`}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`w-10 h-10 ${colorClasses.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent
                          className={`w-5 h-5 ${colorClasses.text}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Image Compression & Optimization Tools Section */}
        <section
          id="compression-tools"
          className="py-12"
          aria-labelledby="compression-tools-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2
                id="compression-tools-heading"
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
              >
                {t("home.compressionTitle")}
              </h2>
              <p className="text-base text-gray-600">
                {t("home.compressionDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getToolsByColor("purple").map((tool) => {
                const IconComponent = tool.icon;
                const colorClasses = getColorClasses(tool.color);
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={`group p-4 bg-white border border-gray-200 rounded-xl hover:${colorClasses.border} hover:shadow-md transition-all`}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`w-10 h-10 ${colorClasses.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent
                          className={`w-5 h-5 ${colorClasses.text}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Image Format Converter Tools Section */}
        <section
          id="converter-tools"
          className="py-12"
          aria-labelledby="converter-tools-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2
                id="converter-tools-heading"
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
              >
                {t("home.converterTitle")}
              </h2>
              <p className="text-base text-gray-600">
                {t("home.converterDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getToolsByColor("emerald").map((tool) => {
                const IconComponent = tool.icon;
                const colorClasses = getColorClasses(tool.color);
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={`group p-4 bg-white border border-gray-200 rounded-xl hover:${colorClasses.border} hover:shadow-md transition-all`}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`w-10 h-10 ${colorClasses.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent
                          className={`w-5 h-5 ${colorClasses.text}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Image To PDF Converter Tools Section */}
        <section
          id="pdf-tools"
          className="py-12"
          aria-labelledby="pdf-tools-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2
                id="pdf-tools-heading"
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
              >
                {t("home.pdfTitle")}
              </h2>
              <p className="text-base text-gray-600">{t("home.pdfDesc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getToolsByColor("orange").map((tool) => {
                const IconComponent = tool.icon;
                const colorClasses = getColorClasses(tool.color);
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={`group p-4 bg-white border border-gray-200 rounded-xl hover:${colorClasses.border} hover:shadow-md transition-all`}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`w-10 h-10 ${colorClasses.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent
                          className={`w-5 h-5 ${colorClasses.text}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {t("home.whyTitle")}
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                {t("home.whyDesc")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  🚀 {t("home.why.fastTitle")}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t("home.why.fastDesc")}
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200">
                <h3 className="text-lg font-bold text-emerald-900 mb-3">
                  🔒 {t("home.why.secureTitle")}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t("home.why.secureDesc")}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <h3 className="text-lg font-bold text-purple-900 mb-3">
                  💎 {t("home.why.qualityTitle")}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t("home.why.qualityDesc")}
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                <h3 className="text-lg font-bold text-orange-900 mb-3">
                  🎯 {t("home.why.noRegTitle")}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t("home.why.noRegDesc")}
                </p>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("home.suiteTitle")}
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed mb-5">
                {t("home.suiteIntro")}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-5">
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {t("home.suite.formatTitle")}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t("home.suite.formatDesc")}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {t("home.suite.compressionTitle")}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t("home.suite.compressionDesc")}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {t("home.suite.pdfTitle")}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t("home.suite.pdfDesc")}
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {t("home.suite.editTitle")}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t("home.suite.editDesc")}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                {t("home.suiteOutro")}
              </p>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {t("home.blogTitle")}
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                {t("home.blogDesc")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Blog Post 1 - NEW */}
              <article className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full font-medium">
                    {t("home.blog.badgeFormat")}
                  </span>
                  <span>•</span>
                  <span>{t("home.blog.minRead8")}</span>
                </div>
                <Link href={blogPost1Href}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors cursor-pointer">
                    {t("home.blog.post1Title")}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {t("home.blog.post1Desc")}
                </p>
                <Link
                  href={blogPost1Href}
                  className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  {t("home.readMore")}
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>

              {/* Blog Post 2 */}
              <article className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">
                    {t("home.blog.badgeGuide")}
                  </span>
                  <span>•</span>
                  <span>{t("home.blog.minRead8")}</span>
                </div>
                <Link href={blogPost2Href}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer">
                    {t("home.blog.post2Title")}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {t("home.blog.post2Desc")}
                </p>
                <Link
                  href={blogPost2Href}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {t("home.readMore")}
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>

              {/* Blog Post 3 */}
              <article className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full font-medium">
                    {t("home.blog.badgeComparison")}
                  </span>
                  <span>•</span>
                  <span>{t("home.blog.minRead6")}</span>
                </div>
                <Link href={blogPost3Href}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors cursor-pointer">
                    {t("home.blog.post3Title")}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {t("home.blog.post3Desc")}
                </p>
                <Link
                  href={blogPost3Href}
                  className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  {t("home.readMore")}
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            </div>

            <div className="text-center">
              <Link
                href={blogIndexHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
              >
                {t("home.viewAllBlogs")}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all z-50"
            aria-label={t("home.scrollTop")}
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </main>
    </>
  );
}
