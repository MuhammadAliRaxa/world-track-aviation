import React from 'react';
import { X, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export function InsightArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="visa-detail-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn modal-close-btn-visa"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header Hero */}
        <div className="visa-modal-header">
          <div className="visa-modal-header-image-box">
            <img src={article.image} alt={article.title} className="visa-modal-img" />
            <div className="visa-modal-header-gradient" />
            <div className="visa-modal-header-content">
              <span className="visa-modal-badge">{article.badge}</span>
              <h2 className="visa-modal-title">{article.title}</h2>
              <div className="visa-modal-meta-row">
                <span className="visa-modal-meta-item">
                  <Calendar size={14} /> Published: <strong>{article.date}</strong>
                </span>
                <span className="visa-modal-meta-item">
                  <Clock size={14} /> Reading Time: <strong>{article.readTime}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="visa-modal-body-scroll">
          <p className="article-lead-summary">
            {article.summary}
          </p>

          <div className="article-points-list">
            <h4 className="article-points-title">Key Regulatory &amp; Travel Insights:</h4>
            {Array.isArray(article.content) ? (
              <ul>
                {article.content.map((point, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : typeof article.content === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            ) : null}
          </div>

          <div className="article-modal-footer-cta">
            <p>Need dedicated assistance with your visa, flights, or Umrah booking?</p>
            <button
              type="button"
              className="btn-primary-blue"
              onClick={onClose}
            >
              Consult an Expert Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
