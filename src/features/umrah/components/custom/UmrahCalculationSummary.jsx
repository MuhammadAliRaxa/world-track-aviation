'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../../../../config/company';

export function UmrahCalculationSummary({ calculatedResult, onOpenContact, whatsAppMessage = '' }) {
  if (!calculatedResult) return null;

  const defaultWaMessage = `Hi World Track Aviation, I would like to book a Custom Umrah Package. Total Travelers: ${calculatedResult.pax || '1 Adult'}, Duration: ${calculatedResult.duration || `${calculatedResult.nightsCount} Nights`}, Estimated Total: PKR ${calculatedResult.grandTotal.toLocaleString()}. Please provide confirmation.`;
  const textToSend = whatsAppMessage || defaultWaMessage;
  const waUrl = COMPANY_CONFIG.getWhatsAppUrl(textToSend);

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
            {calculatedResult.transportTotal > 0
              ? `PKR ${calculatedResult.transportTotal.toLocaleString()}`
              : (calculatedResult.visaType === 'Visa with Sharing Transport' ? 'Included in Visa (Sharing)' : 'PKR 0')}
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
            {calculatedResult.ticketTotal > 0
              ? `PKR ${calculatedResult.ticketTotal.toLocaleString()}`
              : 'Not Included'}
          </strong>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', alignItems: 'center', flexWrap: 'wrap' }}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="umrah-calc-btn-whatsapp"
        >
          <MessageCircle size={16} />
          Book via WhatsApp
        </a>
      </div>
    </div>
  );
}
