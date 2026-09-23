import React from 'react';
import { ArrowRight } from 'lucide-react';

const DEFAULT_BLOG_IMAGE = 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80';

function stripHtmlTags(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function BlogCard({ article, onClick, className = '' }) {
  const imageUrl = article?.image || DEFAULT_BLOG_IMAGE;
  const rawTitle = article?.title || article?.name || 'Travel Guide';
  const displayTitle = stripHtmlTags(rawTitle);

  const rawBadge = article?.badge || article?.category || 'GUIDE';
  const displayBadge = stripHtmlTags(rawBadge).toUpperCase();

  const rawSummary = article?.summary || article?.description || article?.short_description || 'Essential travel insights and guides.';
  const displaySummary = stripHtmlTags(rawSummary);

  const rawAuthor = article?.author || 'World Track Aviation';
  const displayAuthor = stripHtmlTags(rawAuthor);

  return (
    <div
      className={`wt-blog-card ${className}`}
      onClick={onClick}
      id={`blog-card-${article?.id}`}
      style={{ cursor: 'pointer' }}
    >
      {/* Media Image & Category Pill */}
      <div className="wt-blog-card-media">
        <img
          src={imageUrl}
          alt={article?.image_alt_text || article?.alt_text || displayTitle}
          className="wt-blog-card-img"
          loading="lazy"
          decoding="async"
          width={360}
          height={200}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_BLOG_IMAGE;
          }}
        />
        <div className="wt-blog-card-badge">
          <span>{displayBadge}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="wt-blog-card-body">
        {/* Date and Author */}
        <div className="wt-blog-card-meta">
          {article?.date || 'Recent'} · By {displayAuthor}
        </div>

        {/* Title */}
        <h3 className="wt-blog-card-title">{displayTitle}</h3>

        {/* Summary Description */}
        <p className="wt-blog-card-summary">{displaySummary}</p>

        {/* Bottom Action Line */}
        <div className="wt-blog-card-footer">
          <span className="wt-blog-card-read-text">Read Full Guide</span>
          <ArrowRight size={15} className="wt-blog-card-arrow" />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
