"use client";

import { useState } from "react";
import {
  RefreshCw,
  CheckCircle2,
  ChevronDown,
  Shield,
  Layers,
  Sparkles,
  FileImage,
  PenTool,
  AlertTriangle,
  Archive,
  Workflow,
} from "lucide-react";
import BulkImageVariantsCard from "@/components/BulkImageVariantsCard";
import { useLanguage } from "@/components/LanguageProvider";
import { translateReactNode } from "@/lib/translateReactNode";
import { WEBP_TO_PNG_TEXT_BY_LOCALE } from "@/lib/webpToPngTranslations";

export default function WebPtoPNGPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = WEBP_TO_PNG_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === "es") return es;
    return dict[en] ?? en;
  };

  const features = [
    {
      title: tx("Lossless PNG Output", "Salida PNG sin perdida"),
      desc: tx(
        "Export to PNG for broad compatibility and editing.",
        "Exporta a PNG para amplia compatibilidad y edicion.",
      ),
    },
    {
      title: tx("Transparency Handling", "Manejo de transparencia"),
      desc: tx(
        "PNG output supports alpha transparency.",
        "La salida PNG soporta transparencia alfa.",
      ),
    },
    {
      title: tx("Bulk Variants ZIP", "Variantes en ZIP"),
      desc: tx(
        "Generate variant outputs and download together.",
        "Genera salidas variantes y descarga juntas.",
      ),
    },
    {
      title: tx("Format Stability", "Estabilidad de formato"),
      desc: tx(
        "PNG is a reliable format for design and editing workflows.",
        "PNG es un formato confiable para flujos de diseno y edicion.",
      ),
    },
    {
      title: tx("Private Processing", "Procesamiento privado"),
      desc: tx(
        "Everything runs locally in browser.",
        "Todo se ejecuta localmente en el navegador.",
      ),
    },
    {
      title: tx("Free to Use", "Gratis para usar"),
      desc: tx("No account required.", "No requiere cuenta."),
    },
  ];

  const useCases = [
    {
      icon: <FileImage className="w-5 h-5 text-purple-600" />,
      title: tx("Editing Pipelines", "Flujos de edicion"),
      desc: tx(
        "Convert WebP into PNG before advanced editing in design tools.",
        "Convierte WebP a PNG antes de editar a fondo en herramientas de diseno.",
      ),
    },
    {
      icon: <PenTool className="w-5 h-5 text-blue-600" />,
      title: tx("Creative Assets", "Recursos creativos"),
      desc: tx(
        "Use PNG for logos, overlays, and graphics where predictable output matters.",
        "Usa PNG para logos, overlays y graficos donde importa una salida predecible.",
      ),
    },
    {
      icon: <Archive className="w-5 h-5 text-emerald-600" />,
      title: tx("Long-Term Storage", "Almacenamiento a largo plazo"),
      desc: tx(
        "Store assets in PNG when you want broad software compatibility over time.",
        "Guarda recursos en PNG cuando buscas compatibilidad amplia de software a futuro.",
      ),
    },
  ];

  const workflowHints = [
    tx(
      "Convert first, then edit: avoid repeated re-encoding across mixed formats.",
      "Convierte primero y luego edita: evita recodificaciones repetidas entre formatos mixtos.",
    ),
    tx(
      "Keep naming consistent (e.g., product-card-01.png) for cleaner team handoff.",
      "Mantén nombres consistentes (ej. product-card-01.png) para un traspaso mas limpio en equipo.",
    ),
    tx(
      "For large batches, download ZIP and review outputs in one pass.",
      "Para lotes grandes, descarga ZIP y revisa salidas en una sola pasada.",
    ),
  ];

  const faqs = [
    {
      q: tx("Why convert WebP to PNG?", "Por que convertir WebP a PNG?"),
      a: tx(
        "PNG is often preferred for editing workflows and maximum software compatibility.",
        "PNG suele preferirse para flujos de edicion y maxima compatibilidad de software.",
      ),
    },
    {
      q: tx("Will the output size increase?", "Aumenta el tamano de salida?"),
      a: tx(
        "It can increase depending on image content because PNG is lossless.",
        "Puede aumentar segun el contenido porque PNG es sin perdida.",
      ),
    },
    {
      q: tx(
        "Will conversion improve quality?",
        "La conversion mejora la calidad?",
      ),
      a: tx(
        "Converting to PNG does not restore details already lost in the source. It preserves current quality in a lossless container.",
        "Convertir a PNG no recupera detalles ya perdidos en el archivo original. Conserva la calidad actual en un contenedor sin perdida.",
      ),
    },
    {
      q: tx(
        "Is PNG better for editing than WebP?",
        "PNG es mejor para editar que WebP?",
      ),
      a: tx(
        "For many design workflows, yes. PNG is widely accepted and easier to manage across diverse editing tools.",
        "Para muchos flujos de diseno, si. PNG es ampliamente aceptado y mas facil de manejar entre distintas herramientas de edicion.",
      ),
    },
    {
      q: tx("Is conversion private?", "La conversion es privada?"),
      a: tx(
        "Yes. Files are processed in your browser and are not uploaded to servers.",
        "Si. Los archivos se procesan en tu navegador y no se suben a servidores.",
      ),
    },
    {
      q: tx(
        "Can I convert multiple WebP files at once?",
        "Puedo convertir varios WebP al mismo tiempo?",
      ),
      a: tx(
        "Yes. Upload multiple WebP images and export PNG variants together in ZIP.",
        "Si. Sube varias imagenes WebP y exporta variantes PNG juntas en ZIP.",
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
                {tx("WebP to PNG Converter", "Convertidor WebP a PNG")}
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
            {tx("WebP to PNG Converter", "Convertidor WebP a PNG")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              "Convert WebP images to PNG for compatibility and lossless output workflows.",
              "Convierte imagenes WebP a PNG para compatibilidad y flujos de salida sin perdida.",
            )}
          </p>
        </header>

        <BulkImageVariantsCard
          uploadTitle={tx(
            "Upload WebP Image to Convert",
            "Sube una imagen WebP para convertir",
          )}
          accept="image/webp"
          validateFile={(file) => {
            const isWebpMime = file.type.startsWith("image/webp");
            const isWebpExt = /\.webp$/i.test(file.name);
            if (isWebpMime || isWebpExt) return null;
            return tx(
              "Please select a WebP image file",
              "Por favor selecciona un archivo de imagen WebP",
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
                  "You keep full control from upload to download, ideal for personal and business content.",
                  "Mantienes control total desde la subida hasta la descarga, ideal para contenido personal y de negocio.",
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
                "This converter turns WebP images into PNG format while preserving quality and transparency support where applicable.",
                "Este convertidor transforma imagenes WebP a formato PNG conservando calidad y soporte de transparencia cuando aplica.",
              )}
            </p>
            <p>
              {tx(
                "It is useful when downstream tools, design workflows, or publishing systems need PNG as a standard format.",
                "Es util cuando herramientas posteriores, flujos de diseno o sistemas de publicacion necesitan PNG como formato estandar.",
              )}
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-900">
              {tx(
                "Why teams convert WebP to PNG",
                "Por que los equipos convierten WebP a PNG",
              )}
            </h2>
          </div>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              {tx(
                "WebP is great for delivery performance, but PNG can be more practical for editing, QA review, and cross-tool consistency.",
                "WebP es excelente para rendimiento de entrega, pero PNG puede ser mas practico para edicion, revision QA y consistencia entre herramientas.",
              )}
            </p>
            <p>
              {tx(
                "When multiple contributors work across different software, PNG can reduce format friction in handoff stages.",
                "Cuando varios colaboradores trabajan con software diferente, PNG puede reducir friccion de formato en etapas de entrega.",
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
            <Workflow className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-900">
              {tx("Workflow tips", "Consejos de flujo")}
            </h2>
          </div>
          <div className="space-y-3">
            {workflowHints.map((hint, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-gray-700 leading-relaxed"
              >
                {hint}
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 rounded-lg border border-amber-200 bg-amber-50 text-sm text-amber-900 leading-relaxed">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                <strong>{tx("Important:", "Importante:")}</strong>{" "}
                {tx(
                  "Converting WebP to PNG will not recover details that may have been lost in earlier compression. It preserves current visual data.",
                  "Convertir WebP a PNG no recupera detalles que pudieron perderse por compresion previa. Conserva los datos visuales actuales.",
                )}
              </p>
            </div>
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
