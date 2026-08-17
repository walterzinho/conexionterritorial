import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    categoria: z.enum(['agricultura', 'ganaderia', 'deportes', 'medio-ambiente', 'rit', 'cultura', 'comunidad']).default('comunidad'),
    destacado: z.boolean().default(false),
    autor: z.string().default('Redacción Voces Campesinas'),
    tags: z.array(z.string()).default([]),
  }),
});

const programas = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    conductor: z.string(),
    categoria: z.string(),
    imagen: z.string().optional(),
    horario: z.string(),
    dias: z.array(z.string()),
    activo: z.boolean().default(true),
  }),
});

const paginas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icono: z.string().optional(),
    orden: z.number().default(0),
  }),
});

export const collections = { blog, programas, paginas };