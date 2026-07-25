// src/data/services.ts
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  fullDescription?: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  price?: string;
  image?: string; // ✅ Campo para la imagen de fondo
  category?: string; // ✅ Campo para categoría (opcional)
}

export const services: Service[] = [
  {
    id: 'web-development',
    icon: 'Code',
    title: 'Desarrollo Web',
    description: 'Creamos aplicaciones web modernas, rápidas y escalables con las últimas tecnologías.',
    fullDescription: 'Desarrollamos aplicaciones web a medida utilizando las tecnologías más modernas del mercado. Desde sitios corporativos hasta aplicaciones complejas, nos aseguramos de que tu negocio tenga una presencia digital impecable.',
    features: [
      'Sitios web corporativos',
      'E-commerce',
      'Aplicaciones web progresivas (PWA)',
      'Sistemas de gestión de contenido',
      'APIs y microservicios'
    ],
    benefits: [
      'Rendimiento optimizado',
      'Seguridad de primer nivel',
      'Experiencia de usuario excepcional',
      'Escalabilidad garantizada'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    price: 'Desde $5,000',
    image: '/servicio1.png', // ✅ Imagen para el card
    category: 'Desarrollo' // ✅ Categoría
  },
  {
    id: 'mobile-apps',
    icon: 'Smartphone',
    title: 'Apps Móviles',
    description: 'Desarrollamos aplicaciones móviles nativas y cross-platform para iOS y Android.',
    fullDescription: 'Creamos experiencias móviles que conectan con tus usuarios. Desarrollamos apps nativas y cross-platform que destacan en las tiendas de aplicaciones por su rendimiento y diseño.',
    features: [
      'Apps nativas iOS y Android',
      'Apps cross-platform (React Native)',
      'Apps para tabletas',
      'Apps con realidad aumentada',
      'Integración con wearables'
    ],
    benefits: [
      'Experiencia nativa',
      'Rendimiento optimizado',
      'UI/UX diseñado para móviles',
      'Publicación en App Store y Google Play'
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase'],
    price: 'Desde $8,000',
    image: '/servicio2.jpg',
    category: 'Mobile'
  },
  {
    id: 'cloud-solutions',
    icon: 'Cloud',
    title: 'Soluciones Cloud',
    description: 'Implementamos infraestructura cloud escalable y segura para tu negocio.',
    fullDescription: 'Migramos y optimizamos tu infraestructura a la nube, asegurando escalabilidad, seguridad y disponibilidad 24/7 para tus aplicaciones y datos.',
    features: [
      'Migración a la nube',
      'Arquitectura serverless',
      'Contenedores y orquestación',
      'Alta disponibilidad',
      'Backup y recuperación'
    ],
    benefits: [
      'Reducción de costos operativos',
      'Escalabilidad automática',
      'Seguridad enterprise',
      'Disponibilidad garantizada'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    price: 'Desde $3,000',
    image: '/servicio4.jpg',
    category: 'Infraestructura'
  },
  {
    id: 'ai-ml',
    icon: 'Brain',
    title: 'IA & Machine Learning',
    description: 'Integramos inteligencia artificial y machine learning en tus procesos.',
    fullDescription: 'Transformamos tus datos en decisiones inteligentes. Implementamos soluciones de IA y ML que automatizan procesos, predicen tendencias y mejoran la experiencia de tus clientes.',
    features: [
      'Modelos de machine learning',
      'Procesamiento de lenguaje natural',
      'Visión por computadora',
      'Análisis predictivo',
      'Automatización inteligente'
    ],
    benefits: [
      'Decisiones basadas en datos',
      'Automatización de procesos',
      'Mejora continua',
      'Ventaja competitiva'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn'],
    price: 'Desde $10,000',
    image: '/servicio5.jpg',
    category: 'Inteligencia Artificial'
  },
  {
    id: 'ux-ui',
    icon: 'Palette',
    title: 'UX/UI Design',
    description: 'Diseñamos experiencias de usuario intuitivas y atractivas.',
    fullDescription: 'Creamos interfaces que tus usuarios amarán. Diseñamos experiencias digitales centradas en el usuario que mejoran la conversión y fidelización.',
    features: [
      'Investigación de usuarios',
      'Diseño de interfaces',
      'Prototipado interactivo',
      'Pruebas de usabilidad',
      'Design systems'
    ],
    benefits: [
      'Mayor satisfacción del usuario',
      'Aumento de conversiones',
      'Reducción de errores',
      'Diferenciación en el mercado'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin'],
    price: 'Desde $4,000',
    image: '/servicio7.png',
    category: 'Diseño'
  },
  {
    id: 'consulting',
    icon: 'Briefcase',
    title: 'Consultoría Tecnológica',
    description: 'Asesoramos a tu empresa en la transformación digital y estrategia tecnológica.',
    fullDescription: 'Te guiamos en tu viaje de transformación digital. Evaluamos tu situación actual y diseñamos una hoja de ruta tecnológica que impulse el crecimiento de tu negocio.',
    features: [
      'Evaluación tecnológica',
      'Estrategia digital',
      'Arquitectura de software',
      'DevOps y metodologías ágiles',
      'Optimización de procesos'
    ],
    benefits: [
      'Visión clara del futuro tecnológico',
      'Reducción de riesgos',
      'Optimización de recursos',
      'Innovación continua'
    ],
    technologies: ['Agile', 'DevOps', 'Cloud Architecture', 'Digital Strategy'],
    price: 'Desde $2,500',
    image: '/servicio6.jpg',
    category: 'Consultoría'
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Descubrimiento',
    description: 'Analizamos tus necesidades y objetivos para entender tu negocio y sus desafíos.'
  },
  {
    step: '02',
    title: 'Estrategia',
    description: 'Diseñamos una estrategia personalizada con la mejor tecnología para tu caso.'
  },
  {
    step: '03',
    title: 'Desarrollo',
    description: 'Construimos tu solución con metodologías ágiles y estándares de calidad.'
  },
  {
    step: '04',
    title: 'Lanzamiento',
    description: 'Implementamos y lanzamos tu producto con soporte continuo.'
  }
];