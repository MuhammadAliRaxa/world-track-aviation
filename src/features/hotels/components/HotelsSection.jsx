'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BedDouble } from 'lucide-react';
import { useHotels } from '../hooks/useHotels';
import { HotelCard } from './HotelCard';
import { HotelsMapButton } from './HotelsMapButton';

export function HotelsSection({ searchFilter = null, onClearFilter }) {
  const router = useRouter();
  const { allHotels } = useHotels();

  const isFilterActive = Boolean(
    searchFilter &&
      (searchFilter.destination ||
        searchFilter.city ||
        searchFilter.results !== undefined)
  );

  // Real-time filtering when searchFilter is supplied from HeroSection
  const filteredHotels = React.useMemo(() => {
    // If searchFilter contains direct results from POST /hotel/minRate, display them directly
    if (searchFilter?.results !== undefined && Array.isArray(searchFilter.results)) {
      return searchFilter.results.slice(0, 4);
    }

    if (!searchFilter?.destination && !searchFilter?.city) {
      return allHotels.slice(0, 4);
    }
    const dest = (searchFilter.destination || searchFilter.city || '').toLowerCase().trim();

    // Specific mapping for regional searches
    let matched = allHotels.filter((hotel) => {
      const loc = (hotel.location || '').toLowerCase();
      const cat = (hotel.category || '').toLowerCase();
      const name = (hotel.name || '').toLowerCase();
      const addr = (hotel.address || '').toLowerCase();

      if (dest.includes('saudi') || dest.includes('makkah') || dest.includes('madina')) {
        return loc === 'makkah' || loc === 'madinah' || cat === 'makkah' || cat === 'madina' || addr.includes('saudi');
      }
      if (dest.includes('singapore')) {
        return loc === 'singapore' || cat === 'singapore';
      }
      if (dest.includes('dubai')) {
        return loc === 'dubai' || cat === 'dubai' || name.includes('dubai') || addr.includes('dubai');
      }
      if (dest.includes('baku')) {
        return loc === 'baku' || cat === 'baku' || name.includes('baku');
      }
      if (dest.includes('istanbul') || dest.includes('turkey')) {
        return loc === 'istanbul' || cat === 'istanbul' || name.includes('istanbul');
      }
      if (dest.includes('malaysia') || dest.includes('kuala')) {
        return loc.includes('kuala') || loc.includes('malaysia') || cat.includes('malaysia');
      }

      return loc.includes(dest) || cat.includes(dest) || name.includes(dest);
    });

    return matched.slice(0, 4);
  }, [allHotels, searchFilter]);

  const displayHotels = isFilterActive ? filteredHotels : allHotels.slice(0, 4);
  const activeDestName = searchFilter?.destination || searchFilter?.city || '';

  return (
    <section className="hotels-feature-section" id="hotels">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-header-left">
            <div className="section-eyebrow-badge">
              <BedDouble size={16} className="eyebrow-icon" />
              <span>LUXURY &amp; HARAMAIN ACCOMMODATIONS</span>
            </div>
            <h2 className="section-main-title">Popular Hotels in Makkah &amp; Madinah</h2>
            <p className="section-sub-title">
              Every stay comes with instant confirmation, clear pricing, and 24/7 support you can count on.
            </p>
          </div>

          {/* Action buttons: Hotels Map + View All Hotels */}
          <div className="section-header-right hotel-section-header-actions">
            <HotelsMapButton />
            <button
              type="button"
              className="hotel-view-all-pill"
              onClick={() => router.push('/hotels')}
            >
              View All Hotels
            </button>
          </div>
        </div>

        {/* Active Filter Notice Bar if search filter was submitted from Hero */}
        {isFilterActive && (
          <div className="section-active-filter-bar">
            <div className="section-active-filter-left">
              <span className="filter-pill-label">FILTER ACTIVE</span>
              <span className="filter-pill-desc">
                {displayHotels.length > 0 ? (
                  <>
                    Showing hotels in <strong>{activeDestName || 'all destinations'}</strong>
                    {' '}({displayHotels.length} {displayHotels.length === 1 ? 'property' : 'properties'} found)
                  </>
                ) : (
                  <>
                    No properties found directly in <strong>{activeDestName || 'selected destination'}</strong>
                    {searchFilter?.checkIn && searchFilter?.checkOut ? ` for ${searchFilter.checkIn} to ${searchFilter.checkOut}` : ''}.
                  </>
                )}
              </span>
            </div>
            <button
              type="button"
              className="filter-pill-clear-btn"
              onClick={onClearFilter}
            >
              Clear Filter / Show All
            </button>
          </div>
        )}

        {/* Hotels Responsive Grid or Empty State */}
        {isFilterActive && displayHotels.length === 0 ? (
          <div
            className="section-empty-state"
            style={{
              textAlign: 'center',
              padding: '48px 16px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              margin: '24px 0',
            }}
          >
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '16px' }}>
              No hotels found matching your search criteria.
            </p>
            <button
              type="button"
              className="notice-reset-btn"
              onClick={onClearFilter}
              style={{ margin: '0 auto', display: 'inline-flex' }}
            >
              Clear Filter &amp; Show All Hotels
            </button>
          </div>
        ) : (
          <div className="hotels-catalog-grid">
            {displayHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
