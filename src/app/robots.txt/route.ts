import { NextRequest } from 'next/server';
import { SITE_CONFIG } from '@/config/site';
import { fetchGlobalSeo } from '@/lib/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 300; // 5 minutes cache revalidation

const DEFAULT_ROBOTS_TXT = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /private/

Sitemap: ${SITE_CONFIG.baseUrl}/sitemap.xml`;

export async function GET(_request: NextRequest) {
  let robotsContent = '';

  try {
    const globalSeo = await fetchGlobalSeo();
    const raw =
      (globalSeo as any)?.robots_txt ||
      (globalSeo as any)?.robots_content ||
      (globalSeo as any)?.technical_seo?.robots_txt ||
      (globalSeo as any)?.robots;

    if (typeof raw === 'string') {
      const trimmed = raw.trim();
      if (
        trimmed.length > 0 &&
        trimmed.toLowerCase() !== 'null' &&
        trimmed.toLowerCase() !== 'undefined'
      ) {
        robotsContent = trimmed;
      }
    }
  } catch (error) {
    console.error('[robots.txt] Failed to fetch robots from admin SEO API:', error);
  }

  // Fallback to safe default if admin value is empty or unavailable
  if (!robotsContent) {
    robotsContent = DEFAULT_ROBOTS_TXT;
  }

  return new Response(robotsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=600',
    },
  });
}
