import type { Locale } from '@/lib/i18n';
import type { TranslationDict } from '@/lib/translateReactNode';

export const COMPRESS_FOR_FORMS_TEXT_BY_LOCALE: Partial<Record<Locale, TranslationDict>> = {
  es: {
    Home: 'Inicio',
    'Compress for Forms': 'Comprimir para Formularios',
    'Optimize images for online form uploads with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Optimiza imagenes para formularios online con redimensionado y compresion automaticos. Rapido, seguro y funciona totalmente en tu navegador.',
    'Form-Ready Settings': 'Ajustes listos para formularios',
    'Automatically resizes to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - the perfect balance for form uploads while maintaining excellent visual quality.':
      'Redimensiona automaticamente a dimensiones ideales para formularios (max 1024×1024) y aplica compresion al 80% de calidad: el equilibrio perfecto para subir archivos manteniendo excelente calidad visual.',
    'Upload Image to Optimize for Forms': 'Sube una imagen para optimizar para formularios',
    'Drag & drop or click to browse': 'Arrastra y suelta o haz clic para buscar',
    'Processing...': 'Procesando...',
    'Output Formats': 'Formatos de salida',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un formato seleccionado = una descarga. Varios seleccionados = descarga ZIP.',
    Original: 'Original',
    'Form-Ready': 'Listo para formularios',
    Savings: 'Ahorro',
    'Generated Outputs': 'Salidas generadas',
    '✓ Form-Ready Successfully!': '✓ Listo para formularios!',
    'Compressed to': 'Comprimido a',
    'with 80% quality. Perfect for form uploads while maintaining excellent visual quality.':
      'con 80% de calidad. Perfecto para subir en formularios manteniendo excelente calidad visual.',
    'Upload New Image': 'Subir nueva imagen',
    'Download Form-Ready Outputs (ZIP)': 'Descargar salidas (ZIP)',
    'Download Form-Ready Image': 'Descargar imagen',

    'About Compress for Forms Tool': 'Acerca de Comprimir para Formularios',
    'Our free online tool optimizes images for online forms. It automatically resizes large images to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - a great balance for meeting upload limits while keeping good visual quality.':
      'Nuestra herramienta online gratuita optimiza imagenes para formularios. Redimensiona automaticamente (max 1024×1024) y aplica compresion al 80% de calidad: un buen equilibrio para cumplir limites de carga manteniendo buena calidad.',
    'Perfect for applications, registrations, and any upload portal that enforces file size limits. All processing happens securely in your browser. No registration required, completely free to use.':
      'Perfecto para solicitudes, registros y cualquier portal con limites de tamano. Todo el procesamiento ocurre de forma segura en tu navegador. Sin registro y totalmente gratis.',

    'Why Form Image Optimization Matters': 'Por que importa optimizar imagenes para formularios',
    '✅ Meet Upload Limits': '✅ Cumple limites de carga',
    'Many forms reject large files. Compressing images helps you upload successfully on the first try.':
      'Muchos formularios rechazan archivos grandes. Comprimir imagenes ayuda a subirlas a la primera.',
    '⚡ Faster Submission': '⚡ Envio mas rapido',
    'Smaller images upload faster, especially on mobile or slow networks.':
      'Imagenes mas pequenas se suben mas rapido, especialmente en movil o redes lentas.',
    '🔒 Private & Secure': '🔒 Privado y seguro',
    'Everything runs in your browser. Your images never leave your device.':
      'Todo funciona en tu navegador. Tus imagenes no salen de tu dispositivo.',
    '🖼️ Clean, Readable Images': '🖼️ Imagenes claras y legibles',
    'Keep good quality for IDs, profile photos, and scanned documents while reducing size.':
      'Mantiene buena calidad para DNI, fotos de perfil y documentos escaneados mientras reduce el tamano.',

    'Impact Area': 'Area de impacto',
    'Before Optimization': 'Antes de optimizar',
    'After Optimization': 'Despues de optimizar',
    'Average Image Size': 'Tamano medio de imagen',
    'Upload Time': 'Tiempo de carga',
    'Failed Uploads': 'Cargas fallidas',
    'Submission Success': 'Envios correctos',
    Higher: 'Mayor',
    Lower: 'Menor',
    Improved: 'Mejorado',

    'Perfect balance for form uploads.': 'Equilibrio perfecto para subir en formularios.',
    'Smart Resizing': 'Redimensionado inteligente',
    'Auto-resize to 1024×1024 max dimensions.': 'Redimensiona automaticamente hasta 1024×1024.',
    '100% Secure': '100% Seguro',
    'All processing happens in your browser.': 'Todo el procesamiento ocurre en tu navegador.',

    'How to Optimize Images for Forms': 'Como optimizar imagenes para formularios',
    'Upload Your Image': 'Sube tu imagen',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Haz clic en el cuadro de carga o arrastra y suelta tu archivo (JPG, PNG, WebP).',
    'Auto Optimization': 'Optimizacion automatica',
    'Smart resize to 1024×1024 max and 80% quality compression.':
      'Redimensionado hasta 1024×1024 y compresion al 80% de calidad.',
    'Review Results': 'Revisa los resultados',
    'Check file size reduction and quality for your forms needs.':
      'Comprueba la reduccion de tamano y la calidad para tu formulario.',
    'Download & Use': 'Descarga y usa',
    'Download your Form-Ready image ready for your forms.':
      'Descarga tu imagen lista para formularios.',
    'Pro Tip:': 'Consejo pro:',
    'For ID photos and documents, start with a clear image and let the tool reduce size while keeping text readable.':
      'Para fotos de DNI y documentos, usa una imagen clara y deja que la herramienta reduzca el tamano manteniendo el texto legible.',

    'Frequently Asked Questions': 'Preguntas frecuentes',
    'What makes this different from regular compression?': 'Que lo hace diferente de una compresion normal?',
    'This tool is specifically optimized for form uploads. It automatically resizes oversized images to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - a great balance for meeting upload limits while keeping good quality.':
      'Esta herramienta esta optimizada para subir en formularios. Redimensiona (max 1024×1024) y aplica 80% de calidad: un buen equilibrio para cumplir limites sin perder demasiada calidad.',
    'Why 80% quality?': 'Por que 80% de calidad?',
    '80% quality is a reliable balance for form uploads. It reduces file size a lot while keeping the image clear for most use cases like profile photos and documents.':
      'El 80% de calidad es un equilibrio fiable. Reduce mucho el tamano manteniendo la imagen clara para casos comunes como foto de perfil y documentos.',
    'Will my image be resized?': 'Se redimensionara mi imagen?',
    'Only if necessary. Images larger than 1024×1024 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions.':
      'Solo si es necesario. Las imagenes mayores a 1024×1024 se redimensionan manteniendo la proporcion. Las pequenas conservan su tamano.',
    'What file format is the output?': 'Cual es el formato de salida?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Puedes descargar JPG, WebP o ambos (como ZIP) segun los formatos de salida que selecciones.',
    'Is my image secure and private?': 'Mi imagen es segura y privada?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Si! Toda la compresion ocurre en tu navegador. Tus imagenes no salen de tu dispositivo ni se suben a servidores. Privacidad total: no se almacena ni se transmite ningun dato.',
  },

  pt: {
    Home: 'Inicio',
    'Compress for Forms': 'Comprimir para Formularios',
    'Optimize images for online form uploads with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Otimize imagens para formularios online com redimensionamento e compressao automatica. Rapido, seguro e funciona totalmente no seu navegador.',
    'Form-Ready Settings': 'Configuracoes prontas para formularios',
    'Automatically resizes to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - the perfect balance for form uploads while maintaining excellent visual quality.':
      'Redimensiona automaticamente para dimensoes ideais (max 1024×1024) e aplica compressao com 80% de qualidade — o equilibrio perfeito para uploads mantendo excelente qualidade visual.',
    'Upload Image to Optimize for Forms': 'Envie imagem para otimizar para formularios',
    'Drag & drop or click to browse': 'Arraste e solte ou clique para procurar',
    'Processing...': 'Processando...',
    'Output Formats': 'Formatos de saida',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Um formato = um download. Varios formatos = download ZIP.',
    Original: 'Original',
    'Form-Ready': 'Pronto para formularios',
    Savings: 'Economia',
    'Generated Outputs': 'Saidas geradas',
    '✓ Form-Ready Successfully!': '✓ Pronto para formularios!',
    'Compressed to': 'Comprimido para',
    'with 80% quality. Perfect for form uploads while maintaining excellent visual quality.':
      'com 80% de qualidade. Perfeito para uploads mantendo excelente qualidade visual.',
    'Upload New Image': 'Enviar nova imagem',
    'Download Form-Ready Outputs (ZIP)': 'Baixar saidas (ZIP)',
    'Download Form-Ready Image': 'Baixar imagem',

    'About Compress for Forms Tool': 'Sobre a ferramenta Comprimir para Formularios',
    'Our free online tool optimizes images for online forms. It automatically resizes large images to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - a great balance for meeting upload limits while keeping good visual quality.':
      'Nossa ferramenta online gratuita otimiza imagens para formularios. Ela redimensiona automaticamente (max 1024×1024) e aplica compressao com 80% de qualidade — um bom equilibrio para cumprir limites de upload mantendo boa qualidade.',
    'Perfect for applications, registrations, and any upload portal that enforces file size limits. All processing happens securely in your browser. No registration required, completely free to use.':
      'Perfeito para candidaturas, cadastros e qualquer portal com limite de tamanho. Tudo acontece com seguranca no navegador. Sem cadastro e totalmente gratis.',

    'Why Form Image Optimization Matters': 'Por que a otimizacao de imagens para formularios importa',
    '✅ Meet Upload Limits': '✅ Cumprir limites de upload',
    'Many forms reject large files. Compressing images helps you upload successfully on the first try.':
      'Muitos formularios rejeitam arquivos grandes. Comprimir ajuda a enviar com sucesso de primeira.',
    '⚡ Faster Submission': '⚡ Envio mais rapido',
    'Smaller images upload faster, especially on mobile or slow networks.':
      'Imagens menores fazem upload mais rapido, especialmente no celular ou em redes lentas.',
    '🔒 Private & Secure': '🔒 Privado e seguro',
    'Everything runs in your browser. Your images never leave your device.':
      'Tudo roda no navegador. Suas imagens nao saem do seu dispositivo.',
    '🖼️ Clean, Readable Images': '🖼️ Imagens claras e legiveis',
    'Keep good quality for IDs, profile photos, and scanned documents while reducing size.':
      'Mantenha boa qualidade para documentos, fotos de perfil e digitalizacoes enquanto reduz o tamanho.',

    'Impact Area': 'Area de impacto',
    'Before Optimization': 'Antes da otimizacao',
    'After Optimization': 'Depois da otimizacao',
    'Average Image Size': 'Tamanho medio da imagem',
    'Upload Time': 'Tempo de upload',
    'Failed Uploads': 'Uploads com falha',
    'Submission Success': 'Envio com sucesso',
    Higher: 'Maior',
    Lower: 'Menor',
    Improved: 'Melhorado',

    'Perfect balance for form uploads.': 'Equilibrio perfeito para uploads.',
    'Smart Resizing': 'Redimensionamento inteligente',
    'Auto-resize to 1024×1024 max dimensions.': 'Redimensiona automaticamente ate 1024×1024.',
    '100% Secure': '100% Seguro',
    'All processing happens in your browser.': 'Todo o processamento acontece no seu navegador.',

    'How to Optimize Images for Forms': 'Como otimizar imagens para formularios',
    'Upload Your Image': 'Envie sua imagem',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Clique na area de envio ou arraste e solte seu arquivo (JPG, PNG, WebP).',
    'Auto Optimization': 'Otimizacao automatica',
    'Smart resize to 1024×1024 max and 80% quality compression.':
      'Redimensionamento ate 1024×1024 e compressao com 80% de qualidade.',
    'Review Results': 'Revise os resultados',
    'Check file size reduction and quality for your forms needs.':
      'Verifique a reducao de tamanho e a qualidade para seu formulario.',
    'Download & Use': 'Baixe e use',
    'Download your Form-Ready image ready for your forms.':
      'Baixe sua imagem pronta para formularios.',
    'Pro Tip:': 'Dica pro:',
    'For ID photos and documents, start with a clear image and let the tool reduce size while keeping text readable.':
      'Para documentos e fotos de identidade, use uma imagem clara e deixe a ferramenta reduzir o tamanho mantendo o texto legivel.',

    'Frequently Asked Questions': 'Perguntas frequentes',
    'What makes this different from regular compression?': 'O que torna isso diferente da compressao normal?',
    'This tool is specifically optimized for form uploads. It automatically resizes oversized images to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - a great balance for meeting upload limits while keeping good quality.':
      'Esta ferramenta e otimizada para uploads. Ela redimensiona automaticamente (max 1024×1024) e aplica 80% de qualidade — um bom equilibrio para cumprir limites mantendo boa qualidade.',
    'Why 80% quality?': 'Por que 80% de qualidade?',
    '80% quality is a reliable balance for form uploads. It reduces file size a lot while keeping the image clear for most use cases like profile photos and documents.':
      '80% de qualidade e um equilibrio confiavel. Reduz bastante o tamanho mantendo a imagem clara para casos comuns como foto de perfil e documentos.',
    'Will my image be resized?': 'Minha imagem sera redimensionada?',
    'Only if necessary. Images larger than 1024×1024 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions.':
      'Somente se necessario. Imagens maiores que 1024×1024 sao redimensionadas mantendo a proporcao. As menores mantem o tamanho original.',
    'What file format is the output?': 'Qual e o formato de saida?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Voce pode baixar JPG, WebP ou ambos (em ZIP) dependendo dos formatos selecionados.',
    'Is my image secure and private?': 'Minha imagem e segura e privada?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Com certeza! Toda a compressao acontece no seu navegador. Suas imagens nunca saem do seu dispositivo nem sao enviadas para servidores. Privacidade total: nenhum dado e armazenado ou transmitido.',
  },

  fr: {
    Home: 'Accueil',
    'Compress for Forms': 'Compresser pour Formulaires',
    'Optimize images for online form uploads with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Optimisez les images pour les formulaires en ligne avec redimensionnement et compression automatiques. Rapide, securise et entierement dans votre navigateur.',
    'Form-Ready Settings': 'Reglages prets pour formulaires',
    'Automatically resizes to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - the perfect balance for form uploads while maintaining excellent visual quality.':
      'Redimensionne automatiquement (max 1024×1024) et applique une compression a 80% de qualite — un excellent equilibre pour les uploads tout en gardant une excellente qualite.',
    'Upload Image to Optimize for Forms': 'Televersez une image pour formulaires',
    'Drag & drop or click to browse': 'Glissez-deposez ou cliquez pour parcourir',
    'Processing...': 'Traitement...',
    'Output Formats': 'Formats de sortie',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un format = un telechargement. Plusieurs formats = telechargement ZIP.',
    Original: 'Original',
    'Form-Ready': 'Pret pour formulaires',
    Savings: 'Gain',
    'Generated Outputs': 'Sorties generees',
    '✓ Form-Ready Successfully!': '✓ Pret pour formulaires!',
    'Compressed to': 'Compresse a',
    'with 80% quality. Perfect for form uploads while maintaining excellent visual quality.':
      'avec 80% de qualite. Parfait pour les uploads tout en gardant une excellente qualite.',
    'Upload New Image': 'Televerser une nouvelle image',
    'Download Form-Ready Outputs (ZIP)': 'Telecharger les sorties (ZIP)',
    'Download Form-Ready Image': 'Telecharger l image',

    'About Compress for Forms Tool': 'A propos de Compresser pour Formulaires',
    'Our free online tool optimizes images for online forms. It automatically resizes large images to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - a great balance for meeting upload limits while keeping good visual quality.':
      'Notre outil gratuit optimise les images pour les formulaires. Il redimensionne automatiquement (max 1024×1024) et applique une compression a 80% de qualite — un bon equilibre pour respecter les limites tout en gardant une bonne qualite.',
    'Perfect for applications, registrations, and any upload portal that enforces file size limits. All processing happens securely in your browser. No registration required, completely free to use.':
      'Ideal pour les candidatures, inscriptions et tout portail avec limite de taille. Tout se fait dans votre navigateur. Sans inscription et gratuit.',

    'Why Form Image Optimization Matters': "Pourquoi l'optimisation d'images pour formulaires est importante",
    '✅ Meet Upload Limits': '✅ Respecter les limites',
    'Many forms reject large files. Compressing images helps you upload successfully on the first try.':
      'De nombreux formulaires refusent les gros fichiers. La compression aide a reussir le televersement du premier coup.',
    '⚡ Faster Submission': '⚡ Soumission plus rapide',
    'Smaller images upload faster, especially on mobile or slow networks.':
      'Des images plus petites se televersent plus vite, surtout sur mobile ou reseaux lents.',
    '🔒 Private & Secure': '🔒 Prive et securise',
    'Everything runs in your browser. Your images never leave your device.':
      'Tout tourne dans votre navigateur. Vos images ne quittent jamais votre appareil.',
    '🖼️ Clean, Readable Images': '🖼️ Images nettes et lisibles',
    'Keep good quality for IDs, profile photos, and scanned documents while reducing size.':
      'Gardez une bonne qualite pour pieces d identite, photos de profil et documents scannes en reduisant la taille.',

    'Impact Area': "Zone d'impact",
    'Before Optimization': 'Avant optimisation',
    'After Optimization': 'Apres optimisation',
    'Average Image Size': "Taille moyenne d'image",
    'Upload Time': 'Temps de televersement',
    'Failed Uploads': 'Echecs de televersement',
    'Submission Success': 'Reussite de soumission',
    Higher: 'Plus eleve',
    Lower: 'Plus faible',
    Improved: 'Ameliore',

    'Perfect balance for form uploads.': 'Equilibre parfait pour les uploads.',
    'Smart Resizing': 'Redimensionnement intelligent',
    'Auto-resize to 1024×1024 max dimensions.': 'Redimensionne automatiquement jusqu a 1024×1024.',
    '100% Secure': '100% Securise',
    'All processing happens in your browser.': 'Tout le traitement se fait dans votre navigateur.',

    'How to Optimize Images for Forms': 'Comment optimiser des images pour formulaires',
    'Upload Your Image': 'Televersez votre image',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Cliquez sur la zone de televersement ou glissez-deposez votre fichier (JPG, PNG, WebP).',
    'Auto Optimization': 'Optimisation automatique',
    'Smart resize to 1024×1024 max and 80% quality compression.':
      'Redimensionnement jusqu a 1024×1024 et compression a 80% de qualite.',
    'Review Results': 'Verifier les resultats',
    'Check file size reduction and quality for your forms needs.':
      'Verifiez la reduction de taille et la qualite pour votre formulaire.',
    'Download & Use': 'Telecharger et utiliser',
    'Download your Form-Ready image ready for your forms.':
      'Telechargez votre image prete pour formulaires.',
    'Pro Tip:': 'Astuce pro:',
    'For ID photos and documents, start with a clear image and let the tool reduce size while keeping text readable.':
      'Pour les documents, partez d une image nette et laissez l outil reduire la taille en gardant le texte lisible.',

    'Frequently Asked Questions': 'Questions frequentes',
    'What makes this different from regular compression?': "Qu'est-ce qui le rend different d'une compression classique ?",
    'This tool is specifically optimized for form uploads. It automatically resizes oversized images to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - a great balance for meeting upload limits while keeping good quality.':
      'Cet outil est optimise pour les uploads de formulaires. Il redimensionne (max 1024×1024) et applique 80% de qualite — un bon equilibre pour respecter les limites tout en gardant une bonne qualite.',
    'Why 80% quality?': 'Pourquoi 80% de qualite ?',
    '80% quality is a reliable balance for form uploads. It reduces file size a lot while keeping the image clear for most use cases like profile photos and documents.':
      '80% est un equilibre fiable. La taille diminue fortement tout en gardant l image claire pour la plupart des usages comme photo de profil et documents.',
    'Will my image be resized?': 'Mon image sera-t-elle redimensionnee ?',
    'Only if necessary. Images larger than 1024×1024 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions.':
      'Seulement si necessaire. Les images au-dela de 1024×1024 sont reduites en conservant les proportions. Les petites gardent leurs dimensions.',
    'What file format is the output?': 'Quel est le format de sortie ?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Vous pouvez telecharger du JPG, du WebP, ou les deux (en ZIP) selon les formats choisis.',
    'Is my image secure and private?': 'Mon image est-elle securisee et privee ?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Oui ! Toute la compression se fait dans votre navigateur. Vos images ne quittent jamais votre appareil et ne sont pas envoyees sur un serveur. Confidentialite totale : aucune donnee n est stockee ni transmise.',
  },

  de: {
    Home: 'Startseite',
    'Compress for Forms': 'Fur Formulare komprimieren',
    'Optimize images for online form uploads with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Optimiere Bilder fur Online-Formulare mit automatischer Anpassung und Komprimierung. Schnell, sicher und komplett im Browser.',
    'Form-Ready Settings': 'Formular-fertige Einstellungen',
    'Automatically resizes to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - the perfect balance for form uploads while maintaining excellent visual quality.':
      'Passt automatisch an (max 1024×1024) und komprimiert mit 80% Qualitat — perfekt fur Uploads bei sehr guter Bildqualitat.',
    'Upload Image to Optimize for Forms': 'Bild fur Formulare hochladen',
    'Drag & drop or click to browse': 'Ziehen und ablegen oder klicken zum Auswahlen',
    'Processing...': 'Verarbeitung...',
    'Output Formats': 'Ausgabeformate',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Ein Format = ein Download. Mehrere Formate = ZIP-Download.',
    Original: 'Original',
    'Form-Ready': 'Formular-fertig',
    Savings: 'Ersparnis',
    'Generated Outputs': 'Erzeugte Ausgaben',
    '✓ Form-Ready Successfully!': '✓ Formular-fertig!',
    'Compressed to': 'Komprimiert auf',
    'with 80% quality. Perfect for form uploads while maintaining excellent visual quality.':
      'mit 80% Qualitat. Perfekt fur Uploads bei sehr guter Bildqualitat.',
    'Upload New Image': 'Neues Bild hochladen',
    'Download Form-Ready Outputs (ZIP)': 'Ausgaben herunterladen (ZIP)',
    'Download Form-Ready Image': 'Bild herunterladen',

    'About Compress for Forms Tool': 'Uber das Tool Fur Formulare komprimieren',
    'Our free online tool optimizes images for online forms. It automatically resizes large images to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - a great balance for meeting upload limits while keeping good visual quality.':
      'Unser kostenloses Tool optimiert Bilder fur Formulare. Es verkleinert automatisch (max 1024×1024) und nutzt 80% Qualitat — ein guter Kompromiss, um Upload-Limits einzuhalten und die Qualitat zu erhalten.',
    'Perfect for applications, registrations, and any upload portal that enforces file size limits. All processing happens securely in your browser. No registration required, completely free to use.':
      'Ideal fur Bewerbungen, Registrierungen und Portale mit Dateigrossen-Limits. Alles passiert sicher im Browser. Keine Registrierung, komplett kostenlos.',

    'Why Form Image Optimization Matters': 'Warum Bildoptimierung fur Formulare wichtig ist',
    '✅ Meet Upload Limits': '✅ Upload-Limits einhalten',
    'Many forms reject large files. Compressing images helps you upload successfully on the first try.':
      'Viele Formulare lehnen grosse Dateien ab. Komprimieren hilft, dass der Upload beim ersten Mal klappt.',
    '⚡ Faster Submission': '⚡ Schnellere Abgabe',
    'Smaller images upload faster, especially on mobile or slow networks.':
      'Kleinere Bilder werden schneller hochgeladen, besonders mobil oder bei langsamen Netzwerken.',
    '🔒 Private & Secure': '🔒 Privat und sicher',
    'Everything runs in your browser. Your images never leave your device.':
      'Alles lauft im Browser. Deine Bilder verlassen dein Gerat nicht.',
    '🖼️ Clean, Readable Images': '🖼️ Klar und lesbar',
    'Keep good quality for IDs, profile photos, and scanned documents while reducing size.':
      'Gute Qualitat fur Ausweise, Profilfotos und Scans bei kleinerer Dateigrosse.',

    'Impact Area': 'Bereich',
    'Before Optimization': 'Vor der Optimierung',
    'After Optimization': 'Nach der Optimierung',
    'Average Image Size': 'Durchschnittliche Bildgrosse',
    'Upload Time': 'Upload-Zeit',
    'Failed Uploads': 'Fehlgeschlagene Uploads',
    'Submission Success': 'Erfolgreiche Abgabe',
    Higher: 'Hohher',
    Lower: 'Niedriger',
    Improved: 'Verbessert',

    'Perfect balance for form uploads.': 'Perfekte Balance fur Formular-Uploads.',
    'Smart Resizing': 'Intelligentes Anpassen',
    'Auto-resize to 1024×1024 max dimensions.': 'Automatisch bis max. 1024×1024 anpassen.',
    '100% Secure': '100% Sicher',
    'All processing happens in your browser.': 'Alles passiert in deinem Browser.',

    'How to Optimize Images for Forms': 'So optimierst du Bilder fur Formulare',
    'Upload Your Image': 'Bild hochladen',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Klicke auf das Upload-Feld oder ziehe deine Datei hinein (JPG, PNG, WebP).',
    'Auto Optimization': 'Automatische Optimierung',
    'Smart resize to 1024×1024 max and 80% quality compression.':
      'Intelligent auf max. 1024×1024 anpassen und mit 80% Qualitat komprimieren.',
    'Review Results': 'Ergebnisse prufen',
    'Check file size reduction and quality for your forms needs.':
      'Prufe Dateigrosse und Qualitat fur dein Formular.',
    'Download & Use': 'Herunterladen und nutzen',
    'Download your Form-Ready image ready for your forms.':
      'Lade dein Formular-fertiges Bild herunter.',
    'Pro Tip:': 'Profi-Tipp:',
    'For ID photos and documents, start with a clear image and let the tool reduce size while keeping text readable.':
      'Fur Ausweise und Dokumente: Starte mit einem klaren Bild und lass die Grosse reduzieren, ohne dass Text unlesbar wird.',

    'Frequently Asked Questions': 'Haufige Fragen',
    'What makes this different from regular compression?': 'Was ist anders als normale Komprimierung?',
    'This tool is specifically optimized for form uploads. It automatically resizes oversized images to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - a great balance for meeting upload limits while keeping good quality.':
      'Dieses Tool ist fur Formular-Uploads optimiert. Es verkleinert automatisch (max 1024×1024) und nutzt 80% Qualitat — ein guter Kompromiss fur Upload-Limits bei guter Qualitat.',
    'Why 80% quality?': 'Warum 80% Qualitat?',
    '80% quality is a reliable balance for form uploads. It reduces file size a lot while keeping the image clear for most use cases like profile photos and documents.':
      '80% ist ein zuverlassiger Kompromiss. Die Dateigrosse wird stark reduziert, wahrend die Bilder fur die meisten Zwecke klar bleiben.',
    'Will my image be resized?': 'Wird mein Bild verkleinert?',
    'Only if necessary. Images larger than 1024×1024 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions.':
      'Nur wenn notig. Bilder grosser als 1024×1024 werden proportional verkleinert. Kleinere behalten ihre Masse.',
    'What file format is the output?': 'Welches Format hat die Ausgabe?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Du kannst JPG, WebP oder beides (als ZIP) herunterladen — je nach Auswahl.',
    'Is my image secure and private?': 'Sind meine Bilder sicher und privat?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Ja! Die Komprimierung passiert komplett in deinem Browser. Deine Bilder verlassen dein Gerat nicht und werden nicht hochgeladen. Volle Privatsphare: keine Speicherung oder Ubertragung von Daten.',
  },

  it: {
    Home: 'Home',
    'Compress for Forms': 'Comprimi per Moduli',
    'Optimize images for online form uploads with automatic resizing and compression. Fast, secure, and works entirely in your browser.':
      'Ottimizza le immagini per moduli online con ridimensionamento e compressione automatici. Veloce, sicuro e funziona nel browser.',
    'Form-Ready Settings': 'Impostazioni pronte per moduli',
    'Automatically resizes to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - the perfect balance for form uploads while maintaining excellent visual quality.':
      'Ridimensiona automaticamente (max 1024×1024) e applica compressione con qualita 80% — il giusto equilibrio per gli upload mantenendo un ottima qualita.',
    'Upload Image to Optimize for Forms': 'Carica un immagine per i moduli',
    'Drag & drop or click to browse': 'Trascina e rilascia o fai clic per scegliere',
    'Processing...': 'Elaborazione...',
    'Output Formats': 'Formati di output',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un formato = un download. Piu formati = download ZIP.',
    Original: 'Originale',
    'Form-Ready': 'Pronto per moduli',
    Savings: 'Risparmio',
    'Generated Outputs': 'Output generati',
    '✓ Form-Ready Successfully!': '✓ Pronto per moduli!',
    'Compressed to': 'Compresso a',
    'with 80% quality. Perfect for form uploads while maintaining excellent visual quality.':
      'con qualita 80%. Perfetto per gli upload mantenendo un ottima qualita.',
    'Upload New Image': 'Carica una nuova immagine',
    'Download Form-Ready Outputs (ZIP)': 'Scarica gli output (ZIP)',
    'Download Form-Ready Image': 'Scarica l immagine',

    'About Compress for Forms Tool': 'Info su Comprimi per Moduli',
    'Our free online tool optimizes images for online forms. It automatically resizes large images to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - a great balance for meeting upload limits while keeping good visual quality.':
      'Il nostro strumento gratuito ottimizza le immagini per moduli online. Ridimensiona automaticamente (max 1024×1024) e applica compressione con qualita 80% — un buon equilibrio per rispettare i limiti mantenendo buona qualita.',
    'Perfect for applications, registrations, and any upload portal that enforces file size limits. All processing happens securely in your browser. No registration required, completely free to use.':
      'Perfetto per candidature, registrazioni e qualsiasi portale con limiti di dimensione. Tutto avviene nel browser. Nessuna registrazione, gratis.',

    'Why Form Image Optimization Matters': "Perche l'ottimizzazione delle immagini per moduli e importante",
    '✅ Meet Upload Limits': '✅ Rispetta i limiti di upload',
    'Many forms reject large files. Compressing images helps you upload successfully on the first try.':
      'Molti moduli rifiutano file grandi. La compressione aiuta a caricare con successo al primo tentativo.',
    '⚡ Faster Submission': '⚡ Invio piu rapido',
    'Smaller images upload faster, especially on mobile or slow networks.':
      'Immagini piu piccole si caricano piu velocemente, soprattutto su mobile o reti lente.',
    '🔒 Private & Secure': '🔒 Privato e sicuro',
    'Everything runs in your browser. Your images never leave your device.':
      'Tutto avviene nel browser. Le immagini non lasciano il dispositivo.',
    '🖼️ Clean, Readable Images': '🖼️ Immagini chiare e leggibili',
    'Keep good quality for IDs, profile photos, and scanned documents while reducing size.':
      'Mantieni una buona qualita per documenti, foto profilo e scansioni riducendo la dimensione.',

    'Impact Area': 'Area di impatto',
    'Before Optimization': 'Prima dell ottimizzazione',
    'After Optimization': 'Dopo l ottimizzazione',
    'Average Image Size': 'Dimensione media immagine',
    'Upload Time': 'Tempo di upload',
    'Failed Uploads': 'Upload falliti',
    'Submission Success': 'Invio riuscito',
    Higher: 'Maggiore',
    Lower: 'Minore',
    Improved: 'Migliorato',

    'Perfect balance for form uploads.': 'Equilibrio perfetto per gli upload.',
    'Smart Resizing': 'Ridimensionamento intelligente',
    'Auto-resize to 1024×1024 max dimensions.': 'Ridimensiona automaticamente fino a 1024×1024.',
    '100% Secure': '100% Sicuro',
    'All processing happens in your browser.': 'Tutto avviene nel tuo browser.',

    'How to Optimize Images for Forms': 'Come ottimizzare le immagini per moduli',
    'Upload Your Image': 'Carica la tua immagine',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Fai clic sulla casella di caricamento o trascina il file (JPG, PNG, WebP).',
    'Auto Optimization': 'Ottimizzazione automatica',
    'Smart resize to 1024×1024 max and 80% quality compression.':
      'Ridimensionamento fino a 1024×1024 e compressione con qualita 80%.',
    'Review Results': 'Controlla i risultati',
    'Check file size reduction and quality for your forms needs.':
      'Verifica la riduzione di dimensione e la qualita per il modulo.',
    'Download & Use': 'Scarica e usa',
    'Download your Form-Ready image ready for your forms.':
      'Scarica la tua immagine pronta per moduli.',
    'Pro Tip:': 'Consiglio:',
    'For ID photos and documents, start with a clear image and let the tool reduce size while keeping text readable.':
      'Per documenti e foto, parti da un immagine chiara e lascia che lo strumento riduca la dimensione mantenendo il testo leggibile.',

    'Frequently Asked Questions': 'Domande frequenti',
    'What makes this different from regular compression?': 'Cosa lo rende diverso dalla compressione normale?',
    'This tool is specifically optimized for form uploads. It automatically resizes oversized images to form-friendly dimensions (max 1024×1024) and applies 80% quality compression - a great balance for meeting upload limits while keeping good quality.':
      'Questo strumento e ottimizzato per gli upload dei moduli. Ridimensiona (max 1024×1024) e applica qualita 80% — un buon equilibrio per rispettare i limiti mantenendo buona qualita.',
    'Why 80% quality?': 'Perche qualita 80%?',
    '80% quality is a reliable balance for form uploads. It reduces file size a lot while keeping the image clear for most use cases like profile photos and documents.':
      'La qualita 80% e un equilibrio affidabile. Riduce molto la dimensione mantenendo l immagine chiara per la maggior parte dei casi d uso.',
    'Will my image be resized?': 'La mia immagine verra ridimensionata?',
    'Only if necessary. Images larger than 1024×1024 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions.':
      'Solo se necessario. Le immagini piu grandi di 1024×1024 vengono ridimensionate mantenendo le proporzioni. Le piu piccole restano uguali.',
    'What file format is the output?': 'Qual e il formato di output?',
    'You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.':
      'Puoi scaricare JPG, WebP o entrambi (come ZIP) in base ai formati selezionati.',
    'Is my image secure and private?': 'La mia immagine e sicura e privata?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Certo! Tutta la compressione avviene nel tuo browser. Le immagini non lasciano mai il dispositivo e non vengono caricate su server. Privacy totale: nessun dato viene salvato o trasmesso.',
  },
};
