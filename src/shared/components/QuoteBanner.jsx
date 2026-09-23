'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useHotels } from '../../features/hotels/hooks/useHotels';


export function QuoteBanner() {
  const { openQuoteModal } = useHotels();

  return (
    <div className="quote-callout-wrapper">
      <div className="section-container">
        <div className="quote-callout-card">
          <div className="quote-callout-left">
            <div className="shield-icon-badge">
              <ShieldCheck size={26} className="shield-check-svg" />
            </div>
            <div className="quote-text-stack">
              <h3 className="quote-card-title">
                Need a Specific Hotel Chain, or a Room Facing the Haramain ?
              </h3>
              <p className="quote-card-subtitle">
                We arrange direct corporate rates with Marriott, IHG, Fairmont, Hilton, and Accor.
              </p>
            </div>
          </div>

          <div className="quote-callout-right">
            <button
              type="button"
              className="request-quote-dark-btn"
              onClick={openQuoteModal}
            >
              Request Custom Hotel Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
