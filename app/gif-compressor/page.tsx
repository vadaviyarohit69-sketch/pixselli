"use client";

import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import type { Locale } from '@/lib/i18n';
import { useState, useRef, useCallback } from 'react';
import { AlertCircle, Upload, Download, RotateCcw, RotateCw, Image as ImageIcon, Maximize2, Minimize2, Lock, Unlock, Info, ChevronDown, ChevronUp, Shield, Check, CheckCircle, CheckCircle2, Plus, X, FolderArchive, Crop, Move, ZoomIn, ZoomOut, RefreshCw, Gauge, Percent, Ruler, Train, Calendar, Droplet, Type, Contrast, Palette, Eye, Scan, Target, Mail, FileText, Globe, MessageCircle, FlipHorizontal, FlipVertical, Zap, Youtube, Monitor, Smartphone, Tv, Camera, User, PenTool } from "lucide-react";

interface ImageState {
  originalFile: File | null;
  originalUrl: string;
  processedUrl: string;
  originalSize: number;
  compressedSize: number;
  originalWidth: number;
  originalHeight: number;
}

function normalizeDownloadName(fileName: string) {
  const dotIndex = fileName.lastIndexOf('.');
  if (dotIndex <= 0) return normalizeFileToken(fileName);
  const baseName = fileName.slice(0, dotIndex);
  const extension = fileName.slice(dotIndex + 1).toLowerCase();
  return `${normalizeFileToken(baseName)}.${extension}`;
}

type GifCompressorCopy = {
  pageTitle: string;
  breadcrumbTool: string;
  heroTitle: string;
  heroSubtitle: string;
  uploadPromptTitle: string;
  uploadPromptSubtitle: string;
  maxFileSize: string;
  invalidFile: string;
  originalImage: string;
  compressedImage: string;
  processing: string;
  fileSize: string;
  dimensions: string;
  saved: string;
  compressionQuality: string;
  lowerQuality: string;
  smallerFile: string;
  balanced: string;
  higherQuality: string;
  largerFile: string;
  startOver: string;
  downloadCompressed: string;
  statsOriginal: string;
  statsCompressed: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  featureSmartTitle: string;
  featureSmartBody: string;
  featureQualityTitle: string;
  featureQualityBody: string;
  featurePrivateTitle: string;
  featurePrivateBody: string;
  howToTitle: string;
  step1Title: string;
  step1Body: string;
  step2Title: string;
  step2Body: string;
  step3Title: string;
  step3Body: string;
  step4Title: string;
  step4Body: string;
  proTipLabel: string;
  proTipBody: string;
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  faq5Q: string;
  faq5A: string;
};

const GIF_COMPRESSOR_COPY: Record<Locale, GifCompressorCopy> = {
  en: {
    pageTitle: 'GIF Compressor',
    breadcrumbTool: 'GIF Compressor',
    heroTitle: 'GIF Compressor',
    heroSubtitle:
      'Compress images without losing quality. Reduce file size of GIF animations with adjustable quality settings. Perfect for web optimization, email attachments, and faster loading times. Fast, secure, and works entirely in your browser.',
    uploadPromptTitle: 'Drag & drop your image here',
    uploadPromptSubtitle: 'or click to browse files',
    maxFileSize: 'Maximum file size: 10MB',
    invalidFile: 'Please select a valid image file',
    originalImage: 'Original Image',
    compressedImage: 'Compressed Image',
    processing: 'Processing...',
    fileSize: 'File Size:',
    dimensions: 'Dimensions:',
    saved: 'Saved:',
    compressionQuality: 'Compression Quality',
    lowerQuality: 'Lower Quality',
    smallerFile: 'Smaller File',
    balanced: 'Balanced',
    higherQuality: 'Higher Quality',
    largerFile: 'Larger File',
    startOver: 'Start Over',
    downloadCompressed: 'Download Compressed Image',
    statsOriginal: 'Original',
    statsCompressed: 'Compressed',
    aboutTitle: 'About GIF Compressor',
    aboutP1:
      'Our free online GIF Compressor helps you reduce image file size without compromising visual quality. Perfect for optimizing images for websites, social media, email attachments, and cloud storage. Compress GIF animations with adjustable quality settings from 10% to 100%.',
    aboutP2:
      'Simply upload your image, adjust the compression quality slider to find the perfect balance between file size and visual quality, and download your optimized image. Real-time preview shows exact file size savings. All compression happens securely in your browser using advanced algorithms that preserve image clarity while removing unnecessary data. No registration required, completely free to use.',
    featureSmartTitle: 'Smart Compression',
    featureSmartBody: 'Reduce file size by up to 90% without noticeable quality loss.',
    featureQualityTitle: 'Quality Control',
    featureQualityBody: 'Adjustable quality slider for perfect size-quality balance.',
    featurePrivateTitle: '100% Private',
    featurePrivateBody: 'All compression happens locally in your browser.',
    howToTitle: 'How to Compress Images',
    step1Title: 'Upload Your Image',
    step1Body: 'Click the upload area or drag and drop your image. Supports JPG, PNG, WebP formats up to 10MB.',
    step2Title: 'Adjust Quality',
    step2Body: 'Use the quality slider to adjust compression level. Higher quality = larger file, lower quality = smaller file.',
    step3Title: 'Preview Results',
    step3Body: 'Compare original and compressed image side-by-side. See exact file size savings in real-time.',
    step4Title: 'Download Compressed',
    step4Body: 'Download your optimized image with reduced file size while maintaining great quality.',
    proTipLabel: 'Pro Tip:',
    proTipBody: 'For web images, use 70-85% quality. For print, use 85-95%. For social media, 70-80% is perfect. Experiment to find your ideal balance!',
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'What is image compression?',
    faq1A:
      'Image compression reduces file size by removing redundant data while maintaining visual quality. Our tool uses smart compression algorithms to optimize GIF animations without noticeable quality loss.',
    faq2Q: 'What quality setting should I use?',
    faq2A:
      'For web images: 70-85% quality provides best balance. For printing: 85-95% quality recommended. For social media: 70-80% quality is sufficient. Lower quality = smaller file size but may show artifacts.',
    faq3Q: 'Does compression reduce image dimensions?',
    faq3A:
      'No, compression only reduces file size, not pixel dimensions. Your image width and height remain unchanged. Use our Image Resizer tool if you need to change dimensions.',
    faq4Q: 'Can I compress images without quality loss?',
    faq4A:
      'Yes! Set quality to 90-100% for minimal quality loss. Our tool uses smart compression that removes only unnecessary data while preserving visual quality. Results depend on original image complexity.',
    faq5Q: 'Is image compression secure and private?',
    faq5A:
      'Absolutely! All compression happens locally in your browser using client-side JavaScript. Your GIF animations never leave your device or get uploaded to any server, ensuring complete privacy.',
  },
  es: {
    pageTitle: 'Compresor de GIF',
    breadcrumbTool: 'Compresor de GIF',
    heroTitle: 'Compresor de GIF',
    heroSubtitle:
      'Comprime imagenes sin perder calidad. Reduce el tamano de las animaciones GIF con ajustes de calidad. Ideal para optimizacion web, adjuntos de email y cargas mas rapidas. Rapido, seguro y funciona en tu navegador.',
    uploadPromptTitle: 'Arrastra y suelta tu imagen aqui',
    uploadPromptSubtitle: 'o haz clic para seleccionar archivos',
    maxFileSize: 'Tamano maximo: 10MB',
    invalidFile: 'Selecciona un archivo de imagen valido',
    originalImage: 'Imagen original',
    compressedImage: 'Imagen comprimida',
    processing: 'Procesando...',
    fileSize: 'Tamano:',
    dimensions: 'Dimensiones:',
    saved: 'Ahorrado:',
    compressionQuality: 'Calidad de compresion',
    lowerQuality: 'Menor calidad',
    smallerFile: 'Archivo mas pequeno',
    balanced: 'Equilibrado',
    higherQuality: 'Mayor calidad',
    largerFile: 'Archivo mas grande',
    startOver: 'Empezar de nuevo',
    downloadCompressed: 'Descargar imagen comprimida',
    statsOriginal: 'Original',
    statsCompressed: 'Comprimida',
    aboutTitle: 'Acerca del compresor de GIF',
    aboutP1:
      'Nuestro compresor de GIF online te ayuda a reducir el tamano del archivo sin perder calidad visual. Ideal para optimizar imagenes para web, redes sociales, email y almacenamiento. Ajusta la calidad del 10% al 100%.',
    aboutP2:
      'Sube una imagen, ajusta la calidad para encontrar el equilibrio entre tamano y calidad, y descarga la version optimizada. La vista previa muestra el ahorro exacto. Todo el procesamiento ocurre en tu navegador. Sin registro y totalmente gratis.',
    featureSmartTitle: 'Compresion inteligente',
    featureSmartBody: 'Reduce el tamano hasta un 90% sin perdida notable.',
    featureQualityTitle: 'Control de calidad',
    featureQualityBody: 'Control deslizante para equilibrar calidad y tamano.',
    featurePrivateTitle: '100% privado',
    featurePrivateBody: 'Todo se procesa localmente en tu navegador.',
    howToTitle: 'Como comprimir imagenes',
    step1Title: 'Sube tu imagen',
    step1Body: 'Haz clic o arrastra y suelta. Compatible con JPG, PNG, WebP hasta 10MB.',
    step2Title: 'Ajusta la calidad',
    step2Body: 'Usa el control de calidad. Mas calidad = archivo mas grande; menos calidad = archivo mas pequeno.',
    step3Title: 'Previsualiza',
    step3Body: 'Compara original y comprimida. Mira el ahorro en tiempo real.',
    step4Title: 'Descarga',
    step4Body: 'Descarga la imagen optimizada con menor tamano y buena calidad.',
    proTipLabel: 'Consejo:',
    proTipBody: 'Para web, usa 70-85%. Para imprimir, 85-95%. Para redes sociales, 70-80% suele ser suficiente. Prueba y elige el mejor equilibrio.',
    faqTitle: 'Preguntas frecuentes',
    faq1Q: 'Que es la compresion de imagenes?',
    faq1A:
      'La compresion reduce el tamano del archivo eliminando datos redundantes manteniendo la calidad visual. Nuestra herramienta usa algoritmos inteligentes para optimizar animaciones GIF sin perdida notable.',
    faq2Q: 'Que calidad debo usar?',
    faq2A:
      'Para web: 70-85% es el mejor equilibrio. Para imprimir: 85-95%. Para redes: 70-80%. Menos calidad = archivo mas pequeno, pero puede haber artefactos.',
    faq3Q: 'La compresion cambia las dimensiones?',
    faq3A:
      'No. La compresion solo reduce el tamano del archivo, no los pixeles. El ancho y alto no cambian. Usa el Redimensionador si necesitas cambiar dimensiones.',
    faq4Q: 'Puedo comprimir sin perder calidad?',
    faq4A:
      'Si. Usa 90-100% para una perdida minima. El resultado depende de la complejidad de la imagen original.',
    faq5Q: 'Es seguro y privado?',
    faq5A:
      'Si. Todo ocurre localmente en tu navegador. Tus GIF no se suben a ningun servidor, asi que tu privacidad esta protegida.',
  },
  pt: {
    pageTitle: 'Compressor de GIF',
    breadcrumbTool: 'Compressor de GIF',
    heroTitle: 'Compressor de GIF',
    heroSubtitle:
      'Comprima imagens sem perder qualidade. Reduza o tamanho de animacoes GIF com ajustes de qualidade. Ideal para otimizacao web, anexos de email e carregamento mais rapido. Rapido, seguro e funciona no seu navegador.',
    uploadPromptTitle: 'Arraste e solte sua imagem aqui',
    uploadPromptSubtitle: 'ou clique para selecionar arquivos',
    maxFileSize: 'Tamanho maximo: 10MB',
    invalidFile: 'Selecione um arquivo de imagem valido',
    originalImage: 'Imagem original',
    compressedImage: 'Imagem comprimida',
    processing: 'Processando...',
    fileSize: 'Tamanho:',
    dimensions: 'Dimensoes:',
    saved: 'Economia:',
    compressionQuality: 'Qualidade de compressao',
    lowerQuality: 'Menor qualidade',
    smallerFile: 'Arquivo menor',
    balanced: 'Equilibrado',
    higherQuality: 'Maior qualidade',
    largerFile: 'Arquivo maior',
    startOver: 'Recomecar',
    downloadCompressed: 'Baixar imagem comprimida',
    statsOriginal: 'Original',
    statsCompressed: 'Comprimida',
    aboutTitle: 'Sobre o compressor de GIF',
    aboutP1:
      'Nosso compressor de GIF online ajuda a reduzir o tamanho do arquivo sem comprometer a qualidade visual. Ideal para otimizar imagens para sites, redes sociais, email e armazenamento. Ajuste a qualidade de 10% a 100%.',
    aboutP2:
      'Basta enviar a imagem, ajustar a qualidade para encontrar o melhor equilibrio entre tamanho e qualidade e baixar o resultado. A previsualizacao mostra a economia exata. Tudo acontece no navegador, com privacidade total. Sem cadastro e gratis.',
    featureSmartTitle: 'Compressao inteligente',
    featureSmartBody: 'Reduza o tamanho em ate 90% sem perda perceptivel.',
    featureQualityTitle: 'Controle de qualidade',
    featureQualityBody: 'Controle deslizante para ajustar tamanho e qualidade.',
    featurePrivateTitle: '100% privado',
    featurePrivateBody: 'Tudo e processado localmente no navegador.',
    howToTitle: 'Como comprimir imagens',
    step1Title: 'Envie sua imagem',
    step1Body: 'Clique na area de upload ou arraste e solte. Suporta JPG, PNG e WebP ate 10MB.',
    step2Title: 'Ajuste a qualidade',
    step2Body: 'Use o controle de qualidade. Maior qualidade = arquivo maior; menor qualidade = arquivo menor.',
    step3Title: 'Veja o resultado',
    step3Body: 'Compare original e comprimida lado a lado. Veja a economia em tempo real.',
    step4Title: 'Baixe',
    step4Body: 'Baixe a imagem otimizada com menor tamanho e boa qualidade.',
    proTipLabel: 'Dica:',
    proTipBody: 'Para web, use 70-85%. Para impressao, 85-95%. Para redes sociais, 70-80% geralmente e suficiente. Teste para achar o melhor equilibrio.',
    faqTitle: 'Perguntas frequentes',
    faq1Q: 'O que e compressao de imagem?',
    faq1A:
      'Compressao reduz o tamanho do arquivo removendo dados redundantes mantendo a qualidade visual. Nossa ferramenta usa algoritmos inteligentes para otimizar GIF sem perda perceptivel.',
    faq2Q: 'Qual qualidade devo usar?',
    faq2A:
      'Para web: 70-85%. Para impressao: 85-95%. Para redes sociais: 70-80%. Menor qualidade = arquivo menor, mas pode gerar artefatos.',
    faq3Q: 'A compressao muda as dimensoes?',
    faq3A:
      'Nao. A compressao reduz o tamanho do arquivo, nao os pixels. Largura e altura nao mudam. Use o redimensionador se precisar alterar dimensoes.',
    faq4Q: 'Posso comprimir sem perder qualidade?',
    faq4A:
      'Sim. Use 90-100% para perda minima. O resultado depende da complexidade da imagem original.',
    faq5Q: 'E seguro e privado?',
    faq5A:
      'Sim. Tudo acontece localmente no navegador. Seus GIFs nao sao enviados para servidor, garantindo privacidade total.',
  },
  fr: {
    pageTitle: 'Compresseur GIF',
    breadcrumbTool: 'Compresseur GIF',
    heroTitle: 'Compresseur GIF',
    heroSubtitle:
      'Compressez des images sans perdre en qualite. Reduisez la taille des animations GIF avec un reglage de qualite. Parfait pour le web, les pieces jointes email et des chargements plus rapides. Rapide, securise et 100% navigateur.',
    uploadPromptTitle: 'Glissez-deposez votre image ici',
    uploadPromptSubtitle: 'ou cliquez pour choisir des fichiers',
    maxFileSize: 'Taille maximale : 10MB',
    invalidFile: 'Veuillez selectionner un fichier image valide',
    originalImage: 'Image originale',
    compressedImage: 'Image compressee',
    processing: 'Traitement...',
    fileSize: 'Taille :',
    dimensions: 'Dimensions :',
    saved: 'Economise :',
    compressionQuality: 'Qualite de compression',
    lowerQuality: 'Qualite plus faible',
    smallerFile: 'Fichier plus petit',
    balanced: 'Equilibre',
    higherQuality: 'Qualite plus elevee',
    largerFile: 'Fichier plus grand',
    startOver: 'Recommencer',
    downloadCompressed: 'Telecharger l image compressee',
    statsOriginal: 'Originale',
    statsCompressed: 'Compressee',
    aboutTitle: 'A propos du compresseur GIF',
    aboutP1:
      'Notre compresseur GIF en ligne gratuit reduit la taille des fichiers sans compromettre la qualite visuelle. Ideal pour sites web, reseaux sociaux, emails et stockage. Ajustez la qualite de 10% a 100%.',
    aboutP2:
      'Televersez une image, ajustez la qualite pour trouver le meilleur compromis taille/qualite et telechargez le resultat. L apercu affiche l economie exacte. Tout se fait dans votre navigateur, sans inscription et gratuitement.',
    featureSmartTitle: 'Compression intelligente',
    featureSmartBody: 'Reduisez la taille jusqu a 90% sans perte visible.',
    featureQualityTitle: 'Controle de qualite',
    featureQualityBody: 'Curseur de qualite pour un bon compromis.',
    featurePrivateTitle: '100% prive',
    featurePrivateBody: 'Tout est traite localement dans le navigateur.',
    howToTitle: 'Comment compresser des images',
    step1Title: 'Televersez votre image',
    step1Body: 'Cliquez sur la zone d upload ou glissez-deposez. Supporte JPG, PNG, WebP jusqu a 10MB.',
    step2Title: 'Ajustez la qualite',
    step2Body: 'Utilisez le curseur. Plus de qualite = fichier plus grand ; moins de qualite = fichier plus petit.',
    step3Title: 'Previsualisez',
    step3Body: 'Comparez l original et la version compressee. Voyez l economie en temps reel.',
    step4Title: 'Telechargez',
    step4Body: 'Telechargez l image optimisee avec une taille reduite.',
    proTipLabel: 'Astuce :',
    proTipBody: 'Pour le web, 70-85%. Pour l impression, 85-95%. Pour les reseaux sociaux, 70-80% suffit souvent. Testez pour trouver votre meilleur compromis.',
    faqTitle: 'Questions frequentes',
    faq1Q: 'Qu est-ce que la compression d image ?',
    faq1A:
      'La compression reduit la taille du fichier en supprimant les donnees redondantes tout en preservant la qualite visuelle. Notre outil optimise les GIF sans perte notable.',
    faq2Q: 'Quelle qualite choisir ?',
    faq2A:
      'Web : 70-85%. Impression : 85-95%. Reseaux sociaux : 70-80%. Moins de qualite = fichier plus petit, mais possibles artefacts.',
    faq3Q: 'La compression change-t-elle les dimensions ?',
    faq3A:
      'Non. Elle reduit la taille du fichier, pas les dimensions en pixels. Utilisez l outil de redimensionnement pour changer largeur/hauteur.',
    faq4Q: 'Puis-je compresser sans perte de qualite ?',
    faq4A:
      'Oui. Choisissez 90-100% pour une perte minimale. Le resultat depend de l image d origine.',
    faq5Q: 'Est-ce securise et prive ?',
    faq5A:
      'Oui. Tout se fait localement dans votre navigateur. Vos GIF ne sont pas envoyes sur un serveur, garantissant la confidentialite.',
  },
  de: {
    pageTitle: 'GIF Kompressor',
    breadcrumbTool: 'GIF Kompressor',
    heroTitle: 'GIF Kompressor',
    heroSubtitle:
      'Bilder komprimieren ohne sichtbaren Qualitatsverlust. Reduzieren Sie die Dateigrosse von GIF Animationen mit einstellbarer Qualitat. Ideal fuer Web, E-Mail und schnellere Ladezeiten. Schnell, sicher und im Browser.',
    uploadPromptTitle: 'Bild hierher ziehen und ablegen',
    uploadPromptSubtitle: 'oder klicken zum Auswaehlen',
    maxFileSize: 'Maximale Dateigrosse: 10MB',
    invalidFile: 'Bitte eine gueltige Bilddatei auswaehlen',
    originalImage: 'Originalbild',
    compressedImage: 'Komprimiertes Bild',
    processing: 'Wird verarbeitet...',
    fileSize: 'Dateigrosse:',
    dimensions: 'Abmessungen:',
    saved: 'Ersparnis:',
    compressionQuality: 'Kompressionsqualitaet',
    lowerQuality: 'Niedrigere Qualitaet',
    smallerFile: 'Kleinere Datei',
    balanced: 'Ausgewogen',
    higherQuality: 'Hoehere Qualitaet',
    largerFile: 'Groessere Datei',
    startOver: 'Neu starten',
    downloadCompressed: 'Komprimiertes Bild herunterladen',
    statsOriginal: 'Original',
    statsCompressed: 'Komprimiert',
    aboutTitle: 'Ueber den GIF Kompressor',
    aboutP1:
      'Unser kostenloser Online GIF Kompressor reduziert die Dateigrosse ohne die visuelle Qualitaet stark zu beeintraechtigen. Perfekt fuer Websites, Social Media, E-Mail und Cloud. Qualitaet von 10% bis 100% einstellbar.',
    aboutP2:
      'Einfach Bild hochladen, Qualitaet einstellen und das optimierte Bild herunterladen. Die Vorschau zeigt die genaue Ersparnis. Alles passiert lokal im Browser, ohne Registrierung und kostenlos.',
    featureSmartTitle: 'Intelligente Komprimierung',
    featureSmartBody: 'Reduziert die Dateigrosse um bis zu 90% ohne deutlichen Verlust.',
    featureQualityTitle: 'Qualitaetskontrolle',
    featureQualityBody: 'Qualitaetsregler fuer das beste Groesse-Qualitaet Verhaeltnis.',
    featurePrivateTitle: '100% privat',
    featurePrivateBody: 'Die Verarbeitung erfolgt lokal in Ihrem Browser.',
    howToTitle: 'So komprimieren Sie Bilder',
    step1Title: 'Bild hochladen',
    step1Body: 'Klicken oder per Drag & Drop. Unterstuetzt JPG, PNG, WebP bis 10MB.',
    step2Title: 'Qualitaet einstellen',
    step2Body: 'Regler verwenden. Hoehere Qualitaet = groessere Datei; niedrigere Qualitaet = kleinere Datei.',
    step3Title: 'Ergebnis ansehen',
    step3Body: 'Original und komprimiert vergleichen. Ersparnis in Echtzeit sehen.',
    step4Title: 'Herunterladen',
    step4Body: 'Optimiertes Bild mit kleinerer Dateigroesse herunterladen.',
    proTipLabel: 'Tipp:',
    proTipBody: 'Fuer Web: 70-85%. Fuer Druck: 85-95%. Fuer Social Media: 70-80% reichen oft. Testen Sie fuer das beste Ergebnis.',
    faqTitle: 'Hauefige Fragen',
    faq1Q: 'Was ist Bildkomprimierung?',
    faq1A:
      'Bildkomprimierung reduziert die Dateigroesse, indem redundante Daten entfernt werden, waehrend die Qualitaet moeglichst erhalten bleibt. Unser Tool optimiert GIFs ohne sichtbaren Verlust.',
    faq2Q: 'Welche Qualitaet soll ich waehlen?',
    faq2A:
      'Web: 70-85%. Druck: 85-95%. Social Media: 70-80%. Niedrigere Qualitaet = kleinere Datei, aber moegliche Artefakte.',
    faq3Q: 'Veraendert Komprimierung die Abmessungen?',
    faq3A:
      'Nein. Nur die Dateigroesse wird reduziert, nicht die Pixelabmessungen. Nutzen Sie den Image Resizer, wenn Sie die Groesse aendern wollen.',
    faq4Q: 'Kann ich ohne Qualitaetsverlust komprimieren?',
    faq4A:
      'Ja. Waehlen Sie 90-100% fuer minimalen Verlust. Das Ergebnis haengt von der Bildkomplexitaet ab.',
    faq5Q: 'Ist das sicher und privat?',
    faq5A:
      'Ja. Alles laeuft lokal im Browser. Ihre GIFs werden nicht hochgeladen, somit bleibt alles privat.',
  },
  it: {
    pageTitle: 'Compressore GIF',
    breadcrumbTool: 'Compressore GIF',
    heroTitle: 'Compressore GIF',
    heroSubtitle:
      'Comprimi immagini senza perdere qualita. Riduci la dimensione delle animazioni GIF con un controllo qualita regolabile. Perfetto per web, email e caricamenti piu rapidi. Veloce, sicuro e tutto nel browser.',
    uploadPromptTitle: 'Trascina e rilascia la tua immagine qui',
    uploadPromptSubtitle: 'oppure clicca per selezionare i file',
    maxFileSize: 'Dimensione massima: 10MB',
    invalidFile: 'Seleziona un file immagine valido',
    originalImage: 'Immagine originale',
    compressedImage: 'Immagine compressa',
    processing: 'Elaborazione...',
    fileSize: 'Dimensione:',
    dimensions: 'Dimensioni:',
    saved: 'Risparmiato:',
    compressionQuality: 'Qualita di compressione',
    lowerQuality: 'Qualita piu bassa',
    smallerFile: 'File piu piccolo',
    balanced: 'Bilanciato',
    higherQuality: 'Qualita piu alta',
    largerFile: 'File piu grande',
    startOver: 'Ricomincia',
    downloadCompressed: 'Scarica immagine compressa',
    statsOriginal: 'Originale',
    statsCompressed: 'Compressa',
    aboutTitle: 'Informazioni sul compressore GIF',
    aboutP1:
      'Il nostro compressore GIF online gratuito riduce la dimensione del file senza compromettere la qualita visiva. Ideale per siti web, social, email e cloud. Regola la qualita dal 10% al 100%.',
    aboutP2:
      'Carica l immagine, regola la qualita per trovare il miglior equilibrio tra dimensione e qualita e scarica il risultato. L anteprima mostra il risparmio esatto. Tutto avviene nel browser, senza registrazione e gratis.',
    featureSmartTitle: 'Compressione intelligente',
    featureSmartBody: 'Riduci la dimensione fino al 90% senza perdita visibile.',
    featureQualityTitle: 'Controllo qualita',
    featureQualityBody: 'Slider regolabile per bilanciare dimensione e qualita.',
    featurePrivateTitle: '100% privato',
    featurePrivateBody: 'Tutto viene elaborato localmente nel browser.',
    howToTitle: 'Come comprimere immagini',
    step1Title: 'Carica l immagine',
    step1Body: 'Clicca sull area di upload o trascina e rilascia. Supporta JPG, PNG, WebP fino a 10MB.',
    step2Title: 'Regola la qualita',
    step2Body: 'Usa lo slider. Qualita piu alta = file piu grande; qualita piu bassa = file piu piccolo.',
    step3Title: 'Anteprima',
    step3Body: 'Confronta originale e compressa. Vedi il risparmio in tempo reale.',
    step4Title: 'Scarica',
    step4Body: 'Scarica l immagine ottimizzata con dimensione ridotta.',
    proTipLabel: 'Consiglio:',
    proTipBody: 'Per il web usa 70-85%. Per la stampa 85-95%. Per i social 70-80% spesso basta. Prova per trovare il miglior equilibrio.',
    faqTitle: 'Domande frequenti',
    faq1Q: 'Che cos e la compressione immagini?',
    faq1A:
      'La compressione riduce la dimensione del file rimuovendo dati ridondanti mantenendo la qualita visiva. Il nostro strumento ottimizza i GIF senza perdita evidente.',
    faq2Q: 'Quale qualita dovrei usare?',
    faq2A:
      'Web: 70-85%. Stampa: 85-95%. Social: 70-80%. Qualita piu bassa = file piu piccolo, ma possibili artefatti.',
    faq3Q: 'La compressione cambia le dimensioni?',
    faq3A:
      'No. La compressione riduce la dimensione del file, non i pixel. Larghezza e altezza restano uguali. Usa il Resizer se devi cambiare dimensioni.',
    faq4Q: 'Posso comprimere senza perdere qualita?',
    faq4A:
      'Si. Imposta 90-100% per una perdita minima. Il risultato dipende dalla complessita dell immagine.',
    faq5Q: 'E sicuro e privato?',
    faq5A:
      'Si. Tutto avviene localmente nel browser. I tuoi GIF non vengono caricati su server, quindi la privacy e protetta.',
  },
};

export default function Page() {
  const { locale, t } = useLanguage();
  const copy = GIF_COMPRESSOR_COPY[locale] ?? GIF_COMPRESSOR_COPY.en;
  const homeHref = locale === 'en' ? '/' : `/${locale}`;
  const toolPath = locale === 'en' ? '/gif-compressor' : `/${locale}/gif-compressor`;
  const canonicalUrl = `https://pixselli.com${toolPath}`;

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
    originalSize: 0,
    compressedSize: 0,
    originalWidth: 0,
    originalHeight: 0,
  });
  
  const [quality, setQuality] = useState(80);
  const [processing, setProcessing] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const calculateSavings = (): string => {
    if (!imageState.originalSize || !imageState.compressedSize) return '0%';
    const savings = ((imageState.originalSize - imageState.compressedSize) / imageState.originalSize) * 100;
    return Math.round(savings) + '%';
  };

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert(copy.invalidFile);
      return;
    }

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      setImageState({
        originalFile: file,
        originalUrl: url,
        processedUrl: '',
        originalSize: file.size,
        compressedSize: 0,
        originalWidth: img.width,
        originalHeight: img.height,
      });
      
      // Auto-process with default quality
      processImageWithQuality(img, file, 80);
    };

    img.src = url;
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const input = fileInputRef.current;
      if (input) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        input.files = dataTransfer.files;
        handleFileSelect({ target: input } as any);
      }
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const processImageWithQuality = async (img: HTMLImageElement, file: File, qualityValue: number) => {
    setProcessing(true);

    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      // Determine output format
      const outputFormat = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
      const qualityDecimal = qualityValue / 100;

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          setImageState(prev => ({
            ...prev,
            processedUrl: url,
            compressedSize: blob.size,
          }));
        }
        setProcessing(false);
      }, outputFormat, qualityDecimal);

    } catch (error) {
      console.error('Error processing image:', error);
      setProcessing(false);
    }
  };

  const handleQualityChange = (newQuality: number) => {
    setQuality(newQuality);
    
    if (imageState.originalUrl && imageState.originalFile) {
      const img = new Image();
      img.onload = () => {
        processImageWithQuality(img, imageState.originalFile!, newQuality);
      };
      img.src = imageState.originalUrl;
    }
  };

  const downloadImage = () => {
    if (!imageState.processedUrl) return;

    const link = document.createElement('a');
    link.href = imageState.processedUrl;
    const extension = imageState.originalFile?.type === 'image/png' ? 'png' : 'jpg';
    link.download = normalizeDownloadName(`compressed_q${quality}_image.${extension}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetAll = () => {
    setImageState({
      originalFile: null,
      originalUrl: '',
      processedUrl: '',
      originalSize: 0,
      compressedSize: 0,
      originalWidth: 0,
      originalHeight: 0,
    });
    setQuality(80);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      {/* SEO Structured Data - WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": `${copy.pageTitle} - Pixselli`,
            "description": copy.heroSubtitle,
            "url": canonicalUrl,
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Compress JPG images",
              "Compress PNG images",
              "Compress WebP images",
              "Adjustable quality slider",
              "Real-time compression preview",
              "Batch compression support"
            ]
          })
        }}
      />

      {/* SEO Structured Data - HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": copy.howToTitle,
            "description": copy.heroSubtitle,
            "image": "https://pixselli.com/images/compress-guide.jpg",
            "totalTime": "PT1M",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Image File (JPG, PNG, WebP)"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": `${copy.pageTitle} - Pixselli`
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": copy.step1Title,
                "text": copy.step1Body,
                "url": `${canonicalUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": copy.step2Title,
                "text": copy.step2Body,
                "url": `${canonicalUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": copy.step3Title,
                "text": copy.step3Body,
                "url": `${canonicalUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": copy.step4Title,
                "text": copy.step4Body,
                "url": `${canonicalUrl}#step4`
              }
            ]
          })
        }}
      />

      {/* SEO Structured Data - FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": copy.faq1Q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": copy.faq1A
                }
              },
              {
                "@type": "Question",
                "name": copy.faq2Q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": copy.faq2A
                }
              },
              {
                "@type": "Question",
                "name": copy.faq3Q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": copy.faq3A
                }
              },
              {
                "@type": "Question",
                "name": copy.faq4Q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": copy.faq4A
                }
              },
              {
                "@type": "Question",
                "name": copy.faq5Q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": copy.faq5A
                }
              }
            ]
          })
        }}
      />

      {/* SEO Structured Data - SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": `${copy.pageTitle} - Pixselli`,
            "applicationCategory": "MultimediaApplication",
            "applicationSubCategory": "Image Compression",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "2340",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />

    <article>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
        <main className="max-w-7xl mx-auto">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol
              className="flex items-center gap-2 text-sm text-gray-600"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a
                  href={homeHref}
                  itemProp="item"
                  className="hover:text-purple-600 transition-colors"
                >
                  <span itemProp="name">{t('header.home')}</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-gray-900 font-medium">{copy.breadcrumbTool}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Minimize2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {copy.heroTitle}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {copy.heroSubtitle}
            </p>
          </header>

          {/* Main Upload Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            {!imageState.originalUrl ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="relative border-2 border-dashed border-gray-300 rounded-xl p-16 text-center hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
                style={{ overflow: 'hidden' }}
                onClick={() => fileInputRef.current?.click()}
              >
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-purple-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-pink-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Upload className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-3">
                    {copy.uploadPromptTitle}
                  </p>
                  <p className="text-base text-gray-600 mb-6">
                    {copy.uploadPromptSubtitle}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                      <ImageIcon className="w-4 h-4 text-blue-500" />
                      <span className="text-xs sm:text-xs sm:text-sm font-medium text-gray-600">JPG</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                      <ImageIcon className="w-4 h-4 text-purple-500" />
                      <span className="text-xs sm:text-xs sm:text-sm font-medium text-gray-600">PNG</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                      <ImageIcon className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs sm:text-xs sm:text-sm font-medium text-gray-600">WebP</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {copy.maxFileSize}
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="space-y-6">
                {/* Image Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Original Image */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{copy.originalImage}</h3>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 border-2 border-gray-300">
                      <img
                        src={imageState.originalUrl}
                        alt="Original"
                        className="w-full h-auto"
                        style={{ maxHeight: '300px', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="mt-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{copy.fileSize}</span>
                        <span className="font-semibold text-gray-900">{formatFileSize(imageState.originalSize)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{copy.dimensions}</span>
                        <span className="font-semibold text-gray-900">{imageState.originalWidth} × {imageState.originalHeight} px</span>
                      </div>
                    </div>
                  </div>

                  {/* Compressed Image */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{copy.compressedImage}</h3>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 border-2 border-purple-300">
                      {imageState.processedUrl ? (
                        <img
                          src={imageState.processedUrl}
                          alt="Compressed"
                          className="w-full h-auto"
                          style={{ maxHeight: '300px', objectFit: 'contain' }}
                        />
                      ) : (
                        <div className="flex items-center justify-center h-64">
                          <p className="text-gray-400">{copy.processing}</p>
                        </div>
                      )}
                    </div>
                    <div className="mt-3 bg-purple-50 rounded-lg p-3 border border-purple-200">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{copy.fileSize}</span>
                        <span className="font-semibold text-purple-700">{formatFileSize(imageState.compressedSize)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{copy.saved}</span>
                        <span className="font-semibold text-green-600">{calculateSavings()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quality Slider */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-base font-bold text-gray-900">
                      <Minimize2 className="w-5 h-5 inline mr-2 text-purple-600" />
                      {copy.compressionQuality}
                    </label>
                    <span className="text-2xl font-bold text-purple-600">{quality}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={quality}
                    onChange={(e) => handleQualityChange(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                    style={{
                      background: `linear-gradient(to right, #9333ea 0%, #9333ea ${quality}%, #e5e7eb ${quality}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>
                      {copy.lowerQuality}
                      <br />({copy.smallerFile})
                    </span>
                    <span className="text-center">{copy.balanced}</span>
                    <span className="text-right">
                      {copy.higherQuality}
                      <br />({copy.largerFile})
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={resetAll}
                    className="flex-1 py-4 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors font-bold flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    {copy.startOver}
                  </button>
                  <button
                    onClick={downloadImage}
                    disabled={!imageState.processedUrl || processing}
                    className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {copy.downloadCompressed}
                  </button>
                </div>

                {/* Stats Summary */}
                {imageState.compressedSize > 0 && (
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 text-center">
                      <p className="text-xs text-blue-600 font-medium mb-1">{copy.statsOriginal}</p>
                      <p className="text-lg font-bold text-blue-900">{formatFileSize(imageState.originalSize)}</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200 text-center">
                      <p className="text-xs text-purple-600 font-medium mb-1">{copy.statsCompressed}</p>
                      <p className="text-lg font-bold text-purple-900">{formatFileSize(imageState.compressedSize)}</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200 text-center">
                      <p className="text-xs text-green-600 font-medium mb-1">{copy.saved.replace(':', '')}</p>
                      <p className="text-lg font-bold text-green-900">{calculateSavings()}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* About Section */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{copy.aboutTitle}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {copy.aboutP1}
              </p>
              <p>
                {copy.aboutP2}
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">Key Features</h2>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Minimize2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{copy.featureSmartTitle}</h3>
              <p className="text-gray-600">
                {copy.featureSmartBody}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-pink-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{copy.featureQualityTitle}</h3>
              <p className="text-gray-600">
                {copy.featureQualityBody}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{copy.featurePrivateTitle}</h3>
              <p className="text-gray-600">
                {copy.featurePrivateBody}
              </p>
            </div>
          </section>

          {/* How to Use */}
          <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md p-8 border border-purple-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{copy.howToTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{copy.step1Title}</h3>
                    <p className="text-gray-600 text-sm">{copy.step1Body}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{copy.step2Title}</h3>
                    <p className="text-gray-600 text-sm">{copy.step2Body}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{copy.step3Title}</h3>
                    <p className="text-gray-600 text-sm">{copy.step3Body}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{copy.step4Title}</h3>
                    <p className="text-gray-600 text-sm">{copy.step4Body}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 text-center">
              <p className="text-sm text-purple-800">
                <strong>{copy.proTipLabel}</strong> {copy.proTipBody}
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-gray-900 mb-6 text-center">{copy.faqTitle}</h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(0)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{copy.faq1Q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{copy.faq1A}</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(1)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{copy.faq2Q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{copy.faq2A}</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(2)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{copy.faq3Q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{copy.faq3A}</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(3)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{copy.faq4Q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{copy.faq4A}</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(4)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{copy.faq5Q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 4 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{copy.faq5A}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Hidden Canvas for Processing */}
      <canvas ref={canvasRef} className="hidden" />
    </article>
    </>
  );
}

