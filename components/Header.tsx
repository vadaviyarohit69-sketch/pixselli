"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Maximize,
  FileImage,
  FileText,
  Home,
  Menu,
  X,
  Info,
  BookOpen,
  Languages,
  ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  getLocaleBasePath,
  localizePath,
  LOCALE_CODES,
  LOCALE_LABELS,
  Locale,
  SUPPORTED_LOCALES,
} from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localeMenuOpen, setLocaleMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const homeBase = getLocaleBasePath(locale) || "/";
  const localePath = (path: string) => localizePath(path, locale);
  const homeAnchor = (anchor: string) => `${homeBase}${anchor}`;
  const localeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!localeMenuRef.current) {
        return;
      }

      if (!localeMenuRef.current.contains(event.target as Node)) {
        setLocaleMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLocaleMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const onLocaleChange = (value: string) => {
    setLocale(value as Locale);
    setLocaleMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={homeBase} className="flex items-center group">
            <div className="h-10 md:h-12 flex items-center overflow-visible">
              <Image
                src="/pixselli-logo.svg"
                alt="Pixselli.com"
                width={240}
                height={60}
                className="w-auto h-10 object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-auto mr-8">
            <Link
              href={homeBase}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              {t("header.home")}
            </Link>
            <Link
              href={homeAnchor("#editing-tools")}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              <Maximize className="w-4 h-4" />
              {t("header.edit")}
            </Link>
            <Link
              href={homeAnchor("#compression-tools")}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              <FileImage className="w-4 h-4" />
              {t("header.compress")}
            </Link>
            <Link
              href={homeAnchor("#converter-tools")}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              <FileImage className="w-4 h-4" />
              {t("header.convert")}
            </Link>
            <Link
              href={homeAnchor("#pdf-tools")}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              <FileText className="w-4 h-4" />
              {t("header.pdfTools")}
            </Link>
            <Link
              href={localePath("/about")}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              <Info className="w-4 h-4" />
              {t("header.about")}
            </Link>
            <Link
              href={localePath("/blog")}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              {t("header.blog")}
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div ref={localeMenuRef} className="relative inline-block">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={localeMenuOpen}
                onClick={() => setLocaleMenuOpen((prev) => !prev)}
                className="inline-flex items-center gap-1.5 md:gap-2 rounded-lg md:rounded-xl border border-slate-200 bg-white px-2 py-1.5 md:px-3 md:py-2 shadow-sm transition-all hover:border-slate-300 hover:shadow"
              >
                <Languages
                  className="w-4 h-4 text-blue-600 hidden sm:inline-block"
                  aria-hidden="true"
                />
                <span className="text-[11px] md:text-xs font-semibold tracking-wide text-slate-500">
                  {LOCALE_CODES[locale]}
                </span>
                <span className="text-[13px] md:text-[15px] font-medium text-slate-800 hidden sm:inline-block">
                  {LOCALE_LABELS[locale]}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform ${localeMenuOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              {localeMenuOpen && (
                <div
                  role="menu"
                  aria-label={t("header.language")}
                  className="absolute right-0 top-full z-50 mt-2 w-36 sm:w-48 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
                >
                  <div className="border-b border-slate-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    {t("header.language")}
                  </div>
                  <div className="py-0.5">
                    {SUPPORTED_LOCALES.map((supportedLocale) => {
                      const isActive = supportedLocale === locale;

                      return (
                        <button
                          key={supportedLocale}
                          type="button"
                          onClick={() => onLocaleChange(supportedLocale)}
                          className={`flex w-full items-center justify-between px-3 py-2 text-left transition-colors ${
                            isActive
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <span
                              className={`w-6 text-xs font-semibold ${isActive ? "text-blue-600" : "text-slate-500"}`}
                            >
                              {LOCALE_CODES[supportedLocale]}
                            </span>
                            <span className="text-sm font-medium">
                              {LOCALE_LABELS[supportedLocale]}
                            </span>
                          </span>
                          {isActive ? (
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              <Link
                href={homeBase}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
              >
                <Home className="w-5 h-5" />
                {t("header.home")}
              </Link>
              <Link
                href={homeAnchor("#editing-tools")}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
              >
                <Maximize className="w-5 h-5" />
                {t("header.edit")}
              </Link>
              <Link
                href={homeAnchor("#compression-tools")}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
              >
                <FileImage className="w-5 h-5" />
                {t("header.compress")}
              </Link>
              <Link
                href={homeAnchor("#converter-tools")}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
              >
                <FileImage className="w-5 h-5" />
                {t("header.convert")}
              </Link>
              <Link
                href={homeAnchor("#pdf-tools")}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
              >
                <FileText className="w-5 h-5" />
                {t("header.pdfTools")}
              </Link>
              <Link
                href={localePath("/about")}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
              >
                <Info className="w-5 h-5" />
                {t("header.about")}
              </Link>
              <Link
                href={localePath("/blog")}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                {t("header.blog")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
