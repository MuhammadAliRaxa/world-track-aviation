'use client';

import React from 'react';

export function UmrahCalculationSummary({ calculatedResult, onOpenContact }) {
  if (!calculatedResult) return null;

  return (
    <div className="umrah-calc-summary-card">
      <div className="umrah-calc-top-row">
        <div>
          <h4 className="umrah-calc-title">
            Instant Universal Package Cost (UBC) Summary
          </h4>
          <p className="umrah-calc-sub">
            Estimated total for {calculatedResult.nightsCount} Nights Stay, Transport, and Visa Services
          </p>
        </div>
        <div className="umrah-calc-grand-total">
          PKR {calculatedResult.grandTotal.toLocaleString()}
        </div>
      </div>

      <div className="umrah-calc-breakdown-grid">
        <div className="umrah-calc-breakdown-item">
          <span className="umrah-calc-item-label">Hotels Estimate</span>
          <strong className="umrah-calc-item-val">
            PKR {calculatedResult.hotelTotal.toLocaleString()}
          </strong>
        </div>
        <div className="umrah-calc-breakdown-item">
          <span className="umrah-calc-item-label">Transport Estimate</span>
          <strong className="umrah-calc-item-val">
            PKR {calculatedResult.transportTotal.toLocaleString()}
          </strong>
        </div>
        <div className="umrah-calc-breakdown-item">
          <span className="umrah-calc-item-label">Visa Estimate</span>
          <strong className="umrah-calc-item-val">
            PKR {calculatedResult.visaTotal.toLocaleString()}
          </strong>
        </div>
        <div className="umrah-calc-breakdown-item">
          <span className="umrah-calc-item-label">Ticket Estimate</span>
          <strong className="umrah-calc-item-val">
            PKR {calculatedResult.ticketTotal.toLocaleString()}
          </strong>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={onOpenContact}
          className="umrah-calc-btn-reserve"
        >
          Reserve Package via Agent
        </button>
      </div>
    </div>
  );
}
