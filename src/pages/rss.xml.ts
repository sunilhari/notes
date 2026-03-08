import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { sortByDate, postSlug } from '../utils'
import { SITE } from '../config'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const posts = sortByDate(await getCollection('blog'))
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${postSlug(post.id)}/`,
    })),
  })
}
