'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Filter,
  Search,
  ChevronLeft,
  Users,
  SlidersHorizontal,
  X,
  Loader2,
} from 'lucide-react';
import { AppBar } from '../../../shared/components/AppBar';
import { Footer } from '../../../shared/components/Footer';
import { Modals } from '../../../shared/components/Modals';
import { WhatsAppIcon } from '../../../shared';
import { COMPANY_CONFIG } from '../../../config/company';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { VisaCard } from './VisaCard';
import { visaService } from '../../../services';
import {
  VISA_COUNTRIES_FILTER,
  VISA_PRICE_TIERS,
} from '../data/visasData';

export function VisasPage({
  initialVisas = [],
  initialPagination = undefined,
  initialCountries = [],
  h1 = 'Umrah and Visit Visa Services',
  heroIntro = "Whether you need an Umrah visa or a tourist visa for another country, every application goes through a document check before it's submitted, so avoidable mistakes get caught early. Pick your visa type below to see processing time and price.",
}) {
  const router = useRouter();

  const [visas, setVisas] = useState(initialVisas);
  const [pagination, setPagination] = useState(
    initialPagination || {
      current_page: 1,
      per_page: 12,
      total_pages: 1,
      total_records: initialVisas.length,
      nextPage: null,
      has_more: false,
    },
  );

  // Use API-driven countries if available, fall back to static list
  const countries =
    initialCountries && initialCountries.length > 1
      ? initialCountries
      : VISA_COUNTRIES_FILTER;

  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 800);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const debouncedCountry = useDebounce(selectedCountry, 800);
  const debouncedPrice = useDebounce(selectedPrice, 800);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Lock background scroll on mobile when sidebar drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleWhatsApp = () => {
    window.open(COMPANY_CONFIG.getWhatsAppUrl('Hi, I need assistance with custom group visa booking. Please assist.'), '_blank');
  };

  const hasFilters = selectedCountry !== 'all' || selectedPrice !== 'all' || searchQuery.trim() !== '';

  const clearAll = () => {
    setSelectedCountry('all');
    setSelectedPrice('all');
    setSearchQuery('');
  };

  // Build API filters from current UI state
  const buildApiFilters = (page = 1) => {
    const filters = {};

    if (debouncedSearch.trim()) filters.search = debouncedSearch.trim();

    if (debouncedCountry !== 'all') {
      // Look up the full country name from the countries list
      const countryObj = countries.find(c => c.key === debouncedCountry);
      if (countryObj && countryObj.key !== 'all') {
        filters.country = countryObj.label;
      } else {
        // Direct key match for API-driven countries
        filters.country = debouncedCountry;
      }
    }

    if (debouncedPrice !== 'all') {
      if (debouncedPrice === 'under-60k') filters.price_range = 'under_60000';
      else if (debouncedPrice === '60k-120k') filters.price_range = '60000_120000';
      else if (debouncedPrice === '120k-200k') filters.price_range = '120000_200000';
      else if (debouncedPrice === '200k-plus') filters.price_range = 'above_200000';
      else filters.price_range = debouncedPrice;
    }

    filters.nextPage = page;
    filters.perPage = 12;
    return filters;
  };

  // Skip first mount refetch when SSR data is available
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    let active = true;
    setIsLoading(true);

    visaService
      .getVisasPaginated(buildApiFilters(1))
      .then((res) => {
        if (!active) return;
        setVisas(res.visas);
        setPagination(res.pagination);
        setIsLoading(false);
      })
      .catch(() => {
        if (!active) return;
        setIsLoading(false);
      });

    return () => { active = false; };
  }, [debouncedSearch, debouncedCountry, debouncedPrice]);

  // Load More handler
  const handleLoadMore = async () => {
    if (!pagination?.nextPage || isLoadingMore) return;
    setIsLoadingMore(true);

    try {
      const res = await visaService.getVisasPaginated(buildApiFilters(pagination.nextPage));
      setVisas((prev) => [...prev, ...res.visas]);
      setPagination(res.pagination);
    } catch (err) {
      console.error('[VisasPage] load more error:', err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const totalCount = pagination?.total_records ?? visas.length;

  return (
    <div className="app-layout-root">
      {/* ── 1. TopBar & Floating Navbar Hero Banner ── */}
      <AppBar
        onOpenContact={() => setIsContactOpen(true)}
        heroContent={
          <div className="tr-hero">
            <div
              className="tr-hero-bg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80')",
              }}
            />
            <div className="tr-hero-overlay" />
            <div className="tr-hero-body">
              <h1 className="tr-hero-h1">{h1}</h1>
              <p className="tr-hero-intro">{heroIntro}</p>
            </div>
          </div>
        }
      />

      {/* ── 2. Page Content ── */}
      <div className="vp-page">
        <div className="section-container">
          {/* Breadcrumb / Back button */}
          <div className="vp-breadcrumb">
            <button
              type="button"
              className="vp-breadcrumb-btn"
              onClick={() => router.push('/')}
            >
              <ChevronLeft size={16} />
              <span>Home</span>
            </button>
          </div>

          {/* Mobile filter toggle */}
          <button
            type="button"
            className="vp-mob-filter-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <SlidersHorizontal size={15} />
            <span>Filter By</span>
            {hasFilters && <span className="vp-mob-dot" />}
          </button>

          {/* Two-Column Responsive Layout */}
          <div className="vp-layout">
            {/* ──────────── LEFT SIDEBAR ──────────── */}
            <aside className={`vp-sidebar ${mobileOpen ? 'vp-sidebar-open' : ''}`}>
              <div className="vp-sidebar-card">
                {/* Mobile Close Bar */}
                <div className="vp-sb-mob-head">
                  <span>Filters</span>
                  <button
                    type="button"
                    className="vp-sb-close-btn"
                    onClick={() => setMobileOpen(false)}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Filter Header */}
                <div className="vp-sb-header">
                  <Filter size={15} className="vp-sb-filter-icon" />
                  <span>Filter By</span>
                </div>

                {/* Search Box */}
                <div className="vp-sb-search-wrap">
                  <Search size={14} className="vp-sb-search-icon" />
                  <input
                    type="text"
                    placeholder="Visa name, country..."
                    className="vp-sb-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="vp-sb-clear-btn"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>

                {/* Section 1: COUNTRIES */}
                <div className="vp-sb-section">
                  <div className="vp-sb-sec-head">
                    <span className="vp-sb-sec-title">COUNTRIES</span>
                    <span className="vp-sb-sec-sub">
                      {countries.filter(c => c.key !== 'all').length} destinations
                    </span>
                  </div>

                  <div className="vp-sb-radio-list">
                    {countries.map((c) => {
                      const isChecked = selectedCountry === c.key;
                      const count = c.key === 'all' ? totalCount : (c.count || 0);
                      return (
                        <label key={c.key} className="vp-sb-radio-row">
                          <div className="vp-sb-radio-left">
                            <input
                              type="radio"
                              name="visa-country"
                              className="vp-sb-radio"
                              checked={isChecked}
                              onChange={() => {
                                setSelectedCountry(c.key);
                                setMobileOpen(false);
                              }}
                            />
                            <span
                              className={`vp-sb-radio-label ${
                                isChecked ? 'vp-sb-radio-label-active' : ''
                              }`}
                            >
                              {c.label}
                            </span>
                          </div>
                          {count > 0 && <span className="vp-sb-count">{count}</span>}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Section 2: PRICE RANGE */}
                <div className="vp-sb-section">
                  <div className="vp-sb-sec-head">
                    <span className="vp-sb-sec-title">PRICE RANGE</span>
                    <span className="vp-sb-price-max">Up to Rs 350,000</span>
                  </div>

                  <div className="vp-price-pills-list">
                    {VISA_PRICE_TIERS.map((tier) => {
                      const isActive = selectedPrice === tier.key;
                      return (
                        <button
                          key={tier.key}
                          type="button"
                          className={`vp-price-tier-row ${
                            isActive ? 'vp-price-tier-active' : ''
                          }`}
                          onClick={() => {
                            setSelectedPrice(tier.key);
                            setMobileOpen(false);
                          }}
                        >
                          <span className="vp-price-tier-label">{tier.label}</span>
                          {tier.sub && (
                            <span className="vp-price-tier-sub">{tier.sub}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CUSTOM GROUP BOOKING CARD */}
              <div className="vp-group-booking-card">
                <div className="vp-group-booking-head">
                  <Users size={14} className="vp-group-booking-icon" />
                  <span>CUSTOM GROUP BOOKING</span>
                </div>
                <p className="vp-group-booking-desc">
                  Need fast-track corporate visas, embassy delegations, or family group processing?
                </p>
                <button
                  type="button"
                  className="vp-group-booking-btn"
                  onClick={handleWhatsApp}
                >
                  <WhatsAppIcon size={15} color="#25D366" />
                  <span>Contact us</span>
                </button>
              </div>
            </aside>

            {/* ──────────── RIGHT MAIN CONTENT ──────────── */}
            <main className="vp-main-col">
              {/* Header Box */}
              <div className="vp-header-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <h2 className="vp-header-title">Global Visit Visa Services</h2>
                    <p className="vp-header-sub">
                      Showing {visas.length} of {totalCount} available visas
                    </p>
                  </div>
                  {hasFilters && (
                    <button type="button" className="tr-clear-btn" onClick={clearAll}>
                      <X size={12} /> Clear filters
                    </button>
                  )}
                </div>
              </div>

              {/* Cards Grid */}
              {isLoading ? (
                <div className="vp-empty-state" style={{ color: '#64748b' }}>
                  <Loader2 size={32} style={{ animation: 'spin 1s linear infinite' }} />
                  <p className="vp-empty-title">Loading visas...</p>
                </div>
              ) : visas.length > 0 ? (
                <>
                  <div className="vp-cards-grid">
                    {visas.map((visa) => (
                      <VisaCard
                        key={visa.id}
                        visa={visa}
                      />
                    ))}
                  </div>

                  {pagination?.has_more && (
                    <div className="gt-load-more-container">
                      <button
                        type="button"
                        className="gt-load-more-btn"
                        onClick={handleLoadMore}
                        disabled={isLoadingMore}
                      >
                        {isLoadingMore ? (
                          <>
                            <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                            Loading more...
                          </>
                        ) : (
                          `Load More (${totalCount - visas.length} remaining)`
                        )}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="vp-empty-state">
                  <p className="vp-empty-title">No visas found</p>
                  <p className="vp-empty-desc">
                    Try adjusting your filters or search keywords.
                  </p>
                  <button
                    type="button"
                    className="vp-empty-reset-btn"
                    onClick={clearAll}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {mobileOpen && <div className="tr-overlay" onClick={() => setMobileOpen(false)} />}

      {/* ── 3. Newsletter Banner & Full Footer ── */}
      <Footer />

      {/* ── 4. Contact & Consultation Modal ── */}
      <Modals
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default VisasPage;
