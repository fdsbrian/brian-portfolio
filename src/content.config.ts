import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects'
  }),

  schema: z.object({
    title: z.string(),
    category: z.string(),
    industry: z.string().optional(),
    role: z.string().optional(),
    client: z.string().optional(),
    year: z.string(),
    summary: z.string(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    challenge: z.string(),
    approach: z.string(),
    outcome: z.string(),

    results: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
          description: z.string().optional()
        })
      )
      .optional()
      .default([]),

    gallery: z
      .array(
        z.object({
          image: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
          layout: z.enum(['full', 'half']).default('full')
        })
      )
      .optional()
      .default([])
  })
});

const resources = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/resources'
  }),

  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    file: z.string().optional(),
    published: z.boolean().default(true),
    order: z.number().default(0)
  })
});

export const collections = {
  projects,
  resources
};