// Programación semanal de Voces Campesinas
// Franjas musicales fijas + programas por día
export interface Programa {
  id: string;
  nombre: string;
  descripcion: string;
  conductor: string;
  categoria: string;
  horaInicio: string;
  horaFin: string;
  imagen?: string;
  esFranja: boolean;
}

export interface DiaProgramacion {
  dia: string;
  programas: Programa[];
}

export const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const franjaBase: (hora: string, nombre: string, desc: string) => Programa = (hora, nombre, desc) => {
  const [hInicio, hFin] = hora.split(' - ');
  return {
    id: nombre.toLowerCase().replace(/\s+/g, '-'),
    nombre,
    descripcion: desc,
    conductor: 'Voces Campesinas',
    categoria: 'Franja Musical',
    horaInicio: hInicio,
    horaFin: hFin,
    esFranja: true,
  };
};

const alborada = franjaBase('05:00 - 06:00', 'Alborada Campesina', 'Música campesina para empezar el día');
const tardes = franjaBase('17:00 - 18:00', 'Tardes Campesinas', 'Tarde musical en el campo colombiano');

export const PROGRAMACION: DiaProgramacion[] = [
  {
    dia: 'Lunes',
    programas: [alborada, tardes],
  },
  {
    dia: 'Martes',
    programas: [
      alborada,
      {
        id: 'campesinos-en-accion-reemision',
        nombre: 'Reemisión Magazín "Campesinos En Acción"',
        descripcion: 'Programa Institucional de ANUC La Palma',
        conductor: 'ANUC La Palma',
        categoria: 'Magazín',
        horaInicio: '06:30',
        horaFin: '07:00',
        imagen: '/logos/Logo Campesinos en acción.png',
        esFranja: false,
      },
      tardes,
      {
        id: '3am-inframundo',
        nombre: '3AM. Inframundo',
        descripcion: 'El Programa donde la oscuridad y el misterio se encuentran.',
        conductor: 'Silvana Resendiz y Chalo Buitrago',
        categoria: 'Magazín',
        horaInicio: '21:00',
        horaFin: '22:40',
        imagen: '/logos/Logo 3 AM. Inframundo.png',
        esFranja: false,
      },
    ],
  },
  {
    dia: 'Miércoles',
    programas: [
      alborada,
      {
        id: 'region-activa-reemision',
        nombre: 'Reemisión Magazín "Región Activa"',
        descripcion: 'Magazín de la Corporación Cultural "CorpoActúa"',
        conductor: 'Jotta Rincón',
        categoria: 'Magazín',
        horaInicio: '07:30',
        horaFin: '11:00',
        imagen: '/logos/Logo Programa Región Activa.png',
        esFranja: false,
      },
      tardes,
      {
        id: 'renacer-andino',
        nombre: 'Renacer Andino',
        descripcion: 'Programa del género andino latinoamericano',
        conductor: 'Ramón Olivares',
        categoria: 'Música Andina Latinoamericana',
        horaInicio: '19:30',
        horaFin: '20:30',
        imagen: '/logos/Logo Renacer Andino.png',
        esFranja: false,
      },
    ],
  },
  {
    dia: 'Jueves',
    programas: [alborada, tardes],
  },
  {
    dia: 'Viernes',
    programas: [alborada, tardes],
  },
  {
    dia: 'Sábado',
    programas: [
      alborada,
      {
        id: 'campesinos-en-accion-sabado',
        nombre: 'Magazín "Campesinos en Acción"',
        descripcion: 'Programa Institucional de ANUC La Palma',
        conductor: 'ANUC La Palma',
        categoria: 'Magazín',
        horaInicio: '06:30',
        horaFin: '07:00',
        imagen: '/logos/Logo Campesinos en acción.png',
        esFranja: false,
      },
      {
        id: 'region-activa-sabado',
        nombre: 'Magazín "Región Activa"',
        descripcion: 'Programa de la Corporación Cultural "CorpoActúa"',
        conductor: 'Jotta Rincón',
        categoria: 'Magazín',
        horaInicio: '07:30',
        horaFin: '11:00',
        imagen: '/logos/Logo Programa Región Activa.png',
        esFranja: false,
      },
      tardes,
    ],
  },
  {
    dia: 'Domingo',
    programas: [
      alborada,
      tardes,
      {
        id: 'renacer-andino-domingo',
        nombre: 'Renacer Andino',
        descripcion: 'Programa del género andino latinoamericano',
        conductor: 'Ramón Olivares',
        categoria: 'Música Andina Latinoamericana',
        horaInicio: '19:30',
        horaFin: '20:30',
        imagen: '/logos/Logo Renacer Andino.png',
        esFranja: false,
      },
    ],
  },
];

// Helper: obtener el día actual en español
export function getDiaActual(): string {
  const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  return dias[new Date().getDay()];
}

// Helper: obtener el programa que está al aire ahora
export function getProgramaActual(): Programa | null {
  const now = new Date();
  const horaActual = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
  const diaActual = getDiaActual();
  const dia = PROGRAMACION.find(d => d.dia === diaActual);
  if (!dia) return null;
  return dia.programas.find(p => horaActual >= p.horaInicio && horaActual < p.horaFin) || null;
}