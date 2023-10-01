import rss from '@astrojs/rss';
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection('posts');
  return rss({
    title: 'Astroチュートリアル | ブログ',
    description: 'Astroを学ぶ旅',
    site: 'https://kyoruni.github.io/astro-tutorial/',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/astro-tutorial/posts/${post.slug}/`,
    })),
    customData: `<language>ja-jp</language>`,
  });
}