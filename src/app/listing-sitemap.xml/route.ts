import { getListingSitemapUrls, buildUrlsetXml, resolveBaseUrl } from '@/lib/sitemap-builder';

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Dynamic revalidation every 60 seconds (1 minute)

export async function GET(request: Request) {
  const baseUrl = resolveBaseUrl(request);
  const urls = await getListingSitemapUrls(baseUrl);
  const xml = buildUrlsetXml(urls);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=60, s-maxage=60, stale-while-revalidate=600',
    },
  });
}
