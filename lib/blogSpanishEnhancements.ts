import type { BlogSlug } from '@/lib/blogSpanishArticles';

export interface SpanishFaqItem {
  question: string;
  answer: string;
}

export interface SpanishPostEnhancement {
  commonMistakes: string[];
  finalChecklist: string[];
  faqs: SpanishFaqItem[];
}

export const blogSpanishEnhancements: Record<BlogSlug, SpanishPostEnhancement> = {
  'how-to-compress-images-without-losing-quality': {
    commonMistakes: [
      'Aplicar compresion maxima en la primera exportacion.',
      'No revisar la imagen en movil y escritorio antes de publicar.',
      'Subir archivos gigantes aun cuando la imagen se vera pequena.',
    ],
    finalChecklist: [
      'Formato elegido segun tipo de imagen (foto, logo, banner).',
      'Dimensiones ajustadas al contenedor real del sitio.',
      'Peso final validado para web y redes sociales.',
      'Copia original guardada para futuras ediciones.',
    ],
    faqs: [
      {
        question: 'Que nivel de calidad debo usar para JPG?',
        answer: 'Como punto de inicio usa 75-85. Luego compara visualmente y ajusta hasta lograr equilibrio entre peso y calidad.',
      },
      {
        question: 'Comprimir varias veces el mismo archivo afecta?',
        answer: 'Si. Repetir compresion sobre el mismo archivo puede degradar la imagen. Siempre parte del original.',
      },
      {
        question: 'Para web es mejor JPG o WebP?',
        answer: 'En muchos casos WebP da mejor relacion calidad-peso. JPG sigue siendo una alternativa fuerte para compatibilidad amplia.',
      },
    ],
  },
  'how-to-convert-png-to-jpg-online-fast-free': {
    commonMistakes: [
      'Convertir logos con transparencia a JPG cuando se necesita fondo transparente.',
      'Bajar demasiada calidad y perder detalle en texto pequeno.',
      'No revisar color despues de la conversion.',
    ],
    finalChecklist: [
      'Confirma que la imagen no necesita transparencia.',
      'Selecciona calidad media-alta como punto inicial.',
      'Revisa nitidez en zoom 100%.',
      'Descarga con nombre claro para evitar confusiones de version.',
    ],
    faqs: [
      {
        question: 'Cuando no debo convertir PNG a JPG?',
        answer: 'Si necesitas transparencia o bordes muy limpios, mejor conservar PNG o usar WebP con soporte de transparencia.',
      },
      {
        question: 'JPG siempre pesa menos que PNG?',
        answer: 'Casi siempre en fotos, pero no en todos los casos. Conviene comparar resultado final antes de decidir.',
      },
      {
        question: 'Puedo convertir varias imagenes juntas?',
        answer: 'Si, en flujo por lotes puedes ahorrar tiempo y mantener ajustes consistentes.',
      },
    ],
  },
  'instagram-image-size-guide-posts-reels-stories-2025': {
    commonMistakes: [
      'Usar una sola medida para todos los formatos de Instagram.',
      'Colocar texto importante pegado a bordes.',
      'Exportar archivos muy pesados para contenido diario.',
    ],
    finalChecklist: [
      'Dimension correcta segun post, story o reel.',
      'Zona segura respetada para elementos clave.',
      'Texto principal legible en pantalla movil.',
      'Vista previa final revisada antes de publicar.',
    ],
    faqs: [
      {
        question: 'Cual es la medida recomendada para stories?',
        answer: 'La referencia practica es 1080 x 1920, manteniendo una zona segura para que la interfaz no tape contenido.',
      },
      {
        question: 'Que formato conviene para subir imagenes?',
        answer: 'Para piezas estaticas, JPG optimizado suele funcionar bien. Ajusta compresion para evitar archivos pesados.',
      },
      {
        question: 'Debo disenar distinto para reel cover?',
        answer: 'Si. Mantener foco visual centrado mejora la vista previa y evita recortes en el perfil.',
      },
    ],
  },
  'jpg-vs-png-vs-webp-which-image-format-should-you-use': {
    commonMistakes: [
      'Usar PNG para fotos grandes sin necesidad de transparencia.',
      'Convertir todo a un solo formato por costumbre.',
      'No validar compatibilidad segun plataforma de destino.',
    ],
    finalChecklist: [
      'Formato decidido segun tipo de contenido.',
      'Peso final comparado entre 2 opciones antes de publicar.',
      'Compatibilidad verificada para navegadores objetivo.',
      'Calidad visual comprobada en dispositivos reales.',
    ],
    faqs: [
      {
        question: 'WebP reemplaza siempre a JPG y PNG?',
        answer: 'No siempre, pero en muchos escenarios web ofrece mejor eficiencia. Evalua compatibilidad y flujo de trabajo.',
      },
      {
        question: 'Para logos que formato conviene?',
        answer: 'PNG o WebP con transparencia son opciones fuertes para mantener bordes limpios.',
      },
      {
        question: 'Que formato uso para fotografias de producto?',
        answer: 'JPG o WebP. Elige segun balance entre peso, calidad y plataforma de publicacion.',
      },
    ],
  },
  'the-complete-beginners-guide-to-image-optimization': {
    commonMistakes: [
      'Optimizar solo al final y no durante el flujo.',
      'Ignorar dimensiones reales de visualizacion.',
      'No medir impacto en Core Web Vitals despues de cambios.',
    ],
    finalChecklist: [
      'Imagen redimensionada al uso real.',
      'Compresion aplicada sin perdida visual relevante.',
      'Formato elegido con criterio de rendimiento.',
      'Alt text y nombre de archivo listos para SEO.',
    ],
    faqs: [
      {
        question: 'Por donde empieza un principiante?',
        answer: 'Empieza por redimensionar y luego comprimir. Es el paso mas simple con mayor impacto en rendimiento.',
      },
      {
        question: 'Cada imagen necesita el mismo nivel de compresion?',
        answer: 'No. Fotos, banners y graficos responden distinto. Conviene ajustar segun tipo de contenido.',
      },
      {
        question: 'Optimizar imagenes mejora SEO de verdad?',
        answer: 'Si, porque reduce tiempos de carga y mejora experiencia de usuario, factores que influyen en posicionamiento.',
      },
    ],
  },
  'what-is-heic-format-complete-guide': {
    commonMistakes: [
      'Asumir que todos los dispositivos abren HEIC sin problemas.',
      'Compartir HEIC en formularios que aceptan solo JPG/PNG.',
      'Eliminar el original antes de validar la conversion.',
    ],
    finalChecklist: [
      'Define si necesitas compatibilidad universal.',
      'Convierte a JPG para compartir facilmente.',
      'Conserva HEIC original cuando sea importante.',
      'Verifica apertura del archivo final en el destino real.',
    ],
    faqs: [
      {
        question: 'HEIC tiene mejor calidad que JPG?',
        answer: 'Puede ofrecer buena calidad con menor peso, pero depende del contenido y del flujo de conversion.',
      },
      {
        question: 'Por que algunos sistemas no abren HEIC?',
        answer: 'Porque no todos los programas traen soporte nativo. En esos casos conviene convertir a JPG o PNG.',
      },
      {
        question: 'Que formato uso para enviar por email?',
        answer: 'JPG suele ser la opcion mas segura por compatibilidad amplia.',
      },
    ],
  },
  'why-image-compression-is-important-for-seo-and-page-speed': {
    commonMistakes: [
      'Centrarse solo en codigo y olvidar optimizar imagenes.',
      'No priorizar imagenes del primer bloque visible.',
      'Publicar sin revisar impacto en LCP.',
    ],
    finalChecklist: [
      'Imagenes clave comprimidas antes de deploy.',
      'Peso por archivo controlado para consistencia.',
      'Formato moderno evaluado para paginas principales.',
      'Metricas de rendimiento revisadas despues de publicar.',
    ],
    faqs: [
      {
        question: 'Comprimir imagenes ayuda realmente a SEO?',
        answer: 'Si. Reduce tiempo de carga y mejora senales de experiencia, lo cual puede favorecer posicionamiento.',
      },
      {
        question: 'Que metrica se beneficia mas?',
        answer: 'LCP suele mejorar cuando optimizas imagenes grandes visibles al inicio de la pagina.',
      },
      {
        question: 'Debo comprimir todas las imagenes por igual?',
        answer: 'No. Prioriza hero images y elementos pesados; luego optimiza el resto de forma gradual.',
      },
    ],
  },
};
