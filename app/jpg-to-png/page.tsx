"use client";

import { useState } from "react";
import {
  RefreshCw,
  ChevronDown,
  CheckCircle2,
  Shield,
  Layers,
  Sparkles,
  Palette,
  FileImage,
  PenTool,
  AlertTriangle,
} from "lucide-react";
import BulkImageVariantsCard from "@/components/BulkImageVariantsCard";
import { useLanguage } from "@/components/LanguageProvider";
import { translateReactNode } from "@/lib/translateReactNode";
import { JPG_TO_PNG_TEXT_BY_LOCALE } from "@/lib/jpgToPngTranslations";

export default function JPGtoPNGPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = JPG_TO_PNG_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === "es") return es;
    return dict[en] ?? en;
  };

  const features = [
    {
      title: tx("Lossless PNG Output", "Salida PNG sin perdida"),
      desc: tx(
        "Create PNG files with clean, stable quality.",
        "Crea archivos PNG con calidad limpia y estable.",
      ),
    },
    {
      title: tx("Transparency Workflow", "Flujo con transparencia"),
      desc: tx(
        "PNG is ideal for assets that may later need transparent backgrounds or layered editing.",
        "PNG es ideal para recursos que luego pueden necesitar fondo transparente o edicion por capas.",
      ),
    },
    {
      title: tx("Design-Friendly Format", "Formato para diseno"),
      desc: tx(
        "Useful for UI elements, logos, icons, and graphics pipelines.",
        "Util para elementos UI, logos, iconos y flujos de trabajo graficos.",
      ),
    },
    {
      title: tx("Bulk Variants ZIP", "Variantes en ZIP"),
      desc: tx(
        "Generate and download multiple output variants together.",
        "Genera y descarga multiples variantes juntas.",
      ),
    },
    {
      title: tx("Client-Side Processing", "Procesamiento en cliente"),
      desc: tx(
        "Your images stay on your device.",
        "Tus imagenes permanecen en tu dispositivo.",
      ),
    },
    {
      title: tx("Always Free", "Siempre gratis"),
      desc: tx("No account or payment needed.", "Sin cuenta ni pago."),
    },
  ];

  const useCases = [
    {
      icon: <Palette className="w-5 h-5 text-purple-600" />,
      title: tx("Creative Editing", "Edicion creativa"),
      desc: tx(
        "PNG helps preserve clean edges for repeated edits in design workflows.",
        "PNG ayuda a mantener bordes limpios para ediciones repetidas en flujos de diseno.",
      ),
    },
    {
      icon: <FileImage className="w-5 h-5 text-blue-600" />,
      title: tx("Product & UI Assets", "Recursos de producto y UI"),
      desc: tx(
        "Use PNG for buttons, cards, overlays, and visual assets where sharp detail matters.",
        "Usa PNG para botones, tarjetas, superposiciones y recursos visuales donde importan los detalles nitidos.",
      ),
    },
    {
      icon: <PenTool className="w-5 h-5 text-emerald-600" />,
      title: tx("Future Transparency", "Transparencia futura"),
      desc: tx(
        "If you plan to remove backgrounds later, PNG is often the safer destination format.",
        "Si planeas quitar fondos despues, PNG suele ser el formato de destino mas seguro.",
      ),
    },
  ];

  const faqs = [
    {
      q: tx("Why convert JPG to PNG?", "Por que convertir JPG a PNG?"),
      a: tx(
        "PNG is useful when you need lossless quality, graphics workflows, or format consistency.",
        "PNG es util cuando necesitas calidad sin perdida, flujos graficos o consistencia de formato.",
      ),
    },
    {
      q: tx(
        "Will file size increase?",
        "El tamano del archivo puede aumentar?",
      ),
      a: tx(
        "In many cases yes, because PNG uses lossless compression. The exact size depends on image content.",
        "En muchos casos si, porque PNG usa compresion sin perdida. El tamano exacto depende del contenido de la imagen.",
      ),
    },
    {
      q: tx(
        "Will converting JPG to PNG restore lost quality?",
        "Convertir JPG a PNG recupera calidad perdida?",
      ),
      a: tx(
        "No. PNG preserves current quality moving forward, but it cannot recover details that were already lost in the original JPG compression.",
        "No. PNG preserva la calidad actual hacia adelante, pero no recupera detalles que ya se perdieron en la compresion JPG original.",
      ),
    },
    {
      q: tx(
        "Is PNG better for logos and graphics?",
        "PNG es mejor para logos y graficos?",
      ),
      a: tx(
        "Usually yes, especially for sharp edges, text overlays, and assets that may need additional editing.",
        "Normalmente si, especialmente para bordes nitidos, texto superpuesto y recursos que pueden requerir mas edicion.",
      ),
    },
    {
      q: tx("Is my image private?", "Mi imagen es privada?"),
      a: tx(
        "Yes. Conversion runs in your browser and files are not sent to servers.",
        "Si. La conversion ocurre en tu navegador y los archivos no se envian a servidores.",
      ),
    },
    {
      q: tx(
        "Can I convert multiple JPG files at once?",
        "Puedo convertir varios JPG al mismo tiempo?",
      ),
      a: tx(
        "Yes. Upload multiple JPG files and export PNG variants together in ZIP when needed.",
        "Si. Sube varios JPG y exporta variantes PNG juntas en ZIP cuando sea necesario.",
      ),
    },
  ];

  const page = (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <nav className="mb-12" aria-label="Breadcrumb">
          <ol
            itemScope
            itemType="https://schema.org/BreadcrumbList"
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a
                itemProp="item"
                href={locale === "es" ? "/es" : "/"}
                className="hover:text-purple-600 transition-colors"
              >
                <span itemProp="name">{tx("Home", "Inicio")}</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-400">/</li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span itemProp="name" className="text-gray-900 font-medium">
                {tx("JPG to PNG Converter", "Convertidor JPG a PNG")}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {tx("JPG to PNG Converter", "Convertidor JPG a PNG")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              "Convert JPG images to PNG format quickly for cleaner graphics workflows.",
              "Convierte imagenes JPG a formato PNG rapidamente para flujos graficos mas limpios.",
            )}
          </p>
        </header>

        <BulkImageVariantsCard
          uploadTitle={tx(
            "Upload JPG Image to Convert",
            "Sube una imagen JPG para convertir",
          )}
          accept="image/jpeg"
          validateFile={(file) => {
            const isJpgMime = file.type.startsWith("image/jpeg");
            const isJpgExt = /\.jpe?g$/i.test(file.name);
            if (isJpgMime || isJpgExt) return null;
            return tx(
              "Please select a JPG image file",
              "Por favor selecciona un archivo de imagen JPG",
            );
          }}
          defaultFormats={["png"]}
          enableMarketplaceWorkflow
        />

        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center shadow-sm">
              <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {tx("Privacy and security", "Privacidad y seguridad")}
              </h2>
              <p className="text-sm text-emerald-800 mt-1">
                {tx(
                  "Secure by default: conversion happens locally in your browser.",
                  "Seguro por defecto: la conversion ocurre localmente en tu navegador.",
                )}
              </p>
            </div>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/80 border border-emerald-200 p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {tx(
                  "Your files are processed on your own device, not uploaded to a remote server.",
                  "Tus archivos se procesan en tu propio dispositivo, no se suben a un servidor remoto.",
                )}
              </p>
            </div>
            <div className="rounded-xl bg-white/80 border border-emerald-200 p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {tx(
                  "You keep control from upload to download, which is ideal for personal or business assets.",
                  "Tu mantienes el control desde la subida hasta la descarga, ideal para recursos personales o de negocio.",
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {tx("About this tool", "Sobre esta herramienta")}
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              {tx(
                "This converter exports JPG images as PNG while keeping conversion fully in-browser. It is useful for design files, screenshots, and workflow compatibility.",
                "Este convertidor exporta imagenes JPG como PNG manteniendo todo el proceso en el navegador. Es util para diseno, capturas y compatibilidad de flujo de trabajo.",
              )}
            </p>
            <p>
              {tx(
                "If your next step is editing, compositing, or storing stable graphics assets, PNG can be a better destination than JPG for long-term workflow consistency.",
                "Si tu siguiente paso es editar, componer o guardar recursos graficos estables, PNG puede ser mejor destino que JPG para mantener consistencia a largo plazo.",
              )}
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-900">
              {tx(
                "When this conversion adds value",
                "Cuando esta conversion aporta valor",
              )}
            </h2>
          </div>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              {tx(
                "JPG is efficient for photos, but PNG is often preferred in graphic workflows because it avoids additional lossy recompression during future edits.",
                "JPG es eficiente para fotos, pero PNG suele preferirse en flujos graficos porque evita recompresion con perdida en futuras ediciones.",
              )}
            </p>
            <p>
              {tx(
                "This means more predictable output quality when assets pass through multiple tools, teams, or export cycles.",
                "Esto significa una calidad de salida mas predecible cuando los recursos pasan por varias herramientas, equipos o ciclos de exportacion.",
              )}
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {tx("Features", "Caracteristicas")}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-3 mb-6">
            <Layers className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-900">
              {tx("Best use cases", "Mejores casos de uso")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {useCases.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-gray-50 border border-gray-200 rounded-xl"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-900">
              {tx("Important quality note", "Nota importante sobre calidad")}
            </h2>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 leading-relaxed">
            {tx(
              "Converting JPG to PNG does not restore details already lost in JPG compression. It preserves the current quality and gives you a more stable format for future editing.",
              "Convertir JPG a PNG no recupera detalles ya perdidos por compresion JPG. Conserva la calidad actual y te da un formato mas estable para futuras ediciones.",
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {tx("Frequently Asked Questions", "Preguntas frecuentes")}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );

  return translateReactNode(page, dict);
}
