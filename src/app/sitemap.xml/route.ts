import { getSitemapIndexItems, buildSitemapIndexXml, resolveBaseUrl } from '@/lib/sitemap-builder';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export async function GET(request: Request) {
  const baseUrl = resolveBaseUrl(request);
  const items = await getSitemapIndexItems(baseUrl);
  const xml = buildSitemapIndexXml(items);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
