import type { Locale } from '@/lib/i18n';
import { getBlogPostBySlug } from '@/lib/blogPostsData';

export type BlogLocale = Locale;

export type BlogPostLocalizedFields = {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  heroSubtitle: string;
};

type ExtraLocale = Exclude<BlogLocale, 'en' | 'es'>;

const BLOG_POST_TRANSLATIONS: Record<ExtraLocale, Record<string, BlogPostLocalizedFields>> = {
  pt: {
    'what-is-heic-format-complete-guide': {
      title: 'O que é o formato HEIC? Guia completo do formato de imagem do iPhone',
      excerpt:
        'Tudo o que você precisa saber sobre HEIC: por que a Apple usa, como abrir arquivos HEIC no Windows e como converter HEIC para JPG.',
      category: 'Guia de formato',
      author: 'Equipe Pixselli',
      readTime: '8 min de leitura',
      heroSubtitle: 'Tudo o que você precisa saber sobre HEIC, compatibilidade e conversão.',
    },
    'how-to-compress-images-without-losing-quality': {
      title: 'Como comprimir imagens sem perder qualidade',
      excerpt:
        'Aprenda técnicas práticas para reduzir o tamanho do arquivo mantendo a qualidade visual para web e redes sociais.',
      category: 'Guia',
      author: 'Equipe Pixselli',
      readTime: '6 min de leitura',
      heroSubtitle: 'Um guia simples para deixar suas imagens menores e mais rápidas sem perda visível de qualidade.',
    },
    'why-image-compression-is-important-for-seo-and-page-speed': {
      title: 'Por que a compressão de imagens é importante para SEO e velocidade da página',
      excerpt:
        'Entenda como imagens otimizadas melhoram Core Web Vitals, rankings de busca e performance de conversão.',
      category: 'SEO',
      author: 'Equipe Pixselli',
      readTime: '5 min de leitura',
      heroSubtitle: 'Veja como imagens otimizadas ajudam no ranking e na velocidade do site.',
    },
    'instagram-image-size-guide-posts-reels-stories-2025': {
      title: 'Guia de tamanhos de imagem do Instagram (Posts, Reels, Stories) — Atualizado 2025',
      excerpt:
        'Use as dimensões certas para feed, stories, reels e perfil para evitar cortes e borrões.',
      category: 'Redes sociais',
      author: 'Equipe Pixselli',
      readTime: '6 min de leitura',
      heroSubtitle: 'As dimensões ideais para cada formato do Instagram em um só lugar.',
    },
    'jpg-vs-png-vs-webp-which-image-format-should-you-use': {
      title: 'JPG vs PNG vs WebP: qual formato de imagem você deve usar?',
      excerpt:
        'Compare qualidade, tamanho, transparência e os melhores casos de uso para formatos modernos.',
      category: 'Formatos de arquivo',
      author: 'Equipe Pixselli',
      readTime: '7 min de leitura',
      heroSubtitle: 'Uma comparação prática de formatos para sites, fotos e gráficos.',
    },
    'the-complete-beginners-guide-to-image-optimization': {
      title: 'Guia completo para iniciantes sobre otimização de imagens',
      excerpt:
        'Comece do zero e aprenda compressão, redimensionamento, escolha de formato e fluxos de imagem para SEO.',
      category: 'Guia para iniciantes',
      author: 'Equipe Pixselli',
      readTime: '8 min de leitura',
      heroSubtitle: 'Tudo o que iniciantes precisam para otimizar imagens com velocidade e qualidade.',
    },
    'how-to-convert-png-to-jpg-online-fast-free': {
      title: 'Como converter PNG para JPG online (rápido e grátis)',
      excerpt:
        'Guia passo a passo para converter PNG em JPG com dicas de qualidade e soluções rápidas.',
      category: 'Tutorial',
      author: 'Equipe Pixselli',
      readTime: '4 min de leitura',
      heroSubtitle: 'Um fluxo rápido e prático para converter PNG em JPG.',
    },
  },
  fr: {
    'what-is-heic-format-complete-guide': {
      title: "Qu'est-ce que le format HEIC ? Guide complet du format d'image iPhone",
      excerpt:
        "Tout ce qu'il faut savoir sur HEIC : pourquoi Apple l'utilise, comment ouvrir des fichiers HEIC sur Windows et comment convertir HEIC en JPG.",
      category: 'Guide de format',
      author: "Équipe Pixselli",
      readTime: '8 min de lecture',
      heroSubtitle: 'Tout ce que vous devez savoir sur HEIC, la compatibilité et la conversion.',
    },
    'how-to-compress-images-without-losing-quality': {
      title: 'Comment compresser des images sans perdre en qualité',
      excerpt:
        'Apprenez des techniques pratiques pour réduire la taille des fichiers tout en gardant une bonne qualité visuelle pour le web et les réseaux sociaux.',
      category: 'Guide',
      author: "Équipe Pixselli",
      readTime: '6 min de lecture',
      heroSubtitle: "Un guide simple pour rendre vos images plus légères et plus rapides, sans perte de qualité visible.",
    },
    'why-image-compression-is-important-for-seo-and-page-speed': {
      title: "Pourquoi la compression d'images est importante pour le SEO et la vitesse",
      excerpt:
        'Comprenez comment des images optimisées améliorent les Core Web Vitals, le classement et les conversions.',
      category: 'SEO',
      author: "Équipe Pixselli",
      readTime: '5 min de lecture',
      heroSubtitle: "Découvrez comment des images optimisées aident le référencement et la vitesse du site.",
    },
    'instagram-image-size-guide-posts-reels-stories-2025': {
      title: "Guide des tailles d'image Instagram (posts, reels, stories) — Mise à jour 2025",
      excerpt:
        "Utilisez les bonnes dimensions pour le fil, les stories, les reels et le profil afin d'éviter recadrage et flou.",
      category: 'Réseaux sociaux',
      author: "Équipe Pixselli",
      readTime: '6 min de lecture',
      heroSubtitle: "Les dimensions idéales pour chaque format Instagram, au même endroit.",
    },
    'jpg-vs-png-vs-webp-which-image-format-should-you-use': {
      title: 'JPG vs PNG vs WebP : quel format devez-vous utiliser ?',
      excerpt:
        'Comparez la qualité, la taille, la transparence et les meilleurs usages des formats d’image modernes.',
      category: 'Formats de fichier',
      author: "Équipe Pixselli",
      readTime: '7 min de lecture',
      heroSubtitle: 'Une comparaison pratique pour les sites, les photos et les graphismes.',
    },
    'the-complete-beginners-guide-to-image-optimization': {
      title: "Guide complet d’optimisation d’images pour débutants",
      excerpt:
        "Partez de zéro et apprenez la compression, le redimensionnement, le choix du format et des workflows SEO.",
      category: 'Guide débutant',
      author: "Équipe Pixselli",
      readTime: '8 min de lecture',
      heroSubtitle: "Tout ce dont les débutants ont besoin pour optimiser des images : vitesse et qualité.",
    },
    'how-to-convert-png-to-jpg-online-fast-free': {
      title: 'Convertir un PNG en JPG en ligne (rapide et gratuit)',
      excerpt:
        'Guide pas à pas pour convertir PNG en JPG, avec des conseils de qualité et un dépannage rapide.',
      category: 'Tutoriel',
      author: "Équipe Pixselli",
      readTime: '4 min de lecture',
      heroSubtitle: 'Un workflow rapide et pratique pour convertir PNG en JPG.',
    },
  },
  de: {
    'what-is-heic-format-complete-guide': {
      title: 'Was ist das HEIC-Format? Kompletter Leitfaden zum iPhone-Bildformat',
      excerpt:
        'Alles, was du über HEIC wissen musst: warum Apple es nutzt, wie man HEIC unter Windows öffnet und wie man HEIC in JPG konvertiert.',
      category: 'Format-Leitfaden',
      author: 'Pixselli Team',
      readTime: '8 Min. Lesezeit',
      heroSubtitle: 'Alles über HEIC, Kompatibilität und Konvertierung.',
    },
    'how-to-compress-images-without-losing-quality': {
      title: 'Bilder komprimieren, ohne Qualität zu verlieren',
      excerpt:
        'Praktische Techniken, um die Dateigröße zu reduzieren und die Bildqualität für Web und Social Media zu erhalten.',
      category: 'Leitfaden',
      author: 'Pixselli Team',
      readTime: '6 Min. Lesezeit',
      heroSubtitle: 'Ein einfacher Guide, um Bilder kleiner und schneller zu machen – ohne sichtbaren Qualitätsverlust.',
    },
    'why-image-compression-is-important-for-seo-and-page-speed': {
      title: 'Warum Bildkompression wichtig für SEO und Seitenladezeit ist',
      excerpt:
        'Verstehe, wie optimierte Bilder Core Web Vitals, Rankings und Conversion-Performance verbessern.',
      category: 'SEO',
      author: 'Pixselli Team',
      readTime: '5 Min. Lesezeit',
      heroSubtitle: 'So helfen optimierte Bilder beim Ranking und bei der Website-Geschwindigkeit.',
    },
    'instagram-image-size-guide-posts-reels-stories-2025': {
      title: 'Instagram-Bildgrößen-Guide (Posts, Reels, Stories) — Update 2025',
      excerpt:
        'Nutze die richtigen Abmessungen für Feed, Stories, Reels und Profil, um Zuschnitt und Unschärfe zu vermeiden.',
      category: 'Social Media',
      author: 'Pixselli Team',
      readTime: '6 Min. Lesezeit',
      heroSubtitle: 'Die idealen Maße für jedes Instagram-Format an einem Ort.',
    },
    'jpg-vs-png-vs-webp-which-image-format-should-you-use': {
      title: 'JPG vs PNG vs WebP: Welches Bildformat solltest du nutzen?',
      excerpt:
        'Vergleiche Qualität, Dateigröße, Transparenz und die besten Einsatzszenarien moderner Bildformate.',
      category: 'Dateiformate',
      author: 'Pixselli Team',
      readTime: '7 Min. Lesezeit',
      heroSubtitle: 'Ein praktischer Formatvergleich für Websites, Fotos und Grafiken.',
    },
    'the-complete-beginners-guide-to-image-optimization': {
      title: 'Der komplette Einsteiger-Guide zur Bildoptimierung',
      excerpt:
        'Starte bei null und lerne Komprimierung, Größenanpassung, Formatauswahl und SEO-freundliche Workflows.',
      category: 'Einsteiger-Guide',
      author: 'Pixselli Team',
      readTime: '8 Min. Lesezeit',
      heroSubtitle: 'Alles, was Einsteiger brauchen, um Bilder für Speed und Qualität zu optimieren.',
    },
    'how-to-convert-png-to-jpg-online-fast-free': {
      title: 'PNG online in JPG umwandeln (schnell und kostenlos)',
      excerpt:
        'Schritt-für-Schritt-Guide zur PNG-zu-JPG-Konvertierung mit Qualitäts-Tipps und schneller Fehlerbehebung.',
      category: 'Tutorial',
      author: 'Pixselli Team',
      readTime: '4 Min. Lesezeit',
      heroSubtitle: 'Ein schneller und praktischer Workflow für PNG zu JPG.',
    },
  },
  it: {
    'what-is-heic-format-complete-guide': {
      title: "Cos'è il formato HEIC? Guida completa al formato immagine iPhone",
      excerpt:
        'Tutto quello che devi sapere su HEIC: perché Apple lo usa, come aprire file HEIC su Windows e come convertire HEIC in JPG.',
      category: 'Guida formato',
      author: 'Team Pixselli',
      readTime: '8 min di lettura',
      heroSubtitle: 'Tutto su HEIC, compatibilità e conversione.',
    },
    'how-to-compress-images-without-losing-quality': {
      title: 'Come comprimere immagini senza perdere qualità',
      excerpt:
        'Tecniche pratiche per ridurre le dimensioni dei file mantenendo la qualità visiva per web e social media.',
      category: 'Guida',
      author: 'Team Pixselli',
      readTime: '6 min di lettura',
      heroSubtitle: 'Una guida semplice per rendere le immagini più leggere e veloci senza perdita visibile di qualità.',
    },
    'why-image-compression-is-important-for-seo-and-page-speed': {
      title: "Perché la compressione delle immagini è importante per SEO e velocità",
      excerpt:
        'Scopri come le immagini ottimizzate migliorano Core Web Vitals, posizionamento e conversioni.',
      category: 'SEO',
      author: 'Team Pixselli',
      readTime: '5 min di lettura',
      heroSubtitle: 'Come le immagini ottimizzate aiutano ranking e velocità del sito.',
    },
    'instagram-image-size-guide-posts-reels-stories-2025': {
      title: "Guida alle dimensioni immagini Instagram (post, reel, stories) — Aggiornata 2025",
      excerpt:
        'Usa le dimensioni giuste per feed, stories, reel e profilo per evitare ritagli e sfocature.',
      category: 'Social media',
      author: 'Team Pixselli',
      readTime: '6 min di lettura',
      heroSubtitle: 'Le dimensioni ideali per ogni formato Instagram in un unico posto.',
    },
    'jpg-vs-png-vs-webp-which-image-format-should-you-use': {
      title: 'JPG vs PNG vs WebP: quale formato immagine dovresti usare?',
      excerpt:
        'Confronta qualità, dimensione, trasparenza e i migliori scenari d’uso per i formati moderni.',
      category: 'Formati file',
      author: 'Team Pixselli',
      readTime: '7 min di lettura',
      heroSubtitle: 'Un confronto pratico di formati per siti web, foto e grafiche.',
    },
    'the-complete-beginners-guide-to-image-optimization': {
      title: "Guida completa per principianti all'ottimizzazione delle immagini",
      excerpt:
        'Parti da zero e impara compressione, ridimensionamento, scelta del formato e flussi SEO-friendly.',
      category: 'Guida principianti',
      author: 'Team Pixselli',
      readTime: '8 min di lettura',
      heroSubtitle: 'Tutto ciò che serve ai principianti per ottimizzare immagini per velocità e qualità.',
    },
    'how-to-convert-png-to-jpg-online-fast-free': {
      title: 'Come convertire PNG in JPG online (veloce e gratis)',
      excerpt:
        'Guida passo passo alla conversione PNG→JPG con consigli di qualità e troubleshooting rapido.',
      category: 'Tutorial',
      author: 'Team Pixselli',
      readTime: '4 min di lettura',
      heroSubtitle: 'Un flusso rapido e pratico per convertire PNG in JPG.',
    },
  },
};

export function buildBlogIndexPath(locale: BlogLocale): string {
  return locale === 'en' ? '/blog' : `/${locale}/blog`;
}

export function buildBlogPostPath(locale: BlogLocale, slug: string): string {
  return `${buildBlogIndexPath(locale)}/${slug}`;
}

export function getDateLocale(locale: BlogLocale): string {
  switch (locale) {
    case 'es':
      return 'es-ES';
    case 'pt':
      return 'pt-PT';
    case 'fr':
      return 'fr-FR';
    case 'de':
      return 'de-DE';
    case 'it':
      return 'it-IT';
    default:
      return 'en-US';
  }
}

export function getBlogPostLocalizedFields(slug: string, locale: BlogLocale): BlogPostLocalizedFields | null {
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return null;
  }

  if (locale === 'es') {
    return {
      title: post.title.es,
      excerpt: post.excerpt.es,
      category: post.category.es,
      author: post.author.es,
      readTime: post.readTime.es,
      heroSubtitle: post.heroSubtitle.es,
    };
  }

  if (locale === 'en') {
    return {
      title: post.title.en,
      excerpt: post.excerpt.en,
      category: post.category.en,
      author: post.author.en,
      readTime: post.readTime.en,
      heroSubtitle: post.heroSubtitle.en,
    };
  }

  const dict = BLOG_POST_TRANSLATIONS[locale as ExtraLocale];
  return (
    dict?.[slug] ?? {
      title: post.title.en,
      excerpt: post.excerpt.en,
      category: post.category.en,
      author: post.author.en,
      readTime: post.readTime.en,
      heroSubtitle: post.heroSubtitle.en,
    }
  );
}

export type BlogPostUiStrings = {
  backToBlog: string;
  quickTipsTitle: string;
  commonMistakesTitle: string;
  finalChecklistTitle: string;
  faqTitle: string;
};

const BLOG_POST_UI: Record<BlogLocale, BlogPostUiStrings> = {
  en: {
    backToBlog: 'Back to Blog',
    quickTipsTitle: 'Quick tips',
    commonMistakesTitle: 'Common mistakes',
    finalChecklistTitle: 'Final checklist',
    faqTitle: 'FAQs',
  },
  es: {
    backToBlog: 'Volver al blog',
    quickTipsTitle: 'Consejos rapidos',
    commonMistakesTitle: 'Errores comunes',
    finalChecklistTitle: 'Checklist final',
    faqTitle: 'Preguntas frecuentes',
  },
  pt: {
    backToBlog: 'Voltar ao blog',
    quickTipsTitle: 'Dicas rápidas',
    commonMistakesTitle: 'Erros comuns',
    finalChecklistTitle: 'Checklist final',
    faqTitle: 'Perguntas frequentes',
  },
  fr: {
    backToBlog: 'Retour au blog',
    quickTipsTitle: 'Conseils rapides',
    commonMistakesTitle: 'Erreurs fréquentes',
    finalChecklistTitle: 'Checklist final',
    faqTitle: 'FAQ',
  },
  de: {
    backToBlog: 'Zurück zum Blog',
    quickTipsTitle: 'Schnelle Tipps',
    commonMistakesTitle: 'Häufige Fehler',
    finalChecklistTitle: 'Finale Checkliste',
    faqTitle: 'Häufige Fragen',
  },
  it: {
    backToBlog: 'Torna al blog',
    quickTipsTitle: 'Consigli rapidi',
    commonMistakesTitle: 'Errori comuni',
    finalChecklistTitle: 'Checklist finale',
    faqTitle: 'Domande frequenti',
  },
};

export function getBlogPostUiStrings(locale: BlogLocale): BlogPostUiStrings {
  return BLOG_POST_UI[locale] ?? BLOG_POST_UI.en;
}

type TranslationDict = Record<string, string>;

export const BLOG_INDEX_TRANSLATIONS: Partial<Record<BlogLocale, TranslationDict>> = {
  pt: {
    Blog: 'Blog',
    'Image Optimization Guides': 'Guias de otimização de imagens',
    'Learn tips, workflows, and best practices for image quality, speed, and formats.':
      'Aprenda dicas, fluxos e boas práticas para qualidade, velocidade e formatos de imagem.',
    Featured: 'Destaque',
    'Read More': 'Ler mais',
    'All Articles': 'Todos os artigos',
    'No Articles Yet': 'Ainda não há artigos',
    'Check back soon for new guides and tutorials.': 'Volte em breve para novos guias e tutoriais.',
  },
  fr: {
    Blog: 'Blog',
    'Image Optimization Guides': "Guides d'optimisation d'images",
    'Learn tips, workflows, and best practices for image quality, speed, and formats.':
      "Découvrez des conseils, des workflows et des bonnes pratiques pour la qualité, la vitesse et les formats d'image.",
    Featured: 'À la une',
    'Read More': 'Lire la suite',
    'All Articles': 'Tous les articles',
    'No Articles Yet': "Pas d'articles pour le moment",
    'Check back soon for new guides and tutorials.': 'Revenez bientôt pour de nouveaux guides et tutoriels.',
  },
  de: {
    Blog: 'Blog',
    'Image Optimization Guides': 'Leitfäden zur Bildoptimierung',
    'Learn tips, workflows, and best practices for image quality, speed, and formats.':
      'Lerne Tipps, Workflows und Best Practices für Bildqualität, Geschwindigkeit und Formate.',
    Featured: 'Empfohlen',
    'Read More': 'Weiterlesen',
    'All Articles': 'Alle Artikel',
    'No Articles Yet': 'Noch keine Artikel',
    'Check back soon for new guides and tutorials.': 'Schau bald wieder vorbei für neue Guides und Tutorials.',
  },
  it: {
    Blog: 'Blog',
    'Image Optimization Guides': "Guide all'ottimizzazione delle immagini",
    'Learn tips, workflows, and best practices for image quality, speed, and formats.':
      'Scopri consigli, flussi di lavoro e best practice per qualità, velocità e formati delle immagini.',
    Featured: 'In evidenza',
    'Read More': 'Leggi di più',
    'All Articles': 'Tutti gli articoli',
    'No Articles Yet': 'Nessun articolo per ora',
    'Check back soon for new guides and tutorials.': 'Torna presto per nuove guide e tutorial.',
  },
};
