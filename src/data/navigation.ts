// src/data/navigation.ts
export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export const navigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/services' },
  { label: 'Nosotros', href: '/about' },
  { label: 'Contacto', href: '/contact' },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Twitter', href: '#', icon: 'twitter' },
  { label: 'GitHub', href: '#', icon: 'github' },
];