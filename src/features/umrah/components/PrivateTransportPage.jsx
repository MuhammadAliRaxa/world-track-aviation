'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AppBar, Footer, Modals } from '../../../shared';
import { COMPANY_CONFIG } from '../../../config/company';

import { transportService, inquiryService } from '../../../services';

export function PrivateTransportPage({
  initialListing = null,
  h1 = 'Private Transport for Umrah Pilgrims',
  heroIntro = "Skip the shared shuttles and long waits. Every ride is a private, air-conditioned vehicle for your group only, whether you're heading from Jeddah airport to your hotel or making the trip between Makkah and Madinah. Rates are fixed upfront, so there's nothing to negotiate at the curb.",
} = {}) {
  const router = useRouter();

  const [listing, setListing] = useState(initialListing);

  useEffect(() => {
    if (!initialListing) {
      transportService.getTransportListing().then(setListing);
    }
  }, [initialListing]);


  // Inquiry Form States
  const [selectedRoute, setSelectedRoute] = useState('Jeddah Airport to Makkah Hotel');
  const [vehicleClass, setVehicleClass] = useState('Hyundai H1 (7 Seater)');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // UI States
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    try {
      await inquiryService.submitInquiry({
        type: 'transport',
        name: 'Transport Client',
        contact: whatsappNumber || '+923000000000',
        email: 'info@worldtracktravel.com',
        route_id: 1,
        vehicle_type_id: 1,
        message: `Private Transport Inquiry. Route: ${selectedRoute}. Vehicle: ${vehicleClass}. WhatsApp: ${whatsappNumber}`,
      });
    } catch (err) {
      console.error('Transport inquiry submission error:', err);
    }
    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    const text = `Hello World Track Aviation, I am inquiring regarding transport for Route: ${selectedRoute} with Vehicle Class: ${vehicleClass}. Please provide driver assignment and quote.`;
    window.open(COMPANY_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  // Fallback Transfer Rates Data
  const defaultRates = [
    { route: 'Jeddah Airport to Makkah Hotel', sedan: '430 SAR', staria: '480 SAR', hiace: '580 SAR', coaster: '680 SAR', bus: '780 SAR' },
    { route: 'Madinah Hotel to Makkah Hotel', sedan: '430 SAR', staria: '480 SAR', hiace: '580 SAR', coaster: '680 SAR', bus: '780 SAR' },
    { route: 'Makkah Hotel to Jeddah Hotel', sedan: '430 SAR', staria: '480 SAR', hiace: '580 SAR', coaster: '680 SAR', bus: '780 SAR' },
    { route: 'Makkah Hotel to Jeddah Airport', sedan: '430 SAR', staria: '480 SAR', hiace: '580 SAR', coaster: '680 SAR', bus: '780 SAR' },
    { route: 'Jeddah Airport to Jeddah Hotel', sedan: '430 SAR', staria: '480 SAR', hiace: '580 SAR', coaster: '680 SAR', bus: '780 SAR' },
    { route: 'Makkah Full Day Ziyarat (incl. Badar)', sedan: '430 SAR', staria: '480 SAR', hiace: '580 SAR', coaster: '680 SAR', bus: '780 SAR' },
    { route: 'Makkah Hotel to Madinah Train Station', sedan: '430 SAR', staria: '480 SAR', hiace: '580 SAR', coaster: '680 SAR', bus: '780 SAR' },
    { route: 'Madinah Airport to Madinah Hotel', sedan: '430 SAR', staria: '480 SAR', hiace: '580 SAR', coaster: '680 SAR', bus: '780 SAR' },
    { route: 'Madinah Hotel to Jeddah Airport via Badar', sedan: '430 SAR', staria: '480 SAR', hiace: '580 SAR', coaster: '680 SAR', bus: '780 SAR' },
  ];

  // Map listing/initialListing
  const activeListing = listing || initialListing;

  // Dynamic Vehicle Types from API
  const vehicleTypes = React.useMemo(() => {
    if (Array.isArray(activeListing?.vehicle_types) && activeListing.vehicle_types.length > 0) {
      return activeListing.vehicle_types.map((vt) => ({
        id: vt.id,
        name: vt.vehicle_type || vt.name,
        capacity: vt.vehicle_capacity || vt.capacity,
      }));
    }
    return [
      { id: 1, name: 'SEDAN', capacity: 4 },
      { id: 2, name: 'STARIA', capacity: 7 },
      { id: 3, name: 'HIACE', capacity: 10 },
      { id: 4, name: 'COASTER', capacity: 22 },
      { id: 5, name: 'BUS', capacity: 45 },
      { id: 6, name: 'GMC', capacity: 5 },
    ];
  }, [activeListing]);

  // Map listing/initialListing to transferRates format dynamically
  const transferRates = React.useMemo(() => {
    const list = Array.isArray(activeListing?.data)
      ? activeListing.data
      : (Array.isArray(activeListing) ? activeListing : []);

    if (list.length > 0) {
      return list.map((r) => {
        const prices = {};
        if (r.vehicles && Array.isArray(r.vehicles)) {
          r.vehicles.forEach((v) => {
            const formattedPrice = v.price_formatted || (v.price ? `SAR ${v.price}` : '-');
            if (v.vehicle_type_id) {
              prices[v.vehicle_type_id] = formattedPrice;
            }
            if (v.vehicle_type) {
              prices[v.vehicle_type.toUpperCase().trim()] = formattedPrice;
            }
          });
        }
        return {
          id: r.id,
          route: r.route || 'Route',
          prices,
        };
      });
    }

    return defaultRates.map((d, idx) => ({
      id: idx + 1,
      route: d.route,
      prices: {
        1: d.sedan,
        SEDAN: d.sedan,
        2: d.staria,
        STARIA: d.staria,
        3: d.hiace,
        HIACE: d.hiace,
        4: d.coaster,
        COASTER: d.coaster,
        5: d.bus,
        BUS: d.bus,
        6: '810 SAR',
        GMC: '810 SAR',
      },
    }));
  }, [activeListing]);

  return (
    <div className="private-transport-page-root">
      {/* 1. Header Bar & Floating Navbar */}
      <AppBar
        onOpenContact={() => setIsContactOpen(true)}
        heroContent={
          <div className="tr-hero">
            <div className="tr-hero-bg" />
            <div className="tr-hero-overlay" />
            <div className="tr-hero-body">
              <h1 className="tr-hero-h1">{h1}</h1>
              <p className="tr-hero-intro">{heroIntro}</p>
            </div>
          </div>
        }
      />

      {/* 2. Breadcrumb Navigation */}
      <div className="blog-breadcrumb-row">
        <div className="detail-container breadcrumb-inner">
          <button
            type="button"
            className="breadcrumb-back-capsule"
            onClick={() => router.push('/')}
          >
            <ArrowLeft size={13} />
            <span>Services</span>
          </button>
          <span style={{ color: '#94a3b8', fontSize: '13px' }}>/</span>
          <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: 600 }}>Private Transport</span>
        </div>
      </div>

      {/* 3. Main 2-Column Content Container */}
      <div className="private-transport-container">
        <div className="private-transport-layout">
          
          {/* ── LEFT COLUMN: Fleet Image + Rates Table + Description ── */}
          <main className="private-transport-main">
            
            {/* Featured Fleet Banner Image */}
            <div className="private-transport-fleet-banner">
              <img
                src="/assets/umrah-private-transport-fleet.jpg"
                alt="Umrah Private Transport Fleet"
                className="private-transport-fleet-img"
                loading="eager"
              />
            </div>

            {/* Pilgrim & Transfer Rates Section */}
            <div>
              <div className="transport-section-header">
                <h2 className="transport-section-title">
                  Pilgrim &amp; Transfer Rates (SAR)
                </h2>
                <p className="transport-section-sub">
                  Fixed rates for every route and vehicle type. Every price includes a professional driver, highway tolls, and fuel, so there's nothing extra to pay on arrival.
                </p>
              </div>

              {/* Desktop & Tablet Rates Table View */}
              <div className="transport-table-container">
                <div className="transport-table-scroll-hint">
                  ⇄ Scroll horizontally to view all vehicle rates
                </div>
                <div className="private-transport-table-wrap">
                  <table className="private-transport-table">
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ROUTE / SERVICE</th>
                        {vehicleTypes.map((vt) => (
                          <th key={vt.id || vt.name} style={{ textTransform: 'capitalize' }}>
                            {vt.name.toLowerCase()}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {transferRates.map((row) => (
                        <tr key={row.route}>
                          <td style={{ textAlign: 'left', fontWeight: 600, color: '#0f172a', fontSize: '12px' }}>
                            {row.route}
                          </td>
                          {vehicleTypes.map((vt) => {
                            const price = row.prices?.[vt.id] || row.prices?.[vt.name.toUpperCase().trim()] || '-';
                            return (
                              <td key={vt.id || vt.name} style={{ fontWeight: 500 }}>
                                {price}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Card Grid View (Shown on screens <= 768px) */}
              <div className="transport-mobile-cards-grid">
                {transferRates.map((row) => (
                  <div key={row.route} className="transport-route-card">
                    <div className="transport-route-header">
                      <h3 className="transport-route-title">
                        {row.route}
                      </h3>
                    </div>
                    <div className="transport-vehicle-chips-grid">
                      {vehicleTypes.map((vt) => {
                        const price = row.prices?.[vt.id] || row.prices?.[vt.name.toUpperCase().trim()] || '-';
                        return (
                          <div key={vt.id || vt.name} className="transport-vehicle-chip">
                            <span className="transport-chip-type" style={{ textTransform: 'capitalize' }}>
                              {vt.name.toLowerCase()}
                            </span>
                            <span className="transport-chip-price">
                              {price}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Section */}
            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '24px', marginTop: '32px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
                About Our Private Transport Service
              </h2>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.65', margin: '0 0 24px 0' }}>
                Every route above connects the places pilgrims travel between most: airports, hotels, and the two holy cities. Vehicles range from a standard sedan for small groups to a full coaster for larger families, and every driver knows the route well enough to avoid unnecessary stops or delays.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                    Built Around Umrah Travel Patterns
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                    Most transfers happen between three points: Jeddah airport, your hotel, and the Haramain in Makkah or Madinah. If you've booked an <Link href="/umrah-packages/" style={{ color: '#0080f6', textDecoration: 'underline', fontWeight: 600 }}>Umrah package</Link> with us, your transport is already scheduled around your hotel check-in and Ziyarat days, so you're not left arranging rides mid-trip.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                    Choosing the Right Vehicle
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                    A sedan works for one or two travelers with light luggage. Families or small groups usually take a Staria or Hiace, while larger groups on a <Link href="/umrah-group-packages/" style={{ color: '#0080f6', textDecoration: 'underline', fontWeight: 600 }}>group Umrah package</Link> typically book a Coaster or Bus for everyone to travel together.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                    What's Included in Every Fare
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                    Every price on the table above already includes the driver, fuel, and highway tolls. If you also need a place to stay near the routes listed, our <Link href="/our-hotels/" style={{ color: '#0080f6', textDecoration: 'underline', fontWeight: 600 }}>verified hotels near the Haramain</Link> are booked the same way, with no separate transport arrangement required.
                  </p>
                </div>
              </div>
            </div>

          </main>

          {/* ── RIGHT COLUMN: SIDEBAR (3 Cards) ── */}
          <aside className="private-transport-sidebar">
            
            {/* Card 1: Umrah Fleet Info */}
            <div className="transport-sidebar-card">
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                WORLD TRACK AVIATION TRANSPORT
              </span>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: '2px 0 6px 0' }}>
                Umrah Fleet
              </h2>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.45', margin: '0 0 16px 0' }}>
                Private pilgrim transfers across Makkah, Madinah, and Jeddah, with a fixed-rate fleet available around the clock.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                  <span>Operating Hours</span>
                  <strong style={{ color: '#0f172a' }}>24/7/365</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                  <span>Avg Response</span>
                  <strong style={{ color: '#0f172a' }}>15 Minutes</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                  <span>Driver Languages</span>
                  <strong style={{ color: '#0f172a' }}>Arabic, Urdu, English</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                  <span>Sanitization Status</span>
                  <strong style={{ color: '#0f172a' }}>Standard Cleaned</strong>
                </div>
              </div>
            </div>

            {/* Card 2: Book Transport Inquiry Card */}
            <div className="transport-sidebar-card">
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
                Book Transport
              </h3>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 16px 0', lineHeight: '1.4' }}>
                All travel plans are verified and drivers assigned within 15 minutes.
              </p>

              {submitted ? (
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
                  <CheckCircle2 size={24} style={{ color: '#16a34a', margin: '0 auto 8px auto' }} />
                  <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#166534', margin: '0 0 4px 0' }}>Inquiry Sent!</h4>
                  <p style={{ fontSize: '11px', color: '#15803d', margin: '0 0 12px 0' }}>Our transport coordinator will call your WhatsApp shortly.</p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    style={{ background: '#166534', color: '#ffffff', border: 'none', padding: '6px 14px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="transport-form-group">
                    <label className="transport-form-label">Select Vehicle Route</label>
                    <select
                      value={selectedRoute}
                      onChange={(e) => setSelectedRoute(e.target.value)}
                      className="transport-form-select"
                    >
                      {transferRates.map((r) => (
                        <option key={r.route} value={r.route}>{r.route}</option>
                      ))}
                    </select>
                  </div>

                  <div className="transport-form-group">
                    <label className="transport-form-label">Select Vehicle Class</label>
                    <select
                      value={vehicleClass}
                      onChange={(e) => setVehicleClass(e.target.value)}
                      className="transport-form-select"
                    >
                      {vehicleTypes.map((vt) => {
                        const val = `${vt.name} (${vt.capacity || 4} Seater)`;
                        return (
                          <option key={vt.id || vt.name} value={val}>
                            {val}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="transport-form-group">
                    <label className="transport-form-label">WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      className="transport-form-input"
                    />
                  </div>

                  <button
                    type="submit"
                    className="transport-form-btn-submit"
                  >
                    <span>Send Inquiry</span>
                    <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* Card 3: 24/7 Questions Box */}
            <div className="transport-support-card">
              <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px 0' }}>
                Still have questions regarding your upcoming trip?
              </h4>
              <p style={{ fontSize: '11px', color: '#64748b', margin: '0 0 14px 0', lineHeight: '1.4' }}>
                Our travel consultants are active 24/7 on WhatsApp to provide instant personalized support.
              </p>

              <div className="transport-support-buttons">
                <button
                  type="button"
                  onClick={handleWhatsAppChat}
                  className="transport-support-btn-wa"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.115-.515-1.422-.588-2.316-2.023-2.386-2.116-.071-.093-.578-.769-.578-1.467 0-.698.369-1.041.5-1.185.132-.144.288-.18.385-.18.096 0 .193.001.277.006.088.004.207-.034.323.246.12.288.409 1.002.446 1.074.036.072.06.156.012.252-.048.096-.072.156-.144.24-.072.084-.153.188-.218.252-.072.072-.148.15-.064.294.084.144.373.616.801.997.551.49 1.015.642 1.159.714.144.072.229.06.313-.036.084-.096.361-.42.457-.564.096-.144.193-.12.324-.072.132.048.842.397.986.469.144.072.241.108.277.168.036.06.036.348-.108.753z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </button>

                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="transport-support-btn-call"
                >
                  <Phone size={13} />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* 4. Contact Modal */}
      <Modals isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
