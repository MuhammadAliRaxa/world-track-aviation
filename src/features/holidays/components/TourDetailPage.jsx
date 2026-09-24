'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin, Star, Clock, ChevronLeft, ChevronRight,
  Building2, CreditCard, Plane, Car, ShieldCheck,
  Send, Phone, MessageCircle,
  ChevronDown, Home,
} from 'lucide-react';
import { AppBar } from '../../../shared/components/AppBar';
import { Footer } from '../../../shared/components/Footer';
import { PassportIcon } from '../../../shared';
import { COMPANY_CONFIG } from '../../../config/company';
import { tourService, inquiryService } from '../../../services';

const POPULAR_TAGS = [
  'Flight Tips', 'Cheap Airlines', 'Baggage Allowance',
  'DXB Deals', 'Airline Deals', 'Umrah Packages',
  'Dubai Tours', 'Saudi Visa',
];

const HELP_OPTIONS = [
  'Latest Packages & Visas',
  'Flight Booking',
  'Umrah Packages',
  'Hotel Booking',
  'Group Tours',
  'Custom Itinerary',
];

const INCLUDE_ICONS = {
  hotel: <Building2 size={12} />,
  visa: <PassportIcon size={12} />,
  air: <Plane size={12} />,
  transfer: <Car size={12} />,
  insurance: <ShieldCheck size={12} />,
};

function StarRating({ rating, count }) {
  const n = parseFloat(rating);
  return (
    <div className="tdp-stars-row">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={`tdp-star-${i}`} size={13} className={i <= Math.round(n) ? 'tdp-star-on' : 'tdp-star-off'} />
      ))}
      <span className="tdp-rating-text">{rating}/5</span>
      <span className="tdp-review-count">{count} reviews</span>
    </div>
  );
}

function RelatedCard({ tour }) {
  const router = useRouter();
  const rawSlug = tour.slug || tour.seo?.url_slug || tour.id;
  const cleanSlug = String(rawSlug)
    .replace(/^\/?(tours|tour-packages)\//i, '')
    .replace(/^\/+|\/+$/g, '');
  const path = `/tour-packages/${cleanSlug || tour.id}/`;

  return (
    <div className="tdp-rel-card" onClick={() => router.push(path)}>
      <div className="tdp-rel-img-wrap">
        <img src={tour.image} alt={tour.title} className="tdp-rel-img" loading="lazy" />
        <div className="tdp-rel-rating">
          <Star size={10} className="tdp-rel-star" />
          <span>{tour.rating} ({tour.reviewCount})</span>
        </div>
        <div className="tdp-rel-duration">
          <Clock size={10} />
          <span>{tour.duration}</span>
        </div>
      </div>
      <div className="tdp-rel-body">
        <div className="tdp-rel-loc">{tour.location}</div>
        <h4 className="tdp-rel-title">{tour.title}</h4>
        <div className="tdp-rel-pkg-row">
          {(tour.packageIncludes || []).slice(0, 3).map((inc) => (
            <span key={`rel-inc-${tour.id}-${inc.label}`} className="tdp-rel-pkg-item">
              {INCLUDE_ICONS[inc.icon]}
              <span>{inc.label}</span>
            </span>
          ))}
        </div>
        <div className="tdp-rel-footer">
          <div className="tdp-rel-price">Rs {tour.pricePKR} <span className="tdp-rel-pp">/ person</span></div>
          <button type="button" className="tdp-rel-btn" onClick={(e) => { e.stopPropagation(); router.push(path); }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export function TourDetailPage({ initialTour = null }) {
  const { id } = useParams();
  const router = useRouter();

  const [tourState, setTourState] = useState(initialTour);
  const [allTours, setAllTours] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', pax: '', help: '', message: '' });
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

  const handleSend = async (e) => {
    e.preventDefault();
    if (!tour) return;
    try {
      await inquiryService.submitInquiry({
        type: 'tour',
        name: form.name || 'N/A',
        email: form.email || 'N/A',
        contact: form.pax || 'N/A',   // pax field repurposed as contact for tour form
        adults: parseInt(form.pax, 10) || 1,
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
            <Link href="/" className="tdp-bc-link"><Home size={13} />Home</Link>
            <ChevronRight size={12} className="tdp-bc-sep" />
            <Link href="/tours" className="tdp-bc-link">Tour Details</Link>
          </div>

          {/* Two-column layout */}
          <div className="tdp-layout">

            {/* ════════ LEFT CONTENT ════════ */}
            <div className="tdp-content">

              {/* Title + meta */}
              <h1 className="tdp-title">{tour.title}</h1>
              <div className="tdp-meta-row">
                <span className="tdp-location">
                  <MapPin size={13} />
                  {tour.location}
                </span>
                {tour.seatsLeft <= 5 && (
                  <span className="tdp-badge-new">NEW</span>
                )}
                <span className="tdp-review-pill">{tour.reviewCount} reviews</span>
              </div>
              <StarRating rating={tour.rating} count={tour.reviewCount} />

              {/* Main image */}
              <div className="tdp-main-img-wrap">
                <img src={tour.image} alt={tour.title} className="tdp-main-img" />
              </div>

              {/* Description from API (includes itinerary, highlights, inclusions & exclusions) */}
              {tour.description ? (
                <div
                  className="tdp-desc tdp-api-content"
                  dangerouslySetInnerHTML={{ __html: tour.description }}
                />
              ) : (
                <p className="tdp-desc">
                  Experience the best of {tour.destination} with this {tour.duration} adventure.
                  Explore iconic landmarks, enjoy a thrilling desert safari, go shopping in world-famous malls,
                  and indulge in luxury like never before.
                </p>
              )}

              {/* Package includes icons */}
              <div className="tdp-pkg-bar">
                {(tour.packageIncludes || [
                  { icon: 'hotel', label: 'Hotel' },
                  { icon: 'visa', label: 'Visa' },
                  { icon: 'air', label: 'Air Ticket' },
                  { icon: 'transfer', label: 'Pick & Drop' },
                  { icon: 'insurance', label: 'Insurance' },
                ]).map((inc) => (
                  <div key={`tdp-inc-${inc.label}`} className="tdp-pkg-item">
                    {INCLUDE_ICONS[inc.icon] || <ShieldCheck size={12} />}
                    <span>{inc.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* ════════ RIGHT SIDEBAR ════════ */}
            <aside className="tdp-sidebar">

              {/* Popular Tags */}
              <div className="tdp-sidebar-box">
                <h3 className="tdp-sb-heading">Popular Tags</h3>
                <div className="tdp-tags-wrap">
                  {POPULAR_TAGS.map((tag) => (
                    <span key={tag} className="tdp-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="tdp-sidebar-box tdp-form-box">
                <h3 className="tdp-sb-heading">Send Us a Message</h3>
                <p className="tdp-sb-sub">All Inquiries are received and assigned to a dedicated travel expert within 1 hour.</p>

                <form onSubmit={handleSend} className="tdp-form">
                  <div className="tdp-form-group">
                    <label className="tdp-form-label">Full Name</label>
                    <input
                      type="text"
                      className="tdp-form-input"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="tdp-form-group">
                    <label className="tdp-form-label">Email Address</label>
                    <input
                      type="email"
                      className="tdp-form-input"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="tdp-form-group">
                    <label className="tdp-form-label">No. of Pax</label>
                    <input
                      type="number"
                      min="1"
                      className="tdp-form-input"
                      placeholder="e.g. 2"
                      value={form.pax}
                      onChange={(e) => setForm({ ...form, pax: e.target.value })}
                    />
                  </div>

                  <div className="tdp-form-group">
                    <label className="tdp-form-label">How can we help?</label>
                    <div className="tdp-select-wrap">
                      <select
                        className="tdp-form-select"
                        value={form.help}
                        onChange={(e) => setForm({ ...form, help: e.target.value })}
                      >
                        <option value="">Latest Packages &amp; Visas</option>
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
                      placeholder="Briefly state your destination, travel dates, or any specific requirements..."
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

                <p className="tdp-still-text">Still have questions regarding your upcoming trip?</p>
                <p className="tdp-still-sub">Our travel concierge is available 24/7 for WhatsApp consultations and dedicated support.</p>

                <div className="tdp-contact-btns">
                  <button type="button" className="tdp-wa-btn" onClick={handleWhatsApp} id="tour-whatsapp-btn">
                    <MessageCircle size={15} />
                    Chat on WhatsApp
                  </button>
                  <button type="button" className="tdp-call-btn" onClick={handleCall} id="tour-call-btn">
                    <Phone size={14} />
                    Call {COMPANY_CONFIG.phone}
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* ── Related Tours ─────────────────────────────────── */}
          <div className="tdp-related">
            <div className="tdp-related-head">
              <h2 className="tdp-related-h2">Related Tours</h2>
              <Link href="/tours" className="tdp-related-see-all">See All →</Link>
            </div>
            <div className="tdp-rel-grid">
              {related.map((t) => <RelatedCard key={t.id} tour={t} />)}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
