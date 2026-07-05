import { defineCollection } from "astro/content/config";
import { z } from "zod/v4";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

export const collection = {
  blog: blogCollection,
};
