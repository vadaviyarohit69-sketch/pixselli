"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Maximize2,
  Crop,
  Gauge,
  RefreshCw,
  FileType,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizePath } from "@/lib/i18n";

export default function Footer() {
  const { locale, t } = useLanguage();
  const localePath = (path: string) => localizePath(path, locale);

  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-3">
              <Image
                src="/pixselli-footer-logo.svg"
                alt="Pixselli.com"
                width={280}
                height={70}
                className="w-auto h-10 md:h-12 object-contain"
                priority
              />
            </div>
            <p
              className="text-sm text-gray-600 leading-relaxed"
              style={{ maxWidth: "22rem" }}
            >
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-9 h-9 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:border-teal-600 hover:text-white transition-all group"
              >
                <Facebook className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-9 h-9 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:border-teal-600 hover:text-white transition-all group"
              >
                <Twitter className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-9 h-9 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:border-teal-600 hover:text-white transition-all group"
              >
                <Instagram className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {t("footer.popularTools")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={localePath("/image-resizer")}
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-2 group"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-gray-400 group-hover:text-teal-600" />
                  {t("footer.tool.imageResizer")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/image-cropper")}
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-2 group"
                >
                  <Crop className="w-3.5 h-3.5 text-gray-400 group-hover:text-teal-600" />
                  {t("footer.tool.imageCropper")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/image-compressor")}
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-2 group"
                >
                  <Gauge className="w-3.5 h-3.5 text-gray-400 group-hover:text-teal-600" />
                  {t("footer.tool.imageCompressor")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/png-to-jpg")}
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-2 group"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-gray-400 group-hover:text-teal-600" />
                  {t("footer.tool.pngToJpg")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/jpg-to-pdf")}
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-2 group"
                >
                  <FileType className="w-3.5 h-3.5 text-gray-400 group-hover:text-teal-600" />
                  {t("footer.tool.jpgToPdf")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={localePath("/about")}
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
                >
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/privacy")}
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/terms")}
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
                >
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/disclaimer")}
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
                >
                  {t("footer.disclaimer")}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath("/contact")}
                  className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {t("footer.newsletter")}
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              {t("footer.newsletterDesc")}
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                {t("footer.subscribe")}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} pixselli.com - {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
