"use client";

import { useCallback, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Download,
  FileText,
  Image as ImageIcon,
  RefreshCw,
  Settings,
  Upload,
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

type TargetFormat = 'JPG' | 'PNG' | 'WebP';

type TranslationDict = Record<string, string>;

type PdfToImageToolPageProps = {
  targetFormat: TargetFormat;
  targetFormatEs: TargetFormat;
  outputMimeType: 'image/jpeg' | 'image/png' | 'image/webp';
  outputExtension: 'jpg' | 'png' | 'webp';
  supportsQuality: boolean;
  dict?: TranslationDict;
};

export default function PdfToImageToolPage({
  targetFormat,
  targetFormatEs,
  outputMimeType,
  outputExtension,
  supportsQuality,
  dict,
}: PdfToImageToolPageProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pdfPages, setPdfPages] = useState<string[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState('');
  const [imageQuality, setImageQuality] = useState(92);
  const [scale, setScale] = useState(2);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { locale } = useLanguage();
  const tx = useCallback(
    (en: string, es: string) => {
      if (locale === 'es') return es;
      return dict?.[en] ?? en;
    },
    [dict, locale]
  );

  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const targetUpper = targetFormat.toUpperCase();
  const targetUpperEs = targetFormatEs.toUpperCase();

  const pageTitle = tx(`PDF to ${targetUpper} Converter`, `Convertidor PDF a ${targetUpperEs}`);

  const qualityRatio = useMemo(() => {
    if (!supportsQuality) return 1;
    return Math.max(0.1, Math.min(1, imageQuality / 100));
  }, [imageQuality, supportsQuality]);

  const convertPdfToImages = useCallback(
    async (file: File) => {
      setIsConverting(true);
      setError('');

      try {
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const pageImages: string[] = [];

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum += 1) {
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (!context) {
            throw new Error('Failed to get canvas context');
          }

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({
            canvasContext: context,
            viewport,
            canvas,
          }).promise;

          const imageData = canvas.toDataURL(outputMimeType, qualityRatio);
          pageImages.push(imageData);
        }

        setPdfPages(pageImages);
      } catch {
        setError(tx('Failed to convert PDF to images. Please try again.', 'No se pudo convertir el PDF a imagenes. Intentalo de nuevo.'));
      } finally {
        setIsConverting(false);
      }
    },
    [outputMimeType, qualityRatio, scale, tx]
  );

  const handleFileSelect = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const fileName = file.name.toLowerCase();
      if (file.type !== 'application/pdf' && !fileName.endsWith('.pdf')) {
        setError(tx('Please select a valid PDF file', 'Por favor selecciona un archivo PDF valido'));
        return;
      }

      setSelectedFile(file);
      setPdfPages([]);
      setOpenFaq(null);
      await convertPdfToImages(file);
    },
    [convertPdfToImages, tx]
  );

  const downloadImage = useCallback(
    (imageData: string, pageNum: number) => {
      const link = document.createElement('a');
      link.href = imageData;
      link.download = `page-${pageNum}.${outputExtension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    [outputExtension]
  );

  const downloadAllImages = useCallback(() => {
    pdfPages.forEach((imageData, index) => {
      setTimeout(() => {
        downloadImage(imageData, index + 1);
      }, index * 200);
    });
  }, [downloadImage, pdfPages]);

  const reconvertWithSettings = useCallback(async () => {
    if (!selectedFile) return;
    await convertPdfToImages(selectedFile);
  }, [convertPdfToImages, selectedFile]);

  const resetConverter = useCallback(() => {
    setSelectedFile(null);
    setPdfPages([]);
    setError('');
    setOpenFaq(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        onChange={handleFileSelect}
        className="hidden"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-12" aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2 text-sm text-gray-600">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a itemProp="item" href={homeHref} className="hover:text-blue-600 transition-colors">
                <span itemProp="name">{tx('Home', 'Inicio')}</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-gray-900 font-medium">{pageTitle}</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl mb-4 shadow-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{pageTitle}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tx(
              `Convert PDF pages to high-quality ${targetUpper} images with resolution controls and one-click download for each page.`,
              `Convierte paginas PDF a imagenes ${targetUpperEs} de alta calidad con control de resolucion y descarga rapida por pagina.`
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {!selectedFile ? (
            <div
              className="relative border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-red-400 hover:bg-gradient-to-br hover:from-red-50 hover:to-rose-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-800 mb-3">{tx('Upload PDF File', 'Sube un archivo PDF')}</p>
                <p className="text-base text-gray-600 mb-6">{tx('Drag and drop or click to browse.', 'Arrastra y suelta o haz clic para buscar.')}</p>
                <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                    <ImageIcon className="w-4 h-4 text-red-500" />
                    <span className="text-xs sm:text-sm font-medium text-gray-600">{tx('All Pages', 'Todas las paginas')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                    <Settings className="w-4 h-4 text-rose-500" />
                    <span className="text-xs sm:text-sm font-medium text-gray-600">{tx('Resolution Control', 'Control de resolucion')}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-red-600" />
                  {tx('Conversion Settings', 'Configuracion de conversion')}
                </h3>

                <div className={`grid gap-6 ${supportsQuality ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
                  {supportsQuality && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Image Quality', 'Calidad de imagen')}: {imageQuality}%
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="100"
                        value={imageQuality}
                        onChange={(event) => setImageQuality(Number(event.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                        disabled={isConverting}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{tx('Smaller file', 'Archivo mas pequeno')}</span>
                        <span>{tx('Better quality', 'Mejor calidad')}</span>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {tx('Resolution', 'Resolucion')}: {scale}x
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="3"
                      step="0.5"
                      value={scale}
                      onChange={(event) => setScale(Number(event.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                      disabled={isConverting}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{tx('Standard', 'Estandar')}</span>
                      <span>{tx('High resolution', 'Alta resolucion')}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={reconvertWithSettings}
                  disabled={isConverting}
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isConverting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Settings className="w-4 h-4" />}
                  {tx('Apply Settings', 'Aplicar configuracion')}
                </button>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-700 font-medium">{error}</p>
                </div>
              )}

              {isConverting && (
                <div className="flex items-center justify-center gap-3 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                  <RefreshCw className="w-6 h-6 text-blue-600 animate-spin" />
                  <p className="text-blue-700 font-semibold">
                    {tx(`Converting PDF pages to ${targetUpper} images...`, `Convirtiendo paginas PDF a imagenes ${targetUpperEs}...`)}
                  </p>
                </div>
              )}

              {pdfPages.length > 0 && (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {pdfPages.length} {tx('Page', 'Pagina')}
                      {pdfPages.length > 1 ? 's' : ''} {tx('Converted', 'Convertidas')}
                    </h3>
                    <button
                      onClick={downloadAllImages}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg"
                    >
                      <Download className="w-4 h-4" />
                      {tx('Download All', 'Descargar todo')}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {pdfPages.map((pageImage, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-200 group-hover:border-red-400 transition-colors">
                          <img src={pageImage} alt={`${tx('Page', 'Pagina')} ${index + 1}`} className="w-full h-full object-contain" />
                        </div>
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {tx('Page', 'Pagina')} {index + 1}
                        </div>
                        <button
                          onClick={() => downloadImage(pageImage, index + 1)}
                          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center shadow-lg"
                          title={tx('Download this page', 'Descargar esta pagina')}
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={resetConverter}
                  className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all"
                >
                  {tx('Convert Another PDF', 'Convertir otro PDF')}
                </button>
              </div>

              {pdfPages.length > 0 && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm text-green-700 font-medium">
                    {tx('PDF conversion complete. Download individual pages or all at once.', 'Conversion PDF completa. Descarga paginas individuales o todo de una vez.')}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx(`About PDF to ${targetUpper} Converter`, `Sobre el convertidor PDF a ${targetUpperEs}`)}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              `This tool extracts every page from your PDF and converts it into ${targetUpper} image files directly in your browser. Use quality and resolution controls to balance clarity and file size based on your workflow.`,
              `Esta herramienta extrae cada pagina de tu PDF y la convierte en archivos de imagen ${targetUpperEs} directamente en tu navegador. Usa controles de calidad y resolucion para equilibrar nitidez y tamano de archivo.`
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Features', 'Caracteristicas')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: tx('Extract All Pages', 'Extrae todas las paginas'),
                desc: tx('Convert every PDF page into individual image output.', 'Convierte cada pagina PDF en una imagen individual.'),
              },
              {
                title: tx('Resolution Controls', 'Control de resolucion'),
                desc: tx('Choose the render scale for higher detail output.', 'Elige la escala de render para mas detalle.'),
              },
              {
                title: tx('Quick Downloads', 'Descargas rapidas'),
                desc: tx('Download one page or all converted pages.', 'Descarga una pagina o todas las paginas convertidas.'),
              },
              {
                title: tx('Private Processing', 'Procesamiento privado'),
                desc: tx('All conversion stays in your browser session.', 'Toda la conversion ocurre en tu sesion del navegador.'),
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl shadow-lg p-8 mb-8 border border-red-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{tx('Frequently Asked Questions', 'Preguntas frecuentes')}</h2>
          <div className="space-y-4">
            {[
              {
                question: tx(`Can I convert all PDF pages to ${targetUpper}?`, `Puedo convertir todas las paginas PDF a ${targetUpperEs}?`),
                answer: tx('Yes, all pages are processed and shown for individual or bulk download.', 'Si, todas las paginas se procesan y se muestran para descarga individual o en bloque.'),
              },
              {
                question: tx('Can I change output quality?', 'Puedo cambiar la calidad de salida?'),
                answer: supportsQuality
                  ? tx('Yes. Use the quality slider before applying settings.', 'Si. Usa el control de calidad antes de aplicar la configuracion.')
                  : tx('PNG output keeps lossless quality. Use resolution control for detail.', 'La salida PNG mantiene calidad sin perdida. Usa el control de resolucion para mas detalle.'),
              },
              {
                question: tx('Is this conversion secure?', 'Esta conversion es segura?'),
                answer: tx('Yes. Files are processed locally and are not uploaded to servers.', 'Si. Los archivos se procesan localmente y no se suben a servidores.'),
              },
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-red-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <span className="text-red-600 text-xl leading-none">{isOpen ? '-' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
