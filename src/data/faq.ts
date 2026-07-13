// src/data/faq.ts
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: '¿Cuánto tiempo toma desarrollar un proyecto?',
    answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web corporativo puede tomar 4-6 semanas, mientras que una aplicación compleja puede tomar 3-6 meses. Te daremos un cronograma detallado durante la primera consulta.'
  },
  {
    id: '2',
    question: '¿Qué tecnologías utilizan?',
    answer: 'Trabajamos con las tecnologías más modernas del mercado: React, Next.js, Node.js, TypeScript, Python, AWS, entre otras. Seleccionamos la mejor tecnología para cada proyecto específico.'
  },
  {
    id: '3',
    question: '¿Ofrecen soporte post-lanzamiento?',
    answer: 'Sí, ofrecemos diferentes planes de soporte y mantenimiento post-lanzamiento. Desde soporte básico hasta servicios de mantenimiento continuo y mejoras iterativas.'
  },
  {
    id: '4',
    question: '¿Cómo manejan la seguridad de los datos?',
    answer: 'La seguridad es nuestra prioridad. Implementamos las mejores prácticas de seguridad, encriptación de datos, autenticación robusta y cumplimos con estándares como GDPR y otras regulaciones de protección de datos.'
  }
];