/**
 * Blog Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Blogs.
 */

import { BlogPost, BlogFilterParams } from '../types/blog.types';
import { apiPost, apiGet } from './api.client';
import type {
  ApiBlog,
  ApiBlogFilters,
  ApiBlogLookups,
  ApiPagination,
} from '../types/api.types';

export function stripHtmlTags(str: any): string {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '') // remove HTML tags like <p>, </p>, etc.
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function normalizeBlogDetail(item: any): BlogPost | null {
  if (!item || typeof item !== 'object') return null;

  const id = String(item.id || '');
  const rawTitle = item.title || item.name || item.heading || 'Travel Insights & Guide';
  const title = stripHtmlTags(rawTitle);

  const rawCategory = item.category || 'umrah';
  const category = stripHtmlTags(rawCategory);
  const badge = (category || 'UMRAH GUIDE').toUpperCase();

  const rawSummary = item.summary || item.short_description;
  let summary = '';
  if (rawSummary) {
    summary = stripHtmlTags(rawSummary);
  } else if (item.description || item.content) {
    const fullText = stripHtmlTags(item.description || item.content);
    summary = fullText.length > 180 ? fullText.slice(0, 180).trim() + '...' : fullText;
  } else {
    summary = 'Essential travel guide and tips.';
  }

  const date = item.date || item.created_at || '20 Sep 2026';
  const author = stripHtmlTags(item.author || 'World Track Aviation');
  const authorAvatar = item.authorAvatar || item.avatar || item.author_image || '/assets/avatar_tariq.png';
  const readTime = item.readTime || (item.reading_time ? `${item.reading_time} min read` : '5 min read');
  const image = item.image || 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80';

  const rawIntro = item.intro || item.lead;
  const intro = rawIntro ? stripHtmlTags(rawIntro) : '';
  const heroDesc = item.heroDesc ? stripHtmlTags(item.heroDesc) : intro;

  let rawSections = item.sections;
  if (!rawSections || !Array.isArray(rawSections) || rawSections.length === 0) {
    const rawContent = item.description || item.content || `<p>${summary}</p>`;
    rawSections = [
      {
        heading: '',
        content: typeof rawContent === 'string' ? rawContent : `<p>${summary}</p>`,
      },
    ];
  } else {
    rawSections = rawSections.map((sec: any) => ({
      heading: stripHtmlTags(sec.heading || sec.title || ''),
      content: sec.content || sec.text || `<p>${stripHtmlTags(sec.text || '')}</p>`,
    }));
  }

  const rawSlug = item.slug || item.seo?.url_slug || '';
  const cleanSlug = rawSlug
    ? String(rawSlug)
        .replace(/^https?:\/\/[^/]+/i, '')
        .replace(/^\/?(our-blogs|blogs)\//i, '')
        .replace(/^\/+|\/+$/g, '')
    : '';
  const slug = cleanSlug || String(id);

  return {
    id,
    slug,
    title,
    heroTitle: title,
    eyebrow: badge,
    category,
    badge,
    date,
    author,
    authorAvatar,
    readTime,
    summary,
    intro,
    image,
    image_alt_text: item.image_alt_text || item.alt_text || title,
    heroImage: image,
    heroDesc,
    sections: rawSections,
    seo: item.seo || null,
  } as unknown as BlogPost;
}

export const blogService = {
  /**
   * Fetch all blogs via POST /blog/list.
   */
  async getBlogs(filters?: BlogFilterParams): Promise<BlogPost[]> {
    const body: { filters?: ApiBlogFilters } = {};
    if (filters?.category && filters.category !== 'all') {
      body.filters = { category: filters.category };
    }
    if (filters?.searchQuery?.trim()) {
      body.filters = { ...body.filters, search: filters.searchQuery };
    }

    try {
      const res = await apiPost<ApiBlog[]>(
        '/blog/list',
        Object.keys(body).length > 0 ? body : {},
        { cache: "no-store" } as RequestInit,
      );
      const blogs = Array.isArray(res.data) ? res.data : [];
      let normalized = blogs.map(normalizeBlogDetail).filter(Boolean) as unknown as BlogPost[];

      if (filters && normalized.length > 0) {
        if (filters.category && filters.category !== 'all') {
          normalized = normalized.filter(
            (b) =>
              b.category.toLowerCase() === filters.category!.toLowerCase(),
          );
        }

        if (filters.searchQuery?.trim()) {
          const q = filters.searchQuery.toLowerCase().trim();
          normalized = normalized.filter(
            (b) =>
              b.title.toLowerCase().includes(q) ||
              b.summary.toLowerCase().includes(q) ||
              b.heroTitle.toLowerCase().includes(q),
          );
        }
      }

      return normalized;
    } catch {
      return [];
    }
  },

  /**
   * Paginated blog listing with full API filter fields.
   */
  async getBlogsPaginated(
    filters: ApiBlogFilters = {},
  ): Promise<{ blogs: ApiBlog[]; pagination: ApiPagination | undefined }> {
    try {
      const body = Object.keys(filters).length > 0 ? { filters } : {};
      const res = await apiPost<ApiBlog[]>('/blog/list', body);
      return {
        blogs: Array.isArray(res.data) ? res.data : [],
        pagination: res.pagination,
      };
    } catch {
      return { blogs: [], pagination: undefined };
    }
  },

  /**
   * Fetch a single blog post by ID or slug.
   */
  async getBlogById(id: string): Promise<BlogPost | null> {
    try {
      const blogs = await this.getBlogs();
      if (!blogs || blogs.length === 0) return null;
      const target = String(id)
        .toLowerCase()
        .replace(/^https?:\/\/[^/]+/i, '')
        .replace(/^\/?(our-blogs|blogs)\//i, '')
        .replace(/^\/+|\/+$/g, '')
        .trim();

      const found = blogs.find((b) => {
        const bId = String(b.id).toLowerCase().trim();
        const bSlug = String((b as any).slug || '').toLowerCase().trim();
        const rawSeoSlug = String((b as any).seo?.url_slug || '')
          .toLowerCase()
          .replace(/^https?:\/\/[^/]+/i, '')
          .replace(/^\/?(our-blogs|blogs)\//i, '')
          .replace(/^\/+|\/+$/g, '')
          .trim();

        return bId === target || bSlug === target || rawSeoSlug === target;
      });
      return found || null;
    } catch {
      return null;
    }
  },

  /**
   * GET /blog/lookups
   * Returns categories for filter UI.
   */
  async getBlogLookups(): Promise<ApiBlogLookups | null> {
    try {
      const res = await apiGet<ApiBlogLookups>('/blog/lookups', {
        cache: "no-store",
      } as RequestInit);
      return res.data ?? null;
    } catch {
      return null;
    }
  },
};
