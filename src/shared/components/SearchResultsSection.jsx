'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Calendar, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { HotelCard } from '../../features/hotels/components/HotelCard';
import { GroupUmrahCard } from '../../features/umrah/components/GroupUmrahCard';
import { VisaCard } from '../../features/visas/components/VisaCard';

function formatDisplayDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

export function SearchResultsSection({ searchData, onClose }) {
  const router = useRouter();

  if (!searchData) return null;

  const { tab, params = {}, results = [] } = searchData;

  const getServiceLabel = () => {
    switch (tab) {
      case 'hotels':
        return 'Hotels & Luxury Stays';
      case 'umrah':
        return 'Group Umrah Packages';
      case 'visa':
        return 'Visit Visas';
      default:
        return 'Search Results';
    }
  };

  const getCatalogLink = () => {
    switch (tab) {
      case 'hotels':
        return '/hotels';
      case 'umrah':
        return '/umrah-group-packages';
      case 'visa':
        return '/visas';
      default:
        return '/';
    }
  };

  const getMainTitle = () => {
    if (tab === 'hotels') {
      const dest = params.city || params.destination;
      return dest && dest !== 'All Destinations' ? `Hotels in ${dest}` : 'Available Hotels';
    }
    if (tab === 'umrah') {
      const route = params.route;
      return route && route !== 'All Routes' ? `Group Umrah: ${route}` : 'Group Umrah Packages';
    }
    if (tab === 'visa') {
      const country = params.destinationCountry || params.country;
      return country && country !== 'All Destinations' ? `Visit Visas for ${country}` : 'Available Visit Visas';
    }
    return 'Search Results';
  };

  return (
    <section className="search-results-section" id="search-results">
      <div className="section-container">
        
        {/* Header Capsule Bar */}
        <div className="search-results-header-card">
          <div className="search-results-header-left">
            <div className="search-results-badge-row">
              <span className="search-results-badge">
                <Sparkles size={13} className="badge-sparkle-icon" />
                SEARCH RESULTS
              </span>
              <span className="search-results-service-tag">{getServiceLabel()}</span>
              <span className="search-results-count-pill">
                {results.length} {results.length === 1 ? 'Option' : 'Options'} Found
              </span>
            </div>

            <h2 className="search-results-title">{getMainTitle()}</h2>

            {/* Filter Tags Summary */}
            <div className="search-results-filter-tags">
              {tab === 'hotels' && (
                <>
                  {(params.city || params.destination) && (
                    <span className="filter-tag-pill">
                      <MapPin size={12} />
                      {params.city || params.destination}
                    </span>
                  )}
                  {params.checkIn && (
                    <span className="filter-tag-pill">
                      <Calendar size={12} />
                      Check-in: {formatDisplayDate(params.checkIn)}
                    </span>
                  )}
                  {params.checkOut && (
                    <span className="filter-tag-pill">
                      <Calendar size={12} />
                      Check-out: {formatDisplayDate(params.checkOut)}
                    </span>
                  )}
                  {params.roomType && (
                    <span className="filter-tag-pill">Room: {params.roomType}</span>
                  )}
                </>
              )}

              {tab === 'umrah' && (
                <>
                  {params.route && (
                    <span className="filter-tag-pill">
                      <MapPin size={12} />
                      Route: {params.route}
                    </span>
                  )}
                  {(params.departureDateLabel || params.departureDate) && (
                    <span className="filter-tag-pill">
                      <Calendar size={12} />
                      Departure: {params.departureDateLabel || params.departureDate}
                    </span>
                  )}
                  {(params.durationLabel || params.noOfDays) && (
                    <span className="filter-tag-pill">
                      Duration: {params.durationLabel || `${params.noOfDays} Days`}
                    </span>
                  )}
                </>
              )}

              {tab === 'visa' && (
                <>
                  {(params.destinationCountry || params.country) && (
                    <span className="filter-tag-pill">
                      <MapPin size={12} />
                      {params.destinationCountry || params.country}
                    </span>
                  )}
                  {params.visaType && (
                    <span className="filter-tag-pill">Type: {params.visaType}</span>
                  )}
                  {params.checkIn && (
                    <span className="filter-tag-pill">
                      <Calendar size={12} />
                      Entry: {formatDisplayDate(params.checkIn)}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>

          <button
            type="button"
            className="search-results-close-btn"
            onClick={onClose}
            aria-label="Close search results"
          >
            <X size={16} />
            <span>Clear Search</span>
          </button>
        </div>

        {/* Results Grid or Empty State */}
        {results.length > 0 ? (
          <>
            {tab === 'hotels' && (
              <div className="hotels-catalog-grid search-results-grid">
                {results.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            )}

            {tab === 'umrah' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', marginBottom: '24px' }}>
                {results.map((pkg) => (
                  <GroupUmrahCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            )}

            {tab === 'visa' && (
              <div className="visa-catalog-grid search-results-grid">
                {results.map((visa) => (
                  <VisaCard key={visa.id} visa={visa} />
                ))}
              </div>
            )}

            {/* Bottom Actions Row */}
            <div className="search-results-footer-row">
              <button
                type="button"
                className="search-results-secondary-btn"
                onClick={onClose}
              >
                Clear Search Results
              </button>
              <button
                type="button"
                className="search-results-view-all-btn"
                onClick={() => router.push(getCatalogLink())}
              >
                <span>Browse Full Catalog</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="search-results-empty-card">
            <div className="empty-icon-capsule">
              <Search size={32} strokeWidth={1.75} />
            </div>
            <h3 className="empty-title">No Matching Results Found</h3>
            <p className="empty-description">
              We couldn't find any {getServiceLabel().toLowerCase()} matching your selected search criteria.
              Try adjusting your route, dates, or filters, or view our complete catalog.
            </p>
            <div className="empty-actions">
              <button
                type="button"
                className="empty-clear-btn"
                onClick={onClose}
              >
                Reset Search Filters
              </button>
              <button
                type="button"
                className="empty-browse-btn"
                onClick={() => router.push(getCatalogLink())}
              >
                <span>Browse All {getServiceLabel()}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
