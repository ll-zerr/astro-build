// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
  schema: z.object({
    url: z.string(),
    title: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    description: z.string().optional(),
    image: z.object({
      url: z.string().url(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  posts
};