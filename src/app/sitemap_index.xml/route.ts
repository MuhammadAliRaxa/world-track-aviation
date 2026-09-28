import { NextRequest } from 'next/server';
import { buildSitemapIndexXml, resolveBaseUrl } from '@/lib/sitemap-builder';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export async function GET(request: NextRequest) {
  const baseUrl = resolveBaseUrl(request);
  const now = new Date().toISOString();

  const xml = buildSitemapIndexXml([
    { loc: `${baseUrl}/page-sitemap.xml`, lastmod: now },
    { loc: `${baseUrl}/post-sitemap.xml`, lastmod: now },
    { loc: `${baseUrl}/listing-sitemap.xml`, lastmod: now },
    { loc: `${baseUrl}/travel_packages-sitemap.xml`, lastmod: now },
    { loc: `${baseUrl}/visa-sitemap.xml`, lastmod: now },
  ]);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=60',
    },
  });
}
