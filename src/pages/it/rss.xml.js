import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE_IT, SITE_DESCRIPTION_IT } from '../../site-config';

export async function GET(context) {
  const posts = await getCollection('it', ({ data }) => data.draft !== true);
  return rss({
    title: SITE_TITLE_IT,
    description: SITE_DESCRIPTION_IT,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/it/${post.slug}/`,
    })),
  });
}
