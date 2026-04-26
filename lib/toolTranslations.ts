import type { Tool } from '@/lib/toolsData';
import type { Locale } from '@/lib/i18n';

type ToolText = {
  title: string;
  description: string;
};

const esToolTranslations: Record<string, ToolText> = {
  '/image-resizer': {
    title: 'Redimensionador de Imagen',
    description: 'Redimensiona tus imagenes a cualquier tamano al instante',
  },
  '/image-cropper': {
    title: 'Recortador de Imagen',
    description: 'Recorta y ajusta tus imagenes con precision',
  },
  '/passport-photo-maker': {
    title: 'Creador de Foto de Pasaporte',
    description: 'Crea fotos tipo pasaporte en linea',
  },
  '/flip-image': {
    title: 'Voltear Imagen',
    description: 'Voltea imagenes horizontal o verticalmente',
  },
  '/add-watermark': {
    title: 'Agregar Marca de Agua',
    description: 'Agrega marcas de agua de texto o imagen para proteger tus fotos',
  },
  '/black-and-white': {
    title: 'Blanco y Negro',
    description: 'Convierte imagenes a blanco y negro',
  },
  '/add-date': {
    title: 'Agregar Fecha',
    description: 'Agrega fecha y hora a tus imagenes',
  },
  '/blur-face': {
    title: 'Difuminar Rostro',
    description: 'Difumina rostros automaticamente para privacidad',
  },
  '/reduce-size': {
    title: 'Reducir Tamano',
    description: 'Reduce el tamano del archivo manteniendo calidad',
  },
  '/youtube-banner': {
    title: 'Banner de YouTube',
    description: 'Crea banners perfectos para YouTube (2560x1440)',
  },
  '/resize-to-inches': {
    title: 'Redimensionar a Pulgadas',
    description: 'Redimensiona imagenes a medidas exactas en pulgadas',
  },
  '/resize-to-mm': {
    title: 'Redimensionar a MM',
    description: 'Redimensiona imagenes a medidas exactas en milimetros',
  },
  '/upsc-photo': {
    title: 'Foto UPSC',
    description: 'Redimensiona fotos para formularios del examen UPSC',
  },
  '/signature-resizer': {
    title: 'Redimensionador de Firma',
    description: 'Redimensiona firmas para formularios y documentos',
  },
  '/rotate-image': {
    title: 'Rotar Imagen',
    description: 'Rota imagenes en cualquier angulo',
  },
  '/rrb-photo': {
    title: 'Redimensionador de Foto RRB',
    description: 'Redimensiona fotos para formularios del examen RRB',
  },
  '/image-compressor': {
    title: 'Compresor de Imagen',
    description: 'Comprime imagenes sin perder calidad',
  },
  '/compress-10kb': {
    title: 'Comprimir a 10KB',
    description: 'Comprime imagen a tamano exacto de 10KB',
  },
  '/compress-20kb': {
    title: 'Comprimir a 20KB',
    description: 'Comprime imagen a tamano exacto de 20KB',
  },
  '/compress-30kb': {
    title: 'Comprimir a 30KB',
    description: 'Comprime imagen a tamano exacto de 30KB',
  },
  '/compress-40kb': {
    title: 'Comprimir a 40KB',
    description: 'Comprime imagen a tamano exacto de 40KB',
  },
  '/compress-50kb': {
    title: 'Comprimir a 50KB',
    description: 'Comprime imagen a tamano exacto de 50KB',
  },
  '/compress-60kb': {
    title: 'Comprimir a 60KB',
    description: 'Comprime imagen a tamano exacto de 60KB',
  },
  '/compress-70kb': {
    title: 'Comprimir a 70KB',
    description: 'Comprime imagen a tamano exacto de 70KB',
  },
  '/compress-80kb': {
    title: 'Comprimir a 80KB',
    description: 'Comprime imagen a tamano exacto de 80KB',
  },
  '/compress-90kb': {
    title: 'Comprimir a 90KB',
    description: 'Comprime imagen a tamano exacto de 90KB',
  },
  '/compress-100kb': {
    title: 'Comprimir a 100KB',
    description: 'Comprime imagen a tamano exacto de 100KB',
  },
  '/compress-200kb': {
    title: 'Comprimir a 200KB',
    description: 'Comprime imagen a tamano exacto de 200KB',
  },
  '/compress-percentage': {
    title: 'Comprimir por Porcentaje',
    description: 'Reduce el tamano de imagen con porcentaje personalizado',
  },
  '/lossless-compression': {
    title: 'Compresion sin Perdida',
    description: 'Comprime imagenes sin perdida de calidad',
  },
  '/compress-for-web': {
    title: 'Comprimir para Web',
    description: 'Optimiza imagenes para carga rapida en sitios web',
  },
  '/compress-for-email': {
    title: 'Comprimir para Email',
    description: 'Reduce tamano para adjuntos de correo',
  },
  '/compress-for-whatsapp': {
    title: 'Comprimir para WhatsApp',
    description: 'Optimiza imagenes para compartir por WhatsApp',
  },
  '/compress-for-forms': {
    title: 'Comprimir para Formularios',
    description: 'Comprime imagenes para envios de formularios en linea',
  },
  '/jpeg-compressor': {
    title: 'Compresor JPEG',
    description: 'Comprime imagenes JPEG/JPG de forma eficiente',
  },
  '/jpg-compressor': {
    title: 'Compresor JPG',
    description: 'Reduce tamano de archivos JPG sin perder calidad',
  },
  '/png-compressor': {
    title: 'Compresor PNG',
    description: 'Comprime imagenes PNG manteniendo transparencia',
  },
  '/webp-compressor': {
    title: 'Compresor WebP',
    description: 'Comprime imagenes en formato moderno WebP',
  },
  '/gif-compressor': {
    title: 'Compresor GIF',
    description: 'Reduce el tamano de archivos GIF animados',
  },
  '/png-to-jpg': {
    title: 'PNG a JPG',
    description: 'Convierte imagenes PNG a formato JPG en linea',
  },
  '/jpg-to-png': {
    title: 'JPG a PNG',
    description: 'Convierte imagenes JPG a formato PNG en linea',
  },
  '/jpg-to-jpeg': {
    title: 'JPG a JPEG',
    description: 'Convierte JPG a formato JPEG rapidamente',
  },
  '/webp-to-jpg': {
    title: 'WebP a JPG',
    description: 'Convierte imagenes WebP a formato JPG',
  },
  '/jpg-to-webp': {
    title: 'JPG a WebP',
    description: 'Convierte JPG al formato moderno WebP',
  },
  '/png-to-webp': {
    title: 'PNG a WebP',
    description: 'Convierte PNG a WebP para mejor compresion',
  },
  '/webp-to-png': {
    title: 'WebP a PNG',
    description: 'Convierte imagenes WebP a formato PNG',
  },
  '/heic-to-jpg': {
    title: 'HEIC a JPG',
    description: 'Convierte fotos HEIC de iPhone a JPG',
  },
  '/jpg-to-heic': {
    title: 'JPG a HEIC',
    description: 'Convierte imagenes JPG a formato HEIC',
  },
  '/heic-to-png': {
    title: 'HEIC a PNG',
    description: 'Convierte imagenes HEIC a formato PNG',
  },
  '/png-to-heic': {
    title: 'PNG a HEIC',
    description: 'Convierte imagenes PNG a formato HEIC',
  },
  '/heic-to-webp': {
    title: 'HEIC a WebP',
    description: 'Convierte HEIC a formato WebP en linea',
  },
  '/webp-to-heic': {
    title: 'WebP a HEIC',
    description: 'Convierte imagenes WebP a formato HEIC',
  },
  '/avif-to-jpg': {
    title: 'AVIF a JPG',
    description: 'Convierte imagenes AVIF a formato JPG',
  },
  '/jpg-to-avif': {
    title: 'JPG a AVIF',
    description: 'Convierte JPG al formato AVIF de nueva generacion',
  },
  '/avif-to-png': {
    title: 'AVIF a PNG',
    description: 'Convierte imagenes AVIF a formato PNG',
  },
  '/avif-to-webp': {
    title: 'AVIF a WebP',
    description: 'Convierte AVIF a formato WebP en linea',
  },
  '/gif-to-jpg': {
    title: 'GIF a JPG',
    description: 'Convierte GIF animado a imagenes JPG',
  },
  '/jpg-to-gif': {
    title: 'JPG a GIF',
    description: 'Convierte imagenes JPG a formato GIF',
  },
  '/bmp-to-jpg': {
    title: 'BMP a JPG',
    description: 'Convierte mapa de bits BMP a formato JPG',
  },
  '/jpg-to-bmp': {
    title: 'JPG a BMP',
    description: 'Convierte imagenes JPG a formato BMP',
  },
  '/ico-to-png': {
    title: 'ICO a PNG',
    description: 'Convierte archivos de icono a formato PNG',
  },
  '/png-to-ico': {
    title: 'PNG a ICO',
    description: 'Convierte imagenes PNG a iconos ICO',
  },
  '/jpg-to-pdf': {
    title: 'JPG a PDF',
    description: 'Convierte imagenes JPG a documentos PDF',
  },
  '/png-to-pdf': {
    title: 'PNG a PDF',
    description: 'Convierte imagenes PNG a archivos PDF',
  },
  '/webp-to-pdf': {
    title: 'WebP a PDF',
    description: 'Convierte imagenes WebP a formato PDF',
  },
  '/heic-to-pdf': {
    title: 'HEIC a PDF',
    description: 'Convierte fotos HEIC a documentos PDF',
  },
  '/avif-to-pdf': {
    title: 'AVIF a PDF',
    description: 'Convierte imagenes AVIF a archivos PDF',
  },
  '/pdf-to-jpg': {
    title: 'PDF a JPG',
    description: 'Convierte paginas PDF a imagenes JPG',
  },
  '/pdf-to-png': {
    title: 'PDF a PNG',
    description: 'Extrae paginas PDF como imagenes PNG',
  },
  '/pdf-to-webp': {
    title: 'PDF a WebP',
    description: 'Convierte PDF a formato de imagen WebP',
  },
};

const ptEditingToolTranslations: Record<string, ToolText> = {
  '/image-resizer': { title: 'Redimensionador de Imagem', description: 'Redimensione suas imagens para qualquer dimensao instantaneamente' },
  '/image-cropper': { title: 'Recortador de Imagem', description: 'Recorte e ajuste suas imagens com precisao' },
  '/passport-photo-maker': { title: 'Criador de Foto para Passaporte', description: 'Crie fotos para passaporte online' },
  '/flip-image': { title: 'Espelhar Imagem', description: 'Espelhe imagens horizontal ou verticalmente' },
  '/add-watermark': { title: 'Adicionar Marca d agua', description: 'Adicione marcas d agua de texto ou imagem para proteger suas fotos' },
  '/black-and-white': { title: 'Preto e Branco', description: 'Converta imagens coloridas para preto e branco' },
  '/add-date': { title: 'Adicionar Data', description: 'Adicione data e hora as suas imagens' },
  '/blur-face': { title: 'Desfocar Rosto', description: 'Desfoque rostos automaticamente para privacidade' },
  '/reduce-size': { title: 'Reduzir Tamanho', description: 'Reduza o tamanho do arquivo mantendo a qualidade' },
  '/youtube-banner': { title: 'Banner do YouTube', description: 'Crie banners perfeitos para YouTube (2560x1440)' },
  '/resize-to-inches': { title: 'Redimensionar em Polegadas', description: 'Redimensione imagens para medidas exatas em polegadas' },
  '/resize-to-mm': { title: 'Redimensionar em MM', description: 'Redimensione imagens para medidas exatas em milimetros' },
  '/upsc-photo': { title: 'Foto UPSC', description: 'Redimensione fotos para inscricoes do exame UPSC' },
  '/signature-resizer': { title: 'Redimensionador de Assinatura', description: 'Redimensione assinaturas para formularios e documentos' },
  '/rotate-image': { title: 'Girar Imagem', description: 'Gire imagens em qualquer angulo' },
  '/rrb-photo': { title: 'Redimensionador de Foto RRB', description: 'Redimensione fotos para inscricoes do exame RRB' },
};

const frEditingToolTranslations: Record<string, ToolText> = {
  '/image-resizer': { title: 'Redimensionneur d image', description: 'Redimensionnez vos images a n importe quelle taille instantanement' },
  '/image-cropper': { title: 'Recadreur d image', description: 'Recadrez et ajustez vos images avec precision' },
  '/passport-photo-maker': { title: 'Createur de Photo Passeport', description: 'Creez des photos de passeport en ligne' },
  '/flip-image': { title: 'Retourner l image', description: 'Retournez les images horizontalement ou verticalement' },
  '/add-watermark': { title: 'Ajouter un Filigrane', description: 'Ajoutez des filigranes texte ou image pour proteger vos photos' },
  '/black-and-white': { title: 'Noir et Blanc', description: 'Convertissez les images couleur en noir et blanc' },
  '/add-date': { title: 'Ajouter la Date', description: 'Ajoutez la date et l heure a vos images' },
  '/blur-face': { title: 'Flouter le Visage', description: 'Floutez automatiquement les visages pour la confidentialite' },
  '/reduce-size': { title: 'Reduire la Taille', description: 'Reduisez la taille du fichier en conservant la qualite' },
  '/youtube-banner': { title: 'Banniere YouTube', description: 'Creez des bannieres YouTube parfaites (2560x1440)' },
  '/resize-to-inches': { title: 'Redimensionner en Pouces', description: 'Redimensionnez les images avec des dimensions exactes en pouces' },
  '/resize-to-mm': { title: 'Redimensionner en MM', description: 'Redimensionnez les images avec des dimensions exactes en millimetres' },
  '/upsc-photo': { title: 'Photo UPSC', description: 'Redimensionnez des photos pour les formulaires de l examen UPSC' },
  '/signature-resizer': { title: 'Redimensionneur de Signature', description: 'Redimensionnez les signatures pour formulaires et documents' },
  '/rotate-image': { title: 'Pivoter l image', description: 'Faites pivoter les images selon n importe quel angle' },
  '/rrb-photo': { title: 'Redimensionneur Photo RRB', description: 'Redimensionnez des photos pour les formulaires de l examen RRB' },
};

const deEditingToolTranslations: Record<string, ToolText> = {
  '/image-resizer': { title: 'Bildgroessenanderer', description: 'Skaliere deine Bilder sofort auf jede beliebige Groesse' },
  '/image-cropper': { title: 'Bildzuschneider', description: 'Schneide und passe deine Bilder prazise an' },
  '/passport-photo-maker': { title: 'Passfoto-Ersteller', description: 'Erstelle Passfotos online' },
  '/flip-image': { title: 'Bild Spiegeln', description: 'Spiegle Bilder horizontal oder vertikal' },
  '/add-watermark': { title: 'Wasserzeichen Hinzufugen', description: 'Fuge Text- oder Bildwasserzeichen zum Schutz deiner Fotos hinzu' },
  '/black-and-white': { title: 'Schwarz-Weiss', description: 'Wandle Farbbilder in Schwarz-Weiss um' },
  '/add-date': { title: 'Datum Hinzufugen', description: 'Fuge Datum und Uhrzeit zu deinen Bildern hinzu' },
  '/blur-face': { title: 'Gesicht Unscharf Machen', description: 'Verwische Gesichter automatisch fur mehr Privatsphare' },
  '/reduce-size': { title: 'Groesse Reduzieren', description: 'Reduziere die Dateigrosse bei gleichbleibender Qualitat' },
  '/youtube-banner': { title: 'YouTube-Banner', description: 'Erstelle perfekte YouTube-Banner (2560x1440)' },
  '/resize-to-inches': { title: 'In Zoll Skalieren', description: 'Skaliere Bilder auf exakte Zollmasse' },
  '/resize-to-mm': { title: 'In MM Skalieren', description: 'Skaliere Bilder auf exakte Millimetermasse' },
  '/upsc-photo': { title: 'UPSC-Foto', description: 'Skaliere Fotos fur UPSC-Prufungsformulare' },
  '/signature-resizer': { title: 'Signatur-Skalierer', description: 'Skaliere Signaturbilder fur Formulare und Dokumente' },
  '/rotate-image': { title: 'Bild Drehen', description: 'Drehe Bilder in jedem Winkel' },
  '/rrb-photo': { title: 'RRB-Foto-Skalierer', description: 'Skaliere Fotos fur RRB-Prufungsformulare' },
};

const itEditingToolTranslations: Record<string, ToolText> = {
  '/image-resizer': { title: 'Ridimensionatore Immagini', description: 'Ridimensiona le tue immagini a qualsiasi dimensione istantaneamente' },
  '/image-cropper': { title: 'Ritagliatore Immagini', description: 'Ritaglia e regola le immagini con precisione' },
  '/passport-photo-maker': { title: 'Creatore Foto Passaporto', description: 'Crea foto formato passaporto online' },
  '/flip-image': { title: 'Capovolgi Immagine', description: 'Capovolgi immagini in orizzontale o verticale' },
  '/add-watermark': { title: 'Aggiungi Filigrana', description: 'Aggiungi filigrane di testo o immagine per proteggere le foto' },
  '/black-and-white': { title: 'Bianco e Nero', description: 'Converti immagini a colori in bianco e nero' },
  '/add-date': { title: 'Aggiungi Data', description: 'Aggiungi data e ora alle immagini' },
  '/blur-face': { title: 'Sfoca Volto', description: 'Sfoca automaticamente i volti per la privacy' },
  '/reduce-size': { title: 'Riduci Dimensione', description: 'Riduci la dimensione del file mantenendo la qualita' },
  '/youtube-banner': { title: 'Banner YouTube', description: 'Crea banner YouTube perfetti (2560x1440)' },
  '/resize-to-inches': { title: 'Ridimensiona in Pollici', description: 'Ridimensiona immagini con misure esatte in pollici' },
  '/resize-to-mm': { title: 'Ridimensiona in MM', description: 'Ridimensiona immagini con misure esatte in millimetri' },
  '/upsc-photo': { title: 'Foto UPSC', description: 'Ridimensiona foto per domande d esame UPSC' },
  '/signature-resizer': { title: 'Ridimensionatore Firma', description: 'Ridimensiona firme per moduli e documenti' },
  '/rotate-image': { title: 'Ruota Immagine', description: 'Ruota immagini a qualsiasi angolo' },
  '/rrb-photo': { title: 'Ridimensionatore Foto RRB', description: 'Ridimensiona foto per domande d esame RRB' },
};

const editingToolTranslationsByLocale: Partial<Record<Locale, Record<string, ToolText>>> = {
  pt: ptEditingToolTranslations,
  fr: frEditingToolTranslations,
  de: deEditingToolTranslations,
  it: itEditingToolTranslations,
};

function getTargetLanguageLabels(locale: Locale): {
  toWord: string;
  convertDescription: (from: string, to: string) => string;
  toPdfDescription: (from: string) => string;
  fromPdfDescription: (to: string) => string;
  compressToTitle: (size: string) => string;
  compressToDescription: (size: string) => string;
  compressByPercentageTitle: string;
  compressByPercentageDescription: string;
  losslessCompressionTitle: string;
  losslessCompressionDescription: string;
  imageCompressorTitle: string;
  imageCompressorDescription: string;
  formatCompressorTitle: (format: string) => string;
  formatCompressorDescription: (format: string) => string;
  compressForTitle: (target: 'web' | 'email' | 'whatsapp' | 'forms') => string;
  compressForDescription: (target: 'web' | 'email' | 'whatsapp' | 'forms') => string;
} {
  if (locale === 'pt') {
    return {
      toWord: 'para',
      convertDescription: (from, to) => `Converta imagens ${from} para formato ${to}`,
      toPdfDescription: (from) => `Converta imagens ${from} para arquivos PDF`,
      fromPdfDescription: (to) => `Extraia paginas PDF como imagens ${to}`,
      compressToTitle: (size) => `Comprimir para ${size}`,
      compressToDescription: (size) => `Comprime a imagem para exatamente ${size}`,
      compressByPercentageTitle: 'Comprimir por Percentual',
      compressByPercentageDescription: 'Reduza o tamanho da imagem com percentual personalizado',
      losslessCompressionTitle: 'Compressao sem Perda',
      losslessCompressionDescription: 'Comprima imagens sem perda de qualidade',
      imageCompressorTitle: 'Compressor de Imagem',
      imageCompressorDescription: 'Comprima imagens sem perder qualidade',
      formatCompressorTitle: (format) => `Compressor ${format}`,
      formatCompressorDescription: (format) => `Comprima imagens ${format} de forma eficiente`,
      compressForTitle: (target) => {
        if (target === 'web') return 'Comprimir para Web';
        if (target === 'email') return 'Comprimir para Email';
        if (target === 'whatsapp') return 'Comprimir para WhatsApp';
        return 'Comprimir para Formularios';
      },
      compressForDescription: (target) => {
        if (target === 'web') return 'Otimize imagens para carregamento rapido no site';
        if (target === 'email') return 'Reduza o tamanho para anexos de email';
        if (target === 'whatsapp') return 'Otimize imagens para compartilhamento no WhatsApp';
        return 'Comprima imagens para envio de formularios online';
      },
    };
  }

  if (locale === 'fr') {
    return {
      toWord: 'vers',
      convertDescription: (from, to) => `Convertissez les images ${from} en format ${to}`,
      toPdfDescription: (from) => `Convertissez les images ${from} en fichiers PDF`,
      fromPdfDescription: (to) => `Extrayez les pages PDF en images ${to}`,
      compressToTitle: (size) => `Compresser a ${size}`,
      compressToDescription: (size) => `Compressez l image a exactement ${size}`,
      compressByPercentageTitle: 'Compresser par Pourcentage',
      compressByPercentageDescription: 'Reduisez la taille de l image avec un pourcentage personnalise',
      losslessCompressionTitle: 'Compression sans Perte',
      losslessCompressionDescription: 'Compressez les images sans perte de qualite',
      imageCompressorTitle: 'Compresseur d image',
      imageCompressorDescription: 'Compressez les images sans perdre en qualite',
      formatCompressorTitle: (format) => `Compresseur ${format}`,
      formatCompressorDescription: (format) => `Compressez efficacement les images ${format}`,
      compressForTitle: (target) => {
        if (target === 'web') return 'Compresser pour le Web';
        if (target === 'email') return 'Compresser pour Email';
        if (target === 'whatsapp') return 'Compresser pour WhatsApp';
        return 'Compresser pour Formulaires';
      },
      compressForDescription: (target) => {
        if (target === 'web') return 'Optimisez les images pour un chargement rapide du site';
        if (target === 'email') return 'Reduisez la taille pour les pieces jointes email';
        if (target === 'whatsapp') return 'Optimisez les images pour le partage WhatsApp';
        return 'Compressez les images pour les soumissions de formulaires en ligne';
      },
    };
  }

  if (locale === 'de') {
    return {
      toWord: 'zu',
      convertDescription: (from, to) => `Konvertiere ${from}-Bilder in das ${to}-Format`,
      toPdfDescription: (from) => `Konvertiere ${from}-Bilder in PDF-Dateien`,
      fromPdfDescription: (to) => `Extrahiere PDF-Seiten als ${to}-Bilder`,
      compressToTitle: (size) => `Auf ${size} komprimieren`,
      compressToDescription: (size) => `Komprimiere das Bild auf genau ${size}`,
      compressByPercentageTitle: 'Prozentual Komprimieren',
      compressByPercentageDescription: 'Reduziere die Bildgroesse mit einem benutzerdefinierten Prozentsatz',
      losslessCompressionTitle: 'Verlustfreie Komprimierung',
      losslessCompressionDescription: 'Komprimiere Bilder ohne Qualitatsverlust',
      imageCompressorTitle: 'Bildkomprimierer',
      imageCompressorDescription: 'Komprimiere Bilder ohne Qualitatsverlust',
      formatCompressorTitle: (format) => `${format}-Komprimierer`,
      formatCompressorDescription: (format) => `Komprimiere ${format}-Bilder effizient`,
      compressForTitle: (target) => {
        if (target === 'web') return 'Fur Web Komprimieren';
        if (target === 'email') return 'Fur Email Komprimieren';
        if (target === 'whatsapp') return 'Fur WhatsApp Komprimieren';
        return 'Fur Formulare Komprimieren';
      },
      compressForDescription: (target) => {
        if (target === 'web') return 'Optimiere Bilder fur schnelles Laden von Websites';
        if (target === 'email') return 'Reduziere die Groesse fur Email-Anhange';
        if (target === 'whatsapp') return 'Optimiere Bilder fur das Teilen auf WhatsApp';
        return 'Komprimiere Bilder fur Online-Formularubertragungen';
      },
    };
  }

  return {
    toWord: 'a',
    convertDescription: (from, to) => `Converti immagini ${from} in formato ${to}`,
    toPdfDescription: (from) => `Converti immagini ${from} in file PDF`,
    fromPdfDescription: (to) => `Estrai pagine PDF come immagini ${to}`,
    compressToTitle: (size) => `Comprimi a ${size}`,
    compressToDescription: (size) => `Comprimi l immagine esattamente a ${size}`,
    compressByPercentageTitle: 'Comprimi per Percentuale',
    compressByPercentageDescription: 'Riduci la dimensione immagine con percentuale personalizzata',
    losslessCompressionTitle: 'Compressione senza Perdita',
    losslessCompressionDescription: 'Comprimi immagini senza perdita di qualita',
    imageCompressorTitle: 'Compressore Immagini',
    imageCompressorDescription: 'Comprimi immagini senza perdere qualita',
    formatCompressorTitle: (format) => `Compressore ${format}`,
    formatCompressorDescription: (format) => `Comprimi immagini ${format} in modo efficiente`,
    compressForTitle: (target) => {
      if (target === 'web') return 'Comprimi per Web';
      if (target === 'email') return 'Comprimi per Email';
      if (target === 'whatsapp') return 'Comprimi per WhatsApp';
      return 'Comprimi per Moduli';
    },
    compressForDescription: (target) => {
      if (target === 'web') return 'Ottimizza immagini per caricamento rapido del sito';
      if (target === 'email') return 'Riduci la dimensione per allegati email';
      if (target === 'whatsapp') return 'Ottimizza immagini per condivisione su WhatsApp';
      return 'Comprimi immagini per invio moduli online';
    },
  };
}

function getGeneratedToolTranslation(tool: Tool, locale: Locale): ToolText | null {
  if (!['pt', 'fr', 'de', 'it'].includes(locale)) {
    return null;
  }

  const editingTranslations = editingToolTranslationsByLocale[locale];
  const exactEditing = editingTranslations?.[tool.href];
  if (exactEditing) {
    return exactEditing;
  }

  const labels = getTargetLanguageLabels(locale);

  const converterMatch = tool.href.match(/^\/([a-z0-9]+)-to-([a-z0-9]+)$/);
  if (converterMatch) {
    const from = converterMatch[1].toUpperCase();
    const to = converterMatch[2].toUpperCase();
    const title = `${from} ${labels.toWord} ${to}`;

    if (converterMatch[1] === 'pdf') {
      return { title, description: labels.fromPdfDescription(to) };
    }

    if (converterMatch[2] === 'pdf') {
      return { title, description: labels.toPdfDescription(from) };
    }

    return { title, description: labels.convertDescription(from, to) };
  }

  const compressSizeMatch = tool.href.match(/^\/compress-(\d+)kb$/);
  if (compressSizeMatch) {
    const size = `${compressSizeMatch[1]}KB`;
    return {
      title: labels.compressToTitle(size),
      description: labels.compressToDescription(size),
    };
  }

  if (tool.href === '/compress-percentage') {
    return {
      title: labels.compressByPercentageTitle,
      description: labels.compressByPercentageDescription,
    };
  }

  if (tool.href === '/lossless-compression') {
    return {
      title: labels.losslessCompressionTitle,
      description: labels.losslessCompressionDescription,
    };
  }

  if (tool.href === '/image-compressor') {
    return {
      title: labels.imageCompressorTitle,
      description: labels.imageCompressorDescription,
    };
  }

  const formatCompressorMatch = tool.href.match(/^\/(jpeg|jpg|png|webp|gif)-compressor$/);
  if (formatCompressorMatch) {
    const format = formatCompressorMatch[1].toUpperCase();
    return {
      title: labels.formatCompressorTitle(format),
      description: labels.formatCompressorDescription(format),
    };
  }

  const compressForMatch = tool.href.match(/^\/compress-for-(web|email|whatsapp|forms)$/);
  if (compressForMatch) {
    const target = compressForMatch[1] as 'web' | 'email' | 'whatsapp' | 'forms';
    return {
      title: labels.compressForTitle(target),
      description: labels.compressForDescription(target),
    };
  }

  return null;
}

export function localizeTool(tool: Tool, locale: Locale): Tool {
  if (locale === 'en') {
    return tool;
  }

  const translated = locale === 'es'
    ? esToolTranslations[tool.href]
    : getGeneratedToolTranslation(tool, locale);

  if (!translated) {
    return tool;
  }

  return {
    ...tool,
    title: translated.title,
    description: translated.description,
  };
}

export function localizeTools(tools: Tool[], locale: Locale): Tool[] {
  return tools.map((tool) => localizeTool(tool, locale));
}
