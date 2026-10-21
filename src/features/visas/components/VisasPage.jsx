'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
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
import { Pagination } from '../../../shared/components/Pagination';
import { VisaCard } from './VisaCard';
import { visaService } from '../../../services';
import {
  VISA_COUNTRIES_FILTER,
  VISA_PRICE_TIERS,
} from '../data/visasData';

export function VisasPage({
  initialVisas = [],
  initialPagination = undefined,
  initialVisaLookups = null,
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

  const [visaLookups, setVisaLookups] = useState(initialVisaLookups);

  useEffect(() => {
    if (initialPagination) {
      setPagination(initialPagination);
    }
  }, [initialPagination]);

  useEffect(() => {
    if (initialVisas) {
      setVisas(initialVisas);
    }
  }, [initialVisas]);

  useEffect(() => {
    if (initialVisaLookups) return;
    let isMounted = true;
    visaService.getVisaLookups().then((lookups) => {
      if (isMounted && lookups) {
        setVisaLookups(lookups);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [initialVisaLookups]);

  // Derive countries list from API lookups, fallback to initialCountries / static
  const countries = useMemo(() => {
    const list = [{ key: 'all', label: 'All Countries', count: 0 }];
    const apiCountries = visaLookups?.countries || [];
    if (Array.isArray(apiCountries) && apiCountries.length > 0) {
      apiCountries.forEach((c) => {
        const val = typeof c === 'string' ? c : (c.value || c.name || c.country || '');
        if (val) {
          list.push({
            key: val.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            label: val,
            count: typeof c.visas_count === 'number' ? c.visas_count : (c.count || 0),
          });
        }
      });
      return list;
    }
    if (Array.isArray(initialCountries) && initialCountries.length > 1) {
      return initialCountries;
    }
    return VISA_COUNTRIES_FILTER;
  }, [visaLookups, initialCountries]);

  // Derive visa types list from API lookups
  const visaTypes = useMemo(() => {
    const list = [{ key: 'all', label: 'All Types', count: 0 }];
    const apiTypes = visaLookups?.visa_types || [];
    if (Array.isArray(apiTypes) && apiTypes.length > 0) {
      apiTypes.forEach((t) => {
        const val = typeof t === 'string' ? t : (t.value || t.name || t.visa_type || '');
        if (val) {
          list.push({
            key: val.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            label: val,
            count: typeof t.visas_count === 'number' ? t.visas_count : (t.count || 0),
          });
        }
      });
      return list;
    }
    return [
      { key: 'all', label: 'All Types', count: 0 },
      { key: 'e-visa', label: 'E-Visa', count: 0 },
      { key: 'visit-visa', label: 'Visit Visa', count: 0 },
    ];
  }, [visaLookups]);

  // Derive durations list from API lookups
  const durations = useMemo(() => {
    const list = [{ key: 'all', label: 'All Durations', count: 0 }];
    const apiDurations = visaLookups?.durations || [];
    if (Array.isArray(apiDurations) && apiDurations.length > 0) {
      apiDurations.forEach((d) => {
        const val = typeof d === 'string' ? d : (d.value || d.name || d.duration || '');
        if (val) {
          list.push({
            key: val.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            label: val,
            count: typeof d.visas_count === 'number' ? d.visas_count : (d.count || 0),
          });
        }
      });
      return list;
    }
    return [
      { key: 'all', label: 'All Durations', count: 0 },
      { key: '30-days', label: '30 Days', count: 0 },
      { key: '60-days', label: '60 Days', count: 0 },
      { key: '90-days', label: '90 Days', count: 0 },
    ];
  }, [visaLookups]);

  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 400);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedVisaType, setSelectedVisaType] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageChanging, setIsPageChanging] = useState(false);
  const resultsHeadRef = useRef(null);

  // Lock background scroll on mobile only when sidebar drawer is open
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleWhatsApp = () => {
    window.open(COMPANY_CONFIG.getWhatsAppUrl('Hi, I need assistance with custom group visa booking. Please assist.'), '_blank');
  };

  const hasFilters =
    selectedCountry !== 'all' ||
    selectedVisaType !== 'all' ||
    selectedDuration !== 'all' ||
    selectedPrice !== 'all' ||
    searchQuery.trim() !== '';

  const updateUrlPage = (page) => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (page > 1) {
      url.searchParams.set('page', String(page));
    } else {
      url.searchParams.delete('page');
    }
    window.history.pushState({ page }, '', url.toString());
  };

  const clearAll = () => {
    setSelectedCountry('all');
    setSelectedVisaType('all');
    setSelectedDuration('all');
    setSelectedPrice('all');
    setSearchQuery('');
    updateUrlPage(1);
  };

  // Build API filters from current UI state
  const buildApiFilters = (page = 1) => {
    const filters = {};

    if (debouncedSearch.trim()) filters.search = debouncedSearch.trim();

    if (selectedCountry !== 'all') {
      const countryObj = countries.find((c) => c.key === selectedCountry);
      if (countryObj && countryObj.key !== 'all') {
        filters.country = countryObj.label;
      } else {
        filters.country = selectedCountry;
      }
    }

    if (selectedVisaType !== 'all') {
      const typeObj = visaTypes.find((t) => t.key === selectedVisaType);
      if (typeObj && typeObj.key !== 'all') {
        filters.visa_type = typeObj.label;
      } else {
        filters.visa_type = selectedVisaType;
      }
    }

    if (selectedDuration !== 'all') {
      const durObj = durations.find((d) => d.key === selectedDuration);
      if (durObj && durObj.key !== 'all') {
        filters.duration = durObj.label;
      } else {
        filters.duration = selectedDuration;
      }
    }

    if (selectedPrice !== 'all') {
      if (selectedPrice === 'under-60k') filters.price_range = 'under_60000';
      else if (selectedPrice === '60k-120k') filters.price_range = '60000_120000';
      else if (selectedPrice === '120k-200k') filters.price_range = '120000_200000';
      else if (selectedPrice === '200k-plus') filters.price_range = 'above_200000';
      else filters.price_range = selectedPrice;
    }

    filters.nextPage = page;
    filters.perPage = 12;
    return filters;
  };

  // Skip initial mount fetch to prevent overwriting SSR data
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
        updateUrlPage(1);
      })
      .catch(() => {
        if (!active) return;
        setIsLoading(false);
      });

    return () => { active = false; };
  }, [debouncedSearch, selectedCountry, selectedVisaType, selectedDuration, selectedPrice]);

  // Page Change handler
  const handlePageChange = async (targetPage, updateHistory = true) => {
    const curr = Number(pagination?.current_page || 1);
    const total = Number(pagination?.total_pages || 1);
    if (
      targetPage === curr ||
      targetPage < 1 ||
      (total > 0 && targetPage > total) ||
      isLoading ||
      isPageChanging
    ) {
      return;
    }

    setIsPageChanging(true);

    try {
      const res = await visaService.getVisasPaginated(buildApiFilters(targetPage));
      setVisas(res.visas);
      setPagination(res.pagination);

      if (updateHistory) {
        updateUrlPage(targetPage);
      }

      if (resultsHeadRef.current) {
        resultsHeadRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } catch (err) {
      console.error('[VisasPage] page change error:', err);
    } finally {
      setIsPageChanging(false);
    }
  };

  // Handle popstate for browser forward/back buttons
  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      const targetPage = parseInt(params.get('page') || '1', 10);
      if (targetPage !== Number(pagination?.current_page || 1)) {
        handlePageChange(targetPage, false);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [pagination?.current_page]);

  // Sync with URL parameter on mount if it differs from current page
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const urlPage = parseInt(params.get('page') || '', 10);
    if (urlPage && urlPage > 1 && urlPage !== Number(pagination?.current_page || 1)) {
      handlePageChange(urlPage, false);
    }
  }, []);

  const totalCount = Number(pagination?.total_records ?? visas.length);
  const currentPage = Number(pagination?.current_page || 1);
  const totalPages = Number(pagination?.total_pages || 1);
  const perPage = Number(pagination?.per_page || 12);
  const startIndex = totalCount > 0 ? (currentPage - 1) * perPage + 1 : 0;
  const endIndex = Math.min(currentPage * perPage, totalCount);

  return (
    <div className="app-layout-root">
      {/* ── 1. TopBar & Floating Navbar Hero Banner ── */}
      <AppBar
        onOpenContact={() => setIsContactOpen(true)}
        heroContent={
          <div className="tr-hero">
            <div className="tr-hero-bg" />
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
                      {countries.filter((c) => c.key !== 'all').length} destinations
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

                {/* Section 2: VISA TYPES */}
                <div className="vp-sb-section">
                  <div className="vp-sb-sec-head">
                    <span className="vp-sb-sec-title">VISA TYPES</span>
                    <span className="vp-sb-sec-sub">
                      {visaTypes.filter((t) => t.key !== 'all').length} types
                    </span>
                  </div>

                  <div className="vp-sb-radio-list">
                    {visaTypes.map((t) => {
                      const isChecked = selectedVisaType === t.key;
                      const count = t.key === 'all' ? totalCount : (t.count || 0);
                      return (
                        <label key={t.key} className="vp-sb-radio-row">
                          <div className="vp-sb-radio-left">
                            <input
                              type="radio"
                              name="visa-type"
                              className="vp-sb-radio"
                              checked={isChecked}
                              onChange={() => {
                                setSelectedVisaType(t.key);
                                setMobileOpen(false);
                              }}
                            />
                            <span
                              className={`vp-sb-radio-label ${
                                isChecked ? 'vp-sb-radio-label-active' : ''
                              }`}
                            >
                              {t.label}
                            </span>
                          </div>
                          {count > 0 && <span className="vp-sb-count">{count}</span>}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: DURATION */}
                <div className="vp-sb-section">
                  <div className="vp-sb-sec-head">
                    <span className="vp-sb-sec-title">DURATION</span>
                    <span className="vp-sb-sec-sub">
                      {durations.filter((d) => d.key !== 'all').length} durations
                    </span>
                  </div>

                  <div className="vp-sb-radio-list">
                    {durations.map((d) => {
                      const isChecked = selectedDuration === d.key;
                      const count = d.key === 'all' ? totalCount : (d.count || 0);
                      return (
                        <label key={d.key} className="vp-sb-radio-row">
                          <div className="vp-sb-radio-left">
                            <input
                              type="radio"
                              name="visa-duration"
                              className="vp-sb-radio"
                              checked={isChecked}
                              onChange={() => {
                                setSelectedDuration(d.key);
                                setMobileOpen(false);
                              }}
                            />
                            <span
                              className={`vp-sb-radio-label ${
                                isChecked ? 'vp-sb-radio-label-active' : ''
                              }`}
                            >
                              {d.label}
                            </span>
                          </div>
                          {count > 0 && <span className="vp-sb-count">{count}</span>}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Section 4: PRICE RANGE */}
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
              <div className="vp-header-card" ref={resultsHeadRef}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <h2 className="vp-header-title">Global Visit Visa Services</h2>
                    <p className="vp-header-sub">
                      {totalCount > 0 ? (
                        <>
                          Showing {startIndex} – {endIndex} of {totalCount} available visas
                          {totalPages > 1 && ` · Page ${currentPage} of ${totalPages}`}
                        </>
                      ) : (
                        `Showing ${visas.length} of ${totalCount} available visas`
                      )}
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
              {isLoading && visas.length === 0 ? (
                <div className="vp-empty-state" style={{ color: '#64748b' }}>
                  <Loader2 size={32} style={{ animation: 'spin 1s linear infinite' }} />
                  <p className="vp-empty-title">Loading visas...</p>
                </div>
              ) : visas.length > 0 ? (
                <>
                  <div
                    className="vp-cards-grid"
                    style={
                      isLoading || isPageChanging
                        ? {
                            opacity: 0.6,
                            pointerEvents: 'none',
                            transition: 'opacity 0.2s ease',
                          }
                        : undefined
                    }
                  >
                    {visas.map((visa, idx) => (
                      <VisaCard
                        key={visa.id}
                        visa={visa}
                        priority={idx < 6}
                      />
                    ))}
                  </div>

                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalCount={totalCount}
                    perPage={perPage}
                    isLoading={isPageChanging}
                    onPageChange={handlePageChange}
                    itemName="available visas"
                    id="vp-pagination"
                  />
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
