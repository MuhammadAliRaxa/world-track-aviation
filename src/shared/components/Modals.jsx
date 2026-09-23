'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, MapPin, PhoneCall, Mail, MessageCircle } from 'lucide-react';
import { useHotels } from '../../features/hotels/hooks/useHotels';
import { inquiryService } from '../../services/inquiry.service';

export function Modals({ isContactOpen = false, onCloseContact } = {}) {
  const {
    selectedHotelForBooking,
    closeBooking,
    isQuoteModalOpen,
    closeQuoteModal
  } = useHotels();

  // Booking Form State
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDates, setBookingDates] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Quote Form State
  const [quoteHotelChain, setQuoteHotelChain] = useState('Fairmont / Raffles');
  const [quoteCity, setQuoteCity] = useState('Makkah / Madinah');
  const [quoteNotes, setQuoteNotes] = useState('');
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      await inquiryService.submitInquiry({
        type: 'hotel',
        name: bookingName,
        contact: bookingPhone,
        email: 'info@worldtracktravel.com',
        message: `Direct Booking Request for ${selectedHotelForBooking?.name || 'Hotel'} (${selectedHotelForBooking?.location || 'Location'}). Dates: ${bookingDates}`,
        checkin_date: bookingDates || '',
        checkout_date: '',
        adults: 2,
      });
    } catch (err) {
      console.error('Booking submission error:', err);
    }
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      closeBooking();
    }, 2500);
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    try {
      await inquiryService.submitInquiry({
        type: 'general',
        name: 'Guest Client',
        contact: '+923292721721',
        email: 'info@worldtracktravel.com',
        service_category: 'hotel',
        message: `Custom Hotel Quote Request: Chain=${quoteHotelChain}, City=${quoteCity}. Details: ${quoteNotes}`,
      });
    } catch (err) {
      console.error('Quote submission error:', err);
    }
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      closeQuoteModal();
    }, 2500);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await inquiryService.submitInquiry({
        type: 'general',
        name: contactName,
        contact: contactPhone,
        email: contactEmail || 'info@worldtracktravel.com',
        message: contactMessage,
      });
    } catch (err) {
      console.error('Contact submission error:', err);
    }
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setContactMessage('');
      onCloseContact?.();
    }, 2500);
  };

  return (
    <>
      {/* 1. Hotel Direct Booking / Inquiry Modal */}
      {selectedHotelForBooking && (
        <div className="modal-backdrop" onClick={closeBooking}>
          <div
            className="modal-content-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closeBooking}>
              <X size={20} />
            </button>

            {bookingSuccess ? (
              <div className="modal-success-state">
                <CheckCircle2 size={56} className="text-emerald-500" />
                <h3>Booking Request Received!</h3>
                <p>
                  Our VIP reservation desk will contact you on <strong>{bookingPhone || '+923292721721'}</strong> with exclusive direct rates and room confirmation.
                </p>
              </div>
            ) : (
              <>
                <div className="modal-header-banner">
                  <span className="modal-badge">{selectedHotelForBooking.tag || 'EXCLUSIVE RATE'}</span>
                  <h3>{selectedHotelForBooking.name}</h3>
                  <div className="modal-location">
                    <MapPin size={14} />
                    <span>{selectedHotelForBooking.location}</span>
                    <span className="modal-price-tag">({selectedHotelForBooking.price} / night)</span>
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="modal-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Check-in / Check-out</label>
                      <input
                        type="text"
                        placeholder="e.g. 15 Sep - 20 Sep"
                        value={bookingDates}
                        onChange={(e) => setBookingDates(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Guests</label>
                      <select>
                        <option>1 Room, 2 Adults</option>
                        <option>1 Room, 1 Adult</option>
                        <option>2 Rooms, 4 Adults</option>
                        <option>Family Suite (Haram View)</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="modal-submit-btn">
                    Confirm VIP Booking Rate
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* 2. Custom Hotel Quote Modal */}
      {isQuoteModalOpen && (
        <div className="modal-backdrop" onClick={closeQuoteModal}>
          <div
            className="modal-content-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closeQuoteModal}>
              <X size={20} />
            </button>

            {quoteSuccess ? (
              <div className="modal-success-state">
                <CheckCircle2 size={56} className="text-emerald-500" />
                <h3>Quote Request Dispatched!</h3>
                <p>
                  Our corporate hotel desk will prepare wholesale contracted rates for <strong>{quoteHotelChain}</strong> and email the proposal shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="modal-header-banner">
                  <span className="modal-badge">CORPORATE & HARAM RATES</span>
                  <h3>Request Custom Hotel Quote</h3>
                  <p className="text-slate-500 text-sm">
                    Direct group and corporate rates for Fairmont, Marriott, IHG, Hilton & Accor.
                  </p>
                </div>

                <form onSubmit={handleQuoteSubmit} className="modal-form">
                  <div className="form-group">
                    <label>Preferred Hotel Brand / Chain</label>
                    <select
                      value={quoteHotelChain}
                      onChange={(e) => setQuoteHotelChain(e.target.value)}
                    >
                      <option value="Fairmont / Raffles / Swissôtel">Fairmont / Raffles / Swissôtel</option>
                      <option value="Marriott / St. Regis / Ritz-Carlton">Marriott / St. Regis / Ritz-Carlton</option>
                      <option value="IHG / InterContinental / voco">IHG / InterContinental / voco</option>
                      <option value="Hilton / Conrad / Waldorf Astoria">Hilton / Conrad / Waldorf Astoria</option>
                      <option value="Oberoi Hotels & Resorts">Oberoi Hotels & Resorts</option>
                      <option value="Four Seasons">Four Seasons</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Destination City</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Makkah, Madinah, Dubai, Singapore, Baku, London"
                      value={quoteCity}
                      onChange={(e) => setQuoteCity(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Specific Room Requests / Kaaba Facing / Dates</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. 2 King suites facing Kaaba directly, check-in Nov 10, VIP airport pickup"
                      value={quoteNotes}
                      onChange={(e) => setQuoteNotes(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="modal-submit-btn">
                    Send Custom Quote Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* 3. General Contact / Inquiry Modal */}
      {isContactOpen && (
        <div className="modal-backdrop" onClick={() => onCloseContact?.()}>
          <div
            className="modal-content-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={() => onCloseContact?.()}>
              <X size={20} />
            </button>

            {contactSuccess ? (
              <div className="modal-success-state">
                <CheckCircle2 size={56} className="text-emerald-500" />
                <h3>Message Sent Successfully!</h3>
                <p>
                  Our team will get back to you shortly. You can also reach us directly on WhatsApp.
                </p>
              </div>
            ) : (
              <>
                <div className="modal-header-banner">
                  <span className="modal-badge">GET IN TOUCH</span>
                  <h3>Contact Us</h3>
                  <p className="text-slate-500 text-sm">
                    Have questions? Send us a message and our team will respond within 24 hours.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '12px', margin: '0 24px 16px', flexWrap: 'wrap' }}>
                  <a href="tel:+923292721721" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#0284c7', textDecoration: 'none' }}>
                    <PhoneCall size={14} /> +92 329 272 1721
                  </a>
                  <a href="https://wa.me/923350122252" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#16a34a', textDecoration: 'none' }}>
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                  <a href="mailto:worldtrackaviation@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#0284c7', textDecoration: 'none' }}>
                    <Mail size={14} /> Email Us
                  </a>
                </div>

                <form onSubmit={handleContactSubmit} className="modal-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email (Optional)</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us how we can help..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="modal-submit-btn">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

