import { NextRequest } from 'next/server';
import { buildUrlsetXml, getTravelPackagesSitemapUrls, resolveBaseUrl } from '@/lib/sitemap-builder';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export async function GET(request: NextRequest) {
  const baseUrl = resolveBaseUrl(request);
  const urls = await getTravelPackagesSitemapUrls(baseUrl);
  const xml = buildUrlsetXml(urls);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=60',
    },
  });
}
