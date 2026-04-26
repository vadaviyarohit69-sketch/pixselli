import type { Locale } from '@/lib/i18n';

type TranslationDict = Record<string, string>;

export const JPG_TO_BMP_TEXT_BY_LOCALE: Partial<Record<Locale, TranslationDict>> = {
  pt: {
    Home: 'Inicio',
    'JPG to BMP Converter': 'Conversor JPG para BMP',
    'Convert JPG images to BMP format for legacy compatibility and bitmap workflows.':
      'Converta imagens JPG para BMP para compatibilidade com sistemas antigos e fluxos de bitmap.',
    'Upload JPG Image to Convert': 'Envie imagem JPG para converter',
    'Please select a JPG image file': 'Selecione um arquivo de imagem JPG',
    'About this tool': 'Sobre esta ferramenta',
    'Use this converter when BMP output is required by old software or specialized print and editing workflows.':
      'Use este conversor quando a saida BMP for exigida por software antigo ou fluxos especializados de impressao e edicao.',
    Features: 'Recursos',
    'Frequently Asked Questions': 'Perguntas frequentes',

    'Legacy Compatibility': 'Compatibilidade com sistemas antigos',
    'BMP works with many legacy tools and Windows workflows.':
      'BMP funciona com muitas ferramentas antigas e fluxos de trabalho do Windows.',
    'Uncompressed Output': 'Saida sem compresao',
    'Useful where raw bitmap format is required.':
      'Util quando o formato bitmap bruto e necessario.',
    'Quality Presets': 'Predefinicoes de qualidade',
    'Choose quality levels and size variants easily.':
      'Escolha niveis de qualidade e variantes de tamanho com facilidade.',
    'Bulk Variants ZIP': 'Variantes em ZIP',
    'Generate multiple outputs and download one ZIP.':
      'Gere varias saidas e baixe um unico ZIP.',
    'Private Processing': 'Processamento privado',
    'Everything runs locally in your browser.':
      'Tudo roda localmente no seu navegador.',
    'No Signup Needed': 'Sem cadastro',
    'Convert instantly without creating an account.':
      'Converta instantaneamente sem criar uma conta.',

    'Why is BMP file size larger?': 'Por que o arquivo BMP e maior?',
    'BMP is usually uncompressed, so file sizes can be much bigger than JPG or WebP.':
      'BMP geralmente nao tem compresao, entao o tamanho pode ser bem maior que JPG ou WebP.',
    'Why convert JPG to BMP?': 'Por que converter JPG para BMP?',
    'Some legacy systems require BMP format for compatibility and processing pipelines.':
      'Alguns sistemas antigos exigem BMP por compatibilidade e pipelines de processamento.',
    'Is conversion private?': 'A conversao e privada?',
    'Yes. Files are processed in your browser and not uploaded to servers.':
      'Sim. Os arquivos sao processados no seu navegador e nao sao enviados para servidores.',
  },

  fr: {
    Home: 'Accueil',
    'JPG to BMP Converter': 'Convertisseur JPG vers BMP',
    'Convert JPG images to BMP format for legacy compatibility and bitmap workflows.':
      'Convertissez des images JPG en BMP pour la compatibilite avec des outils anciens et des workflows bitmap.',
    'Upload JPG Image to Convert': 'Televersez une image JPG a convertir',
    'Please select a JPG image file': 'Veuillez selectionner un fichier image JPG',
    'About this tool': 'A propos de cet outil',
    'Use this converter when BMP output is required by old software or specialized print and editing workflows.':
      'Utilisez ce convertisseur lorsque la sortie BMP est requise par des logiciels anciens ou des workflows specialises d\'impression et d\'edition.',
    Features: 'Fonctionnalites',
    'Frequently Asked Questions': 'Questions frequentes',

    'Legacy Compatibility': 'Compatibilite avec les outils anciens',
    'BMP works with many legacy tools and Windows workflows.':
      'BMP fonctionne avec de nombreux outils anciens et workflows Windows.',
    'Uncompressed Output': 'Sortie non compressee',
    'Useful where raw bitmap format is required.':
      'Utile lorsque le format bitmap brut est requis.',
    'Quality Presets': 'Presets de qualite',
    'Choose quality levels and size variants easily.':
      'Choisissez facilement les niveaux de qualite et les variantes de taille.',
    'Bulk Variants ZIP': 'Variantes en ZIP',
    'Generate multiple outputs and download one ZIP.':
      'Generez plusieurs sorties et telechargez un seul ZIP.',
    'Private Processing': 'Traitement prive',
    'Everything runs locally in your browser.':
      'Tout s\'execute localement dans votre navigateur.',
    'No Signup Needed': 'Sans inscription',
    'Convert instantly without creating an account.':
      'Convertissez instantanement sans creer de compte.',

    'Why is BMP file size larger?': 'Pourquoi la taille d\'un BMP est-elle plus grande ?',
    'BMP is usually uncompressed, so file sizes can be much bigger than JPG or WebP.':
      'Le BMP est generalement non compresse, donc les fichiers peuvent etre bien plus gros que JPG ou WebP.',
    'Why convert JPG to BMP?': 'Pourquoi convertir JPG en BMP ?',
    'Some legacy systems require BMP format for compatibility and processing pipelines.':
      'Certains systemes anciens exigent le format BMP pour des raisons de compatibilite et de pipeline de traitement.',
    'Is conversion private?': 'La conversion est-elle privee ?',
    'Yes. Files are processed in your browser and not uploaded to servers.':
      'Oui. Les fichiers sont traites dans votre navigateur et ne sont pas televerses sur des serveurs.',
  },

  de: {
    Home: 'Startseite',
    'JPG to BMP Converter': 'JPG-zu-BMP-Konverter',
    'Convert JPG images to BMP format for legacy compatibility and bitmap workflows.':
      'Konvertiere JPG-Bilder in BMP fur Legacy-Kompatibilitat und Bitmap-Workflows.',
    'Upload JPG Image to Convert': 'JPG-Bild zum Konvertieren hochladen',
    'Please select a JPG image file': 'Bitte wahlen Sie eine JPG-Bilddatei aus',
    'About this tool': 'Uber dieses Tool',
    'Use this converter when BMP output is required by old software or specialized print and editing workflows.':
      'Nutze diesen Konverter, wenn BMP-Ausgabe von alter Software oder spezialisierten Druck- und Bearbeitungs-Workflows benotigt wird.',
    Features: 'Funktionen',
    'Frequently Asked Questions': 'Haufig gestellte Fragen',

    'Legacy Compatibility': 'Legacy-Kompatibilitat',
    'BMP works with many legacy tools and Windows workflows.':
      'BMP funktioniert mit vielen alteren Tools und Windows-Workflows.',
    'Uncompressed Output': 'Unkomprimierte Ausgabe',
    'Useful where raw bitmap format is required.':
      'Nutzlich, wenn ein rohes Bitmap-Format erforderlich ist.',
    'Quality Presets': 'Qualitats-Voreinstellungen',
    'Choose quality levels and size variants easily.':
      'Wahle Qualitatsstufen und Grossenvarianten ganz einfach.',
    'Bulk Variants ZIP': 'Varianten als ZIP',
    'Generate multiple outputs and download one ZIP.':
      'Erzeuge mehrere Ausgaben und lade ein ZIP herunter.',
    'Private Processing': 'Private Verarbeitung',
    'Everything runs locally in your browser.':
      'Alles lauft lokal in deinem Browser.',
    'No Signup Needed': 'Keine Anmeldung erforderlich',
    'Convert instantly without creating an account.':
      'Sofort konvertieren ohne Konto.',

    'Why is BMP file size larger?': 'Warum ist die BMP-Dateigrosse grosser?',
    'BMP is usually uncompressed, so file sizes can be much bigger than JPG or WebP.':
      'BMP ist meist unkomprimiert, daher konnen Dateien deutlich grosser als JPG oder WebP sein.',
    'Why convert JPG to BMP?': 'Warum JPG in BMP umwandeln?',
    'Some legacy systems require BMP format for compatibility and processing pipelines.':
      'Einige Legacy-Systeme benotigen BMP fur Kompatibilitat und Verarbeitungs-Pipelines.',
    'Is conversion private?': 'Ist die Konvertierung privat?',
    'Yes. Files are processed in your browser and not uploaded to servers.':
      'Ja. Dateien werden im Browser verarbeitet und nicht auf Server hochgeladen.',
  },

  it: {
    Home: 'Home',
    'JPG to BMP Converter': 'Convertitore JPG in BMP',
    'Convert JPG images to BMP format for legacy compatibility and bitmap workflows.':
      'Converti immagini JPG in BMP per compatibilita con sistemi legacy e flussi bitmap.',
    'Upload JPG Image to Convert': 'Carica immagine JPG da convertire',
    'Please select a JPG image file': 'Seleziona un file immagine JPG',
    'About this tool': 'Informazioni su questo strumento',
    'Use this converter when BMP output is required by old software or specialized print and editing workflows.':
      'Usa questo convertitore quando l\'output BMP e richiesto da software vecchi o flussi specializzati di stampa e modifica.',
    Features: 'Funzionalita',
    'Frequently Asked Questions': 'Domande frequenti',

    'Legacy Compatibility': 'Compatibilita legacy',
    'BMP works with many legacy tools and Windows workflows.':
      'BMP funziona con molti strumenti legacy e flussi di lavoro Windows.',
    'Uncompressed Output': 'Output non compresso',
    'Useful where raw bitmap format is required.':
      'Utile quando e richiesto un formato bitmap grezzo.',
    'Quality Presets': 'Preset di qualita',
    'Choose quality levels and size variants easily.':
      'Scegli facilmente livelli di qualita e varianti di dimensione.',
    'Bulk Variants ZIP': 'Varianti in ZIP',
    'Generate multiple outputs and download one ZIP.':
      'Genera piu output e scarica un unico ZIP.',
    'Private Processing': 'Elaborazione privata',
    'Everything runs locally in your browser.':
      'Tutto viene eseguito localmente nel browser.',
    'No Signup Needed': 'Nessuna registrazione',
    'Convert instantly without creating an account.':
      'Converti subito senza creare un account.',

    'Why is BMP file size larger?': 'Perche la dimensione di un BMP e maggiore?',
    'BMP is usually uncompressed, so file sizes can be much bigger than JPG or WebP.':
      'BMP di solito non e compresso, quindi i file possono essere molto piu grandi di JPG o WebP.',
    'Why convert JPG to BMP?': 'Perche convertire JPG in BMP?',
    'Some legacy systems require BMP format for compatibility and processing pipelines.':
      'Alcuni sistemi legacy richiedono BMP per compatibilita e pipeline di elaborazione.',
    'Is conversion private?': 'La conversione e privata?',
    'Yes. Files are processed in your browser and not uploaded to servers.':
      'Si. I file vengono elaborati nel browser e non vengono caricati sui server.',
  },
};
