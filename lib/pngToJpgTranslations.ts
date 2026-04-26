import type { Locale } from "@/lib/i18n";
import type { TranslationDict } from "@/lib/translateReactNode";

export const PNG_TO_JPG_TEXT_BY_LOCALE: Partial<
  Record<Locale, TranslationDict>
> = {
  pt: {
    Home: "Inicio",
    "PNG to JPG Converter": "Conversor PNG para JPG",
    "Convert PNG images to JPG format for better compatibility and smaller file sizes.":
      "Converta imagens PNG para JPG para melhor compatibilidade e menor tamanho de arquivo.",
    "Upload PNG Image to Convert": "Envie imagem PNG para converter",
    "Please select a PNG image file":
      "Por favor, selecione um arquivo de imagem PNG",
    "About this tool": "Sobre esta ferramenta",
    "Use this converter to quickly export PNG images as JPG. It is useful for websites, forms, and social sharing where JPG is preferred.":
      "Use este conversor para exportar rapidamente imagens PNG como JPG. E util para sites, formularios e compartilhamento social onde JPG e preferido.",
    Features: "Recursos",
    "Fast Conversion": "Conversao rapida",
    "Convert PNG files to JPG in seconds.":
      "Converta arquivos PNG para JPG em segundos.",
    "Smaller Output Size": "Tamanho de saida menor",
    "JPG usually creates smaller files than PNG.":
      "JPG normalmente cria arquivos menores que PNG.",
    "Quality Control": "Controle de qualidade",
    "Tune output quality for your needs.":
      "Ajuste a qualidade de saida conforme sua necessidade.",
    "Bulk Variants ZIP": "Variantes em ZIP",
    "Generate multiple output variants and download ZIP.":
      "Gere multiplas variantes de saida e baixe em ZIP.",
    "Private Processing": "Processamento privado",
    "Images stay in your browser on your device.":
      "As imagens permanecem no seu navegador no seu dispositivo.",
    "Free to Use": "Gratuito para usar",
    "No login and no payments required.": "Sem login e sem pagamento.",
    "Frequently Asked Questions": "Perguntas frequentes",
    "Why convert PNG to JPG?": "Por que converter PNG para JPG?",
    "JPG is widely compatible and typically gives smaller file sizes for photos and sharing.":
      "JPG e amplamente compativel e normalmente gera arquivos menores para fotos e compartilhamento.",
    "What about transparency?": "E a transparencia?",
    "JPG does not support transparency, so transparent areas are flattened onto a background color.":
      "JPG nao suporta transparencia, por isso areas transparentes sao convertidas para uma cor de fundo.",
    "Is this conversion safe?": "Esta conversao e segura?",
    "Yes. The conversion runs in your browser, and files are not uploaded to a server.":
      "Sim. A conversao roda no seu navegador e os arquivos nao sao enviados para servidor.",

    // New educational keys
    "This tool is especially valuable when you need lighter files without complicated software. For less technical users, it provides a simple path: upload, choose output preferences, and download.":
      "Esta ferramenta e especialmente valiosa quando voce precisa de arquivos mais leves sem software complicado. Para usuarios menos tecnicos, ela oferece um caminho simples: enviar, escolher preferencias e baixar.",
    "Why this conversion matters": "Por que esta conversao importa",
    "PNG is excellent for transparency and graphics, but it can be heavier than JPG for photos. Converting to JPG helps reduce upload time, save storage, and improve loading speed on websites.":
      "PNG e excelente para transparencia e graficos, mas pode ser mais pesado que JPG para fotos. Converter para JPG ajuda a reduzir tempo de upload, economizar armazenamento e melhorar a velocidade de carregamento em sites.",
    "In practical terms, this means smoother sharing, faster form submissions, and fewer rejections on platforms with file-size limits.":
      "Na pratica, isso significa compartilhamento mais fluido, envio de formularios mais rapido e menos rejeicoes em plataformas com limite de tamanho.",
    "Best use cases": "Melhores casos de uso",
    "Website Uploads": "Uploads para sites",
    "Use JPG to improve page speed and reduce bandwidth usage for photo-heavy pages.":
      "Use JPG para melhorar a velocidade da pagina e reduzir o uso de banda em paginas com muitas fotos.",
    "Email Attachments": "Anexos de email",
    "JPG files are usually smaller, making attachments faster to send and easier to receive.":
      "Arquivos JPG geralmente sao menores, tornando os anexos mais rapidos para enviar e mais faceis de receber.",
    "Social Sharing": "Compartilhamento social",
    "Many social platforms and messaging apps handle JPG efficiently for photos.":
      "Muitas plataformas sociais e aplicativos de mensagens lidam com JPG de forma eficiente para fotos.",
    "How to choose JPG quality": "Como escolher a qualidade JPG",
    "High Quality (90-100)": "Alta qualidade (90-100)",
    "Best for portfolio photos, product images, and detailed visuals where quality matters most.":
      "Melhor para fotos de portfolio, imagens de produtos e visuais detalhados onde a qualidade e essencial.",
    "Balanced (75-89)": "Equilibrado (75-89)",
    "Recommended default for most users. Good visual quality with significantly smaller files.":
      "Padrao recomendado para a maioria dos usuarios. Boa qualidade visual com arquivos significativamente menores.",
    "Compact (60-74)": "Compacto (60-74)",
    "Useful for fast uploads and strict file-size limits, with some visible quality loss.":
      "Util para uploads rapidos e limites rigorosos de tamanho, com alguma perda de qualidade visivel.",
    "Important:": "Importante:",
    "If your image needs transparent background (like logos), keep PNG format instead of JPG.":
      "Se sua imagem precisa de fundo transparente (como logos), mantenha o formato PNG em vez de JPG.",
    "Privacy and safety": "Privacidade e seguranca",
    "Your images are processed in your browser on your device. No account, no cloud upload, and no external storage required.":
      "Suas imagens sao processadas no seu navegador, no seu dispositivo. Sem conta, sem upload na nuvem e sem armazenamento externo.",
    "When should I keep PNG instead of JPG?":
      "Quando devo manter PNG em vez de JPG?",
    "Keep PNG for logos, icons, screenshots, and images that need sharp edges or transparency.":
      "Mantenha PNG para logos, icones, capturas de tela e imagens que precisam de bordas nitidas ou transparencia.",
    "Will converting to JPG reduce quality?":
      "Converter para JPG reduz a qualidade?",
    "JPG uses lossy compression, so some detail can be reduced. In most photo use cases, the difference is minor when using balanced or high quality settings.":
      "JPG usa compressao com perdas, entao alguns detalhes podem ser reduzidos. Na maioria dos casos de uso com fotos, a diferenca e pequena usando configuracoes equilibradas ou de alta qualidade.",
    "What quality setting should I choose?":
      "Qual configuracao de qualidade devo escolher?",
    "Start with 80-85 for a strong balance. Increase quality for professional visuals, lower it for strict file-size limits.":
      "Comece com 80-85 para um bom equilibrio. Aumente a qualidade para visuais profissionais e reduza para limites rigorosos de tamanho.",
    "Secure by design: everything runs locally in your browser.":
      "Seguro por diseno: todo se executa localmente no seu navegador.",
    "You stay in control of your files throughout the conversion workflow.":
      "Voce mantem o controle dos seus arquivos durante todo o fluxo de conversao.",
  },

  fr: {
    Home: "Accueil",
    "PNG to JPG Converter": "Convertisseur PNG vers JPG",
    "Convert PNG images to JPG format for better compatibility and smaller file sizes.":
      "Convertissez des images PNG en JPG pour une meilleure compatibilite et une taille plus reduite.",
    "Upload PNG Image to Convert": "Televersez une image PNG a convertir",
    "Please select a PNG image file":
      "Veuillez selectionner un fichier image PNG",
    "About this tool": "A propos de cet outil",
    "Use this converter to quickly export PNG images as JPG. It is useful for websites, forms, and social sharing where JPG is preferred.":
      "Utilisez ce convertisseur pour exporter rapidement des images PNG en JPG. Il est utile pour les sites, formulaires et reseaux sociaux ou JPG est prefere.",
    Features: "Fonctionnalites",
    "Fast Conversion": "Conversion rapide",
    "Convert PNG files to JPG in seconds.":
      "Convertissez des fichiers PNG en JPG en quelques secondes.",
    "Smaller Output Size": "Taille de sortie reduite",
    "JPG usually creates smaller files than PNG.":
      "JPG cree generalement des fichiers plus petits que PNG.",
    "Quality Control": "Controle de qualite",
    "Tune output quality for your needs.":
      "Ajustez la qualite de sortie selon vos besoins.",
    "Bulk Variants ZIP": "Variantes ZIP",
    "Generate multiple output variants and download ZIP.":
      "Generez plusieurs variantes de sortie et telechargez un ZIP.",
    "Private Processing": "Traitement prive",
    "Images stay in your browser on your device.":
      "Les images restent dans votre navigateur sur votre appareil.",
    "Free to Use": "Gratuit",
    "No login and no payments required.":
      "Aucune connexion ni paiement requis.",
    "Frequently Asked Questions": "Questions frequentes",
    "Why convert PNG to JPG?": "Pourquoi convertir PNG en JPG ?",
    "JPG is widely compatible and typically gives smaller file sizes for photos and sharing.":
      "JPG est largement compatible et donne souvent des fichiers plus petits pour les photos et le partage.",
    "What about transparency?": "Qu en est-il de la transparence ?",
    "JPG does not support transparency, so transparent areas are flattened onto a background color.":
      "JPG ne prend pas en charge la transparence, donc les zones transparentes sont fusionnees avec une couleur de fond.",
    "Is this conversion safe?": "Cette conversion est-elle sure ?",
    "Yes. The conversion runs in your browser, and files are not uploaded to a server.":
      "Oui. La conversion se fait dans votre navigateur et les fichiers ne sont pas envoyes sur un serveur.",

    // New educational keys
    "This tool is especially valuable when you need lighter files without complicated software. For less technical users, it provides a simple path: upload, choose output preferences, and download.":
      "Cet outil est particulierement utile lorsque vous avez besoin de fichiers plus legers sans logiciel complexe. Pour les utilisateurs moins techniques, il offre un parcours simple : televerser, choisir les preferences de sortie et telecharger.",
    "Why this conversion matters": "Pourquoi cette conversion est importante",
    "PNG is excellent for transparency and graphics, but it can be heavier than JPG for photos. Converting to JPG helps reduce upload time, save storage, and improve loading speed on websites.":
      "Le PNG est excellent pour la transparence et les graphiques, mais il peut etre plus lourd que le JPG pour les photos. Convertir en JPG aide a reduire le temps d envoi, economiser du stockage et ameliorer la vitesse de chargement des sites.",
    "In practical terms, this means smoother sharing, faster form submissions, and fewer rejections on platforms with file-size limits.":
      "En pratique, cela signifie un partage plus fluide, des envois de formulaires plus rapides et moins de rejets sur les plateformes avec limites de taille.",
    "Best use cases": "Meilleurs cas d usage",
    "Website Uploads": "Televersements web",
    "Use JPG to improve page speed and reduce bandwidth usage for photo-heavy pages.":
      "Utilisez le JPG pour ameliorer la vitesse des pages et reduire l utilisation de bande passante sur les pages riches en photos.",
    "Email Attachments": "Pieces jointes email",
    "JPG files are usually smaller, making attachments faster to send and easier to receive.":
      "Les fichiers JPG sont generalement plus petits, ce qui rend les pieces jointes plus rapides a envoyer et plus faciles a recevoir.",
    "Social Sharing": "Partage sur les reseaux",
    "Many social platforms and messaging apps handle JPG efficiently for photos.":
      "De nombreuses plateformes sociales et applications de messagerie gerent efficacement le JPG pour les photos.",
    "How to choose JPG quality": "Comment choisir la qualite JPG",
    "High Quality (90-100)": "Haute qualite (90-100)",
    "Best for portfolio photos, product images, and detailed visuals where quality matters most.":
      "Ideal pour les photos de portfolio, les images produit et les visuels detailles ou la qualite est prioritaire.",
    "Balanced (75-89)": "Equilibre (75-89)",
    "Recommended default for most users. Good visual quality with significantly smaller files.":
      "Reglage recommande pour la plupart des utilisateurs. Bonne qualite visuelle avec des fichiers nettement plus petits.",
    "Compact (60-74)": "Compact (60-74)",
    "Useful for fast uploads and strict file-size limits, with some visible quality loss.":
      "Utile pour des envois rapides et des limites strictes de taille de fichier, avec une certaine perte visible de qualite.",
    "Important:": "Important :",
    "If your image needs transparent background (like logos), keep PNG format instead of JPG.":
      "Si votre image a besoin d un fond transparent (comme les logos), gardez le format PNG au lieu de JPG.",
    "Privacy and safety": "Confidentialite et securite",
    "Your images are processed in your browser on your device. No account, no cloud upload, and no external storage required.":
      "Vos images sont traitees dans votre navigateur sur votre appareil. Aucun compte, aucun envoi cloud et aucun stockage externe requis.",
    "When should I keep PNG instead of JPG?":
      "Quand dois-je garder le PNG au lieu du JPG ?",
    "Keep PNG for logos, icons, screenshots, and images that need sharp edges or transparency.":
      "Conservez le PNG pour les logos, icones, captures d ecran et images qui necessitent des bords nets ou de la transparence.",
    "Will converting to JPG reduce quality?":
      "La conversion en JPG reduit-elle la qualite ?",
    "JPG uses lossy compression, so some detail can be reduced. In most photo use cases, the difference is minor when using balanced or high quality settings.":
      "Le JPG utilise une compression avec pertes, donc certains details peuvent etre reduits. Pour la plupart des usages photo, la difference reste faible avec des reglages equilibres ou eleves.",
    "What quality setting should I choose?":
      "Quel reglage de qualite dois-je choisir ?",
    "Start with 80-85 for a strong balance. Increase quality for professional visuals, lower it for strict file-size limits.":
      "Commencez avec 80-85 pour un bon equilibre. Augmentez la qualite pour des visuels professionnels, reduisez-la pour des limites de taille strictes.",
    "Secure by design: everything runs locally in your browser.":
      "Securise par conception : tout s execute localement dans votre navigateur.",
    "You stay in control of your files throughout the conversion workflow.":
      "Vous gardez le controle de vos fichiers pendant tout le processus de conversion.",
  },

  de: {
    Home: "Startseite",
    "PNG to JPG Converter": "PNG zu JPG Konverter",
    "Convert PNG images to JPG format for better compatibility and smaller file sizes.":
      "Konvertiere PNG-Bilder in JPG fur bessere Kompatibilitat und kleinere Dateigrossen.",
    "Upload PNG Image to Convert": "PNG-Bild zum Konvertieren hochladen",
    "Please select a PNG image file": "Bitte wahle eine PNG-Bilddatei aus",
    "About this tool": "Uber dieses Tool",
    "Use this converter to quickly export PNG images as JPG. It is useful for websites, forms, and social sharing where JPG is preferred.":
      "Nutze diesen Konverter, um PNG-Bilder schnell als JPG zu exportieren. Das ist hilfreich fur Websites, Formulare und Social Sharing, wo JPG bevorzugt wird.",
    Features: "Funktionen",
    "Fast Conversion": "Schnelle Konvertierung",
    "Convert PNG files to JPG in seconds.":
      "Konvertiere PNG-Dateien in Sekunden zu JPG.",
    "Smaller Output Size": "Kleinere Ausgabedatei",
    "JPG usually creates smaller files than PNG.":
      "JPG erstellt normalerweise kleinere Dateien als PNG.",
    "Quality Control": "Qualitatskontrolle",
    "Tune output quality for your needs.":
      "Passe die Ausgabequalitat an deine Anforderungen an.",
    "Bulk Variants ZIP": "Mehrere Varianten als ZIP",
    "Generate multiple output variants and download ZIP.":
      "Erzeuge mehrere Ausgabevarianten und lade eine ZIP herunter.",
    "Private Processing": "Private Verarbeitung",
    "Images stay in your browser on your device.":
      "Bilder bleiben in deinem Browser auf deinem Geraet.",
    "Free to Use": "Kostenlos nutzbar",
    "No login and no payments required.":
      "Kein Login und keine Zahlung erforderlich.",
    "Frequently Asked Questions": "Haufige Fragen",
    "Why convert PNG to JPG?": "Warum PNG in JPG konvertieren?",
    "JPG is widely compatible and typically gives smaller file sizes for photos and sharing.":
      "JPG ist sehr kompatibel und liefert meist kleinere Dateien fur Fotos und Sharing.",
    "What about transparency?": "Was ist mit Transparenz?",
    "JPG does not support transparency, so transparent areas are flattened onto a background color.":
      "JPG unterstutzt keine Transparenz. Transparente Bereiche werden daher auf eine Hintergrundfarbe gelegt.",
    "Is this conversion safe?": "Ist diese Konvertierung sicher?",
    "Yes. The conversion runs in your browser, and files are not uploaded to a server.":
      "Ja. Die Konvertierung lauft im Browser und Dateien werden nicht auf einen Server hochgeladen.",

    // New educational keys
    "This tool is especially valuable when you need lighter files without complicated software. For less technical users, it provides a simple path: upload, choose output preferences, and download.":
      "Dieses Tool ist besonders wertvoll, wenn du leichtere Dateien ohne komplizierte Software brauchst. Fur weniger technische Nutzer bietet es einen einfachen Ablauf: hochladen, Ausgabeeinstellungen wahlen und herunterladen.",
    "Why this conversion matters": "Warum diese Konvertierung wichtig ist",
    "PNG is excellent for transparency and graphics, but it can be heavier than JPG for photos. Converting to JPG helps reduce upload time, save storage, and improve loading speed on websites.":
      "PNG ist hervorragend fur Transparenz und Grafiken, kann bei Fotos aber grosser als JPG sein. Die Konvertierung zu JPG reduziert Upload-Zeit, spart Speicherplatz und verbessert die Ladegeschwindigkeit von Websites.",
    "In practical terms, this means smoother sharing, faster form submissions, and fewer rejections on platforms with file-size limits.":
      "In der Praxis bedeutet das reibungsloseres Teilen, schnellere Formular-Uploads und weniger Ablehnungen auf Plattformen mit Dateigrossen-Limits.",
    "Best use cases": "Beste Einsatzfalle",
    "Website Uploads": "Website-Uploads",
    "Use JPG to improve page speed and reduce bandwidth usage for photo-heavy pages.":
      "Nutze JPG, um die Seitengeschwindigkeit zu verbessern und die Bandbreitennutzung bei fotolastigen Seiten zu reduzieren.",
    "Email Attachments": "E-Mail-Anhange",
    "JPG files are usually smaller, making attachments faster to send and easier to receive.":
      "JPG-Dateien sind meist kleiner, wodurch Anhange schneller versendet und einfacher empfangen werden konnen.",
    "Social Sharing": "Social Sharing",
    "Many social platforms and messaging apps handle JPG efficiently for photos.":
      "Viele soziale Plattformen und Messenger-Apps verarbeiten JPG fur Fotos sehr effizient.",
    "How to choose JPG quality": "So wahlst du die JPG-Qualitat",
    "High Quality (90-100)": "Hohe Qualitat (90-100)",
    "Best for portfolio photos, product images, and detailed visuals where quality matters most.":
      "Ideal fur Portfolio-Fotos, Produktbilder und detaillierte Visuals, bei denen Qualitat am wichtigsten ist.",
    "Balanced (75-89)": "Ausgewogen (75-89)",
    "Recommended default for most users. Good visual quality with significantly smaller files.":
      "Empfohlene Standardeinstellung fur die meisten Nutzer. Gute Bildqualitat bei deutlich kleineren Dateien.",
    "Compact (60-74)": "Kompakt (60-74)",
    "Useful for fast uploads and strict file-size limits, with some visible quality loss.":
      "Nutzlich fur schnelle Uploads und strenge Dateigrossen-Limits, mit etwas sichtbarem Qualitatsverlust.",
    "Important:": "Wichtig:",
    "If your image needs transparent background (like logos), keep PNG format instead of JPG.":
      "Wenn dein Bild einen transparenten Hintergrund braucht (z. B. Logos), nutze PNG statt JPG.",
    "Privacy and safety": "Datenschutz und Sicherheit",
    "Your images are processed in your browser on your device. No account, no cloud upload, and no external storage required.":
      "Deine Bilder werden in deinem Browser auf deinem Geraet verarbeitet. Kein Konto, kein Cloud-Upload und kein externer Speicher erforderlich.",
    "When should I keep PNG instead of JPG?":
      "Wann sollte ich PNG statt JPG behalten?",
    "Keep PNG for logos, icons, screenshots, and images that need sharp edges or transparency.":
      "Behalte PNG fur Logos, Icons, Screenshots und Bilder mit scharfen Kanten oder Transparenz.",
    "Will converting to JPG reduce quality?":
      "Verringert die Konvertierung zu JPG die Qualitat?",
    "JPG uses lossy compression, so some detail can be reduced. In most photo use cases, the difference is minor when using balanced or high quality settings.":
      "JPG nutzt verlustbehaftete Komprimierung, daher konnen Details reduziert werden. In den meisten Foto-Anwendungen ist der Unterschied bei ausgewogenen oder hohen Qualitatseinstellungen gering.",
    "What quality setting should I choose?":
      "Welche Qualitatseinstellung sollte ich wahlen?",
    "Start with 80-85 for a strong balance. Increase quality for professional visuals, lower it for strict file-size limits.":
      "Starte mit 80-85 fur eine starke Balance. Erhohe die Qualitat fur professionelle Visuals, senke sie bei strengen Dateigrossen-Limits.",
    "Secure by design: everything runs locally in your browser.":
      "Sicher von Grund auf: Alles lauft lokal in deinem Browser.",
    "You stay in control of your files throughout the conversion workflow.":
      "Du behaltst die Kontrolle uber deine Dateien wahrend des gesamten Konvertierungsablaufs.",
  },

  it: {
    Home: "Home",
    "PNG to JPG Converter": "Convertitore PNG in JPG",
    "Convert PNG images to JPG format for better compatibility and smaller file sizes.":
      "Converti immagini PNG in JPG per una migliore compatibilita e file piu piccoli.",
    "Upload PNG Image to Convert": "Carica immagine PNG da convertire",
    "Please select a PNG image file": "Seleziona un file immagine PNG",
    "About this tool": "Informazioni su questo strumento",
    "Use this converter to quickly export PNG images as JPG. It is useful for websites, forms, and social sharing where JPG is preferred.":
      "Usa questo convertitore per esportare rapidamente immagini PNG in JPG. E utile per siti web, moduli e social dove JPG e preferito.",
    Features: "Funzionalita",
    "Fast Conversion": "Conversione rapida",
    "Convert PNG files to JPG in seconds.":
      "Converti file PNG in JPG in pochi secondi.",
    "Smaller Output Size": "Dimensione di output minore",
    "JPG usually creates smaller files than PNG.":
      "JPG di solito crea file piu piccoli rispetto a PNG.",
    "Quality Control": "Controllo qualita",
    "Tune output quality for your needs.":
      "Regola la qualita di output in base alle tue esigenze.",
    "Bulk Variants ZIP": "Varianti multiple ZIP",
    "Generate multiple output variants and download ZIP.":
      "Genera varianti multiple di output e scarica uno ZIP.",
    "Private Processing": "Elaborazione privata",
    "Images stay in your browser on your device.":
      "Le immagini restano nel tuo browser sul tuo dispositivo.",
    "Free to Use": "Gratis da usare",
    "No login and no payments required.":
      "Nessun login e nessun pagamento richiesto.",
    "Frequently Asked Questions": "Domande frequenti",
    "Why convert PNG to JPG?": "Perche convertire PNG in JPG?",
    "JPG is widely compatible and typically gives smaller file sizes for photos and sharing.":
      "JPG e ampiamente compatibile e in genere produce file piu piccoli per foto e condivisione.",
    "What about transparency?": "E la trasparenza?",
    "JPG does not support transparency, so transparent areas are flattened onto a background color.":
      "JPG non supporta la trasparenza, quindi le aree trasparenti vengono appiattite su un colore di sfondo.",
    "Is this conversion safe?": "Questa conversione e sicura?",
    "Yes. The conversion runs in your browser, and files are not uploaded to a server.":
      "Si. La conversione avviene nel browser e i file non vengono caricati su un server.",

    // New educational keys
    "This tool is especially valuable when you need lighter files without complicated software. For less technical users, it provides a simple path: upload, choose output preferences, and download.":
      "Questo strumento e particolarmente utile quando hai bisogno di file piu leggeri senza software complessi. Per utenti meno tecnici offre un percorso semplice: carica, scegli le preferenze di output e scarica.",
    "Why this conversion matters": "Perche questa conversione e importante",
    "PNG is excellent for transparency and graphics, but it can be heavier than JPG for photos. Converting to JPG helps reduce upload time, save storage, and improve loading speed on websites.":
      "PNG e eccellente per trasparenza e grafica, ma puo essere piu pesante di JPG per le foto. Convertire in JPG aiuta a ridurre i tempi di upload, risparmiare spazio e migliorare la velocita di caricamento dei siti.",
    "In practical terms, this means smoother sharing, faster form submissions, and fewer rejections on platforms with file-size limits.":
      "In pratica, significa condivisione piu fluida, invio moduli piu veloce e meno rifiuti su piattaforme con limiti di dimensione file.",
    "Best use cases": "Migliori casi d uso",
    "Website Uploads": "Upload su siti web",
    "Use JPG to improve page speed and reduce bandwidth usage for photo-heavy pages.":
      "Usa JPG per migliorare la velocita delle pagine e ridurre l uso di banda nelle pagine ricche di foto.",
    "Email Attachments": "Allegati email",
    "JPG files are usually smaller, making attachments faster to send and easier to receive.":
      "I file JPG sono solitamente piu piccoli, rendendo gli allegati piu rapidi da inviare e piu facili da ricevere.",
    "Social Sharing": "Condivisione social",
    "Many social platforms and messaging apps handle JPG efficiently for photos.":
      "Molte piattaforme social e app di messaggistica gestiscono JPG in modo efficiente per le foto.",
    "How to choose JPG quality": "Come scegliere la qualita JPG",
    "High Quality (90-100)": "Alta qualita (90-100)",
    "Best for portfolio photos, product images, and detailed visuals where quality matters most.":
      "Ideale per foto portfolio, immagini prodotto e visual dettagliati dove la qualita conta di piu.",
    "Balanced (75-89)": "Bilanciato (75-89)",
    "Recommended default for most users. Good visual quality with significantly smaller files.":
      "Impostazione consigliata per la maggior parte degli utenti. Buona qualita visiva con file molto piu piccoli.",
    "Compact (60-74)": "Compatto (60-74)",
    "Useful for fast uploads and strict file-size limits, with some visible quality loss.":
      "Utile per upload rapidi e limiti rigidi di dimensione, con una certa perdita visibile di qualita.",
    "Important:": "Importante:",
    "If your image needs transparent background (like logos), keep PNG format instead of JPG.":
      "Se la tua immagine necessita di sfondo trasparente (come i loghi), mantieni il formato PNG invece di JPG.",
    "Privacy and safety": "Privacy e sicurezza",
    "Your images are processed in your browser on your device. No account, no cloud upload, and no external storage required.":
      "Le tue immagini vengono elaborate nel browser sul tuo dispositivo. Nessun account, nessun upload cloud e nessun archivio esterno richiesto.",
    "When should I keep PNG instead of JPG?":
      "Quando devo mantenere PNG invece di JPG?",
    "Keep PNG for logos, icons, screenshots, and images that need sharp edges or transparency.":
      "Mantieni PNG per loghi, icone, screenshot e immagini che richiedono bordi nitidi o trasparenza.",
    "Will converting to JPG reduce quality?":
      "Convertire in JPG riduce la qualita?",
    "JPG uses lossy compression, so some detail can be reduced. In most photo use cases, the difference is minor when using balanced or high quality settings.":
      "JPG usa compressione con perdita, quindi alcuni dettagli possono ridursi. Nella maggior parte dei casi fotografici, la differenza e minima con impostazioni bilanciate o alta qualita.",
    "What quality setting should I choose?":
      "Quale impostazione di qualita dovrei scegliere?",
    "Start with 80-85 for a strong balance. Increase quality for professional visuals, lower it for strict file-size limits.":
      "Inizia con 80-85 per un ottimo equilibrio. Aumenta la qualita per visual professionali, riducila per limiti severi di dimensione file.",
    "Secure by design: everything runs locally in your browser.":
      "Sicuro fin dalla progettazione: tutto funziona localmente nel tuo browser.",
    "You stay in control of your files throughout the conversion workflow.":
      "Mantieni il controllo dei tuoi file durante tutto il flusso di conversione.",
  },
};
