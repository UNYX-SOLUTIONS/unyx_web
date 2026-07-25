// src/data/team.ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Carlos Rodríguez',
    role: 'CEO & Fundador',
    bio: 'Ingeniero en sistemas con más de 10 años de experiencia en desarrollo de software y liderazgo de equipos tecnológicos.',
    avatar: 'CR',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: '2',
    name: 'María González',
    role: 'CTO & Co-fundadora',
    bio: 'Especialista en arquitectura de software y cloud computing. Apasionada por las tecnologías emergentes y la innovación.',
    avatar: 'MG',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: '3',
    name: 'David Martínez',
    role: 'Lead Developer',
    bio: 'Experto en desarrollo full-stack con enfoque en React, Node.js y arquitecturas modernas. Mentor de equipos de desarrollo.',
    avatar: 'DM',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: '4',
    name: 'Laura Sánchez',
    role: 'UX/UI Designer',
    bio: 'Diseñadora de experiencias digitales con pasión por crear interfaces intuitivas y accesibles que conectan con los usuarios.',
    avatar: 'LS',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: '5',
    name: 'Javier Pérez',
    role: 'DevOps Engineer',
    bio: 'Especialista en infraestructura cloud, CI/CD y automatización. Asegura la disponibilidad y escalabilidad de nuestras soluciones.',
    avatar: 'JP',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: '6',
    name: 'Elena Ruiz',
    role: 'Project Manager',
    bio: 'Gestora de proyectos con metodologías ágiles. Garantiza la entrega exitosa de soluciones que superan las expectativas del cliente.',
    avatar: 'ER',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];