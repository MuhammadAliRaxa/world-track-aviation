'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HolidayCard } from './HolidayCard';
import { tourService } from '../../../services/tour.service';

function HolidaySkeletonCard() {
  return (
    <div className="holiday-skeleton-card" aria-hidden="true">
      <div className="skeleton-img" />
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

export function HolidaysSection({ initialTours = [] }) {
  const router = useRouter();
  const [tours, setTours] = useState(initialTours);
  const [loading, setLoading] = useState(initialTours.length === 0);
  const [error, setError] = useState(null);

  const fetchTours = () => {
    setLoading(true);
    setError(null);
    tourService
      .getTours()
      .then((res) => { if (res && res.length > 0) setTours(res); })
      .catch((err) => {
        console.error('[HolidaysSection] fetch failed:', err);
        setError('Could not load tour packages. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (initialTours.length > 0) return;
    fetchTours();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="holidays-feature-section" id="holidays">
      <div className="section-container">
        {/* Section Header Row */}
        <div className="section-header-row holidays-header-row">
          <div className="section-header-left">
            <div className="section-eyebrow-badge holiday-eyebrow">
              <span>ALL-INCLUSIVE GLOBAL VACATIONS</span>
            </div>
            <h2 className="section-main-title">International Tour Packages &amp; Getaways</h2>
            <p className="section-sub-title">
              Complete holiday packages with e-Visas, hotel bookings, guided sightseeing, and airport transfers, for families, couples, and corporate groups.
            </p>
          </div>

          {/* Right View All Tours Button */}
          <div className="section-header-right">
            <button
              type="button"
              className="holiday-view-all-btn"
              onClick={() => router.push('/tours')}
            >
              View All Tours
            </button>
          </div>
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="holidays-catalog-grid">
            {[1, 2, 3, 4].map((i) => <HolidaySkeletonCard key={i} />)}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="section-error-state">
            <p>{error}</p>
            <button type="button" className="section-retry-btn" onClick={fetchTours}>
              Retry
            </button>
          </div>
        )}

        {/* 4 Tour Cards Grid */}
        {!loading && !error && (
          tours.length > 0 ? (
            <div className="holidays-catalog-grid">
              {tours.slice(0, 4).map((tour) => (
                <HolidayCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="section-empty-state">
              <p>No tour packages available right now. Please check back soon.</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
