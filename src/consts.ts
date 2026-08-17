// ConexiónTerritorial - Voces Campesinas
export const SITE_TITLE = 'ConexiónTerritorial';
export const SITE_DESCRIPTION = 'Portal de noticias y programación de Voces Campesinas — La Emisora Digital del Campo Colombiano';
export const SITE_URL = 'https://www.vocescampesinas.co';
export const STREAM_URL = 'https://emisora.vocescampesinas.co/listen/vocescampesinas/radio.mp3';
export const SLOGAN_PRIMARY = 'El Campo Nos Une';
export const SLOGAN_SECONDARY = 'La Emisora Digital del Campo Colombiano';

export const SOCIAL = {
  facebook: 'https://facebook.com/vocescampesinas',
  instagram: 'https://instagram.com/vocescampesinas',
  youtube: 'https://youtube.com/@vocescampesinas',
  tiktok: 'https://tiktok.com/@vocescampesinas',
};

export const CATEGORIES = [
  { slug: 'agricultura', label: 'Agricultura', color: '#1a6b3c' },
  { slug: 'ganaderia', label: 'Ganadería', color: '#8B5E3C' },
  { slug: 'deportes', label: 'Deportes', color: '#2563eb' },
  { slug: 'medio-ambiente', label: 'Medio Ambiente', color: '#059669' },
  { slug: 'rit', label: 'RIT', color: '#7c3aed' },
  { slug: 'cultura', label: 'Cultura', color: '#d97706' },
  { slug: 'comunidad', label: 'Comunidad', color: '#dc2626' },
] as const;

export const NAV_ITEMS = [
  { href: '/', label: 'Inicio' },
  { href: '/noticias', label: 'Noticias' },
  { href: '/programacion', label: 'Programación' },
  { href: '/secciones/rit', label: 'RIT' },
  { href: '/about', label: 'Quiénes Somos' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export const FRANJAS_MUSICALES = [
  { nombre: 'Alborada Campesina', hora: '05:00 - 06:00', desc: 'Música campesina para empezar el día' },
  { nombre: 'Tardes Campesinas', hora: '17:00 - 18:00', desc: 'Tarde musical en el campo colombiano' },
];