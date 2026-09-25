'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  Phone,
} from 'lucide-react';
import { blogService } from '../../../services';
import { BlogCard } from './BlogCard';
import { AppBar, Footer } from '../../../shared';
import { COMPANY_CONFIG } from '../../../config/company';

const sanitizeHtml = (html) =>
  typeof html === 'string'
    ? html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/on\w+="[^"]*"/g, '')
        .replace(/<h1(\s|>)/gi, '<h2$1')
        .replace(/<\/h1>/gi, '</h2>')
    : '';

export function BlogDetailPage({ initialArticle = null }) {
  const params = useParams();
  const rawId = params?.id ? String(params.id) : '';
  const router = useRouter();

  const [articleState, setArticleState] = useState(initialArticle);
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(!initialArticle);

  useEffect(() => {
    if (!initialArticle || String(initialArticle.id) !== rawId) {
      setLoading(true);
      blogService
        .getBlogById(rawId)
        .then((a) => {
          if (a) setArticleState(a);
        })
        .finally(() => setLoading(false));
    }
    blogService.getBlogs().then(setAllArticles);
  }, [rawId, initialArticle]);

  const article =
    articleState ||
    allArticles.find((a) => String(a.id) === rawId) ||
    null;


  // Inquiry form states
  const [prevArticleId, setPrevArticleId] = useState(article?.id);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Umrah Packages & Visas');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Reset form submission state during render if article changes
  if (article && article.id !== prevArticleId) {
    setPrevArticleId(article.id);
    setSubmitted(false);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [rawId]);

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    const text = `Hello World Track Aviation, I am inquiring regarding the article "${article?.title || 'Travel Guide'}". Please share details on travel arrangements and quotations.`;
    window.open(COMPANY_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  // 4 Related Blogs (show all or filter)
  const relatedArticles = allArticles.filter((a) => String(a.id) !== String(article?.id || rawId)).slice(0, 4);

  if (loading && !article) {
    return (
      <div className="blog-detail-page-root min-h-screen bg-white">
        <AppBar />
        <div className="detail-container py-24 space-y-6 animate-pulse">
          <div className="h-10 bg-slate-200 rounded w-2/3"></div>
          <div className="h-6 bg-slate-200 rounded w-1/3"></div>
          <div className="h-[400px] bg-slate-200 rounded-2xl w-full"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) return null;

  return (
    <div className="blog-detail-page-root">
      {/* 1. Header Bar & Floating Navbar */}
      <AppBar
        heroContent={
          <section className="blog-page-hero">
            <div className="blog-page-hero-overlay" />
            <div className="blog-page-hero-content">
              <p className="blog-page-hero-title" role="doc-subtitle">
                {article.heroTitle || article.title || 'Travel Insights'}
              </p>
            </div>
          </section>
        }
      />

      {/* 3. Compact Breadcrumb Navigation */}
      <div className="blog-breadcrumb-row">
        <div className="detail-container breadcrumb-inner">
          <button
            type="button"
            className="breadcrumb-back-capsule"
            onClick={() => router.push('/our-blogs')}
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </button>
          <span className="breadcrumb-slash">/</span>
          <span className="breadcrumb-current">Latest Travel Guides &amp; Umrah Tips</span>
        </div>
      </div>

      {/* 4. Main 2-Column Content Grid */}
      <div className="detail-container blog-page-main-grid">
        {/* Left Column: Full Editorial Content */}
        <article className="blog-article-left">
          {/* Article Main Headline */}
          <h1 className="blog-article-headline">{article.title}</h1>

          {/* Author Meta Row */}
          <div className="blog-author-meta-row">
            <img
              src={article.authorAvatar || '/assets/avatar_tariq.png'}
              alt={article.author}
              className="blog-author-avatar"
            />
            <div className="blog-author-info">
              <span className="blog-author-name">By {article.author || 'World Track Aviation'}</span>
              <span className="blog-author-date">
                {article.date} · {article.readTime}
              </span>
            </div>
          </div>

          {/* Featured Article Media */}
          <div className="blog-featured-media-wrapper">
            <img
              src={article.image}
              alt={article.image_alt_text || article.alt_text || article.seo?.image_alt || `${article.title} - World Track Aviation`}
              className="blog-featured-media-img"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Editorial Body */}
          <div className="blog-editorial-content">
            {/* Lead Intro */}
            {(article.heroDesc || article.intro) ? (
              <p className="blog-lead-p">{article.heroDesc || article.intro}</p>
            ) : null}

            {/* Sections */}
            {article.sections && article.sections.length > 0 ? (
              article.sections.map((sec, idx) => (
                <div key={idx} className="blog-section-block">
                  {sec.heading ? <h2 className="blog-block-title">{sec.heading}</h2> : null}
                  {sec.content && (
                    <div
                      className="blog-block-text space-y-3"
                      dangerouslySetInnerHTML={{ __html: sanitizeHtml(sec.content) }}
                    />
                  )}
                </div>
              ))
            ) : (article.content || article.body || article.description) ? (
              <div className="blog-section-block">
                <div
                  className="blog-block-text rich-editorial-content space-y-3"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(article.content || article.body || article.description || ''),
                  }}
                />
              </div>
            ) : article.summary ? (
              <div className="blog-section-block">
                <p className="blog-block-text">{article.summary}</p>
              </div>
            ) : null}
          </div>
        </article>

        {/* Right Column: Sidebar Rail */}
        <aside className="blog-sidebar-right">
          {/* 1. Send Us a Message Card */}
          <div className="blog-inquiry-card">
            <h3 className="inquiry-main-title">Send Us a Message</h3>
            <p className="inquiry-subtitle">
              All inquiries are screened and assigned to a dedicated case officer within 15 minutes.
            </p>

            {submitted ? (
              <div className="inquiry-completed-box">
                <CheckCircle2 size={42} className="inquiry-success-icon" />
                <h4>Message Received!</h4>
                <p>
                  Thank you <strong>{fullName || 'Traveler'}</strong>. Our travel advisor has received your inquiry and will contact you directly at <strong>{email}</strong>.
                </p>
                <button
                  type="button"
                  className="btn-send-inquiry-gold mt-4"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="inquiry-actual-form">
                {/* Full Name */}
                <div className="inquiry-row-field">
                  <label htmlFor="blogInquiryName">Full Name</label>
                  <input
                    id="blogInquiryName"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                {/* Email Address */}
                <div className="inquiry-row-field">
                  <label htmlFor="blogInquiryEmail">Email Address</label>
                  <input
                    id="blogInquiryEmail"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* What do you need help with? */}
                <div className="inquiry-row-field">
                  <label htmlFor="blogInquiryService">What do you need help with?</label>
                  <div className="select-with-chevron">
                    <select
                      id="blogInquiryService"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="Umrah Packages & Visas">Umrah Packages &amp; Visas</option>
                      <option value="Flight Tickets & Reservations">Flight Tickets &amp; Reservations</option>
                      <option value="Hotel Bookings">Hotel Bookings</option>
                      <option value="Visit Visas">Visit Visas</option>
                      <option value="Custom Holiday Tours">Custom Holiday Tours</option>
                    </select>
                    <ChevronDown size={14} className="select-chevron-icon" />
                  </div>
                </div>

                {/* Message Detail */}
                <div className="inquiry-row-field">
                  <label htmlFor="blogInquiryMsg">Message Detail</label>
                  <textarea
                    id="blogInquiryMsg"
                    rows={3}
                    placeholder="Briefly state your departure point, travel dates, or embassy requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-send-inquiry-gold">
                  <span>Send Inquiry</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>

          {/* 2. 24/7 Questions Support Box */}
          <div className="blog-questions-support-box">
            <h4 className="support-box-heading">
              Still have questions regarding your upcoming trip?
            </h4>
            <p className="support-box-text">
              Our travel consultants are active 24/7 on WhatsApp to provide instant personalized support.
            </p>

            <div className="support-buttons-group">
              <button
                type="button"
                className="btn-support-whatsapp"
                onClick={handleWhatsAppChat}
              >
                <MessageSquare size={15} />
                <span>Chat on WhatsApp</span>
              </button>

              <a href="tel:+923010044147" className="btn-support-call">
                <Phone size={13} />
                <span>Call +92 301 0044147</span>
              </a>
            </div>
          </div>

          {/* 3. Popular Tags Card (Positioned at bottom) */}
          <div className="blog-popular-tags-card">
            <h3 className="sidebar-card-heading">Popular Tags</h3>
            <div className="sidebar-tags-wrap">
              {(article.tags || [
                'Flight Hacks',
                'Cheap Airfare',
                'Baggage Allowance',
                'GDS Fares',
                'Airline Deals'
              ]).map((tag, tIdx) => (
                <span key={tIdx} className="sidebar-tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* 5. "Related Blogs" Section */}
      {relatedArticles.length > 0 && (
        <section className="detail-container blog-related-section">
          <div className="blog-related-title-bar">
            <h2 className="blog-related-heading">Related Blogs</h2>
            <button
              type="button"
              className="btn-view-all-blogs"
              onClick={() => router.push('/our-blogs')}
            >
              <span>View All</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* 4 Article Cards Grid */}
          <div className="blog-related-cards-grid">
            {relatedArticles.map((rel) => (
              <BlogCard
                key={rel.id}
                article={rel}
                onClick={() => router.push(`/our-blogs/${rel.slug || rel.id}/`)}
              />
            ))}
          </div>
        </section>
      )}

      {/* 6. Complete Footer */}
      <Footer />
    </div>
  );
}
