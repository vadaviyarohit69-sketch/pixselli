export type LocalizedText = {
  en: string;
  es: string;
};

export type BlogPostEntry = {
  id: number;
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  coverImage: string;
  category: LocalizedText;
  categoryColor: 'indigo' | 'purple' | 'teal' | 'pink' | 'blue' | 'emerald' | 'orange';
  author: LocalizedText;
  date: string;
  readTime: LocalizedText;
  featured: boolean;
  heroSubtitle: LocalizedText;
};

export const blogPostsData: BlogPostEntry[] = [
  {
    id: 7,
    slug: 'what-is-heic-format-complete-guide',
    title: {
      en: 'What is HEIC Format? Complete Guide to iPhone Image Format',
      es: 'Que es el formato HEIC? Guia completa del formato de imagen de iPhone',
    },
    excerpt: {
      en: 'Everything you need to know about HEIC: why Apple uses it, how to open HEIC files on Windows, and how to convert HEIC to JPG.',
      es: 'Todo lo que necesitas saber sobre HEIC: por que Apple lo usa, como abrir archivos HEIC en Windows y como convertir HEIC a JPG.',
    },
    coverImage: '/blog/heic-guide.jpg',
    category: { en: 'Format Guide', es: 'Guia de formato' },
    categoryColor: 'indigo',
    author: { en: 'Pixselli Team', es: 'Equipo Pixselli' },
    date: '2025-12-20',
    readTime: { en: '8 min read', es: '8 min de lectura' },
    featured: true,
    heroSubtitle: {
      en: 'Everything you need to know about HEIC, compatibility, and conversion.',
      es: 'Todo lo que necesitas saber sobre HEIC, compatibilidad y conversion.',
    },
  },
  {
    id: 1,
    slug: 'how-to-compress-images-without-losing-quality',
    title: {
      en: 'How to Compress Images Without Losing Quality',
      es: 'Como comprimir imagenes sin perder calidad',
    },
    excerpt: {
      en: 'Learn practical techniques to reduce image file size while maintaining visual quality for web and social media.',
      es: 'Aprende tecnicas practicas para reducir el tamano de imagen manteniendo calidad visual para web y redes sociales.',
    },
    coverImage: '/Compress-Images-Without Losing-Quality.webp',
    category: { en: 'Guide', es: 'Guia' },
    categoryColor: 'purple',
    author: { en: 'Pixselli Team', es: 'Equipo Pixselli' },
    date: '2025-12-05',
    readTime: { en: '6 min read', es: '6 min de lectura' },
    featured: false,
    heroSubtitle: {
      en: 'A simple guide to make your images smaller and faster without visible quality loss.',
      es: 'Una guia simple para hacer tus imagenes mas ligeras y rapidas sin perdida visible de calidad.',
    },
  },
  {
    id: 2,
    slug: 'why-image-compression-is-important-for-seo-and-page-speed',
    title: {
      en: 'Why Image Compression Is Important for SEO and Page Speed',
      es: 'Por que la compresion de imagenes es importante para SEO y velocidad',
    },
    excerpt: {
      en: 'Understand how optimized images improve Core Web Vitals, search rankings, and conversion performance.',
      es: 'Entiende como las imagenes optimizadas mejoran Core Web Vitals, posicionamiento y conversiones.',
    },
    coverImage: '/blog/seo-guide.jpg',
    category: { en: 'SEO', es: 'SEO' },
    categoryColor: 'teal',
    author: { en: 'Pixselli Team', es: 'Equipo Pixselli' },
    date: '2025-12-05',
    readTime: { en: '5 min read', es: '5 min de lectura' },
    featured: false,
    heroSubtitle: {
      en: 'Learn how optimized images help rankings and website speed.',
      es: 'Aprende como las imagenes optimizadas ayudan al ranking y velocidad web.',
    },
  },
  {
    id: 3,
    slug: 'instagram-image-size-guide-posts-reels-stories-2025',
    title: {
      en: 'Instagram Image Size Guide (Posts, Reels, Stories) - 2025 Updated',
      es: 'Guia de tamanos para Instagram (posts, reels, stories) - Actualizado 2025',
    },
    excerpt: {
      en: 'Use the right dimensions for feed posts, stories, reels, and profile visuals to avoid crop and blur issues.',
      es: 'Usa dimensiones correctas para posts, stories, reels y perfil para evitar recortes y desenfoque.',
    },
    coverImage: '/blog/instagram-guide.jpg',
    category: { en: 'Social Media', es: 'Redes sociales' },
    categoryColor: 'pink',
    author: { en: 'Pixselli Team', es: 'Equipo Pixselli' },
    date: '2025-11-20',
    readTime: { en: '6 min read', es: '6 min de lectura' },
    featured: false,
    heroSubtitle: {
      en: 'Get the ideal dimensions for every Instagram format in one place.',
      es: 'Consigue las dimensiones ideales para cada formato de Instagram en un solo lugar.',
    },
  },
  {
    id: 4,
    slug: 'jpg-vs-png-vs-webp-which-image-format-should-you-use',
    title: {
      en: 'JPG vs PNG vs WEBP: Which Image Format Should You Use?',
      es: 'JPG vs PNG vs WEBP: que formato de imagen deberias usar?',
    },
    excerpt: {
      en: 'Compare quality, file size, transparency support, and best-use scenarios for modern image formats.',
      es: 'Compara calidad, tamano, transparencia y casos ideales para formatos de imagen modernos.',
    },
    coverImage: '/blog/formats-guide.jpg',
    category: { en: 'File Formats', es: 'Formatos de archivo' },
    categoryColor: 'blue',
    author: { en: 'Pixselli Team', es: 'Equipo Pixselli' },
    date: '2025-11-23',
    readTime: { en: '7 min read', es: '7 min de lectura' },
    featured: false,
    heroSubtitle: {
      en: 'A practical format comparison for websites, photos, and graphics.',
      es: 'Una comparacion practica de formatos para sitios web, fotos y graficos.',
    },
  },
  {
    id: 5,
    slug: 'the-complete-beginners-guide-to-image-optimization',
    title: {
      en: "The Complete Beginner's Guide to Image Optimization",
      es: 'Guia completa para principiantes sobre optimizacion de imagenes',
    },
    excerpt: {
      en: 'Start from zero and learn compression, resizing, format selection, and SEO-friendly image workflows.',
      es: 'Empieza desde cero y aprende compresion, redimensionado, formato y flujos SEO para imagenes.',
    },
    coverImage: '/blog/optimization-guide.jpg',
    category: { en: 'Beginner Guide', es: 'Guia para principiantes' },
    categoryColor: 'emerald',
    author: { en: 'Pixselli Team', es: 'Equipo Pixselli' },
    date: '2025-11-25',
    readTime: { en: '8 min read', es: '8 min de lectura' },
    featured: false,
    heroSubtitle: {
      en: 'Everything beginners need to optimize images for speed and quality.',
      es: 'Todo lo que un principiante necesita para optimizar imagenes en velocidad y calidad.',
    },
  },
  {
    id: 6,
    slug: 'how-to-convert-png-to-jpg-online-fast-free',
    title: {
      en: 'How to Convert PNG to JPG Online (Fast and Free)',
      es: 'Como convertir PNG a JPG online (rapido y gratis)',
    },
    excerpt: {
      en: 'Step-by-step PNG to JPG conversion guide with quality tips and quick troubleshooting.',
      es: 'Guia paso a paso para convertir PNG a JPG con consejos de calidad y solucion rapida de problemas.',
    },
    coverImage: '/blog/png-to-jpg-guide.jpg',
    category: { en: 'Tutorial', es: 'Tutorial' },
    categoryColor: 'orange',
    author: { en: 'Pixselli Team', es: 'Equipo Pixselli' },
    date: '2025-11-28',
    readTime: { en: '4 min read', es: '4 min de lectura' },
    featured: false,
    heroSubtitle: {
      en: 'A quick and practical conversion workflow for PNG to JPG.',
      es: 'Un flujo rapido y practico para convertir PNG a JPG.',
    },
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPostsData.find((post) => post.slug === slug);
}
