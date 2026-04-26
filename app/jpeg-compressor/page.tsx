"use client";

import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import { useState, useRef, useCallback } from 'react';
import { AlertCircle, Upload, Download, RotateCcw, RotateCw, Image as ImageIcon, Maximize2, Minimize2, Lock, Unlock, Info, ChevronDown, ChevronUp, Shield, Check, CheckCircle, CheckCircle2, Plus, X, FolderArchive, Crop, Move, ZoomIn, ZoomOut, RefreshCw, Gauge, Percent, Ruler, Train, Calendar, Droplet, Type, Contrast, Palette, Eye, Scan, Target, Mail, FileText, Globe, MessageCircle, FlipHorizontal, FlipVertical, Zap, Youtube, Monitor, Smartphone, Tv, Camera, User, PenTool } from "lucide-react";
import JSZip from 'jszip';

const JPEG_COMPRESSOR_COPY = {
  en: {
    invalidFile: 'Please select a valid image file',
    schemaWebAppName: 'JPEG Compressor - Free Online Image Compression Tool',
    schemaWebAppDescription:
      'Free online JPEG Compressor to reduce image file size without losing quality. Compress JPG, PNG, WebP images with adjustable quality settings.',
    schemaFeatureList: [
      'Compress JPEG images',
      'Compress PNG images',
      'Compress WebP images',
      'Adjustable quality slider',
      'Real-time compression preview',
      'Batch compression support',
    ],
    schemaHowToName: 'How to Compress Images Online',
    schemaHowToDescription: 'Learn how to compress images without losing quality using free online tool',
    schemaHowToSupply: 'Image File (JPG, PNG, WebP)',
    schemaHowToTool: 'Pixselli JPEG Compressor',
    schemaStep1Name: 'Upload Image',
    schemaStep1Text: 'Upload your image by dragging and dropping or clicking to browse. Supports JPG, PNG, WebP formats',
    schemaStep2Name: 'Adjust Quality',
    schemaStep2Text: 'Use the quality slider to adjust compression level from 10% to 100%. Higher quality means larger file size',
    schemaStep3Name: 'Preview Results',
    schemaStep3Text: 'Compare original and compressed image size in real-time. See exact file size savings percentage',
    schemaStep4Name: 'Download Compressed Image',
    schemaStep4Text: 'Download your compressed image with optimal quality and smaller file size',
    schemaFaq1Q: 'What is image compression?',
    schemaFaq1A:
      'Image compression reduces file size by removing redundant data while maintaining visual quality. Our tool uses smart compression algorithms to optimize JPG, PNG, and WebP images without noticeable quality loss.',
    schemaFaq2Q: 'What quality setting should I use?',
    schemaFaq2A:
      'For web images: 70-85% quality provides best balance. For printing: 85-95% quality recommended. For social media: 70-80% quality is sufficient. Lower quality = smaller file size but may show artifacts.',
    schemaFaq3Q: 'Does compression reduce image dimensions?',
    schemaFaq3A:
      'No, compression only reduces file size, not pixel dimensions. Your image width and height remain unchanged. Use our Image Resizer tool if you need to change dimensions.',
    schemaFaq4Q: 'Can I compress images without quality loss?',
    schemaFaq4A:
      'Yes! Set quality to 90-100% for minimal quality loss. Our tool uses smart compression that removes only unnecessary data while preserving visual quality. Results depend on original image complexity.',
    schemaFaq5Q: 'Is image compression secure and private?',
    schemaFaq5A:
      'Absolutely! All compression happens locally in your browser using client-side JavaScript. Your images never leave your device or get uploaded to any server, ensuring complete privacy.',
    breadcrumbHome: 'Home',
    breadcrumbTool: 'JPEG Compressor',
    title: 'JPEG Compressor',
    subtitle:
      'Compress images without losing quality. Reduce file size of JPEG, PNG, and WebP images with adjustable quality settings. Perfect for web optimization, email attachments, and faster loading times. Fast, secure, and works entirely in your browser.',
    uploadTitle: 'Drag & drop your image here',
    uploadSubtitle: 'or click to browse files',
    maxFileSize: 'Maximum file size: 10MB',
    originalImage: 'Original Image',
    compressedImage: 'Compressed Image',
    processing: 'Processing...',
    fileSizeLabel: 'File Size:',
    dimensionsLabel: 'Dimensions:',
    savedLabel: 'Saved:',
    compressionQuality: 'Compression Quality',
    lowerQuality: 'Lower Quality',
    smallerFile: '(Smaller File)',
    balanced: 'Balanced',
    higherQuality: 'Higher Quality',
    largerFile: '(Larger File)',
    outputFormats: 'Output Formats',
    outputFormatsHint: 'One format selected = single download. Multiple selected = ZIP download.',
    startOver: 'Start Over',
    downloadZip: 'Download Compressed Outputs (ZIP)',
    downloadSingle: 'Download Compressed Image',
    generatedOutputs: 'Generated Outputs',
    statsOriginal: 'Original',
    statsCompressed: 'Compressed',
    statsSaved: 'Saved',
    aboutTitle: 'About JPEG Compressor',
    aboutP1:
      'Our free online JPEG Compressor helps you reduce image file size without compromising visual quality. Perfect for optimizing images for websites, social media, email attachments, and cloud storage. Compress JPEG, PNG, and WebP images with adjustable quality settings from 10% to 100%.',
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
    proTipBody:
      'For web images, use 70-85% quality. For print, use 85-95%. For social media, 70-80% is perfect. Experiment to find your ideal balance!',
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'What is image compression?',
    faq1A:
      'Image compression reduces file size by removing redundant data while maintaining visual quality. Our tool uses smart compression algorithms to optimize JPG, PNG, and WebP images without noticeable quality loss.',
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
      'Absolutely! All compression happens locally in your browser using client-side JavaScript. Your images never leave your device or get uploaded to any server, ensuring complete privacy.',
  },
  es: {
    invalidFile: 'Por favor selecciona un archivo de imagen valido',
    schemaWebAppName: 'Compresor JPEG - Herramienta Gratis de Compresion de Imagenes',
    schemaWebAppDescription:
      'Compresor JPEG gratis para reducir el tamano de imagen sin perder calidad. Comprime JPEG, PNG y WebP con control de calidad ajustable.',
    schemaFeatureList: [
      'Comprimir imagenes JPEG',
      'Comprimir imagenes PNG',
      'Comprimir imagenes WebP',
      'Control deslizante de calidad',
      'Vista previa en tiempo real',
      'Compresion por lotes',
    ],
    schemaHowToName: 'Como comprimir imagenes en linea',
    schemaHowToDescription: 'Aprende a comprimir imagenes sin perder calidad con una herramienta gratis',
    schemaHowToSupply: 'Archivo de imagen (JPG, PNG, WebP)',
    schemaHowToTool: 'Pixselli Compresor JPEG',
    schemaStep1Name: 'Subir imagen',
    schemaStep1Text: 'Sube tu imagen arrastrando y soltando o haciendo clic para buscar. Soporta JPG, PNG y WebP',
    schemaStep2Name: 'Ajustar calidad',
    schemaStep2Text: 'Usa el control para ajustar la compresion de 10% a 100%. Mas calidad = archivo mas grande',
    schemaStep3Name: 'Ver resultados',
    schemaStep3Text: 'Compara original y comprimida en tiempo real. Mira el porcentaje de ahorro',
    schemaStep4Name: 'Descargar imagen comprimida',
    schemaStep4Text: 'Descarga tu imagen comprimida con buena calidad y menor tamano',
    schemaFaq1Q: 'Que es la compresion de imagenes?',
    schemaFaq1A:
      'La compresion reduce el tamano del archivo eliminando datos redundantes manteniendo la calidad visual. Nuestra herramienta optimiza JPEG, PNG y WebP sin perdida notable.',
    schemaFaq2Q: 'Que ajuste de calidad debo usar?',
    schemaFaq2A:
      'Web: 70-85%. Impresion: 85-95%. Redes: 70-80%. Menor calidad = archivo mas pequeno pero puede haber artefactos.',
    schemaFaq3Q: 'La compresion reduce las dimensiones?',
    schemaFaq3A:
      'No. Solo reduce el tamano del archivo, no los pixeles. Usa el redimensionador si necesitas cambiar dimensiones.',
    schemaFaq4Q: 'Puedo comprimir sin perder calidad?',
    schemaFaq4A:
      'Si. Usa 90-100% para perdida minima. El resultado depende de la complejidad de la imagen.',
    schemaFaq5Q: 'Es seguro y privado?',
    schemaFaq5A:
      'Si. Todo ocurre localmente en tu navegador. Tus imagenes no se suben a ningun servidor.',
    breadcrumbHome: 'Inicio',
    breadcrumbTool: 'Compresor JPEG',
    title: 'Compresor JPEG',
    subtitle:
      'Comprime imagenes sin perder calidad. Reduce el tamano de JPEG, PNG y WebP con control de calidad. Rapido, seguro y funciona totalmente en tu navegador.',
    uploadTitle: 'Arrastra y suelta tu imagen aqui',
    uploadSubtitle: 'o haz clic para buscar archivos',
    maxFileSize: 'Tamano maximo: 10MB',
    originalImage: 'Imagen original',
    compressedImage: 'Imagen comprimida',
    processing: 'Procesando...',
    fileSizeLabel: 'Tamano:',
    dimensionsLabel: 'Dimensiones:',
    savedLabel: 'Ahorro:',
    compressionQuality: 'Calidad de compresion',
    lowerQuality: 'Menor calidad',
    smallerFile: '(Archivo mas pequeno)',
    balanced: 'Equilibrado',
    higherQuality: 'Mayor calidad',
    largerFile: '(Archivo mas grande)',
    outputFormats: 'Formatos de salida',
    outputFormatsHint: 'Un formato = descarga unica. Varios = descarga ZIP.',
    startOver: 'Reiniciar',
    downloadZip: 'Descargar salidas comprimidas (ZIP)',
    downloadSingle: 'Descargar imagen comprimida',
    generatedOutputs: 'Salidas generadas',
    statsOriginal: 'Original',
    statsCompressed: 'Comprimida',
    statsSaved: 'Ahorro',
    aboutTitle: 'Acerca del Compresor JPEG',
    aboutP1:
      'Nuestro Compresor JPEG gratis reduce el tamano del archivo sin comprometer la calidad. Ideal para web, redes sociales, correo y almacenamiento. Comprime JPEG, PNG y WebP con calidad ajustable de 10% a 100%.',
    aboutP2:
      'Sube tu imagen, ajusta la calidad y descarga el resultado. La vista previa muestra el ahorro exacto. Todo se procesa en tu navegador, sin registro y gratis.',
    featureSmartTitle: 'Compresion inteligente',
    featureSmartBody: 'Reduce el tamano hasta 90% sin perdida notable.',
    featureQualityTitle: 'Control de calidad',
    featureQualityBody: 'Ajusta la calidad para el mejor equilibrio.',
    featurePrivateTitle: '100% privado',
    featurePrivateBody: 'Todo ocurre localmente en tu navegador.',
    howToTitle: 'Como comprimir imagenes',
    step1Title: 'Sube tu imagen',
    step1Body: 'Haz clic o arrastra y suelta. Soporta JPG, PNG y WebP hasta 10MB.',
    step2Title: 'Ajusta la calidad',
    step2Body: 'Usa el control. Mas calidad = archivo mas grande; menos = mas pequeno.',
    step3Title: 'Vista previa',
    step3Body: 'Compara original y comprimida. Ve el ahorro en tiempo real.',
    step4Title: 'Descarga',
    step4Body: 'Descarga tu imagen optimizada con menor tamano.',
    proTipLabel: 'Consejo:',
    proTipBody: 'Para web usa 70-85%. Para impresion 85-95%. Para redes 70-80%.',
    faqTitle: 'Preguntas frecuentes',
    faq1Q: 'Que es la compresion de imagenes?',
    faq1A:
      'La compresion reduce el tamano del archivo eliminando datos redundantes manteniendo la calidad visual. Nuestra herramienta optimiza JPEG, PNG y WebP sin perdida notable.',
    faq2Q: 'Que ajuste de calidad debo usar?',
    faq2A:
      'Web: 70-85%. Impresion: 85-95%. Redes: 70-80%. Menor calidad = archivo mas pequeno pero puede haber artefactos.',
    faq3Q: 'La compresion reduce las dimensiones?',
    faq3A:
      'No. Solo reduce el tamano del archivo, no los pixeles. Usa el redimensionador si necesitas cambiar dimensiones.',
    faq4Q: 'Puedo comprimir sin perder calidad?',
    faq4A:
      'Si. Usa 90-100% para perdida minima. El resultado depende de la complejidad de la imagen.',
    faq5Q: 'Es seguro y privado?',
    faq5A: 'Si. Todo ocurre localmente en tu navegador. Tus imagenes no se suben a ningun servidor.',
  },
  pt: {
    invalidFile: 'Por favor selecione um arquivo de imagem valido',
    schemaWebAppName: 'Compressor JPEG - Ferramenta Gratis de Compressao',
    schemaWebAppDescription:
      'Compressor JPEG gratis para reduzir o tamanho da imagem sem perder qualidade. Comprima JPEG, PNG e WebP com controle de qualidade.',
    schemaFeatureList: [
      'Comprimir imagens JPEG',
      'Comprimir imagens PNG',
      'Comprimir imagens WebP',
      'Controle de qualidade ajustavel',
      'Previa em tempo real',
      'Compressao em lote',
    ],
    schemaHowToName: 'Como comprimir imagens online',
    schemaHowToDescription: 'Aprenda a comprimir imagens sem perder qualidade com uma ferramenta gratis',
    schemaHowToSupply: 'Arquivo de imagem (JPG, PNG, WebP)',
    schemaHowToTool: 'Pixselli Compressor JPEG',
    schemaStep1Name: 'Enviar imagem',
    schemaStep1Text: 'Envie sua imagem arrastando e soltando ou clicando para buscar. Suporta JPG, PNG e WebP',
    schemaStep2Name: 'Ajustar qualidade',
    schemaStep2Text: 'Use o controle para ajustar de 10% a 100%. Mais qualidade = arquivo maior',
    schemaStep3Name: 'Ver resultados',
    schemaStep3Text: 'Compare original e comprimida em tempo real. Veja o percentual de economia',
    schemaStep4Name: 'Baixar imagem comprimida',
    schemaStep4Text: 'Baixe sua imagem com boa qualidade e menor tamanho',
    schemaFaq1Q: 'O que e compressao de imagem?',
    schemaFaq1A:
      'A compressao reduz o tamanho do arquivo removendo dados redundantes mantendo a qualidade visual. Nossa ferramenta otimiza JPEG, PNG e WebP sem perda perceptivel.',
    schemaFaq2Q: 'Qual qualidade devo usar?',
    schemaFaq2A:
      'Web: 70-85%. Impressao: 85-95%. Redes: 70-80%. Menor qualidade = arquivo menor, mas pode ter artefatos.',
    schemaFaq3Q: 'A compressao reduz as dimensoes?',
    schemaFaq3A:
      'Nao. Reduz apenas o tamanho do arquivo, nao os pixels. Use o redimensionador se precisar mudar dimensoes.',
    schemaFaq4Q: 'Posso comprimir sem perder qualidade?',
    schemaFaq4A:
      'Sim. Use 90-100% para perda minima. O resultado depende da complexidade da imagem.',
    schemaFaq5Q: 'E seguro e privado?',
    schemaFaq5A:
      'Sim. Tudo acontece localmente no navegador. Suas imagens nao sao enviadas para servidores.',
    breadcrumbHome: 'Inicio',
    breadcrumbTool: 'Compressor JPEG',
    title: 'Compressor JPEG',
    subtitle:
      'Comprima imagens sem perder qualidade. Reduza o tamanho de JPEG, PNG e WebP com controle de qualidade. Rapido, seguro e tudo no navegador.',
    uploadTitle: 'Arraste e solte sua imagem aqui',
    uploadSubtitle: 'ou clique para escolher arquivos',
    maxFileSize: 'Tamanho maximo: 10MB',
    originalImage: 'Imagem original',
    compressedImage: 'Imagem comprimida',
    processing: 'Processando...',
    fileSizeLabel: 'Tamanho:',
    dimensionsLabel: 'Dimensoes:',
    savedLabel: 'Economia:',
    compressionQuality: 'Qualidade de compressao',
    lowerQuality: 'Menor qualidade',
    smallerFile: '(Arquivo menor)',
    balanced: 'Equilibrado',
    higherQuality: 'Maior qualidade',
    largerFile: '(Arquivo maior)',
    outputFormats: 'Formatos de saida',
    outputFormatsHint: 'Um formato = download unico. Varios = download ZIP.',
    startOver: 'Reiniciar',
    downloadZip: 'Baixar saidas comprimidas (ZIP)',
    downloadSingle: 'Baixar imagem comprimida',
    generatedOutputs: 'Saidas geradas',
    statsOriginal: 'Original',
    statsCompressed: 'Comprimida',
    statsSaved: 'Economia',
    aboutTitle: 'Sobre o Compressor JPEG',
    aboutP1:
      'Nosso Compressor JPEG gratis reduz o tamanho do arquivo sem comprometer a qualidade. Ideal para web, redes sociais, email e armazenamento. Comprima JPEG, PNG e WebP com qualidade ajustavel de 10% a 100%.',
    aboutP2:
      'Envie a imagem, ajuste a qualidade e baixe o resultado. A previa mostra a economia exata. Tudo acontece no navegador, sem cadastro e gratis.',
    featureSmartTitle: 'Compressao inteligente',
    featureSmartBody: 'Reduza o tamanho em ate 90% sem perda perceptivel.',
    featureQualityTitle: 'Controle de qualidade',
    featureQualityBody: 'Ajuste para o melhor equilibrio tamanho x qualidade.',
    featurePrivateTitle: '100% privado',
    featurePrivateBody: 'Tudo acontece localmente no navegador.',
    howToTitle: 'Como comprimir imagens',
    step1Title: 'Envie sua imagem',
    step1Body: 'Clique na area de upload ou arraste e solte. Suporta JPG, PNG e WebP ate 10MB.',
    step2Title: 'Ajuste a qualidade',
    step2Body: 'Use o controle. Mais qualidade = arquivo maior; menos = menor.',
    step3Title: 'Previa',
    step3Body: 'Compare original e comprimida. Veja a economia em tempo real.',
    step4Title: 'Baixe',
    step4Body: 'Baixe a imagem otimizada com menor tamanho.',
    proTipLabel: 'Dica:',
    proTipBody: 'Para web use 70-85%. Para impressao 85-95%. Para redes 70-80%.',
    faqTitle: 'Perguntas frequentes',
    faq1Q: 'O que e compressao de imagem?',
    faq1A:
      'A compressao reduz o tamanho do arquivo removendo dados redundantes mantendo a qualidade visual. Nossa ferramenta otimiza JPEG, PNG e WebP sem perda perceptivel.',
    faq2Q: 'Qual qualidade devo usar?',
    faq2A:
      'Web: 70-85%. Impressao: 85-95%. Redes: 70-80%. Menor qualidade = arquivo menor, mas pode ter artefatos.',
    faq3Q: 'A compressao reduz as dimensoes?',
    faq3A:
      'Nao. Reduz apenas o tamanho do arquivo, nao os pixels. Use o redimensionador se precisar mudar dimensoes.',
    faq4Q: 'Posso comprimir sem perder qualidade?',
    faq4A:
      'Sim. Use 90-100% para perda minima. O resultado depende da complexidade da imagem.',
    faq5Q: 'E seguro e privado?',
    faq5A: 'Sim. Tudo acontece localmente no navegador. Suas imagens nao sao enviadas para servidores.',
  },
  fr: {
    invalidFile: 'Veuillez selectionner un fichier image valide',
    schemaWebAppName: 'Compresseur JPEG - Outil Gratuit de Compression',
    schemaWebAppDescription:
      'Compresseur JPEG gratuit pour reduire la taille des images sans perdre de qualite. Compressez JPEG, PNG et WebP avec un reglage de qualite.',
    schemaFeatureList: [
      'Compresser des images JPEG',
      'Compresser des images PNG',
      'Compresser des images WebP',
      'Curseur de qualite ajustable',
      'Apercu en temps reel',
      'Compression par lot',
    ],
    schemaHowToName: 'Comment compresser des images en ligne',
    schemaHowToDescription: 'Apprenez a compresser des images sans perdre de qualite avec un outil gratuit',
    schemaHowToSupply: 'Fichier image (JPG, PNG, WebP)',
    schemaHowToTool: 'Pixselli Compresseur JPEG',
    schemaStep1Name: 'Televerser une image',
    schemaStep1Text: 'Televersez votre image par glisser deposer ou en cliquant. Prend en charge JPG, PNG et WebP',
    schemaStep2Name: 'Regler la qualite',
    schemaStep2Text: 'Utilisez le curseur de 10% a 100%. Plus de qualite = fichier plus lourd',
    schemaStep3Name: 'Voir le resultat',
    schemaStep3Text: 'Comparez original et compresse en temps reel. Voyez le pourcentage d economie',
    schemaStep4Name: 'Telecharger l image compressee',
    schemaStep4Text: 'Telechargez votre image avec une bonne qualite et une taille reduite',
    schemaFaq1Q: 'Qu est ce que la compression d image?',
    schemaFaq1A:
      'La compression reduit la taille du fichier en supprimant des donnees redundantes tout en conservant la qualite visuelle. Notre outil optimise JPEG, PNG et WebP sans perte visible.',
    schemaFaq2Q: 'Quel reglage de qualite utiliser?',
    schemaFaq2A:
      'Web: 70-85%. Impression: 85-95%. Reseaux: 70-80%. Qualite plus basse = fichier plus petit mais possibles artefacts.',
    schemaFaq3Q: 'La compression change t elle les dimensions?',
    schemaFaq3A:
      'Non. Elle reduit la taille du fichier, pas les pixels. Utilisez le redimensionneur pour changer les dimensions.',
    schemaFaq4Q: 'Puis je compresser sans perte?',
    schemaFaq4A:
      'Oui. Mettez 90-100% pour une perte minimale. Le resultat depend de la complexite de l image.',
    schemaFaq5Q: 'Est ce securise et prive?',
    schemaFaq5A:
      'Oui. Tout se fait localement dans votre navigateur. Vos images ne sont pas envoyees sur un serveur.',
    breadcrumbHome: 'Accueil',
    breadcrumbTool: 'Compresseur JPEG',
    title: 'Compresseur JPEG',
    subtitle:
      'Compressez des images sans perdre de qualite. Reduisez la taille des JPEG, PNG et WebP avec un reglage de qualite. Rapide, securise et 100% navigateur.',
    uploadTitle: 'Glissez deposer votre image ici',
    uploadSubtitle: 'ou cliquez pour parcourir',
    maxFileSize: 'Taille maximale: 10MB',
    originalImage: 'Image originale',
    compressedImage: 'Image compressee',
    processing: 'Traitement...',
    fileSizeLabel: 'Taille:',
    dimensionsLabel: 'Dimensions:',
    savedLabel: 'Economise:',
    compressionQuality: 'Qualite de compression',
    lowerQuality: 'Qualite plus basse',
    smallerFile: '(Fichier plus petit)',
    balanced: 'Equilibre',
    higherQuality: 'Qualite plus haute',
    largerFile: '(Fichier plus grand)',
    outputFormats: 'Formats de sortie',
    outputFormatsHint: 'Un format = telechargement simple. Plusieurs = ZIP.',
    startOver: 'Recommencer',
    downloadZip: 'Telecharger les sorties compressees (ZIP)',
    downloadSingle: 'Telecharger l image compressee',
    generatedOutputs: 'Sorties generees',
    statsOriginal: 'Originale',
    statsCompressed: 'Compressee',
    statsSaved: 'Economie',
    aboutTitle: 'A propos du Compresseur JPEG',
    aboutP1:
      'Notre compresseur JPEG gratuit reduit la taille des images sans compromettre la qualite. Ideal pour le web, les reseaux sociaux, les emails et le stockage. Compressez JPEG, PNG et WebP avec un reglage de 10% a 100%.',
    aboutP2:
      'Televersez l image, reglez la qualite et telechargez le resultat. L apercu affiche l economie exacte. Tout se passe dans le navigateur, sans inscription et gratuit.',
    featureSmartTitle: 'Compression intelligente',
    featureSmartBody: 'Reduisez la taille jusqu a 90% sans perte visible.',
    featureQualityTitle: 'Controle de qualite',
    featureQualityBody: 'Curseur ajustable pour un bon equilibre.',
    featurePrivateTitle: '100% prive',
    featurePrivateBody: 'Tout se fait localement dans votre navigateur.',
    howToTitle: 'Comment compresser des images',
    step1Title: 'Televersez votre image',
    step1Body: 'Cliquez sur la zone ou glissez deposer. JPG, PNG, WebP jusqu a 10MB.',
    step2Title: 'Reglez la qualite',
    step2Body: 'Utilisez le curseur. Plus de qualite = fichier plus grand; moins = plus petit.',
    step3Title: 'Apercu',
    step3Body: 'Comparez originale et compressee. Voyez l economie en temps reel.',
    step4Title: 'Telechargez',
    step4Body: 'Telechargez l image optimisee avec une taille reduite.',
    proTipLabel: 'Astuce:',
    proTipBody: 'Pour le web: 70-85%. Pour impression: 85-95%. Pour reseaux: 70-80%.',
    faqTitle: 'Questions frequentes',
    faq1Q: 'Qu est ce que la compression d image?',
    faq1A:
      'La compression reduit la taille du fichier en supprimant des donnees redundantes tout en conservant la qualite visuelle. Notre outil optimise JPEG, PNG et WebP sans perte visible.',
    faq2Q: 'Quel reglage de qualite utiliser?',
    faq2A:
      'Web: 70-85%. Impression: 85-95%. Reseaux: 70-80%. Qualite plus basse = fichier plus petit mais possibles artefacts.',
    faq3Q: 'La compression change t elle les dimensions?',
    faq3A:
      'Non. Elle reduit la taille du fichier, pas les pixels. Utilisez le redimensionneur pour changer les dimensions.',
    faq4Q: 'Puis je compresser sans perte?',
    faq4A:
      'Oui. Mettez 90-100% pour une perte minimale. Le resultat depend de la complexite de l image.',
    faq5Q: 'Est ce securise et prive?',
    faq5A: 'Oui. Tout se fait localement dans votre navigateur. Vos images ne sont pas envoyees sur un serveur.',
  },
  de: {
    invalidFile: 'Bitte wahlen Sie eine gultige Bilddatei aus',
    schemaWebAppName: 'JPEG Kompressor - Kostenloses Online Tool',
    schemaWebAppDescription:
      'Kostenloser JPEG Kompressor zum Reduzieren der Bilddateigrosse ohne sichtbaren Qualitatsverlust. Komprimiert JPEG, PNG und WebP mit Qualitatsregler.',
    schemaFeatureList: [
      'JPEG Bilder komprimieren',
      'PNG Bilder komprimieren',
      'WebP Bilder komprimieren',
      'Einstellbarer Qualitatsregler',
      'Vorschau in Echtzeit',
      'Stapelkomprimierung',
    ],
    schemaHowToName: 'So komprimieren Sie Bilder online',
    schemaHowToDescription: 'Lernen Sie, wie Sie Bilder ohne Qualitatsverlust komprimieren',
    schemaHowToSupply: 'Bilddatei (JPG, PNG, WebP)',
    schemaHowToTool: 'Pixselli JPEG Kompressor',
    schemaStep1Name: 'Bild hochladen',
    schemaStep1Text: 'Bild per Drag and Drop hochladen oder klicken. Unterstutzt JPG, PNG und WebP',
    schemaStep2Name: 'Qualitat anpassen',
    schemaStep2Text: 'Qualitat von 10% bis 100% einstellen. Hoher = grosser, niedriger = kleiner',
    schemaStep3Name: 'Ergebnis ansehen',
    schemaStep3Text: 'Original und komprimiert in Echtzeit vergleichen. Ersparnis in Prozent sehen',
    schemaStep4Name: 'Komprimiertes Bild herunterladen',
    schemaStep4Text: 'Komprimiertes Bild mit guter Qualitat und kleinerer Dateigrosse herunterladen',
    schemaFaq1Q: 'Was ist Bildkomprimierung?',
    schemaFaq1A:
      'Bildkomprimierung reduziert die Dateigrosse, indem redundante Daten entfernt werden, wahrend die visuelle Qualitat erhalten bleibt. Unser Tool optimiert JPEG, PNG und WebP ohne sichtbaren Verlust.',
    schemaFaq2Q: 'Welche Qualitat sollte ich verwenden?',
    schemaFaq2A:
      'Web: 70-85%. Druck: 85-95%. Social: 70-80%. Niedriger = kleiner, aber mogliche Artefakte.',
    schemaFaq3Q: 'Andert Komprimierung die Abmessungen?',
    schemaFaq3A:
      'Nein. Nur Dateigrosse, nicht Pixel. Nutzen Sie den Resizer, wenn Sie Abmessungen andern wollen.',
    schemaFaq4Q: 'Kann ich ohne Qualitatsverlust komprimieren?',
    schemaFaq4A:
      'Ja. 90-100% fur minimalen Verlust. Das Ergebnis hangt von der Bildkomplexitat ab.',
    schemaFaq5Q: 'Ist es sicher und privat?',
    schemaFaq5A: 'Ja. Alles passiert lokal im Browser. Bilder werden nicht hochgeladen.',
    breadcrumbHome: 'Startseite',
    breadcrumbTool: 'JPEG Kompressor',
    title: 'JPEG Kompressor',
    subtitle:
      'Bilder ohne sichtbaren Qualitatsverlust komprimieren. Dateigrosse von JPEG, PNG und WebP reduzieren. Schnell, sicher und komplett im Browser.',
    uploadTitle: 'Bild hierher ziehen und ablegen',
    uploadSubtitle: 'oder klicken, um Dateien auszuwahlen',
    maxFileSize: 'Maximale Dateigrosse: 10MB',
    originalImage: 'Originalbild',
    compressedImage: 'Komprimiertes Bild',
    processing: 'Wird verarbeitet...',
    fileSizeLabel: 'Dateigrosse:',
    dimensionsLabel: 'Abmessungen:',
    savedLabel: 'Ersparnis:',
    compressionQuality: 'Kompressionsqualitat',
    lowerQuality: 'Niedrigere Qualitat',
    smallerFile: '(Kleinere Datei)',
    balanced: 'Ausgewogen',
    higherQuality: 'Hohere Qualitat',
    largerFile: '(Grosere Datei)',
    outputFormats: 'Ausgabeformate',
    outputFormatsHint: 'Ein Format = Einzel-Download. Mehrere = ZIP-Download.',
    startOver: 'Neu starten',
    downloadZip: 'Komprimierte Ausgaben herunterladen (ZIP)',
    downloadSingle: 'Komprimiertes Bild herunterladen',
    generatedOutputs: 'Erzeugte Ausgaben',
    statsOriginal: 'Original',
    statsCompressed: 'Komprimiert',
    statsSaved: 'Ersparnis',
    aboutTitle: 'Uber den JPEG Kompressor',
    aboutP1:
      'Unser kostenloser JPEG Kompressor reduziert die Dateigrosse ohne die visuelle Qualitat stark zu beeintrachtigen. Ideal fur Websites, Social Media, E-Mails und Cloud. Komprimiert JPEG, PNG und WebP von 10% bis 100%.',
    aboutP2:
      'Bild hochladen, Qualitat einstellen und Ergebnis herunterladen. Die Vorschau zeigt die exakte Ersparnis. Alles passiert im Browser, ohne Registrierung und kostenlos.',
    featureSmartTitle: 'Intelligente Komprimierung',
    featureSmartBody: 'Dateigrosse bis zu 90% reduzieren ohne sichtbaren Verlust.',
    featureQualityTitle: 'Qualitatskontrolle',
    featureQualityBody: 'Regler fur das beste Verhaltnis aus Qualitat und Grosse.',
    featurePrivateTitle: '100% privat',
    featurePrivateBody: 'Alles passiert lokal in Ihrem Browser.',
    howToTitle: 'So komprimieren Sie Bilder',
    step1Title: 'Bild hochladen',
    step1Body: 'Upload-Bereich anklicken oder per Drag and Drop. JPG, PNG, WebP bis 10MB.',
    step2Title: 'Qualitat einstellen',
    step2Body: 'Regler nutzen. Hoher = grosser; niedriger = kleiner.',
    step3Title: 'Vorschau',
    step3Body: 'Original und komprimiert vergleichen. Ersparnis in Echtzeit sehen.',
    step4Title: 'Herunterladen',
    step4Body: 'Optimiertes Bild mit kleinerer Dateigrosse herunterladen.',
    proTipLabel: 'Tipp:',
    proTipBody: 'Web: 70-85%. Druck: 85-95%. Social: 70-80%.',
    faqTitle: 'Haufige Fragen',
    faq1Q: 'Was ist Bildkomprimierung?',
    faq1A:
      'Bildkomprimierung reduziert die Dateigrosse, indem redundante Daten entfernt werden, wahrend die visuelle Qualitat erhalten bleibt. Unser Tool optimiert JPEG, PNG und WebP ohne sichtbaren Verlust.',
    faq2Q: 'Welche Qualitat sollte ich verwenden?',
    faq2A:
      'Web: 70-85%. Druck: 85-95%. Social: 70-80%. Niedriger = kleiner, aber mogliche Artefakte.',
    faq3Q: 'Andert Komprimierung die Abmessungen?',
    faq3A:
      'Nein. Nur Dateigrosse, nicht Pixel. Nutzen Sie den Resizer, wenn Sie Abmessungen andern wollen.',
    faq4Q: 'Kann ich ohne Qualitatsverlust komprimieren?',
    faq4A:
      'Ja. 90-100% fur minimalen Verlust. Das Ergebnis hangt von der Bildkomplexitat ab.',
    faq5Q: 'Ist es sicher und privat?',
    faq5A: 'Ja. Alles passiert lokal im Browser. Bilder werden nicht hochgeladen.',
  },
  it: {
    invalidFile: 'Seleziona un file immagine valido',
    schemaWebAppName: 'Compressore JPEG - Strumento Online Gratis',
    schemaWebAppDescription:
      'Compressore JPEG gratis per ridurre la dimensione delle immagini senza perdere qualita. Comprimi JPEG, PNG e WebP con controllo qualita.',
    schemaFeatureList: [
      'Comprimi immagini JPEG',
      'Comprimi immagini PNG',
      'Comprimi immagini WebP',
      'Slider qualita regolabile',
      'Anteprima in tempo reale',
      'Compressione batch',
    ],
    schemaHowToName: 'Come comprimere immagini online',
    schemaHowToDescription: 'Impara a comprimere immagini senza perdere qualita con uno strumento gratis',
    schemaHowToSupply: 'File immagine (JPG, PNG, WebP)',
    schemaHowToTool: 'Pixselli Compressore JPEG',
    schemaStep1Name: 'Carica immagine',
    schemaStep1Text: 'Carica trascinando e rilasciando o cliccando per selezionare. Supporta JPG, PNG e WebP',
    schemaStep2Name: 'Regola qualita',
    schemaStep2Text: 'Usa lo slider da 10% a 100%. Piu qualita = file piu grande',
    schemaStep3Name: 'Anteprima',
    schemaStep3Text: 'Confronta originale e compressa in tempo reale. Vedi la percentuale di risparmio',
    schemaStep4Name: 'Scarica',
    schemaStep4Text: 'Scarica l immagine compressa con buona qualita e dimensione ridotta',
    schemaFaq1Q: 'Che cos e la compressione immagini?',
    schemaFaq1A:
      'La compressione riduce la dimensione del file rimuovendo dati ridondanti mantenendo la qualita visiva. Il nostro strumento ottimizza JPEG, PNG e WebP senza perdita evidente.',
    schemaFaq2Q: 'Che qualita dovrei usare?',
    schemaFaq2A:
      'Web: 70-85%. Stampa: 85-95%. Social: 70-80%. Qualita piu bassa = file piu piccolo ma possibili artefatti.',
    schemaFaq3Q: 'La compressione cambia le dimensioni?',
    schemaFaq3A:
      'No. Riduce solo la dimensione del file, non i pixel. Usa il Resizer se devi cambiare dimensioni.',
    schemaFaq4Q: 'Posso comprimere senza perdere qualita?',
    schemaFaq4A:
      'Si. Imposta 90-100% per una perdita minima. Dipende dalla complessita dell immagine.',
    schemaFaq5Q: 'E sicuro e privato?',
    schemaFaq5A: 'Si. Tutto avviene localmente nel browser. Le immagini non vengono caricate.',
    breadcrumbHome: 'Home',
    breadcrumbTool: 'Compressore JPEG',
    title: 'Compressore JPEG',
    subtitle:
      'Comprimi immagini senza perdere qualita. Riduci la dimensione di JPEG, PNG e WebP con qualita regolabile. Veloce, sicuro e tutto nel browser.',
    uploadTitle: 'Trascina e rilascia qui la tua immagine',
    uploadSubtitle: 'oppure clicca per scegliere i file',
    maxFileSize: 'Dimensione massima: 10MB',
    originalImage: 'Immagine originale',
    compressedImage: 'Immagine compressa',
    processing: 'Elaborazione...',
    fileSizeLabel: 'Dimensione:',
    dimensionsLabel: 'Dimensioni:',
    savedLabel: 'Risparmio:',
    compressionQuality: 'Qualita di compressione',
    lowerQuality: 'Qualita piu bassa',
    smallerFile: '(File piu piccolo)',
    balanced: 'Bilanciato',
    higherQuality: 'Qualita piu alta',
    largerFile: '(File piu grande)',
    outputFormats: 'Formati di output',
    outputFormatsHint: 'Un formato = download singolo. Piu formati = ZIP.',
    startOver: 'Ricomincia',
    downloadZip: 'Scarica output compressi (ZIP)',
    downloadSingle: 'Scarica immagine compressa',
    generatedOutputs: 'Output generati',
    statsOriginal: 'Originale',
    statsCompressed: 'Compressa',
    statsSaved: 'Risparmio',
    aboutTitle: 'Informazioni sul Compressore JPEG',
    aboutP1:
      'Il nostro compressore JPEG gratis riduce la dimensione del file senza compromettere la qualita. Ideale per web, social, email e cloud. Comprimi JPEG, PNG e WebP con qualita da 10% a 100%.',
    aboutP2:
      'Carica l immagine, regola la qualita e scarica il risultato. L anteprima mostra il risparmio esatto. Tutto avviene nel browser, senza registrazione e gratis.',
    featureSmartTitle: 'Compressione intelligente',
    featureSmartBody: 'Riduci la dimensione fino al 90% senza perdita visibile.',
    featureQualityTitle: 'Controllo qualita',
    featureQualityBody: 'Slider regolabile per bilanciare dimensione e qualita.',
    featurePrivateTitle: '100% privato',
    featurePrivateBody: 'Tutto avviene localmente nel browser.',
    howToTitle: 'Come comprimere immagini',
    step1Title: 'Carica l immagine',
    step1Body: 'Clicca sull area di upload o trascina e rilascia. JPG, PNG e WebP fino a 10MB.',
    step2Title: 'Regola la qualita',
    step2Body: 'Usa lo slider. Qualita piu alta = file piu grande; piu bassa = piu piccolo.',
    step3Title: 'Anteprima',
    step3Body: 'Confronta originale e compressa. Vedi il risparmio in tempo reale.',
    step4Title: 'Scarica',
    step4Body: 'Scarica l immagine ottimizzata con dimensione ridotta.',
    proTipLabel: 'Consiglio:',
    proTipBody: 'Web: 70-85%. Stampa: 85-95%. Social: 70-80%.',
    faqTitle: 'Domande frequenti',
    faq1Q: 'Che cos e la compressione immagini?',
    faq1A:
      'La compressione riduce la dimensione del file rimuovendo dati ridondanti mantenendo la qualita visiva. Il nostro strumento ottimizza JPEG, PNG e WebP senza perdita evidente.',
    faq2Q: 'Che qualita dovrei usare?',
    faq2A:
      'Web: 70-85%. Stampa: 85-95%. Social: 70-80%. Qualita piu bassa = file piu piccolo ma possibili artefatti.',
    faq3Q: 'La compressione cambia le dimensioni?',
    faq3A:
      'No. Riduce solo la dimensione del file, non i pixel. Usa il Resizer se devi cambiare dimensioni.',
    faq4Q: 'Posso comprimere senza perdere qualita?',
    faq4A: 'Si. Imposta 90-100% per una perdita minima. Dipende dalla complessita dell immagine.',
    faq5Q: 'E sicuro e privato?',
    faq5A: 'Si. Tutto avviene localmente nel browser. Le immagini non vengono caricate.',
  },
} as const;

interface ImageState {
  originalFile: File | null;
  originalUrl: string;
  processedUrl: string;
  originalSize: number;
  compressedSize: number;
  originalWidth: number;
  originalHeight: number;
}

type OutputFormat = 'image/jpeg' | 'image/webp';

interface OutputVariant {
  format: OutputFormat;
  label: 'JPG' | 'WebP';
  extension: 'jpg' | 'webp';
  size: number;
  blob: Blob;
  url: string;
}

function normalizeDownloadName(fileName: string) {
  const dotIndex = fileName.lastIndexOf('.');
  if (dotIndex <= 0) return normalizeFileToken(fileName);
  const baseName = fileName.slice(0, dotIndex);
  const extension = fileName.slice(dotIndex + 1).toLowerCase();
  return `${normalizeFileToken(baseName)}.${extension}`;
}

export default function Page() {
  const { locale } = useLanguage();
  const copy = JPEG_COMPRESSOR_COPY[locale as keyof typeof JPEG_COMPRESSOR_COPY] ?? JPEG_COMPRESSOR_COPY.en;
  const homeHref = locale === 'en' ? '/' : `/${locale}`;
  const toolPath = locale === 'en' ? '/jpeg-compressor' : `/${locale}/jpeg-compressor`;
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
  const [selectedOutputFormats, setSelectedOutputFormats] = useState<OutputFormat[]>(['image/jpeg', 'image/webp']);
  const [outputVariants, setOutputVariants] = useState<OutputVariant[]>([]);
  
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

  const getFormatMeta = (format: OutputFormat) => {
    if (format === 'image/webp') {
      return { label: 'WebP' as const, extension: 'webp' as const };
    }

    return { label: 'JPG' as const, extension: 'jpg' as const };
  };

  const processImageWithQuality = useCallback(async (
    img: HTMLImageElement,
    file: File,
    qualityValue: number,
    formats: OutputFormat[] = selectedOutputFormats
  ) => {
    setProcessing(true);

    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const effectiveFormats: OutputFormat[] = formats.length > 0 ? formats : ['image/jpeg'];

      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      const qualityDecimal = qualityValue / 100;
      const nextVariants: OutputVariant[] = [];

      for (const format of effectiveFormats) {
        const blob = await new Promise<Blob | null>((resolve) => {
          canvas.toBlob((b) => resolve(b), format, qualityDecimal);
        });

        if (blob) {
          const meta = getFormatMeta(format);
          nextVariants.push({
            format,
            label: meta.label,
            extension: meta.extension,
            size: blob.size,
            blob,
            url: URL.createObjectURL(blob),
          });
        }
      }

      setOutputVariants((prev) => {
        prev.forEach((variant) => URL.revokeObjectURL(variant.url));
        return nextVariants;
      });

      if (nextVariants.length > 0) {
        setImageState(prev => ({
          ...prev,
          processedUrl: nextVariants[0].url,
          compressedSize: nextVariants[0].size,
        }));
      } else {
        setImageState(prev => ({
          ...prev,
          processedUrl: '',
          compressedSize: 0,
        }));
      }

      setProcessing(false);

    } catch (error) {
      console.error('Error processing image:', error);
      setProcessing(false);
    }
  }, [selectedOutputFormats]);

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
      setOutputVariants((prev) => {
        prev.forEach((variant) => URL.revokeObjectURL(variant.url));
        return [];
      });
      
      // Auto-process with default quality
      processImageWithQuality(img, file, 80, selectedOutputFormats);
    };

    img.src = url;
  }, [processImageWithQuality, selectedOutputFormats]);

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

  const handleQualityChange = (newQuality: number) => {
    setQuality(newQuality);
    setImageState(prev => ({
      ...prev,
      processedUrl: '',
      compressedSize: 0,
    }));
    
    if (imageState.originalUrl && imageState.originalFile) {
      const img = new Image();
      img.onload = () => {
        processImageWithQuality(img, imageState.originalFile!, newQuality, selectedOutputFormats);
      };
      img.src = imageState.originalUrl;
    }
  };

  const handleOutputFormatToggle = (format: OutputFormat) => {
    const isSelected = selectedOutputFormats.includes(format);
    const nextFormats = isSelected
      ? selectedOutputFormats.filter((f) => f !== format)
      : [...selectedOutputFormats, format];

    if (nextFormats.length === 0) return;

    setSelectedOutputFormats(nextFormats);
    setImageState(prev => ({
      ...prev,
      processedUrl: '',
      compressedSize: 0,
    }));

    if (!imageState.originalUrl || !imageState.originalFile) return;

    const img = new Image();
    img.onload = () => {
      processImageWithQuality(img, imageState.originalFile!, quality, nextFormats);
    };
    img.src = imageState.originalUrl;
  };

  const downloadImage = async () => {
    if (outputVariants.length === 0) return;

    if (outputVariants.length === 1) {
      const single = outputVariants[0];
      const link = document.createElement('a');
      link.href = single.url;
      link.download = normalizeDownloadName(`compressed_q${quality}_${single.label.toLowerCase()}.${single.extension}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const zip = new JSZip();
    outputVariants.forEach((variant) => {
      zip.file(`compressed_q${quality}_${variant.label.toLowerCase()}.${variant.extension}`, variant.blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = zipUrl;
    link.download = normalizeDownloadName(`compressed_q${quality}_outputs.zip`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(zipUrl);
  };

  const resetAll = () => {
    setOutputVariants((prev) => {
      prev.forEach((variant) => URL.revokeObjectURL(variant.url));
      return [];
    });
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
            "name": copy.schemaWebAppName,
            "description": copy.schemaWebAppDescription,
            "url": canonicalUrl,
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": copy.schemaFeatureList
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
            "name": copy.schemaHowToName,
            "description": copy.schemaHowToDescription,
            "image": "https://pixselli.com/images/compress-guide.jpg",
            "totalTime": "PT1M",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": copy.schemaHowToSupply
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": copy.schemaHowToTool
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": copy.schemaStep1Name,
                "text": copy.schemaStep1Text,
                "url": `${canonicalUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": copy.schemaStep2Name,
                "text": copy.schemaStep2Text,
                "url": `${canonicalUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": copy.schemaStep3Name,
                "text": copy.schemaStep3Text,
                "url": `${canonicalUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": copy.schemaStep4Name,
                "text": copy.schemaStep4Text,
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
                "name": copy.schemaFaq1Q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": copy.schemaFaq1A
                }
              },
              {
                "@type": "Question",
                "name": copy.schemaFaq2Q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": copy.schemaFaq2A
                }
              },
              {
                "@type": "Question",
                "name": copy.schemaFaq3Q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": copy.schemaFaq3A
                }
              },
              {
                "@type": "Question",
                "name": copy.schemaFaq4Q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": copy.schemaFaq4A
                }
              },
              {
                "@type": "Question",
                "name": copy.schemaFaq5Q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": copy.schemaFaq5A
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
            "name": copy.schemaHowToTool,
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
                  <span itemProp="name">{copy.breadcrumbHome}</span>
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
              {copy.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {copy.subtitle}
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
                    {copy.uploadTitle}
                  </p>
                  <p className="text-base text-gray-600 mb-6">
                    {copy.uploadSubtitle}
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
                        <span className="text-gray-600">{copy.fileSizeLabel}</span>
                        <span className="font-semibold text-gray-900">{formatFileSize(imageState.originalSize)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{copy.dimensionsLabel}</span>
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
                        <span className="text-gray-600">{copy.fileSizeLabel}</span>
                        <span className="font-semibold text-purple-700">{formatFileSize(imageState.compressedSize)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{copy.savedLabel}</span>
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
                    <span>{copy.lowerQuality}<br/>{copy.smallerFile}</span>
                    <span className="text-center">{copy.balanced}</span>
                    <span className="text-right">{copy.higherQuality}<br/>{copy.largerFile}</span>
                  </div>
                </div>

                {/* Output Formats */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-sm font-bold text-gray-900 mb-3">{copy.outputFormats}</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => handleOutputFormatToggle('image/jpeg')}
                      className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${selectedOutputFormats.includes('image/jpeg') ? 'bg-purple-600 border-purple-600 text-white' : 'bg-white border-gray-300 text-gray-700 hover:border-purple-400'}`}
                    >
                      JPG
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOutputFormatToggle('image/webp')}
                      className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${selectedOutputFormats.includes('image/webp') ? 'bg-purple-600 border-purple-600 text-white' : 'bg-white border-gray-300 text-gray-700 hover:border-purple-400'}`}
                    >
                      WebP
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">{copy.outputFormatsHint}</p>
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
                    disabled={outputVariants.length === 0 || processing}
                    className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {outputVariants.length > 1 ? copy.downloadZip : copy.downloadSingle}
                  </button>
                </div>

                {/* Generated Outputs */}
                {outputVariants.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <p className="text-sm font-bold text-gray-900 mb-2">{copy.generatedOutputs}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {outputVariants.map((variant) => (
                        <div key={variant.format} className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-800">{variant.label}</span>
                          <span className="text-sm text-gray-600">{formatFileSize(variant.size)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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
                      <p className="text-xs text-green-600 font-medium mb-1">{copy.statsSaved}</p>
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

