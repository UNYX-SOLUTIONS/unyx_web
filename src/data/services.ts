// src/data/services.ts
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'web-development',
    icon: 'Code',
    title: 'Desarrollo Web',
    description: 'Creamos aplicaciones web modernas, rápidas y escalables con las últimas tecnologías.',
    features: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'mobile-apps',
    icon: 'Smartphone',
    title: 'Apps Móviles',
    description: 'Desarrollamos aplicaciones móviles nativas y cross-platform para iOS y Android.',
    features: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    id: 'cloud-solutions',
    icon: 'Cloud',
    title: 'Soluciones Cloud',
    description: 'Implementamos infraestructura cloud escalable y segura para tu negocio.',
    features: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
  },
  {
    id: 'ai-ml',
    icon: 'Brain',
    title: 'IA & Machine Learning',
    description: 'Integramos inteligencia artificial y machine learning en tus procesos.',
    features: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
  },
  {
    id: 'ux-ui',
    icon: 'Palette',
    title: 'UX/UI Design',
    description: 'Diseñamos experiencias de usuario intuitivas y atractivas.',
    features: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
  },
  {
    id: 'consulting',
    icon: 'Briefcase',
    title: 'Consultoría Tecnológica',
    description: 'Asesoramos a tu empresa en la transformación digital y estrategia tecnológica.',
    features: ['Estrategia', 'Arquitectura', 'DevOps', 'Agile'],
  },
];