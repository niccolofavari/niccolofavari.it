import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE_EN, SITE_DESCRIPTION_EN } from '../site-config';
import { glob } from 'astro/loaders';

export async function GET(context) {
  const enPosts = await getCollection('en', ({ data }) => data.draft !== true);
  const itPosts = await getCollection('it', ({ data }) => data.draft !== true);
  const allPosts = [...enPosts, ...itPosts];

  return rss({
    title: SITE_TITLE_EN,
    description: SITE_DESCRIPTION_EN,
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${post.collection}/${post.slug}/`,
    })),
  });
}
