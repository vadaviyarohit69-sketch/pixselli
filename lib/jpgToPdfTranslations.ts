import type { Locale } from '@/lib/i18n';

type TranslationDict = Record<string, string>;

export const JPG_TO_PDF_TEXT_BY_LOCALE: Partial<Record<Locale, TranslationDict>> = {
  pt: {
    Home: 'Inicio',
    'JPG to PDF Converter': 'Conversor JPG para PDF',
    'Convert JPG images to PDF documents with advanced options including page size, orientation, margins, and multi-image merge.':
      'Converta imagens JPG em documentos PDF com opcoes avancadas de tamanho de pagina, orientacao, margens e uniao de varias imagens.',
    'Upload JPG Images': 'Enviar imagens JPG',
    'Drag and drop or click to browse. Multiple files supported.':
      'Arraste e solte ou clique para procurar. Varios arquivos sao suportados.',
    'Multiple Images': 'Multiplas imagens',
    'Merge to PDF': 'Unir em PDF',
    'Advanced Options': 'Opcoes avancadas',
    'Remove image': 'Remover imagem',
    'Add More': 'Adicionar mais',
    Images: 'Imagens',
    'PDF Settings': 'Configuracoes do PDF',
    'Page Size': 'Tamanho da pagina',
    Orientation: 'Orientacao',
    Portrait: 'Retrato',
    Landscape: 'Paisagem',
    'Fit Mode': 'Modo de ajuste',
    Contain: 'Conter',
    Cover: 'Cobrir',
    Fill: 'Preencher',
    'Merge Images': 'Unir imagens',
    On: 'Ligado',
    Off: 'Desligado',
    'Single PDF': 'PDF unico',
    'First Image Only': 'Apenas a primeira imagem',
    Margin: 'Margem',
    'Image Quality': 'Qualidade da imagem',
    'Converting to PDF...': 'Convertendo para PDF...',
    'Convert to PDF': 'Converter para PDF',
    'Download PDF': 'Baixar PDF',
    Reset: 'Redefinir',
    'About JPG to PDF Converter': 'Sobre o conversor JPG para PDF',
    'This tool converts JPG files into PDF with layout controls for page size, orientation, margins, fit mode, and quality.':
      'Esta ferramenta converte arquivos JPG em PDF com controles de layout para tamanho de pagina, orientacao, margens, modo de ajuste e qualidade.',
    Features: 'Recursos',
    'Multiple Image Merge': 'Uniao de varias imagens',
    'Create one PDF from several image files.':
      'Crie um PDF unico a partir de varios arquivos de imagem.',
    'Page Controls': 'Controles de pagina',
    'Pick A4, Letter, or Legal with portrait/landscape.':
      'Escolha A4, Letter ou Legal com orientacao retrato/paisagem.',
    'Fit and Margin Options': 'Opcoes de ajuste e margem',
    'Control how images fit on each PDF page.':
      'Controle como as imagens se ajustam em cada pagina do PDF.',
    'Quality Tuning': 'Ajuste de qualidade',
    'Adjust quality to balance file size and detail.':
      'Ajuste a qualidade para equilibrar tamanho do arquivo e detalhes.',
    'Client-side Processing': 'Processamento no navegador',
    'Files stay on your device for private conversion.':
      'Os arquivos permanecem no seu dispositivo para uma conversao privada.',
    'Free to Use': 'Gratis para usar',
    'No account needed and no upload queue delays.':
      'Nao e necessario conta e nao ha atrasos de fila de upload.',
    'Frequently Asked Questions': 'Perguntas frequentes',
    'Can I convert multiple JPG files into one PDF?':
      'Posso converter varios arquivos JPG em um unico PDF?',
    'Yes. Keep merge enabled and all selected images will be added as PDF pages.':
      'Sim. Mantenha a uniao ativada e todas as imagens selecionadas serao adicionadas como paginas do PDF.',
    'Can I choose page size and orientation?':
      'Posso escolher o tamanho da pagina e a orientacao?',
    'Yes. Choose A4, Letter, or Legal plus portrait or landscape orientation.':
      'Sim. Escolha A4, Letter ou Legal, alem de orientacao retrato ou paisagem.',
    'Is conversion private?': 'A conversao e privada?',
    'Yes. Processing happens in your browser and files are not uploaded to servers.':
      'Sim. O processamento acontece no seu navegador e os arquivos nao sao enviados para servidores.',
    'Please select valid JPG files': 'Selecione arquivos JPG validos',
    'Failed to read one or more images.':
      'Falha ao ler uma ou mais imagens.',
    'Failed to convert images to PDF. Please try again.':
      'Falha ao converter imagens para PDF. Tente novamente.',
  },

  fr: {
    Home: 'Accueil',
    'JPG to PDF Converter': 'Convertisseur JPG vers PDF',
    'Convert JPG images to PDF documents with advanced options including page size, orientation, margins, and multi-image merge.':
      'Convertissez des images JPG en documents PDF avec des options avancees (taille de page, orientation, marges et fusion de plusieurs images).',
    'Upload JPG Images': 'Televerser des images JPG',
    'Drag and drop or click to browse. Multiple files supported.':
      'Glissez-deposez ou cliquez pour parcourir. Plusieurs fichiers sont pris en charge.',
    'Multiple Images': 'Plusieurs images',
    'Merge to PDF': 'Fusionner en PDF',
    'Advanced Options': 'Options avancees',
    'Remove image': 'Retirer l\'image',
    'Add More': 'Ajouter',
    Images: 'Images',
    'PDF Settings': 'Parametres PDF',
    'Page Size': 'Taille de page',
    Orientation: 'Orientation',
    Portrait: 'Portrait',
    Landscape: 'Paysage',
    'Fit Mode': 'Mode d\'ajustement',
    Contain: 'Contenir',
    Cover: 'Couvrir',
    Fill: 'Remplir',
    'Merge Images': 'Fusionner les images',
    On: 'Active',
    Off: 'Desactive',
    'Single PDF': 'PDF unique',
    'First Image Only': 'Premiere image uniquement',
    Margin: 'Marge',
    'Image Quality': 'Qualite d\'image',
    'Converting to PDF...': 'Conversion en PDF...',
    'Convert to PDF': 'Convertir en PDF',
    'Download PDF': 'Telecharger le PDF',
    Reset: 'Reinitialiser',
    'About JPG to PDF Converter': 'A propos du convertisseur JPG vers PDF',
    'This tool converts JPG files into PDF with layout controls for page size, orientation, margins, fit mode, and quality.':
      'Cet outil convertit des fichiers JPG en PDF avec des controles de mise en page (taille, orientation, marges, ajustement et qualite).',
    Features: 'Fonctionnalites',
    'Multiple Image Merge': 'Fusion de plusieurs images',
    'Create one PDF from several image files.':
      'Creez un seul PDF a partir de plusieurs images.',
    'Page Controls': 'Controles de page',
    'Pick A4, Letter, or Legal with portrait/landscape.':
      'Choisissez A4, Letter ou Legal avec orientation portrait/paysage.',
    'Fit and Margin Options': 'Options d\'ajustement et de marge',
    'Control how images fit on each PDF page.':
      'Controlez comment les images s\'ajustent sur chaque page PDF.',
    'Quality Tuning': 'Reglage de la qualite',
    'Adjust quality to balance file size and detail.':
      'Ajustez la qualite pour equilibrer taille du fichier et details.',
    'Client-side Processing': 'Traitement cote navigateur',
    'Files stay on your device for private conversion.':
      'Les fichiers restent sur votre appareil pour une conversion privee.',
    'Free to Use': 'Gratuit',
    'No account needed and no upload queue delays.':
      'Aucun compte requis et aucune attente de televersement.',
    'Frequently Asked Questions': 'Questions frequentes',
    'Can I convert multiple JPG files into one PDF?':
      'Puis-je convertir plusieurs fichiers JPG en un seul PDF ?',
    'Yes. Keep merge enabled and all selected images will be added as PDF pages.':
      'Oui. Gardez la fusion activee et toutes les images seront ajoutees comme pages du PDF.',
    'Can I choose page size and orientation?':
      'Puis-je choisir la taille de page et l\'orientation ?',
    'Yes. Choose A4, Letter, or Legal plus portrait or landscape orientation.':
      'Oui. Choisissez A4, Letter ou Legal ainsi qu\'une orientation portrait ou paysage.',
    'Is conversion private?': 'La conversion est-elle privee ?',
    'Yes. Processing happens in your browser and files are not uploaded to servers.':
      'Oui. Le traitement se fait dans votre navigateur et les fichiers ne sont pas envoyes sur des serveurs.',
    'Please select valid JPG files':
      'Veuillez selectionner des fichiers JPG valides',
    'Failed to read one or more images.':
      'Impossible de lire une ou plusieurs images.',
    'Failed to convert images to PDF. Please try again.':
      'Echec de la conversion en PDF. Veuillez reessayer.',
  },

  de: {
    Home: 'Startseite',
    'JPG to PDF Converter': 'JPG-zu-PDF-Konverter',
    'Convert JPG images to PDF documents with advanced options including page size, orientation, margins, and multi-image merge.':
      'Konvertiere JPG-Bilder in PDF-Dokumente mit erweiterten Optionen wie Seitengrosse, Ausrichtung, Rander und Zusammenfuhren mehrerer Bilder.',
    'Upload JPG Images': 'JPG-Bilder hochladen',
    'Drag and drop or click to browse. Multiple files supported.':
      'Ziehen und ablegen oder klicken zum Auswahlen. Mehrere Dateien werden unterstutzt.',
    'Multiple Images': 'Mehrere Bilder',
    'Merge to PDF': 'Zu PDF zusammenfuhren',
    'Advanced Options': 'Erweiterte Optionen',
    'Remove image': 'Bild entfernen',
    'Add More': 'Mehr hinzufugen',
    Images: 'Bilder',
    'PDF Settings': 'PDF-Einstellungen',
    'Page Size': 'Seitengrosse',
    Orientation: 'Ausrichtung',
    Portrait: 'Hochformat',
    Landscape: 'Querformat',
    'Fit Mode': 'Anpassungsmodus',
    Contain: 'Einpassen',
    Cover: 'Abdecken',
    Fill: 'Fullen',
    'Merge Images': 'Bilder zusammenfuhren',
    On: 'Ein',
    Off: 'Aus',
    'Single PDF': 'Einzelnes PDF',
    'First Image Only': 'Nur erstes Bild',
    Margin: 'Rand',
    'Image Quality': 'Bildqualitat',
    'Converting to PDF...': 'Wird in PDF konvertiert...',
    'Convert to PDF': 'In PDF konvertieren',
    'Download PDF': 'PDF herunterladen',
    Reset: 'Zurucksetzen',
    'About JPG to PDF Converter': 'Uber den JPG-zu-PDF-Konverter',
    'This tool converts JPG files into PDF with layout controls for page size, orientation, margins, fit mode, and quality.':
      'Dieses Tool konvertiert JPG-Dateien in PDF mit Layout-Einstellungen fur Seitengrosse, Ausrichtung, Rander, Anpassung und Qualitat.',
    Features: 'Funktionen',
    'Multiple Image Merge': 'Mehrere Bilder zusammenfuhren',
    'Create one PDF from several image files.':
      'Erstelle ein PDF aus mehreren Bilddateien.',
    'Page Controls': 'Seiteneinstellungen',
    'Pick A4, Letter, or Legal with portrait/landscape.':
      'Wahle A4, Letter oder Legal mit Hoch-/Querformat.',
    'Fit and Margin Options': 'Optionen fur Anpassung und Rand',
    'Control how images fit on each PDF page.':
      'Steuere, wie Bilder auf jede PDF-Seite passen.',
    'Quality Tuning': 'Qualitat anpassen',
    'Adjust quality to balance file size and detail.':
      'Passe die Qualitat an, um Dateigrosse und Details auszubalancieren.',
    'Client-side Processing': 'Lokale Verarbeitung',
    'Files stay on your device for private conversion.':
      'Dateien bleiben fur eine private Konvertierung auf deinem Gerat.',
    'Free to Use': 'Kostenlos',
    'No account needed and no upload queue delays.':
      'Kein Konto erforderlich und keine Upload-Wartezeiten.',
    'Frequently Asked Questions': 'Haufig gestellte Fragen',
    'Can I convert multiple JPG files into one PDF?':
      'Kann ich mehrere JPG-Dateien in ein PDF umwandeln?',
    'Yes. Keep merge enabled and all selected images will be added as PDF pages.':
      'Ja. Lass das Zusammenfuhren aktiviert und alle ausgewahlten Bilder werden als PDF-Seiten hinzugefugt.',
    'Can I choose page size and orientation?':
      'Kann ich Seitengrosse und Ausrichtung wahlen?',
    'Yes. Choose A4, Letter, or Legal plus portrait or landscape orientation.':
      'Ja. Wahlen Sie A4, Letter oder Legal sowie Hoch- oder Querformat.',
    'Is conversion private?': 'Ist die Konvertierung privat?',
    'Yes. Processing happens in your browser and files are not uploaded to servers.':
      'Ja. Die Verarbeitung erfolgt im Browser und Dateien werden nicht auf Server hochgeladen.',
    'Please select valid JPG files':
      'Bitte wahlen Sie gultige JPG-Dateien aus',
    'Failed to read one or more images.':
      'Eine oder mehrere Bilder konnten nicht gelesen werden.',
    'Failed to convert images to PDF. Please try again.':
      'Konvertierung in PDF fehlgeschlagen. Bitte erneut versuchen.',
  },

  it: {
    Home: 'Home',
    'JPG to PDF Converter': 'Convertitore JPG in PDF',
    'Convert JPG images to PDF documents with advanced options including page size, orientation, margins, and multi-image merge.':
      'Converti immagini JPG in documenti PDF con opzioni avanzate (dimensione pagina, orientamento, margini e unione di piu immagini).',
    'Upload JPG Images': 'Carica immagini JPG',
    'Drag and drop or click to browse. Multiple files supported.':
      'Trascina e rilascia o fai clic per sfogliare. Sono supportati piu file.',
    'Multiple Images': 'Piu immagini',
    'Merge to PDF': 'Unisci in PDF',
    'Advanced Options': 'Opzioni avanzate',
    'Remove image': 'Rimuovi immagine',
    'Add More': 'Aggiungi',
    Images: 'Immagini',
    'PDF Settings': 'Impostazioni PDF',
    'Page Size': 'Dimensione pagina',
    Orientation: 'Orientamento',
    Portrait: 'Verticale',
    Landscape: 'Orizzontale',
    'Fit Mode': 'Modalita adattamento',
    Contain: 'Contieni',
    Cover: 'Copri',
    Fill: 'Riempi',
    'Merge Images': 'Unisci immagini',
    On: 'On',
    Off: 'Off',
    'Single PDF': 'PDF singolo',
    'First Image Only': 'Solo prima immagine',
    Margin: 'Margine',
    'Image Quality': 'Qualita immagine',
    'Converting to PDF...': 'Conversione in PDF...',
    'Convert to PDF': 'Converti in PDF',
    'Download PDF': 'Scarica PDF',
    Reset: 'Reimposta',
    'About JPG to PDF Converter': 'Informazioni sul convertitore JPG in PDF',
    'This tool converts JPG files into PDF with layout controls for page size, orientation, margins, fit mode, and quality.':
      'Questo strumento converte file JPG in PDF con controlli per dimensione pagina, orientamento, margini, adattamento e qualita.',
    Features: 'Funzionalita',
    'Multiple Image Merge': 'Unione di piu immagini',
    'Create one PDF from several image files.':
      'Crea un unico PDF da piu file immagine.',
    'Page Controls': 'Controlli pagina',
    'Pick A4, Letter, or Legal with portrait/landscape.':
      'Scegli A4, Letter o Legal con orientamento verticale/orizzontale.',
    'Fit and Margin Options': 'Opzioni di adattamento e margine',
    'Control how images fit on each PDF page.':
      'Controlla come le immagini si adattano a ogni pagina PDF.',
    'Quality Tuning': 'Regolazione qualita',
    'Adjust quality to balance file size and detail.':
      'Regola la qualita per bilanciare dimensione file e dettaglio.',
    'Client-side Processing': 'Elaborazione lato client',
    'Files stay on your device for private conversion.':
      'I file restano sul tuo dispositivo per una conversione privata.',
    'Free to Use': 'Gratis',
    'No account needed and no upload queue delays.':
      'Nessun account necessario e nessuna attesa di caricamento.',
    'Frequently Asked Questions': 'Domande frequenti',
    'Can I convert multiple JPG files into one PDF?':
      'Posso convertire piu file JPG in un unico PDF?',
    'Yes. Keep merge enabled and all selected images will be added as PDF pages.':
      'Si. Mantieni attiva l\'unione e tutte le immagini selezionate verranno aggiunte come pagine del PDF.',
    'Can I choose page size and orientation?':
      'Posso scegliere dimensione pagina e orientamento?',
    'Yes. Choose A4, Letter, or Legal plus portrait or landscape orientation.':
      'Si. Scegli A4, Letter o Legal oltre a orientamento verticale o orizzontale.',
    'Is conversion private?': 'La conversione e privata?',
    'Yes. Processing happens in your browser and files are not uploaded to servers.':
      'Si. L\'elaborazione avviene nel browser e i file non vengono caricati su server.',
    'Please select valid JPG files':
      'Seleziona file JPG validi',
    'Failed to read one or more images.':
      'Impossibile leggere una o piu immagini.',
    'Failed to convert images to PDF. Please try again.':
      'Impossibile convertire le immagini in PDF. Riprova.',
  },
};
