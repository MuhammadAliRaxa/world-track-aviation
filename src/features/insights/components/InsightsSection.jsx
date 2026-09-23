'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, ArrowRight } from 'lucide-react';
import { BlogCard } from './BlogCard';
import { InsightArticleModal } from './InsightArticleModal';
import { blogService } from '../../../services/blog.service';

export function InsightsSection({ initialBlogs = [] }) {
  const router = useRouter();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const hasInitial = Array.isArray(initialBlogs) && initialBlogs.length > 0;
  const [articles, setArticles] = useState(hasInitial ? initialBlogs : []);
  const [loading, setLoading] = useState(!hasInitial);

  useEffect(() => {
    if (hasInitial) {
      setArticles(initialBlogs);
      setLoading(false);
      return;
    }

    setLoading(true);
    blogService
      .getBlogs()
      .then((res) => {
        if (res && Array.isArray(res)) {
          setArticles(res);
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, [initialBlogs, hasInitial]);

  return (
    <section className="insights-feature-section" id="insights">
      <div className="section-container">
        {/* Section Header Row with View All button on Right */}
        <div className="section-header-row insights-header-row">
          <div className="section-header-left">
            <div className="section-eyebrow-badge insights-eyebrow">
              <BookOpen size={15} className="eyebrow-icon insights-eyebrow-icon" />
              <span>TRAVEL INSIGHTS &amp; REGULATIONS</span>
            </div>
            <h2 className="section-main-title">Travel Guides &amp; Umrah Tips</h2>
            <p className="section-sub-title">
              Guides on visa rules, e-Visa processing, Umrah planning, and flight and hotel booking tips from our travel consultants in Islamabad.
            </p>
          </div>

          <div className="section-header-right">
            <button
              type="button"
              className="insights-view-all-btn"
              onClick={() => router.push('/our-blogs')}
            >
              <span>View All Articles</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* 3 Guides Grid — matching reference design / Loading Skeletons */}
        <div className="insights-catalog-grid">
          {loading ? (
            /* Skeleton Loading Cards */
            [1, 2, 3].map((i) => (
              <div key={`insight-skeleton-${i}`} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm animate-pulse">
                <div className="h-48 bg-slate-200 w-full"></div>
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                  <div className="h-5 bg-slate-200 rounded w-5/6"></div>
                  <div className="h-4 bg-slate-200 rounded w-full"></div>
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                </div>
              </div>
            ))
          ) : articles.length > 0 ? (
            articles.slice(0, 3).map((article) => (
              <BlogCard
                key={article.id}
                article={article}
                onClick={() => router.push(`/our-blogs/${article.id}`)}
              />
            ))
          ) : null}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <InsightArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
}
