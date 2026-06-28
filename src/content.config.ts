import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const verificationStatus = z.enum([
  "Community Reported",
  "Unconfirmed",
  "Official Fix",
  "Verified"
]);

const article = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["troubleshooting", "guides", "updates", "maps"]),
    tags: z.array(z.string()).default([]),
    gameVersion: z.string(),
    verificationStatus,
    lastUpdated: z.coerce.date(),
    author: z.string(),
    sources: z.array(z.object({
      label: z.string(),
      url: z.url()
    })).default([]),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  articles: article
};
