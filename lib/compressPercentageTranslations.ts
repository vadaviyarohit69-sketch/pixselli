import type { Locale } from '@/lib/i18n';
import type { TranslationDict } from '@/lib/translateReactNode';

export const COMPRESS_PERCENTAGE_TEXT_BY_LOCALE: Partial<Record<Locale, TranslationDict>> = {
  es: {
    Home: 'Inicio',
    'Compress by Percentage': 'Comprimir por porcentaje',
    'Compress Image by Percentage': 'Comprimir imagen por porcentaje',
    'Reduce image file size by custom percentage. Choose from 10% to 90% reduction for optimal file size control. Fast, secure, and works entirely in your browser.':
      'Reduce el tamano del archivo de imagen por un porcentaje personalizado. Elige entre 10% y 90% de reduccion para un control preciso del tamano. Rapido, seguro y funciona totalmente en tu navegador.',
    'Current Reduction:': 'Reduccion actual:',
    'Our smart compression algorithm will reduce your image file size by approximately':
      'Nuestro algoritmo de compresion reducira el tamano del archivo aproximadamente',
    'while maintaining visual quality.': 'manteniendo la calidad visual.',
    'Adjust the slider below to choose your desired reduction percentage.':
      'Ajusta el control deslizante para elegir el porcentaje de reduccion deseado.',
    'Upload Image to Compress': 'Sube una imagen para comprimir',
    'Drag & drop or click to browse': 'Arrastra y suelta o haz clic para buscar',
    'Processing...': 'Procesando...',
    'Reduction Percentage': 'Porcentaje de reduccion',
    Minimal: 'Minimo',
    Balanced: 'Equilibrado',
    Maximum: 'Maximo',
    'Output Formats': 'Formatos de salida',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un formato seleccionado = descarga unica. Varios formatos = descarga ZIP.',
    Original: 'Original',
    Compressed: 'Comprimido',
    Reduced: 'Reducido',
    'Download Compressed Outputs (ZIP)': 'Descargar salidas comprimidas (ZIP)',
    'Download Compressed Image': 'Descargar imagen comprimida',
    'Please select a valid image file': 'Por favor selecciona un archivo de imagen valido',
    '✓ Target Achieved!': '✓ Objetivo logrado!',
    '⚠ Close to Target': '⚠ Cerca del objetivo',
    'Successfully reduced by {actual}% (target: {target}%)':
      'Reducido con exito {actual}% (objetivo: {target}%)',
    'Reduced by {actual}% (target: {target}%). Very close to desired reduction.':
      'Reducido {actual}% (objetivo: {target}%). Muy cerca de lo deseado.',
    'Upload New Image': 'Subir nueva imagen',
    'Generated Outputs': 'Salidas generadas',
    'About Compress by Percentage Tool': 'Acerca de Comprimir por porcentaje',
    'Our free online tool reduces image file size by your chosen percentage. Perfect for when you need precise control over file size reduction for websites, email attachments, storage optimization, and bandwidth management.':
      'Nuestra herramienta gratuita reduce el tamano del archivo segun el porcentaje elegido. Ideal cuando necesitas control preciso para sitios web, adjuntos de correo, optimizacion de almacenamiento y gestion de ancho de banda.',
    'Simply upload your image, choose your desired reduction percentage (10% to 90%), and our smart algorithm automatically compresses while maintaining visual quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Solo sube tu imagen, elige el porcentaje (10% a 90%) y el algoritmo comprimira manteniendo la calidad visual. Todo ocurre en tu navegador. Sin registro y totalmente gratis.',
    'Custom Percentage': 'Porcentaje personalizado',
    'Choose exact reduction from 10% to 90%.': 'Elige la reduccion exacta del 10% al 90%.',
    'Smart Algorithm': 'Algoritmo inteligente',
    'Maintains quality while reducing size.': 'Mantiene la calidad mientras reduce el tamano.',
    '100% Secure': '100% seguro',
    'All processing happens in your browser.': 'Todo el procesamiento ocurre en tu navegador.',
    'How to Compress Image by Percentage': 'Como comprimir una imagen por porcentaje',
    'Upload Your Image': 'Sube tu imagen',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Haz clic en el cuadro de carga o arrastra y suelta tu archivo (JPG, PNG, WebP).',
    'Choose Percentage': 'Elige el porcentaje',
    'Adjust the slider to select your desired reduction percentage (10%-90%).':
      'Ajusta el control para seleccionar el porcentaje de reduccion (10%-90%).',
    'Preview Results': 'Vista previa de resultados',
    'View the compressed image and check the actual reduction achieved.':
      'Mira la imagen comprimida y verifica la reduccion real lograda.',
    'Download Image': 'Descargar imagen',
    'Click download to save your compressed image with percentage in filename.':
      'Haz clic en descargar para guardar la imagen con el porcentaje en el nombre del archivo.',
    'Frequently Asked Questions': 'Preguntas frecuentes',
    'How does percentage-based compression work?': 'Como funciona la compresion por porcentaje?',
    'Our algorithm calculates the target file size based on your chosen percentage reduction, then iteratively adjusts compression quality to achieve that target. For example, choosing 50% reduction will aim to make your file approximately half its original size.':
      'El algoritmo calcula el tamano objetivo segun el porcentaje elegido y ajusta la calidad para alcanzarlo. Por ejemplo, con 50% buscara que el archivo quede aproximadamente a la mitad.',
    'What percentage should I choose?': 'Que porcentaje debo elegir?',
    'For web images: 50-70% reduction is ideal. For social media: 60-80% works well. For professional use: 30-50% reduction maintains high quality. For email attachments: 70-80% reduction is sufficient. You can adjust the slider in real-time to see the results!':
      'Para web: 50-70% es ideal. Para redes sociales: 60-80% funciona bien. Para uso profesional: 30-50% mantiene alta calidad. Para email: 70-80% suele ser suficiente. Ajusta el control en tiempo real y mira el resultado.',
    'Will high percentage reduction affect quality?': 'Una reduccion alta afectara la calidad?',
    'Higher reduction percentages (70-90%) will reduce file size significantly but may show some quality loss. Our algorithm optimizes compression to minimize visible artifacts. For best results, preview the compressed image before downloading to ensure it meets your quality requirements.':
      'Reducciones altas (70-90%) bajan mucho el tamano pero pueden perder algo de calidad. El algoritmo optimiza para minimizar artefactos. Para mejores resultados, revisa la vista previa antes de descargar.',
    'Can I adjust the percentage after upload?': 'Puedo ajustar el porcentaje despues de subir?',
    'Yes! After uploading, you can move the percentage slider to any value between 10% and 90%. The image will automatically recompress with the new percentage, allowing you to find the perfect balance between file size and quality.':
      'Si. Despues de subir, puedes mover el control entre 10% y 90%. La imagen se recomprimira automaticamente para que encuentres el mejor equilibrio entre tamano y calidad.',
    'Is percentage compression secure?': 'La compresion por porcentaje es segura?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Si. Toda la compresion ocurre en tu navegador. Tus imagenes no salen del dispositivo ni se suben a servidores. Privacidad total: no se almacena ni se transmite ningun dato.',
    'Pro Tip:': 'Consejo pro:',
    'For web optimization, 50-70% reduction works best. For email attachments, try 60-80% reduction. Adjust the slider in real-time to find your perfect balance!':
      'Para web, 50-70% suele funcionar mejor. Para email, prueba 60-80%. Ajusta el control en tiempo real para encontrar tu balance ideal!',
  },

  pt: {
    Home: 'Inicio',
    'Compress by Percentage': 'Comprimir por Porcentagem',
    'Compress Image by Percentage': 'Comprimir Imagem por Porcentagem',
    'Reduce image file size by custom percentage. Choose from 10% to 90% reduction for optimal file size control. Fast, secure, and works entirely in your browser.':
      'Reduza o tamanho do arquivo da imagem por uma porcentagem personalizada. Escolha entre 10% e 90% de reducao para controlar o tamanho. Rapido, seguro e funciona totalmente no navegador.',
    'Current Reduction:': 'Reducao atual:',
    'Our smart compression algorithm will reduce your image file size by approximately':
      'Nosso algoritmo de compressao vai reduzir o tamanho do arquivo em aproximadamente',
    'while maintaining visual quality.': 'mantendo a qualidade visual.',
    'Adjust the slider below to choose your desired reduction percentage.':
      'Ajuste o controle deslizante para escolher a porcentagem desejada.',
    'Upload Image to Compress': 'Enviar imagem para comprimir',
    'Drag & drop or click to browse': 'Arraste e solte ou clique para procurar',
    'Processing...': 'Processando...',
    'Reduction Percentage': 'Porcentagem de reducao',
    Minimal: 'Minimo',
    Balanced: 'Equilibrado',
    Maximum: 'Maximo',
    'Output Formats': 'Formatos de saida',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Um formato = um download. Varios formatos = download ZIP.',
    Original: 'Original',
    Compressed: 'Comprimido',
    Reduced: 'Reduzido',
    'Download Compressed Outputs (ZIP)': 'Baixar saidas comprimidas (ZIP)',
    'Download Compressed Image': 'Baixar imagem comprimida',
    'Please select a valid image file': 'Por favor selecione um arquivo de imagem valido',
    '✓ Target Achieved!': '✓ Alvo atingido!',
    '⚠ Close to Target': '⚠ Perto do alvo',
    'Successfully reduced by {actual}% (target: {target}%)':
      'Reducao bem-sucedida de {actual}% (alvo: {target}%)',
    'Reduced by {actual}% (target: {target}%). Very close to desired reduction.':
      'Reduzido {actual}% (alvo: {target}%). Muito perto do desejado.',
    'Upload New Image': 'Enviar nova imagem',
    'Generated Outputs': 'Saidas geradas',
    'About Compress by Percentage Tool': 'Sobre a ferramenta Comprimir por Porcentagem',
    'Our free online tool reduces image file size by your chosen percentage. Perfect for when you need precise control over file size reduction for websites, email attachments, storage optimization, and bandwidth management.':
      'Nossa ferramenta gratuita reduz o tamanho do arquivo pela porcentagem escolhida. Ideal para controle preciso em sites, anexos de email, otimizacao de armazenamento e largura de banda.',
    'Simply upload your image, choose your desired reduction percentage (10% to 90%), and our smart algorithm automatically compresses while maintaining visual quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Basta enviar a imagem, escolher a reducao (10% a 90%) e o algoritmo comprime mantendo a qualidade visual. Tudo acontece no navegador. Sem cadastro e totalmente gratis.',
    'Custom Percentage': 'Porcentagem personalizada',
    'Choose exact reduction from 10% to 90%.': 'Escolha a reducao exata de 10% a 90%.',
    'Smart Algorithm': 'Algoritmo inteligente',
    'Maintains quality while reducing size.': 'Mantem a qualidade enquanto reduz o tamanho.',
    '100% Secure': '100% seguro',
    'All processing happens in your browser.': 'Todo o processamento acontece no seu navegador.',
    'How to Compress Image by Percentage': 'Como comprimir imagem por porcentagem',
    'Upload Your Image': 'Envie sua imagem',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Clique na caixa de upload ou arraste e solte seu arquivo (JPG, PNG, WebP).',
    'Choose Percentage': 'Escolha a porcentagem',
    'Adjust the slider to select your desired reduction percentage (10%-90%).':
      'Ajuste o controle para selecionar a reducao desejada (10%-90%).',
    'Preview Results': 'Ver resultados',
    'View the compressed image and check the actual reduction achieved.':
      'Veja a imagem comprimida e a reducao real atingida.',
    'Download Image': 'Baixar imagem',
    'Click download to save your compressed image with percentage in filename.':
      'Clique em baixar para salvar com a porcentagem no nome do arquivo.',
    'Frequently Asked Questions': 'Perguntas frequentes',
    'How does percentage-based compression work?': 'Como funciona a compressao por porcentagem?',
    'Our algorithm calculates the target file size based on your chosen percentage reduction, then iteratively adjusts compression quality to achieve that target. For example, choosing 50% reduction will aim to make your file approximately half its original size.':
      'O algoritmo calcula o tamanho alvo pela porcentagem escolhida e ajusta a qualidade ate atingir esse alvo. Por exemplo, 50% busca deixar o arquivo com aproximadamente metade do tamanho.',
    'What percentage should I choose?': 'Que porcentagem devo escolher?',
    'For web images: 50-70% reduction is ideal. For social media: 60-80% works well. For professional use: 30-50% reduction maintains high quality. For email attachments: 70-80% reduction is sufficient. You can adjust the slider in real-time to see the results!':
      'Para web: 50-70% e ideal. Para redes sociais: 60-80% funciona bem. Para uso profissional: 30-50% mantem alta qualidade. Para email: 70-80% costuma bastar. Ajuste em tempo real para ver o resultado.',
    'Will high percentage reduction affect quality?': 'Reducao alta afeta a qualidade?',
    'Higher reduction percentages (70-90%) will reduce file size significantly but may show some quality loss. Our algorithm optimizes compression to minimize visible artifacts. For best results, preview the compressed image before downloading to ensure it meets your quality requirements.':
      'Reducoes altas (70-90%) diminuem bastante o tamanho mas podem perder qualidade. O algoritmo otimiza para reduzir artefatos. Para melhores resultados, visualize antes de baixar.',
    'Can I adjust the percentage after upload?': 'Posso ajustar a porcentagem depois do upload?',
    'Yes! After uploading, you can move the percentage slider to any value between 10% and 90%. The image will automatically recompress with the new percentage, allowing you to find the perfect balance between file size and quality.':
      'Sim. Depois do upload, voce pode mover o controle entre 10% e 90%. A imagem sera recomprimida automaticamente para encontrar o melhor equilibrio entre tamanho e qualidade.',
    'Is percentage compression secure?': 'A compressao por porcentagem e segura?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Sim. Toda a compressao acontece no seu navegador. As imagens nao saem do dispositivo nem sao enviadas para servidores. Privacidade total: nenhum dado e armazenado ou transmitido.',
    'Pro Tip:': 'Dica pro:',
    'For web optimization, 50-70% reduction works best. For email attachments, try 60-80% reduction. Adjust the slider in real-time to find your perfect balance!':
      'Para web, 50-70% costuma funcionar melhor. Para email, tente 60-80%. Ajuste em tempo real para achar o melhor equilibrio!',
  },

  fr: {
    Home: 'Accueil',
    'Compress by Percentage': 'Compresser par pourcentage',
    'Compress Image by Percentage': 'Compresser une image par pourcentage',
    'Reduce image file size by custom percentage. Choose from 10% to 90% reduction for optimal file size control. Fast, secure, and works entirely in your browser.':
      'Reduisez la taille d une image par un pourcentage personnalise. Choisissez de 10% a 90% pour un controle precis. Rapide, securise et entierement dans votre navigateur.',
    'Current Reduction:': 'Reduction actuelle :',
    'Our smart compression algorithm will reduce your image file size by approximately':
      'Notre algorithme reduira la taille du fichier d environ',
    'while maintaining visual quality.': 'tout en conservant une bonne qualite visuelle.',
    'Adjust the slider below to choose your desired reduction percentage.':
      'Ajustez le curseur pour choisir le pourcentage souhaite.',
    'Upload Image to Compress': 'Televerser une image a compresser',
    'Drag & drop or click to browse': 'Glissez-deposez ou cliquez pour parcourir',
    'Processing...': 'Traitement...',
    'Reduction Percentage': 'Pourcentage de reduction',
    Minimal: 'Minimal',
    Balanced: 'Equilibre',
    Maximum: 'Maximum',
    'Output Formats': 'Formats de sortie',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un format = un telechargement. Plusieurs formats = ZIP.',
    Original: 'Original',
    Compressed: 'Compresse',
    Reduced: 'Reduit',
    'Download Compressed Outputs (ZIP)': 'Telecharger les sorties (ZIP)',
    'Download Compressed Image': 'Telecharger l image compressee',
    'Please select a valid image file': 'Veuillez selectionner un fichier image valide',
    '✓ Target Achieved!': '✓ Objectif atteint !',
    '⚠ Close to Target': '⚠ Pres de l objectif',
    'Successfully reduced by {actual}% (target: {target}%)':
      'Reduction reussie de {actual}% (cible : {target}%)',
    'Reduced by {actual}% (target: {target}%). Very close to desired reduction.':
      'Reduit de {actual}% (cible : {target}%). Tres proche du resultat souhaite.',
    'Upload New Image': 'Televerser une nouvelle image',
    'Generated Outputs': 'Sorties generees',
    'About Compress by Percentage Tool': 'A propos de la compression par pourcentage',
    'Our free online tool reduces image file size by your chosen percentage. Perfect for when you need precise control over file size reduction for websites, email attachments, storage optimization, and bandwidth management.':
      'Notre outil gratuit reduit la taille du fichier selon le pourcentage choisi. Parfait pour un controle precis pour les sites, les pieces jointes, le stockage et la bande passante.',
    'Simply upload your image, choose your desired reduction percentage (10% to 90%), and our smart algorithm automatically compresses while maintaining visual quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Televersez votre image, choisissez la reduction (10% a 90%) et l algorithme compresse en conservant la qualite visuelle. Tout se fait dans le navigateur. Sans inscription et gratuit.',
    'Custom Percentage': 'Pourcentage personnalise',
    'Choose exact reduction from 10% to 90%.': 'Choisissez une reduction exacte de 10% a 90%.',
    'Smart Algorithm': 'Algorithme intelligent',
    'Maintains quality while reducing size.': 'Conserve la qualite tout en reduisant la taille.',
    '100% Secure': '100% securise',
    'All processing happens in your browser.': 'Tout le traitement se fait dans votre navigateur.',
    'How to Compress Image by Percentage': 'Comment compresser une image par pourcentage',
    'Upload Your Image': 'Televersez votre image',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Cliquez sur la zone d envoi ou glissez-deposez votre fichier (JPG, PNG, WebP).',
    'Choose Percentage': 'Choisissez le pourcentage',
    'Adjust the slider to select your desired reduction percentage (10%-90%).':
      'Ajustez le curseur pour choisir la reduction (10%-90%).',
    'Preview Results': 'Apercu des resultats',
    'View the compressed image and check the actual reduction achieved.':
      'Visualisez l image compressee et la reduction reelle obtenue.',
    'Download Image': 'Telecharger l image',
    'Click download to save your compressed image with percentage in filename.':
      'Cliquez sur telecharger pour enregistrer avec le pourcentage dans le nom du fichier.',
    'Frequently Asked Questions': 'Questions frequentes',
    'How does percentage-based compression work?': 'Comment fonctionne la compression par pourcentage ?',
    'Our algorithm calculates the target file size based on your chosen percentage reduction, then iteratively adjusts compression quality to achieve that target. For example, choosing 50% reduction will aim to make your file approximately half its original size.':
      'L algorithme calcule une taille cible selon le pourcentage choisi, puis ajuste la qualite pour l atteindre. Par exemple, 50% vise environ la moitie de la taille initiale.',
    'What percentage should I choose?': 'Quel pourcentage choisir ?',
    'For web images: 50-70% reduction is ideal. For social media: 60-80% works well. For professional use: 30-50% reduction maintains high quality. For email attachments: 70-80% reduction is sufficient. You can adjust the slider in real-time to see the results!':
      'Pour le web : 50-70% est ideal. Pour les reseaux sociaux : 60-80% marche bien. Usage pro : 30-50% garde une haute qualite. Email : 70-80% suffit souvent. Ajustez en temps reel pour voir le resultat.',
    'Will high percentage reduction affect quality?': 'Une forte reduction affecte-t-elle la qualite ?',
    'Higher reduction percentages (70-90%) will reduce file size significantly but may show some quality loss. Our algorithm optimizes compression to minimize visible artifacts. For best results, preview the compressed image before downloading to ensure it meets your quality requirements.':
      'Des reductions elevees (70-90%) diminuent beaucoup la taille mais peuvent perdre un peu de qualite. L algorithme minimise les artefacts. Pour le meilleur resultat, verifiez l apercu avant de telecharger.',
    'Can I adjust the percentage after upload?': 'Puis-je ajuster le pourcentage apres l envoi ?',
    'Yes! After uploading, you can move the percentage slider to any value between 10% and 90%. The image will automatically recompress with the new percentage, allowing you to find the perfect balance between file size and quality.':
      'Oui. Apres l envoi, vous pouvez regler entre 10% et 90%. L image se recompresse automatiquement pour trouver le bon equilibre taille/qualite.',
    'Is percentage compression secure?': 'La compression par pourcentage est-elle securisee ?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Oui. Toute la compression se fait dans votre navigateur. Les images ne quittent jamais votre appareil et ne sont pas envoyees a un serveur. Confidentialite totale : aucune donnee stockee ou transmise.',
    'Pro Tip:': 'Astuce pro :',
    'For web optimization, 50-70% reduction works best. For email attachments, try 60-80% reduction. Adjust the slider in real-time to find your perfect balance!':
      'Pour le web, 50-70% fonctionne souvent le mieux. Pour les emails, essayez 60-80%. Ajustez en temps reel pour trouver votre meilleur equilibre !',
  },

  de: {
    Home: 'Startseite',
    'Compress by Percentage': 'Nach Prozent komprimieren',
    'Compress Image by Percentage': 'Bild nach Prozent komprimieren',
    'Reduce image file size by custom percentage. Choose from 10% to 90% reduction for optimal file size control. Fast, secure, and works entirely in your browser.':
      'Reduzieren Sie die Bilddateigroesse prozentual. Waehlen Sie 10% bis 90% fuer optimale Kontrolle. Schnell, sicher und komplett im Browser.',
    'Current Reduction:': 'Aktuelle Reduzierung:',
    'Our smart compression algorithm will reduce your image file size by approximately':
      'Unser Algorithmus reduziert die Dateigroesse um etwa',
    'while maintaining visual quality.': 'bei guter Bildqualitaet.',
    'Adjust the slider below to choose your desired reduction percentage.':
      'Stellen Sie den Regler ein, um den gewuenschten Prozentsatz zu waehlen.',
    'Upload Image to Compress': 'Bild zum Komprimieren hochladen',
    'Drag & drop or click to browse': 'Ziehen & ablegen oder klicken',
    'Processing...': 'Verarbeite...',
    'Reduction Percentage': 'Reduzierung in Prozent',
    Minimal: 'Minimal',
    Balanced: 'Ausgewogen',
    Maximum: 'Maximum',
    'Output Formats': 'Ausgabeformate',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Ein Format = ein Download. Mehrere Formate = ZIP.',
    Original: 'Original',
    Compressed: 'Komprimiert',
    Reduced: 'Reduziert',
    'Download Compressed Outputs (ZIP)': 'Komprimierte Ausgaben herunterladen (ZIP)',
    'Download Compressed Image': 'Komprimiertes Bild herunterladen',
    'Please select a valid image file': 'Bitte waehlen Sie eine gueltige Bilddatei aus',
    '✓ Target Achieved!': '✓ Ziel erreicht!',
    '⚠ Close to Target': '⚠ Nahe am Ziel',
    'Successfully reduced by {actual}% (target: {target}%)':
      'Erfolgreich um {actual}% reduziert (Ziel: {target}%)',
    'Reduced by {actual}% (target: {target}%). Very close to desired reduction.':
      'Um {actual}% reduziert (Ziel: {target}%). Sehr nah an der gewuenschten Reduzierung.',
    'Upload New Image': 'Neues Bild hochladen',
    'Generated Outputs': 'Erzeugte Ausgaben',
    'About Compress by Percentage Tool': 'Ueber das Tool "Nach Prozent komprimieren"',
    'Our free online tool reduces image file size by your chosen percentage. Perfect for when you need precise control over file size reduction for websites, email attachments, storage optimization, and bandwidth management.':
      'Unser kostenloses Tool reduziert die Bilddateigroesse um den gewaehlten Prozentsatz. Ideal fuer Websites, E-Mail-Anhaenge, Speicheroptimierung und Bandbreite mit genauer Kontrolle.',
    'Simply upload your image, choose your desired reduction percentage (10% to 90%), and our smart algorithm automatically compresses while maintaining visual quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Laden Sie Ihr Bild hoch, waehlen Sie die Reduzierung (10% bis 90%), und der Algorithmus komprimiert bei guter visueller Qualitaet. Alles passiert sicher im Browser. Ohne Registrierung und kostenlos.',
    'Custom Percentage': 'Benutzerdefinierter Prozentsatz',
    'Choose exact reduction from 10% to 90%.': 'Waehlen Sie eine genaue Reduzierung von 10% bis 90%.',
    'Smart Algorithm': 'Intelligenter Algorithmus',
    'Maintains quality while reducing size.': 'Erhaelt die Qualitaet waehrend die Groesse reduziert wird.',
    '100% Secure': '100% sicher',
    'All processing happens in your browser.': 'Alles wird in Ihrem Browser verarbeitet.',
    'How to Compress Image by Percentage': 'So komprimieren Sie nach Prozent',
    'Upload Your Image': 'Bild hochladen',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Klicken Sie auf das Upload-Feld oder ziehen Sie Ihre Datei hinein (JPG, PNG, WebP).',
    'Choose Percentage': 'Prozentsatz waehlen',
    'Adjust the slider to select your desired reduction percentage (10%-90%).':
      'Stellen Sie den Regler auf die gewuenschte Reduzierung (10%-90%).',
    'Preview Results': 'Ergebnisvorschau',
    'View the compressed image and check the actual reduction achieved.':
      'Sehen Sie das komprimierte Bild und die tatsaechliche Reduzierung.',
    'Download Image': 'Bild herunterladen',
    'Click download to save your compressed image with percentage in filename.':
      'Klicken Sie auf Download, um das komprimierte Bild mit Prozent im Dateinamen zu speichern.',
    'Frequently Asked Questions': 'Haeufige Fragen',
    'How does percentage-based compression work?': 'Wie funktioniert prozentuale Komprimierung?',
    'Our algorithm calculates the target file size based on your chosen percentage reduction, then iteratively adjusts compression quality to achieve that target. For example, choosing 50% reduction will aim to make your file approximately half its original size.':
      'Der Algorithmus berechnet eine Zielgroesse anhand des gewaehlten Prozentsatzes und passt dann die Qualitaet an, um dieses Ziel zu erreichen. Bei 50% soll die Datei etwa halb so gross werden.',
    'What percentage should I choose?': 'Welchen Prozentsatz soll ich waehlen?',
    'For web images: 50-70% reduction is ideal. For social media: 60-80% works well. For professional use: 30-50% reduction maintains high quality. For email attachments: 70-80% reduction is sufficient. You can adjust the slider in real-time to see the results!':
      'Fuer Webbilder sind 50-70% ideal. Fuer Social Media funktionieren 60-80% gut. Professionell: 30-50% haelt hohe Qualitaet. E-Mail: 70-80% reicht oft. Regler in Echtzeit anpassen und Ergebnis sehen.',
    'Will high percentage reduction affect quality?': 'Beeinflusst eine hohe Reduzierung die Qualitaet?',
    'Higher reduction percentages (70-90%) will reduce file size significantly but may show some quality loss. Our algorithm optimizes compression to minimize visible artifacts. For best results, preview the compressed image before downloading to ensure it meets your quality requirements.':
      'Hohe Reduzierungen (70-90%) verkleinern stark, koennen aber etwas Qualitaet kosten. Der Algorithmus minimiert Artefakte. Fuer beste Ergebnisse vor dem Download die Vorschau pruefen.',
    'Can I adjust the percentage after upload?': 'Kann ich den Prozentsatz nach dem Upload anpassen?',
    'Yes! After uploading, you can move the percentage slider to any value between 10% and 90%. The image will automatically recompress with the new percentage, allowing you to find the perfect balance between file size and quality.':
      'Ja. Nach dem Upload koennen Sie den Regler zwischen 10% und 90% bewegen. Das Bild wird automatisch neu komprimiert, um das beste Gleichgewicht zwischen Groesse und Qualitaet zu finden.',
    'Is percentage compression secure?': 'Ist die Komprimierung sicher?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Ja. Die Komprimierung passiert vollstaendig im Browser. Ihre Bilder verlassen das Geraet nicht und werden nie hochgeladen. Volle Privatsphaere: keine Daten werden gespeichert oder uebertragen.',
    'Pro Tip:': 'Pro-Tipp:',
    'For web optimization, 50-70% reduction works best. For email attachments, try 60-80% reduction. Adjust the slider in real-time to find your perfect balance!':
      'Fuer das Web funktionieren 50-70% oft am besten. Fuer E-Mail versuchen Sie 60-80%. Regler in Echtzeit anpassen und das perfekte Gleichgewicht finden!',
  },

  it: {
    Home: 'Home',
    'Compress by Percentage': 'Comprimi per percentuale',
    'Compress Image by Percentage': 'Comprimi immagine per percentuale',
    'Reduce image file size by custom percentage. Choose from 10% to 90% reduction for optimal file size control. Fast, secure, and works entirely in your browser.':
      'Riduci la dimensione del file immagine con una percentuale personalizzata. Scegli dal 10% al 90% per un controllo preciso. Veloce, sicuro e funziona interamente nel browser.',
    'Current Reduction:': 'Riduzione attuale:',
    'Our smart compression algorithm will reduce your image file size by approximately':
      'Il nostro algoritmo ridurra la dimensione del file di circa',
    'while maintaining visual quality.': 'mantenendo una buona qualita visiva.',
    'Adjust the slider below to choose your desired reduction percentage.':
      'Regola il cursore per scegliere la percentuale desiderata.',
    'Upload Image to Compress': 'Carica immagine da comprimere',
    'Drag & drop or click to browse': 'Trascina e rilascia o fai clic per scegliere',
    'Processing...': 'Elaborazione...',
    'Reduction Percentage': 'Percentuale di riduzione',
    Minimal: 'Minimo',
    Balanced: 'Equilibrato',
    Maximum: 'Massimo',
    'Output Formats': 'Formati di output',
    'One format selected = single download. Multiple selected = ZIP download.':
      'Un formato = un download. Piu formati = ZIP.',
    Original: 'Originale',
    Compressed: 'Compresso',
    Reduced: 'Ridotto',
    'Download Compressed Outputs (ZIP)': 'Scarica output compressi (ZIP)',
    'Download Compressed Image': 'Scarica immagine compressa',
    'Please select a valid image file': 'Seleziona un file immagine valido',
    '✓ Target Achieved!': '✓ Obiettivo raggiunto!',
    '⚠ Close to Target': '⚠ Vicino all obiettivo',
    'Successfully reduced by {actual}% (target: {target}%)':
      'Riduzione riuscita di {actual}% (obiettivo: {target}%)',
    'Reduced by {actual}% (target: {target}%). Very close to desired reduction.':
      'Ridotto di {actual}% (obiettivo: {target}%). Molto vicino alla riduzione desiderata.',
    'Upload New Image': 'Carica nuova immagine',
    'Generated Outputs': 'Output generati',
    'About Compress by Percentage Tool': 'Informazioni su Comprimi per percentuale',
    'Our free online tool reduces image file size by your chosen percentage. Perfect for when you need precise control over file size reduction for websites, email attachments, storage optimization, and bandwidth management.':
      'Il nostro strumento gratuito riduce la dimensione del file in base alla percentuale scelta. Perfetto per controllo preciso su siti web, allegati email, ottimizzazione storage e banda.',
    'Simply upload your image, choose your desired reduction percentage (10% to 90%), and our smart algorithm automatically compresses while maintaining visual quality. All processing happens securely in your browser. No registration required, completely free to use.':
      'Carica l immagine, scegli la riduzione (10% a 90%) e l algoritmo comprime mantenendo la qualita visiva. Tutto avviene nel browser. Nessuna registrazione, gratis.',
    'Custom Percentage': 'Percentuale personalizzata',
    'Choose exact reduction from 10% to 90%.': 'Scegli una riduzione esatta dal 10% al 90%.',
    'Smart Algorithm': 'Algoritmo intelligente',
    'Maintains quality while reducing size.': 'Mantiene la qualita riducendo la dimensione.',
    '100% Secure': '100% sicuro',
    'All processing happens in your browser.': 'Tutta l elaborazione avviene nel tuo browser.',
    'How to Compress Image by Percentage': 'Come comprimere un immagine per percentuale',
    'Upload Your Image': 'Carica la tua immagine',
    'Click the upload box or drag and drop your image file (JPG, PNG, WebP).':
      'Clicca sull area di upload o trascina e rilascia il file (JPG, PNG, WebP).',
    'Choose Percentage': 'Scegli percentuale',
    'Adjust the slider to select your desired reduction percentage (10%-90%).':
      'Regola il cursore per scegliere la riduzione desiderata (10%-90%).',
    'Preview Results': 'Anteprima risultati',
    'View the compressed image and check the actual reduction achieved.':
      'Guarda l immagine compressa e la riduzione effettiva ottenuta.',
    'Download Image': 'Scarica immagine',
    'Click download to save your compressed image with percentage in filename.':
      'Clicca su scarica per salvare con la percentuale nel nome del file.',
    'Frequently Asked Questions': 'Domande frequenti',
    'How does percentage-based compression work?': 'Come funziona la compressione per percentuale?',
    'Our algorithm calculates the target file size based on your chosen percentage reduction, then iteratively adjusts compression quality to achieve that target. For example, choosing 50% reduction will aim to make your file approximately half its original size.':
      'L algoritmo calcola la dimensione obiettivo in base alla percentuale scelta e regola la qualita per raggiungerla. Ad esempio, 50% punta a circa meta della dimensione originale.',
    'What percentage should I choose?': 'Che percentuale dovrei scegliere?',
    'For web images: 50-70% reduction is ideal. For social media: 60-80% works well. For professional use: 30-50% reduction maintains high quality. For email attachments: 70-80% reduction is sufficient. You can adjust the slider in real-time to see the results!':
      'Per il web: 50-70% e ideale. Per social: 60-80% va bene. Uso professionale: 30-50% mantiene alta qualita. Email: 70-80% spesso basta. Regola in tempo reale per vedere il risultato.',
    'Will high percentage reduction affect quality?': 'Una riduzione alta influisce sulla qualita?',
    'Higher reduction percentages (70-90%) will reduce file size significantly but may show some quality loss. Our algorithm optimizes compression to minimize visible artifacts. For best results, preview the compressed image before downloading to ensure it meets your quality requirements.':
      'Riduzioni alte (70-90%) riducono molto la dimensione ma possono perdere qualita. L algoritmo minimizza gli artefatti. Per il miglior risultato, controlla l anteprima prima di scaricare.',
    'Can I adjust the percentage after upload?': 'Posso regolare la percentuale dopo il caricamento?',
    'Yes! After uploading, you can move the percentage slider to any value between 10% and 90%. The image will automatically recompress with the new percentage, allowing you to find the perfect balance between file size and quality.':
      'Si. Dopo il caricamento puoi spostare il cursore tra 10% e 90%. L immagine verra ricompressa automaticamente per trovare il giusto equilibrio tra dimensione e qualita.',
    'Is percentage compression secure?': 'La compressione e sicura?',
    'Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.':
      'Si. Tutta la compressione avviene nel browser. Le immagini non lasciano il dispositivo e non vengono caricate su server. Privacy totale: nessun dato viene salvato o trasmesso.',
    'Pro Tip:': 'Consiglio pro:',
    'For web optimization, 50-70% reduction works best. For email attachments, try 60-80% reduction. Adjust the slider in real-time to find your perfect balance!':
      'Per il web, 50-70% spesso funziona meglio. Per email, prova 60-80%. Regola in tempo reale per trovare il tuo equilibrio perfetto!',
  },
};
