'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Building2,
  ChevronLeft,
  Star,
  ShieldCheck,
  Filter,
} from 'lucide-react';
import { AppBar } from '../../../shared/components/AppBar';
import { Footer } from '../../../shared/components/Footer';
import { Modals } from '../../../shared/components/Modals';
import { WhatsAppIcon } from '../../../shared';
import { COMPANY_CONFIG } from '../../../config/company';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { umrahService } from '../../../services';
import {
  UMRAH_PRICE_TIERS,
} from '../data/umrahData';

export function UmrahPackagesPage({ initialPackages = [], initialLookups = null }) {
  const router = useRouter();

  const [packages, setPackages] = useState(initialPackages);
  const [lookups, setLookups] = useState(initialLookups);
  const [isFiltering, setIsFiltering] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 800);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [priceSlider, setPriceSlider] = useState(350000);
  const debouncedPriceSlider = useDebounce(priceSlider, 800);
  const [selectedStars, setSelectedStars] = useState([]);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Fetch real umrah package lookups dynamically from GET /umrah-packages/lookups
  useEffect(() => {
    let isMounted = true;
    umrahService
      .getUmrahPackageLookups()
      .then((data) => {
        if (isMounted && data) {
          setLookups(data);
        }
      })
      .catch((err) => {
        console.error('[UmrahPackagesPage] getUmrahPackageLookups error:', err);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleWhatsApp = () => {
    window.open(COMPANY_CONFIG.getWhatsAppUrl('Hi, I need assistance with custom Umrah package booking. Please assist.'), '_blank');
  };

  // Dynamic Categories from API lookups
  const categoryOptions = useMemo(() => {
    const totalCount =
      lookups?.all_packages_count ??
      (Array.isArray(lookups?.categories)
        ? lookups.categories.reduce((acc, c) => acc + (c.packages_count ?? c.count ?? 0), 0)
        : packages.length);

    const allOption = {
      key: 'all',
      label: 'All Packages',
      count: totalCount,
    };

    if (Array.isArray(lookups?.categories) && lookups.categories.length > 0) {
      const apiCategories = lookups.categories.map((c) => {
        const val = c.category || c.name || c.label || '';
        return {
          key: val,
          label: c.label || val,
          count: c.packages_count ?? c.count ?? null,
        };
      });
      return [allOption, ...apiCategories];
    }

    return [
      allOption,
      { key: '5 Star', label: 'Five star Umrah package', count: null },
      { key: '4 Star', label: 'Four star Umrah package', count: null },
      { key: 'Economy', label: 'Economy Umrah package', count: null },
    ];
  }, [lookups?.categories, lookups?.all_packages_count, packages.length]);

  // Dynamic Star Ratings from API lookups
  const starOptions = useMemo(() => {
    const parseStars = (item) => {
      if (typeof item.stars === 'number') return item.stars;
      if (typeof item.id === 'number' && item.id >= 1 && item.id <= 7) return item.id;
      const str = String(item.category || item.name || item.label || '');
      const match = str.match(/([1-5])\s*Star/i) || str.match(/(\d+)/);
      if (match) return parseInt(match[1], 10);
      return null;
    };

    if (Array.isArray(lookups?.ratings) && lookups.ratings.length > 0) {
      const mapped = [];
      const seen = new Set();
      lookups.ratings.forEach((r) => {
        const stars = parseStars(r);
        if (stars && !seen.has(stars)) {
          seen.add(stars);
          mapped.push({
            stars,
            label: r.label || `${stars} Star${stars > 1 ? 's' : ''}`,
            count: r.packages_count ?? r.count ?? null,
          });
        }
      });
      if (mapped.length > 0) {
        return mapped.sort((a, b) => b.stars - a.stars);
      }
    }

    return [
      { stars: 5, label: '5 Stars', count: null },
      { stars: 4, label: '4 Stars', count: null },
      { stars: 3, label: '3 Stars', count: null },
    ];
  }, [lookups?.ratings]);

  const toggleStar = (s) => {
    setSelectedStars((prev) =>
      prev.includes(s) ? prev.filter((item) => item !== s) : [...prev, s]
    );
  };

  const hasFilters = selectedCategory !== 'all' || selectedPrice !== 'all' || priceSlider < 350000 || selectedStars.length > 0 || searchQuery.trim() !== '';

  useEffect(() => {
    const fetchFilteredPackages = async () => {
      setIsFiltering(true);
      try {
        let apiPriceRange;
        if (selectedPrice === 'under60') apiPriceRange = 'under_60000';
        else if (selectedPrice === '60to120') apiPriceRange = '60000_120000';
        else if (selectedPrice === '120to200') apiPriceRange = '120000_200000';
        else if (selectedPrice === 'above200') apiPriceRange = 'above_200000';

        const results = await umrahService.getUmrahPackages({
          searchQuery: debouncedSearch,
          category: selectedCategory,
          priceRange: apiPriceRange,
          maxPrice: debouncedPriceSlider < 350000 ? debouncedPriceSlider : undefined,
          stars: selectedStars,
        });
        setPackages(results);
      } catch (err) {
        console.error(err);
      } finally {
        setIsFiltering(false);
      }
    };

    if (!hasFilters && initialPackages.length > 0) {
      setPackages(initialPackages);
      return;
    }

    fetchFilteredPackages();
  }, [debouncedSearch, selectedCategory, selectedPrice, debouncedPriceSlider, selectedStars, initialPackages, hasFilters]);

  return (
    <div className="app-layout-root">
      {/* 1. TopBar & Floating Navbar Hero */}
      <AppBar
        onOpenContact={() => setIsContactOpen(true)}
        heroContent={
          <div className="tr-hero">
            <div className="tr-hero-bg" />
            <div className="tr-hero-overlay" />
            <div className="tr-hero-body">
              <h1 className="tr-hero-h1">Umrah Packages from Pakistan</h1>
              <p className="tr-hero-intro">
                Every package below includes the Umrah visa, hotel stay near the Haramain, and transport between Jeddah, Makkah, and Madinah. Compare durations and hotel tiers to find one that fits your budget, then book directly with our team on WhatsApp or by phone.
              </p>
            </div>
          </div>
        }
      />

      {/* 2. Page Content */}
      <div className="um-page">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="um-breadcrumb">
            <button
              type="button"
              className="um-breadcrumb-btn"
              onClick={() => router.push('/')}
            >
              <ChevronLeft size={14} />
              <span>Home</span>
            </button>
          </div>

          {/* Two-column Layout */}
          <div className="um-layout">
            {/* ──────────── LEFT SIDEBAR ──────────── */}
            <aside className="um-sidebar">
              <div className="um-sidebar-card">
                {/* Header */}
                <div className="um-sb-top">
                  <Filter size={15} />
                  <span>Filter By</span>
                </div>

                {/* Search Box */}
                <div className="um-sb-search">
                  <Search size={14} className="um-sb-search-icon" />
                  <input
                    type="text"
                    placeholder="Hotel name, landmark..."
                    className="um-sb-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Section 1: PACKAGES */}
                <div className="um-sb-section" style={{ borderTop: 'none', paddingTop: 0, marginTop: 0 }}>
                  <div className="um-sb-sec-head">
                    <span className="um-sb-sec-title">PACKAGES</span>
                    <span className="um-sb-sec-sub">
                      {categoryOptions[0]?.count != null
                        ? `${categoryOptions[0].count} Packages`
                        : `${packages.length} Packages`}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {categoryOptions.map((cat) => (
                      <label key={cat.key} className="um-radio-row">
                        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                          <input
                            type="radio"
                            name="umrah-category"
                            className="um-radio"
                            checked={selectedCategory === cat.key}
                            onChange={() => setSelectedCategory(cat.key)}
                          />
                          <span
                            className={`um-radio-label ${
                              selectedCategory === cat.key ? 'um-radio-label-active' : ''
                            }`}
                          >
                            {cat.label}
                          </span>
                        </div>
                        {cat.count !== null && cat.count !== undefined && (
                          <span className="um-badge-count">{cat.count}</span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Section 2: PRICE PER NIGHT */}
                <div className="um-sb-section">
                  <div className="um-sb-sec-head">
                    <span className="um-sb-sec-title">PRICE PER NIGHT</span>
                    <span className="um-sb-price-up">
                      {priceSlider >= 350000
                        ? 'Up to Rs 350,000'
                        : `Up to Rs ${priceSlider.toLocaleString()}`}
                    </span>
                  </div>

                  <div className="um-slider-wrap">
                    <input
                      type="range"
                      min={40000}
                      max={350000}
                      step={10000}
                      value={priceSlider}
                      onChange={(e) => setPriceSlider(Number(e.target.value))}
                      className="um-slider"
                    />
                  </div>

                  <div className="um-slider-labels">
                    <span>Rs 40,000</span>
                    <span>Rs 350,000+</span>
                  </div>

                  <div className="um-price-boxes">
                    {UMRAH_PRICE_TIERS.map((tier) => {
                      const isActive = selectedPrice === tier.key;
                      return (
                        <div
                          key={tier.key}
                          className={`um-price-row ${isActive ? 'um-price-row-active' : ''}`}
                          onClick={() => setSelectedPrice(tier.key)}
                        >
                          <span className="um-price-row-label">{tier.label}</span>
                          {tier.sub && <span className="um-price-row-sub">{tier.sub}</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: UMRAH RATING */}
                <div className="um-sb-section">
                  <div className="um-sb-sec-head">
                    <span className="um-sb-sec-title">UMRAH RATING</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {starOptions.map((rate) => {
                      const isChecked = selectedStars.includes(rate.stars);
                      return (
                        <label key={rate.stars} className="um-check-row">
                          <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                            <input
                              type="checkbox"
                              className="um-cb"
                              checked={isChecked}
                              onChange={() => toggleStar(rate.stars)}
                            />
                            <div className="um-stars-wrap">
                              <div className="um-stars-icons">
                                {Array.from({ length: rate.stars }).map((_, i) => (
                                  <Star key={`um-filter-star-${rate.stars}-${i}`} size={11} className="um-star-gold" />
                                ))}
                              </div>
                              <span className="um-star-label">{rate.label}</span>
                            </div>
                          </div>
                          {rate.count !== null && rate.count !== undefined && (
                            <span className="um-badge-count">{rate.count}</span>
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CUSTOM GROUP BOOKING CARD */}
              <div className="um-group-card">
                <div className="um-group-card-head">
                  <ShieldCheck size={14} />
                  <span>CUSTOM GROUP BOOKING</span>
                </div>
                <p className="um-group-card-desc">
                  Need 5+ rooms, VIP Haramain high-speed train connections, or presidential suites in Makkah?
                </p>
                <button
                  type="button"
                  className="um-group-card-btn"
                  onClick={handleWhatsApp}
                >
                  <WhatsAppIcon size={15} color="#25D366" />
                  <span>Contact us</span>
                </button>
              </div>
            </aside>

            {/* ──────────── RIGHT CONTENT AREA ──────────── */}
            <main className="um-main-col">
              {/* Header Box */}
              <div className="um-header-card">
                <h2 className="um-header-title">Verified Umrah Packages</h2>
                <p className="um-header-sub">
                  {isFiltering ? 'Updating...' : `Showing ${packages.length} packages`}
                </p>
              </div>

              {/* 2-Column Cards Grid */}
              {isFiltering ? (
                <div className="um-empty">
                  <h3>Loading packages...</h3>
                </div>
              ) : packages.length > 0 ? (
                <div className="um-cards-grid">
                  {packages.map((pkg) => (
                  <div key={pkg.id} className="um-card">
                    {/* Media */}
                    <div className="um-card-media">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="um-card-img"
                        loading="lazy"
                      />
                      <div className="um-card-badge-star">{pkg.badge}</div>
                      <div className="um-card-badge-duration">{pkg.duration}</div>
                    </div>

                    {/* Body */}
                    <div className="um-card-body">
                      <h3 className="um-card-title">{pkg.title}</h3>
                      <p className="um-card-tagline">{pkg.tagline}</p>

                      {/* Hotels Panel */}
                      <div className="um-hotels-panel">
                        <div className="um-hotel-entry">
                          <Building2 size={14} className="um-hotel-icon" />
                          <div className="um-hotel-text">
                            <span className="um-hotel-label">MAKKAH HOTEL</span>
                            <span className="um-hotel-name">{pkg.makkahHotel?.name || 'Makkah Hotel'}</span>
                          </div>
                        </div>

                        <div className="um-hotel-entry">
                          <Building2 size={14} className="um-hotel-icon" />
                          <div className="um-hotel-text">
                            <span className="um-hotel-label">MADINAH HOTEL</span>
                            <span className="um-hotel-name">{pkg.madinahHotel?.name || 'Madinah Hotel'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="um-card-footer">
                        <div>
                          <span className="um-card-pp">PER PERSON</span>
                          <div className="um-card-price">{pkg.price}</div>
                        </div>
                        <button
                          type="button"
                          className="um-card-btn"
                          onClick={() => router.push(`/umrah-packages/${pkg.id}`)}
                        >
                          View Package
                        </button>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              ) : (
                <div className="hp-empty-state">
                  <p className="hp-empty-title">No packages found</p>
                  <p className="hp-empty-desc">
                    Try adjusting your filters to see more results.
                  </p>
                  <button
                    type="button"
                    className="hp-empty-reset-btn"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedPrice('all');
                      setPriceSlider(350000);
                      setSelectedStars([]);
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* 3. Footer (includes Newsletter Banner + Complete Footer) */}
      <Footer />

      {/* 4. Contact & Booking Modals */}
      <Modals
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
      />
    </div>
  );
}
