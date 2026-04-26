"use client";

import { useCallback, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Download,
  FileText,
  Image as ImageIcon,
  Layers,
  RefreshCw,
  Settings,
  Upload,
} from 'lucide-react';
import jsPDF from 'jspdf';
import { useLanguage } from '@/components/LanguageProvider';

type PageSize = 'A4' | 'Letter' | 'Legal';
type Orientation = 'portrait' | 'landscape';
type FitMode = 'contain' | 'cover' | 'fill';
type PdfImageType = 'JPEG' | 'PNG';

type TranslationDict = Record<string, string>;

type PdfToolProps = {
  sourceFormat: string;
  sourceFormatEs: string;
  accept: string;
  validMimeTypes: string[];
  validExtensions: string[];
  pdfImageType: PdfImageType;
  needsHeicDecode?: boolean;
  dict?: TranslationDict;
};

function fileToDataUrl(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

async function decodeHeicToPngDataUrl(file: File): Promise<string> {
  const { default: heic2any } = await import('heic2any');
  const result = await heic2any({ blob: file, toType: 'image/png', quality: 1 });
  const blob = Array.isArray(result) ? result[0] : result;
  return fileToDataUrl(blob as Blob);
}

const PAGE_SIZE_POINTS: Record<PageSize, { width: number; height: number }> = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 },
};

const PDF_FORMAT_MAP: Record<PageSize, 'a4' | 'letter' | 'legal'> = {
  A4: 'a4',
  Letter: 'letter',
  Legal: 'legal',
};

export default function ImageToPdfToolPage({
  sourceFormat,
  sourceFormatEs,
  accept,
  validMimeTypes,
  validExtensions,
  pdfImageType,
  needsHeicDecode = false,
  dict,
}: PdfToolProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [convertedUrl, setConvertedUrl] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState('');

  const [pageSize, setPageSize] = useState<PageSize>('A4');
  const [orientation, setOrientation] = useState<Orientation>('portrait');
  const [margin, setMargin] = useState(20);
  const [imageQuality, setImageQuality] = useState(85);
  const [fitMode, setFitMode] = useState<FitMode>('contain');
  const [mergeImages, setMergeImages] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { locale } = useLanguage();
  const tx = (en: string, es: string) => {
    if (locale === 'es') return es;
    return dict?.[en] ?? en;
  };
  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  const sourceUpper = sourceFormat.toUpperCase();
  const sourceUpperEs = sourceFormatEs.toUpperCase();
  const pageTitle = tx(`${sourceUpper} to PDF Converter`, `Convertidor ${sourceUpperEs} a PDF`);

  const clearConvertedUrl = useCallback(() => {
    if (convertedUrl) {
      URL.revokeObjectURL(convertedUrl);
    }
    setConvertedUrl('');
  }, [convertedUrl]);

  const isValidFile = useCallback(
    (file: File) => {
      const type = file.type.toLowerCase();
      const name = file.name.toLowerCase();
      if (validMimeTypes.some((mime) => mime.toLowerCase() === type)) return true;
      if (validExtensions.some((ext) => name.endsWith(ext.toLowerCase()))) return true;
      return false;
    },
    [validExtensions, validMimeTypes]
  );

  const pageDimensions = useMemo(() => {
    const size = PAGE_SIZE_POINTS[pageSize];
    if (orientation === 'landscape') {
      return { width: size.height, height: size.width };
    }
    return size;
  }, [orientation, pageSize]);

  const handleFileSelect = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);
      if (!files.length) return;

      const valid = files.filter((file) => isValidFile(file));
      if (!valid.length) {
        setError(tx(`Please select valid ${sourceUpper} files`, `Por favor selecciona archivos ${sourceUpperEs} validos`));
        return;
      }

      try {
        const processedPreviews = await Promise.all(
          valid.map(async (file) => {
            if (needsHeicDecode) {
              return decodeHeicToPngDataUrl(file);
            }
            return fileToDataUrl(file);
          })
        );

        setSelectedFiles((prev) => [...prev, ...valid]);
        setPreviews((prev) => [...prev, ...processedPreviews]);
        setError('');
        clearConvertedUrl();
      } catch {
        setError(tx('Failed to read one or more images.', 'No se pudo leer una o mas imagenes.'));
      }
    },
    [clearConvertedUrl, isValidFile, needsHeicDecode, sourceUpper, sourceUpperEs, tx]
  );

  const removeImage = useCallback(
    (indexToRemove: number) => {
      setSelectedFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
      setPreviews((prev) => prev.filter((_, index) => index !== indexToRemove));
      setError('');
      clearConvertedUrl();
    },
    [clearConvertedUrl]
  );

  const resetConverter = useCallback(() => {
    setSelectedFiles([]);
    setPreviews([]);
    setError('');
    setOpenFaq(null);
    clearConvertedUrl();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [clearConvertedUrl]);

  const convertToPdf = useCallback(async () => {
    if (!previews.length) return;

    setIsConverting(true);
    setError('');

    try {
      const pdf = new jsPDF({
        orientation: orientation === 'portrait' ? 'p' : 'l',
        unit: 'pt',
        format: PDF_FORMAT_MAP[pageSize],
      });

      const quality = Math.max(0.1, Math.min(1, imageQuality / 100));

      for (let i = 0; i < previews.length; i += 1) {
        if (!mergeImages && i > 0) break;

        const img = new Image();
        img.src = previews[i];

        await new Promise<void>((resolve, reject) => {
          img.onload = () => {
            try {
              if (i > 0) pdf.addPage();

              const availableWidth = pageDimensions.width - margin * 2;
              const availableHeight = pageDimensions.height - margin * 2;

              let drawWidth = availableWidth;
              let drawHeight = availableHeight;
              let x = margin;
              let y = margin;

              if (fitMode !== 'fill') {
                const scale =
                  fitMode === 'contain'
                    ? Math.min(availableWidth / img.width, availableHeight / img.height)
                    : Math.max(availableWidth / img.width, availableHeight / img.height);
                drawWidth = img.width * scale;
                drawHeight = img.height * scale;
                x = margin + (availableWidth - drawWidth) / 2;
                y = margin + (availableHeight - drawHeight) / 2;
              }

              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              const context = canvas.getContext('2d');
              if (!context) throw new Error('Canvas not supported');
              context.drawImage(img, 0, 0);

              const mime = pdfImageType === 'JPEG' ? 'image/jpeg' : 'image/png';
              const dataUrl = canvas.toDataURL(mime, quality);

              pdf.addImage(dataUrl, pdfImageType, x, y, drawWidth, drawHeight, undefined, 'FAST');
              resolve();
            } catch (conversionError) {
              reject(conversionError);
            }
          };
          img.onerror = () => reject(new Error('Failed to load image'));
        });
      }

      clearConvertedUrl();
      const blob = pdf.output('blob');
      const url = URL.createObjectURL(blob);
      setConvertedUrl(url);
    } catch {
      setError(tx('Failed to convert images to PDF. Please try again.', 'No se pudo convertir las imagenes a PDF. Intentalo de nuevo.'));
    } finally {
      setIsConverting(false);
    }
  }, [
    previews,
    orientation,
    pageSize,
    imageQuality,
    pageDimensions,
    margin,
    fitMode,
    pdfImageType,
    mergeImages,
    clearConvertedUrl,
    tx,
  ]);

  const downloadPdf = useCallback(() => {
    if (!convertedUrl) return;
    const link = document.createElement('a');
    link.href = convertedUrl;
    link.download = `${sourceFormat.toLowerCase()}-to-pdf.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [convertedUrl, sourceFormat]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <input ref={fileInputRef} type="file" accept={accept} onChange={handleFileSelect} className="hidden" multiple />

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
              `Convert ${sourceUpper} images to PDF documents with advanced options including page size, orientation, margins, and multi-image merge.`,
              `Convierte imagenes ${sourceUpperEs} a documentos PDF con opciones avanzadas de tamano de pagina, orientacion, margenes y union de varias imagenes.`
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {!selectedFiles.length ? (
            <div
              className="relative border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-red-400 hover:bg-gradient-to-br hover:from-red-50 hover:to-rose-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-800 mb-3">{tx(`Upload ${sourceUpper} Images`, `Sube imagenes ${sourceUpperEs}`)}</p>
                <p className="text-base text-gray-600 mb-6">{tx('Drag and drop or click to browse. Multiple files supported.', 'Arrastra y suelta o haz clic para buscar. Se admiten varios archivos.')}</p>
                <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                    <ImageIcon className="w-4 h-4 text-red-500" />
                    <span className="text-xs sm:text-sm font-medium text-gray-600">{tx('Multiple Images', 'Multiples imagenes')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                    <Layers className="w-4 h-4 text-rose-500" />
                    <span className="text-xs sm:text-sm font-medium text-gray-600">{tx('Merge to PDF', 'Unir en PDF')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                    <Settings className="w-4 h-4 text-red-600" />
                    <span className="text-xs sm:text-sm font-medium text-gray-600">{tx('Advanced Options', 'Opciones avanzadas')}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {previews.map((preview, index) => (
                  <div key={`${selectedFiles[index]?.name || 'img'}-${index}`} className="relative group">
                    <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-200 group-hover:border-red-400 transition-colors">
                      <img src={preview} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">{index + 1}</div>
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 left-2 w-7 h-7 bg-red-600 hover:bg-red-700 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg"
                      title={tx('Remove image', 'Quitar imagen')}
                    >
                      x
                    </button>
                  </div>
                ))}

                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="aspect-square bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border-2 border-dashed border-red-300 hover:border-red-400 hover:from-red-100 hover:to-rose-100 transition-all cursor-pointer flex flex-col items-center justify-center gap-2 group"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <Upload className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="text-sm font-semibold text-red-600">{tx('Add More', 'Agregar mas')}</p>
                  <p className="text-xs text-gray-500">{tx('Images', 'Imagenes')}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-red-600" />
                  {tx('PDF Settings', 'Configuracion PDF')}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{tx('Page Size', 'Tamano de pagina')}</label>
                    <select
                      value={pageSize}
                      onChange={(event) => setPageSize(event.target.value as PageSize)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white font-medium"
                    >
                      <option value="A4">A4 (210 x 297 mm)</option>
                      <option value="Letter">Letter (8.5 x 11 in)</option>
                      <option value="Legal">Legal (8.5 x 14 in)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{tx('Orientation', 'Orientacion')}</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setOrientation('portrait')}
                        className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                          orientation === 'portrait'
                            ? 'bg-red-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-400'
                        }`}
                      >
                        {tx('Portrait', 'Vertical')}
                      </button>
                      <button
                        onClick={() => setOrientation('landscape')}
                        className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                          orientation === 'landscape'
                            ? 'bg-red-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-400'
                        }`}
                      >
                        {tx('Landscape', 'Horizontal')}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{tx('Fit Mode', 'Modo de ajuste')}</label>
                    <select
                      value={fitMode}
                      onChange={(event) => setFitMode(event.target.value as FitMode)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white font-medium"
                    >
                      <option value="contain">{tx('Contain', 'Contener')}</option>
                      <option value="cover">{tx('Cover', 'Cubrir')}</option>
                      <option value="fill">{tx('Fill', 'Rellenar')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {tx('Merge Images', 'Unir imagenes')} ({mergeImages ? tx('On', 'Activado') : tx('Off', 'Desactivado')})
                    </label>
                    <button
                      onClick={() => setMergeImages((prev) => !prev)}
                      className={`w-full px-4 py-3 rounded-xl font-semibold transition-all ${
                        mergeImages
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-400'
                      }`}
                    >
                      {mergeImages ? tx('Single PDF', 'PDF unico') : tx('First Image Only', 'Solo primera imagen')}
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {tx('Margin', 'Margen')}: {margin}pt
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={80}
                      step={2}
                      value={margin}
                      onChange={(event) => setMargin(Number(event.target.value))}
                      className="w-full accent-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {tx('Image Quality', 'Calidad de imagen')}: {imageQuality}%
                    </label>
                    <input
                      type="range"
                      min={40}
                      max={100}
                      step={1}
                      value={imageQuality}
                      onChange={(event) => setImageQuality(Number(event.target.value))}
                      className="w-full accent-red-600"
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl p-4">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={convertToPdf}
                  disabled={isConverting || !previews.length}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {isConverting ? <RefreshCw className="w-5 h-5 animate-spin" /> : <FileText className="w-5 h-5" />}
                  {isConverting ? tx('Converting to PDF...', 'Convirtiendo a PDF...') : tx('Convert to PDF', 'Convertir a PDF')}
                </button>

                <button
                  onClick={downloadPdf}
                  disabled={!convertedUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  <Download className="w-5 h-5" />
                  {tx('Download PDF', 'Descargar PDF')}
                </button>

                <button
                  onClick={resetConverter}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                  {tx('Reset', 'Reiniciar')}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx(`About ${sourceUpper} to PDF Converter`, `Sobre el convertidor ${sourceUpperEs} a PDF`)}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tx(
              `This tool converts ${sourceUpper} files into PDF with layout controls for page size, orientation, margins, fit mode, and quality.`,
              `Esta herramienta convierte archivos ${sourceUpperEs} a PDF con controles de tamano de pagina, orientacion, margenes, modo de ajuste y calidad.`
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Features', 'Caracteristicas')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: tx('Multiple Image Merge', 'Union de multiples imagenes'),
                desc: tx('Create one PDF from several image files.', 'Crea un PDF unico a partir de varios archivos de imagen.'),
              },
              {
                title: tx('Page Controls', 'Controles de pagina'),
                desc: tx('Pick A4, Letter, or Legal with portrait/landscape.', 'Elige A4, Letter o Legal con orientacion vertical/horizontal.'),
              },
              {
                title: tx('Fit and Margin Options', 'Opciones de ajuste y margen'),
                desc: tx('Control how images fit on each PDF page.', 'Controla como se ajustan las imagenes en cada pagina PDF.'),
              },
              {
                title: tx('Quality Tuning', 'Ajuste de calidad'),
                desc: tx('Adjust quality to balance file size and detail.', 'Ajusta calidad para equilibrar tamano y detalle.'),
              },
              {
                title: tx('Client-side Processing', 'Procesamiento del lado cliente'),
                desc: tx('Files stay on your device for private conversion.', 'Los archivos permanecen en tu dispositivo para conversion privada.'),
              },
              {
                title: tx('Free to Use', 'Gratis de usar'),
                desc: tx('No account needed and no upload queue delays.', 'Sin cuenta y sin colas de subida.'),
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Frequently Asked Questions', 'Preguntas frecuentes')}</h2>
          <div className="space-y-4">
            {[
              {
                q: tx(`Can I convert multiple ${sourceUpper} files into one PDF?`, `Puedo convertir multiples archivos ${sourceUpperEs} en un solo PDF?`),
                a: tx(
                  'Yes. Keep merge enabled and all selected images will be added as PDF pages.',
                  'Si. Manteniendo la union activada, todas las imagenes seleccionadas se agregaran como paginas PDF.'
                ),
              },
              {
                q: tx('Can I choose page size and orientation?', 'Puedo elegir tamano de pagina y orientacion?'),
                a: tx(
                  'Yes. Choose A4, Letter, or Legal plus portrait or landscape orientation.',
                  'Si. Puedes elegir A4, Letter o Legal, ademas de orientacion vertical u horizontal.'
                ),
              },
              {
                q: tx('Is conversion private?', 'La conversion es privada?'),
                a: tx(
                  'Yes. Processing happens in your browser and files are not uploaded to servers.',
                  'Si. El procesamiento ocurre en tu navegador y los archivos no se suben a servidores.'
                ),
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-red-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-gray-500">{openFaq === index ? '-' : '+'}</span>
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
}
