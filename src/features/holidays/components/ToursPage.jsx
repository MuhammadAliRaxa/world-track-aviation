'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Filter,
  Search,
  Star,
  Clock,
  ChevronLeft,
  X,
  Users,
  SlidersHorizontal,
  Building2,
  Plane,
  Car,
  ShieldCheck,
  Loader2,
} from 'lucide-react';
import { AppBar } from '../../../shared/components/AppBar';
import { Footer } from '../../../shared/components/Footer';
import { PassportIcon, WhatsAppIcon } from '../../../shared';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { COMPANY_CONFIG } from '../../../config/company';
import { tourService } from '../../../services';
import { PRICE_RANGES } from '../data/holidaysData';

/* ── Icon map for package includes ─────────────────────────── */
const INCLUDE_ICONS = {
  hotel: <Building2 size={13} />,
  visa: <PassportIcon size={13} />,
  air: <Plane size={13} />,
  transfer: <Car size={13} />,
  insurance: <ShieldCheck size={13} />,
};

/* ── Tour card ────────────────────────────────────────────── */
function TourCard({ tour }) {
  const router = useRouter();

  const handleViewDetails = () => {
    const slug = tour.seo?.url_slug || tour.id;
    router.push(`/tour-packages/${slug}/`);
  };

  return (
    <div className="tr-card" onClick={handleViewDetails} role="button" tabIndex={0}>
      {/* Image block */}
      <div className="tr-card-img-wrap">
        <img
          src={tour.image}
          alt={tour.imageAltText || tour?.seo?.image_alt || `${tour.title} - World Track Aviation`}
          className="tr-card-img"
          loading="lazy"
        />

        {/* Rating badge – top right */}
        {tour.rating > 0 && (
          <div className="tr-rating-badge">
            <Star size={11} className="tr-rating-star" />
            <span>{tour.rating} ({tour.reviewCount})</span>
          </div>
        )}

        {/* Duration pill – bottom left */}
        <div className="tr-duration-pill">
          <Clock size={11} />
          <span>{tour.duration}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="tr-card-body">
        {/* Destination label */}
        <div className="tr-destination-tag">{tour.location}</div>

        {/* Title */}
        <h3 className="tr-card-title">{tour.title}</h3>

        {/* Package Includes */}
        <div className="tr-pkg-label">PACKAGE INCLUDES</div>
        <div className="tr-pkg-icons-row">
          {tour.packageIncludes ? (
            tour.packageIncludes.map((inc) => (
              <div key={`tr-pkg-${tour.id}-${inc.label}`} className="tr-pkg-icon-item">
                {INCLUDE_ICONS[inc.icon] || <ShieldCheck size={13} />}
                <span>{inc.label}</span>
              </div>
            ))
          ) : (
            <>
              <div className="tr-pkg-icon-item"><Building2 size={13} /><span>Hotel</span></div>
              <div className="tr-pkg-icon-item"><PassportIcon size={13} /><span>Visa</span></div>
              <div className="tr-pkg-icon-item"><Plane size={13} /><span>Air Ticket</span></div>
              <div className="tr-pkg-icon-item"><Car size={13} /><span>Pick &amp; Drop</span></div>
              <div className="tr-pkg-icon-item"><ShieldCheck size={13} /><span>Insurance</span></div>
            </>
          )}
        </div>

        {/* Price + CTA */}
        <div className="tr-card-footer">
          <div className="tr-price-block">
            <span className="tr-starting-from">STARTING FROM</span>
            <div className="tr-price">Rs {tour.pricePKR} <span className="tr-per">/ person</span></div>
          </div>
          <button
            type="button"
            className="tr-view-btn"
            onClick={handleViewDetails}
            id={`view-tour-${tour.id}`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── MAIN PAGE ────────────────────────────────────────────── */
export function ToursPage({
  initialTours = [],
  initialPagination = undefined,
  initialDestinations = [],
  h1 = 'International Tour Packages',
  heroIntro = "Every package here includes the visa, hotel, and transport, so you're not left piecing together separate bookings. Pick a destination below and see exactly what's included before you pay for anything.",
}) {
  const router = useRouter();

  const [tours, setTours] = useState(initialTours);
  const [pagination, setPagination] = useState(
    initialPagination || {
      current_page: 1,
      per_page: 12,
      total_pages: 1,
      total_records: initialTours.length,
      nextPage: null,
      has_more: false,
    },
  );
  const [destinations, setDestinations] = useState(initialDestinations);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Fetch destinations from lookups if not provided via SSR
  useEffect(() => {
    if (!initialDestinations || initialDestinations.length === 0) {
      tourService.getDestinations().then(setDestinations);
    }
  }, [initialDestinations]);

  const [selectedDest, setSelectedDest] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedStars, setSelectedStars] = useState([]);
  const debouncedDest = useDebounce(selectedDest, 800);
  const debouncedPrice = useDebounce(selectedPrice, 800);
  const debouncedStars = useDebounce(selectedStars, 800);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 800);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleStar = (n) =>
    setSelectedStars(p => p.includes(n) ? p.filter(x => x !== n) : [...p, n]);

  const clearAll = () => {
    setSelectedDest('all');
    setSelectedPrice('all');
    setSelectedStars([]);
    setSearchQuery('');
  };

  const hasFilters = selectedDest !== 'all' || selectedPrice !== 'all' || selectedStars.length > 0 || searchQuery.trim() !== '';

  // Lock background scroll on mobile when sidebar drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Skip first mount refetch when SSR data is available
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    let active = true;
    setIsLoading(true);

    const buildFilters = () => {
      const filters = {};

      if (debouncedSearch.trim()) filters.search = debouncedSearch.trim();

      if (debouncedDest !== 'all') {
        // Parse "City, Country" format from destinations
        const parts = debouncedDest.split(',');
        if (parts[0]) filters.city = parts[0].trim();
        if (parts[1]) filters.country = parts[1].trim();
      }

      if (debouncedPrice !== 'all') {
        // Map UI keys to API values
        if (debouncedPrice === 'under60') filters.price_range = 'under_60000';
        else if (debouncedPrice === '60to120') filters.price_range = '60000_120000';
        else if (debouncedPrice === '120to200') filters.price_range = '120000_200000';
        else if (debouncedPrice === 'above200') filters.price_range = 'above_200000';
        else filters.price_range = debouncedPrice;
      }

      if (debouncedStars.length > 0) {
        filters.rating = debouncedStars[0];
      }

      filters.nextPage = 1;
      filters.perPage = 12;
      return filters;
    };

    tourService
      .getToursPaginated(buildFilters())
      .then((res) => {
        if (!active) return;
        setTours(res.tours);
        setPagination(res.pagination);
        setIsLoading(false);
      })
      .catch(() => {
        if (!active) return;
        setIsLoading(false);
      });

    return () => { active = false; };
  }, [debouncedSearch, debouncedDest, debouncedPrice, debouncedStars]);

  // Load More: keep prior filters, update nextPage
  const handleLoadMore = async () => {
    if (!pagination?.nextPage || isLoadingMore) return;
    setIsLoadingMore(true);

    try {
      const filters = {};

      if (debouncedSearch.trim()) filters.search = debouncedSearch.trim();
      if (debouncedDest !== 'all') {
        const parts = debouncedDest.split(',');
        if (parts[0]) filters.city = parts[0].trim();
        if (parts[1]) filters.country = parts[1].trim();
      }
      if (debouncedPrice !== 'all') {
        if (debouncedPrice === 'under60') filters.price_range = 'under_60000';
        else if (debouncedPrice === '60to120') filters.price_range = '60000_120000';
        else if (debouncedPrice === '120to200') filters.price_range = '120000_200000';
        else if (debouncedPrice === 'above200') filters.price_range = 'above_200000';
        else filters.price_range = debouncedPrice;
      }
      if (debouncedStars.length > 0) filters.rating = debouncedStars[0];
      filters.nextPage = pagination.nextPage;
      filters.perPage = 12;

      const res = await tourService.getToursPaginated(filters);
      setTours((prev) => [...prev, ...res.tours]);
      setPagination(res.pagination);
    } catch (err) {
      console.error('[ToursPage] load more error:', err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const destCounts = useMemo(() => {
    const map = {};
    tours.forEach(t => {
      map[t.destination] = (map[t.destination] || 0) + 1;
    });
    return map;
  }, [tours]);

  const handleWhatsApp = () =>
    window.open(COMPANY_CONFIG.getWhatsAppUrl('Hi, I need a custom group tour quote. Please assist.'), '_blank');

  const totalCount = pagination?.total_records ?? tours.length;

  return (
    <div className="app-layout-root">
      {/* ── Hero ── */}
      <AppBar
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

      {/* ── Page body ── */}
      <div className="tr-page">
        <div className="section-container">

          {/* breadcrumb */}
          <div className="tr-breadcrumb">
            <button type="button" className="tr-breadcrumb-btn" onClick={() => router.push('/')}>
              <ChevronLeft size={14} />
              <span>Home</span>
            </button>
          </div>

          {/* mobile filter btn */}
          <button
            type="button"
            className="tr-mob-filter-btn"
            onClick={() => setMobileOpen(true)}
          >
            <SlidersHorizontal size={15} />
            Filter &amp; Sort
            {hasFilters && <span className="tr-mob-dot" />}
          </button>

          <div className="tr-layout">

            {/* ──────────── SIDEBAR ──────────── */}
            <aside className={`tr-sidebar${mobileOpen ? ' tr-sidebar-open' : ''}`}>

              <div className="hp-sidebar-card">
                {/* Mobile Close Bar */}
                <div className="hp-sb-mob-head">
                  <span>Filters</span>
                  <button
                    type="button"
                    className="hp-sb-close-btn"
                    onClick={() => setMobileOpen(false)}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Filter Header */}
                <div className="hp-sb-header">
                  <Filter size={15} className="hp-sb-filter-icon" />
                  <span>Filter By</span>
                </div>

                {/* Search Box */}
                <div className="hp-sb-search-wrap">
                  <Search size={14} className="hp-sb-search-icon" />
                  <input
                    type="text"
                    placeholder="Search tours or destination..."
                    className="hp-sb-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="hp-sb-clear-btn"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>

                {/* Section 1: DESTINATION */}
                <div className="hp-sb-section">
                  <div className="hp-sb-sec-head">
                    <span className="hp-sb-sec-title">DESTINATION</span>
                    <span className="hp-sb-sec-sub">{destinations.length} places</span>
                  </div>

                  <div className="hp-sb-radio-list">
                    {destinations.map((d) => {
                      const key = typeof d === 'string' ? d : d.key;
                      const label = typeof d === 'string' ? (d === 'all' ? 'All Destinations' : d) : d.label;
                      const count = key === 'all'
                        ? (d.count || totalCount)
                        : (d.count || destCounts[key] || 0);
                      const isChecked = selectedDest === key;

                      return (
                        <label key={key} className="hp-sb-radio-row">
                          <div className="hp-sb-radio-left">
                            <input
                              type="radio"
                              name="tour-destination"
                              className="hp-sb-radio"
                              checked={isChecked}
                              onChange={() => {
                                setSelectedDest(key);
                                setMobileOpen(false);
                              }}
                            />
                            <span
                              className={`hp-sb-radio-label ${
                                isChecked ? 'hp-sb-radio-label-active' : ''
                              }`}
                            >
                              {label}
                            </span>
                          </div>
                          <span className="hp-sb-count">{count}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Section 2: PACKAGE BUDGET */}
                <div className="hp-sb-section">
                  <div className="hp-sb-sec-head">
                    <span className="hp-sb-sec-title">PACKAGE BUDGET</span>
                    <span className="hp-sb-price-max">Up to Rs 350,000</span>
                  </div>

                  <div className="hp-price-pills-list">
                    {PRICE_RANGES.map((r) => {
                      const isActive = selectedPrice === r.key;
                      return (
                        <button
                          key={r.key}
                          type="button"
                          className={`hp-price-tier-row ${
                            isActive ? 'hp-price-tier-active' : ''
                          }`}
                          onClick={() => {
                            setSelectedPrice(r.key);
                            setMobileOpen(false);
                          }}
                        >
                          <span className="hp-price-tier-label">{r.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: HOTEL STAR RATING */}
                <div className="hp-sb-section">
                  <div className="hp-sb-sec-head">
                    <span className="hp-sb-sec-title">HOTEL STAR RATING</span>
                  </div>

                  <div className="hp-sb-check-list">
                    {[5, 4, 3].map((n) => {
                      const isChecked = selectedStars.includes(n);
                      const count = tours.filter(t => t.stars === n).length;
                      return (
                        <label key={n} className="hp-sb-check-row">
                          <div className="hp-sb-check-left">
                            <input
                              type="checkbox"
                              className="hp-sb-checkbox"
                              checked={isChecked}
                              onChange={() => toggleStar(n)}
                            />
                            <div className="hp-stars-icons">
                              {Array.from({ length: n }).map((_, i) => (
                                <Star key={i} size={11} className="hp-star-gold" />
                              ))}
                            </div>
                            <span className="hp-sb-check-label">{n} Stars</span>
                          </div>
                          <span className="hp-sb-count">{count}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* CUSTOM GROUP BOOKING CARD */}
                <div className="hp-group-booking-card">
                  <div className="hp-group-booking-head">
                    <Users size={14} className="hp-group-booking-icon" />
                    <span>CUSTOM GROUP BOOKING</span>
                  </div>
                  <p className="hp-group-booking-desc">
                    Need 5+ seats, VIP treatment? High-speed from connections, or presidential suites on SaudiAir?
                  </p>
                  <button
                    type="button"
                    className="hp-group-booking-btn"
                    onClick={handleWhatsApp}
                  >
                    <WhatsAppIcon size={15} color="#25D366" />
                    <span>Contact us</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* ──────────── RESULTS ──────────── */}
            <main className="tr-results">
              <div className="tr-results-head">
                <div>
                  <h2 className="tr-results-h2">Curated Holiday Tours &amp; Getaways</h2>
                  <p className="tr-results-sub">
                    Showing {tours.length} of {totalCount} tours
                  </p>
                </div>
                {hasFilters && (
                  <button type="button" className="tr-clear-btn" onClick={clearAll}>
                    <X size={12} /> Clear filters
                  </button>
                )}
              </div>

              {isLoading ? (
                <div className="tr-empty" style={{ color: '#64748b' }}>
                  <Loader2 size={32} style={{ animation: 'spin 1s linear infinite' }} />
                  <h3>Loading tours...</h3>
                </div>
              ) : tours.length > 0 ? (
                <>
                  <div className="tr-grid">
                    {tours.map(t => (
                      <TourCard key={t.id} tour={t} />
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
                          `Load More (${totalCount - tours.length} remaining)`
                        )}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="tr-empty">
                  <h3>No tours match your filters</h3>
                  <p>Try adjusting the destination, price, or star rating filters.</p>
                  <button type="button" className="tr-view-btn" onClick={clearAll}>Reset Filters</button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {mobileOpen && <div className="tr-overlay" onClick={() => setMobileOpen(false)} />}

      <Footer />
    </div>
  );
}
