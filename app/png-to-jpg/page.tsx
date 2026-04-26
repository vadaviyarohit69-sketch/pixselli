"use client";

import { useState } from "react";
import {
  RefreshCw,
  CheckCircle2,
  ChevronDown,
  Target,
  Shield,
  Gauge,
  Mail,
  Globe,
  Smartphone,
} from "lucide-react";
import BulkImageVariantsCard from "@/components/BulkImageVariantsCard";
import { useLanguage } from "@/components/LanguageProvider";
import { translateReactNode } from "@/lib/translateReactNode";
import { PNG_TO_JPG_TEXT_BY_LOCALE } from "@/lib/pngToJpgTranslations";

export default function PNGtoJPGPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { locale } = useLanguage();
  const dict = PNG_TO_JPG_TEXT_BY_LOCALE[locale] ?? {};
  const tx = (en: string, es: string) => {
    if (locale === "es") return es;
    return dict[en] ?? en;
  };

  const features = [
    {
      title: tx("Fast Conversion", "Conversion rapida"),
      desc: tx(
        "Convert PNG files to JPG in seconds.",
        "Convierte archivos PNG a JPG en segundos.",
      ),
    },
    {
      title: tx("Smaller Output Size", "Tamano de salida menor"),
      desc: tx(
        "JPG usually creates smaller files than PNG.",
        "JPG normalmente crea archivos mas pequenos que PNG.",
      ),
    },
    {
      title: tx("Quality Control", "Control de calidad"),
      desc: tx(
        "Tune output quality for your needs.",
        "Ajusta la calidad de salida segun tu necesidad.",
      ),
    },
    {
      title: tx("Bulk Variants ZIP", "Variantes en ZIP"),
      desc: tx(
        "Generate multiple output variants and download ZIP.",
        "Genera multiples variantes y descarga un ZIP.",
      ),
    },
    {
      title: tx("Private Processing", "Procesamiento privado"),
      desc: tx(
        "Images stay in your browser on your device.",
        "Las imagenes se procesan en tu navegador.",
      ),
    },
    {
      title: tx("Free to Use", "Gratis para usar"),
      desc: tx(
        "No login and no payments required.",
        "Sin registro y sin pagos.",
      ),
    },
  ];

  const useCases = [
    {
      icon: <Globe className="w-5 h-5 text-purple-600" />,
      title: tx("Website Uploads", "Subidas a sitios web"),
      desc: tx(
        "Use JPG to improve page speed and reduce bandwidth usage for photo-heavy pages.",
        "Usa JPG para mejorar velocidad de pagina y reducir consumo de datos en paginas con muchas fotos.",
      ),
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      title: tx("Email Attachments", "Adjuntos de correo"),
      desc: tx(
        "JPG files are usually smaller, making attachments faster to send and easier to receive.",
        "Los JPG suelen ser mas pequenos, por lo que los adjuntos se envian mas rapido y son mas faciles de recibir.",
      ),
    },
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
      title: tx("Social Sharing", "Compartir en redes"),
      desc: tx(
        "Many social platforms and messaging apps handle JPG efficiently for photos.",
        "Muchas plataformas sociales y apps de mensajeria gestionan JPG de forma eficiente para fotos.",
      ),
    },
  ];

  const qualityGuide = [
    {
      level: tx("High Quality (90-100)", "Alta calidad (90-100)"),
      note: tx(
        "Best for portfolio photos, product images, and detailed visuals where quality matters most.",
        "Ideal para portafolios, fotos de producto y visuales detallados donde la calidad es prioridad.",
      ),
    },
    {
      level: tx("Balanced (75-89)", "Equilibrado (75-89)"),
      note: tx(
        "Recommended default for most users. Good visual quality with significantly smaller files.",
        "Recomendado para la mayoria. Buena calidad visual con archivos bastante mas pequenos.",
      ),
    },
    {
      level: tx("Compact (60-74)", "Compacto (60-74)"),
      note: tx(
        "Useful for fast uploads and strict file-size limits, with some visible quality loss.",
        "Util para cargas rapidas y limites estrictos de tamano, con algo de perdida visible.",
      ),
    },
  ];

  const faqs = [
    {
      q: tx("Why convert PNG to JPG?", "Por que convertir PNG a JPG?"),
      a: tx(
        "JPG is widely compatible and typically gives smaller file sizes for photos and sharing.",
        "JPG tiene amplia compatibilidad y suele dar archivos mas pequenos para fotos y comparticion.",
      ),
    },
    {
      q: tx("What about transparency?", "Que pasa con la transparencia?"),
      a: tx(
        "JPG does not support transparency, so transparent areas are flattened onto a background color.",
        "JPG no soporta transparencia, por eso las areas transparentes se aplanan con un color de fondo.",
      ),
    },
    {
      q: tx(
        "When should I keep PNG instead of JPG?",
        "Cuando debo mantener PNG en lugar de JPG?",
      ),
      a: tx(
        "Keep PNG for logos, icons, screenshots, and images that need sharp edges or transparency.",
        "Mantén PNG para logos, iconos, capturas y imagenes que necesiten bordes nítidos o transparencia.",
      ),
    },
    {
      q: tx(
        "Will converting to JPG reduce quality?",
        "Convertir a JPG reduce la calidad?",
      ),
      a: tx(
        "JPG uses lossy compression, so some detail can be reduced. In most photo use cases, the difference is minor when using balanced or high quality settings.",
        "JPG usa compresion con perdida, asi que puede reducir algunos detalles. En la mayoria de fotos, la diferencia es pequena usando calidad alta o equilibrada.",
      ),
    },
    {
      q: tx(
        "What quality setting should I choose?",
        "Que nivel de calidad debo usar?",
      ),
      a: tx(
        "Start with 80-85 for a strong balance. Increase quality for professional visuals, lower it for strict file-size limits.",
        "Empieza con 80-85 para un buen equilibrio. Sube la calidad para visuales profesionales y bajala si necesitas archivos muy ligeros.",
      ),
    },
    {
      q: tx("Is this conversion safe?", "Es segura esta conversion?"),
      a: tx(
        "Yes. The conversion runs in your browser, and files are not uploaded to a server.",
        "Si. La conversion se ejecuta en tu navegador y los archivos no se suben a un servidor.",
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
                {tx("PNG to JPG Converter", "Convertidor PNG a JPG")}
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {tx("PNG to JPG Converter", "Convertidor PNG a JPG")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              "Convert PNG images to JPG format for better compatibility and smaller file sizes.",
              "Convierte imagenes PNG a formato JPG para mejor compatibilidad y menor tamano de archivo.",
            )}
          </p>
        </div>

        <BulkImageVariantsCard
          uploadTitle={tx(
            "Upload PNG Image to Convert",
            "Sube una imagen PNG para convertir",
          )}
          accept="image/png"
          validateFile={(file) => {
            if (
              file.type.toLowerCase() === "image/png" ||
              file.name.toLowerCase().endsWith(".png")
            )
              return null;
            return tx(
              "Please select a PNG image file",
              "Por favor selecciona un archivo de imagen PNG",
            );
          }}
          defaultFormats={["jpg"]}
          enableMarketplaceWorkflow
        />

        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center shadow-sm">
              <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {tx("Privacy and safety", "Privacidad y seguridad")}
              </h2>
              <p className="text-sm text-emerald-800 mt-1">
                {tx(
                  "Secure by design: everything runs locally in your browser.",
                  "Seguro por diseno: todo se ejecuta localmente en tu navegador.",
                )}
              </p>
            </div>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/80 border border-emerald-200 p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {tx(
                  "Your images are processed in your browser on your device. No account, no cloud upload, and no external storage required.",
                  "Tus imagenes se procesan en tu navegador y en tu dispositivo. Sin cuenta, sin subida a la nube y sin almacenamiento externo.",
                )}
              </p>
            </div>
            <div className="rounded-xl bg-white/80 border border-emerald-200 p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {tx(
                  "You stay in control of your files throughout the conversion workflow.",
                  "Tu mantienes el control de tus archivos durante todo el proceso de conversion.",
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
                "Use this converter to quickly export PNG images as JPG. It is useful for websites, forms, and social sharing where JPG is preferred.",
                "Usa este convertidor para exportar rapidamente imagenes PNG como JPG. Es util para sitios web, formularios y redes sociales donde JPG es preferido.",
              )}
            </p>
            <p>
              {tx(
                "This tool is especially valuable when you need lighter files without complicated software. For less technical users, it provides a simple path: upload, choose output preferences, and download.",
                "Esta herramienta es especialmente valiosa cuando necesitas archivos mas ligeros sin software complejo. Para usuarios menos tecnicos, ofrece un flujo simple: subir, elegir ajustes y descargar.",
              )}
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <Target className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-900">
              {tx(
                "Why this conversion matters",
                "Por que importa esta conversion",
              )}
            </h2>
          </div>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              {tx(
                "PNG is excellent for transparency and graphics, but it can be heavier than JPG for photos. Converting to JPG helps reduce upload time, save storage, and improve loading speed on websites.",
                "PNG es excelente para transparencia y graficos, pero puede ser mas pesado que JPG en fotos. Convertir a JPG ayuda a reducir tiempo de carga, ahorrar almacenamiento y mejorar velocidad en sitios web.",
              )}
            </p>
            <p>
              {tx(
                "In practical terms, this means smoother sharing, faster form submissions, and fewer rejections on platforms with file-size limits.",
                "En la practica, esto significa compartir mas rapido, enviar formularios mas facilmente y menos rechazos en plataformas con limite de tamano.",
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {tx("Best use cases", "Mejores casos de uso")}
          </h2>
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
              {tx("How to choose JPG quality", "Como elegir calidad JPG")}
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
          <div className="mt-5 p-4 rounded-lg border border-amber-200 bg-amber-50 text-sm text-amber-900">
            <strong>{tx("Important:", "Importante:")}</strong>{" "}
            {tx(
              "If your image needs transparent background (like logos), keep PNG format instead of JPG.",
              "Si tu imagen necesita fondo transparente (como logos), mantén formato PNG en lugar de JPG.",
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
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
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
