'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { VisaCard } from './VisaCard';
import { VisaBenefits } from './VisaBenefits';
import { PassportIcon } from '../../../shared';
import { visaService } from '../../../services/visa.service';

// ---------------------------------------------------------------------------
// Skeleton card — shown while loading
// ---------------------------------------------------------------------------
function VisaSkeletonCard() {
  return (
    <div className="visa-skeleton-card" aria-hidden="true">
      <div className="skeleton-img skeleton-img--visa" />
      <div className="skeleton-body">
        <div className="skeleton-line skeleton-line--title" />
        <div className="skeleton-line skeleton-line--sub" />
        <div className="skeleton-price-row">
          <div className="skeleton-line skeleton-line--price" />
          <div className="skeleton-btn-ghost" />
        </div>
      </div>
    </div>
  );
}

export function VisaSection({ initialVisas = [], searchFilter = null, onClearFilter }) {
  const router = useRouter();
  const [visas, setVisas] = useState(initialVisas);
  const [loading, setLoading] = useState(initialVisas.length === 0);
  const [error, setError] = useState(null);

  const isFilterActive = Boolean(
    searchFilter &&
      (searchFilter.destinationCountry ||
        searchFilter.country ||
        searchFilter.visaType ||
        searchFilter.results !== undefined)
  );

  const fetchVisas = () => {
    setLoading(true);
    setError(null);
    visaService
      .getVisas()
      .then((res) => { if (res && res.length > 0) setVisas(res); })
      .catch((err) => {
        console.error('[VisaSection] fetch failed:', err);
        setError('Could not load visa options. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (initialVisas.length > 0) return;
    fetchVisas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Real-time filtering when searchFilter is supplied from HeroSection
  const filteredVisas = useMemo(() => {
    // If searchFilter contains direct results from POST /visa/list, display them directly
    if (searchFilter?.results !== undefined && Array.isArray(searchFilter.results)) {
      return searchFilter.results.slice(0, 4);
    }

    if (!searchFilter?.destinationCountry && !searchFilter?.country) {
      return visas.slice(0, 4);
    }
    const countryQuery = (searchFilter.destinationCountry || searchFilter.country || '').toLowerCase().trim();

    let matched = visas.filter((visa) => {
      const cName = (visa.country || '').toLowerCase();
      const title = (visa.title || '').toLowerCase();
      const cat = (visa.category || '').toLowerCase();

      if (countryQuery.includes('dubai') || countryQuery.includes('uae')) {
        return cName.includes('emirates') || title.includes('dubai') || title.includes('uae');
      }
      if (countryQuery.includes('baku') || countryQuery.includes('azerbaijan')) {
        return cName.includes('azerbaijan') || title.includes('baku') || title.includes('azerbaijan');
      }
      if (countryQuery.includes('saudi')) {
        return cName.includes('saudi') || title.includes('saudi');
      }
      if (countryQuery.includes('malaysia')) {
        return cName.includes('malaysia') || title.includes('malaysia');
      }
      if (countryQuery.includes('turkey')) {
        return cName.includes('turkey') || title.includes('turkey');
      }
      if (countryQuery.includes('thailand')) {
        return cName.includes('thailand') || title.includes('thailand');
      }
      if (countryQuery.includes('uk') || countryQuery.includes('united kingdom')) {
        return cName.includes('kingdom') || title.includes('uk') || title.includes('united kingdom');
      }
      if (countryQuery.includes('usa') || countryQuery.includes('united states')) {
        return cName.includes('states') || title.includes('usa') || title.includes('united states');
      }

      return cName.includes(countryQuery) || title.includes(countryQuery) || cat.includes(countryQuery);
    });

    return matched.slice(0, 4);
  }, [searchFilter, visas]);

  const displayVisas = isFilterActive ? filteredVisas : visas.slice(0, 4);
  const activeDestCountry = searchFilter?.destinationCountry || searchFilter?.country || '';

  return (
    <section className="visa-feature-section" id="visa">
      <div className="section-container">
        {/* Section Header Row */}
        <div className="section-header-row visa-header-row">
          {/* Left Title Area */}
          <div className="section-header-left">
            <div className="section-eyebrow-badge visa-eyebrow">
              <PassportIcon size={16} className="eyebrow-icon visa-eyebrow-icon" />
              <span>FAST-TRACK ELECTRONIC &amp; TOURIST VISAS</span>
            </div>
            <h2 className="section-main-title">Global Visit Visa Services</h2>
            <p className="section-sub-title">
              Get direct embassy submission and ASAN e-Visa processing across multiple countries from a trusted visa consultancy, with document assistance and a 99.4% approval track record.
            </p>
          </div>

          {/* Right View All Visas Button */}
          <div className="section-header-right">
            <button
              type="button"
              className="visa-view-all-btn"
              onClick={() => router.push('/visas')}
            >
              View All Visa
            </button>
          </div>
        </div>

        {/* Active Filter Notice Bar if search filter was submitted from Hero */}
        {isFilterActive && (
          <div className="section-active-filter-bar">
            <div className="section-active-filter-left">
              <span className="filter-pill-label">FILTER ACTIVE</span>
              <span className="filter-pill-desc">
                {displayVisas.length > 0 ? (
                  <>
                    Showing visas for <strong>{activeDestCountry || 'all destinations'}</strong>
                    {searchFilter?.visaType ? ` · ${searchFilter.visaType}` : ''}
                    {' '}({displayVisas.length} {displayVisas.length === 1 ? 'option' : 'options'} available)
                  </>
                ) : (
                  <>
                    No visas found for <strong>{activeDestCountry || 'selected destination'}</strong>
                    {searchFilter?.visaType ? ` (${searchFilter.visaType})` : ''}.
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

        {/* Loading skeletons */}
        {loading && (
          <div className="visa-catalog-grid">
            {[1, 2, 3, 4].map((i) => <VisaSkeletonCard key={i} />)}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="section-error-state">
            <p>{error}</p>
            <button type="button" className="section-retry-btn" onClick={fetchVisas}>
              Retry
            </button>
          </div>
        )}

        {/* Responsive Grid or Empty State */}
        {!loading && !error && (
          isFilterActive && displayVisas.length === 0 ? (
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
                No visas found matching your search criteria.
              </p>
              <button
                type="button"
                className="notice-reset-btn"
                onClick={onClearFilter}
                style={{ margin: '0 auto', display: 'inline-flex' }}
              >
                Clear Filter &amp; Show All Visas
              </button>
            </div>
          ) : displayVisas.length > 0 ? (
            <div className="visa-catalog-grid">
              {displayVisas.map((visa) => (
                <VisaCard key={visa.id} visa={visa} />
              ))}
            </div>
          ) : (
            <div className="section-empty-state">
              <p>No visa services available right now. Please check back soon.</p>
            </div>
          )
        )}

        {/* Bottom 3 Trust & Guarantee Cards */}
        <div className="visa-benefits-container">
          <VisaBenefits />
        </div>
      </div>
    </section>
  );
}
