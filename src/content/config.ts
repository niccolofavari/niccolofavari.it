import { defineCollection, z } from 'astro:content';

// Define a schema for all content collections
const contentSchema = z.object({
  title: z.string(),
  pubDate: z.string().transform((str: string) => new Date(str)), // Transform string to Date object
  updatedDate: z.string().transform((str: string) => new Date(str)).optional(),
  description: z.string(),
  category: z.string(),
  contentType: z.string().optional(),
  tags: z.array(z.string()).optional(),
  growthStage: z.enum(['Seedling', 'Budding', 'Evergreen']),
  lang: z.enum(['en', 'it']),
  translationKey: z.string(),
  toc: z.boolean().optional(),
  projectSlug: z.string().optional(),
  relatedHobbies: z.array(z.string()).optional(),
  coverImage: z.string().optional(),
  coverImageAlt: z.string().optional(),
  // Add any other frontmatter fields you expect here
});

// Define a single collection for all content, as they share a similar structure
// We can differentiate by language and category using directory structure and frontmatter
const allContentCollection = defineCollection({
  type: 'content', // 'content' for MD/MDX, 'data' for JSON/YAML
  schema: contentSchema,
});

// Export a `collections` object to register your collection(s)
export const collections = {
  'en': allContentCollection,
  'it': allContentCollection,
};
