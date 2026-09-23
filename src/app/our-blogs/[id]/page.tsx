import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { blogService } from '@/services';
import { BlogDetailPage } from '@/features/insights/components/BlogDetailPage';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = await blogService.getBlogById(id);
  if (!blog) {
    return buildMetadata({
      pageKey: 'blogs',
      fallbackTitle: 'Blog Article | World Track Aviation',
      fallbackDescription: 'Travel guides, visa policies, and Umrah insights from World Track Aviation.',
    });
  }

  return buildMetadata({
    itemSeo: (blog as any)?.seo ?? null,
    pageKey: 'blogs',
    canonicalPath: `https://worldtracktravel.com/our-blogs/${blog.id}/`,
    fallbackTitle: `${blog.title} | World Track Aviation Insights`,
    fallbackDescription: blog.summary || blog.intro || 'Expert travel guides and industry insights.',
  });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const blog = await blogService.getBlogById(id);
  return <BlogDetailPage initialArticle={blog} />;
}
