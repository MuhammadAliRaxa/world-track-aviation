'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Calendar,
  Building2,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { AppBar } from '../../../shared/components/AppBar';
import { Footer } from '../../../shared/components/Footer';
import { Modals } from '../../../shared/components/Modals';
import { COMPANY_CONFIG } from '../../../config/company';
import { umrahService, inquiryService } from '../../../services';
import { GuestsPopup, RoomTypePopup } from '../../hotels';
import { UmrahPackageCard } from './UmrahPackageCard';

const sanitizeHtml = (html) =>
  typeof html === 'string'
    ? html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/on\w+="[^"]*"/g, '')
    : '';

function getIsoDate(daysAhead = 0) {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function UmrahPackageDetailPage({ initialPackage = null }) {
  const { id } = useParams();
  const router = useRouter();

  const [currentPkg, setCurrentPkg] = useState(initialPackage);
  const [allPackages, setAllPackages] = useState([]);

  useEffect(() => {
    const isMatch = initialPackage && (
      String(initialPackage.id) === String(id) ||
      initialPackage.slug === id ||
      initialPackage.seo?.url_slug === id
    );
    if (!isMatch && id) {
      umrahService.getUmrahPackageById(String(id)).then((p) => {
        if (p) setCurrentPkg(p);
      });
    }
    umrahService.getUmrahPackages().then(setAllPackages);
  }, [id, initialPackage]);

  const pkg = currentPkg || allPackages.find((p) => String(p.id) === String(id)) || null;


  const relatedPackages = useMemo(() => {
    return allPackages.filter((p) => String(p.id) !== String(pkg ? pkg.id : id)).slice(0, 3);
  }, [allPackages, pkg, id]);

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [form, setForm] = useState(() => ({
    checkIn: getIsoDate(7),
    checkOut: getIsoDate(21),
    pax: '1 Child',
    roomType: 'Triple Sharing',
    name: '',
    email: '',
    contact: '',
    message: '',
  }));
  const [sent, setSent] = useState(false);

  // Popup states for Pax & Room Type
  const [isPaxOpen, setIsPaxOpen] = useState(false);
  const [isRoomTypeOpen, setIsRoomTypeOpen] = useState(false);

  // Pax counts: Adult (0), Child (1), Infant (0) to match mockup default "1 Child"
  const [paxCounts, setPaxCounts] = useState({
    Adult: 0,
    Child: 1,
    Infant: 0,
  });

  // Room counts: Triple (1) to match mockup default "Triple Sharing"
  const [roomCounts, setRoomCounts] = useState({
    Double: 0,
    Triple: 1,
    Quad: 0,
    Quint: 0,
  });

  const paxRef = useRef(null);
  const roomTypeRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (paxRef.current && !paxRef.current.contains(event.target)) {
        setIsPaxOpen(false);
      }
      if (roomTypeRef.current && !roomTypeRef.current.contains(event.target)) {
        setIsRoomTypeOpen(false);
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
      const label = parts.join(', ') || 'Select Pax';
      setForm((f) => ({ ...f, pax: label }));
      return nextCounts;
    });
  };

  const updateRoomCount = (type, delta) => {
    setRoomCounts((prev) => {
      const currentVal = prev[type] ?? 0;
      const nextVal = Math.max(0, currentVal + delta);
      const nextCounts = { ...prev, [type]: nextVal };

      const parts = [];
      Object.entries(nextCounts).forEach(([rType, count]) => {
        if (count > 0) {
          parts.push(`${count > 1 ? `${count} ` : ''}${rType} Sharing`);
        }
      });
      const label = parts.join(', ') || 'Select Room Type';
      setForm((f) => ({ ...f, roomType: label }));
      return nextCounts;
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!pkg) return null;

  const handleSendInquiry = async (e) => {
    e.preventDefault();
    try {
      await inquiryService.submitInquiry({
        type: 'umrah',
        name: form.name || 'N/A',
        email: form.email || 'N/A',
        contact: form.contact || 'N/A',
        checkin_date: form.checkIn,
        checkout_date: form.checkOut,
        adults: paxCounts.Adult || 1,
        children: paxCounts.Child || 0,
        infants: paxCounts.Infant || 0,
        room_type: form.roomType,
        message: form.message || `Inquiry for ${pkg.title}`,
      });
    } catch (err) {
      console.warn('Umrah inquiry submit error:', err);
    }
    const text = `Hi, I am inquiring about the "${pkg.title}" (${pkg.badge}).
- Check-in: ${form.checkIn}
- Check-out: ${form.checkOut}
- No. of Pax: ${form.pax}
- Room Type: ${form.roomType}
- Name: ${form.name || 'N/A'}
- Email: ${form.email || 'N/A'}
- Contact: ${form.contact || 'N/A'}
- Message: ${form.message || 'N/A'}`;

    window.open(COMPANY_CONFIG.getWhatsAppUrl(text), '_blank');
    setSent(true);
  };

  const handleWhatsApp = () => {
    const text = `Hi, I have a question regarding the "${pkg.title}" tour package. Please share further details.`;
    window.open(COMPANY_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+923001234567`;
  };

  return (
    <div className="app-layout-root">
      {/* 1. Hero */}
      <AppBar
        onOpenContact={() => setIsContactOpen(true)}
        heroContent={
          <div className="upd-hero">
            <div className="upd-hero-bg" />
            <div className="upd-hero-overlay" />
            <div className="upd-hero-body">
              <div className="upd-hero-h1">Package Details</div>
            </div>
          </div>
        }
      />

      {/* 2. Main Page */}
      <div className="upd-page">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="upd-breadcrumb">
            <button
              type="button"
              className="upd-breadcrumb-btn"
              onClick={() => router.push('/')}
            >
              <ChevronLeft size={14} />
              <span>Home</span>
            </button>
            <span className="upd-breadcrumb-sep">/</span>
            <span className="upd-breadcrumb-cur">Package Details</span>
          </div>

          {/* Two-Column Grid */}
          <div className="upd-layout">
            {/* ── Left Column ── */}
            <div className="upd-left-col">
              {/* Badges */}
              <div className="upd-badges-row">
                <span className="upd-badge-star">{pkg.badge || '5-STAR'}</span>
                <span className="upd-badge-duration">{pkg.duration || '10 Days'}</span>
              </div>

              {/* Title & Tagline */}
              <h1 className="upd-title">{pkg.title}</h1>
              <p className="upd-subtitle">{pkg.tagline}</p>

              {/* Main Image */}
              <div className="upd-main-img-wrap">
                <img
                  src={pkg.image}
                  alt={pkg.imageAlt || pkg.seo?.image_alt || `${pkg.title} - Umrah Package from Islamabad, Pakistan`}
                  className="upd-main-img"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Description Paragraph */}
              {pkg.description ? (
                <div
                  className="upd-desc"
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(pkg.description) }}
                />
              ) : (
                <p className="upd-desc">
                  Experience spiritual peace and comfort with our {pkg.title}. Stay at the closest luxury hotels in Makkah and Madinah with premium services, VIP transfers, and guided Ziyarat.
                </p>
              )}

              {/* Itinerary Highlights */}
              {pkg.itinerary && Array.isArray(pkg.itinerary) && pkg.itinerary.length > 0 && (
                <>
                  <h3 className="upd-sec-heading">Itinerary Highlights</h3>
                  <div className="upd-itinerary-list">
                    {pkg.itinerary.map((day, idx) => (
                      <div key={idx} className="upd-itinerary-item">
                        {day.day && <div className="upd-itinerary-day">{day.day}</div>}
                        {day.title && <div className="upd-itinerary-title">{day.title}</div>}
                        {day.description && <p className="upd-itinerary-desc">{day.description}</p>}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* ── Right Column / Sidebar Form ── */}
            <aside className="upd-sidebar-col">
              <div className="upd-form-card">
                <h3 className="upd-form-head">Send Us a Message</h3>
                <p className="upd-form-sub">
                  All inquiries are screened and assigned to a dedicated case officer within 15 minutes.
                </p>

                <form onSubmit={handleSendInquiry}>
                  {/* Check-In Date */}
                  <div className="upd-form-group">
                    <label className="upd-form-label">Check-In Date</label>
                    <div
                      className="upd-input-wrap"
                      onClick={(e) => {
                        const input = e.currentTarget.querySelector('input[type="date"]');
                        if (input && typeof input.showPicker === 'function') {
                          try { input.showPicker(); } catch (_) {}
                        }
                      }}
                    >
                      <input
                        type="date"
                        className="upd-form-input upd-date-picker-input"
                        value={form.checkIn}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (typeof e.currentTarget.showPicker === 'function') {
                            try { e.currentTarget.showPicker(); } catch (_) {}
                          }
                        }}
                        onChange={(e) => {
                          const val = e.target.value;
                          setForm((f) => ({
                            ...f,
                            checkIn: val,
                            checkOut: f.checkOut && f.checkOut < val ? val : f.checkOut,
                          }));
                        }}
                        required
                        aria-label="Check-In Date"
                      />
                      <Calendar size={14} className="upd-input-icon" />
                    </div>
                  </div>

                  {/* Check-out Date */}
                  <div className="upd-form-group">
                    <label className="upd-form-label">Check-out Date</label>
                    <div
                      className="upd-input-wrap"
                      onClick={(e) => {
                        const input = e.currentTarget.querySelector('input[type="date"]');
                        if (input && typeof input.showPicker === 'function') {
                          try { input.showPicker(); } catch (_) {}
                        }
                      }}
                    >
                      <input
                        type="date"
                        className="upd-form-input upd-date-picker-input"
                        value={form.checkOut}
                        min={form.checkIn || undefined}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (typeof e.currentTarget.showPicker === 'function') {
                            try { e.currentTarget.showPicker(); } catch (_) {}
                          }
                        }}
                        onChange={(e) => setForm((f) => ({ ...f, checkOut: e.target.value }))}
                        required
                        aria-label="Check-out Date"
                      />
                      <Calendar size={14} className="upd-input-icon" />
                    </div>
                  </div>

                  {/* No. of Pax */}
                  <div className="upd-form-group" ref={paxRef} style={{ position: 'relative' }}>
                    <label className="upd-form-label">No. of Pax</label>
                    <div className="upd-input-wrap">
                      <button
                        type="button"
                        className="upd-form-trigger"
                        onClick={() => {
                          setIsPaxOpen((prev) => !prev);
                          setIsRoomTypeOpen(false);
                        }}
                        aria-expanded={isPaxOpen}
                        aria-label="Select Number of Pax"
                      >
                        <span className="upd-trigger-text">{form.pax}</span>
                        <ChevronDown
                          size={14}
                          className={`upd-select-arrow ${isPaxOpen ? 'open' : ''}`}
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

                  {/* Room Type */}
                  <div className="upd-form-group" ref={roomTypeRef} style={{ position: 'relative' }}>
                    <label className="upd-form-label">Room Type</label>
                    <div className="upd-input-wrap">
                      <button
                        type="button"
                        className="upd-form-trigger"
                        onClick={() => {
                          setIsRoomTypeOpen((prev) => !prev);
                          setIsPaxOpen(false);
                        }}
                        aria-expanded={isRoomTypeOpen}
                        aria-label="Select Room Type"
                      >
                        <span className="upd-trigger-text">{form.roomType}</span>
                        <ChevronDown
                          size={14}
                          className={`upd-select-arrow ${isRoomTypeOpen ? 'open' : ''}`}
                        />
                      </button>
                      <RoomTypePopup
                        isOpen={isRoomTypeOpen}
                        onClose={() => setIsRoomTypeOpen(false)}
                        counts={roomCounts}
                        onUpdateCount={updateRoomCount}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="upd-form-group">
                    <label className="upd-form-label">Name</label>
                    <input
                      type="text"
                      className="upd-form-input"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  {/* Email Address */}
                  <div className="upd-form-group">
                    <label className="upd-form-label">Email Address</label>
                    <input
                      type="email"
                      className="upd-form-input"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  {/* Contact */}
                  <div className="upd-form-group">
                    <label className="upd-form-label">Contact</label>
                    <input
                      type="text"
                      className="upd-form-input"
                      placeholder="03001232123"
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    />
                  </div>

                  {/* Message Detail */}
                  <div className="upd-form-group">
                    <label className="upd-form-label">Message Detail</label>
                    <textarea
                      rows={3}
                      className="upd-form-textarea"
                      placeholder="Briefly state your departure point, travel dates, or embassy requirements..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  {/* Submit button */}
                  <button type="submit" className="upd-submit-btn">
                    <span>{sent ? 'Inquiry Sent! ✓' : 'Send Inquiry'}</span>
                    <ChevronRight size={15} />
                  </button>
                </form>
              </div>

              {/* Still have questions card */}
              <div className="upd-contact-card">
                <h4 className="upd-contact-head">Still have questions regarding your upcoming trip?</h4>
                <p className="upd-contact-sub">
                  Our travel consultants are active 24/7 on WhatsApp to provide instant personalized support.
                </p>
                <div className="upd-contact-actions">
                  <button type="button" className="upd-wa-btn" onClick={handleWhatsApp}>
                    <MessageCircle size={14} />
                    <span>Chat on WhatsApp</span>
                  </button>
                  <button type="button" className="upd-call-btn" onClick={handleCall}>
                    <Phone size={13} />
                    <span>Call +92 300 1234567</span>
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* ── Related Umrah Packages Section ── */}
          <div className="upd-related-sec">
            <div className="upd-related-head">
              <h3 className="upd-related-title">Related Umrah Packages</h3>
              <button
                type="button"
                className="upd-related-view-all"
                onClick={() => router.push('/umrah-packages')}
              >
                <span>View All</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="upd-related-grid">
              {relatedPackages.map((relPkg) => (
                <UmrahPackageCard key={relPkg.id} pkg={relPkg} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Modals */}
      <Modals
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
      />
    </div>
  );
}
