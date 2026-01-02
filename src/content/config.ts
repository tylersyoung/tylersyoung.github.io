import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    link: z.string().optional(),
    github: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    cover: z.string().optional(), // URL or path to cover image
    dateFinished: z.coerce.date().optional(),
    status: z.enum(['read', 'to-read', 'reading']).default('read'),
    review: z.string().optional(),
    goodreads: z.string().optional(),
    openLibrary: z.string().optional(),
    amazon: z.string().optional(),
    influential: z.boolean().optional().default(false),
  }),
});

export const collections = { blog, projects, books };

