'use client';

import React from 'react';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';

/**
 * AppBar — shared header component used across all public pages.
 *
 * Props (all optional, forwarded to Navbar):
 *   activeCategory   — currently active nav category (used on HomePage)
 *   onSelectCategory — category change handler (used on HomePage)
 *   onOpenContact    — opens the contact modal (used on HomePage)
 *   heroContent      — React node for the hero section.
 *                      When provided, navbar floats OVER the hero (like home page).
 *                      When omitted, navbar sits in normal flow below the top bar.
 */
export function AppBar({
  activeCategory = 'all',
  onSelectCategory,
  onOpenContact,
  heroContent = null,
}) {
  return (
    <div className="appbar-root">
      {heroContent ? (
        /* Hero layout: TopBar + Navbar float over the hero section starting from top: 0 */
        <div className="hero-zone-wrapper">
          <div className="hero-header-top-group">
            <TopBar transparent />
            <Navbar
              activeCategory={activeCategory}
              onSelectCategory={onSelectCategory}
              onOpenContact={onOpenContact}
            />
          </div>
          {heroContent}
        </div>
      ) : (
        /* Standalone layout: top bar + inline navbar */
        <>
          <TopBar />
          <div className="navbar-inline-container">
            <Navbar
              activeCategory={activeCategory}
              onSelectCategory={onSelectCategory}
              onOpenContact={onOpenContact}
            />
          </div>
        </>
      )}
    </div>
  );
}
