import { getPostSitemapUrls, buildUrlsetXml } from '@/lib/sitemap-builder';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export async function GET() {
  const urls = await getPostSitemapUrls();
  const xml = buildUrlsetXml(urls);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
