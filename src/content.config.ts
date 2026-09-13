import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const blogCategoryValues = [
  'FACEIT',
  'CS2',
  'Valorant',
  'Overwatch 2',
  'Rainbow Six Siege',
  'Guides',
  'Status & Updates',
] as const;

export const blogGameValues = ['cs2', 'valorant', 'overwatch-2', 'rainbow-six-siege'] as const;

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(blogCategoryValues),
    tags: z.array(z.string()).default([]),
    game: z.enum(blogGameValues).optional(),
    author: z.string().default('FACEIT Cheats'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    relatedPages: z.array(z.string()).default([]),
    image: z.string().optional(),
    seoTitle: z.string().optional(),
  }),
});

export const collections = { blog };
