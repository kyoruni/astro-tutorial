import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Astroチュートリアル | ブログ',
    description: 'Astroを学ぶ旅',
    site: 'https://kyoruni.github.io/astro-tutorial/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ja-jp</language>`,
  });
}