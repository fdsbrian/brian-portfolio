import { defineCollection, z } from 'astro:content';
const projects=defineCollection({type:'content',schema:z.object({title:z.string(),category:z.string(),year:z.string(),summary:z.string(),cover:z.string().optional(),featured:z.boolean().default(false),order:z.number().default(0),challenge:z.string(),approach:z.string(),outcome:z.string()})});
const resources=defineCollection({type:'content',schema:z.object({title:z.string(),type:z.string(),description:z.string(),published:z.boolean().default(true),order:z.number().default(0)})});
export const collections={projects,resources};
