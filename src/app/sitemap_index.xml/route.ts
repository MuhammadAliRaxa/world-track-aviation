import { getSitemapIndexItems, buildSitemapIndexXml } from '@/lib/sitemap-builder';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every 1 hour

export async function GET() {
  const items = await getSitemapIndexItems();
  const xml = buildSitemapIndexXml(items);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
