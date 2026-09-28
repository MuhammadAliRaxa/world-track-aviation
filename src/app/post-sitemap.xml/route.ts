import { getPostSitemapUrls, buildUrlsetXml, resolveBaseUrl } from '@/lib/sitemap-builder';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export async function GET(request: Request) {
  const baseUrl = resolveBaseUrl(request);
  const urls = await getPostSitemapUrls(baseUrl);
  const xml = buildUrlsetXml(urls);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
