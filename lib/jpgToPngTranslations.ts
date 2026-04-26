import type { Locale } from "@/lib/i18n";
import type { TranslationDict } from "@/lib/translateReactNode";

export const JPG_TO_PNG_TEXT_BY_LOCALE: Partial<
  Record<Locale, TranslationDict>
> = {
  pt: {
    Home: "Inicio",
    "JPG to PNG Converter": "Conversor JPG para PNG",
    "Convert JPG images to PNG format quickly for cleaner graphics workflows.":
      "Converta imagens JPG para PNG rapidamente para fluxos graficos mais limpos.",
    "Upload JPG Image to Convert": "Envie imagem JPG para converter",
    "Please select a JPG image file":
      "Por favor, selecione um arquivo de imagem JPG",

    "Privacy and security": "Privacidade e seguranca",
    "Secure by default: conversion happens locally in your browser.":
      "Seguro por padrao: a conversao acontece localmente no seu navegador.",
    "Your files are processed on your own device, not uploaded to a remote server.":
      "Seus arquivos sao processados no seu proprio dispositivo, sem upload para servidor remoto.",
    "You keep control from upload to download, which is ideal for personal or business assets.":
      "Voce mantem o controle do upload ao download, ideal para ativos pessoais ou de negocio.",

    "About this tool": "Sobre esta ferramenta",
    "This converter exports JPG images as PNG while keeping conversion fully in-browser. It is useful for design files, screenshots, and workflow compatibility.":
      "Este conversor exporta imagens JPG como PNG mantendo a conversao totalmente no navegador. E util para arquivos de design, capturas de tela e compatibilidade de fluxo.",
    "If your next step is editing, compositing, or storing stable graphics assets, PNG can be a better destination than JPG for long-term workflow consistency.":
      "Se o proximo passo for edicao, composicao ou armazenamento de ativos graficos estaveis, PNG pode ser um destino melhor que JPG para consistencia de longo prazo.",

    "When this conversion adds value": "Quando esta conversao agrega valor",
    "JPG is efficient for photos, but PNG is often preferred in graphic workflows because it avoids additional lossy recompression during future edits.":
      "JPG e eficiente para fotos, mas PNG e frequentemente preferido em fluxos graficos porque evita recompressao adicional com perda em edicoes futuras.",
    "This means more predictable output quality when assets pass through multiple tools, teams, or export cycles.":
      "Isso significa qualidade de saida mais previsivel quando ativos passam por varias ferramentas, equipes ou ciclos de exportacao.",

    Features: "Recursos",
    "Lossless PNG Output": "Saida PNG sem perda",
    "Create PNG files with clean, stable quality.":
      "Crie arquivos PNG com qualidade limpa e estavel.",
    "Transparency Workflow": "Fluxo com transparencia",
    "PNG is ideal for assets that may later need transparent backgrounds or layered editing.":
      "PNG e ideal para ativos que depois podem precisar de fundo transparente ou edicao em camadas.",
    "Design-Friendly Format": "Formato amigavel para design",
    "Useful for UI elements, logos, icons, and graphics pipelines.":
      "Util para elementos de UI, logos, icones e pipelines graficos.",
    "Bulk Variants ZIP": "Variantes em ZIP",
    "Generate and download multiple output variants together.":
      "Gere e baixe multiplas variantes de saida juntas.",
    "Client-Side Processing": "Processamento no cliente",
    "Your images stay on your device.":
      "Suas imagens ficam no seu dispositivo.",
    "Always Free": "Sempre gratis",
    "No account or payment needed.": "Sem conta e sem pagamento.",

    "Best use cases": "Melhores casos de uso",
    "Creative Editing": "Edicao criativa",
    "PNG helps preserve clean edges for repeated edits in design workflows.":
      "PNG ajuda a preservar bordas limpas para edicoes repetidas em fluxos de design.",
    "Product & UI Assets": "Ativos de produto e UI",
    "Use PNG for buttons, cards, overlays, and visual assets where sharp detail matters.":
      "Use PNG para botoes, cards, sobreposicoes e ativos visuais onde detalhes nitidos importam.",
    "Future Transparency": "Transparencia futura",
    "If you plan to remove backgrounds later, PNG is often the safer destination format.":
      "Se voce planeja remover fundos depois, PNG costuma ser o formato de destino mais seguro.",

    "Important quality note": "Nota importante sobre qualidade",
    "Converting JPG to PNG does not restore details already lost in JPG compression. It preserves the current quality and gives you a more stable format for future editing.":
      "Converter JPG para PNG nao recupera detalhes ja perdidos na compressao JPG. Preserva a qualidade atual e oferece um formato mais estavel para edicoes futuras.",

    "Frequently Asked Questions": "Perguntas frequentes",
    "Why convert JPG to PNG?": "Por que converter JPG para PNG?",
    "PNG is useful when you need lossless quality, graphics workflows, or format consistency.":
      "PNG e util quando voce precisa de qualidade sem perda, fluxos graficos ou consistencia de formato.",
    "Will file size increase?": "O tamanho do arquivo pode aumentar?",
    "In many cases yes, because PNG uses lossless compression. The exact size depends on image content.":
      "Em muitos casos sim, porque PNG usa compressao sem perda. O tamanho exato depende do conteudo da imagem.",
    "Will converting JPG to PNG restore lost quality?":
      "Converter JPG para PNG recupera qualidade perdida?",
    "No. PNG preserves current quality moving forward, but it cannot recover details that were already lost in the original JPG compression.":
      "Nao. PNG preserva a qualidade atual daqui em diante, mas nao recupera detalhes ja perdidos na compressao JPG original.",
    "Is PNG better for logos and graphics?":
      "PNG e melhor para logos e graficos?",
    "Usually yes, especially for sharp edges, text overlays, and assets that may need additional editing.":
      "Normalmente sim, especialmente para bordas nitidas, sobreposicao de texto e ativos que podem precisar de edicao adicional.",
    "Is my image private?": "Minha imagem e privada?",
    "Yes. Conversion runs in your browser and files are not sent to servers.":
      "Sim. A conversao acontece no seu navegador e os arquivos nao sao enviados para servidores.",
    "Can I convert multiple JPG files at once?":
      "Posso converter varios arquivos JPG ao mesmo tempo?",
    "Yes. Upload multiple JPG files and export PNG variants together in ZIP when needed.":
      "Sim. Envie varios arquivos JPG e exporte variantes PNG juntas em ZIP quando necessario.",
  },

  fr: {
    Home: "Accueil",
    "JPG to PNG Converter": "Convertisseur JPG vers PNG",
    "Convert JPG images to PNG format quickly for cleaner graphics workflows.":
      "Convertissez rapidement des images JPG en PNG pour des flux graphiques plus propres.",
    "Upload JPG Image to Convert": "Televersez une image JPG a convertir",
    "Please select a JPG image file":
      "Veuillez selectionner un fichier image JPG",

    "Privacy and security": "Confidentialite et securite",
    "Secure by default: conversion happens locally in your browser.":
      "Securise par defaut : la conversion se fait localement dans votre navigateur.",
    "Your files are processed on your own device, not uploaded to a remote server.":
      "Vos fichiers sont traites sur votre propre appareil, sans televersement vers un serveur distant.",
    "You keep control from upload to download, which is ideal for personal or business assets.":
      "Vous gardez le controle de l upload au telechargement, ce qui est ideal pour les ressources personnelles ou professionnelles.",

    "About this tool": "A propos de cet outil",
    "This converter exports JPG images as PNG while keeping conversion fully in-browser. It is useful for design files, screenshots, and workflow compatibility.":
      "Ce convertisseur exporte les images JPG en PNG en gardant la conversion entierement dans le navigateur. Il est utile pour les fichiers de design, captures d ecran et compatibilite de workflow.",
    "If your next step is editing, compositing, or storing stable graphics assets, PNG can be a better destination than JPG for long-term workflow consistency.":
      "Si votre prochaine etape est l edition, le compositing ou le stockage d actifs graphiques stables, PNG peut etre une meilleure destination que JPG pour la coherence a long terme.",

    "When this conversion adds value":
      "Quand cette conversion apporte de la valeur",
    "JPG is efficient for photos, but PNG is often preferred in graphic workflows because it avoids additional lossy recompression during future edits.":
      "JPG est efficace pour les photos, mais PNG est souvent prefere dans les workflows graphiques car il evite une recompression destructive supplementaire lors des editions futures.",
    "This means more predictable output quality when assets pass through multiple tools, teams, or export cycles.":
      "Cela signifie une qualite de sortie plus previsible lorsque les ressources passent par plusieurs outils, equipes ou cycles d export.",

    Features: "Fonctionnalites",
    "Lossless PNG Output": "Sortie PNG sans perte",
    "Create PNG files with clean, stable quality.":
      "Creez des fichiers PNG avec une qualite propre et stable.",
    "Transparency Workflow": "Flux avec transparence",
    "PNG is ideal for assets that may later need transparent backgrounds or layered editing.":
      "PNG est ideal pour les ressources qui peuvent plus tard necessiter des fonds transparents ou une edition en couches.",
    "Design-Friendly Format": "Format adapte au design",
    "Useful for UI elements, logos, icons, and graphics pipelines.":
      "Utile pour les elements UI, logos, icones et pipelines graphiques.",
    "Bulk Variants ZIP": "Variantes ZIP",
    "Generate and download multiple output variants together.":
      "Generez et telechargez plusieurs variantes de sortie ensemble.",
    "Client-Side Processing": "Traitement cote client",
    "Your images stay on your device.":
      "Vos images restent sur votre appareil.",
    "Always Free": "Toujours gratuit",
    "No account or payment needed.": "Aucun compte ni paiement necessaire.",

    "Best use cases": "Meilleurs cas d usage",
    "Creative Editing": "Edition creative",
    "PNG helps preserve clean edges for repeated edits in design workflows.":
      "PNG aide a preserver des contours nets pour des editions repetees dans les workflows de design.",
    "Product & UI Assets": "Ressources produit et UI",
    "Use PNG for buttons, cards, overlays, and visual assets where sharp detail matters.":
      "Utilisez PNG pour les boutons, cartes, superpositions et ressources visuelles ou les details nets sont importants.",
    "Future Transparency": "Transparence future",
    "If you plan to remove backgrounds later, PNG is often the safer destination format.":
      "Si vous prevoyez de supprimer les fonds plus tard, PNG est souvent le format de destination le plus sur.",

    "Important quality note": "Note importante sur la qualite",
    "Converting JPG to PNG does not restore details already lost in JPG compression. It preserves the current quality and gives you a more stable format for future editing.":
      "Convertir JPG en PNG ne restaure pas les details deja perdus dans la compression JPG. Cela preserve la qualite actuelle et fournit un format plus stable pour l edition future.",

    "Frequently Asked Questions": "Questions frequentes",
    "Why convert JPG to PNG?": "Pourquoi convertir JPG en PNG ?",
    "PNG is useful when you need lossless quality, graphics workflows, or format consistency.":
      "PNG est utile lorsque vous avez besoin de qualite sans perte, de workflows graphiques ou de coherence de format.",
    "Will file size increase?": "La taille du fichier peut-elle augmenter ?",
    "In many cases yes, because PNG uses lossless compression. The exact size depends on image content.":
      "Dans de nombreux cas oui, car PNG utilise une compression sans perte. La taille exacte depend du contenu de l image.",
    "Will converting JPG to PNG restore lost quality?":
      "Convertir JPG en PNG restaure-t-il la qualite perdue ?",
    "No. PNG preserves current quality moving forward, but it cannot recover details that were already lost in the original JPG compression.":
      "Non. PNG preserve la qualite actuelle pour la suite, mais ne peut pas recuperer les details deja perdus dans la compression JPG d origine.",
    "Is PNG better for logos and graphics?":
      "PNG est-il meilleur pour les logos et graphiques ?",
    "Usually yes, especially for sharp edges, text overlays, and assets that may need additional editing.":
      "Generalement oui, surtout pour les contours nets, superpositions de texte et ressources qui peuvent necessiter une edition supplementaire.",
    "Is my image private?": "Mon image est-elle privee ?",
    "Yes. Conversion runs in your browser and files are not sent to servers.":
      "Oui. La conversion se fait dans votre navigateur et les fichiers ne sont pas envoyes vers des serveurs.",
    "Can I convert multiple JPG files at once?":
      "Puis-je convertir plusieurs fichiers JPG a la fois ?",
    "Yes. Upload multiple JPG files and export PNG variants together in ZIP when needed.":
      "Oui. Televersez plusieurs fichiers JPG et exportez des variantes PNG ensemble en ZIP si necessaire.",
  },

  de: {
    Home: "Startseite",
    "JPG to PNG Converter": "JPG zu PNG Konverter",
    "Convert JPG images to PNG format quickly for cleaner graphics workflows.":
      "Konvertiere JPG-Bilder schnell in PNG fur sauberere Grafik-Workflows.",
    "Upload JPG Image to Convert": "JPG-Bild zum Konvertieren hochladen",
    "Please select a JPG image file": "Bitte wahle eine JPG-Bilddatei aus",

    "Privacy and security": "Datenschutz und Sicherheit",
    "Secure by default: conversion happens locally in your browser.":
      "Standardmassig sicher: Die Konvertierung erfolgt lokal in deinem Browser.",
    "Your files are processed on your own device, not uploaded to a remote server.":
      "Deine Dateien werden auf deinem eigenen Gerat verarbeitet, nicht auf einen entfernten Server hochgeladen.",
    "You keep control from upload to download, which is ideal for personal or business assets.":
      "Du behaltst die Kontrolle vom Upload bis zum Download, ideal fur private oder geschafliche Assets.",

    "About this tool": "Uber dieses Tool",
    "This converter exports JPG images as PNG while keeping conversion fully in-browser. It is useful for design files, screenshots, and workflow compatibility.":
      "Dieser Konverter exportiert JPG-Bilder als PNG, wahrend die Konvertierung vollstandig im Browser bleibt. Das ist nutzlich fur Design-Dateien, Screenshots und Workflow-Kompatibilitat.",
    "If your next step is editing, compositing, or storing stable graphics assets, PNG can be a better destination than JPG for long-term workflow consistency.":
      "Wenn dein nachster Schritt Bearbeitung, Compositing oder das Speichern stabiler Grafik-Assets ist, kann PNG langfristig die bessere Wahl als JPG sein.",

    "When this conversion adds value":
      "Wann diese Konvertierung Mehrwert bringt",
    "JPG is efficient for photos, but PNG is often preferred in graphic workflows because it avoids additional lossy recompression during future edits.":
      "JPG ist effizient fur Fotos, aber PNG wird in Grafik-Workflows oft bevorzugt, da es zusatzliche verlustbehaftete Neukomprimierung bei spateren Bearbeitungen vermeidet.",
    "This means more predictable output quality when assets pass through multiple tools, teams, or export cycles.":
      "Das bedeutet vorhersagbarere Ausgabequalitat, wenn Assets durch mehrere Tools, Teams oder Exportzyklen gehen.",

    Features: "Funktionen",
    "Lossless PNG Output": "Verlustfreie PNG-Ausgabe",
    "Create PNG files with clean, stable quality.":
      "Erstelle PNG-Dateien mit sauberer, stabiler Qualitat.",
    "Transparency Workflow": "Workflow mit Transparenz",
    "PNG is ideal for assets that may later need transparent backgrounds or layered editing.":
      "PNG ist ideal fur Assets, die spater transparente Hintergrunde oder Bearbeitung in Ebenen brauchen konnen.",
    "Design-Friendly Format": "Designfreundliches Format",
    "Useful for UI elements, logos, icons, and graphics pipelines.":
      "Nutzlich fur UI-Elemente, Logos, Icons und Grafik-Pipelines.",
    "Bulk Variants ZIP": "Mehrere Varianten als ZIP",
    "Generate and download multiple output variants together.":
      "Erzeuge und lade mehrere Ausgabevarianten zusammen herunter.",
    "Client-Side Processing": "Client-seitige Verarbeitung",
    "Your images stay on your device.":
      "Deine Bilder bleiben auf deinem Gerat.",
    "Always Free": "Immer kostenlos",
    "No account or payment needed.":
      "Kein Konto und keine Zahlung erforderlich.",

    "Best use cases": "Beste Einsatzfalle",
    "Creative Editing": "Kreative Bearbeitung",
    "PNG helps preserve clean edges for repeated edits in design workflows.":
      "PNG hilft, saubere Kanten bei wiederholten Bearbeitungen in Design-Workflows zu erhalten.",
    "Product & UI Assets": "Produkt- und UI-Assets",
    "Use PNG for buttons, cards, overlays, and visual assets where sharp detail matters.":
      "Nutze PNG fur Buttons, Karten, Overlays und visuelle Assets, bei denen scharfe Details wichtig sind.",
    "Future Transparency": "Zukunftige Transparenz",
    "If you plan to remove backgrounds later, PNG is often the safer destination format.":
      "Wenn du Hintergrunde spater entfernen willst, ist PNG oft das sicherere Zielformat.",

    "Important quality note": "Wichtiger Qualitatshinweis",
    "Converting JPG to PNG does not restore details already lost in JPG compression. It preserves the current quality and gives you a more stable format for future editing.":
      "Die Konvertierung von JPG zu PNG stellt bereits verlorene Details nicht wieder her. Sie bewahrt die aktuelle Qualitat und gibt dir ein stabileres Format fur zukunftige Bearbeitungen.",

    "Frequently Asked Questions": "Haufige Fragen",
    "Why convert JPG to PNG?": "Warum JPG in PNG konvertieren?",
    "PNG is useful when you need lossless quality, graphics workflows, or format consistency.":
      "PNG ist nutzlich, wenn du verlustfreie Qualitat, Grafik-Workflows oder Formatkonsistenz brauchst.",
    "Will file size increase?": "Kann die Dateigrosse steigen?",
    "In many cases yes, because PNG uses lossless compression. The exact size depends on image content.":
      "In vielen Fallen ja, weil PNG verlustfreie Kompression nutzt. Die genaue Grosse hangt vom Bildinhalt ab.",
    "Will converting JPG to PNG restore lost quality?":
      "Stellt die Konvertierung von JPG zu PNG verlorene Qualitat wieder her?",
    "No. PNG preserves current quality moving forward, but it cannot recover details that were already lost in the original JPG compression.":
      "Nein. PNG bewahrt die aktuelle Qualitat fur die Zukunft, kann aber keine Details zuruckholen, die in der ursprunglichen JPG-Kompression bereits verloren gingen.",
    "Is PNG better for logos and graphics?":
      "Ist PNG besser fur Logos und Grafiken?",
    "Usually yes, especially for sharp edges, text overlays, and assets that may need additional editing.":
      "Meist ja, besonders bei scharfen Kanten, Text-Overlays und Assets, die zusatzliche Bearbeitung brauchen konnen.",
    "Is my image private?": "Ist mein Bild privat?",
    "Yes. Conversion runs in your browser and files are not sent to servers.":
      "Ja. Die Konvertierung lauft in deinem Browser und Dateien werden nicht an Server gesendet.",
    "Can I convert multiple JPG files at once?":
      "Kann ich mehrere JPG-Dateien gleichzeitig konvertieren?",
    "Yes. Upload multiple JPG files and export PNG variants together in ZIP when needed.":
      "Ja. Lade mehrere JPG-Dateien hoch und exportiere PNG-Varianten bei Bedarf zusammen als ZIP.",
  },

  it: {
    Home: "Home",
    "JPG to PNG Converter": "Convertitore JPG in PNG",
    "Convert JPG images to PNG format quickly for cleaner graphics workflows.":
      "Converti rapidamente immagini JPG in PNG per flussi grafici piu puliti.",
    "Upload JPG Image to Convert": "Carica immagine JPG da convertire",
    "Please select a JPG image file": "Seleziona un file immagine JPG",

    "Privacy and security": "Privacy e sicurezza",
    "Secure by default: conversion happens locally in your browser.":
      "Sicuro per impostazione predefinita: la conversione avviene localmente nel tuo browser.",
    "Your files are processed on your own device, not uploaded to a remote server.":
      "I tuoi file vengono elaborati sul tuo dispositivo, non caricati su un server remoto.",
    "You keep control from upload to download, which is ideal for personal or business assets.":
      "Mantieni il controllo dall upload al download, ideale per risorse personali o aziendali.",

    "About this tool": "Informazioni su questo strumento",
    "This converter exports JPG images as PNG while keeping conversion fully in-browser. It is useful for design files, screenshots, and workflow compatibility.":
      "Questo convertitore esporta immagini JPG in PNG mantenendo la conversione interamente nel browser. E utile per file di design, screenshot e compatibilita di workflow.",
    "If your next step is editing, compositing, or storing stable graphics assets, PNG can be a better destination than JPG for long-term workflow consistency.":
      "Se il prossimo passo e modificare, comporre o archiviare risorse grafiche stabili, PNG puo essere una destinazione migliore di JPG per la coerenza del workflow nel lungo periodo.",

    "When this conversion adds value":
      "Quando questa conversione aggiunge valore",
    "JPG is efficient for photos, but PNG is often preferred in graphic workflows because it avoids additional lossy recompression during future edits.":
      "JPG e efficiente per le foto, ma PNG e spesso preferito nei flussi grafici perche evita ulteriore ricompressione con perdita durante modifiche future.",
    "This means more predictable output quality when assets pass through multiple tools, teams, or export cycles.":
      "Questo significa una qualita di output piu prevedibile quando le risorse passano tra piu strumenti, team o cicli di esportazione.",

    Features: "Funzionalita",
    "Lossless PNG Output": "Output PNG senza perdita",
    "Create PNG files with clean, stable quality.":
      "Crea file PNG con qualita pulita e stabile.",
    "Transparency Workflow": "Flusso con trasparenza",
    "PNG is ideal for assets that may later need transparent backgrounds or layered editing.":
      "PNG e ideale per risorse che in seguito potrebbero richiedere sfondi trasparenti o modifica a livelli.",
    "Design-Friendly Format": "Formato adatto al design",
    "Useful for UI elements, logos, icons, and graphics pipelines.":
      "Utile per elementi UI, loghi, icone e pipeline grafiche.",
    "Bulk Variants ZIP": "Varianti multiple ZIP",
    "Generate and download multiple output variants together.":
      "Genera e scarica insieme varianti multiple di output.",
    "Client-Side Processing": "Elaborazione lato client",
    "Your images stay on your device.":
      "Le tue immagini restano sul tuo dispositivo.",
    "Always Free": "Sempre gratis",
    "No account or payment needed.": "Nessun account o pagamento richiesto.",

    "Best use cases": "Migliori casi d uso",
    "Creative Editing": "Modifica creativa",
    "PNG helps preserve clean edges for repeated edits in design workflows.":
      "PNG aiuta a preservare bordi puliti per modifiche ripetute nei flussi di design.",
    "Product & UI Assets": "Risorse prodotto e UI",
    "Use PNG for buttons, cards, overlays, and visual assets where sharp detail matters.":
      "Usa PNG per pulsanti, card, overlay e risorse visive dove i dettagli nitidi sono importanti.",
    "Future Transparency": "Trasparenza futura",
    "If you plan to remove backgrounds later, PNG is often the safer destination format.":
      "Se prevedi di rimuovere sfondi in seguito, PNG e spesso il formato di destinazione piu sicuro.",

    "Important quality note": "Nota importante sulla qualita",
    "Converting JPG to PNG does not restore details already lost in JPG compression. It preserves the current quality and gives you a more stable format for future editing.":
      "Convertire JPG in PNG non ripristina i dettagli gia persi nella compressione JPG. Preserva la qualita attuale e offre un formato piu stabile per modifiche future.",

    "Frequently Asked Questions": "Domande frequenti",
    "Why convert JPG to PNG?": "Perche convertire JPG in PNG?",
    "PNG is useful when you need lossless quality, graphics workflows, or format consistency.":
      "PNG e utile quando ti serve qualita senza perdita, flussi grafici o coerenza di formato.",
    "Will file size increase?": "La dimensione del file puo aumentare?",
    "In many cases yes, because PNG uses lossless compression. The exact size depends on image content.":
      "In molti casi si, perche PNG usa compressione senza perdita. La dimensione esatta dipende dal contenuto dell immagine.",
    "Will converting JPG to PNG restore lost quality?":
      "Convertire JPG in PNG ripristina qualita persa?",
    "No. PNG preserves current quality moving forward, but it cannot recover details that were already lost in the original JPG compression.":
      "No. PNG preserva la qualita attuale in avanti, ma non puo recuperare dettagli gia persi nella compressione JPG originale.",
    "Is PNG better for logos and graphics?":
      "PNG e migliore per loghi e grafiche?",
    "Usually yes, especially for sharp edges, text overlays, and assets that may need additional editing.":
      "Di solito si, soprattutto per bordi nitidi, sovrapposizioni di testo e risorse che possono richiedere ulteriore modifica.",
    "Is my image private?": "La mia immagine e privata?",
    "Yes. Conversion runs in your browser and files are not sent to servers.":
      "Si. La conversione avviene nel browser e i file non vengono inviati a server.",
    "Can I convert multiple JPG files at once?":
      "Posso convertire piu file JPG contemporaneamente?",
    "Yes. Upload multiple JPG files and export PNG variants together in ZIP when needed.":
      "Si. Carica piu file JPG ed esporta varianti PNG insieme in ZIP quando necessario.",
  },
};
