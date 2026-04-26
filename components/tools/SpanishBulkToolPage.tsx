"use client";

import { Image as ImageIcon, Zap } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';

type SpanishBulkToolKind =
  | 'compress-for-email'
  | 'compress-for-forms'
  | 'compress-for-web'
  | 'compress-for-whatsapp'
  | 'compress-percentage'
  | 'gif-compressor'
  | 'jpeg-compressor'
  | 'jpg-compressor'
  | 'jpg-to-webp'
  | 'lossless-compression'
  | 'png-compressor'
  | 'webp-compressor';

type ToolConfig = {
  title: string;
  subtitle: string;
  uploadTitle: string;
  accept: string;
  invalidMessage: string;
  defaultFormats: string[];
  tags: string[];
};

const TOOL_CONFIGS: Record<SpanishBulkToolKind, ToolConfig> = {
  'compress-for-email': {
    title: 'Comprimir Imagenes para Email',
    subtitle: 'Reduce el peso de tus imagenes para enviar adjuntos mas rapidos sin perder claridad.',
    uploadTitle: 'Sube imagenes para optimizar en email',
    accept: 'image/*',
    invalidMessage: 'Selecciona una imagen valida',
    defaultFormats: ['jpg', 'webp'],
    tags: ['Email', 'Adjuntos', 'Compresion'],
  },
  'compress-for-forms': {
    title: 'Comprimir Imagenes para Formularios',
    subtitle: 'Prepara imagenes ligeras para formularios, portales y cargas con limite de tamano.',
    uploadTitle: 'Sube imagenes para formularios',
    accept: 'image/*',
    invalidMessage: 'Selecciona una imagen valida',
    defaultFormats: ['jpg', 'webp'],
    tags: ['Formularios', 'Carga rapida', 'Compresion'],
  },
  'compress-for-web': {
    title: 'Comprimir Imagenes para Web',
    subtitle: 'Optimiza tus imagenes para mejorar velocidad de carga, Core Web Vitals y SEO.',
    uploadTitle: 'Sube imagenes para optimizar en web',
    accept: 'image/*',
    invalidMessage: 'Selecciona una imagen valida',
    defaultFormats: ['jpg', 'webp'],
    tags: ['Web', 'SEO', 'Performance'],
  },
  'compress-for-whatsapp': {
    title: 'Comprimir Imagenes para WhatsApp',
    subtitle: 'Haz tus imagenes mas ligeras para compartirlas rapido por WhatsApp.',
    uploadTitle: 'Sube imagenes para WhatsApp',
    accept: 'image/*',
    invalidMessage: 'Selecciona una imagen valida',
    defaultFormats: ['jpg', 'webp'],
    tags: ['WhatsApp', 'Compartir', 'Compresion'],
  },
  'compress-percentage': {
    title: 'Comprimir por Porcentaje',
    subtitle: 'Reduce el peso de imagenes y exporta varias versiones para distintos usos.',
    uploadTitle: 'Sube imagenes para compresion',
    accept: 'image/*',
    invalidMessage: 'Selecciona una imagen valida',
    defaultFormats: ['jpg', 'webp', 'png'],
    tags: ['Porcentaje', 'Control', 'Compresion'],
  },
  'gif-compressor': {
    title: 'Compresor de GIF',
    subtitle: 'Comprime GIF y genera salidas ligeras para web o compartir.',
    uploadTitle: 'Sube GIF para comprimir',
    accept: 'image/gif',
    invalidMessage: 'Selecciona un archivo GIF valido',
    defaultFormats: ['gif', 'webp'],
    tags: ['GIF', 'Animacion', 'Compresion'],
  },
  'jpeg-compressor': {
    title: 'Compresor de JPEG',
    subtitle: 'Comprime archivos JPEG para reducir peso manteniendo buena calidad.',
    uploadTitle: 'Sube imagen JPEG para comprimir',
    accept: 'image/jpeg',
    invalidMessage: 'Selecciona un archivo JPEG valido',
    defaultFormats: ['jpg', 'webp'],
    tags: ['JPEG', 'Calidad', 'Compresion'],
  },
  'jpg-compressor': {
    title: 'Compresor de JPG',
    subtitle: 'Reduce el tamano de imagenes JPG y descarga versiones optimizadas.',
    uploadTitle: 'Sube imagen JPG para comprimir',
    accept: 'image/jpeg',
    invalidMessage: 'Selecciona un archivo JPG valido',
    defaultFormats: ['jpg', 'webp'],
    tags: ['JPG', 'Optimizar', 'Compresion'],
  },
  'jpg-to-webp': {
    title: 'Convertidor de JPG a WebP',
    subtitle: 'Convierte JPG a WebP para obtener mejor compresion y paginas mas rapidas.',
    uploadTitle: 'Sube imagen JPG para convertir',
    accept: 'image/jpeg',
    invalidMessage: 'Selecciona un archivo JPG valido',
    defaultFormats: ['webp'],
    tags: ['JPG', 'WebP', 'Conversion'],
  },
  'lossless-compression': {
    title: 'Compresion sin Perdida',
    subtitle: 'Optimiza imagenes con enfoque en mantener calidad visual alta.',
    uploadTitle: 'Sube imagenes para compresion sin perdida',
    accept: 'image/*',
    invalidMessage: 'Selecciona una imagen valida',
    defaultFormats: ['png', 'webp'],
    tags: ['Sin perdida', 'Calidad', 'Optimizacion'],
  },
  'png-compressor': {
    title: 'Compresor de PNG',
    subtitle: 'Comprime imagenes PNG y manten detalles limpios para graficos.',
    uploadTitle: 'Sube imagen PNG para comprimir',
    accept: 'image/png',
    invalidMessage: 'Selecciona un archivo PNG valido',
    defaultFormats: ['png', 'webp'],
    tags: ['PNG', 'Graficos', 'Compresion'],
  },
  'webp-compressor': {
    title: 'Compresor de WebP',
    subtitle: 'Ajusta y comprime imagenes WebP para lograr archivos aun mas ligeros.',
    uploadTitle: 'Sube imagen WebP para comprimir',
    accept: 'image/webp',
    invalidMessage: 'Selecciona un archivo WebP valido',
    defaultFormats: ['webp', 'jpg'],
    tags: ['WebP', 'Rendimiento', 'Compresion'],
  },
};

interface SpanishBulkToolPageProps {
  tool: SpanishBulkToolKind;
}

export default function SpanishBulkToolPage({ tool }: SpanishBulkToolPageProps) {
  const config = TOOL_CONFIGS[tool];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            <ImageIcon className="h-4 w-4" />
            Herramienta en Espanol
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900">{config.title}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{config.subtitle}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {config.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BulkImageVariantsCard
            uploadTitle={config.uploadTitle}
            accept={config.accept}
            validateFile={(file) => {
              if (!file.type.startsWith('image/')) return config.invalidMessage;
              if (config.accept === 'image/jpeg' && !file.type.startsWith('image/jpeg')) return config.invalidMessage;
              if (config.accept === 'image/png' && !file.type.startsWith('image/png')) return config.invalidMessage;
              if (config.accept === 'image/webp' && !file.type.startsWith('image/webp')) return config.invalidMessage;
              if (config.accept === 'image/gif' && !file.type.startsWith('image/gif')) return config.invalidMessage;
              return null;
            }}
            defaultFormats={config.defaultFormats}
            enableMarketplaceWorkflow
          />

          <div className="mt-8 rounded-xl border border-teal-100 bg-teal-50 p-5 text-sm text-teal-900">
            <div className="flex items-center gap-2 font-semibold">
              <Zap className="h-4 w-4" />
              Consejo rapido
            </div>
            <p className="mt-2 text-teal-800">
              Sube una imagen, prueba diferentes formatos y descarga la version que mejor combine calidad y tamano.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
