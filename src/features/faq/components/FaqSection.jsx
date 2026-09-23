'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { FAQ_ITEMS as FALLBACK_ITEMS } from '../data/faqData';
import { FaqAccordionItem } from './FaqAccordionItem';
import { COMPANY_CONFIG } from '../../../config/company';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { contentService } from '../../../services/content.service';

export function FaqSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [activeCategory, setActiveCategory] = useState('');
  const [openFaqId, setOpenFaqId] = useState(null);
  const [faqItems, setFaqItems] = useState(FALLBACK_ITEMS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    contentService
      .getFaqs()
      .then(({ items }) => {
        if (!isMounted) return;
        if (Array.isArray(items) && items.length > 0) {
          setFaqItems(items);
          setOpenFaqId(items[0]?.id ?? null);
        } else {
          setFaqItems(FALLBACK_ITEMS);
          setOpenFaqId(FALLBACK_ITEMS[0]?.id ?? 1);
        }
      })
      .catch(() => {
        if (!isMounted) return;
        setFaqItems(FALLBACK_ITEMS);
        setOpenFaqId(FALLBACK_ITEMS[0]?.id ?? 1);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    if (!faqItems || faqItems.length === 0) return [];

    const PREFERRED_ORDER = [
      'general',
      'flights-baggage',
      'flights',
      'hotels',
      'umrah-nusuk',
      'umrah',
      'visit-visas',
      'visas',
      'refunds',
    ];

    const catMap = new Map();
    faqItems.forEach((item) => {
      if (!item.category) return;
      const slug = item.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      if (!catMap.has(slug)) {
        catMap.set(slug, {
          id: slug,
          label: item.category,
          rawName: item.category,
        });
      }
    });

    return Array.from(catMap.values()).sort((a, b) => {
      const idxA = PREFERRED_ORDER.indexOf(a.id);
      const idxB = PREFERRED_ORDER.indexOf(b.id);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.label.localeCompare(b.label);
    });
  }, [faqItems]);

  useEffect(() => {
    if (categories.length > 0) {
      const exists = categories.some((c) => c.id === activeCategory);
      if (!exists) {
        setActiveCategory(categories[0].id);
      }
    }
  }, [categories, activeCategory]);

  const filteredFaqs = useMemo(() => {
    const getFaqNum = (item) => {
      const match = (item.question || '').match(/^(\d+)\./);
      if (match) return parseInt(match[1], 10);
      if (typeof item.order === 'number') return item.order;
      if (typeof item.id === 'number') return item.id;
      return 0;
    };

    const filtered = faqItems.filter((item) => {
      const itemCatSlug = (item.category || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const matchesCategory =
        !activeCategory ||
        itemCatSlug === activeCategory ||
        (item.category || '').toLowerCase() === activeCategory.toLowerCase();

      const matchesSearch =
        debouncedSearch.trim() === '' ||
        (item.question || '').toLowerCase().includes(debouncedSearch.toLowerCase().trim()) ||
        (item.answer || '').toLowerCase().includes(debouncedSearch.toLowerCase().trim());

      return matchesCategory && matchesSearch;
    });

    return filtered.sort((a, b) => {
      const numA = getFaqNum(a);
      const numB = getFaqNum(b);
      if (numA !== numB) return numA - numB;
      return (a.id || 0) - (b.id || 0);
    });
  }, [faqItems, activeCategory, debouncedSearch]);

  useEffect(() => {
    if (filteredFaqs.length > 0) {
      const exists = filteredFaqs.some((item) => item.id === openFaqId);
      if (!exists) {
        setOpenFaqId(filteredFaqs[0].id);
      }
    }
  }, [activeCategory, filteredFaqs, openFaqId]);

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-feature-section" id="faq">
      <div className="section-container">
        {/* Centered Header */}
        <div className="faq-header-centered">
          <div className="section-eyebrow-badge faq-eyebrow">
            <HelpCircle size={15} className="eyebrow-icon faq-eyebrow-icon" />
            <span>GOT QUESTIONS? WE'VE GOT ANSWERS</span>
          </div>

          <h2 className="section-main-title">Frequently Asked Questions</h2>
          <p className="section-sub-title">
            Answers about flight bookings, hotel reservations, Umrah visas, and refund policies for travelers across Pakistan.
          </p>

          {/* Search Input Bar */}
          <div className="faq-search-wrapper">
            <div className="faq-search-bar">
              <Search size={18} className="faq-search-icon" />
              <input
                type="text"
                placeholder="Search question (e.g. baggage, visa, booking, refund)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faq-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="faq-clear-search"
                  onClick={() => setSearchQuery('')}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills (No 'All Questions' tab) */}
          <div className="faq-filters-pill-group">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`faq-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Items List */}
        <div className="faq-accordion-list">
          {filteredFaqs.map((faq) => (
            <FaqAccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openFaqId === faq.id}
              onToggle={() => toggleFaq(faq.id)}
            />
          ))}

          {!loading && filteredFaqs.length === 0 && (
            <div className="faq-empty-results">
              <p>No questions matched your search query "{searchQuery}".</p>
              <button
                type="button"
                className="btn-primary-blue mt-3"
                onClick={() => {
                  setSearchQuery('');
                  if (categories.length > 0) {
                    setActiveCategory(categories[0].id);
                  }
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Support Callout Box */}
        <div className="faq-support-callout">
          <h3 className="faq-support-title">Need Help Booking Your Umrah or Trip?</h3>
          <p className="faq-support-desc">
            Our travel experts help with Umrah packages, visa assistance, flights, hotel bookings, and customized travel plans. Contact World Track Aviation for personalized travel support.
          </p>
          <div className="faq-support-actions">
            <a
              href="https://wa.me/923350122252"
              target="_blank"
              rel="noopener noreferrer"
              className="faq-whatsapp-btn"
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="faq-call-btn"
            >
              <Phone size={15} />
              <span>Office Line {COMPANY_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
