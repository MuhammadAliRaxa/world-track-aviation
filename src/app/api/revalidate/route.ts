import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

/**
 * On-demand Revalidation Route Handler — WorldTrackTravel
 *
 * Allows admin panel to immediately purge cache and revalidate pages or data tags
 * upon saving changes (such as custom JSON-LD schema or SEO updates).
 *
 * Supports both GET and POST requests:
 * - GET /api/revalidate?path=/our-hotels/&secret=...
 * - GET /api/revalidate?tag=seo&secret=...
 * - POST /api/revalidate with JSON { path: "/...", tag: "...", secret: "..." }
 */
async function handleRevalidation(request: NextRequest) {
  try {
    let path: string | null = null;
    let tag: string | null = null;
    let secret: string | null = null;

    if (request.method === 'POST') {
      try {
        const body = await request.json();
        path = body?.path ?? null;
        tag = body?.tag ?? null;
        secret = body?.secret ?? null;
      } catch {
        // Fall back to searchParams if JSON parsing fails
      }
    }

    const { searchParams } = new URL(request.url);
    path = path || searchParams.get('path');
    tag = tag || searchParams.get('tag');
    secret = secret || searchParams.get('secret');

    // Optional secret token check if configured in environment
    const expectedSecret = process.env.REVALIDATION_SECRET || process.env.REVALIDATE_TOKEN;
    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json(
        { error: 'Invalid revalidation secret' },
        { status: 401 }
      );
    }

    if (!path && !tag) {
      return NextResponse.json(
        { error: 'Missing path or tag parameter to revalidate' },
        { status: 400 }
      );
    }

    const revalidated: { path?: string; tag?: string } = {};

    if (path) {
      // Revalidate the specific path
      revalidatePath(path);
      revalidated.path = path;
    }

    if (tag) {
      // Revalidate cache tag immediately (e.g. 'seo', 'page-seo', 'global-seo')
      revalidateTag(tag, { expire: 0 });
      revalidated.tag = tag;
    }

    return NextResponse.json({
      revalidated: true,
      ...revalidated,
      now: Date.now(),
    });
  } catch (error) {
    console.error('[revalidate] Error during on-demand revalidation:', error);
    return NextResponse.json(
      { error: 'Internal server error during revalidation' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return handleRevalidation(request);
}

export async function POST(request: NextRequest) {
  return handleRevalidation(request);
}
