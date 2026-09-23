'use client';

import React, { useState } from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  ChevronDown,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { AppBar } from './AppBar';
import { Footer } from './Footer';
import { inquiryService } from '../../services/inquiry.service';

export function ContactPage({ contactInfo }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Umrah Packages & Visas');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const {
    phone: apiPhone = '+92 329 272 1721',
    whatsapp = '+92 335 0122252',
    email: apiEmail = 'worldtrackaviation@gmail.com',
    address = 'Office No. 4, Islamabad Center, Block 39, Fazal-ul-Haq Road, Blue Area, Islamabad',
    lat = '33.7260635',
    lng = '73.079234'
  } = contactInfo || {};

  // Remove spaces for link formatting
  const phoneLink = apiPhone.replace(/\s+/g, '');
  const whatsappLink = whatsapp.replace(/\s+/g, '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await inquiryService.submitInquiry({
        type: 'general',
        name: fullName,
        email: email,
        contact: phone || '+923000000000',
        service_category: service,
        message: message,
      });
    } catch (err) {
      console.error('Contact inquiry submission error:', err);
    }
    setSubmitted(true);
  };

  const heroSection = (
    <section className="contact-hero-banner">
      <div className="contact-hero-overlay" />
      <div className="contact-hero-content">
        <h1 className="contact-hero-title">How Can We Help You?</h1>
        <p className="contact-hero-subtitle">
          Have questions about Umrah packages, visa assistance, or flight and hotel bookings? Our team at World Track Aviation, a travel agency in Islamabad, helps travelers across Rawalpindi and the rest of Pakistan plan their next journey. Call, WhatsApp, or visit our office directly.
        </p>
      </div>
    </section>
  );

  return (
    <div className="contact-page-root">
      {/* 1. AppBar (TopBar + Nav floating over hero) */}
      <AppBar heroContent={heroSection} />

      {/* 3. Main 2-Column Content Grid */}
      <div className="detail-container contact-main-grid">
        {/* Left Column: Offices & Hotlines */}
        <div className="contact-left-col">
          <span className="contact-eyebrow">CONNECT DIRECTLY</span>
          <h2 className="contact-section-title">Our Offices &amp; Hotlines</h2>
          <p className="contact-section-desc">
            World Track Aviation runs dedicated support lines for Umrah bookings, visa assistance, flight bookings, and hotel reservations. Our office in Blue Area, Islamabad serves travelers across Rawalpindi and Pakistan, including corporate travel arrangements. WhatsApp support stays open around the clock, and whether it's a family trip, a group Umrah package, or a last-minute flight issue, our team gets back to you the same day.
          </p>

          <div className="contact-cards-stack">
            {/* Card 1: 24/7 Urgent Support (WhatsApp) */}
            <div className="contact-info-card card-urgent-highlight">
              <div className="contact-card-icon-wrap icon-wrap-blue">
                <PhoneCall size={20} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">24/7 URGENT SUPPORT (WHATSAPP)</span>
                <a
                  href={`https://wa.me/${whatsappLink.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card-val phone-highlight"
                >
                  {whatsapp}
                </a>
                <p className="contact-card-sub">
                  Round-the-clock urgent WhatsApp support for flight issues and last-minute requests.
                </p>
              </div>
            </div>

            {/* Card 2: WhatsApp Assistance */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap icon-wrap-blue">
                <PhoneCall size={20} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">WHATSAPP DIRECT</span>
                <a
                  href={`https://wa.me/${phoneLink.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card-val"
                >
                  {apiPhone}
                </a>
                <p className="contact-card-sub">
                  Direct chat for package queries, visa assistance, and ticket bookings.
                </p>
              </div>
            </div>

            {/* Card 3: Office Telephone Line */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap icon-wrap-gray">
                <PhoneCall size={20} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">OFFICE TELEPHONE LINE</span>
                <a href="tel:0512120721" className="contact-card-val">
                  051-2120721
                </a>
                <p className="contact-card-sub">
                  Official Blue Area Islamabad landline for reservations and corporate travel.
                </p>
              </div>
            </div>

            {/* Card 4: Email Support */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap icon-wrap-gray">
                <Mail size={20} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">EMAIL SUPPORT</span>
                <a href={`mailto:${apiEmail}`} className="contact-card-val">
                  {apiEmail}
                </a>
                <p className="contact-card-sub">
                  General inquiries, group quotations, visa documents, and feedback.
                </p>
              </div>
            </div>

            {/* Card 5: Headquarters */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap icon-wrap-gray">
                <MapPin size={20} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">HEADQUARTERS</span>
                <span className="contact-card-val">
                  World Track Aviation
                </span>
                <p className="contact-card-sub">
                  {address}
                </p>
              </div>
            </div>
          </div>

          {/* City Map Iframe */}
          <div className="contact-city-map-card" style={{ padding: 0, overflow: 'hidden', minHeight: '250px' }}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '250px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            />
          </div>
        </div>

        {/* Right Column: Send Us a Message Form */}
        <div className="contact-right-col">
          <div className="contact-form-card">
            <h3 className="contact-form-title">Send Us a Message</h3>
            <p className="contact-form-sub">
              All inquiries are screened and assigned to a dedicated case officer within 15 minutes.
            </p>

            {submitted ? (
              <div className="contact-success-box">
                <CheckCircle2 size={48} className="contact-success-icon" />
                <h4>Inquiry Submitted Successfully!</h4>
                <p>
                  Thank you <strong>{fullName || 'Traveler'}</strong>. Our travel desk has received your request regarding <em>{service}</em> and will follow up with you at <strong>{email}</strong> shortly.
                </p>
                <button
                  type="button"
                  className="btn-contact-gold mt-4"
                  onClick={() => {
                    setSubmitted(false);
                    setFullName('');
                    setEmail('');
                    setMessage('');
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-actual-form">
                {/* Full Name */}
                <div className="contact-field-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                {/* Email Address */}
                <div className="contact-field-group">
                  <label htmlFor="contactEmail">Email Address</label>
                  <input
                    id="contactEmail"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="contact-field-group">
                  <label htmlFor="contactPhone">Phone / WhatsApp Number</label>
                  <input
                    id="contactPhone"
                    type="tel"
                    placeholder="+92 300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* What do you need help with? */}
                <div className="contact-field-group">
                  <label htmlFor="serviceSelect">What do you need help with?</label>
                  <div className="contact-select-wrap">
                    <select
                      id="serviceSelect"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="Umrah Packages & Visas">Umrah Packages &amp; Visas</option>
                      <option value="Flight Tickets & Reservations">Flight Tickets &amp; Reservations</option>
                      <option value="Hotel & Resort Bookings">Hotel &amp; Resort Bookings</option>
                      <option value="Global Visit & Tourist Visas">Global Visit &amp; Tourist Visas</option>
                      <option value="Corporate & Group Tours">Corporate &amp; Group Tours</option>
                    </select>
                    <ChevronDown size={15} className="contact-chevron-icon" />
                  </div>
                </div>

                {/* Message Detail */}
                <div className="contact-field-group">
                  <label htmlFor="messageDetail">Message Detail</label>
                  <textarea
                    id="messageDetail"
                    rows={4}
                    placeholder="Briefly state your departure point, travel dates, or embassy requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Send Inquiry Button */}
                <button type="submit" className="btn-contact-gold">
                  <span>Send Inquiry</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 4. Complete Footer */}
      <Footer />
    </div>
  );
}
