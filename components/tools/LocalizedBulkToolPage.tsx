"use client";

import { Image as ImageIcon, Zap } from 'lucide-react';
import BulkImageVariantsCard from '@/components/BulkImageVariantsCard';

type Locale = 'pt' | 'fr' | 'de' | 'it';

type BulkToolKind =
  | 'compress-for-email'
  | 'compress-for-web'
  | 'compress-percentage'
  | 'lossless-compression';

type ToolConfig = {
  title: string;
  subtitle: string;
  uploadTitle: string;
  accept: string;
  invalidMessage: string;
  defaultFormats: string[];
  tags: string[];
};

type LocaleCopy = {
  localeBadge: string;
  quickTipTitle: string;
  quickTipBody: string;
};

const LOCALE_COPY: Record<Locale, LocaleCopy> = {
  pt: {
    localeBadge: 'Ferramenta em Portugues',
    quickTipTitle: 'Dica rapida',
    quickTipBody: 'Envie uma imagem, teste diferentes formatos e baixe a versao com melhor equilibrio entre qualidade e tamanho.',
  },
  fr: {
    localeBadge: 'Outil en Francais',
    quickTipTitle: 'Conseil rapide',
    quickTipBody: 'Televersez une image, testez plusieurs formats et telechargez la version avec le meilleur equilibre qualite/taille.',
  },
  de: {
    localeBadge: 'Tool auf Deutsch',
    quickTipTitle: 'Schneller Tipp',
    quickTipBody: 'Laden Sie ein Bild hoch, testen Sie mehrere Formate und laden Sie die beste Version fuer Qualitaet und Dateigroesse herunter.',
  },
  it: {
    localeBadge: 'Strumento in Italiano',
    quickTipTitle: 'Suggerimento rapido',
    quickTipBody: 'Carica un immagine, prova diversi formati e scarica la versione con il miglior equilibrio tra qualita e dimensione.',
  },
};

const TOOL_CONFIGS: Record<Locale, Record<BulkToolKind, ToolConfig>> = {
  pt: {
    'compress-for-email': {
      title: 'Comprimir Imagens para Email',
      subtitle: 'Reduza o tamanho das imagens para anexos de email mais leves e envio mais rapido.',
      uploadTitle: 'Envie imagens para otimizar para email',
      accept: 'image/*',
      invalidMessage: 'Selecione um arquivo de imagem valido',
      defaultFormats: ['jpg', 'webp'],
      tags: ['Email', 'Anexos', 'Compressao'],
    },
    'compress-for-web': {
      title: 'Comprimir Imagens para Web',
      subtitle: 'Otimize imagens para paginas mais rapidas, melhor SEO e Core Web Vitals.',
      uploadTitle: 'Envie imagens para otimizar para web',
      accept: 'image/*',
      invalidMessage: 'Selecione um arquivo de imagem valido',
      defaultFormats: ['jpg', 'webp'],
      tags: ['Web', 'SEO', 'Performance'],
    },
    'compress-percentage': {
      title: 'Comprimir por Percentual',
      subtitle: 'Reduza o tamanho da imagem por percentual e compare varias saidas.',
      uploadTitle: 'Envie imagens para compressao percentual',
      accept: 'image/*',
      invalidMessage: 'Selecione um arquivo de imagem valido',
      defaultFormats: ['jpg', 'webp', 'png'],
      tags: ['Percentual', 'Controle', 'Compressao'],
    },
    'lossless-compression': {
      title: 'Compressao sem Perda',
      subtitle: 'Otimize imagens preservando alta qualidade visual.',
      uploadTitle: 'Envie imagens para compressao sem perda',
      accept: 'image/*',
      invalidMessage: 'Selecione um arquivo de imagem valido',
      defaultFormats: ['png', 'webp'],
      tags: ['Sem perda', 'Qualidade', 'Otimizacao'],
    },
  },
  fr: {
    'compress-for-email': {
      title: 'Compresser des Images pour Email',
      subtitle: 'Reduisez la taille des images pour des pieces jointes plus legeres.',
      uploadTitle: 'Televersez des images pour optimisation email',
      accept: 'image/*',
      invalidMessage: 'Selectionnez un fichier image valide',
      defaultFormats: ['jpg', 'webp'],
      tags: ['Email', 'Pieces jointes', 'Compression'],
    },
    'compress-for-web': {
      title: 'Compresser des Images pour le Web',
      subtitle: 'Optimisez vos images pour des pages plus rapides et un meilleur SEO.',
      uploadTitle: 'Televersez des images pour optimisation web',
      accept: 'image/*',
      invalidMessage: 'Selectionnez un fichier image valide',
      defaultFormats: ['jpg', 'webp'],
      tags: ['Web', 'SEO', 'Performance'],
    },
    'compress-percentage': {
      title: 'Compresser par Pourcentage',
      subtitle: 'Reduisez le poids des images par pourcentage et comparez les resultats.',
      uploadTitle: 'Televersez des images pour compression en pourcentage',
      accept: 'image/*',
      invalidMessage: 'Selectionnez un fichier image valide',
      defaultFormats: ['jpg', 'webp', 'png'],
      tags: ['Pourcentage', 'Controle', 'Compression'],
    },
    'lossless-compression': {
      title: 'Compression sans Perte',
      subtitle: 'Optimisez les images tout en conservant une qualite elevee.',
      uploadTitle: 'Televersez des images pour compression sans perte',
      accept: 'image/*',
      invalidMessage: 'Selectionnez un fichier image valide',
      defaultFormats: ['png', 'webp'],
      tags: ['Sans perte', 'Qualite', 'Optimisation'],
    },
  },
  de: {
    'compress-for-email': {
      title: 'Bilder fuer E-Mail Komprimieren',
      subtitle: 'Verringern Sie die Bildgroesse fuer leichtere E-Mail-Anhaenge.',
      uploadTitle: 'Bilder fuer E-Mail-Optimierung hochladen',
      accept: 'image/*',
      invalidMessage: 'Bitte eine gueltige Bilddatei auswaehlen',
      defaultFormats: ['jpg', 'webp'],
      tags: ['E-Mail', 'Anhaenge', 'Komprimierung'],
    },
    'compress-for-web': {
      title: 'Bilder fuer Web Komprimieren',
      subtitle: 'Optimieren Sie Bilder fuer schnellere Ladezeiten und besseres SEO.',
      uploadTitle: 'Bilder fuer Web-Optimierung hochladen',
      accept: 'image/*',
      invalidMessage: 'Bitte eine gueltige Bilddatei auswaehlen',
      defaultFormats: ['jpg', 'webp'],
      tags: ['Web', 'SEO', 'Performance'],
    },
    'compress-percentage': {
      title: 'Nach Prozent Komprimieren',
      subtitle: 'Reduzieren Sie die Dateigroesse prozentual und vergleichen Sie Ausgaben.',
      uploadTitle: 'Bilder fuer prozentuale Komprimierung hochladen',
      accept: 'image/*',
      invalidMessage: 'Bitte eine gueltige Bilddatei auswaehlen',
      defaultFormats: ['jpg', 'webp', 'png'],
      tags: ['Prozent', 'Kontrolle', 'Komprimierung'],
    },
    'lossless-compression': {
      title: 'Verlustfreie Komprimierung',
      subtitle: 'Optimieren Sie Bilder bei hoher visueller Qualitaet.',
      uploadTitle: 'Bilder fuer verlustfreie Komprimierung hochladen',
      accept: 'image/*',
      invalidMessage: 'Bitte eine gueltige Bilddatei auswaehlen',
      defaultFormats: ['png', 'webp'],
      tags: ['Verlustfrei', 'Qualitaet', 'Optimierung'],
    },
  },
  it: {
    'compress-for-email': {
      title: 'Comprimi Immagini per Email',
      subtitle: 'Riduci la dimensione delle immagini per allegati email piu leggeri.',
      uploadTitle: 'Carica immagini per ottimizzazione email',
      accept: 'image/*',
      invalidMessage: 'Seleziona un file immagine valido',
      defaultFormats: ['jpg', 'webp'],
      tags: ['Email', 'Allegati', 'Compressione'],
    },
    'compress-for-web': {
      title: 'Comprimi Immagini per Web',
      subtitle: 'Ottimizza le immagini per pagine piu veloci e migliore SEO.',
      uploadTitle: 'Carica immagini per ottimizzazione web',
      accept: 'image/*',
      invalidMessage: 'Seleziona un file immagine valido',
      defaultFormats: ['jpg', 'webp'],
      tags: ['Web', 'SEO', 'Performance'],
    },
    'compress-percentage': {
      title: 'Comprimi per Percentuale',
      subtitle: 'Riduci il peso dell immagine per percentuale e confronta le versioni.',
      uploadTitle: 'Carica immagini per compressione percentuale',
      accept: 'image/*',
      invalidMessage: 'Seleziona un file immagine valido',
      defaultFormats: ['jpg', 'webp', 'png'],
      tags: ['Percentuale', 'Controllo', 'Compressione'],
    },
    'lossless-compression': {
      title: 'Compressione Senza Perdita',
      subtitle: 'Ottimizza le immagini mantenendo alta qualita visiva.',
      uploadTitle: 'Carica immagini per compressione senza perdita',
      accept: 'image/*',
      invalidMessage: 'Seleziona un file immagine valido',
      defaultFormats: ['png', 'webp'],
      tags: ['Senza perdita', 'Qualita', 'Ottimizzazione'],
    },
  },
};

interface LocalizedBulkToolPageProps {
  tool: BulkToolKind;
  locale: Locale;
}

export default function LocalizedBulkToolPage({ tool, locale }: LocalizedBulkToolPageProps) {
  const copy = LOCALE_COPY[locale];
  const config = TOOL_CONFIGS[locale][tool];

  return (
    <main className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <section className='border-b border-gray-200 bg-white'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center'>
          <div className='inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700'>
            <ImageIcon className='h-4 w-4' />
            {copy.localeBadge}
          </div>

          <h1 className='mt-6 text-3xl md:text-5xl font-bold text-gray-900'>{config.title}</h1>
          <p className='mt-4 text-lg text-gray-600 max-w-3xl mx-auto'>{config.subtitle}</p>

          <div className='mt-6 flex flex-wrap justify-center gap-2'>
            {config.tags.map((tag) => (
              <span key={tag} className='rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className='py-12'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <BulkImageVariantsCard
            uploadTitle={config.uploadTitle}
            accept={config.accept}
            validateFile={(file) => {
              if (!file.type.startsWith('image/')) return config.invalidMessage;
              return null;
            }}
            defaultFormats={config.defaultFormats}
            enableMarketplaceWorkflow
          />

          <div className='mt-8 rounded-xl border border-teal-100 bg-teal-50 p-5 text-sm text-teal-900'>
            <div className='flex items-center gap-2 font-semibold'>
              <Zap className='h-4 w-4' />
              {copy.quickTipTitle}
            </div>
            <p className='mt-2 text-teal-800'>{copy.quickTipBody}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
