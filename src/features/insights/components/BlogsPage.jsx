'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { blogService, normalizeBlogDetail } from '../../../services/blog.service';
import { BlogCard } from './BlogCard';
import { AppBar, Footer, Modals } from '../../../shared';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import rawBlogsHero from '../../../assets/blogs_hero.webp';

const blogsHero =
  rawBlogsHero && typeof rawBlogsHero === 'object' && rawBlogsHero.src
    ? rawBlogsHero.src
    : rawBlogsHero;

export function BlogsPage({
  initialBlogs = [],
  initialPagination = undefined,
  initialLookups = null,
}) {
  const router = useRouter();

  // Normalize initial blogs
  const [blogs, setBlogs] = useState(() =>
    initialBlogs.map((b) => (b.sections ? b : normalizeBlogDetail(b))).filter(Boolean),
  );
  const [pagination, setPagination] = useState(
    initialPagination || {
      current_page: 1,
      per_page: 12,
      total_pages: 1,
      total_records: initialBlogs.length,
      nextPage: null,
      has_more: false,
    },
  );

  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Build categories list from lookups or fallback
  const categoriesList = React.useMemo(() => {
    if (initialLookups?.categories && Array.isArray(initialLookups.categories)) {
      const allCount = initialLookups.all_categories_count ?? blogs.length;
      return [
        { id: 'all', label: 'All Categories', count: allCount },
        ...initialLookups.categories.map((cat) => ({
          id: cat.value,
          label: cat.label,
          count: cat.blogs_count,
        })),
      ];
    }
    return [
      { id: 'all', label: 'All Categories', count: blogs.length },
      { id: 'umrah', label: 'Umrah Guide', count: 1 },
      { id: 'tour', label: 'Tour Guide', count: 0 },
      { id: 'visa', label: 'Visa Guide', count: 0 },
      { id: 'hotel', label: 'Hotel Guide', count: 1 },
    ];
  }, [initialLookups, blogs.length]);

  // Build API filters payload
  const buildApiFilters = (page = 1) => {
    const filters = {};
    if (debouncedSearch.trim()) filters.search = debouncedSearch.trim();
    if (selectedCategory !== 'all') filters.category = selectedCategory;
    filters.nextPage = page;
    filters.perPage = 12;
    return filters;
  };

  // Skip initial mount fetch if SSR data is present
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    let active = true;
    setIsLoading(true);

    blogService
      .getBlogsPaginated(buildApiFilters(1))
      .then((res) => {
        if (!active) return;
        const normalized = res.blogs.map((b) => (b.sections ? b : normalizeBlogDetail(b))).filter(Boolean);
        setBlogs(normalized);
        setPagination(res.pagination);
        setIsLoading(false);
      })
      .catch(() => {
        if (!active) return;
        setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [debouncedSearch, selectedCategory]);

  const handleLoadMore = async () => {
    if (!pagination?.nextPage || isLoadingMore) return;
    setIsLoadingMore(true);

    try {
      const res = await blogService.getBlogsPaginated(buildApiFilters(pagination.nextPage));
      const normalized = res.blogs.map((b) => (b.sections ? b : normalizeBlogDetail(b))).filter(Boolean);
      setBlogs((prev) => [...prev, ...normalized]);
      setPagination(res.pagination);
    } catch {
      // ignore
    } finally {
      setIsLoadingMore(false);
    }
  };

  const hasMore = Boolean(pagination?.nextPage || pagination?.has_more);

  return (
    <div className="blogs-page-root">
      {/* 1. Header Bar & Floating Navbar */}
      <AppBar
        onOpenContact={() => setIsContactOpen(true)}
        heroContent={
          <section className="blogs-hero-banner">
            <img src={blogsHero} alt="Blogs" className="blogs-hero-img" />
            <div className="blogs-hero-overlay" />
            <div className="blogs-hero-content">
              <h1 className="blogs-hero-title">Umrah Guides &amp; Travel Tips</h1>
              <p className="tr-hero-intro">
                Everything here comes from questions our own clients actually ask us, visa rules that changed last season, Nusuk booking steps that confuse people, or which airport transfer makes sense for a tight schedule. Pick a topic below to read the full guide.
              </p>
            </div>
          </section>
        }
      />

      {/* 2. Breadcrumb Navigation */}
      <div className="blogs-breadcrumb-wrap">
        <div className="blogs-container">
          <button
            type="button"
            className="blogs-breadcrumb-btn"
            onClick={() => router.push('/')}
            id="blogs-home-btn"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </button>
        </div>
      </div>

      {/* 3. Main 2-Column Layout */}
      <div className="blogs-container blogs-main-grid">
        {/* Left Column: Filter Sidebar */}
        <aside className="blogs-sidebar">
          {/* Filter Card */}
          <div className="blogs-filter-card">
            <div className="blogs-filter-header">
              <SlidersHorizontal size={14} className="blogs-filter-icon" />
              <span className="blogs-filter-title">Filter By</span>
            </div>

            {/* Search Input */}
            <div className="blogs-search-wrap">
              <Search size={14} className="blogs-search-icon" />
              <input
                type="text"
                placeholder="Search blogs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blogs-search-input"
                id="blogs-search-input"
              />
            </div>

            {/* Categories Section */}
            <div className="blogs-cat-section">
              <div className="blogs-cat-header">
                <span className="blogs-cat-title">CATEGORIES</span>
              </div>

              <div className="blogs-cat-list">
                {categoriesList.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`blogs-cat-item ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat.id)}
                      id={`filter-cat-${cat.id}`}
                    >
                      <div className="blogs-cat-left">
                        <span className={`blogs-radio-circle ${isSelected ? 'active' : ''}`}>
                          {isSelected && <span className="blogs-radio-dot" />}
                        </span>
                        <span className={`blogs-cat-label ${isSelected ? 'active' : ''}`}>
                          {cat.label}
                        </span>
                      </div>
                      <span className="blogs-cat-count">{cat.count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Custom Group Booking Card */}
          <div className="blogs-group-booking-card">
            <div className="blogs-group-head">
              <span className="blogs-group-crown">👑</span>
              <span className="blogs-group-tag">CUSTOM GROUP BOOKING</span>
            </div>
            <p className="blogs-group-desc">
              Need 5+ rooms, VIP Haramain high-speed train connections, or presidential suites in Makkah?
            </p>
            <button
              type="button"
              className="blogs-group-btn"
              onClick={() => setIsContactOpen(true)}
              id="blogs-contact-us-btn"
            >
              Contact us
            </button>
          </div>
        </aside>

        {/* Right Column: Blog Grid */}
        <main className="blogs-content">
          {/* Top Header Card */}
          <div className="blogs-top-banner">
            <h2 className="blogs-top-title">Our Latest blogs</h2>
            <p className="blogs-top-sub">
              Showing {blogs.length} {pagination?.total_records ? `of ${pagination.total_records}` : ''}
            </p>
          </div>

          {/* Loading Indicator */}
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b' }}>
              Loading blog articles...
            </div>
          ) : blogs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b' }}>
              No blog articles found matching your criteria.
            </div>
          ) : (
            <>
              {/* 3-Column Blog Cards Grid */}
              <div className="blogs-cards-grid">
                {blogs.map((article) => (
                  <BlogCard
                    key={article.id}
                    article={article}
                    onClick={() => router.push(`/our-blogs/${article.id}`)}
                  />
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div style={{ textAlign: 'center', marginTop: '32px' }}>
                  <button
                    type="button"
                    className="gt-load-more-btn"
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                    id="blogs-load-more-btn"
                  >
                    <span>{isLoadingMore ? 'Loading more...' : 'Load More Articles'}</span>
                    <ChevronDown size={15} />
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* 4. Contact Modal */}
      <Modals isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}

export default BlogsPage;
