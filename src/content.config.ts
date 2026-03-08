import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const postSchema = z.object({
  /** Post title */
  title: z.string(),
  /** Short summary — shown in listings and meta description */
  description: z.string(),
  /** Publication date */
  date: z.coerce.date(),
  /** Optional: date this post was last updated */
  lastUpdated: z.coerce.date().optional(),
  /** Any tags you like — tag pages are generated automatically */
  tags: z.array(z.string()).default([]),
  /** Whether this post is a draft */
  draft: z.boolean().default(false),
})

/** Published posts — visible in production. Each post lives in its own folder:
 *  src/content/blog/my-post/index.md  →  /blog/my-post/
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: postSchema,
})

/** Draft posts — only visible locally (npm run dev). Each draft in its own folder:
 *  src/content/drafts/my-draft/index.md  →  /blog/my-draft/ (dev only)
 */
const drafts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/drafts' }),
  schema: postSchema.extend({ draft: z.boolean().default(true) }),
})

export const collections = { blog, drafts }
