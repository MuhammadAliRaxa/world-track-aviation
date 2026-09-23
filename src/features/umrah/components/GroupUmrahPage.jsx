'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Search, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import { umrahService } from '../../../services';
import { AppBar, Footer, Modals, WhatsAppIcon } from '../../../shared';
import { COMPANY_CONFIG } from '../../../config/company';
import { useDebounce } from '../../../shared/hooks/useDebounce';

export function GroupUmrahPage({ initialPackages = [] }) {
  const router = useRouter();

  const [packages, setPackages] = useState(initialPackages);
  const [isFiltering, setIsFiltering] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [selectedDuration, setSelectedDuration] = useState([]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);

  // Modal & Mobile Filter states
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleWhatsApp = () => {
    window.open(COMPANY_CONFIG.getWhatsAppUrl('Hi, I need assistance with group Umrah package booking. Please assist.'), '_blank');
  };

  // Duration Filter options
  const durationOptions = ['15 Days', '21 Days', '28 Days'];

  // Airline Options
  const airlineOptions = [
    { code: 'SV', name: 'Saudi Arabian Airlines', count: 2 },
    { code: 'PK', name: 'Pakistan International Airlines', count: 1 },
    { code: 'EK', name: 'Emirates', count: 2 },
    { code: 'PA', name: 'Airblue', count: 1 },
    { code: 'XY', name: 'Flynas', count: 1 },
    { code: 'RK', name: 'Riyadh Air', count: 1 },
    { code: 'WY', name: 'Oman Air', count: 1 },
    { code: 'BA', name: 'British Airways / Virgin', count: 1 },
    { code: 'QR', name: 'Qatar Airways', count: 1 },
    { code: 'GF', name: 'Gulf Air', count: 1 },
  ];

  // Sector Options
  const sectorOptions = [
    { name: 'ISLAMABAD - JEDDAH - ISLAMABAD', count: 4 },
    { name: 'LAHORE - JEDDAH - LAHORE', count: 1 },
    { name: 'KARACHI - MEDINA - KARACHI', count: 1 },
    { name: 'PESHAWAR - JEDDAH - PESHAWAR', count: 1 },
    { name: 'ISLAMABAD - DUBAI - ISLAMABAD', count: 1 },
    { name: 'LAHORE - SHARJAH - LAHORE', count: 1 },
    { name: 'ISLAMABAD - RIYADH - ISLAMABAD', count: 1 },
    { name: 'SIALKOT - MUSCAT - SIALKOT', count: 1 },
    { name: 'ISLAMABAD - MANAMA - ISLAMAF', count: 1 },
  ];

  const toggleDuration = (dur) => {
    setSelectedDuration((prev) =>
      prev.includes(dur) ? prev.filter((d) => d !== dur) : [...prev, dur]
    );
  };

  const toggleAirline = (code) => {
    setSelectedAirlines((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const toggleSector = (sec) => {
    setSelectedSectors((prev) =>
      prev.includes(sec) ? prev.filter((s) => s !== sec) : [...prev, sec]
    );
  };

  const clearAll = () => {
    setSearchQuery('');
    setSelectedDuration([]);
    setSelectedAirlines([]);
    setSelectedSectors([]);
  };

  const hasFilters = debouncedSearch.trim() !== '' || selectedDuration.length > 0 || selectedAirlines.length > 0 || selectedSectors.length > 0;

  useEffect(() => {
    const fetchFiltered = async () => {
      setIsFiltering(true);
      try {
        // Map duration labels (e.g. "15 Days") to numbers for the API
        const durationNums = selectedDuration.map((d) => parseInt(d));

        const apiFilters = {};
        if (debouncedSearch.trim()) apiFilters.name = debouncedSearch.trim();
        if (durationNums.length > 0) apiFilters.duration = durationNums;
        // airlines and routes filters not sent (no IDs available client-side)

        const results = await umrahService.getGroupUmrahPackages(
          Object.keys(apiFilters).length > 0 ? apiFilters : undefined
        );

        // Client-side sector filter (no server-side sector filter in API)
        const filtered = selectedSectors.length > 0
          ? results.filter((p) => selectedSectors.includes(p.sector))
          : results;

        setPackages(filtered);
      } catch (err) {
        console.error('[GroupUmrahPage] filter error:', err);
      } finally {
        setIsFiltering(false);
      }
    };

    if (!hasFilters && initialPackages.length > 0) {
      setPackages(initialPackages);
      return;
    }

    fetchFiltered();
  }, [debouncedSearch, selectedDuration, selectedSectors, initialPackages, hasFilters]);

  return (
    <div className="group-umrah-page-root" style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a' }}>
      {/* 1. Header Bar & Floating Navbar */}
      <AppBar
        onOpenContact={() => setIsContactOpen(true)}
        heroContent={
          <div className="tr-hero">
            <div className="tr-hero-bg" />
            <div className="tr-hero-overlay" />
            <div className="tr-hero-body">
              <h1 className="tr-hero-h1">Group Umrah Packages</h1>
              <p className="tr-hero-intro">
                Traveling as a group usually means better hotel rates and one person handling the whole booking instead of everyone arranging their own visa and transport. These packages are built for that: fixed group pricing, shared transfers between Jeddah, Makkah, and Madinah, and rooms blocked together at the same hotel.
              </p>
            </div>
          </div>
        }
      />

      {/* 2. Compact Breadcrumb Navigation */}
      <div className="blog-breadcrumb-row">
        <div className="detail-container breadcrumb-inner">
          <button
            type="button"
            className="breadcrumb-back-capsule"
            onClick={() => router.push('/')}
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </button>
        </div>
      </div>

      {/* 3. Main Content Container */}
      <div className="group-umrah-container">
        <div className="group-umrah-layout">
          
          {/* ── LEFT SIDEBAR FILTERS ── */}
          <aside className={`group-umrah-sidebar ${showMobileFilters ? 'mobile-filters-open' : ''}`}>
            <div className="group-umrah-filter-card">
              
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
                  <SlidersHorizontal size={16} />
                  <span>Filter By</span>
                </div>
                {(selectedDuration.length > 0 || selectedAirlines.length > 0 || selectedSectors.length > 0 || searchQuery) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDuration([]);
                      setSelectedAirlines([]);
                      setSelectedSectors([]);
                      setSearchQuery('');
                    }}
                    style={{ background: 'none', border: 'none', color: '#ea580c', fontSize: '11px', fontWeight: 600, cursor: 'pointer', padding: 0 }}
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Search Box */}
              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <input
                  type="text"
                  placeholder="Search Group Packages"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 34px',
                    fontSize: '12px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#f8fafc',
                    outline: 'none',
                    color: '#0f172a',
                    boxSizing: 'border-box'
                  }}
                />
                <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              </div>

              {/* SECTION 1: DURATION */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#0f172a', letterSpacing: '0.05em' }}>DURATION</span>
                  <div style={{ display: 'flex', gap: '8px', fontSize: '11px' }}>
                    <button type="button" onClick={() => setSelectedDuration([...durationOptions])} style={{ background: 'none', border: 'none', color: '#0284c7', cursor: 'pointer', padding: 0 }}>All</button>
                    <button type="button" onClick={() => setSelectedDuration([])} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}>Clear</button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {durationOptions.map((dur) => (
                    <label key={dur} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#334155', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={selectedDuration.includes(dur)}
                        onChange={() => toggleDuration(dur)}
                        style={{ accentColor: '#0284c7', width: '15px', height: '15px', borderRadius: '4px', cursor: 'pointer' }}
                      />
                      <span>{dur}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* SECTION 2: AIRLINES */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#0f172a', letterSpacing: '0.05em' }}>AIRLINES</span>
                  <div style={{ display: 'flex', gap: '8px', fontSize: '11px' }}>
                    <button type="button" onClick={() => setSelectedAirlines(airlineOptions.map((a) => a.code))} style={{ background: 'none', border: 'none', color: '#0284c7', cursor: 'pointer', padding: 0 }}>All</button>
                    <button type="button" onClick={() => setSelectedAirlines([])} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}>Clear</button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '240px', overflowY: 'auto' }}>
                  {airlineOptions.map((air) => (
                    <label key={air.code} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#334155', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                          type="checkbox"
                          checked={selectedAirlines.includes(air.code)}
                          onChange={() => toggleAirline(air.code)}
                          style={{ accentColor: '#0284c7', width: '14px', height: '14px', borderRadius: '3px', cursor: 'pointer' }}
                        />
                        <span style={{ fontWeight: 700, fontSize: '11px', background: '#f1f5f9', padding: '1px 5px', borderRadius: '4px', color: '#475569' }}>{air.code}</span>
                        <span style={{ fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '140px' }}>{air.name}</span>
                      </div>
                      <span style={{ fontSize: '11px', color: '#94a3b8', background: '#f8fafc', padding: '1px 5px', borderRadius: '8px' }}>{air.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* SECTION 3: SECTORS & ROUTES */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#0f172a', letterSpacing: '0.05em' }}>SECTORS &amp; ROUTES</span>
                  <div style={{ display: 'flex', gap: '8px', fontSize: '11px' }}>
                    <button type="button" onClick={() => setSelectedSectors(sectorOptions.map((s) => s.name))} style={{ background: 'none', border: 'none', color: '#0284c7', cursor: 'pointer', padding: 0 }}>All</button>
                    <button type="button" onClick={() => setSelectedSectors([])} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}>Clear</button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '260px', overflowY: 'auto' }}>
                  {sectorOptions.map((sec) => (
                    <label key={sec.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', color: '#334155', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                        <input
                          type="checkbox"
                          checked={selectedSectors.includes(sec.name)}
                          onChange={() => toggleSector(sec.name)}
                          style={{ accentColor: '#0284c7', width: '14px', height: '14px', borderRadius: '3px', cursor: 'pointer', flexShrink: 0 }}
                        />
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '160px' }}>{sec.name}</span>
                      </div>
                      <span style={{ fontSize: '10px', color: '#94a3b8', background: '#f8fafc', padding: '1px 5px', borderRadius: '8px', flexShrink: 0 }}>{sec.count}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* CUSTOM GROUP BOOKING CARD */}
            <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '16px', padding: '20px', color: '#ffffff', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '8px' }}>
                <ShieldCheck size={14} />
                <span>CUSTOM GROUP BOOKING</span>
              </div>
              <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.45', margin: '0 0 16px 0' }}>
                Need 5+ rooms, VIP Haramain high-speed train connections, or presidential suites in Makkah?
              </p>
              <button
                type="button"
                onClick={handleWhatsApp}
                style={{
                  width: '100%',
                  padding: '8px 14px',
                  borderRadius: '7px',
                  border: 'none',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontSize: '12px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '7px',
                  cursor: 'pointer'
                }}
              >
                <WhatsAppIcon size={15} color="#25D366" />
                <span>Contact us</span>
              </button>
            </div>
          </aside>

          {/* ── RIGHT MAIN CONTENT ── */}
          <main className="group-umrah-main">
            
            {/* Top Info Bar with Mobile Filter Toggle */}
            <div className="group-umrah-info-bar">
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: 0 }}>Group Umrah Packages</h2>
                <p style={{ fontSize: '12px', color: '#64748b', margin: '2px 0 0 0' }}>
                  Showing {isFiltering ? "..." : packages.length} packages
                </p>
              </div>

              {/* Mobile Filter Toggle Button */}
              <button
                type="button"
                className="group-mobile-filter-btn"
                onClick={() => setShowMobileFilters((prev) => !prev)}
              >
                <SlidersHorizontal size={14} />
                <span>{showMobileFilters ? 'Hide Filters' : 'Filter Packages'}</span>
                {(selectedDuration.length > 0 || selectedAirlines.length > 0 || selectedSectors.length > 0) && (
                  <span className="group-mobile-filter-count">
                    {selectedDuration.length + selectedAirlines.length + selectedSectors.length}
                  </span>
                )}
              </button>
            </div>

            {/* List of Package Cards */}
            {isFiltering ? (
              <div className="hp-empty-state">
                <p className="hp-empty-title">Loading packages...</p>
              </div>
            ) : packages.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group-umrah-card"
                >
                  {/* Card Header Row */}
                  <div className="group-card-header">
                    <div className="group-card-airline-info">
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          background: '#f8fafc',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '14px',
                          color: '#334155',
                          flexShrink: 0
                        }}
                      >
                        {pkg.airlineCode}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h3 className="group-card-sector-title">
                          {pkg.sector}
                        </h3>
                        <div style={{ fontSize: '12px', color: '#64748b', marginTop: '1px' }}>
                          {pkg.airlineName}
                        </div>
                      </div>
                    </div>

                    <div className="group-card-header-actions">
                      <span
                        style={{
                          background: '#dcfce7',
                          color: '#15803d',
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '20px',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {pkg.seatsLeft} Seats Left
                      </span>
                      <button
                        type="button"
                        onClick={() => router.push(`/umrah-packages/${pkg.id || 'luxury-ramadan'}`)}
                        style={{
                          background: '#0284c7',
                          color: '#ffffff',
                          border: 'none',
                          padding: '7px 18px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          boxShadow: '0 2px 4px rgba(2,132,199,0.2)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>

                  {/* Flight Info Strip */}
                  <div className="group-flight-strip">
                    <div className="group-flight-leg">
                      <div style={{ color: '#0284c7', fontWeight: 700, marginBottom: '2px' }}>
                        OUTBOUND - {pkg.outbound?.date || pkg.departure_date || 'ON REQUEST'}
                      </div>
                      <div style={{ color: '#0f172a', fontWeight: 600 }}>
                        {pkg.outbound?.flightNo || ''} {pkg.outbound?.time ? `(${pkg.outbound.time})` : ''}
                      </div>
                      <div style={{ color: '#64748b', fontSize: '10px', marginTop: '2px' }}>
                        {pkg.outbound?.baggage || ''}
                      </div>
                    </div>

                    <div className="group-flight-leg">
                      <div style={{ color: '#ea580c', fontWeight: 700, marginBottom: '2px' }}>
                        INBOUND - {pkg.inbound?.date || 'CONFIRMED'}
                      </div>
                      <div style={{ color: '#0f172a', fontWeight: 600 }}>
                        {pkg.inbound?.flightNo || ''} {pkg.inbound?.time ? `(${pkg.inbound.time})` : ''}
                      </div>
                      <div style={{ color: '#64748b', fontSize: '10px', marginTop: '2px' }}>
                        {pkg.inbound?.baggage || ''}
                      </div>
                    </div>
                  </div>

                  {/* Hotels & Pricing Grid */}
                  <div className="group-hotels-pricing-grid">
                    
                    {/* Hotels Column */}
                    <div className="group-hotels-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {/* Makkah Hotel */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: '#fef3c7',
                            color: '#d97706',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            flexShrink: 0
                          }}
                        >
                          🕋
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.05em' }}>MAKKAH</div>
                          <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', lineHeight: '1.2' }}>
                            {pkg.makkahHotel?.name || 'Makkah Hotel'}
                          </div>
                          <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                            {pkg.makkahHotel?.nights ? `${pkg.makkahHotel.nights} nights` : ''} {pkg.makkahHotel?.shuttle ? `• ${pkg.makkahHotel.shuttle}` : ''}
                          </div>
                        </div>
                      </div>

                      {/* Madinah Hotel */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: '#dcfce7',
                            color: '#16a34a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            flexShrink: 0
                          }}
                        >
                          🕌
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.05em' }}>MADINAH</div>
                          <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', lineHeight: '1.2' }}>
                            {pkg.madinahHotel?.name || 'Madinah Hotel'}
                          </div>
                          <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                            {pkg.madinahHotel?.nights ? `${pkg.madinahHotel.nights} nights` : ''} {pkg.madinahHotel?.shuttle ? `• ${pkg.madinahHotel.shuttle}` : ''}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Matrix Column */}
                    <div className="group-pricing-wrapper">
                      {/* Desktop Table Header */}
                      <div className="group-pricing-table-header">
                        <div>SHARING</div>
                        <div>DOUBLE</div>
                        <div>TRIPLE</div>
                        <div>QUAD</div>
                      </div>

                      {/* Pricing Body Cells */}
                      <div className="group-pricing-table-body">
                        <div className="group-pricing-cell">
                          <div className="group-pricing-tier-badge">SHARING</div>
                          <div className="group-pricing-currency">PKR</div>
                          <div className="group-pricing-amount">{pkg.pricing?.sharing || pkg.price || 'Call'}</div>
                          <div className="group-pricing-sub">per person</div>
                        </div>

                        <div className="group-pricing-cell">
                          <div className="group-pricing-tier-badge">DOUBLE</div>
                          <div className="group-pricing-currency">PKR</div>
                          <div className="group-pricing-amount">{pkg.pricing?.double || pkg.price || 'Call'}</div>
                          <div className="group-pricing-sub">per person</div>
                        </div>

                        <div className="group-pricing-cell">
                          <div className="group-pricing-tier-badge">TRIPLE</div>
                          <div className="group-pricing-currency">PKR</div>
                          <div className="group-pricing-amount">{pkg.pricing?.triple || pkg.price || 'Call'}</div>
                          <div className="group-pricing-sub">per person</div>
                        </div>

                        <div className="group-pricing-cell">
                          <div className="group-pricing-tier-badge">QUAD</div>
                          <div className="group-pricing-currency">PKR</div>
                          <div className="group-pricing-amount">{pkg.pricing?.quad || pkg.price || 'Call'}</div>
                          <div className="group-pricing-sub">per person</div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>
            ) : (
              <div className="hp-empty-state">
                <p className="hp-empty-title">No packages found</p>
                <p className="hp-empty-desc">Try adjusting your filters to see more results.</p>
                <button type="button" className="hp-empty-reset-btn" onClick={clearAll}>
                  Reset Filters
                </button>
              </div>
            )}

          </main>
        </div>
      </div>

      {/* 5. Contact Modal */}
      <Modals isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
