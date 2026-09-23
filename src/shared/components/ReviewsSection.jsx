'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Star, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { contentService } from '../../services/content.service';

const resolveAvatarUrl = (img) => {
  if (!img || typeof img !== 'string') return null;
  if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('data:')) return img;
  const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://admin.worldtracktravel.com').replace(/\/api\/?$/, '');
  return `${baseUrl}${img.startsWith('/') ? '' : '/'}${img}`;
};

const normalizeReviews = (res) => {
  if (!res || !Array.isArray(res)) return [];
  return res.map((t, idx) => {
    const author = t.user_name || t.name || t.author || 'Satisfied Pilgrim';
    const rawQuote = t.comment || t.message || t.review || t.quote;
    const quote = rawQuote && rawQuote !== 'Nil' ? rawQuote : 'World Track made our travel journey smooth, transparent, and completely peaceful.';
    const category = t.category || 'Travel Package';
    const rating = Math.max(1, Math.min(5, Math.round(parseFloat(t.rating || '5.0') || 5)));
    const location = t.location || 'Pakistan';
    const rawAvatar = t.user_image || t.image || t.avatar;
    const avatar = resolveAvatarUrl(rawAvatar);

    return {
      id: t.id || idx + 1,
      category,
      tag: category.toUpperCase(),
      rating,
      quote,
      author,
      location,
      avatar,
    };
  });
};

export function ReviewsSection({ initialReviews = [] }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const hasInitial = Array.isArray(initialReviews) && initialReviews.length > 0;
  const [reviews, setReviews] = useState(hasInitial ? normalizeReviews(initialReviews) : []);
  const [loading, setLoading] = useState(!hasInitial);

  useEffect(() => {
    if (hasInitial) {
      setReviews(normalizeReviews(initialReviews));
      setLoading(false);
      return;
    }

    setLoading(true);
    contentService
      .getTestimonials()
      .then((res) => {
        if (res && Array.isArray(res)) {
          setReviews(normalizeReviews(res));
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, [initialReviews, hasInitial]);

  const handleScroll = (direction) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const firstCard = track.querySelector('.review-card-item');
    const step = firstCard ? firstCard.offsetWidth + 24 : track.clientWidth * 0.8;
    
    track.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth'
    });
  };

  return (
    <section className="reviews-social-section" id="reviews">
      <div className="section-container">
        {/* Section Header Row with Navigation Arrows */}
        <div className="section-header-row reviews-header-row">
          <div className="section-header-left">
            <div className="section-eyebrow-badge review-eyebrow">
              <MessageSquare size={15} className="eyebrow-icon review-eyebrow-icon" />
              <span>REAL EXPERIENCES &amp; SOCIAL PROOF</span>
            </div>
            <h2 className="section-main-title">What Our Pilgrims &amp; Travelers Say</h2>
            <p className="section-sub-title">
              Genuine feedback from families, corporate travelers, and Umrah pilgrims who trust World Track Aviation, a travel agency in Islamabad serving Rawalpindi and Pakistan.
            </p>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="reviews-header-actions">
            <div className="reviews-nav-controls" role="group" aria-label="Review slider navigation">
              <button
                type="button"
                className="reviews-nav-arrow-btn reviews-nav-prev"
                onClick={() => handleScroll('left')}
                aria-label="Previous reviews"
                title="Previous reviews"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="reviews-nav-arrow-btn reviews-nav-next"
                onClick={() => handleScroll('right')}
                aria-label="Next reviews"
                title="Next reviews"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Reviews Slider Track */}
        <div className="reviews-slider-container">
          <div className="reviews-slider-track" ref={trackRef}>
            {loading ? (
              /* Loading Skeletons */
              [1, 2, 3].map((i) => (
                <div key={`review-skeleton-${i}`} className="review-card-item animate-pulse">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-4 w-24 bg-slate-200 rounded"></div>
                    <div className="h-4 w-16 bg-slate-200 rounded"></div>
                  </div>
                  <div className="h-4 bg-slate-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-slate-200 rounded mb-2 w-5/6"></div>
                  <div className="h-4 bg-slate-200 rounded mb-6 w-3/4"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-slate-200 rounded-full"></div>
                    <div>
                      <div className="h-4 w-28 bg-slate-200 rounded mb-1"></div>
                      <div className="h-3 w-20 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : reviews.length > 0 ? (
              reviews.map((rev) => (
                <div key={rev.id} className="review-card-item">
                  {/* Star Rating & Category Badge */}
                  <div className="review-card-top-row">
                    <div className="review-stars-row">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={`star-${rev.id}-${i}`} size={15} className="star-gold-fill" />
                      ))}
                    </div>
                    <span className="review-category-badge">{rev.tag}</span>
                  </div>

                  {/* Review Text */}
                  <p className="review-quote-text">
                    "{rev.quote}"
                  </p>

                  {/* Reviewer Info with Circular Photo Avatar */}
                  <div className="review-author-row">
                    {rev.avatar ? (
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="review-avatar-img"
                        loading="lazy"
                        decoding="async"
                        width={44}
                        height={44}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          if (e.currentTarget.nextElementSibling) {
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div className="review-avatar-fallback" style={{ display: rev.avatar ? 'none' : 'flex' }}>
                      {rev.author ? rev.author.charAt(0).toUpperCase() : 'W'}
                    </div>
                    <div className="review-author-info">
                      <div className="review-author-name">{rev.author}</div>
                      <div className="review-author-loc">{rev.location}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : null}
          </div>
        </div>

        {/* Blue Metrics Strip at the bottom of Reviews Section */}
        <div className="reviews-stats-banner-card">
          <div className="stats-banner-grid">
            <div className="stat-banner-cell">
              <div className="stat-banner-val">4.9/5.0</div>
              <div className="stat-banner-lbl">Average Customer Rating</div>
            </div>
            <div className="stat-banner-cell">
              <div className="stat-banner-val">21,000+</div>
              <div className="stat-banner-lbl">Umrah Pilgrims Served</div>
            </div>
            <div className="stat-banner-cell">
              <div className="stat-banner-val">30,000+</div>
              <div className="stat-banner-lbl">Tickets &amp; Visas Issued</div>
            </div>
            <div className="stat-banner-cell">
              <div className="stat-banner-val">99.4%</div>
              <div className="stat-banner-lbl">Visa Approval Track Record</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
