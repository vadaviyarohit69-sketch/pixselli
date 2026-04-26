import type { Locale } from '@/lib/i18n';

type TranslationDict = Record<string, string>;

export const TERMS_TEXT_BY_LOCALE: Partial<Record<Locale, TranslationDict>> = {
  pt: {
    'Terms of Service - Pixselli': 'Termos de Servico - Pixselli',
    'Review the terms that govern your use of Pixselli tools and website.':
      'Revise os termos que regem o uso das ferramentas e do site do Pixselli.',
    'Terms of Service': 'Termos de Servico',
    'Last Updated: April 18, 2026': 'Ultima atualizacao: 18 de abril de 2026',
    Agreement: 'Acordo',
    'By accessing Pixselli, you agree to these Terms and to our Privacy Policy. If you disagree, please do not use the service.':
      'Ao acessar o Pixselli, voce concorda com estes Termos e com nossa Politica de Privacidade. Se voce nao concordar, nao use o servico.',
    'Service Description': 'Descricao do servico',
    'Pixselli provides browser-based image and document tools, including conversion, compression, and editing utilities.':
      'O Pixselli oferece ferramentas de imagem e documentos no navegador, incluindo conversao, compressao e edicao.',
    'Features may change over time and availability can vary by browser, device capabilities, or maintenance windows.':
      'Os recursos podem mudar com o tempo e a disponibilidade pode variar conforme o navegador, capacidade do dispositivo ou manutencao.',
    'Acceptable Use': 'Uso aceitavel',
    'You may': 'Voce pode',
    'Use tools for lawful personal or business workflows.':
      'Usar as ferramentas para fluxos legais pessoais ou de negocio.',
    'Process only files you have rights to use.':
      'Processar apenas arquivos que voce tem direito de usar.',
    'Share feedback to help improve the platform.':
      'Compartilhar feedback para melhorar a plataforma.',
    'You may not': 'Voce nao pode',
    'Upload or process illegal or infringing content.':
      'Enviar ou processar conteudo ilegal ou que infrinja direitos.',
    'Attempt to disrupt or abuse service infrastructure.':
      'Tentar interromper ou abusar da infraestrutura do servico.',
    'Use automated scraping or attacks against the website.':
      'Usar scraping automatizado ou ataques contra o site.',
    'Intellectual Property': 'Propriedade intelectual',
    'Pixselli branding, product design, and platform content are protected by applicable intellectual property laws.':
      'A marca Pixselli, o design do produto e o conteudo da plataforma sao protegidos por leis de propriedade intelectual aplicaveis.',
    'You retain rights to your own files. You are responsible for ensuring your use does not violate third-party rights.':
      'Voce mantem os direitos sobre seus arquivos. Voce e responsavel por garantir que seu uso nao viole direitos de terceiros.',
    'Disclaimers and Liability': 'Isencoes e responsabilidade',
    'Services are provided "as is" and "as available" without warranties of uninterrupted access or fitness for a specific purpose.':
      'Os servicos sao fornecidos "como estao" e "conforme disponivel" sem garantias de acesso ininterrupto ou adequacao a um proposito especifico.',
    'To the maximum extent allowed by law, Pixselli is not liable for indirect, incidental, or consequential damages from service use.':
      'Na maxima extensao permitida por lei, o Pixselli nao se responsabiliza por danos indiretos, incidentais ou consequentes do uso do servico.',
    'Termination and Changes': 'Rescisao e alteracoes',
    'We may suspend access for abuse, legal risk, or security reasons. We may also update these Terms over time.':
      'Podemos suspender o acesso por abuso, risco legal ou seguranca. Tambem podemos atualizar estes Termos com o tempo.',
    'Continued use after updates means you accept the revised Terms.':
      'O uso continuo apos atualizacoes significa que voce aceita os Termos revisados.',
    'Questions About These Terms?': 'Duvidas sobre estes Termos?',
    'For legal questions, contact us at legal@pixselli.com.':
      'Para questoes legais, fale conosco em legal@pixselli.com.',
    'View Privacy Policy': 'Ver Politica de Privacidade',
  },

  fr: {
    'Terms of Service - Pixselli': 'Conditions d\'utilisation - Pixselli',
    'Review the terms that govern your use of Pixselli tools and website.':
      'Consultez les conditions qui regissent l\'utilisation des outils et du site Pixselli.',
    'Terms of Service': 'Conditions d\'utilisation',
    'Last Updated: April 18, 2026': 'Derniere mise a jour : 18 avril 2026',
    Agreement: 'Accord',
    'By accessing Pixselli, you agree to these Terms and to our Privacy Policy. If you disagree, please do not use the service.':
      'En accedant a Pixselli, vous acceptez ces conditions et notre politique de confidentialite. Si vous n\'etes pas d\'accord, n\'utilisez pas le service.',
    'Service Description': 'Description du service',
    'Pixselli provides browser-based image and document tools, including conversion, compression, and editing utilities.':
      'Pixselli propose des outils d\'image et de documents dans le navigateur, y compris conversion, compression et edition.',
    'Features may change over time and availability can vary by browser, device capabilities, or maintenance windows.':
      'Les fonctionnalites peuvent evoluer et la disponibilite peut varier selon le navigateur, l\'appareil ou la maintenance.',
    'Acceptable Use': 'Utilisation acceptable',
    'You may': 'Vous pouvez',
    'Use tools for lawful personal or business workflows.':
      'Utiliser les outils pour des usages personnels ou professionnels legaux.',
    'Process only files you have rights to use.':
      'Traiter uniquement les fichiers pour lesquels vous avez des droits.',
    'Share feedback to help improve the platform.':
      'Partager vos retours pour ameliorer la plateforme.',
    'You may not': 'Vous ne pouvez pas',
    'Upload or process illegal or infringing content.':
      'Televerser ou traiter du contenu illegal ou portant atteinte a des droits.',
    'Attempt to disrupt or abuse service infrastructure.':
      'Tenter de perturber ou d\'abuser de l\'infrastructure du service.',
    'Use automated scraping or attacks against the website.':
      'Utiliser du scraping automatise ou des attaques contre le site.',
    'Intellectual Property': 'Propriete intellectuelle',
    'Pixselli branding, product design, and platform content are protected by applicable intellectual property laws.':
      'La marque Pixselli, le design du produit et le contenu de la plateforme sont proteges par les lois applicables.',
    'You retain rights to your own files. You are responsible for ensuring your use does not violate third-party rights.':
      'Vous conservez les droits sur vos fichiers. Vous etes responsable de verifier que votre usage ne viole pas des droits de tiers.',
    'Disclaimers and Liability': 'Exclusions et responsabilite',
    'Services are provided "as is" and "as available" without warranties of uninterrupted access or fitness for a specific purpose.':
      'Les services sont fournis "en l\'etat" et "selon disponibilite" sans garantie d\'acces ininterrompu ni d\'adequation a un usage particulier.',
    'To the maximum extent allowed by law, Pixselli is not liable for indirect, incidental, or consequential damages from service use.':
      'Dans la limite autorisee par la loi, Pixselli n\'est pas responsable des dommages indirects, accessoires ou consecutifs lies a l\'utilisation.',
    'Termination and Changes': 'Resiliation et modifications',
    'We may suspend access for abuse, legal risk, or security reasons. We may also update these Terms over time.':
      'Nous pouvons suspendre l\'acces en cas d\'abus, de risque legal ou de securite. Nous pouvons aussi mettre a jour ces conditions.',
    'Continued use after updates means you accept the revised Terms.':
      'Continuer a utiliser le service apres une mise a jour signifie que vous acceptez les conditions revisees.',
    'Questions About These Terms?': 'Questions sur ces conditions ?',
    'For legal questions, contact us at legal@pixselli.com.':
      'Pour toute question legale, contactez-nous a legal@pixselli.com.',
    'View Privacy Policy': 'Voir la politique de confidentialite',
  },

  de: {
    'Terms of Service - Pixselli': 'Nutzungsbedingungen - Pixselli',
    'Review the terms that govern your use of Pixselli tools and website.':
      'Lies die Bedingungen, die deine Nutzung der Pixselli-Tools und Website regeln.',
    'Terms of Service': 'Nutzungsbedingungen',
    'Last Updated: April 18, 2026': 'Stand: 18. April 2026',
    Agreement: 'Vereinbarung',
    'By accessing Pixselli, you agree to these Terms and to our Privacy Policy. If you disagree, please do not use the service.':
      'Durch den Zugriff auf Pixselli stimmst du diesen Bedingungen und unserer Datenschutzerklarung zu. Wenn nicht, nutze den Service bitte nicht.',
    'Service Description': 'Servicebeschreibung',
    'Pixselli provides browser-based image and document tools, including conversion, compression, and editing utilities.':
      'Pixselli bietet browserbasierte Bild- und Dokumenttools, inklusive Konvertierung, Komprimierung und Bearbeitung.',
    'Features may change over time and availability can vary by browser, device capabilities, or maintenance windows.':
      'Funktionen konnen sich andern; Verfugbarkeit kann je nach Browser, Gerat oder Wartung variieren.',
    'Acceptable Use': 'Zulassige Nutzung',
    'You may': 'Du darfst',
    'Use tools for lawful personal or business workflows.':
      'Tools fur legale private oder geschäftliche Workflows nutzen.',
    'Process only files you have rights to use.':
      'Nur Dateien verarbeiten, fur die du Nutzungsrechte hast.',
    'Share feedback to help improve the platform.':
      'Feedback teilen, um die Plattform zu verbessern.',
    'You may not': 'Du darfst nicht',
    'Upload or process illegal or infringing content.':
      'Illegale oder rechtsverletzende Inhalte hochladen oder verarbeiten.',
    'Attempt to disrupt or abuse service infrastructure.':
      'Die Infrastruktur storen oder missbrauchen.',
    'Use automated scraping or attacks against the website.':
      'Automatisiertes Scraping oder Angriffe gegen die Website nutzen.',
    'Intellectual Property': 'Geistiges Eigentum',
    'Pixselli branding, product design, and platform content are protected by applicable intellectual property laws.':
      'Marke Pixselli, Produktdesign und Plattforminhalte sind durch geltende IP-Gesetze geschutzt.',
    'You retain rights to your own files. You are responsible for ensuring your use does not violate third-party rights.':
      'Du behaltst die Rechte an deinen Dateien. Du bist verantwortlich sicherzustellen, dass deine Nutzung keine Rechte Dritter verletzt.',
    'Disclaimers and Liability': 'Haftungsausschluss',
    'Services are provided "as is" and "as available" without warranties of uninterrupted access or fitness for a specific purpose.':
      'Die Dienste werden "wie besehen" und "wie verfugbar" bereitgestellt, ohne Gewahrleistung fur unterbrechungsfreien Zugriff oder Eignung fur einen bestimmten Zweck.',
    'To the maximum extent allowed by law, Pixselli is not liable for indirect, incidental, or consequential damages from service use.':
      'Soweit gesetzlich zulassig, haftet Pixselli nicht fur indirekte, zufallige oder Folgeschaden aus der Nutzung.',
    'Termination and Changes': 'Beendigung und Anderungen',
    'We may suspend access for abuse, legal risk, or security reasons. We may also update these Terms over time.':
      'Wir konnen den Zugriff bei Missbrauch, rechtlichem Risiko oder aus Sicherheitsgrunden sperren. Wir konnen diese Bedingungen auch aktualisieren.',
    'Continued use after updates means you accept the revised Terms.':
      'Wenn du den Service nach Updates weiter nutzt, akzeptierst du die uberarbeiteten Bedingungen.',
    'Questions About These Terms?': 'Fragen zu diesen Bedingungen?',
    'For legal questions, contact us at legal@pixselli.com.':
      'Fur rechtliche Fragen kontaktiere uns unter legal@pixselli.com.',
    'View Privacy Policy': 'Datenschutzerklarung ansehen',
  },

  it: {
    'Terms of Service - Pixselli': 'Termini di servizio - Pixselli',
    'Review the terms that govern your use of Pixselli tools and website.':
      'Consulta i termini che regolano l\'uso degli strumenti e del sito Pixselli.',
    'Terms of Service': 'Termini di servizio',
    'Last Updated: April 18, 2026': 'Ultimo aggiornamento: 18 aprile 2026',
    Agreement: 'Accordo',
    'By accessing Pixselli, you agree to these Terms and to our Privacy Policy. If you disagree, please do not use the service.':
      'Accedendo a Pixselli, accetti questi Termini e la nostra Informativa sulla privacy. Se non sei d\'accordo, non usare il servizio.',
    'Service Description': 'Descrizione del servizio',
    'Pixselli provides browser-based image and document tools, including conversion, compression, and editing utilities.':
      'Pixselli offre strumenti per immagini e documenti nel browser, inclusi conversione, compressione e modifica.',
    'Features may change over time and availability can vary by browser, device capabilities, or maintenance windows.':
      'Le funzionalita possono cambiare e la disponibilita puo variare in base a browser, dispositivo o manutenzione.',
    'Acceptable Use': 'Uso consentito',
    'You may': 'Puoi',
    'Use tools for lawful personal or business workflows.':
      'Usare gli strumenti per flussi legali personali o di lavoro.',
    'Process only files you have rights to use.':
      'Elaborare solo file su cui hai diritti d\'uso.',
    'Share feedback to help improve the platform.':
      'Condividere feedback per migliorare la piattaforma.',
    'You may not': 'Non puoi',
    'Upload or process illegal or infringing content.':
      'Caricare o elaborare contenuti illegali o in violazione di diritti.',
    'Attempt to disrupt or abuse service infrastructure.':
      'Tentare di interrompere o abusare dell\'infrastruttura del servizio.',
    'Use automated scraping or attacks against the website.':
      'Usare scraping automatizzato o attacchi contro il sito.',
    'Intellectual Property': 'Proprieta intellettuale',
    'Pixselli branding, product design, and platform content are protected by applicable intellectual property laws.':
      'Il brand Pixselli, il design del prodotto e i contenuti della piattaforma sono protetti dalle leggi applicabili.',
    'You retain rights to your own files. You are responsible for ensuring your use does not violate third-party rights.':
      'Mantieni i diritti sui tuoi file. Sei responsabile di assicurarti che il tuo uso non violi diritti di terzi.',
    'Disclaimers and Liability': 'Esclusioni e responsabilita',
    'Services are provided "as is" and "as available" without warranties of uninterrupted access or fitness for a specific purpose.':
      'I servizi sono forniti "cosi come sono" e "come disponibili" senza garanzie di accesso ininterrotto o idoneita a uno scopo specifico.',
    'To the maximum extent allowed by law, Pixselli is not liable for indirect, incidental, or consequential damages from service use.':
      'Nei limiti consentiti dalla legge, Pixselli non e responsabile per danni indiretti, accidentali o consequenziali derivanti dall\'uso.',
    'Termination and Changes': 'Recesso e modifiche',
    'We may suspend access for abuse, legal risk, or security reasons. We may also update these Terms over time.':
      'Possiamo sospendere l\'accesso per abuso, rischio legale o motivi di sicurezza. Possiamo anche aggiornare questi Termini nel tempo.',
    'Continued use after updates means you accept the revised Terms.':
      'L\'uso continuato dopo gli aggiornamenti significa che accetti i Termini revisionati.',
    'Questions About These Terms?': 'Domande su questi Termini?',
    'For legal questions, contact us at legal@pixselli.com.':
      'Per domande legali, contattaci a legal@pixselli.com.',
    'View Privacy Policy': 'Vedi informativa sulla privacy',
  },
};
