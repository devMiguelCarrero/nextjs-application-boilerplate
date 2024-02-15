export interface MenuItem {
  href: string;
  title: string;
  disabled: boolean;
  featured: boolean;
}

export const menu: MenuItem[] = [
  { href: '/', title: 'home', disabled: false, featured: false },
  {
    href: '/featured-joins',
    title: 'featured joins',
    disabled: false,
    featured: false,
  },
  { href: '/about', title: 'about', disabled: false, featured: false },
  { href: '/contact', title: 'contact', disabled: false, featured: false },
  { href: '/buy-now', title: 'Buy Now', disabled: false, featured: true },
];
