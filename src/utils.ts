import type { CollectionEntry } from 'astro:content'

/** Structural type satisfied by both blog and drafts collection entries */
export interface AnyPost {
  id: string
  collection: string
  data: {
    title: string
    description: string
    date: Date
    lastUpdated?: Date
    tags: string[]
    draft: boolean
  }
}

/** Sort blog posts newest first. In dev mode all posts are included; in prod draft posts are excluded. */
export function sortByDate(posts: CollectionEntry<'blog'>[]) {
  return posts
    .filter(p => import.meta.env.DEV || !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

/** Sort any mix of blog and draft posts newest first, no filtering */
export function sortAllByDate(posts: AnyPost[]) {
  return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

/** Prepend the Astro base path to an internal URL — required when base is set in astro.config */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL // e.g. '/personal_blog/' or '/'
  return base + path.replace(/^\//, '')
}

/** Strip .md / .mdx extension and trailing /index from a content entry id */
export function postSlug(id: string): string {
  return id.replace(/\.(mdx?)$/, '').replace(/\/index$/, '')
}

/** Convert a tag name to a URL slug. Preserves Unicode (e.g. CJK). */
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[/\\?%*:|"<>#]/g, '')
}

/** Collect all unique tags from posts with their counts */
export function getAllTags(posts: AnyPost[]) {
  const map = new Map<string, { name: string; slug: string; count: number }>()
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = slugifyTag(tag)
      const existing = map.get(slug)
      if (existing) {
        existing.count++
      } else {
        map.set(slug, { name: tag, slug, count: 1 })
      }
    }
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count)
}

/** Format a Date as "Month Day, Year" */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/** Estimate reading time from raw text */
export function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}
