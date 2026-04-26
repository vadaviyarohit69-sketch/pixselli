import type { Locale } from '@/lib/i18n';
import type { TranslationDict } from '@/lib/translateReactNode';

export const COMPRESS_FOR_EMAIL_TEXT_BY_LOCALE: Partial<Record<Locale, TranslationDict>> = {
  es: {
    Home: 'Inicio',
    'Compress for Email': 'Comprimir para Email',
    'Optimize images for fast email attachments with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Optimiza imagenes para adjuntos de email rapidos con redimensionado y compresion automatica. Rapido, seguro y funciona totalmente en tu navegador.',
    'Email-Ready Settings': 'Ajustes listos para Email',
    'Automatically resizes to email-friendly dimensions (max 800×600) and applies 75% quality compression - the perfect balance for fast loading emails while maintaining excellent visual quality.':
      'Redimensiona automaticamente a un tamano ideal para email (max 800×600) y aplica compresion al 75% de calidad: el equilibrio perfecto para emails mas rapidos manteniendo excelente calidad visual.',
    'Upload Image to Optimize for Email': 'Sube una imagen para optimizar para email',
    'Drag & drop or click to browse': 'Arrastra y suelta o haz clic para buscar',
    'Processing...': 'Procesando...',
    'Output Formats': 'Formatos de salida',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un formato seleccionado = descarga unica. Varios seleccionados = descarga ZIP.',
    Original: 'Original',
    'Email-Ready': 'Listo para Email',
    Savings: 'Ahorro',
    'Generated Outputs': 'Salidas generadas',
    '✓ Email-Ready Successfully!': '✓ Listo para Email!',
    'Upload New Image': 'Subir nueva imagen',
    'Download Email-Ready Outputs (ZIP)': 'Descargar salidas listas para Email (ZIP)',
    'Download Email-Ready Image': 'Descargar imagen lista para Email',
    'About Compress for Email Tool': 'Acerca de Comprimir para Email',
    'Our free online tool optimizes images for fast email attachments. It automatically resizes large images to email-friendly dimensions (max 800×600) and applies 75% quality compression - the sweet spot for balancing file size and visual quality on emails.':
      'Nuestra herramienta online gratuita optimiza imagenes para adjuntos de email rapidos. Redimensiona automaticamente imagenes grandes a un tamano ideal para email (max 800×600) y aplica compresion al 75% de calidad: el punto ideal para equilibrar peso y calidad en emails.',
    'Perfect for email owners, professionals and students who need to optimize images for easy email sending without sacrificing too much quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Ideal para profesionales y estudiantes que necesitan optimizar imagenes para enviarlas por email sin perder demasiada calidad. Todo el procesamiento ocurre de forma segura en tu navegador. Sin registro y totalmente gratis.',
    'Perfect balance for fast loading emails.': 'Equilibrio perfecto para emails de carga rapida.',
    'Smart Resizing': 'Redimensionado inteligente',
    'Auto-resize to 800×600 max dimensions.': 'Redimensiona automaticamente a un maximo de 800×600.',
    '100% Secure': '100% Seguro',
    'All processing happens in your browser.': 'Todo el procesamiento ocurre en tu navegador.',
    'How to Optimize Images for Email': 'Como optimizar imagenes para Email',
    'Upload Your Image': 'Sube tu imagen',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Haz clic en el cuadro de carga o arrastra y suelta tu archivo (JPG, PNG, WebP).',
    'Auto Optimization': 'Optimizacion automatica',
    'Smart resize to 800×600 max and 75% quality compression.': 'Redimensionado inteligente a max 800×600 y compresion al 75% de calidad.',
    'Review Results': 'Revisa los resultados',
    'Check file size reduction and quality for your email needs.':
      'Comprueba la reduccion de tamano y la calidad para tus necesidades de email.',
    'Download & Use': 'Descarga y usa',
    'Download your Email-Ready image ready for your email.': 'Descarga tu imagen lista para usar en tu email.',
    'Pro Tip:': 'Consejo pro:',
    'This tool is perfect for blog posts, product images, and general email content. The 75% quality provides excellent visuals while ensuring easy email sending.':
      'Esta herramienta es perfecta para contenido de email, imagenes de producto y mas. El 75% de calidad mantiene una gran apariencia y facilita el envio por email.',
    'Frequently Asked Questions': 'Preguntas frecuentes',
    'What makes this different from regular compression?': 'Que lo hace diferente de una compresion normal?',
    'This tool is specifically optimized for email usage. It automatically resizes oversized images to email-friendly dimensions (max 800×600) and applies 75% quality compression - the sweet spot for balancing file size and visual quality on emails.':
      'Esta herramienta esta optimizada especificamente para email. Redimensiona automaticamente imagenes grandes a un tamano ideal (max 800×600) y aplica compresion al 75% de calidad para equilibrar peso y calidad en emails.',
    'Why 75% quality?': 'Por que 75% de calidad?',
    "75% quality is considered the optimal balance for email images. It provides significant file size reduction while maintaining excellent visual quality that's virtually indistinguishable from the original to most users. This helps emails load faster without sacrificing appearance.":
      'El 75% de calidad suele ser el equilibrio ideal para imagenes en email. Reduce mucho el tamano manteniendo una calidad excelente casi indistinguible para la mayoria de usuarios. Asi los emails cargan mas rapido sin perder apariencia.',
    'Will my image be resized?': 'Se redimensionara mi imagen?',
    'Only if necessary. Images larger than 800×600 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions. This prevents unnecessarily large images from slowing down your email.':
      'Solo si es necesario. Las imagenes mayores a 800×600 se redimensionan manteniendo la proporcion. Las imagenes pequenas conservan su tamano. Esto evita que imagenes demasiado grandes ralenticen tu email.',
    'What file format is the output?': 'Cual es el formato de salida?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Puedes descargar JPG, WebP o ambos (como ZIP) segun los formatos de salida que selecciones.',
    'Is my image secure and private?': 'Mi imagen es segura y privada?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Si! Toda la compresion ocurre en tu navegador. Tus imagenes nunca salen de tu dispositivo ni se suben a servidores. Privacidad total: no se almacena ni se transmite ningun dato.',
  },

  pt: {
    Home: 'Inicio',
    'Compress for Email': 'Comprimir Imagens para Email',
    'Optimize images for fast email attachments with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Otimize imagens para anexos de email mais leves com redimensionamento e compressao automatica. Rapido, seguro e funciona totalmente no seu navegador.',
    'Email-Ready Settings': 'Configuracoes prontas para Email',
    'Automatically resizes to email-friendly dimensions (max 800×600) and applies 75% quality compression - the perfect balance for fast loading emails while maintaining excellent visual quality.':
      'Redimensiona automaticamente para dimensoes ideais de email (max 800×600) e aplica compressao com 75% de qualidade — o equilibrio perfeito para emails mais rapidos mantendo excelente qualidade visual.',
    'Upload Image to Optimize for Email': 'Envie imagem para otimizar para email',
    'Drag & drop or click to browse': 'Arraste e solte ou clique para procurar',
    'Processing...': 'Processando...',
    'Output Formats': 'Formatos de saida',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Um formato selecionado = um download. Varios selecionados = download em ZIP.',
    Original: 'Original',
    'Email-Ready': 'Pronto para Email',
    Savings: 'Economia',
    'Generated Outputs': 'Saidas geradas',
    '✓ Email-Ready Successfully!': '✓ Pronto para Email!',
    'Upload New Image': 'Enviar nova imagem',
    'Download Email-Ready Outputs (ZIP)': 'Baixar saidas prontas para Email (ZIP)',
    'Download Email-Ready Image': 'Baixar imagem pronta para Email',
    'About Compress for Email Tool': 'Sobre a ferramenta Comprimir para Email',
    'Our free online tool optimizes images for fast email attachments. It automatically resizes large images to email-friendly dimensions (max 800×600) and applies 75% quality compression - the sweet spot for balancing file size and visual quality on emails.':
      'Nossa ferramenta online gratuita otimiza imagens para anexos de email mais leves. Ela redimensiona automaticamente imagens grandes para dimensoes ideais de email (max 800×600) e aplica compressao com 75% de qualidade — o ponto ideal para equilibrar tamanho e qualidade em emails.',
    'Perfect for email owners, professionals and students who need to optimize images for easy email sending without sacrificing too much quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Perfeito para profissionais e estudantes que precisam otimizar imagens para enviar por email sem perder muita qualidade. Todo o processamento acontece com seguranca no seu navegador. Sem cadastro e totalmente gratis.',
    'Perfect balance for fast loading emails.': 'Equilibrio perfeito para emails carregarem rapido.',
    'Smart Resizing': 'Redimensionamento inteligente',
    'Auto-resize to 800×600 max dimensions.': 'Redimensiona automaticamente ate 800×600.',
    '100% Secure': '100% Seguro',
    'All processing happens in your browser.': 'Todo o processamento acontece no seu navegador.',
    'How to Optimize Images for Email': 'Como otimizar imagens para Email',
    'Upload Your Image': 'Envie sua imagem',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Clique na area de envio ou arraste e solte seu arquivo (JPG, PNG, WebP).',
    'Auto Optimization': 'Otimizacao automatica',
    'Smart resize to 800×600 max and 75% quality compression.': 'Redimensionamento inteligente ate 800×600 e compressao com 75% de qualidade.',
    'Review Results': 'Revise os resultados',
    'Check file size reduction and quality for your email needs.':
      'Verifique a reducao de tamanho e a qualidade para suas necessidades de email.',
    'Download & Use': 'Baixe e use',
    'Download your Email-Ready image ready for your email.': 'Baixe sua imagem pronta para usar no email.',
    'Pro Tip:': 'Dica pro:',
    'This tool is perfect for blog posts, product images, and general email content. The 75% quality provides excellent visuals while ensuring easy email sending.':
      'Essa ferramenta e perfeita para conteudo de email, imagens de produto e mais. A qualidade de 75% mantem um visual excelente e facilita o envio por email.',
    'Frequently Asked Questions': 'Perguntas frequentes',
    'What makes this different from regular compression?': 'O que torna isso diferente da compressao normal?',
    'This tool is specifically optimized for email usage. It automatically resizes oversized images to email-friendly dimensions (max 800×600) and applies 75% quality compression - the sweet spot for balancing file size and visual quality on emails.':
      'Esta ferramenta e otimizada especificamente para email. Ela redimensiona imagens muito grandes para dimensoes ideais (max 800×600) e aplica compressao com 75% de qualidade — o ponto ideal para equilibrar tamanho e qualidade em emails.',
    'Why 75% quality?': 'Por que 75% de qualidade?',
    "75% quality is considered the optimal balance for email images. It provides significant file size reduction while maintaining excellent visual quality that's virtually indistinguishable from the original to most users. This helps emails load faster without sacrificing appearance.":
      '75% de qualidade e o equilibrio ideal para imagens em email. Reduz bastante o tamanho mantendo otima qualidade, quase indistinguivel do original para a maioria. Assim os emails carregam mais rapido sem perder aparencia.',
    'Will my image be resized?': 'Minha imagem sera redimensionada?',
    'Only if necessary. Images larger than 800×600 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions. This prevents unnecessarily large images from slowing down your email.':
      'Somente se necessario. Imagens maiores que 800×600 sao redimensionadas mantendo a proporcao. Imagens menores mantem o tamanho original. Isso evita que imagens grandes demais deixem seu email lento.',
    'What file format is the output?': 'Qual e o formato de saida?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Voce pode baixar JPG, WebP ou ambos (em ZIP) dependendo dos formatos selecionados.',
    'Is my image secure and private?': 'Minha imagem e segura e privada?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Com certeza! Toda a compressao acontece no seu navegador. Suas imagens nunca saem do seu dispositivo nem sao enviadas para servidores. Privacidade total: nenhum dado e armazenado ou transmitido.',
  },

  fr: {
    Home: 'Accueil',
    'Compress for Email': 'Compresser des Images pour Email',
    'Optimize images for fast email attachments with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Optimisez les images pour des pieces jointes email plus legeres avec redimensionnement et compression automatiques. Rapide, securise et fonctionne entierement dans votre navigateur.',
    'Email-Ready Settings': 'Reglages prets pour Email',
    'Automatically resizes to email-friendly dimensions (max 800×600) and applies 75% quality compression - the perfect balance for fast loading emails while maintaining excellent visual quality.':
      'Redimensionne automatiquement aux dimensions adaptees aux emails (max 800×600) et applique une compression a 75% de qualite — le meilleur equilibre pour des emails rapides tout en gardant une excellente qualite visuelle.',
    'Upload Image to Optimize for Email': 'Televersez une image pour optimisation email',
    'Drag & drop or click to browse': 'Glissez-deposez ou cliquez pour parcourir',
    'Processing...': 'Traitement...',
    'Output Formats': 'Formats de sortie',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un format = un telechargement. Plusieurs formats = telechargement ZIP.',
    Original: 'Original',
    'Email-Ready': 'Pret pour Email',
    Savings: 'Gain',
    'Generated Outputs': 'Sorties generees',
    '✓ Email-Ready Successfully!': '✓ Pret pour Email!',
    'Upload New Image': 'Televerser une nouvelle image',
    'Download Email-Ready Outputs (ZIP)': 'Telecharger les sorties pretes pour Email (ZIP)',
    'Download Email-Ready Image': 'Telecharger l image prete pour Email',
    'About Compress for Email Tool': 'A propos de Compresser pour Email',
    'Our free online tool optimizes images for fast email attachments. It automatically resizes large images to email-friendly dimensions (max 800×600) and applies 75% quality compression - the sweet spot for balancing file size and visual quality on emails.':
      'Notre outil gratuit optimise les images pour des pieces jointes email rapides. Il redimensionne automatiquement les grandes images aux dimensions adaptees aux emails (max 800×600) et applique une compression a 75% de qualite — le bon equilibre entre poids et qualite.',
    'Perfect for email owners, professionals and students who need to optimize images for easy email sending without sacrificing too much quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Ideal pour les professionnels et les etudiants qui veulent envoyer des images par email facilement sans perdre trop de qualite. Tout le traitement se fait dans votre navigateur. Sans inscription et totalement gratuit.',
    'Perfect balance for fast loading emails.': 'Equilibre parfait pour des emails plus rapides.',
    'Smart Resizing': 'Redimensionnement intelligent',
    'Auto-resize to 800×600 max dimensions.': 'Redimensionnement automatique jusqu a 800×600.',
    '100% Secure': '100% Securise',
    'All processing happens in your browser.': 'Tout le traitement se fait dans votre navigateur.',
    'How to Optimize Images for Email': 'Comment optimiser des images pour Email',
    'Upload Your Image': 'Televersez votre image',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Cliquez sur la zone de televersement ou glissez-deposez votre fichier (JPG, PNG, WebP).',
    'Auto Optimization': 'Optimisation automatique',
    'Smart resize to 800×600 max and 75% quality compression.': 'Redimensionnement intelligent jusqu a 800×600 et compression a 75% de qualite.',
    'Review Results': 'Verifier le resultat',
    'Check file size reduction and quality for your email needs.':
      'Verifiez la reduction de taille et la qualite pour vos emails.',
    'Download & Use': 'Telecharger et utiliser',
    'Download your Email-Ready image ready for your email.': 'Telechargez votre image prete pour votre email.',
    'Pro Tip:': 'Astuce pro:',
    'This tool is perfect for blog posts, product images, and general email content. The 75% quality provides excellent visuals while ensuring easy email sending.':
      'Cet outil est parfait pour le contenu email, les images produit et plus. La qualite a 75% offre un excellent rendu tout en facilitant l envoi par email.',
    'Frequently Asked Questions': 'Questions frequentes',
    'What makes this different from regular compression?': 'Qu est-ce qui est different d une compression classique?',
    'This tool is specifically optimized for email usage. It automatically resizes oversized images to email-friendly dimensions (max 800×600) and applies 75% quality compression - the sweet spot for balancing file size and visual quality on emails.':
      'Cet outil est optimise pour l email. Il redimensionne les images trop grandes aux dimensions adaptees (max 800×600) et applique une compression a 75% de qualite — le bon equilibre entre poids et qualite.',
    'Why 75% quality?': 'Pourquoi 75% de qualite?',
    "75% quality is considered the optimal balance for email images. It provides significant file size reduction while maintaining excellent visual quality that's virtually indistinguishable from the original to most users. This helps emails load faster without sacrificing appearance.":
      '75% de qualite est un excellent equilibre pour les images dans les emails. Cela reduit fortement la taille tout en gardant une qualite tres proche de l original pour la plupart des personnes. Les emails chargent plus vite sans perte visible.',
    'Will my image be resized?': 'Mon image sera-t-elle redimensionnee?',
    'Only if necessary. Images larger than 800×600 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions. This prevents unnecessarily large images from slowing down your email.':
      'Seulement si necessaire. Les images plus grandes que 800×600 seront redimensionnees en conservant les proportions. Les plus petites gardent leur taille. Cela evite de ralentir vos emails.',
    'What file format is the output?': 'Quel est le format de sortie?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Vous pouvez telecharger du JPG, du WebP, ou les deux (en ZIP) selon les formats selectionnes.',
    'Is my image secure and private?': 'Mon image est-elle privee et securisee?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Oui! Toute la compression se fait dans votre navigateur. Vos images ne quittent jamais votre appareil et ne sont envoyees sur aucun serveur. Confidentialite totale: aucune donnee n est stockee ni transmise.',
  },

  de: {
    Home: 'Startseite',
    'Compress for Email': 'Bilder fuer E-Mail Komprimieren',
    'Optimize images for fast email attachments with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Optimieren Sie Bilder fuer schnelle E-Mail-Anhaenge mit automatischer Groessenanpassung und Komprimierung. Schnell, sicher und komplett im Browser.',
    'Email-Ready Settings': 'E-Mail-fertige Einstellungen',
    'Automatically resizes to email-friendly dimensions (max 800×600) and applies 75% quality compression - the perfect balance for fast loading emails while maintaining excellent visual quality.':
      'Passt Bilder automatisch an E-Mail-taugliche Abmessungen an (max 800×600) und nutzt 75% Qualitaet — der beste Kompromiss fuer schnelle E-Mails bei sehr guter Bildqualitaet.',
    'Upload Image to Optimize for Email': 'Bild fuer E-Mail-Optimierung hochladen',
    'Drag & drop or click to browse': 'Ziehen und ablegen oder klicken zum Auswaehlen',
    'Processing...': 'Verarbeite...',
    'Output Formats': 'Ausgabeformate',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Ein Format = ein Download. Mehrere Formate = ZIP-Download.',
    Original: 'Original',
    'Email-Ready': 'E-Mail-fertig',
    Savings: 'Ersparnis',
    'Generated Outputs': 'Erzeugte Ausgaben',
    '✓ Email-Ready Successfully!': '✓ E-Mail-fertig!',
    'Upload New Image': 'Neues Bild hochladen',
    'Download Email-Ready Outputs (ZIP)': 'E-Mail-fertige Ausgaben herunterladen (ZIP)',
    'Download Email-Ready Image': 'E-Mail-fertiges Bild herunterladen',
    'About Compress for Email Tool': 'Ueber das Tool "Bilder fuer E-Mail komprimieren"',
    'Our free online tool optimizes images for fast email attachments. It automatically resizes large images to email-friendly dimensions (max 800×600) and applies 75% quality compression - the sweet spot for balancing file size and visual quality on emails.':
      'Unser kostenloses Online-Tool optimiert Bilder fuer schnelle E-Mail-Anhaenge. Grosse Bilder werden automatisch auf E-Mail-taugliche Abmessungen (max 800×600) angepasst und mit 75% Qualitaet komprimiert — ein sehr guter Kompromiss aus Dateigroesse und Bildqualitaet.',
    'Perfect for email owners, professionals and students who need to optimize images for easy email sending without sacrificing too much quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Ideal fuer Profis und Studierende, die Bilder fuer den E-Mail-Versand optimieren moechten, ohne zu viel Qualitaet zu verlieren. Alles passiert sicher im Browser. Ohne Registrierung und kostenlos.',
    'Perfect balance for fast loading emails.': 'Perfektes Gleichgewicht fuer schnelle E-Mails.',
    'Smart Resizing': 'Intelligentes Resizing',
    'Auto-resize to 800×600 max dimensions.': 'Automatisch bis max. 800×600 anpassen.',
    '100% Secure': '100% Sicher',
    'All processing happens in your browser.': 'Alles passiert in Ihrem Browser.',
    'How to Optimize Images for Email': 'So optimieren Sie Bilder fuer E-Mail',
    'Upload Your Image': 'Bild hochladen',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Klicken Sie auf das Upload-Feld oder ziehen Sie Ihre Datei hinein (JPG, PNG, WebP).',
    'Auto Optimization': 'Automatische Optimierung',
    'Smart resize to 800×600 max and 75% quality compression.': 'Intelligente Anpassung bis 800×600 und Komprimierung mit 75% Qualitaet.',
    'Review Results': 'Ergebnis pruefen',
    'Check file size reduction and quality for your email needs.':
      'Pruefen Sie Groessenersparnis und Qualitaet fuer Ihre E-Mail.',
    'Download & Use': 'Herunterladen & nutzen',
    'Download your Email-Ready image ready for your email.': 'Laden Sie Ihr E-Mail-fertiges Bild herunter.',
    'Pro Tip:': 'Pro-Tipp:',
    'This tool is perfect for blog posts, product images, and general email content. The 75% quality provides excellent visuals while ensuring easy email sending.':
      'Dieses Tool ist ideal fuer E-Mail-Inhalte, Produktbilder und mehr. 75% Qualitaet sieht sehr gut aus und sorgt fuer einfachen Versand per E-Mail.',
    'Frequently Asked Questions': 'Haeufige Fragen',
    'What makes this different from regular compression?': 'Was ist anders als bei normaler Komprimierung?',
    'This tool is specifically optimized for email usage. It automatically resizes oversized images to email-friendly dimensions (max 800×600) and applies 75% quality compression - the sweet spot for balancing file size and visual quality on emails.':
      'Dieses Tool ist speziell fuer E-Mail optimiert. Es passt zu grosse Bilder auf E-Mail-taugliche Abmessungen (max 800×600) an und nutzt 75% Qualitaet — ein sehr guter Kompromiss aus Dateigroesse und Bildqualitaet.',
    'Why 75% quality?': 'Warum 75% Qualitaet?',
    "75% quality is considered the optimal balance for email images. It provides significant file size reduction while maintaining excellent visual quality that's virtually indistinguishable from the original to most users. This helps emails load faster without sacrificing appearance.":
      '75% Qualitaet ist oft der beste Kompromiss fuer Bilder in E-Mails. Die Dateigroesse sinkt deutlich, waehrend die Qualitaet fuer die meisten nahezu wie das Original wirkt. So laden E-Mails schneller ohne sichtbare Einbussen.',
    'Will my image be resized?': 'Wird mein Bild skaliert?',
    'Only if necessary. Images larger than 800×600 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions. This prevents unnecessarily large images from slowing down your email.':
      'Nur wenn noetig. Bilder groesser als 800×600 werden proportional verkleinert. Kleinere Bilder bleiben unveraendert. So verhindern Sie, dass zu grosse Bilder Ihre E-Mail verlangsamen.',
    'What file format is the output?': 'Welches Ausgabeformat erhalte ich?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Sie koennen JPG, WebP oder beides (als ZIP) herunterladen — je nach Auswahl.',
    'Is my image secure and private?': 'Ist mein Bild sicher und privat?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Ja! Alles passiert komplett in Ihrem Browser. Ihre Bilder verlassen niemals Ihr Geraet und werden auf keinen Server hochgeladen. Volle Privatsphaere: keine Daten werden gespeichert oder uebertragen.',
  },

  it: {
    Home: 'Home',
    'Compress for Email': 'Comprimi Immagini per Email',
    'Optimize images for fast email attachments with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Ottimizza le immagini per allegati email piu leggeri con ridimensionamento e compressione automatici. Veloce, sicuro e funziona interamente nel browser.',
    'Email-Ready Settings': 'Impostazioni pronte per Email',
    'Automatically resizes to email-friendly dimensions (max 800×600) and applies 75% quality compression - the perfect balance for fast loading emails while maintaining excellent visual quality.':
      'Ridimensiona automaticamente a dimensioni adatte alle email (max 800×600) e applica compressione al 75% di qualita — il miglior equilibrio per email piu veloci mantenendo un ottima qualita visiva.',
    'Upload Image to Optimize for Email': 'Carica un immagine per ottimizzazione email',
    'Drag & drop or click to browse': 'Trascina e rilascia o fai clic per scegliere',
    'Processing...': 'Elaborazione...',
    'Output Formats': 'Formati di output',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un formato = un download. Piu formati = download ZIP.',
    Original: 'Originale',
    'Email-Ready': 'Pronto per Email',
    Savings: 'Risparmio',
    'Generated Outputs': 'Output generati',
    '✓ Email-Ready Successfully!': '✓ Pronto per Email!',
    'Upload New Image': 'Carica nuova immagine',
    'Download Email-Ready Outputs (ZIP)': 'Scarica output pronti per Email (ZIP)',
    'Download Email-Ready Image': 'Scarica immagine pronta per Email',
    'About Compress for Email Tool': 'Informazioni su Comprimi per Email',
    'Our free online tool optimizes images for fast email attachments. It automatically resizes large images to email-friendly dimensions (max 800×600) and applies 75% quality compression - the sweet spot for balancing file size and visual quality on emails.':
      'Il nostro strumento gratuito ottimizza le immagini per allegati email piu veloci. Ridimensiona automaticamente le immagini grandi a dimensioni adatte alle email (max 800×600) e applica compressione al 75% di qualita — il punto ideale tra dimensione e qualita.',
    'Perfect for email owners, professionals and students who need to optimize images for easy email sending without sacrificing too much quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Perfetto per professionisti e studenti che vogliono ottimizzare immagini per inviarle via email senza perdere troppa qualita. Tutto avviene in modo sicuro nel browser. Nessuna registrazione, totalmente gratuito.',
    'Perfect balance for fast loading emails.': 'Equilibrio perfetto per email piu veloci.',
    'Smart Resizing': 'Ridimensionamento intelligente',
    'Auto-resize to 800×600 max dimensions.': 'Ridimensiona automaticamente fino a 800×600.',
    '100% Secure': '100% Sicuro',
    'All processing happens in your browser.': 'Tutto avviene nel tuo browser.',
    'How to Optimize Images for Email': 'Come ottimizzare immagini per Email',
    'Upload Your Image': 'Carica la tua immagine',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Fai clic sull area di caricamento o trascina e rilascia il file (JPG, PNG, WebP).',
    'Auto Optimization': 'Ottimizzazione automatica',
    'Smart resize to 800×600 max and 75% quality compression.': 'Ridimensionamento intelligente fino a 800×600 e compressione al 75% di qualita.',
    'Review Results': 'Controlla i risultati',
    'Check file size reduction and quality for your email needs.':
      'Verifica riduzione della dimensione e qualita per le tue email.',
    'Download & Use': 'Scarica e usa',
    'Download your Email-Ready image ready for your email.': 'Scarica la tua immagine pronta per la tua email.',
    'Pro Tip:': 'Consiglio pro:',
    'This tool is perfect for blog posts, product images, and general email content. The 75% quality provides excellent visuals while ensuring easy email sending.':
      'Questo strumento e perfetto per contenuti email, immagini prodotto e altro. Il 75% di qualita offre un ottimo aspetto e facilita l invio via email.',
    'Frequently Asked Questions': 'Domande frequenti',
    'What makes this different from regular compression?': 'Cosa lo rende diverso dalla compressione normale?',
    'This tool is specifically optimized for email usage. It automatically resizes oversized images to email-friendly dimensions (max 800×600) and applies 75% quality compression - the sweet spot for balancing file size and visual quality on emails.':
      'Questo strumento e ottimizzato per l uso in email. Ridimensiona automaticamente le immagini troppo grandi a dimensioni adatte (max 800×600) e applica compressione al 75% di qualita — un ottimo equilibrio tra dimensione e qualita.',
    'Why 75% quality?': 'Perche 75% di qualita?',
    "75% quality is considered the optimal balance for email images. It provides significant file size reduction while maintaining excellent visual quality that's virtually indistinguishable from the original to most users. This helps emails load faster without sacrificing appearance.":
      'Il 75% di qualita e spesso il miglior equilibrio per immagini nelle email. Riduce molto la dimensione mantenendo una qualita eccellente quasi indistinguibile per la maggior parte degli utenti. Le email caricano piu velocemente senza perdere aspetto.',
    'Will my image be resized?': 'La mia immagine verra ridimensionata?',
    'Only if necessary. Images larger than 800×600 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions. This prevents unnecessarily large images from slowing down your email.':
      'Solo se necessario. Le immagini piu grandi di 800×600 vengono ridimensionate mantenendo le proporzioni. Le immagini piu piccole mantengono la dimensione originale. Questo evita che immagini troppo grandi rallentino la tua email.',
    'What file format is the output?': 'Qual e il formato di output?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Puoi scaricare JPG, WebP o entrambi (come ZIP) in base ai formati selezionati.',
    'Is my image secure and private?': 'La mia immagine e sicura e privata?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Assolutamente! Tutta la compressione avviene nel tuo browser. Le immagini non lasciano mai il tuo dispositivo e non vengono caricate su server. Privacy totale: nessun dato viene salvato o trasmesso.',
  },
};
