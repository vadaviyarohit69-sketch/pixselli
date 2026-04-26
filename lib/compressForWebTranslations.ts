import type { Locale } from '@/lib/i18n';
import type { TranslationDict } from '@/lib/translateReactNode';

export const COMPRESS_FOR_WEB_TEXT_BY_LOCALE: Partial<Record<Locale, TranslationDict>> = {
  es: {
    Home: 'Inicio',
    'Compress for Web': 'Comprimir para Web',
    'Optimize images for fast website loading with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Optimiza imagenes para una carga rapida del sitio web con redimensionado y compresion automatica. Rapido, seguro y funciona totalmente en tu navegador.',
    'Web-Optimized Settings': 'Ajustes optimizados para Web',
    'Automatically resizes to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the perfect balance for fast loading websites while maintaining excellent visual quality.':
      'Redimensiona automaticamente a un tamano ideal para la web (max 1920×1080) y aplica compresion al 85% de calidad: el equilibrio perfecto para sitios mas rapidos manteniendo excelente calidad visual.',
    'Upload Image to Optimize for Web': 'Sube una imagen para optimizar para la web',
    'Drag & drop or click to browse': 'Arrastra y suelta o haz clic para buscar',
    'Processing...': 'Procesando...',
    'Output Formats': 'Formatos de salida',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un formato seleccionado = descarga unica. Varios seleccionados = descarga ZIP.',
    Original: 'Original',
    'Web-Optimized': 'Optimizado para Web',
    Savings: 'Ahorro',
    'Generated Outputs': 'Salidas generadas',
    '✓ Web-Optimized Successfully!': '✓ Optimizado para Web!',
    'Compressed to': 'Comprimido a',
    'with 85% quality. Perfect for fast website loading while maintaining excellent visual quality.':
      'con 85% de calidad. Perfecto para cargar mas rapido manteniendo excelente calidad visual.',
    'Upload New Image': 'Subir nueva imagen',
    'Download Web-Optimized Outputs (ZIP)': 'Descargar salidas optimizadas para Web (ZIP)',
    'Download Web-Optimized Image': 'Descargar imagen optimizada para Web',
    'About Compress for Web Tool': 'Acerca de Comprimir para Web',
    'Our free online tool optimizes images for fast website loading. It automatically resizes large images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.':
      'Nuestra herramienta online gratuita optimiza imagenes para que tu sitio cargue rapido. Redimensiona automaticamente imagenes grandes a un tamano ideal (max 1920×1080) y aplica compresion al 85% de calidad: el punto ideal para equilibrar peso y calidad.',
    'Perfect for website owners, bloggers, and developers who need to optimize images for fast page load times without sacrificing too much quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Ideal para propietarios de sitios, bloggers y desarrolladores que necesitan optimizar imagenes para mejorar la velocidad sin perder demasiada calidad. Todo el procesamiento ocurre de forma segura en tu navegador. Sin registro y totalmente gratis.',
    'Why Web Image Optimization Matters': 'Por que importa optimizar imagenes para la web',
    'Impact Area': 'Area de impacto',
    'Before Optimization': 'Antes de optimizar',
    'After Optimization': 'Despues de optimizar',
    'Average Image Size': 'Tamano medio de imagen',
    'Page Load Time': 'Tiempo de carga',
    'Bounce Rate': 'Tasa de rebote',
    'Google Rankings': 'Posicionamiento en Google',
    Higher: 'Mayor',
    Lower: 'Menor',
    Penalized: 'Penalizado',
    Improved: 'Mejorado',
    'Perfect balance for fast loading websites.': 'Equilibrio perfecto para sitios que cargan rapido.',
    'Smart Resizing': 'Redimensionado inteligente',
    'Auto-resize to 1920×1080 max dimensions.': 'Redimensiona automaticamente a maximo 1920×1080.',
    '100% Secure': '100% Seguro',
    'All processing happens in your browser.': 'Todo el procesamiento ocurre en tu navegador.',
    'How to Optimize Images for Web': 'Como optimizar imagenes para la web',
    'Upload Your Image': 'Sube tu imagen',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Haz clic en el cuadro de carga o arrastra y suelta tu archivo (JPG, PNG, WebP).',
    'Auto Optimization': 'Optimizacion automatica',
    'Smart resize to 1920×1080 max and 85% quality compression.':
      'Redimensionado inteligente a max 1920×1080 y compresion al 85% de calidad.',
    'Review Results': 'Revisa los resultados',
    'Check file size reduction and quality for your website needs.':
      'Comprueba la reduccion de tamano y la calidad para tu sitio web.',
    'Download & Use': 'Descarga y usa',
    'Download your web-optimized image ready for your website.':
      'Descarga tu imagen optimizada lista para tu sitio web.',
    'Pro Tip:': 'Consejo pro:',
    'This tool is perfect for blog posts, product images, and general website content. The 85% quality provides excellent visuals while ensuring fast page load times.':
      'Esta herramienta es perfecta para blogs, imagenes de producto y contenido web. El 85% de calidad ofrece excelente apariencia y ayuda a cargar mas rapido.',
    'Frequently Asked Questions': 'Preguntas frecuentes',
    'What makes this different from regular compression?': 'Que lo hace diferente de una compresion normal?',
    'This tool is specifically optimized for web usage. It automatically resizes oversized images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.':
      'Esta herramienta esta optimizada especificamente para la web. Redimensiona imagenes grandes a un tamano ideal (max 1920×1080) y aplica compresion al 85% de calidad para equilibrar peso y calidad.',
    'Why 85% quality?': 'Por que 85% de calidad?',
    "85% quality is considered the optimal balance for web images. It provides significant file size reduction while maintaining excellent visual quality that's virtually indistinguishable from the original to most users. This helps websites load faster without sacrificing appearance.":
      'El 85% de calidad suele ser el equilibrio ideal para imagenes web. Reduce mucho el tamano manteniendo una calidad excelente casi indistinguible para la mayoria. Asi tu web carga mas rapido sin perder apariencia.',
    'Will my image be resized?': 'Se redimensionara mi imagen?',
    'Only if necessary. Images larger than 1920×1080 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions. This prevents unnecessarily large images from slowing down your website.':
      'Solo si es necesario. Las imagenes mayores a 1920×1080 se redimensionan manteniendo la proporcion. Las pequenas conservan su tamano. Esto evita que imagenes demasiado grandes ralenticen tu web.',
    'What file format is the output?': 'Cual es el formato de salida?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Puedes descargar JPG, WebP o ambos (como ZIP) segun los formatos de salida que selecciones.',
    'Is my image secure and private?': 'Mi imagen es segura y privada?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Si! Toda la compresion ocurre en tu navegador. Tus imagenes no salen de tu dispositivo ni se suben a servidores. Privacidad total: no se almacena ni se transmite ningun dato.',
  },

  pt: {
    Home: 'Inicio',
    'Compress for Web': 'Comprimir Imagens para Web',
    'Optimize images for fast website loading with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Otimize imagens para sites mais rapidos com redimensionamento e compressao automatica. Rapido, seguro e funciona totalmente no seu navegador.',
    'Web-Optimized Settings': 'Configuracoes otimizadas para Web',
    'Automatically resizes to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the perfect balance for fast loading websites while maintaining excellent visual quality.':
      'Redimensiona automaticamente para dimensoes ideais para web (max 1920×1080) e aplica compressao com 85% de qualidade — o equilibrio perfeito para sites mais rapidos mantendo excelente qualidade visual.',
    'Upload Image to Optimize for Web': 'Envie imagem para otimizar para web',
    'Drag & drop or click to browse': 'Arraste e solte ou clique para procurar',
    'Processing...': 'Processando...',
    'Output Formats': 'Formatos de saida',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Um formato selecionado = um download. Varios selecionados = download em ZIP.',
    Original: 'Original',
    'Web-Optimized': 'Otimizado para Web',
    Savings: 'Economia',
    'Generated Outputs': 'Saidas geradas',
    '✓ Web-Optimized Successfully!': '✓ Otimizado para Web!',
    'Upload New Image': 'Enviar nova imagem',
    'Download Web-Optimized Outputs (ZIP)': 'Baixar saidas otimizadas para Web (ZIP)',
    'Download Web-Optimized Image': 'Baixar imagem otimizada para Web',
    'About Compress for Web Tool': 'Sobre a ferramenta Comprimir para Web',
    'Our free online tool optimizes images for fast website loading. It automatically resizes large images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.':
      'Nossa ferramenta online gratuita otimiza imagens para sites mais rapidos. Ela redimensiona automaticamente imagens grandes para dimensoes ideais (max 1920×1080) e aplica compressao com 85% de qualidade — o ponto ideal para equilibrar tamanho e qualidade.',
    'Perfect for website owners, bloggers, and developers who need to optimize images for fast page load times without sacrificing too much quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Perfeito para donos de sites, blogueiros e desenvolvedores que precisam otimizar imagens para carregar mais rapido sem perder muita qualidade. Tudo acontece com seguranca no navegador. Sem cadastro e totalmente gratis.',
    'Why Web Image Optimization Matters': 'Por que a otimizacao de imagens para web importa',
    'Impact Area': 'Area de impacto',
    'Before Optimization': 'Antes da otimizacao',
    'After Optimization': 'Depois da otimizacao',
    'Average Image Size': 'Tamanho medio da imagem',
    'Page Load Time': 'Tempo de carregamento',
    'Bounce Rate': 'Taxa de rejeicao',
    'Google Rankings': 'Ranking no Google',
    Higher: 'Maior',
    Lower: 'Menor',
    Penalized: 'Penalizado',
    Improved: 'Melhorado',
    'Perfect balance for fast loading websites.': 'Equilibrio perfeito para sites carregarem rapido.',
    'Smart Resizing': 'Redimensionamento inteligente',
    'Auto-resize to 1920×1080 max dimensions.': 'Redimensiona automaticamente ate 1920×1080.',
    '100% Secure': '100% Seguro',
    'All processing happens in your browser.': 'Todo o processamento acontece no seu navegador.',
    'How to Optimize Images for Web': 'Como otimizar imagens para Web',
    'Upload Your Image': 'Envie sua imagem',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Clique na area de envio ou arraste e solte seu arquivo (JPG, PNG, WebP).',
    'Auto Optimization': 'Otimizacao automatica',
    'Smart resize to 1920×1080 max and 85% quality compression.':
      'Redimensionamento inteligente ate 1920×1080 e compressao com 85% de qualidade.',
    'Review Results': 'Revise os resultados',
    'Check file size reduction and quality for your website needs.':
      'Verifique a reducao de tamanho e a qualidade para seu site.',
    'Download & Use': 'Baixe e use',
    'Download your web-optimized image ready for your website.':
      'Baixe sua imagem otimizada pronta para seu site.',
    'Pro Tip:': 'Dica pro:',
    'This tool is perfect for blog posts, product images, and general website content. The 85% quality provides excellent visuals while ensuring fast page load times.':
      'Essa ferramenta e perfeita para blogs, imagens de produto e conteudo de site. 85% de qualidade mantem um visual excelente e ajuda a carregar rapido.',
    'Frequently Asked Questions': 'Perguntas frequentes',
    'What makes this different from regular compression?': 'O que torna isso diferente da compressao normal?',
    'This tool is specifically optimized for web usage. It automatically resizes oversized images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.':
      'Esta ferramenta e otimizada para web. Ela redimensiona imagens muito grandes para dimensoes ideais (max 1920×1080) e aplica compressao com 85% de qualidade — um otimo equilibrio entre tamanho e qualidade.',
    'Why 85% quality?': 'Por que 85% de qualidade?',
    "85% quality is considered the optimal balance for web images. It provides significant file size reduction while maintaining excellent visual quality that's virtually indistinguishable from the original to most users. This helps websites load faster without sacrificing appearance.":
      '85% de qualidade e um excelente equilibrio para imagens web. Reduz bastante o tamanho mantendo otima qualidade, quase indistinguivel do original para a maioria. Assim seu site carrega mais rapido sem perder aparencia.',
    'Will my image be resized?': 'Minha imagem sera redimensionada?',
    'Only if necessary. Images larger than 1920×1080 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions. This prevents unnecessarily large images from slowing down your website.':
      'Somente se necessario. Imagens maiores que 1920×1080 sao redimensionadas mantendo a proporcao. Imagens menores mantem o tamanho original. Isso evita que imagens grandes demais deixem seu site lento.',
    'What file format is the output?': 'Qual e o formato de saida?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Voce pode baixar JPG, WebP ou ambos (em ZIP) dependendo dos formatos selecionados.',
    'Is my image secure and private?': 'Minha imagem e segura e privada?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Com certeza! Toda a compressao acontece no seu navegador. Suas imagens nunca saem do seu dispositivo nem sao enviadas para servidores. Privacidade total: nenhum dado e armazenado ou transmitido.',
  },

  fr: {
    Home: 'Accueil',
    'Compress for Web': 'Compresser pour le Web',
    'Optimize images for fast website loading with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Optimisez les images pour des sites plus rapides avec redimensionnement et compression automatiques. Rapide, securise et entierement dans votre navigateur.',
    'Web-Optimized Settings': 'Reglages optimises pour le Web',
    'Automatically resizes to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the perfect balance for fast loading websites while maintaining excellent visual quality.':
      'Redimensionne automatiquement aux dimensions adaptees au web (max 1920×1080) et applique une compression a 85% de qualite — le meilleur equilibre pour des sites plus rapides avec une excellente qualite.',
    'Upload Image to Optimize for Web': 'Televersez une image pour optimisation web',
    'Drag & drop or click to browse': 'Glissez-deposez ou cliquez pour parcourir',
    'Processing...': 'Traitement...',
    'Output Formats': 'Formats de sortie',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un format = un telechargement. Plusieurs formats = telechargement ZIP.',
    Original: 'Original',
    'Web-Optimized': 'Optimise pour le Web',
    Savings: 'Gain',
    'Generated Outputs': 'Sorties generees',
    '✓ Web-Optimized Successfully!': '✓ Optimise pour le Web!',
    'Upload New Image': 'Televerser une nouvelle image',
    'Download Web-Optimized Outputs (ZIP)': 'Telecharger les sorties optimisees (ZIP)',
    'Download Web-Optimized Image': 'Telecharger l image optimisee',
    'About Compress for Web Tool': 'A propos de Compresser pour le Web',
    'Our free online tool optimizes images for fast website loading. It automatically resizes large images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.':
      'Notre outil gratuit optimise les images pour des sites plus rapides. Il redimensionne automatiquement les grandes images (max 1920×1080) et applique une compression a 85% de qualite — un bon equilibre entre poids et qualite.',
    'Perfect for website owners, bloggers, and developers who need to optimize images for fast page load times without sacrificing too much quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Ideal pour les proprietaires de sites, blogueurs et developpeurs qui veulent accelerer les pages sans perdre trop de qualite. Tout se fait dans votre navigateur. Sans inscription et gratuit.',
    'Why Web Image Optimization Matters': 'Pourquoi l optimisation d images web est importante',
    'Impact Area': 'Zone d impact',
    'Before Optimization': 'Avant optimisation',
    'After Optimization': 'Apres optimisation',
    'Average Image Size': 'Taille moyenne d image',
    'Page Load Time': 'Temps de chargement',
    'Bounce Rate': 'Taux de rebond',
    'Google Rankings': 'Classement Google',
    Higher: 'Plus eleve',
    Lower: 'Plus faible',
    Penalized: 'Penalise',
    Improved: 'Ameliore',
    'Perfect balance for fast loading websites.': 'Equilibre parfait pour des sites rapides.',
    'Smart Resizing': 'Redimensionnement intelligent',
    'Auto-resize to 1920×1080 max dimensions.': 'Redimensionnement auto jusqu a 1920×1080.',
    '100% Secure': '100% Securise',
    'All processing happens in your browser.': 'Tout le traitement se fait dans votre navigateur.',
    'How to Optimize Images for Web': 'Comment optimiser des images pour le Web',
    'Upload Your Image': 'Televersez votre image',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Cliquez sur la zone ou glissez-deposez votre fichier (JPG, PNG, WebP).',
    'Auto Optimization': 'Optimisation automatique',
    'Smart resize to 1920×1080 max and 85% quality compression.':
      'Redimensionnement intelligent jusqu a 1920×1080 et compression a 85% de qualite.',
    'Review Results': 'Verifier le resultat',
    'Check file size reduction and quality for your website needs.':
      'Verifiez la reduction de taille et la qualite pour votre site.',
    'Download & Use': 'Telecharger et utiliser',
    'Download your web-optimized image ready for your website.':
      'Telechargez votre image optimisee pour votre site.',
    'Pro Tip:': 'Astuce pro:',
    'This tool is perfect for blog posts, product images, and general website content. The 85% quality provides excellent visuals while ensuring fast page load times.':
      'Cet outil est parfait pour blogs, images produit et contenu web. 85% de qualite garde un excellent rendu et aide a charger vite.',
    'Frequently Asked Questions': 'Questions frequentes',
    'What makes this different from regular compression?': 'Qu est-ce qui est different d une compression classique?',
    'This tool is specifically optimized for web usage. It automatically resizes oversized images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.':
      'Cet outil est optimise pour le web. Il redimensionne les images trop grandes (max 1920×1080) et applique une compression a 85% de qualite — un bon equilibre entre poids et qualite.',
    'Why 85% quality?': 'Pourquoi 85% de qualite?',
    "85% quality is considered the optimal balance for web images. It provides significant file size reduction while maintaining excellent visual quality that's virtually indistinguishable from the original to most users. This helps websites load faster without sacrificing appearance.":
      '85% est un excellent equilibre pour les images web. La taille baisse beaucoup tout en gardant une qualite tres proche de l original pour la plupart. Les sites chargent plus vite sans perte visible.',
    'Will my image be resized?': 'Mon image sera-t-elle redimensionnee?',
    'Only if necessary. Images larger than 1920×1080 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions. This prevents unnecessarily large images from slowing down your website.':
      'Seulement si necessaire. Les images plus grandes que 1920×1080 sont redimensionnees en conservant les proportions. Les plus petites gardent leur taille. Cela evite de ralentir votre site.',
    'What file format is the output?': 'Quel est le format de sortie?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Vous pouvez telecharger du JPG, du WebP, ou les deux (en ZIP) selon les formats selectionnes.',
    'Is my image secure and private?': 'Mon image est-elle privee et securisee?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Oui! Tout se fait dans votre navigateur. Vos images ne quittent jamais votre appareil et ne sont envoyees sur aucun serveur. Confidentialite totale: aucune donnee n est stockee ni transmise.',
  },

  de: {
    Home: 'Startseite',
    'Compress for Web': 'Bilder fuer Web Komprimieren',
    'Optimize images for fast website loading with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Optimieren Sie Bilder fuer schnelle Websites mit automatischer Groessenanpassung und Komprimierung. Schnell, sicher und komplett im Browser.',
    'Web-Optimized Settings': 'Web-optimierte Einstellungen',
    'Automatically resizes to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the perfect balance for fast loading websites while maintaining excellent visual quality.':
      'Passt Bilder automatisch an webfreundliche Abmessungen an (max 1920×1080) und nutzt 85% Qualitaet — der beste Kompromiss fuer schnelle Websites bei sehr guter Bildqualitaet.',
    'Upload Image to Optimize for Web': 'Bild fuer Web-Optimierung hochladen',
    'Drag & drop or click to browse': 'Ziehen und ablegen oder klicken zum Auswaehlen',
    'Processing...': 'Verarbeite...',
    'Output Formats': 'Ausgabeformate',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Ein Format = ein Download. Mehrere Formate = ZIP-Download.',
    Original: 'Original',
    'Web-Optimized': 'Web-optimiert',
    Savings: 'Ersparnis',
    'Generated Outputs': 'Erzeugte Ausgaben',
    '✓ Web-Optimized Successfully!': '✓ Web-optimiert!',
    'Upload New Image': 'Neues Bild hochladen',
    'Download Web-Optimized Outputs (ZIP)': 'Web-optimierte Ausgaben herunterladen (ZIP)',
    'Download Web-Optimized Image': 'Web-optimiertes Bild herunterladen',
    'About Compress for Web Tool': 'Ueber das Tool "Bilder fuer Web komprimieren"',
    'Our free online tool optimizes images for fast website loading. It automatically resizes large images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.':
      'Unser kostenloses Online-Tool optimiert Bilder fuer schnelle Websites. Grosse Bilder werden automatisch (max 1920×1080) angepasst und mit 85% Qualitaet komprimiert — ein guter Kompromiss aus Dateigroesse und Bildqualitaet.',
    'Perfect for website owners, bloggers, and developers who need to optimize images for fast page load times without sacrificing too much quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Ideal fuer Website-Betreiber, Blogger und Entwickler, die Bilder fuer schnelle Ladezeiten optimieren wollen, ohne zu viel Qualitaet zu verlieren. Alles passiert sicher im Browser. Ohne Registrierung und kostenlos.',
    'Why Web Image Optimization Matters': 'Warum Web-Bildoptimierung wichtig ist',
    'Impact Area': 'Auswirkung',
    'Before Optimization': 'Vor Optimierung',
    'After Optimization': 'Nach Optimierung',
    'Average Image Size': 'Durchschnittliche Bildgroesse',
    'Page Load Time': 'Ladezeit',
    'Bounce Rate': 'Absprungrate',
    'Google Rankings': 'Google-Rankings',
    Higher: 'Hoeher',
    Lower: 'Niedriger',
    Penalized: 'Benachteiligt',
    Improved: 'Verbessert',
    'Perfect balance for fast loading websites.': 'Perfektes Gleichgewicht fuer schnelle Websites.',
    'Smart Resizing': 'Intelligentes Resizing',
    'Auto-resize to 1920×1080 max dimensions.': 'Automatisch bis max. 1920×1080 anpassen.',
    '100% Secure': '100% Sicher',
    'All processing happens in your browser.': 'Alles passiert in Ihrem Browser.',
    'How to Optimize Images for Web': 'So optimieren Sie Bilder fuer Web',
    'Upload Your Image': 'Bild hochladen',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Klicken Sie auf das Upload-Feld oder ziehen Sie Ihre Datei hinein (JPG, PNG, WebP).',
    'Auto Optimization': 'Automatische Optimierung',
    'Smart resize to 1920×1080 max and 85% quality compression.':
      'Intelligente Anpassung bis 1920×1080 und Komprimierung mit 85% Qualitaet.',
    'Review Results': 'Ergebnis pruefen',
    'Check file size reduction and quality for your website needs.':
      'Pruefen Sie Groessenersparnis und Qualitaet fuer Ihre Website.',
    'Download & Use': 'Herunterladen & nutzen',
    'Download your web-optimized image ready for your website.':
      'Laden Sie Ihr web-optimiertes Bild fuer Ihre Website herunter.',
    'Pro Tip:': 'Pro-Tipp:',
    'This tool is perfect for blog posts, product images, and general website content. The 85% quality provides excellent visuals while ensuring fast page load times.':
      'Dieses Tool ist ideal fuer Blogs, Produktbilder und Website-Inhalte. 85% Qualitaet sieht sehr gut aus und sorgt fuer schnelle Ladezeiten.',
    'Frequently Asked Questions': 'Haeufige Fragen',
    'What makes this different from regular compression?': 'Was ist anders als bei normaler Komprimierung?',
    'This tool is specifically optimized for web usage. It automatically resizes oversized images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.':
      'Dieses Tool ist speziell fuer Web optimiert. Es passt zu grosse Bilder auf webfreundliche Abmessungen (max 1920×1080) an und nutzt 85% Qualitaet — ein sehr guter Kompromiss aus Dateigroesse und Bildqualitaet.',
    'Why 85% quality?': 'Warum 85% Qualitaet?',
    "85% quality is considered the optimal balance for web images. It provides significant file size reduction while maintaining excellent visual quality that's virtually indistinguishable from the original to most users. This helps websites load faster without sacrificing appearance.":
      '85% Qualitaet ist oft der beste Kompromiss fuer Webbilder. Die Dateigroesse sinkt deutlich, waehrend die Qualitaet fuer die meisten nahezu wie das Original wirkt. So laden Websites schneller ohne sichtbare Einbussen.',
    'Will my image be resized?': 'Wird mein Bild skaliert?',
    'Only if necessary. Images larger than 1920×1080 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions. This prevents unnecessarily large images from slowing down your website.':
      'Nur wenn noetig. Bilder groesser als 1920×1080 werden proportional verkleinert. Kleinere Bilder bleiben unveraendert. So verhindern Sie, dass zu grosse Bilder Ihre Website verlangsamen.',
    'What file format is the output?': 'Welches Ausgabeformat erhalte ich?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Sie koennen JPG, WebP oder beides (als ZIP) herunterladen — je nach Auswahl.',
    'Is my image secure and private?': 'Ist mein Bild sicher und privat?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Ja! Alles passiert komplett in Ihrem Browser. Ihre Bilder verlassen niemals Ihr Geraet und werden auf keinen Server hochgeladen. Volle Privatsphaere: keine Daten werden gespeichert oder uebertragen.',
  },

  it: {
    Home: 'Home',
    'Compress for Web': 'Comprimi Immagini per Web',
    'Optimize images for fast website loading with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Ottimizza le immagini per siti piu veloci con ridimensionamento e compressione automatici. Veloce, sicuro e funziona interamente nel browser.',
    'Web-Optimized Settings': 'Impostazioni ottimizzate per Web',
    'Automatically resizes to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the perfect balance for fast loading websites while maintaining excellent visual quality.':
      'Ridimensiona automaticamente a dimensioni adatte al web (max 1920×1080) e applica compressione all 85% di qualita — il miglior equilibrio per siti piu veloci mantenendo ottima qualita.',
    'Upload Image to Optimize for Web': 'Carica un immagine per ottimizzazione web',
    'Drag & drop or click to browse': 'Trascina e rilascia o fai clic per scegliere',
    'Processing...': 'Elaborazione...',
    'Output Formats': 'Formati di output',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un formato = un download. Piu formati = download ZIP.',
    Original: 'Originale',
    'Web-Optimized': 'Ottimizzato per Web',
    Savings: 'Risparmio',
    'Generated Outputs': 'Output generati',
    '✓ Web-Optimized Successfully!': '✓ Ottimizzato per Web!',
    'Upload New Image': 'Carica nuova immagine',
    'Download Web-Optimized Outputs (ZIP)': 'Scarica output ottimizzati (ZIP)',
    'Download Web-Optimized Image': 'Scarica immagine ottimizzata',
    'About Compress for Web Tool': 'Informazioni su Comprimi per Web',
    'Our free online tool optimizes images for fast website loading. It automatically resizes large images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.':
      'Il nostro strumento gratuito ottimizza le immagini per siti piu veloci. Ridimensiona automaticamente le immagini grandi (max 1920×1080) e applica compressione all 85% di qualita — un ottimo equilibrio tra peso e qualita.',
    'Perfect for website owners, bloggers, and developers who need to optimize images for fast page load times without sacrificing too much quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Perfetto per proprietari di siti, blogger e sviluppatori che vogliono ottimizzare immagini per pagine piu veloci senza perdere troppa qualita. Tutto avviene nel browser. Nessuna registrazione, totalmente gratuito.',
    'Why Web Image Optimization Matters': 'Perche l ottimizzazione delle immagini web e importante',
    'Impact Area': 'Area di impatto',
    'Before Optimization': 'Prima dell ottimizzazione',
    'After Optimization': 'Dopo l ottimizzazione',
    'Average Image Size': 'Dimensione media immagine',
    'Page Load Time': 'Tempo di caricamento',
    'Bounce Rate': 'Frequenza di rimbalzo',
    'Google Rankings': 'Ranking Google',
    Higher: 'Piu alto',
    Lower: 'Piu basso',
    Penalized: 'Penalizzato',
    Improved: 'Migliorato',
    'Perfect balance for fast loading websites.': 'Equilibrio perfetto per siti piu veloci.',
    'Smart Resizing': 'Ridimensionamento intelligente',
    'Auto-resize to 1920×1080 max dimensions.': 'Ridimensiona automaticamente fino a 1920×1080.',
    '100% Secure': '100% Sicuro',
    'All processing happens in your browser.': 'Tutto avviene nel tuo browser.',
    'How to Optimize Images for Web': 'Come ottimizzare immagini per Web',
    'Upload Your Image': 'Carica la tua immagine',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Fai clic sull area di caricamento o trascina e rilascia il file (JPG, PNG, WebP).',
    'Auto Optimization': 'Ottimizzazione automatica',
    'Smart resize to 1920×1080 max and 85% quality compression.':
      'Ridimensionamento intelligente fino a 1920×1080 e compressione all 85% di qualita.',
    'Review Results': 'Controlla i risultati',
    'Check file size reduction and quality for your website needs.':
      'Verifica riduzione della dimensione e qualita per il tuo sito.',
    'Download & Use': 'Scarica e usa',
    'Download your web-optimized image ready for your website.':
      'Scarica la tua immagine ottimizzata per il tuo sito.',
    'Pro Tip:': 'Consiglio pro:',
    'This tool is perfect for blog posts, product images, and general website content. The 85% quality provides excellent visuals while ensuring fast page load times.':
      'Questo strumento e perfetto per blog, immagini prodotto e contenuti web. 85% di qualita offre un ottimo aspetto e aiuta a caricare veloce.',
    'Frequently Asked Questions': 'Domande frequenti',
    'What makes this different from regular compression?': 'Cosa lo rende diverso dalla compressione normale?',
    'This tool is specifically optimized for web usage. It automatically resizes oversized images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.':
      'Questo strumento e ottimizzato per il web. Ridimensiona automaticamente le immagini troppo grandi (max 1920×1080) e applica compressione all 85% di qualita — un ottimo equilibrio tra dimensione e qualita.',
    'Why 85% quality?': 'Perche 85% di qualita?',
    "85% quality is considered the optimal balance for web images. It provides significant file size reduction while maintaining excellent visual quality that's virtually indistinguishable from the original to most users. This helps websites load faster without sacrificing appearance.":
      '85% di qualita e spesso il miglior equilibrio per immagini web. Riduce molto la dimensione mantenendo una qualita eccellente quasi indistinguibile per la maggior parte degli utenti. I siti caricano piu velocemente senza perdere aspetto.',
    'Will my image be resized?': 'La mia immagine verra ridimensionata?',
    'Only if necessary. Images larger than 1920×1080 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions. This prevents unnecessarily large images from slowing down your website.':
      'Solo se necessario. Le immagini piu grandi di 1920×1080 vengono ridimensionate mantenendo le proporzioni. Le piu piccole mantengono la dimensione originale. Questo evita che immagini troppo grandi rallentino il tuo sito.',
    'What file format is the output?': 'Qual e il formato di output?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Puoi scaricare JPG, WebP o entrambi (come ZIP) in base ai formati selezionati.',
    'Is my image secure and private?': 'La mia immagine e sicura e privata?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Assolutamente! Tutta la compressione avviene nel tuo browser. Le immagini non lasciano mai il tuo dispositivo e non vengono caricate su server. Privacy totale: nessun dato viene salvato o trasmesso.',
  },
};
