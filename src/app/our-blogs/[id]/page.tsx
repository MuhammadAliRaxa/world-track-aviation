import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
  const params: { id: string }[] = [];
  blogs.forEach((b) => {
    params.push({ id: String(b.id) });
    const rawSlug = (b as any).slug || (b as any).seo?.url_slug;
    if (rawSlug) {
      const cleanSlug = String(rawSlug)
        .replace(/^https?:\/\/[^/]+/i, '')
        .replace(/^\/?(our-blogs|blogs)\//i, '')
        .replace(/^\/+|\/+$/g, '');
      if (cleanSlug && cleanSlug !== String(b.id)) {
        params.push({ id: cleanSlug });
      }
    }
  });
  return params;
}

export const revalidate = 86400; // 24 hours ISR

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = await blogService.getBlogById(id);
  if (!blog) {
    return buildMetadata({
      pageKey: 'blogs',
      canonicalPath: `https://worldtracktravel.com/our-blogs/${id}/`,
      fallbackTitle: 'Blog Article Not Found | World Track Aviation',
      fallbackDescription: 'Travel guides, visa policies, and Umrah insights from World Track Aviation.',
    });
  }

  const rawSlug = (blog as any).slug || (blog as any).seo?.url_slug || blog.id;
  const cleanSlug = String(rawSlug)
    .replace(/^https?:\/\/[^/]+/i, '')
    .replace(/^\/?(our-blogs|blogs)\//i, '')
    .replace(/^\/+|\/+$/g, '');

  return buildMetadata({
    itemSeo: (blog as any)?.seo ?? null,
    pageKey: 'blogs',
    canonicalPath: `https://worldtracktravel.com/our-blogs/${cleanSlug || blog.id}/`,
    fallbackTitle: `${blog.title} | World Track Aviation Insights`,
    fallbackDescription: blog.summary || blog.intro || 'Expert travel guides and industry insights.',
  });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const blog = await blogService.getBlogById(id);

  if (!blog) {
    notFound();
  }

  const rawSlug = (blog as any).slug || (blog as any).seo?.url_slug || blog.id;
  const cleanSlug = String(rawSlug)
    .replace(/^https?:\/\/[^/]+/i, '')
    .replace(/^\/?(our-blogs|blogs)\//i, '')
    .replace(/^\/+|\/+$/g, '');

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blogs & Guides', path: '/our-blogs/' },
    { name: blog.title || 'Article', path: `/our-blogs/${cleanSlug || blog.id}/` },
  ];

  const blogSchema = getBlogPostingSchema({
    id: cleanSlug || blog.id,
    title: blog.title,
    summary: blog.summary || blog.intro,
    image: blog.image,
    publishedAt: blog.date,
    author: blog.author,
  });

  return (
    <>
      <JsonLdScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLdScript schema={blogSchema} />
      <BlogDetailPage initialArticle={blog} />
    </>
  );
}
