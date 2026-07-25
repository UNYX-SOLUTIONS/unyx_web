// src/data/values.ts
export interface Value {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    id: 'innovation',
    icon: 'Lightbulb',
    title: 'Innovación',
    description: 'Buscamos constantemente nuevas formas de resolver problemas y crear soluciones que marquen la diferencia.'
  },
  {
    id: 'quality',
    icon: 'CheckCircle',
    title: 'Calidad',
    description: 'Nos comprometemos con la excelencia en cada proyecto, asegurando resultados que superan las expectativas.'
  },
  {
    id: 'commitment',
    icon: 'Heart',
    title: 'Compromiso',
    description: 'Nos involucramos al 100% con los objetivos de nuestros clientes, como si fueran nuestros propios proyectos.'
  },
  {
    id: 'transparency',
    icon: 'Shield',
    title: 'Transparencia',
    description: 'Mantenemos una comunicación abierta y honesta en todas las etapas del proyecto, generando confianza.'
  },
  {
    id: 'growth',
    icon: 'Rocket',
    title: 'Crecimiento',
    description: 'Impulsamos el crecimiento de nuestros clientes a través de soluciones tecnológicas escalables y sostenibles.'
  },
  {
    id: 'teamwork',
    icon: 'Users',
    title: 'Trabajo en equipo',
    description: 'Colaboramos con nuestros clientes como un equipo unido, combinando conocimientos para lograr el éxito.'
  }
];