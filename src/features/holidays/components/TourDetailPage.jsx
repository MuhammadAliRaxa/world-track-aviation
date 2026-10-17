'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin, ChevronRight,
  Building2, Plane, Car, ShieldCheck,
  Phone, MessageCircle,
  ChevronDown, Home,
} from 'lucide-react';
import { AppBar } from '../../../shared/components/AppBar';
import { Footer } from '../../../shared/components/Footer';
import { PassportIcon } from '../../../shared';
import { COMPANY_CONFIG } from '../../../config/company';
import { tourService, inquiryService } from '../../../services';
import { GuestsPopup } from '../../hotels';
import { HolidayCard } from './HolidayCard';

const POPULAR_TAGS = [
  'Flight Hacks',
  'Cheap Airlines',
  'Baggage Allowance',
  'DXB Deals',
  'Airline Deals',
];

const HELP_OPTIONS = [
  'Umrah Packages & Visas',
  'Tour Packages & Visas',
  'Flight Booking',
  'Hotel Booking',
  'Custom Itinerary',
];

const DEFAULT_PACKAGE_INCLUDES = [
  { icon: 'hotel', label: 'Hotel' },
  { icon: 'visa', label: 'Visa' },
  { icon: 'air', label: 'Air Ticket' },
  { icon: 'transfer', label: 'Pick & Drop' },
  { icon: 'insurance', label: 'Insurance' },
];

const INCLUDE_ICONS = {
  hotel: <Building2 size={14} />,
  visa: <PassportIcon size={14} />,
  air: <Plane size={14} />,
  transfer: <Car size={14} />,
  insurance: <ShieldCheck size={14} />,
};

export function TourDetailPage({ initialTour = null }) {
  const { id } = useParams();
  const router = useRouter();

  const [tourState, setTourState] = useState(initialTour);
  const [allTours, setAllTours] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    pax: '',
    help: 'Umrah Packages & Visas',
    message: '',
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!initialTour || (String(initialTour.id) !== String(id) && initialTour?.slug !== id)) {
      tourService.getTourById(id).then((t) => {
        if (t) setTourState(t);
      });
    }
    tourService.getTours().then(setAllTours);
  }, [id, initialTour]);

  const tour =
    tourState ||
    allTours.find((t) => String(t.id) === String(id) || t?.slug === id) ||
    allTours[0] ||
    null;

  const related = useMemo(
    () => allTours.filter((t) => String(t.id) !== String(tour ? tour.id : id)).slice(0, 4),
    [allTours, tour, id]
  );

  const [isPaxOpen, setIsPaxOpen] = useState(false);
  const [paxCounts, setPaxCounts] = useState({
    Adult: 0,
    Child: 0,
    Infant: 0,
  });
  const paxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (paxRef.current && !paxRef.current.contains(event.target)) {
        setIsPaxOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const updatePaxCount = (type, delta) => {
    setPaxCounts((prev) => {
      const currentVal = prev[type] ?? 0;
      const nextVal = Math.max(0, currentVal + delta);
      const nextCounts = { ...prev, [type]: nextVal };

      const parts = [];
      if (nextCounts.Adult > 0) {
        parts.push(`${nextCounts.Adult} Adult${nextCounts.Adult > 1 ? 's' : ''}`);
      }
      if (nextCounts.Child > 0) {
        parts.push(`${nextCounts.Child} Child${nextCounts.Child > 1 ? 'ren' : ''}`);
      }
      if (nextCounts.Infant > 0) {
        parts.push(`${nextCounts.Infant} Infant${nextCounts.Infant > 1 ? 's' : ''}`);
      }
      const label = parts.join(', ');
      setForm((f) => ({ ...f, pax: label }));
      return nextCounts;
    });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!tour) return;
    try {
      await inquiryService.submitInquiry({
        type: 'tour',
        name: form.name || 'N/A',
        email: form.email || 'N/A',
        contact: form.email || 'N/A',
        adults: paxCounts?.Adult || parseInt(form.pax, 10) || 1,
        children: paxCounts?.Child || 0,
        infants: paxCounts?.Infant || 0,
        message: form.message || `Tour inquiry for ${tour.title}. Subject: ${form.help || 'General'}`,
      });
    } catch (err) {
      console.warn('Tour inquiry submit error:', err);
    }
    const paxPart = form.pax ? ` (No. of Pax: ${form.pax})` : '';
    const helpPart = form.help ? ` [Subject: ${form.help}]` : '';
    const msg = `Hi, my name is ${form.name}. I'm interested in ${tour.title}${paxPart}.${helpPart} ${form.message}`;
    window.open(COMPANY_CONFIG.getWhatsAppUrl(msg), '_blank');
    setSent(true);
  };

  const handleWhatsApp = () => {
    if (!tour) return;
    const msg = `Hi, I'd like to enquire about the "${tour.title}" tour package. Please share details.`;
    window.open(COMPANY_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${COMPANY_CONFIG.phoneRaw}`;
  };

  if (!tour) return null;

  const inclusions = Array.isArray(tour.packageIncludes) && tour.packageIncludes.length > 0
    ? tour.packageIncludes
    : DEFAULT_PACKAGE_INCLUDES;

  return (
    <div className="app-layout-root">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <AppBar
        heroContent={
          <div className="tdp-hero">
            <div className="tdp-hero-bg" style={{ backgroundImage: `url(${tour.image})` }} />
            <div className="tdp-hero-overlay" />
            <div className="tdp-hero-body">
              <div className="tdp-hero-h1">Tour Details</div>
            </div>
          </div>
        }
      />

      {/* ── Page ─────────────────────────────────────────────── */}
      <div className="tdp-page">
        <div className="section-container">

          {/* Breadcrumb */}
          <div className="tdp-breadcrumb">
            <Link href="/" className="tdp-bc-link">‹ Home</Link>
            <span className="tdp-bc-sep">/</span>
            <span className="tdp-bc-current">Tours Details</span>
          </div>

          {/* Two-column layout */}
          <div className="tdp-layout">

            {/* ════════ LEFT CONTENT ════════ */}
            <div className="tdp-content">

              {/* Title */}
              <h1 className="tdp-title">{tour.title}</h1>

              {/* Location */}
              <div className="tdp-loc-row">
                <MapPin size={13} className="tdp-loc-pin" />
                <span>{tour.location}</span>
              </div>

              {/* Rating pill & reviews */}
              <div className="tdp-rating-meta-row">
                <span className="tdp-score-pill">
                  {tour.rating ? (String(tour.rating).includes('/10') ? tour.rating : `${tour.rating}/10`) : '9.4/10'}
                </span>
                {tour.reviewCount ? (
                  <span className="tdp-reviews-text">{Number(tour.reviewCount).toLocaleString()} reviews</span>
                ) : null}
              </div>

              {/* Main image */}
              <div className="tdp-main-img-wrap">
                <img src={tour.image} alt={tour?.imageAltText || tour.title} className="tdp-main-img" />
              </div>

              {/* Package includes icons */}
              <div className="tdp-pkg-bar">
                {inclusions.map((inc) => (
                  <div key={`tdp-inc-${inc.label}`} className="tdp-pkg-item">
                    {INCLUDE_ICONS[inc.icon] || <ShieldCheck size={14} />}
                    <span>{inc.label}</span>
                  </div>
                ))}
              </div>

              {/* Description from API (includes itinerary, highlights, inclusions & exclusions) */}
              {tour.description ? (
                <div
                  className="tdp-desc tdp-api-content"
                  dangerouslySetInnerHTML={{ __html: tour.description }}
                />
              ) : null}

            </div>

            {/* ════════ RIGHT SIDEBAR ════════ */}
            <aside className="tdp-sidebar">

              {/* Card 1: Inquiry Form (Send Us a Message) */}
              <div className="tdp-sidebar-box tdp-form-box">
                <h3 className="tdp-sb-heading">Send Us a Message</h3>
                <p className="tdp-sb-sub">All inquiries are received and assigned to a dedicated case officer within 15 minutes.</p>

                <form onSubmit={handleSend} className="tdp-form">
                  <div className="tdp-form-group">
                    <label className="tdp-form-label">Full Name</label>
                    <input
                      type="text"
                      className="tdp-form-input"
                      placeholder="Muhammad Ali"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="tdp-form-group">
                    <label className="tdp-form-label">Email Address</label>
                    <input
                      type="email"
                      className="tdp-form-input"
                      placeholder="muhammad.ali@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="tdp-form-group" ref={paxRef} style={{ position: 'relative' }}>
                    <label className="tdp-form-label">No. of Pax</label>
                    <div className="tdp-select-wrap" style={{ position: 'relative' }}>
                      <button
                        type="button"
                        onClick={() => setIsPaxOpen((prev) => !prev)}
                        aria-expanded={isPaxOpen}
                        aria-label="Select Number of Pax"
                        style={{
                          width: '100%',
                          height: '38px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          backgroundColor: '#fff',
                          border: `1px solid ${isPaxOpen ? '#0080f6' : '#e2e8f0'}`,
                          borderRadius: '7px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          fontSize: '12.5px',
                          color: form.pax ? '#1e293b' : '#94a3b8',
                          fontFamily: 'inherit',
                          outline: 'none',
                          transition: 'border-color 0.15s',
                        }}
                      >
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {form.pax || 'Select Pax'}
                        </span>
                        <ChevronDown
                          size={14}
                          style={{
                            transform: isPaxOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            color: '#94a3b8',
                            flexShrink: 0,
                          }}
                        />
                      </button>
                      <GuestsPopup
                        isOpen={isPaxOpen}
                        onClose={() => setIsPaxOpen(false)}
                        counts={paxCounts}
                        onUpdateCount={updatePaxCount}
                      />
                    </div>
                  </div>

                  <div className="tdp-form-group">
                    <label className="tdp-form-label">What do you need help with? *</label>
                    <div className="tdp-select-wrap">
                      <select
                        className="tdp-form-select"
                        value={form.help}
                        onChange={(e) => setForm({ ...form, help: e.target.value })}
                      >
                        {HELP_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="tdp-select-arrow" />
                    </div>
                  </div>

                  <div className="tdp-form-group">
                    <label className="tdp-form-label">Message Detail</label>
                    <textarea
                      className="tdp-form-textarea"
                      placeholder="Kindly state your departure point, travel dates, or embassy requirements..."
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="tdp-send-btn" id="send-inquiry-btn">
                    {sent ? 'Inquiry Sent! ✓' : 'Send Inquiry'}
                    <ChevronRight size={15} />
                  </button>
                </form>
              </div>

              {/* Card 2: Still have questions box */}
              <div className="tdp-sidebar-box tdp-help-box">
                <h4 className="tdp-still-text">Still have questions regarding your upcoming trip?</h4>
                <p className="tdp-still-sub">Our travel consultants are active 24/7 on WhatsApp to provide instant personalized support.</p>

                <div className="tdp-contact-btns">
                  <button type="button" className="tdp-wa-btn" onClick={handleWhatsApp} id="tour-whatsapp-btn">
                    <MessageCircle size={14} />
                    Chat on WhatsApp
                  </button>
                  <button type="button" className="tdp-call-btn" onClick={handleCall} id="tour-call-btn">
                    <Phone size={13} />
                    Call {COMPANY_CONFIG.phone}
                  </button>
                </div>
              </div>

              {/* Card 3: Popular Tags (Positioned at bottom of sidebar) */}
              <div className="tdp-sidebar-box tdp-tags-box">
                <h3 className="tdp-sb-heading">Popular Tags</h3>
                <div className="tdp-tags-wrap">
                  {POPULAR_TAGS.map((tag) => (
                    <span key={tag} className="tdp-tag">{tag}</span>
                  ))}
                </div>
              </div>

            </aside>
          </div>

          {/* ── Related Tours ─────────────────────────────────── */}
          <div className="tdp-related">
            <div className="tdp-related-head">
              <h2 className="tdp-related-h2">Related Tours</h2>
              <Link href="/tours" className="tdp-related-see-all">View All →</Link>
            </div>
            <div className="tdp-rel-grid">
              {related.map((t) => <HolidayCard key={t.id} tour={t} />)}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
