'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import {
  AppBar,
  HeroSection,
  QuoteBanner,
  AboutSection,
  Footer,
  SearchResultsSection,
} from './';
import { HotelsSection } from '../../features/hotels/components/HotelsSection';
import { UmrahSection } from '../../features/umrah';
import { VisaSection } from '../../features/visas';
import { HolidaysSection } from '../../features/holidays';
import { useHotelsDispatch } from '../../features/hotels/state/HotelsContext';

// Dynamic code-splitting for below-the-fold sections and interactive dialogs
const AdvantageSection = dynamic(() => import('./AdvantageSection').then(m => m.AdvantageSection));
const ReviewsSection = dynamic(() => import('./ReviewsSection').then(m => m.ReviewsSection));
const TeamSection = dynamic(() => import('../../features/team').then(m => m.TeamSection));
const InsightsSection = dynamic(() => import('../../features/insights').then(m => m.InsightsSection));
const FaqSection = dynamic(() => import('../../features/faq').then(m => m.FaqSection));
const Modals = dynamic(() => import('./Modals').then(m => m.Modals), { ssr: false });

/**
 * Inner component that has access to HotelsContext dispatch.
 * Seeds hotels from SSR data on first render.
 */
function HomePageInner({
  initialUmrahPackages,
  initialHotels,
  initialVisas,
  initialTours,
  initialBlogs,
  initialTeam,
  initialReviews,
  initialHotelLookups,
  initialVisaLookups,
  initialGroupUmrahLookups,
}) {
  const router = useRouter();
  const dispatch = useHotelsDispatch();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchFilter, setSearchFilter] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  // Seed HotelsContext with SSR data on first render
  useEffect(() => {
    if (initialHotels && initialHotels.length > 0) {
      dispatch({ type: 'SET_HOTELS', payload: initialHotels });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#hotels') {
        setActiveCategory('hotels');
      } else if (hash === '#visa') {
        setActiveCategory('visa');
      } else if (hash === '#umrah') {
        setActiveCategory('umrah');
      }
    }
  }, []);

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
    if (category === 'hotels') {
      window.history.replaceState(null, '', '#hotels');
      setTimeout(() => {
        const hotelsElem = document.getElementById('hotels');
        if (hotelsElem) {
          hotelsElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else if (category === 'umrah') {
      window.history.replaceState(null, '', '#umrah');
      setTimeout(() => {
        const umrahElem = document.getElementById('umrah');
        if (umrahElem) {
          umrahElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else if (category === 'visa') {
      window.history.replaceState(null, '', '#visa');
      setTimeout(() => {
        const visaElem = document.getElementById('visa');
        if (visaElem) {
          visaElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      setSearchFilter(null);
      window.history.replaceState(null, '', '#home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleClearSearchFilter = () => {
    setSearchFilter(null);
  };

  const handleSearchSubmit = (searchPayload) => {
    const tab = searchPayload?.tab;
    const params = searchPayload?.params || {};
    const results = params?.results || [];

    if (tab === 'cars') {
      router.push('/private-transport');
      return;
    }

    setSearchResults({ tab, params, results });

    // Smooth scroll down to the dedicated separate search results component in bottom
    setTimeout(() => {
      const resultsElem = document.getElementById('search-results');
      if (resultsElem) {
        resultsElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleClearSearchResults = () => {
    setSearchResults(null);
  };

  return (
    <div className="app-layout-root">
      {/* 1. AppBar (TopBar + Floating Glassmorphic Nav Capsule over Hero) */}
      <AppBar
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        heroContent={
          <HeroSection
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            onSearchSubmit={handleSearchSubmit}
            initialLookups={initialHotelLookups}
            initialVisaLookups={initialVisaLookups}
            initialGroupUmrahLookups={initialGroupUmrahLookups}
          />
        }
      />

      {/* If search is active, show the dedicated SearchResultsSection */}
      {searchResults && (
        <SearchResultsSection
          searchData={searchResults}
          onClose={handleClearSearchResults}
        />
      )}

      {/* Homepage sections — kept mounted so searching or clearing search never re-triggers other APIs */}
      <div style={{ display: searchResults ? 'none' : 'contents' }}>
        {/* Active filter badge / banner when a specific service is filtered */}
        {activeCategory !== 'all' && (
          <div className="section-container">
            <div className="category-filter-notice-bar">
              <div className="category-filter-notice-content">
                <span className="notice-badge">FILTER ACTIVE</span>
                <span className="notice-text">
                  Showing <strong>{activeCategory === 'hotels' ? 'Popular Hotels & Luxury Stays' : activeCategory === 'umrah' ? 'Group Umrah Packages' : 'Visit Visas'}</strong> only
                </span>
              </div>
              <button
                type="button"
                className="notice-reset-btn"
                onClick={() => {
                  setSearchFilter(null);
                  handleSelectCategory('all');
                }}
              >
                Show All Sections
              </button>
            </div>
          </div>
        )}

        {/* Section 2 — Hotels & Luxury Stays + Direct Quote Banner */}
        {(activeCategory === 'all' || activeCategory === 'hotels') && (
          <>
            <HotelsSection
              searchFilter={searchFilter?.tab === 'hotels' ? searchFilter.params : null}
              onClearFilter={handleClearSearchFilter}
            />
            {/* Direct Corporate Quote Banner right under Hotels */}
            <QuoteBanner />
          </>
        )}

        {/* Section 3 — Verified Umrah Packages & Haramain Stays */}
        {(activeCategory === 'all' || activeCategory === 'umrah') && (
          <UmrahSection
            initialPackages={initialUmrahPackages}
            searchFilter={searchFilter?.tab === 'umrah' ? searchFilter.params : null}
            onClearFilter={handleClearSearchFilter}
          />
        )}

        {/* Section 4 — Global Visit Visa Services */}
        {(activeCategory === 'all' || activeCategory === 'visa') && (
          <VisaSection
            initialVisas={initialVisas}
            searchFilter={searchFilter?.tab === 'visa' ? searchFilter.params : null}
            onClearFilter={handleClearSearchFilter}
          />
        )}

        {/* Section 5 — About World Track Aviation */}
        {activeCategory === 'all' && <AboutSection />}

        {/* Section 6 — International Tour Packages & Getaways */}
        {activeCategory === 'all' && <HolidaysSection initialTours={initialTours} />}

        {/* Section 7 — The World Track Aviation Advantage */}
        {activeCategory === 'all' && <AdvantageSection />}

        {/* Section 8 — Testimonials (What Our Pilgrims & Travelers Say) */}
        {activeCategory === 'all' && <ReviewsSection initialReviews={initialReviews} />}

        {/* Section 9 — Leadership Team */}
        {activeCategory === 'all' && <TeamSection initialTeam={initialTeam} />}

        {/* Section 10 — Blog (Travel Guides & Umrah Tips) */}
        {activeCategory === 'all' && <InsightsSection initialBlogs={initialBlogs} />}

        {/* Section 11 — Frequently Asked Questions (FAQ) */}
        {activeCategory === 'all' && <FaqSection />}
      </div>

      {/* Section 12 & 13 — Newsletter CTA + Main Footer */}
      <Footer />

      {/* Interactive Modals (Booking, Custom Quote) */}
      <Modals />
    </div>
  );
}

export function HomePage(props) {
  return <HomePageInner {...props} />;
}
