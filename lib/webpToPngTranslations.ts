import type { Locale } from "@/lib/i18n";
import type { TranslationDict } from "@/lib/translateReactNode";

export const WEBP_TO_PNG_TEXT_BY_LOCALE: Partial<
  Record<Locale, TranslationDict>
> = {
  pt: {
    Home: "Inicio",
    "WebP to PNG Converter": "Conversor WebP para PNG",
    "Convert WebP images to PNG for compatibility and lossless output workflows.":
      "Converta imagens WebP para PNG para compatibilidade e fluxos de saida sem perda.",
    "Upload WebP Image to Convert": "Envie imagem WebP para converter",
    "Please select a WebP image file":
      "Por favor, selecione um arquivo de imagem WebP",

    "Privacy and security": "Privacidade e seguranca",
    "Secure by default: conversion happens locally in your browser.":
      "Seguro por padrao: a conversao acontece localmente no seu navegador.",
    "Your files are processed on your own device, not uploaded to a remote server.":
      "Seus arquivos sao processados no seu proprio dispositivo, sem upload para servidor remoto.",
    "You keep full control from upload to download, ideal for personal and business content.":
      "Voce mantem controle total do upload ao download, ideal para conteudo pessoal e empresarial.",

    "About this tool": "Sobre esta ferramenta",
    "This converter turns WebP images into PNG format while preserving quality and transparency support where applicable.":
      "Este conversor transforma imagens WebP em PNG preservando qualidade e suporte de transparencia quando aplicavel.",
    "It is useful when downstream tools, design workflows, or publishing systems need PNG as a standard format.":
      "E util quando ferramentas posteriores, fluxos de design ou sistemas de publicacao precisam de PNG como formato padrao.",

    "Why teams convert WebP to PNG": "Por que equipes convertem WebP para PNG",
    "WebP is great for delivery performance, but PNG can be more practical for editing, QA review, and cross-tool consistency.":
      "WebP e excelente para performance de entrega, mas PNG pode ser mais pratico para edicao, revisao de QA e consistencia entre ferramentas.",
    "When multiple contributors work across different software, PNG can reduce format friction in handoff stages.":
      "Quando varios colaboradores trabalham em softwares diferentes, PNG pode reduzir friccao de formato nas etapas de handoff.",

    Features: "Recursos",
    "Lossless PNG Output": "Saida PNG sem perda",
    "Export to PNG for broad compatibility and editing.":
      "Exporte para PNG para ampla compatibilidade e edicao.",
    "Transparency Handling": "Tratamento de transparencia",
    "PNG output supports alpha transparency.":
      "A saida PNG suporta transparencia alfa.",
    "Bulk Variants ZIP": "Variantes em ZIP",
    "Generate variant outputs and download together.":
      "Gere saidas em variantes e baixe tudo junto.",
    "Format Stability": "Estabilidade de formato",
    "PNG is a reliable format for design and editing workflows.":
      "PNG e um formato confiavel para fluxos de design e edicao.",
    "Private Processing": "Processamento privado",
    "Everything runs locally in browser.": "Tudo roda localmente no navegador.",
    "Free to Use": "Gratuito para usar",
    "No account required.": "Nao requer conta.",

    "Best use cases": "Melhores casos de uso",
    "Editing Pipelines": "Pipelines de edicao",
    "Convert WebP into PNG before advanced editing in design tools.":
      "Converta WebP em PNG antes de uma edicao avancada em ferramentas de design.",
    "Creative Assets": "Ativos criativos",
    "Use PNG for logos, overlays, and graphics where predictable output matters.":
      "Use PNG para logos, overlays e graficos quando saida previsivel importa.",
    "Long-Term Storage": "Armazenamento de longo prazo",
    "Store assets in PNG when you want broad software compatibility over time.":
      "Armazene ativos em PNG quando voce quer ampla compatibilidade de software ao longo do tempo.",

    "Workflow tips": "Dicas de fluxo",
    "Convert first, then edit: avoid repeated re-encoding across mixed formats.":
      "Converta primeiro e depois edite: evite reencodificacao repetida entre formatos mistos.",
    "Keep naming consistent (e.g., product-card-01.png) for cleaner team handoff.":
      "Mantenha nomes consistentes (ex.: product-card-01.png) para um handoff de equipe mais limpo.",
    "For large batches, download ZIP and review outputs in one pass.":
      "Para lotes grandes, baixe ZIP e revise as saidas em uma unica passada.",

    "Important:": "Importante:",
    "Converting WebP to PNG will not recover details that may have been lost in earlier compression. It preserves current visual data.":
      "Converter WebP para PNG nao recupera detalhes que podem ter sido perdidos em compressao anterior. Preserva os dados visuais atuais.",

    "Frequently Asked Questions": "Perguntas frequentes",
    "Why convert WebP to PNG?": "Por que converter WebP para PNG?",
    "PNG is often preferred for editing workflows and maximum software compatibility.":
      "PNG e frequentemente preferido em fluxos de edicao e para maxima compatibilidade de software.",
    "Will the output size increase?": "O tamanho de saida vai aumentar?",
    "It can increase depending on image content because PNG is lossless.":
      "Pode aumentar dependendo do conteudo da imagem, porque PNG e sem perda.",
    "Will conversion improve quality?": "A conversao melhora a qualidade?",
    "Converting to PNG does not restore details already lost in the source. It preserves current quality in a lossless container.":
      "Converter para PNG nao restaura detalhes ja perdidos na origem. Preserva a qualidade atual em um contenedor sem perda.",
    "Is PNG better for editing than WebP?":
      "PNG e melhor para edicao do que WebP?",
    "For many design workflows, yes. PNG is widely accepted and easier to manage across diverse editing tools.":
      "Para muitos fluxos de design, sim. PNG e amplamente aceito e mais facil de gerenciar em diferentes ferramentas de edicao.",
    "Is conversion private?": "A conversao e privada?",
    "Yes. Files are processed in your browser and are not uploaded to servers.":
      "Sim. Os arquivos sao processados no seu navegador e nao sao enviados para servidores.",
    "Can I convert multiple WebP files at once?":
      "Posso converter varios arquivos WebP de uma vez?",
    "Yes. Upload multiple WebP images and export PNG variants together in ZIP.":
      "Sim. Envie varias imagens WebP e exporte variantes PNG juntas em ZIP.",
  },

  fr: {
    Home: "Accueil",
    "WebP to PNG Converter": "Convertisseur WebP vers PNG",
    "Convert WebP images to PNG for compatibility and lossless output workflows.":
      "Convertissez des images WebP en PNG pour la compatibilite et des flux de sortie sans perte.",
    "Upload WebP Image to Convert": "Televersez une image WebP a convertir",
    "Please select a WebP image file":
      "Veuillez selectionner un fichier image WebP",

    "Privacy and security": "Confidentialite et securite",
    "Secure by default: conversion happens locally in your browser.":
      "Securise par defaut : la conversion se fait localement dans votre navigateur.",
    "Your files are processed on your own device, not uploaded to a remote server.":
      "Vos fichiers sont traites sur votre appareil, sans envoi vers un serveur distant.",
    "You keep full control from upload to download, ideal for personal and business content.":
      "Vous gardez un controle total de l envoi au telechargement, ideal pour les contenus personnels et professionnels.",

    "About this tool": "A propos de cet outil",
    "This converter turns WebP images into PNG format while preserving quality and transparency support where applicable.":
      "Ce convertisseur transforme les images WebP en PNG tout en preservant la qualite et la transparence lorsque c est applicable.",
    "It is useful when downstream tools, design workflows, or publishing systems need PNG as a standard format.":
      "Il est utile lorsque les outils en aval, les flux de design ou les systemes de publication ont besoin de PNG comme format standard.",

    "Why teams convert WebP to PNG":
      "Pourquoi les equipes convertissent WebP en PNG",
    "WebP is great for delivery performance, but PNG can be more practical for editing, QA review, and cross-tool consistency.":
      "WebP est excellent pour les performances de diffusion, mais PNG peut etre plus pratique pour l edition, la revue QA et la coherence entre outils.",
    "When multiple contributors work across different software, PNG can reduce format friction in handoff stages.":
      "Quand plusieurs contributeurs travaillent avec des logiciels differents, PNG peut reduire la friction de format lors des phases de passation.",

    Features: "Fonctionnalites",
    "Lossless PNG Output": "Sortie PNG sans perte",
    "Export to PNG for broad compatibility and editing.":
      "Exportez en PNG pour une large compatibilite et l edition.",
    "Transparency Handling": "Gestion de la transparence",
    "PNG output supports alpha transparency.":
      "La sortie PNG prend en charge la transparence alpha.",
    "Bulk Variants ZIP": "Variantes ZIP",
    "Generate variant outputs and download together.":
      "Generez des sorties variantes et telechargez-les ensemble.",
    "Format Stability": "Stabilite du format",
    "PNG is a reliable format for design and editing workflows.":
      "PNG est un format fiable pour les flux de design et d edition.",
    "Private Processing": "Traitement prive",
    "Everything runs locally in browser.":
      "Tout s execute localement dans le navigateur.",
    "Free to Use": "Gratuit",
    "No account required.": "Aucun compte requis.",

    "Best use cases": "Meilleurs cas d usage",
    "Editing Pipelines": "Pipelines d edition",
    "Convert WebP into PNG before advanced editing in design tools.":
      "Convertissez WebP en PNG avant une edition avancee dans des outils de design.",
    "Creative Assets": "Ressources creatives",
    "Use PNG for logos, overlays, and graphics where predictable output matters.":
      "Utilisez PNG pour les logos, overlays et graphiques lorsque la predictibilite de sortie est importante.",
    "Long-Term Storage": "Stockage long terme",
    "Store assets in PNG when you want broad software compatibility over time.":
      "Stockez les ressources en PNG si vous voulez une large compatibilite logicielle dans le temps.",

    "Workflow tips": "Conseils de workflow",
    "Convert first, then edit: avoid repeated re-encoding across mixed formats.":
      "Convertissez d abord, puis editez : evitez les reencodages repetes entre formats mixtes.",
    "Keep naming consistent (e.g., product-card-01.png) for cleaner team handoff.":
      "Gardez des noms coherents (ex. : product-card-01.png) pour une passation d equipe plus propre.",
    "For large batches, download ZIP and review outputs in one pass.":
      "Pour de gros lots, telechargez le ZIP et verifiez les sorties en une seule passe.",

    "Important:": "Important :",
    "Converting WebP to PNG will not recover details that may have been lost in earlier compression. It preserves current visual data.":
      "La conversion WebP vers PNG ne recupere pas les details perdus lors d une compression precedente. Elle preserve les donnees visuelles actuelles.",

    "Frequently Asked Questions": "Questions frequentes",
    "Why convert WebP to PNG?": "Pourquoi convertir WebP en PNG ?",
    "PNG is often preferred for editing workflows and maximum software compatibility.":
      "PNG est souvent prefere pour les flux d edition et une compatibilite logicielle maximale.",
    "Will the output size increase?":
      "La taille de sortie va-t-elle augmenter ?",
    "It can increase depending on image content because PNG is lossless.":
      "Elle peut augmenter selon le contenu de l image, car PNG est sans perte.",
    "Will conversion improve quality?":
      "La conversion ameliorera-t-elle la qualite ?",
    "Converting to PNG does not restore details already lost in the source. It preserves current quality in a lossless container.":
      "Convertir en PNG ne restaure pas les details deja perdus dans la source. Cela preserve la qualite actuelle dans un conteneur sans perte.",
    "Is PNG better for editing than WebP?":
      "PNG est-il meilleur que WebP pour l edition ?",
    "For many design workflows, yes. PNG is widely accepted and easier to manage across diverse editing tools.":
      "Pour de nombreux flux de design, oui. PNG est largement accepte et plus facile a gerer dans des outils d edition varies.",
    "Is conversion private?": "La conversion est-elle privee ?",
    "Yes. Files are processed in your browser and are not uploaded to servers.":
      "Oui. Les fichiers sont traites dans votre navigateur et ne sont pas envoyes vers des serveurs.",
    "Can I convert multiple WebP files at once?":
      "Puis-je convertir plusieurs fichiers WebP a la fois ?",
    "Yes. Upload multiple WebP images and export PNG variants together in ZIP.":
      "Oui. Televersez plusieurs images WebP et exportez des variantes PNG ensemble dans un ZIP.",
  },

  de: {
    Home: "Startseite",
    "WebP to PNG Converter": "WebP zu PNG Konverter",
    "Convert WebP images to PNG for compatibility and lossless output workflows.":
      "Konvertiere WebP-Bilder zu PNG fur Kompatibilitat und verlustfreie Ausgabe-Workflows.",
    "Upload WebP Image to Convert": "WebP-Bild zum Konvertieren hochladen",
    "Please select a WebP image file": "Bitte waehle eine WebP-Bilddatei aus",

    "Privacy and security": "Datenschutz und Sicherheit",
    "Secure by default: conversion happens locally in your browser.":
      "Standardmaessig sicher: Die Konvertierung erfolgt lokal in deinem Browser.",
    "Your files are processed on your own device, not uploaded to a remote server.":
      "Deine Dateien werden auf deinem Geraet verarbeitet und nicht auf einen entfernten Server hochgeladen.",
    "You keep full control from upload to download, ideal for personal and business content.":
      "Du behaltest volle Kontrolle vom Upload bis zum Download, ideal fur private und geschaeftliche Inhalte.",

    "About this tool": "Ueber dieses Tool",
    "This converter turns WebP images into PNG format while preserving quality and transparency support where applicable.":
      "Dieser Konverter wandelt WebP-Bilder in PNG um und erhaelt dabei Qualitaet sowie Transparenz-Unterstuetzung, wo anwendbar.",
    "It is useful when downstream tools, design workflows, or publishing systems need PNG as a standard format.":
      "Es ist hilfreich, wenn nachgelagerte Tools, Design-Workflows oder Publishing-Systeme PNG als Standardformat benoetigen.",

    "Why teams convert WebP to PNG": "Warum Teams WebP zu PNG konvertieren",
    "WebP is great for delivery performance, but PNG can be more practical for editing, QA review, and cross-tool consistency.":
      "WebP ist hervorragend fur Auslieferungs-Performance, aber PNG kann praktischer fur Bearbeitung, QA-Review und Konsistenz zwischen Tools sein.",
    "When multiple contributors work across different software, PNG can reduce format friction in handoff stages.":
      "Wenn mehrere Mitwirkende mit unterschiedlicher Software arbeiten, kann PNG die Formatreibung in Uebergabephasen reduzieren.",

    Features: "Funktionen",
    "Lossless PNG Output": "Verlustfreie PNG-Ausgabe",
    "Export to PNG for broad compatibility and editing.":
      "Exportiere zu PNG fur breite Kompatibilitat und Bearbeitung.",
    "Transparency Handling": "Transparenzbehandlung",
    "PNG output supports alpha transparency.":
      "PNG-Ausgabe unterstuetzt Alpha-Transparenz.",
    "Bulk Variants ZIP": "Varianten als ZIP",
    "Generate variant outputs and download together.":
      "Erzeuge Varianten-Ausgaben und lade sie zusammen herunter.",
    "Format Stability": "Formatstabilitaet",
    "PNG is a reliable format for design and editing workflows.":
      "PNG ist ein zuverlaessiges Format fur Design- und Bearbeitungs-Workflows.",
    "Private Processing": "Private Verarbeitung",
    "Everything runs locally in browser.": "Alles laeuft lokal im Browser.",
    "Free to Use": "Kostenlos nutzbar",
    "No account required.": "Kein Konto erforderlich.",

    "Best use cases": "Beste Einsatzfaelle",
    "Editing Pipelines": "Bearbeitungspipelines",
    "Convert WebP into PNG before advanced editing in design tools.":
      "Konvertiere WebP in PNG vor fortgeschrittener Bearbeitung in Design-Tools.",
    "Creative Assets": "Kreative Assets",
    "Use PNG for logos, overlays, and graphics where predictable output matters.":
      "Nutze PNG fur Logos, Overlays und Grafiken, bei denen vorhersehbare Ausgabe wichtig ist.",
    "Long-Term Storage": "Langzeitspeicherung",
    "Store assets in PNG when you want broad software compatibility over time.":
      "Speichere Assets in PNG, wenn du ueber die Zeit breite Software-Kompatibilitat willst.",

    "Workflow tips": "Workflow-Tipps",
    "Convert first, then edit: avoid repeated re-encoding across mixed formats.":
      "Erst konvertieren, dann bearbeiten: Vermeide wiederholtes Re-Encoding ueber gemischte Formate.",
    "Keep naming consistent (e.g., product-card-01.png) for cleaner team handoff.":
      "Halte Dateinamen konsistent (z. B. product-card-01.png) fur sauberere Team-Uebergaben.",
    "For large batches, download ZIP and review outputs in one pass.":
      "Bei grossen Batches lade ZIP herunter und pruefe Ausgaben in einem Durchgang.",

    "Important:": "Wichtig:",
    "Converting WebP to PNG will not recover details that may have been lost in earlier compression. It preserves current visual data.":
      "Die Konvertierung von WebP zu PNG stellt keine Details wieder her, die durch fruehere Kompression verloren gingen. Sie bewahrt die aktuellen visuellen Daten.",

    "Frequently Asked Questions": "Haeufige Fragen",
    "Why convert WebP to PNG?": "Warum WebP zu PNG konvertieren?",
    "PNG is often preferred for editing workflows and maximum software compatibility.":
      "PNG wird oft fur Bearbeitungs-Workflows und maximale Software-Kompatibilitaet bevorzugt.",
    "Will the output size increase?": "Wird die Ausgabegroesse steigen?",
    "It can increase depending on image content because PNG is lossless.":
      "Sie kann je nach Bildinhalt steigen, da PNG verlustfrei ist.",
    "Will conversion improve quality?":
      "Verbessert die Konvertierung die Qualitaet?",
    "Converting to PNG does not restore details already lost in the source. It preserves current quality in a lossless container.":
      "Die Konvertierung zu PNG stellt bereits verlorene Details nicht wieder her. Sie erhaelt die aktuelle Qualitaet in einem verlustfreien Container.",
    "Is PNG better for editing than WebP?":
      "Ist PNG besser zur Bearbeitung als WebP?",
    "For many design workflows, yes. PNG is widely accepted and easier to manage across diverse editing tools.":
      "Fuer viele Design-Workflows ja. PNG ist weit verbreitet akzeptiert und in verschiedenen Bearbeitungstools leichter zu handhaben.",
    "Is conversion private?": "Ist die Konvertierung privat?",
    "Yes. Files are processed in your browser and are not uploaded to servers.":
      "Ja. Dateien werden in deinem Browser verarbeitet und nicht auf Server hochgeladen.",
    "Can I convert multiple WebP files at once?":
      "Kann ich mehrere WebP-Dateien gleichzeitig konvertieren?",
    "Yes. Upload multiple WebP images and export PNG variants together in ZIP.":
      "Ja. Lade mehrere WebP-Bilder hoch und exportiere PNG-Varianten gemeinsam als ZIP.",
  },

  it: {
    Home: "Home",
    "WebP to PNG Converter": "Convertitore da WebP a PNG",
    "Convert WebP images to PNG for compatibility and lossless output workflows.":
      "Converti immagini WebP in PNG per compatibilita e workflow di output senza perdita.",
    "Upload WebP Image to Convert": "Carica immagine WebP da convertire",
    "Please select a WebP image file": "Seleziona un file immagine WebP",

    "Privacy and security": "Privacy e sicurezza",
    "Secure by default: conversion happens locally in your browser.":
      "Sicuro per impostazione predefinita: la conversione avviene localmente nel browser.",
    "Your files are processed on your own device, not uploaded to a remote server.":
      "I tuoi file vengono elaborati sul tuo dispositivo, non caricati su un server remoto.",
    "You keep full control from upload to download, ideal for personal and business content.":
      "Mantieni il pieno controllo dal caricamento al download, ideale per contenuti personali e aziendali.",

    "About this tool": "Informazioni su questo strumento",
    "This converter turns WebP images into PNG format while preserving quality and transparency support where applicable.":
      "Questo convertitore trasforma immagini WebP in formato PNG preservando qualita e supporto alla trasparenza dove applicabile.",
    "It is useful when downstream tools, design workflows, or publishing systems need PNG as a standard format.":
      "E utile quando strumenti a valle, workflow di design o sistemi di pubblicazione richiedono PNG come formato standard.",

    "Why teams convert WebP to PNG": "Perche i team convertono WebP in PNG",
    "WebP is great for delivery performance, but PNG can be more practical for editing, QA review, and cross-tool consistency.":
      "WebP e ottimo per le prestazioni di consegna, ma PNG puo essere piu pratico per modifica, revisione QA e coerenza tra strumenti.",
    "When multiple contributors work across different software, PNG can reduce format friction in handoff stages.":
      "Quando piu collaboratori lavorano con software diversi, PNG puo ridurre l attrito di formato nelle fasi di handoff.",

    Features: "Funzionalita",
    "Lossless PNG Output": "Output PNG senza perdita",
    "Export to PNG for broad compatibility and editing.":
      "Esporta in PNG per ampia compatibilita e modifica.",
    "Transparency Handling": "Gestione trasparenza",
    "PNG output supports alpha transparency.":
      "L output PNG supporta la trasparenza alfa.",
    "Bulk Variants ZIP": "Varianti in ZIP",
    "Generate variant outputs and download together.":
      "Genera output varianti e scarica tutto insieme.",
    "Format Stability": "Stabilita del formato",
    "PNG is a reliable format for design and editing workflows.":
      "PNG e un formato affidabile per workflow di design e modifica.",
    "Private Processing": "Elaborazione privata",
    "Everything runs locally in browser.":
      "Tutto funziona localmente nel browser.",
    "Free to Use": "Gratuito",
    "No account required.": "Nessun account richiesto.",

    "Best use cases": "Migliori casi d uso",
    "Editing Pipelines": "Pipeline di modifica",
    "Convert WebP into PNG before advanced editing in design tools.":
      "Converti WebP in PNG prima di una modifica avanzata negli strumenti di design.",
    "Creative Assets": "Asset creativi",
    "Use PNG for logos, overlays, and graphics where predictable output matters.":
      "Usa PNG per loghi, overlay e grafiche quando conta un output prevedibile.",
    "Long-Term Storage": "Archiviazione a lungo termine",
    "Store assets in PNG when you want broad software compatibility over time.":
      "Archivia gli asset in PNG quando vuoi ampia compatibilita software nel tempo.",

    "Workflow tips": "Suggerimenti workflow",
    "Convert first, then edit: avoid repeated re-encoding across mixed formats.":
      "Converti prima, poi modifica: evita ricodifiche ripetute tra formati misti.",
    "Keep naming consistent (e.g., product-card-01.png) for cleaner team handoff.":
      "Mantieni nomi coerenti (es. product-card-01.png) per un handoff tra team piu pulito.",
    "For large batches, download ZIP and review outputs in one pass.":
      "Per grandi lotti, scarica ZIP e rivedi gli output in un unica passata.",

    "Important:": "Importante:",
    "Converting WebP to PNG will not recover details that may have been lost in earlier compression. It preserves current visual data.":
      "La conversione da WebP a PNG non recupera dettagli che potrebbero essere andati persi in una compressione precedente. Preserva i dati visivi correnti.",

    "Frequently Asked Questions": "Domande frequenti",
    "Why convert WebP to PNG?": "Perche convertire WebP in PNG?",
    "PNG is often preferred for editing workflows and maximum software compatibility.":
      "PNG e spesso preferito per workflow di modifica e massima compatibilita software.",
    "Will the output size increase?": "La dimensione di output aumentera?",
    "It can increase depending on image content because PNG is lossless.":
      "Puo aumentare in base al contenuto dell immagine perche PNG e senza perdita.",
    "Will conversion improve quality?": "La conversione migliorera la qualita?",
    "Converting to PNG does not restore details already lost in the source. It preserves current quality in a lossless container.":
      "Convertire in PNG non ripristina dettagli gia persi nella sorgente. Preserva la qualita attuale in un contenitore senza perdita.",
    "Is PNG better for editing than WebP?":
      "PNG e migliore di WebP per la modifica?",
    "For many design workflows, yes. PNG is widely accepted and easier to manage across diverse editing tools.":
      "Per molti workflow di design, si. PNG e ampiamente accettato e piu facile da gestire tra diversi strumenti di modifica.",
    "Is conversion private?": "La conversione e privata?",
    "Yes. Files are processed in your browser and are not uploaded to servers.":
      "Si. I file vengono elaborati nel tuo browser e non caricati su server.",
    "Can I convert multiple WebP files at once?":
      "Posso convertire piu file WebP contemporaneamente?",
    "Yes. Upload multiple WebP images and export PNG variants together in ZIP.":
      "Si. Carica piu immagini WebP ed esporta varianti PNG insieme in ZIP.",
  },
};
