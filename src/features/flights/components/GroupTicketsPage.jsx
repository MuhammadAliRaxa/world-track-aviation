'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  AlertCircle,
  SlidersHorizontal,
  X,
  Search,
  Loader2,
} from 'lucide-react';
import { AppBar } from '../../../shared/components/AppBar';
import { Footer } from '../../../shared/components/Footer';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { COMPANY_CONFIG } from '../../../config/company';
import { flightService } from '../../../services';

/* ── helpers ─────────────────────────────────────────────────── */
function formatPrice(n) {
  if (typeof n === 'number') return 'PKR ' + n.toLocaleString('en-PK');
  if (n) return 'PKR ' + n;
  return 'Call for Price';
}

const PRICE_RANGE_OPTIONS = [
  { value: '', label: 'All Prices' },
  { value: 'under_100000', label: 'Under PKR 100,000' },
  { value: 'under_200000', label: 'Under PKR 200,000' },
  { value: '200000_500000', label: 'PKR 200,000 – 500,000' },
  { value: 'above_500000', label: 'Above PKR 500,000' },
];

/* ── sub-components ──────────────────────────────────────────── */
const AirlineBadge = React.memo(function AirlineBadge({ code, name, logo }) {
  if (logo) {
    return (
      <div
        className="gt-airline-badge"
        style={{ padding: '4px', background: '#fff', overflow: 'hidden' }}
      >
        <img
          src={logo}
          alt={name || code || 'Airline'}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    );
  }
  return <div className="gt-airline-badge">{code || 'GT'}</div>;
});

const FlightCard = React.memo(function FlightCard({ flight }) {
  const handleBook = () => {
    const msg = `Hi, I want to book a group ticket: ${flight.route || ''} departing ${flight.outboundDate || ''}. Flight ${flight.outboundFlight || ''}. Please share details.`;
    window.open(COMPANY_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  const rawRoute =
    typeof flight.route === 'string'
      ? flight.route
      : String(flight.route?.name || flight.name || 'Group Ticket Route');
  const rawBaggage =
    typeof flight.baggage === 'string'
      ? flight.baggage
      : '46 KG (2 Pcs × 23 KG)';
  const rawOutboundTime =
    typeof flight.outboundTime === 'string'
      ? flight.outboundTime
      : '12:00 - 15:00';
  const rawInboundTime =
    typeof flight.inboundTime === 'string'
      ? flight.inboundTime
      : '18:00 - 21:00';

  const formattedRoute = rawRoute.replace(/–/g, '-').replace(/\s*-\s*/g, ' - ');
  const formattedBaggage = rawBaggage.replace(/\+/g, '×');
  const outboundTiming = `${flight.outboundFlight || ''} (${rawOutboundTime.replace(/–/g, '-')})`.trim();
  const inboundTiming = `${flight.inboundFlight || ''} (${rawInboundTime.replace(/–/g, '-')})`.trim();

  return (
    <div className="gt-card" id={`flight-${flight.id}`}>
      {/* ── Row 1: Airline + Route + Seats Left ── */}
      <div className="gt-card-top">
        <div className="gt-card-left">
          <AirlineBadge
            code={flight.airlineCode}
            name={flight.airlineName}
            logo={flight.airlineLogo}
          />
          <div className="gt-card-meta">
            <h3 className="gt-card-route">{formattedRoute}</h3>
            <div className="gt-card-sub">
              {flight.airlineName}
              {flight.duration ? ` · ${flight.duration} Days` : ''}
            </div>
          </div>
        </div>
        <div className="gt-card-right">
          <div className="gt-seats-pill">{flight.seatsLeft} Seats Left</div>
        </div>
      </div>

      {/* ── Row 2: Outbound & Inbound Panels ── */}
      <div className="gt-panels-grid">
        {/* Outbound Panel */}
        <div className="gt-panel gt-panel-outbound">
          <div className="gt-panel-head">
            <span className="gt-panel-type-outbound">
              OUTBOUND ·{' '}
              {String(
                flight.outboundDate || flight.departure_date || 'ON REQUEST',
              ).toUpperCase()}
            </span>
            <span className="gt-panel-baggage">{formattedBaggage}</span>
          </div>
          <div className="gt-panel-flight-info">{outboundTiming}</div>
        </div>

        {/* Inbound Panel */}
        <div className="gt-panel gt-panel-inbound">
          <div className="gt-panel-head">
            <span className="gt-panel-type-inbound">
              INBOUND ·{' '}
              {String(flight.inboundDate || 'CONFIRMED SEATS').toUpperCase()}
            </span>
            <span className="gt-panel-baggage">{formattedBaggage}</span>
          </div>
          <div className="gt-panel-flight-info">{inboundTiming}</div>
        </div>
      </div>

      {/* ── Row 3: Price + Book Now Button ── */}
      <div className="gt-card-foot">
        <div className="gt-card-price">{formatPrice(flight.pricePKR)}</div>
        <button
          type="button"
          className="gt-book-now-btn"
          onClick={handleBook}
          id={`book-${flight.id}`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
});

/* ── main page ───────────────────────────────────────────────── */
export function GroupTicketsPage({
  initialFlights = [],
  initialPagination = undefined,
  initialDates = [],
  initialAirlines = [],
  initialSectors = [],
  initialDurations = [],
  h1 = 'Group Flight Tickets',
  heroIntro = 'Booking ten seats one at a time rarely gets you the best price, or a guarantee everyone sits together. We handle group bookings directly with the airline, so your whole group travels on the same flight, at a rate that reflects the group size.',
}) {
  const [flights, setFlights] = useState(initialFlights);
  const [pagination, setPagination] = useState(
    initialPagination || {
      current_page: 1,
      per_page: 12,
      total_pages: 1,
      total_records: initialFlights.length,
      nextPage: null,
      has_more: false,
    },
  );

  const [datesList, setDatesList] = useState(initialDates);
  const [airlinesList, setAirlinesList] = useState(initialAirlines);
  const [sectorsList, setSectorsList] = useState(initialSectors);
  const [durationsList, setDurationsList] = useState(initialDurations);

  // Client filter states
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 800);
  const [selDurations, setSelDurations] = useState([]);
  const [selDates, setSelDates] = useState([]);
  const [selAirlines, setSelAirlines] = useState([]);
  const [selRoutes, setSelRoutes] = useState([]);
  const [selPriceRange, setSelPriceRange] = useState('');
  const [priceSlider, setPriceSlider] = useState(500000);
  const debouncedDurations = useDebounce(selDurations, 800);
  const debouncedDates = useDebounce(selDates, 800);
  const debouncedAirlines = useDebounce(selAirlines, 800);
  const debouncedRoutes = useDebounce(selRoutes, 800);
  const debouncedPriceRange = useDebounce(selPriceRange, 800);
  const debouncedPriceSlider = useDebounce(priceSlider, 600);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Ensure lookups exist
  useEffect(() => {
    if (
      !datesList.length ||
      !airlinesList.length ||
      !sectorsList.length ||
      !durationsList.length
    ) {
      flightService.getGroupTicketLookups().then((lookups) => {
        if (!lookups) return;
        if (Array.isArray(lookups.durations) && !durationsList.length) {
          setDurationsList(
            lookups.durations
              .map((d) =>
                typeof d === 'number'
                  ? d
                  : Number(d.id || d.name || d.duration),
              )
              .filter((n) => !isNaN(n) && n > 0),
          );
        }
        if (Array.isArray(lookups.departure_dates) && !datesList.length) {
          setDatesList(
            lookups.departure_dates
              .map((d) =>
                typeof d === 'string' ? d : d.departure_date || d.name || '',
              )
              .filter(Boolean),
          );
        }
        if (Array.isArray(lookups.airlines) && !airlinesList.length) {
          setAirlinesList(
            lookups.airlines.map((a) => ({
              id: Number(a.id || 0),
              name: a.name || 'Airline',
              code:
                a.code || (a.name ? a.name.slice(0, 2).toUpperCase() : 'AL'),
              logo: a.logo || null,
              count: a.tickets_count ?? a.count ?? 1,
            })),
          );
        }
        if (Array.isArray(lookups.routes) && !sectorsList.length) {
          setSectorsList(
            lookups.routes.map((r) => {
              const name = r.name || r.key || 'Sector';
              return {
                id: Number(r.id || 0),
                key: name,
                label: name.split(' - ').slice(0, 2).join(' - '),
                fullLabel: name,
                count: r.tickets_count ?? r.count ?? 1,
              };
            }),
          );
        }
      });
    }
  }, []);

  const toggle = (arr, setArr, val) =>
    setArr((p) => (p.includes(val) ? p.filter((x) => x !== val) : [...p, val]));

  // Lock background scroll on mobile when sidebar drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const hasFilters = Boolean(
    debouncedSearch.trim() ||
      selDurations.length ||
      selDates.length ||
      selAirlines.length ||
      selRoutes.length ||
      selPriceRange ||
      priceSlider < 500000,
  );

  const clearAll = () => {
    setSearchQuery('');
    setSelDurations([]);
    setSelDates([]);
    setSelAirlines([]);
    setSelRoutes([]);
    setSelPriceRange('');
    setPriceSlider(500000);
  };

  // Flag to avoid refetching on first mount when SSR data is available
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    let active = true;
    setIsLoading(true);

    const filters = {};
    if (debouncedSearch.trim()) filters.name = debouncedSearch.trim();
    if (debouncedDurations.length > 0) filters.duration = debouncedDurations;
    if (debouncedDates.length > 0) filters.departure_date = debouncedDates;
    if (debouncedAirlines.length > 0) filters.airlines = debouncedAirlines;
    if (debouncedRoutes.length > 0) filters.routes = debouncedRoutes;
    if (debouncedPriceRange) {
      filters.price_range = debouncedPriceRange;
    } else if (debouncedPriceSlider < 500000) {
      filters.price_range = `under_${debouncedPriceSlider}`;
    }
    filters.nextPage = 1;
    filters.perPage = 12;

    flightService
      .getGroupTicketsPaginated(filters)
      .then((res) => {
        if (!active) return;
        setFlights(res.tickets);
        setPagination(res.pagination);
        setIsLoading(false);
      })
      .catch(() => {
        if (!active) return;
        setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [
    debouncedSearch,
    debouncedDurations,
    debouncedDates,
    debouncedAirlines,
    debouncedRoutes,
    debouncedPriceRange,
    debouncedPriceSlider,
  ]);

  // Load More: keep prior filters, update nextPage
  const handleLoadMore = async () => {
    if (!pagination?.nextPage || isLoadingMore) return;
    setIsLoadingMore(true);

    try {
      const filters = {};
      if (debouncedSearch.trim()) filters.name = debouncedSearch.trim();
      if (debouncedDurations.length > 0) filters.duration = debouncedDurations;
      if (debouncedDates.length > 0) filters.departure_date = debouncedDates;
      if (debouncedAirlines.length > 0) filters.airlines = debouncedAirlines;
      if (debouncedRoutes.length > 0) filters.routes = debouncedRoutes;
      if (debouncedPriceRange) {
        filters.price_range = debouncedPriceRange;
      } else if (debouncedPriceSlider < 500000) {
        filters.price_range = `under_${debouncedPriceSlider}`;
      }
      filters.nextPage = pagination.nextPage;
      filters.perPage = 12;

      const res = await flightService.getGroupTicketsPaginated(filters);
      setFlights((prev) => [...prev, ...res.tickets]);
      setPagination(res.pagination);
    } catch (err) {
      console.error('[GroupTicketsPage] load more error:', err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const handleWhatsApp = () =>
    window.open(
      COMPANY_CONFIG.getWhatsAppUrl(
        'Hi, I need a custom group flight booking. Please assist.',
      ),
      '_blank',
    );

  const totalCount = pagination?.total_records ?? flights.length;

  return (
    <div className="app-layout-root">
      {/* ── AppBar with hero ── */}
      <AppBar
        heroContent={
          <div className="gt-hero">
            <div className="gt-hero-bg" />
            <div className="gt-hero-overlay" />
            <div className="gt-hero-body">
              <h1 className="gt-hero-h1">{h1}</h1>
              <p className="gt-hero-intro">{heroIntro}</p>
            </div>
          </div>
        }
      />

      {/* ── Page body ── */}
      <div className="gt-page">
        <div className="section-container">
          {/* mobile filter button */}
          <button
            type="button"
            className="gt-mob-filter-btn"
            onClick={() => setMobileOpen(true)}
          >
            <SlidersHorizontal size={15} />
            Filter &amp; Sort
            {hasFilters && <span className="gt-mob-dot" />}
          </button>

          <div className="gt-layout">
            {/* ──────────── SIDEBAR ──────────── */}
            <aside
              className={`gt-sidebar${mobileOpen ? ' gt-sidebar-open' : ''}`}
            >
              {/* mobile header */}
              <div className="gt-sb-mob-head">
                <span>Filter By</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="gt-sb-close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Filter By header */}
              <div className="gt-sb-top">
                <SlidersHorizontal size={16} className="gt-sb-filter-icon" />
                <span className="gt-sb-title">Filter By</span>
              </div>

              {/* Search box */}
              <div className="gt-sb-search">
                <Search size={14} className="gt-sb-search-icon" />
                <input
                  type="text"
                  placeholder="Search by route, airline..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="gt-sb-search-input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="gt-sb-search-clear"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>

              {/* DURATION */}
              {durationsList.length > 0 && (
                <div className="gt-sb-section">
                  <div className="gt-sb-section-head">
                    <span className="gt-sb-section-title">DURATION</span>
                    <div className="gt-sb-actions">
                      <button
                        type="button"
                        className="gt-sb-act-all"
                        onClick={() => setSelDurations([...durationsList])}
                      >
                        All
                      </button>
                      <span className="gt-sb-sep">|</span>
                      <button
                        type="button"
                        className="gt-sb-act-clear"
                        onClick={() => setSelDurations([])}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                  <div className="gt-sb-list">
                    {durationsList.map((d) => (
                      <label key={d} className="gt-sb-row">
                        <input
                          type="checkbox"
                          className="gt-checkbox"
                          checked={selDurations.includes(d)}
                          onChange={() =>
                            toggle(selDurations, setSelDurations, d)
                          }
                        />
                        <span className="gt-sb-label">{d} Days</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* DEPARTURE DATES */}
              {datesList.length > 0 && (
                <div className="gt-sb-section">
                  <div className="gt-sb-section-head">
                    <span className="gt-sb-section-title">DEPARTURE DATES</span>
                    <div className="gt-sb-actions">
                      <button
                        type="button"
                        className="gt-sb-act-all"
                        onClick={() => setSelDates([...datesList])}
                      >
                        All
                      </button>
                      <span className="gt-sb-sep">|</span>
                      <button
                        type="button"
                        className="gt-sb-act-clear"
                        onClick={() => setSelDates([])}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                  <div className="gt-sb-list">
                    {datesList.map((d) => (
                      <label key={d} className="gt-sb-row">
                        <input
                          type="checkbox"
                          className="gt-checkbox"
                          checked={selDates.includes(d)}
                          onChange={() => toggle(selDates, setSelDates, d)}
                        />
                        <span className="gt-sb-label">{d}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* AIRLINES */}
              {airlinesList.length > 0 && (
                <div className="gt-sb-section">
                  <div className="gt-sb-section-head">
                    <span className="gt-sb-section-title">AIRLINES</span>
                    <div className="gt-sb-actions">
                      <button
                        type="button"
                        className="gt-sb-act-all"
                        onClick={() =>
                          setSelAirlines(airlinesList.map((a) => a.id))
                        }
                      >
                        All
                      </button>
                      <span className="gt-sb-sep">|</span>
                      <button
                        type="button"
                        className="gt-sb-act-clear"
                        onClick={() => setSelAirlines([])}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                  <div className="gt-sb-list">
                    {airlinesList.map((al) => (
                      <label
                        key={al.id || al.code}
                        className="gt-sb-row gt-sb-airline-row"
                      >
                        <input
                          type="checkbox"
                          className="gt-checkbox"
                          checked={selAirlines.includes(al.id)}
                          onChange={() =>
                            toggle(selAirlines, setSelAirlines, al.id)
                          }
                        />
                        {al.logo ? (
                          <span className="gt-sb-airline-pill">
                            <img src={al.logo} alt={al.name} loading="lazy" />
                          </span>
                        ) : (
                          <span className="gt-sb-airline-pill">{al.code}</span>
                        )}
                        <span className="gt-sb-airline-name" title={al.name}>
                          {al.name}
                        </span>
                        <span className="gt-sb-count-pill">{al.count}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTORS & ROUTES */}
              {sectorsList.length > 0 && (
                <div className="gt-sb-section">
                  <div className="gt-sb-section-head">
                    <span className="gt-sb-section-title">
                      SECTORS &amp; ROUTES
                    </span>
                    <div className="gt-sb-actions">
                      <button
                        type="button"
                        className="gt-sb-act-all"
                        onClick={() =>
                          setSelRoutes(sectorsList.map((s) => s.id))
                        }
                      >
                        All
                      </button>
                      <span className="gt-sb-sep">|</span>
                      <button
                        type="button"
                        className="gt-sb-act-clear"
                        onClick={() => setSelRoutes([])}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                  <div className="gt-sb-list">
                    {sectorsList.map((sr) => (
                      <label
                        key={sr.id || sr.key}
                        className="gt-sb-row gt-sb-route-row"
                      >
                        <input
                          type="checkbox"
                          className="gt-checkbox"
                          checked={selRoutes.includes(sr.id)}
                          onChange={() =>
                            toggle(selRoutes, setSelRoutes, sr.id)
                          }
                        />
                        <span
                          className="gt-sb-route-name"
                          title={sr.fullLabel || sr.label}
                        >
                          {sr.label}
                        </span>
                        <span className="gt-sb-count-pill">{sr.count}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* PRICE RANGE */}
              <div className="gt-sb-section">
                <div className="gt-sb-section-head">
                  <span className="gt-sb-section-title">PRICE RANGE</span>
                  {(selPriceRange || priceSlider < 500000) && (
                    <div className="gt-sb-actions">
                      <button
                        type="button"
                        className="gt-sb-act-clear"
                        onClick={() => {
                          setSelPriceRange('');
                          setPriceSlider(500000);
                        }}
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </div>

                {/* Interactive Slider */}
                <div style={{ marginBottom: '14px' }}>
                  <div className="um-sb-sec-head" style={{ marginBottom: '6px' }}>
                    <span className="um-sb-sec-title">MAX BUDGET</span>
                    <span className="um-sb-price-up">
                      {priceSlider >= 500000
                        ? 'Up to PKR 500,000+'
                        : `Up to PKR ${priceSlider.toLocaleString()}`}
                    </span>
                  </div>

                  <div className="um-slider-wrap">
                    <input
                      type="range"
                      min={50000}
                      max={500000}
                      step={10000}
                      value={priceSlider}
                      onChange={(e) => {
                        setPriceSlider(Number(e.target.value));
                        setSelPriceRange('');
                      }}
                      className="um-slider"
                    />
                  </div>

                  <div className="um-slider-labels">
                    <span>PKR 50,000</span>
                    <span>PKR 500,000+</span>
                  </div>
                </div>

                <div className="gt-sb-list">
                  {PRICE_RANGE_OPTIONS.map((opt) => (
                    <label key={opt.value} className="gt-sb-row">
                      <input
                        type="radio"
                        name="gt_price_range"
                        className="gt-checkbox"
                        checked={selPriceRange === opt.value}
                        onChange={() => setSelPriceRange(opt.value)}
                      />
                      <span className="gt-sb-label">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* CUSTOM GROUP BOOKING CTA */}
              <div className="gt-sb-cta-card">
                <div className="gt-sb-cta-head">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 21h16M5 21V9a7 7 0 0 1 14 0v12M9 21v-6a3 3 0 0 1 6 0v6" />
                  </svg>
                  <span className="gt-sb-cta-title">CUSTOM GROUP BOOKING</span>
                </div>
                <p className="gt-sb-cta-desc">
                  Need 10+ seats, custom corporate travel, or charter flights
                  across Pakistan &amp; Saudi Arabia?
                </p>
                <button
                  type="button"
                  className="gt-sb-cta-button"
                  onClick={handleWhatsApp}
                  id="sidebar-contact-btn"
                >
                  Contact us
                </button>
              </div>

              {/* Mobile Apply Filters button */}
              <button
                type="button"
                className="gt-sb-mob-apply-btn"
                onClick={() => setMobileOpen(false)}
              >
                View Results ({flights.length})
              </button>
            </aside>

            {/* ──────────── RESULTS ──────────── */}
            <main className="gt-results">
              <div className="gt-results-head">
                <div>
                  <h2 className="gt-results-h2">Group Tickets</h2>
                  <p className="gt-results-sub">
                    Showing {flights.length} of {totalCount} tickets
                  </p>
                </div>
                {hasFilters && (
                  <button
                    type="button"
                    className="gt-clear-btn"
                    onClick={clearAll}
                  >
                    <X size={12} /> Clear filters
                  </button>
                )}
              </div>

              {isLoading ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '60px 0',
                    gap: '12px',
                    color: '#64748b',
                  }}
                >
                  <Loader2
                    size={32}
                    className="animate-spin"
                    style={{ animation: 'spin 1s linear infinite' }}
                  />
                  <span>Loading group tickets...</span>
                </div>
              ) : flights.length > 0 ? (
                <>
                  <div className="gt-list">
                    {flights.map((f) => (
                      <FlightCard key={f.id} flight={f} />
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
                            <Loader2
                              size={16}
                              style={{ animation: 'spin 1s linear infinite' }}
                            />
                            Loading more...
                          </>
                        ) : (
                          `Load More (${totalCount - flights.length} remaining)`
                        )}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="gt-empty">
                  <AlertCircle size={38} />
                  <h3>No flights match your filters</h3>
                  <p>
                    Adjust your search query, dates, airline, or route filters.
                  </p>
                  <button
                    type="button"
                    className="gt-book-now-btn"
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

      {mobileOpen && (
        <div className="gt-overlay" onClick={() => setMobileOpen(false)} />
      )}
      <Footer />
    </div>
  );
}
