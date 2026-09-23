import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { blogService } from '@/services';
import { BlogsPage } from '@/features/insights/components/BlogsPage';

export const revalidate = 0;

/**
 * SEO fallback chain for Blogs listing:
 * 1. GET /api/seo/page/blogs
 * 2. GET /api/seo/global (final fallback)
 */
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'blogs',
    canonicalPath: 'https://worldtracktravel.com/our-blogs/',
    fallbackTitle: 'Umrah Guides & Travel Tips | World Track Aviation',
    fallbackDescription:
      'Read practical guides on Umrah visas, Nusuk permits, flight bookings, and travel tips for Pakistani travelers, written by our own travel consultants.',
  });
}

export default async function Page() {
  const [paginatedData, lookups] = await Promise.all([
    blogService.getBlogsPaginated({ perPage: 12, nextPage: 1 }),
    blogService.getBlogLookups(),
  ]);

  return (
    <BlogsPage
      initialBlogs={paginatedData.blogs}
      initialPagination={paginatedData.pagination}
      initialLookups={lookups}
    />
  );
}
