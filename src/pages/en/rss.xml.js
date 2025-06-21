import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE_EN, SITE_DESCRIPTION_EN } from '../../site-config';

export async function GET(context) {
  const posts = await getCollection('en', ({ data }) => data.draft !== true);
  return rss({
    title: SITE_TITLE_EN,
    description: SITE_DESCRIPTION_EN,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/en/${post.slug}/`,
    })),
  });
}
