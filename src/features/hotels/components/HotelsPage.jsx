'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Filter,
  Search,
  ChevronLeft,
  ChevronDown,
  Users,
  SlidersHorizontal,
  X,
  Star,
  Wifi,
  Utensils,
  Waves,
  Bus,
  Sparkles,
  Coffee,
  Car,
  HelpCircle,
  Loader2,
} from 'lucide-react';
import { AppBar } from '../../../shared/components/AppBar';
import { Footer } from '../../../shared/components/Footer';
import { Modals } from '../../../shared/components/Modals';
import { WhatsAppIcon } from '../../../shared';
import { COMPANY_CONFIG } from '../../../config/company';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { HotelCard } from './HotelCard';
import { HotelsMapButton } from './HotelsMapButton';
import { hotelService } from '../../../services';
import { normalizeHotelDetail } from '../../../services/hotel.service';
import { FaqAccordionItem } from '../../faq/components/FaqAccordionItem';
import {
  HOTEL_PRICE_TIERS,
} from '../hotelData';

// ---------------------------------------------------------------------------
// Facility icon mapping (for lookups-driven amenity filters)
// ---------------------------------------------------------------------------
const FACILITY_ICONS = {
  'Free Wi-Fi': <Wifi size={13} />,
  'Restaurant': <Utensils size={13} />,
  'Swimming Pool': <Waves size={13} />,
  'Shuttle Service': <Bus size={13} />,
  'Airport Shuttle': <Car size={13} />,
  'Spa & Wellness': <Sparkles size={13} />,
  'Room Service': <Coffee size={13} />,
  'Private Parking': <Car size={13} />,
};

// Normalize raw ApiHotel[] into Hotel[] for HotelCard compatibility
const normalizeHotels = (rawHotels) =>
  rawHotels
    .map((h) => normalizeHotelDetail(h))
    .filter(Boolean);

export function HotelsPage({
  initialHotels = [],
  initialPagination = undefined,
  initialLookups = null,
  initialFaqs = [],
}) {
  const router = useRouter();

  // ── Hotels + Pagination State ──
  const [hotels, setHotels] = useState(() => normalizeHotels(initialHotels));
  const [pagination, setPagination] = useState(
    initialPagination || {
      current_page: 1,
      per_page: 12,
      total_pages: 1,
      total_records: initialHotels.length,
      nextPage: null,
      has_more: false,
    },
  );

  // ── Filter State ──
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 350);
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // ── FAQ State ──
  const [openFaqId, setOpenFaqId] = useState(
    initialFaqs.length > 0 ? initialFaqs[0]?.id ?? null : null,
  );

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
    window.open(COMPANY_CONFIG.getWhatsAppUrl('Hi, I need assistance with custom group hotel booking. Please assist.'), '_blank');
  };

  // ── Lookups (API-driven filter options) ──
  const lookupCities = initialLookups?.cities ?? [];
  const lookupCategories = initialLookups?.hotel_category ?? [];
  const lookupFacilities = initialLookups?.hotel_facilities ?? [];
  const lookupRoomTypes = initialLookups?.room_types ?? [];
  const allDestinationsCount = initialLookups?.all_destinations_count ?? hotels.length;

  // ── Toggle helpers ──
  const toggleCategory = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const toggleFacility = (id) => {
    setSelectedFacilities((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };

  const toggleRoomType = (id) => {
    setSelectedRoomTypes((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };

  const hasFilters =
    selectedCity !== 'all' ||
    selectedPrice !== 'all' ||
    selectedCategories.length > 0 ||
    selectedFacilities.length > 0 ||
    selectedRoomTypes.length > 0 ||
    searchQuery.trim() !== '';

  const clearAll = () => {
    setSelectedCity('all');
    setSelectedPrice('all');
    setSelectedCategories([]);
    setSelectedFacilities([]);
    setSelectedRoomTypes([]);
    setSearchQuery('');
  };

  // ── Build API Filters ──
  const buildApiFilters = (page = 1) => {
    const filters = {};

    if (debouncedSearch.trim()) filters.search = debouncedSearch.trim();

    if (selectedCity !== 'all') {
      filters.city = selectedCity;
    }

    if (selectedPrice !== 'all') {
      if (selectedPrice === 'under-60k') filters.price_range = 'under_60000';
      else if (selectedPrice === '60k-120k') filters.price_range = '60000_120000';
      else if (selectedPrice === '120k-200k') filters.price_range = '120000_200000';
      else if (selectedPrice === '200k-plus') filters.price_range = 'above_200000';
    }

    // Category → hotel_category ("5 Star", "4 Star", etc.) and hotel_rating (5, 4, etc.)
    if (selectedCategories.length > 0) {
      const selectedCat = selectedCategories[selectedCategories.length - 1];
      filters.hotel_category = selectedCat;
      const starMatch = selectedCat.match(/^(\d)/);
      if (starMatch) {
        filters.hotel_rating = parseInt(starMatch[1], 10);
      }
    }

    if (selectedFacilities.length > 0) {
      filters.hotel_facilities = selectedFacilities;
    }

    if (selectedRoomTypes.length > 0) {
      filters.room_types = selectedRoomTypes;
    }

    filters.nextPage = page;
    filters.perPage = 12;
    return filters;
  };

  // ── Skip first mount refetch when SSR data is available ──
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    let active = true;
    setIsLoading(true);

    hotelService
      .getHotelsPaginated(buildApiFilters(1))
      .then((res) => {
        if (!active) return;
        setHotels(normalizeHotels(res.hotels));
        setPagination(res.pagination);
        setIsLoading(false);
      })
      .catch(() => {
        if (!active) return;
        setIsLoading(false);
      });

    return () => { active = false; };
  }, [debouncedSearch, selectedCity, selectedPrice, selectedCategories, selectedFacilities, selectedRoomTypes]);

  // ── Load More handler ──
  const handleLoadMore = async () => {
    if (!pagination?.nextPage || isLoadingMore) return;
    setIsLoadingMore(true);

    try {
      const res = await hotelService.getHotelsPaginated(buildApiFilters(pagination.nextPage));
      setHotels((prev) => [...prev, ...normalizeHotels(res.hotels)]);
      setPagination(res.pagination);
    } catch (err) {
      console.error('[HotelsPage] load more error:', err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const totalCount = pagination?.total_records ?? hotels.length;

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
                  "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&auto=format&fit=crop&q=80')",
              }}
            />
            <div className="tr-hero-overlay" />
            <div className="tr-hero-body">
              <h1 className="tr-hero-h1">Hotel Booking in Makkah &amp; Madinah</h1>
              <p className="tr-hero-intro">
                Every hotel listed here is checked by our team before it goes live. Use the filters to sort by price, star rating, or distance from the Haram, and book with instant confirmation.
              </p>
            </div>
          </div>
        }
      />

      {/* ── 2. Page Content ── */}
      <div className="hp-page">
        <div className="section-container">
          {/* Breadcrumb / Back button */}
          <div className="hp-breadcrumb">
            <button
              type="button"
              className="hp-breadcrumb-btn"
              onClick={() => router.push('/')}
            >
              <ChevronLeft size={16} />
              <span>Hotels</span>
            </button>
          </div>

          {/* Mobile filter toggle */}
          <button
            type="button"
            className="hp-mob-filter-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <SlidersHorizontal size={15} />
            <span>Filter By</span>
            {hasFilters && <span className="hp-mob-dot" />}
          </button>

          {/* Two-Column Responsive Layout */}
          <div className="hp-layout">
            {/* ──────────── LEFT SIDEBAR (Static, does not move on scroll) ──────────── */}
            <aside className={`hp-sidebar ${mobileOpen ? 'hp-sidebar-open' : ''}`}>
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
                    placeholder="Hotel name, landmark..."
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

                {/* Section 1: DESTINATION (API-driven cities) */}
                <div className="hp-sb-section">
                  <div className="hp-sb-sec-head">
                    <span className="hp-sb-sec-title">DESTINATION</span>
                    <span className="hp-sb-sec-sub">
                      {lookupCities.length > 0
                        ? `${lookupCities.length} cities`
                        : `${allDestinationsCount} hotels`}
                    </span>
                  </div>

                  <div className="hp-sb-radio-list">
                    {/* All Destinations option */}
                    <label className="hp-sb-radio-row">
                      <div className="hp-sb-radio-left">
                        <input
                          type="radio"
                          name="hotel-destination"
                          className="hp-sb-radio"
                          checked={selectedCity === 'all'}
                          onChange={() => {
                            setSelectedCity('all');
                            setMobileOpen(false);
                          }}
                        />
                        <span className={`hp-sb-radio-label ${selectedCity === 'all' ? 'hp-sb-radio-label-active' : ''}`}>
                          All Destinations
                        </span>
                      </div>
                      <span className="hp-sb-count">{allDestinationsCount}</span>
                    </label>

                    {lookupCities.map((city) => {
                      const isChecked = selectedCity === city.name;
                      return (
                        <label key={city.name} className="hp-sb-radio-row">
                          <div className="hp-sb-radio-left">
                            <input
                              type="radio"
                              name="hotel-destination"
                              className="hp-sb-radio"
                              checked={isChecked}
                              onChange={() => {
                                setSelectedCity(city.name);
                                setMobileOpen(false);
                              }}
                            />
                            <span
                              className={`hp-sb-radio-label ${isChecked ? 'hp-sb-radio-label-active' : ''}`}
                            >
                              {city.name}
                            </span>
                          </div>
                          <span className="hp-sb-count">{city.hotels_count}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Section 2: PRICE PER NIGHT (static tiers) */}
                <div className="hp-sb-section">
                  <div className="hp-sb-sec-head">
                    <span className="hp-sb-sec-title">PRICE PER NIGHT</span>
                    <span className="hp-sb-price-max">Up to Rs 350,000</span>
                  </div>

                  <div className="hp-price-pills-list">
                    {HOTEL_PRICE_TIERS.map((tier) => {
                      const isActive = selectedPrice === tier.key;
                      return (
                        <button
                          key={tier.key}
                          type="button"
                          className={`hp-price-tier-row ${isActive ? 'hp-price-tier-active' : ''}`}
                          onClick={() => {
                            setSelectedPrice(tier.key);
                            setMobileOpen(false);
                          }}
                        >
                          <span className="hp-price-tier-label">{tier.label}</span>
                          {tier.sub && (
                            <span className="hp-price-tier-sub">{tier.sub}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: HOTEL CATEGORY (API-driven: "3 Star", "4 Star", "5 Star") */}
                {lookupCategories.length > 0 && (
                  <div className="hp-sb-section">
                    <div className="hp-sb-sec-head">
                      <span className="hp-sb-sec-title">HOTEL STAR RATING</span>
                    </div>

                    <div className="hp-sb-check-list">
                      {lookupCategories.map((cat) => {
                        const isChecked = selectedCategories.includes(cat.value);
                        // Extract star count from value like "5 Star" → 5
                        const starMatch = cat.value.match(/^(\d)/);
                        const starCount = starMatch ? parseInt(starMatch[1], 10) : 0;
                        return (
                          <label key={cat.value} className="hp-sb-check-row">
                            <div className="hp-sb-check-left">
                              <input
                                type="checkbox"
                                className="hp-sb-checkbox"
                                checked={isChecked}
                                onChange={() => toggleCategory(cat.value)}
                              />
                              {starCount > 0 && (
                                <div className="hp-stars-icons">
                                  {Array.from({ length: starCount }).map((_, i) => (
                                    <Star key={i} size={11} className="hp-star-gold" />
                                  ))}
                                </div>
                              )}
                              <span className="hp-sb-check-label">{cat.value}</span>
                            </div>
                            <span className="hp-sb-count">{cat.hotels_count}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Section 4: HOTEL FACILITIES (API-driven) */}
                {lookupFacilities.length > 0 && (
                  <div className="hp-sb-section">
                    <div className="hp-sb-sec-head">
                      <span className="hp-sb-sec-title">HOTEL FACILITIES</span>
                    </div>

                    <div className="hp-sb-check-list">
                      {lookupFacilities.map((fac) => {
                        const isChecked = selectedFacilities.includes(fac.id);
                        return (
                          <label key={fac.id} className="hp-sb-check-row">
                            <div className="hp-sb-check-left">
                              <input
                                type="checkbox"
                                className="hp-sb-checkbox"
                                checked={isChecked}
                                onChange={() => toggleFacility(fac.id)}
                              />
                              <span className="hp-amenity-icon">
                                {FACILITY_ICONS[fac.facility] || <Sparkles size={12} />}
                              </span>
                              <span className="hp-sb-check-label">{fac.facility}</span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Section 5: ROOM OCCUPANCY (API-driven) */}
                {lookupRoomTypes.length > 0 && (
                  <div className="hp-sb-section">
                    <div className="hp-sb-sec-head">
                      <span className="hp-sb-sec-title">ROOM OCCUPANCY</span>
                    </div>

                    <div className="hp-sb-check-list">
                      {lookupRoomTypes.map((rt) => {
                        const isChecked = selectedRoomTypes.includes(rt.id);
                        return (
                          <label key={rt.id} className="hp-sb-check-row">
                            <div className="hp-sb-check-left">
                              <input
                                type="checkbox"
                                className="hp-sb-checkbox"
                                checked={isChecked}
                                onChange={() => toggleRoomType(rt.id)}
                              />
                              <Users size={12} className="hp-amenity-icon" />
                              <span className="hp-sb-check-label">{rt.room_type}</span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* CUSTOM GROUP BOOKING CARD */}
              <div className="hp-group-booking-card">
                <div className="hp-group-booking-head">
                  <Users size={14} className="hp-group-booking-icon" />
                  <span>CUSTOM GROUP BOOKING</span>
                </div>
                <p className="hp-group-booking-desc">
                  Need 5+ rooms, VIP Haramain high-speed train connections, or presidential suites in Makkah?
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
            </aside>

            {/* ──────────── RIGHT MAIN CONTENT ──────────── */}
            <main className="hp-main-col">
              {/* Header Box */}
              <div className="hp-header-card">
                <div className="hp-header-title-row">
                  <h2 className="hp-header-title">All Luxury Hotels &amp; Resorts</h2>
                  <HotelsMapButton />
                </div>
                <p className="hp-header-sub">
                  {isLoading
                    ? 'Updating...'
                    : `Showing ${hotels.length} of ${totalCount} verified stays`}
                </p>
              </div>

              {/* 3-Column Cards Grid */}
              {hotels.length > 0 ? (
                <>
                  <div className="hp-cards-grid">
                    {hotels.map((hotel) => (
                      <HotelCard key={hotel.id} hotel={hotel} />
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
                          `Load More (${totalCount - hotels.length} remaining)`
                        )}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="hp-empty-state">
                  <p className="hp-empty-title">No hotels found</p>
                  <p className="hp-empty-desc">
                    Try adjusting your filters or search keywords.
                  </p>
                  <button
                    type="button"
                    className="hp-empty-reset-btn"
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

      {/* ── FAQs Section ── */}
      {initialFaqs.length > 0 && (
        <section className="faq-feature-section" id="hotel-faqs">
          <div className="section-container">
            <div className="faq-header-centered">
              <div className="section-eyebrow-badge faq-eyebrow">
                <HelpCircle size={15} className="eyebrow-icon faq-eyebrow-icon" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="section-main-title">Hotel Booking FAQs</h2>
              <p className="section-sub-title">
                Common questions about hotel booking, room types, check-in policies, and cancellations for Makkah &amp; Madinah stays.
              </p>
            </div>

            <div className="faq-accordion-list">
              {initialFaqs.map((faq) => (
                <FaqAccordionItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFaqId === faq.id}
                  onToggle={() => setOpenFaqId((prev) => (prev === faq.id ? null : faq.id))}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 3. Newsletter Banner & Full Footer ── */}
      <Footer />

      {/* ── 4. Contact Modal ── */}
      <Modals
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default HotelsPage;
