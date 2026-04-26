import type { Locale } from '@/lib/i18n';

type TranslationDict = Record<string, string>;

export const JPG_TO_GIF_TEXT_BY_LOCALE: Partial<Record<Locale, TranslationDict>> = {
  pt: {
    Home: 'Inicio',
    'JPG to GIF Converter': 'Conversor JPG para GIF',
    'Convert JPG images to GIF format for simple compatibility use cases.':
      'Converta imagens JPG para GIF para casos de uso de compatibilidade simples.',
    'Upload JPG Image to Convert': 'Envie imagem JPG para converter',
    'Please select a JPG image file': 'Selecione um arquivo de imagem JPG',
    'About this tool': 'Sobre esta ferramenta',
    'Use this converter when your workflow needs GIF output from JPG sources for simple graphics pipelines.':
      'Use este conversor quando seu fluxo de trabalho precisar de saida GIF a partir de fontes JPG para pipelines graficos simples.',
    Features: 'Recursos',
    'Frequently Asked Questions': 'Perguntas frequentes',

    'GIF Output': 'Saida GIF',
    'Convert JPG images into GIF format for basic graphic workflows.':
      'Converta imagens JPG para o formato GIF para fluxos de trabalho graficos basicos.',
    'Simple Compatibility': 'Compatibilidade simples',
    'GIF works in many legacy systems and messaging tools.':
      'GIF funciona em muitos sistemas antigos e ferramentas de mensagens.',
    'Quality Presets': 'Predefinicoes de qualidade',
    'Pick quality levels to balance file size and look.':
      'Escolha niveis de qualidade para equilibrar tamanho do arquivo e aparencia.',
    'Bulk Variants ZIP': 'Variantes em ZIP',
    'Create multiple outputs and download one ZIP file.':
      'Crie varias saidas e baixe um unico arquivo ZIP.',
    'Private Processing': 'Processamento privado',
    'Images are processed locally in your browser.':
      'As imagens sao processadas localmente no seu navegador.',
    'No Signup Needed': 'Sem cadastro',
    'Convert instantly without account creation.': 'Converta instantaneamente sem criar conta.',

    'Why can GIF quality look lower?': 'Por que a qualidade do GIF pode parecer menor?',
    'GIF supports up to 256 colors, so photo-like images can lose detail compared to JPG/WebP.':
      'GIF suporta ate 256 cores, entao imagens tipo foto podem perder detalhes em comparacao com JPG/WebP.',
    'Can I make animated GIF from JPG here?': 'Posso criar um GIF animado a partir de JPG aqui?',
    'This tool focuses on image conversion outputs, not multi-frame animation timelines.':
      'Esta ferramenta foca em conversao de imagem, nao em linhas do tempo de animacao com varios quadros.',
    'Is conversion private?': 'A conversao e privada?',
    'Yes. Files are handled in your browser and are not uploaded to servers.':
      'Sim. Os arquivos sao processados no seu navegador e nao sao enviados para servidores.',
  },

  fr: {
    Home: 'Accueil',
    'JPG to GIF Converter': 'Convertisseur JPG vers GIF',
    'Convert JPG images to GIF format for simple compatibility use cases.':
      'Convertissez des images JPG en GIF pour des cas d\'usage de compatibilite simple.',
    'Upload JPG Image to Convert': 'Televersez une image JPG a convertir',
    'Please select a JPG image file': 'Veuillez selectionner un fichier image JPG',
    'About this tool': 'A propos de cet outil',
    'Use this converter when your workflow needs GIF output from JPG sources for simple graphics pipelines.':
      'Utilisez ce convertisseur lorsque votre flux de travail a besoin d\'une sortie GIF a partir de sources JPG pour des pipelines graphiques simples.',
    Features: 'Fonctionnalites',
    'Frequently Asked Questions': 'Questions frequentes',

    'GIF Output': 'Sortie GIF',
    'Convert JPG images into GIF format for basic graphic workflows.':
      'Convertissez des images JPG en GIF pour des flux de travail graphiques basiques.',
    'Simple Compatibility': 'Compatibilite simple',
    'GIF works in many legacy systems and messaging tools.':
      'Le GIF fonctionne dans de nombreux systemes anciens et outils de messagerie.',
    'Quality Presets': 'Presets de qualite',
    'Pick quality levels to balance file size and look.':
      'Choisissez des niveaux de qualite pour equilibrer la taille et le rendu.',
    'Bulk Variants ZIP': 'Variantes en ZIP',
    'Create multiple outputs and download one ZIP file.':
      'Creez plusieurs sorties et telechargez un seul fichier ZIP.',
    'Private Processing': 'Traitement prive',
    'Images are processed locally in your browser.':
      'Les images sont traitees localement dans votre navigateur.',
    'No Signup Needed': 'Sans inscription',
    'Convert instantly without account creation.': 'Convertissez instantanement sans creer de compte.',

    'Why can GIF quality look lower?': 'Pourquoi la qualite du GIF peut-elle sembler plus faible ?',
    'GIF supports up to 256 colors, so photo-like images can lose detail compared to JPG/WebP.':
      'Le GIF prend en charge jusqu\'a 256 couleurs, donc les images type photo peuvent perdre des details par rapport a JPG/WebP.',
    'Can I make animated GIF from JPG here?': 'Puis-je creer un GIF anime a partir de JPG ici ?',
    'This tool focuses on image conversion outputs, not multi-frame animation timelines.':
      'Cet outil se concentre sur la conversion d\'images, pas sur des timelines d\'animation multi-images.',
    'Is conversion private?': 'La conversion est-elle privee ?',
    'Yes. Files are handled in your browser and are not uploaded to servers.':
      'Oui. Les fichiers sont traites dans votre navigateur et ne sont pas televerses sur des serveurs.',
  },

  de: {
    Home: 'Startseite',
    'JPG to GIF Converter': 'JPG-zu-GIF-Konverter',
    'Convert JPG images to GIF format for simple compatibility use cases.':
      'Konvertiere JPG-Bilder in GIF fur einfache Kompatibilitats-Anwendungsfalle.',
    'Upload JPG Image to Convert': 'JPG-Bild zum Konvertieren hochladen',
    'Please select a JPG image file': 'Bitte wahlen Sie eine JPG-Bilddatei aus',
    'About this tool': 'Uber dieses Tool',
    'Use this converter when your workflow needs GIF output from JPG sources for simple graphics pipelines.':
      'Nutze diesen Konverter, wenn dein Workflow GIF-Ausgabe aus JPG-Quellen fur einfache Grafik-Pipelines benotigt.',
    Features: 'Funktionen',
    'Frequently Asked Questions': 'Haufig gestellte Fragen',

    'GIF Output': 'GIF-Ausgabe',
    'Convert JPG images into GIF format for basic graphic workflows.':
      'Konvertiere JPG-Bilder in GIF fur grundlegende Grafik-Workflows.',
    'Simple Compatibility': 'Einfache Kompatibilitat',
    'GIF works in many legacy systems and messaging tools.':
      'GIF funktioniert in vielen alteren Systemen und Messaging-Tools.',
    'Quality Presets': 'Qualitats-Voreinstellungen',
    'Pick quality levels to balance file size and look.':
      'Wahle Qualitatsstufen, um Dateigrose und Aussehen auszubalancieren.',
    'Bulk Variants ZIP': 'Varianten als ZIP',
    'Create multiple outputs and download one ZIP file.':
      'Erstelle mehrere Ausgaben und lade eine ZIP-Datei herunter.',
    'Private Processing': 'Private Verarbeitung',
    'Images are processed locally in your browser.':
      'Bilder werden lokal im Browser verarbeitet.',
    'No Signup Needed': 'Keine Anmeldung erforderlich',
    'Convert instantly without account creation.': 'Sofort konvertieren ohne Konto.',

    'Why can GIF quality look lower?': 'Warum kann die GIF-Qualitat schlechter wirken?',
    'GIF supports up to 256 colors, so photo-like images can lose detail compared to JPG/WebP.':
      'GIF unterstutzt bis zu 256 Farben, daher konnen fotoahnliche Bilder im Vergleich zu JPG/WebP Details verlieren.',
    'Can I make animated GIF from JPG here?': 'Kann ich hier aus JPG ein animiertes GIF erstellen?',
    'This tool focuses on image conversion outputs, not multi-frame animation timelines.':
      'Dieses Tool konzentriert sich auf Bildkonvertierung, nicht auf Animationen mit mehreren Frames.',
    'Is conversion private?': 'Ist die Konvertierung privat?',
    'Yes. Files are handled in your browser and are not uploaded to servers.':
      'Ja. Dateien werden im Browser verarbeitet und nicht auf Server hochgeladen.',
  },

  it: {
    Home: 'Home',
    'JPG to GIF Converter': 'Convertitore JPG in GIF',
    'Convert JPG images to GIF format for simple compatibility use cases.':
      'Converti immagini JPG in GIF per casi d\'uso di compatibilita semplice.',
    'Upload JPG Image to Convert': 'Carica immagine JPG da convertire',
    'Please select a JPG image file': 'Seleziona un file immagine JPG',
    'About this tool': 'Informazioni su questo strumento',
    'Use this converter when your workflow needs GIF output from JPG sources for simple graphics pipelines.':
      'Usa questo convertitore quando il tuo flusso di lavoro richiede output GIF da sorgenti JPG per pipeline grafiche semplici.',
    Features: 'Funzionalita',
    'Frequently Asked Questions': 'Domande frequenti',

    'GIF Output': 'Output GIF',
    'Convert JPG images into GIF format for basic graphic workflows.':
      'Converti immagini JPG in GIF per flussi di lavoro grafici di base.',
    'Simple Compatibility': 'Compatibilita semplice',
    'GIF works in many legacy systems and messaging tools.':
      'GIF funziona in molti sistemi legacy e strumenti di messaggistica.',
    'Quality Presets': 'Preset di qualita',
    'Pick quality levels to balance file size and look.':
      'Scegli livelli di qualita per bilanciare dimensione e resa.',
    'Bulk Variants ZIP': 'Varianti in ZIP',
    'Create multiple outputs and download one ZIP file.':
      'Crea piu output e scarica un unico file ZIP.',
    'Private Processing': 'Elaborazione privata',
    'Images are processed locally in your browser.':
      'Le immagini vengono elaborate localmente nel browser.',
    'No Signup Needed': 'Nessuna registrazione',
    'Convert instantly without account creation.': 'Converti subito senza creare un account.',

    'Why can GIF quality look lower?': 'Perche la qualita GIF puo sembrare piu bassa?',
    'GIF supports up to 256 colors, so photo-like images can lose detail compared to JPG/WebP.':
      'GIF supporta fino a 256 colori, quindi le foto possono perdere dettagli rispetto a JPG/WebP.',
    'Can I make animated GIF from JPG here?': 'Posso creare un GIF animato da JPG qui?',
    'This tool focuses on image conversion outputs, not multi-frame animation timelines.':
      'Questo strumento si concentra sulla conversione di immagini, non su timeline di animazione multi-frame.',
    'Is conversion private?': 'La conversione e privata?',
    'Yes. Files are handled in your browser and are not uploaded to servers.':
      'Si. I file vengono gestiti nel browser e non vengono caricati sui server.',
  },
};
