"use client";

import { useState } from "react";
import {
  RefreshCw,
  ChevronDown,
  CheckCircle2,
  Shield,
  Zap,
  Layers,
  Gauge,
  Globe,
  Smartphone,
  AlertTriangle,
} from "lucide-react";
import BulkImageVariantsCard from "@/components/BulkImageVariantsCard";
import { useLanguage } from "@/components/LanguageProvider";
import { translateReactNode } from "@/lib/translateReactNode";
import { PNG_TO_WEBP_TEXT_BY_LOCALE } from "@/lib/pngToWebpTranslations";

export default function PNGtoWebPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = PNG_TO_WEBP_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === "es") return es;
    return dict[en] ?? en;
  };

  const features = [
    {
      title: tx("Better Compression", "Mejor compresion"),
      desc: tx(
        "WebP often reduces file size while keeping good quality.",
        "WebP suele reducir tamano manteniendo buena calidad.",
      ),
    },
    {
      title: tx("Transparency Support", "Soporte de transparencia"),
      desc: tx(
        "Keep alpha transparency from PNG in WebP output.",
        "Mantiene transparencia alfa de PNG en salida WebP.",
      ),
    },
    {
      title: tx("Bulk Variants ZIP", "Variantes en ZIP"),
      desc: tx(
        "Create multiple variants and download as one ZIP.",
        "Crea multiples variantes y descarga en un solo ZIP.",
      ),
    },
    {
      title: tx("Quality Control", "Control de calidad"),
      desc: tx(
        "Adjust output quality according to your use case.",
        "Ajusta calidad de salida segun tu caso de uso.",
      ),
    },
    {
      title: tx("Private in Browser", "Privado en navegador"),
      desc: tx(
        "All processing stays on your device.",
        "Todo el procesamiento queda en tu dispositivo.",
      ),
    },
    {
      title: tx("Free Tool", "Herramienta gratuita"),
      desc: tx(
        "No signup and no hidden charges.",
        "Sin registro y sin cargos ocultos.",
      ),
    },
  ];

  const useCases = [
    {
      icon: <Globe className="w-5 h-5 text-purple-600" />,
      title: tx("Website Performance", "Rendimiento web"),
      desc: tx(
        "Use WebP to reduce image payload and improve page speed metrics.",
        "Usa WebP para reducir peso de imagen y mejorar metricas de velocidad.",
      ),
    },
    {
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
      title: tx("Mobile Experience", "Experiencia movil"),
      desc: tx(
        "Smaller images load faster on slower networks and lower-end devices.",
        "Imagenes mas ligeras cargan mejor en redes lentas y dispositivos modestos.",
      ),
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      title: tx("Transparent Assets", "Recursos transparentes"),
      desc: tx(
        "WebP can retain PNG transparency while still reducing size in many cases.",
        "WebP puede conservar transparencia de PNG y aun asi reducir tamano en muchos casos.",
      ),
    },
  ];

  const qualityGuide = [
    {
      level: tx("High (90-100)", "Alta (90-100)"),
      note: tx(
        "Use when visual fidelity is top priority, such as hero images or detailed graphics.",
        "Usa este nivel cuando la fidelidad visual sea prioridad, como imagenes destacadas o graficos detallados.",
      ),
    },
    {
      level: tx("Balanced (75-89)", "Equilibrada (75-89)"),
      note: tx(
        "Best default for most websites: good quality with meaningful size reduction.",
        "Mejor opcion por defecto para la mayoria de sitios: buena calidad con reduccion notable de tamano.",
      ),
    },
    {
      level: tx("Compact (60-74)", "Compacta (60-74)"),
      note: tx(
        "Useful when strict file-size limits matter more than fine visual details.",
        "Util cuando los limites de tamano importan mas que los detalles finos de imagen.",
      ),
    },
  ];

  const faqs = [
    {
      q: tx("Why convert PNG to WebP?", "Por que convertir PNG a WebP?"),
      a: tx(
        "WebP helps reduce image size for faster websites and lower bandwidth usage.",
        "WebP ayuda a reducir tamano de imagen para sitios mas rapidos y menor uso de ancho de banda.",
      ),
    },
    {
      q: tx("Will transparency be preserved?", "Se conserva la transparencia?"),
      a: tx(
        "Yes. WebP supports transparency, so transparent PNG areas can be retained.",
        "Si. WebP soporta transparencia, por eso se pueden conservar areas transparentes de PNG.",
      ),
    },
    {
      q: tx(
        "Is WebP always smaller than PNG?",
        "WebP siempre es mas pequeno que PNG?",
      ),
      a: tx(
        "Not always, but often. File size depends on image complexity, transparency, and selected quality level.",
        "No siempre, pero muchas veces si. El tamano final depende de complejidad, transparencia y nivel de calidad elegido.",
      ),
    },
    {
      q: tx("Can I use WebP everywhere?", "Puedo usar WebP en todos lados?"),
      a: tx(
        "Most modern browsers and platforms support WebP. For legacy systems, you may still want JPG/PNG fallback files.",
        "La mayoria de navegadores y plataformas modernas soportan WebP. Para sistemas antiguos, conviene mantener versiones JPG/PNG de respaldo.",
      ),
    },
    {
      q: tx("Is conversion secure?", "La conversion es segura?"),
      a: tx(
        "Yes. Files are processed in your browser and are not uploaded to servers.",
        "Si. Los archivos se procesan en tu navegador y no se suben a servidores.",
      ),
    },
    {
      q: tx(
        "Can I convert multiple PNG files at once?",
        "Puedo convertir varios PNG al mismo tiempo?",
      ),
      a: tx(
        "Yes. Upload multiple PNG files and export multiple WebP variants in one ZIP when needed.",
        "Si. Puedes subir varios PNG y exportar variantes WebP juntas en un ZIP cuando lo necesites.",
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
                {tx("PNG to WebP Converter", "Convertidor PNG a WebP")}
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
            {tx("PNG to WebP Converter", "Convertidor PNG a WebP")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              "Convert PNG images to WebP for modern compression and faster delivery.",
              "Convierte imagenes PNG a WebP para compresion moderna y entrega mas rapida.",
            )}
          </p>
        </header>

        <BulkImageVariantsCard
          uploadTitle={tx(
            "Upload PNG Image to Convert",
            "Sube una imagen PNG para convertir",
          )}
          accept="image/png"
          validateFile={(file) => {
            const isPngMime = file.type.startsWith("image/png");
            const isPngExt = /\.png$/i.test(file.name);
            if (isPngMime || isPngExt) return null;
            return tx(
              "Please select a PNG image file",
              "Por favor selecciona un archivo de imagen PNG",
            );
          }}
          defaultFormats={["webp"]}
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
                  "You keep control from upload to download, ideal for personal and business content.",
                  "Tu mantienes el control desde la subida hasta la descarga, ideal para contenido personal y de negocio.",
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
                "Use this tool to convert PNG files into WebP format with strong compression while maintaining visual quality.",
                "Usa esta herramienta para convertir archivos PNG a formato WebP con buena compresion manteniendo calidad visual.",
              )}
            </p>
            <p>
              {tx(
                "It is especially useful when you need faster image delivery at scale, such as blogs, e-commerce catalogs, and media-heavy landing pages.",
                "Es especialmente util cuando necesitas entregar imagenes mas rapido a escala, como blogs, catalogos e-commerce y paginas con mucho contenido visual.",
              )}
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-900">
              {tx(
                "Why WebP helps modern delivery",
                "Por que WebP mejora la entrega moderna",
              )}
            </h2>
          </div>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              {tx(
                "Compared to traditional formats, WebP can often provide better compression efficiency. That means faster loads, improved user experience, and reduced hosting bandwidth costs.",
                "Comparado con formatos tradicionales, WebP suele ofrecer mejor eficiencia de compresion. Eso significa cargas mas rapidas, mejor experiencia de usuario y menor consumo de ancho de banda.",
              )}
            </p>
            <p>
              {tx(
                "For teams optimizing Core Web Vitals, converting heavy PNG assets to WebP is one of the easiest high-impact improvements.",
                "Para equipos que optimizan Core Web Vitals, convertir PNG pesados a WebP es una de las mejoras mas simples y de alto impacto.",
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
            <Gauge className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-900">
              {tx("How to choose WebP quality", "Como elegir calidad WebP")}
            </h2>
          </div>
          <div className="space-y-4">
            {qualityGuide.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-blue-100 bg-blue-50"
              >
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.level}
                </h3>
                <p className="text-sm text-gray-700">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 rounded-lg border border-amber-200 bg-amber-50 text-sm text-amber-900 leading-relaxed">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                <strong>{tx("Important:", "Importante:")}</strong>{" "}
                {tx(
                  "Very high compression can introduce visible artifacts. Test a balanced quality range for best real-world results.",
                  "Una compresion muy alta puede introducir artefactos visibles. Prueba un rango equilibrado de calidad para mejores resultados reales.",
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
