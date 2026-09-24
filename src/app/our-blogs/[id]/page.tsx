import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { blogService } from '@/services';
import { BlogDetailPage } from '@/features/insights/components/BlogDetailPage';

import { JsonLdScript, getBreadcrumbSchema, getBlogPostingSchema } from '@/lib/jsonld';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const blogs = await blogService.getBlogs();
  if (!Array.isArray(blogs)) return [];
  return blogs.map((b) => ({ id: String(b.id) }));
}

export const revalidate = 86400; // 24 hours ISR

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

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Insights', path: '/our-blogs/' },
    { name: blog?.title || 'Article', path: `/our-blogs/${id}/` },
  ];

  const blogSchema = blog
    ? getBlogPostingSchema({
        id: blog.id,
        title: blog.title,
        summary: blog.summary || blog.intro,
        image: blog.image,
        publishedAt: blog.date,
      })
    : null;

  return (
    <>
      <JsonLdScript schema={getBreadcrumbSchema(breadcrumbs)} />
      {blogSchema && <JsonLdScript schema={blogSchema} />}
      <BlogDetailPage initialArticle={blog} />
    </>
  );
}
