export type BlogSlug =
  | 'how-to-compress-images-without-losing-quality'
  | 'how-to-convert-png-to-jpg-online-fast-free'
  | 'instagram-image-size-guide-posts-reels-stories-2025'
  | 'jpg-vs-png-vs-webp-which-image-format-should-you-use'
  | 'the-complete-beginners-guide-to-image-optimization'
  | 'what-is-heic-format-complete-guide'
  | 'why-image-compression-is-important-for-seo-and-page-speed';

export interface SpanishSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface SpanishArticleContent {
  intro: string[];
  sections: SpanishSection[];
  quickTips: string[];
  cta: {
    title: string;
    description: string;
    href: string;
    label: string;
  };
}

export const blogSpanishArticles: Record<BlogSlug, SpanishArticleContent> = {
  'how-to-compress-images-without-losing-quality': {
    intro: [
      'Comprimir imagenes no significa perder calidad. Si eliges el formato correcto y ajustas bien la resolucion, puedes reducir mucho el peso sin que se vea borroso.',
      'Esta guia te ayuda a mantener una buena apariencia en web, redes y documentos sin conocimientos tecnicos avanzados.',
    ],
    sections: [
      {
        heading: '1) Elige el formato adecuado',
        paragraphs: [
          'JPG funciona bien para fotos con muchos colores. PNG es mejor para graficos con transparencias. WebP normalmente ofrece mejor equilibrio entre calidad y tamano.',
          'Antes de exportar, define donde se usara la imagen. El contexto decide el formato ideal.',
        ],
        bullets: [
          'Fotos: JPG o WebP',
          'Logos y iconos: PNG o WebP',
          'Sitios modernos: WebP como primera opcion',
        ],
      },
      {
        heading: '2) Ajusta dimensiones antes de comprimir',
        paragraphs: [
          'Muchos archivos son pesados porque tienen resolucion mayor a la necesaria. Si la imagen se mostrara a 1200px, no conviene subirla a 4000px.',
          'Reducir ancho y alto suele dar una mejora mayor que bajar calidad de forma agresiva.',
        ],
      },
      {
        heading: '3) Usa compresion gradual',
        paragraphs: [
          'Comienza con compresion moderada y revisa el resultado. Luego aumenta poco a poco hasta encontrar un punto donde el archivo sea ligero y la imagen siga limpia.',
          'Evita una sola compresion extrema porque puede generar artefactos visibles.',
        ],
      },
    ],
    quickTips: [
      'Objetivo para web: menos de 300 KB por imagen principal.',
      'Para miniaturas, intenta mantener menos de 100 KB.',
      'Guarda una copia original sin compresion para ediciones futuras.',
    ],
    cta: {
      title: 'Comprime tus imagenes ahora',
      description: 'Prueba una compresion rapida y ajusta calidad en segundos.',
      href: '/es/image-compressor',
      label: 'Abrir compresor',
    },
  },
  'how-to-convert-png-to-jpg-online-fast-free': {
    intro: [
      'Convertir PNG a JPG es util cuando necesitas archivos mas ligeros para email, formularios o paginas web.',
      'El proceso correcto evita cambios de color y reduce peso sin complicaciones.',
    ],
    sections: [
      {
        heading: '1) Cuando conviene pasar de PNG a JPG',
        paragraphs: [
          'Si la imagen no necesita transparencia y es una foto normal, JPG suele ser mejor porque pesa menos.',
          'Para fondos blancos, productos y fotos de telefono, JPG es una opcion practica.',
        ],
      },
      {
        heading: '2) Ajustes recomendados',
        paragraphs: [
          'Usa calidad media-alta para mantener nitidez. Si el archivo sigue grande, reduce dimensiones antes de bajar mas calidad.',
          'Comprueba que no haya texto pequeno en zonas con degradados, porque ahi se notan antes las perdidas.',
        ],
        bullets: [
          'Calidad inicial sugerida: 75-85',
          'Ancho para web: 1200-1600 px',
          'Revisa color y contraste tras convertir',
        ],
      },
      {
        heading: '3) Flujo rapido en linea',
        paragraphs: [
          'Sube el PNG, selecciona JPG, ajusta calidad y descarga. El proceso dura pocos segundos en la mayoria de casos.',
          'Si necesitas lote, convierte varias imagenes juntas para ahorrar tiempo.',
        ],
      },
    ],
    quickTips: [
      'Evita reconvertir el mismo JPG varias veces.',
      'Mantiene una copia PNG si el diseno requiere transparencia luego.',
      'Nombra archivos con fecha o version para no confundirlos.',
    ],
    cta: {
      title: 'Convierte PNG a JPG en segundos',
      description: 'Sube, convierte y descarga sin instalar software.',
      href: '/es/png-to-jpg',
      label: 'Abrir convertidor',
    },
  },
  'instagram-image-size-guide-posts-reels-stories-2025': {
    intro: [
      'Publicar con medidas correctas en Instagram evita recortes y mejora la calidad visual.',
      'En 2025 conviene preparar cada pieza segun el tipo de contenido: post, story o reel.',
    ],
    sections: [
      {
        heading: '1) Medidas clave que debes recordar',
        paragraphs: [
          'Post vertical: 1080 x 1350. Story y reel: 1080 x 1920. Post cuadrado: 1080 x 1080.',
          'Trabajar con estas dimensiones ayuda a mostrar el contenido completo en la app.',
        ],
      },
      {
        heading: '2) Zona segura para texto',
        paragraphs: [
          'En stories y reels deja espacio en bordes superior e inferior para que botones e interfaz no tapen informacion.',
          'Coloca titulos importantes en la parte central para mejor lectura en movil.',
        ],
      },
      {
        heading: '3) Exportacion recomendada',
        paragraphs: [
          'Usa JPG de buena calidad para imagenes estaticas y manten archivos ligeros para carga rapida.',
          'Antes de publicar, revisa una vista previa en telefono para detectar cortes.',
        ],
      },
    ],
    quickTips: [
      'Mantener estilo consistente en carruseles mejora identidad visual.',
      'Evita texto demasiado pequeno para usuarios en pantallas pequenas.',
      'Comprueba color y brillo con modo claro y oscuro del telefono.',
    ],
    cta: {
      title: 'Prepara imagenes para Instagram',
      description: 'Redimensiona rapido a medidas exactas para posts y stories.',
      href: '/es/image-resizer',
      label: 'Abrir redimensionador',
    },
  },
  'jpg-vs-png-vs-webp-which-image-format-should-you-use': {
    intro: [
      'No existe un formato unico para todo. JPG, PNG y WebP funcionan mejor en escenarios distintos.',
      'Elegir bien mejora velocidad de carga y calidad percibida por el usuario.',
    ],
    sections: [
      {
        heading: '1) JPG: ideal para fotos',
        paragraphs: [
          'JPG comprime mucho y mantiene buena apariencia en fotografias.',
          'No soporta transparencia y no es la mejor opcion para logos con bordes finos.',
        ],
      },
      {
        heading: '2) PNG: mejor para graficos limpios',
        paragraphs: [
          'PNG conserva detalles y soporta fondo transparente, por eso se usa en iconos y elementos de interfaz.',
          'Como suele pesar mas, conviene usarlo solo donde realmente aporta valor.',
        ],
      },
      {
        heading: '3) WebP: equilibrio moderno',
        paragraphs: [
          'WebP ofrece archivos menores que JPG y PNG en muchos casos, con buena calidad.',
          'Para web actual, WebP es una opcion muy recomendable para mejorar rendimiento.',
        ],
      },
    ],
    quickTips: [
      'Fotos: comienza con JPG o WebP.',
      'Transparencia: usa PNG o WebP.',
      'Prioridad velocidad web: prueba WebP primero.',
    ],
    cta: {
      title: 'Convierte al formato correcto',
      description: 'Usa nuestras herramientas para pasar entre JPG, PNG y WebP.',
      href: '/es/jpg-to-webp',
      label: 'Convertir ahora',
    },
  },
  'the-complete-beginners-guide-to-image-optimization': {
    intro: [
      'La optimizacion de imagenes mejora velocidad, SEO y experiencia de usuario al mismo tiempo.',
      'Con pasos simples puedes publicar imagenes mas ligeras sin perder impacto visual.',
    ],
    sections: [
      {
        heading: '1) Redimensionar antes de subir',
        paragraphs: [
          'Subir imagenes enormes es una de las causas mas comunes de paginas lentas.',
          'Ajusta las dimensiones al uso real en pantalla para eliminar peso innecesario.',
        ],
      },
      {
        heading: '2) Comprimir con criterio',
        paragraphs: [
          'Aplica compresion progresiva y compara resultados. El objetivo es equilibrar calidad visual y rendimiento.',
          'Cada tipo de imagen necesita un nivel distinto, por eso conviene revisar ejemplos reales.',
        ],
      },
      {
        heading: '3) Elegir formato y nombre SEO',
        paragraphs: [
          'Selecciona formato segun contenido y usa nombres de archivo descriptivos en lugar de codigos genericos.',
          'Agregar texto alternativo claro tambien ayuda a accesibilidad y posicionamiento.',
        ],
      },
    ],
    quickTips: [
      'Activa lazy loading para imagenes fuera de pantalla inicial.',
      'Usa dimensiones fijas para evitar saltos de layout.',
      'Revisa Core Web Vitals despues de optimizar.',
    ],
    cta: {
      title: 'Empieza a optimizar hoy',
      description: 'Reduce tamano, mejora carga y publica imagenes listas para SEO.',
      href: '/es/compress-for-web',
      label: 'Optimizar imagenes',
    },
  },
  'what-is-heic-format-complete-guide': {
    intro: [
      'HEIC es un formato moderno usado por iPhone para guardar fotos con buen detalle y menor tamano.',
      'Aunque es eficiente, puede causar problemas de compatibilidad en algunos equipos y apps.',
    ],
    sections: [
      {
        heading: '1) Por que Apple usa HEIC',
        paragraphs: [
          'HEIC permite ahorrar espacio sin perder demasiada calidad. Esto ayuda a almacenar mas fotos en el dispositivo.',
          'Es parte del estandar HEIF y esta pensado para rendimiento en ecosistemas actuales.',
        ],
      },
      {
        heading: '2) Problemas comunes de apertura',
        paragraphs: [
          'En Windows o plataformas antiguas, algunos archivos HEIC no se abren de forma directa.',
          'Cuando compartes imagenes con otras personas, JPG sigue siendo mas universal.',
        ],
      },
      {
        heading: '3) Cuando conviene convertir a JPG o PNG',
        paragraphs: [
          'Si vas a subir fotos a formularios, webs o apps con soporte limitado, conviene convertir.',
          'Para edicion avanzada o compatibilidad completa, JPG y PNG siguen siendo opciones seguras.',
        ],
      },
    ],
    quickTips: [
      'Guarda HEIC original si quieres conservar maxima eficiencia.',
      'Convierte a JPG para compartir sin fricciones.',
      'Para graficos con transparencia, usa PNG.',
    ],
    cta: {
      title: 'Convierte HEIC facilmente',
      description: 'Pasa de HEIC a JPG o PNG en unos clics.',
      href: '/es/heic-to-jpg',
      label: 'Abrir HEIC a JPG',
    },
  },
  'why-image-compression-is-important-for-seo-and-page-speed': {
    intro: [
      'Las imagenes pesadas afectan velocidad de carga y eso perjudica SEO, conversion y retencion.',
      'Comprimir correctamente es una mejora tecnica con impacto directo en resultados de negocio.',
    ],
    sections: [
      {
        heading: '1) Velocidad y experiencia de usuario',
        paragraphs: [
          'Paginas rapidas reducen rebote y facilitan navegacion en movil. Cada segundo extra puede bajar conversiones.',
          'Optimizar imagenes suele ser una de las mejoras mas rapidas de implementar.',
        ],
      },
      {
        heading: '2) SEO y Core Web Vitals',
        paragraphs: [
          'Google valora sitios rapidos y estables. Imagenes ligeras ayudan en metricas clave como LCP.',
          'Al mejorar tiempos de carga, aumentas la probabilidad de mejor posicionamiento organico.',
        ],
      },
      {
        heading: '3) Proceso recomendado',
        paragraphs: [
          'Redimensiona, comprime y luego valida en herramientas de rendimiento. Repite el proceso en imagenes mas importantes primero.',
          'Con un flujo simple puedes mantener calidad y acelerar todo el sitio.',
        ],
      },
    ],
    quickTips: [
      'Prioriza optimizar imagenes del primer bloque visible.',
      'Usa formatos modernos cuando sea posible.',
      'Controla peso por imagen para mantener consistencia en cada pagina.',
    ],
    cta: {
      title: 'Mejora SEO con imagenes ligeras',
      description: 'Comprime archivos y acelera la carga de tu web.',
      href: '/es/compress-for-web',
      label: 'Comprimir para web',
    },
  },
};
