'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { UmrahPackageCard } from './UmrahPackageCard';
import { umrahService } from '../../../services/umrah.service';

// ---------------------------------------------------------------------------
// Skeleton card — shown while loading
// ---------------------------------------------------------------------------
function UmrahSkeletonCard() {
  return (
    <div className="umrah-skeleton-card" aria-hidden="true">
      <div className="skeleton-img" />
      <div className="skeleton-body">
        <div className="skeleton-line skeleton-line--title" />
        <div className="skeleton-line skeleton-line--sub" />
        <div className="skeleton-line skeleton-line--short" />
        <div className="skeleton-price-row">
          <div className="skeleton-line skeleton-line--price" />
          <div className="skeleton-btn-ghost" />
        </div>
      </div>
    </div>
  );
}

export function UmrahSection({ initialPackages = [], searchFilter = null, onClearFilter }) {
  const router = useRouter();
  const [packages, setPackages] = useState(initialPackages);
  const [loading, setLoading] = useState(initialPackages.length === 0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Skip client fetch if SSR already provided data
    if (initialPackages.length > 0) return;

    setLoading(true);
    setError(null);
    umrahService
      .getUmrahPackages()
      .then((res) => {
        if (res && res.length > 0) setPackages(res);
      })
      .catch((err) => {
        console.error('[UmrahSection] fetch failed:', err);
        setError('Could not load Umrah packages. Please try again.');
      })
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isFilterActive = Boolean(
    searchFilter &&
      (searchFilter.results !== undefined ||
        searchFilter.route ||
        searchFilter.departureDate ||
        searchFilter.noOfDays ||
        searchFilter.fromCity)
  );

  const displayPackages = useMemo(() => {
    if (searchFilter?.results !== undefined) {
      return searchFilter.results;
    }
    return packages;
  }, [searchFilter, packages]);

  return (
    <section className="umrah-feature-section" id="umrah">
      <div className="section-container">
        {/* Centered Luxury Header */}
        <div className="umrah-section-header">
          <div className="umrah-eyebrow-text">
            SACRED SPIRITUAL JOURNEYS
          </div>

          <h2 className="umrah-main-title">
            Verified Umrah Packages &amp; Haramain Stays
          </h2>

          <p className="umrah-sub-title">
            Choose from family, VIP, or economy Umrah packages, with verified hotel bookings near the Haramain, private transfers, Nusuk Rawdah permit help, and scholar-led Ziyarat.
          </p>
        </div>

        {/* Active Filter Notice Bar if search filter was submitted from Hero */}
        {isFilterActive && (
          <div className="section-active-filter-bar">
            <div className="section-active-filter-left">
              <span className="filter-pill-label">FILTER ACTIVE</span>
              <span className="filter-pill-desc">
                {searchFilter?.route ? (
                  <>Umrah packages for Route: <strong>{searchFilter.route}</strong></>
                ) : searchFilter?.fromCity ? (
                  <>Umrah packages departing from <strong>{searchFilter.fromCity}</strong></>
                ) : (
                  <>Filtered Umrah packages</>
                )}
                {searchFilter?.durationLabel || searchFilter?.noOfDays
                  ? ` · ${searchFilter.durationLabel || `${searchFilter.noOfDays} Days`}`
                  : ''}
                {searchFilter?.departureDateLabel || searchFilter?.departureDate || searchFilter?.departDate
                  ? ` · Departing ${searchFilter.departureDateLabel || searchFilter.departureDate || searchFilter.departDate}`
                  : ''}
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
          <div className="umrah-packages-grid">
            {[1, 2, 3].map((i) => <UmrahSkeletonCard key={i} />)}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="section-error-state">
            <p>{error}</p>
            <button
              type="button"
              className="section-retry-btn"
              onClick={() => {
                setLoading(true);
                setError(null);
                umrahService
                  .getUmrahPackages()
                  .then((res) => { if (res && res.length > 0) setPackages(res); })
                  .catch(() => setError('Could not load Umrah packages. Please try again.'))
                  .finally(() => setLoading(false));
              }}
            >
              Retry
            </button>
          </div>
        )}

        {/* 3 Premium Package Cards Grid */}
        {!loading && !error && (
          <>
            {displayPackages.length > 0 ? (
              <div className="umrah-packages-grid">
                {displayPackages.slice(0, 3).map((pkg) => (
                  <UmrahPackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            ) : isFilterActive ? (
              <div className="section-empty-state">
                <p>No Umrah packages match your selected route or duration.</p>
                <button
                  type="button"
                  className="section-retry-btn"
                  onClick={onClearFilter}
                >
                  Clear Filter / Show All Packages
                </button>
              </div>
            ) : (
              <div className="section-empty-state">
                <p>No Umrah packages available right now. Please check back soon.</p>
              </div>
            )}
          </>
        )}

        {/* Bottom Right View All Packages Pill Button */}
        <div className="umrah-bottom-action-row">
          <button
            type="button"
            className="umrah-view-all-btn"
            onClick={() => router.push('/umrah-packages')}
          >
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
}
