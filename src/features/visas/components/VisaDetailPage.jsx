'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  LogIn,
  FileText,
  CreditCard,
  Tag,
  Check,
  Briefcase,
  Building2,
  Phone,
  ChevronDown
} from 'lucide-react';
import { visaService, inquiryService } from '../../../services';
import { VisaCard } from './VisaCard';
import { AppBar, Footer, PassportIcon } from '../../../shared';
import { COMPANY_CONFIG } from '../../../config/company';

const sanitizeHtml = (html) =>
  typeof html === 'string'
    ? html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/on\w+="[^"]*"/g, '')
    : '';

export function VisaDetailPage({ initialVisa = null }) {
  const { id } = useParams();
  const router = useRouter();

  const [visaState, setVisaState] = useState(initialVisa);
  const [allVisas, setAllVisas] = useState([]);

  useEffect(() => {
    if (!initialVisa || (initialVisa.id !== id && initialVisa.aliasId !== id)) {
      visaService.getVisaById(id).then((v) => {
        if (v) setVisaState(v);
      });
    }
    visaService.getVisas().then(setAllVisas);
  }, [id, initialVisa]);

  // Find visa by id or aliasId
  const rawVisa =
    visaState ||
    allVisas.find((v) => v.id === id || v.aliasId === id) ||
    null;


  if (!rawVisa) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <AppBar />
        <div className="flex-1 flex items-center justify-center p-8">
          <p className="text-slate-500 font-medium">Loading visa details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const visa = {
    ...rawVisa,
    detailTitle: rawVisa.detailTitle || rawVisa.title,
    heroTitle: rawVisa.heroTitle || rawVisa.title,
    featuredImage: rawVisa.featuredImage || rawVisa.image,
    aboutTitle: rawVisa.aboutTitle || `About ${rawVisa.title}`,
    aboutText:
      rawVisa.aboutText ||
      `The official visa processing service for ${rawVisa.country || rawVisa.title} provides fast, reliable application auditing, direct submission, and end-to-end guidance with guaranteed high approval rates.`,
    specs: {
      processingTime: rawVisa.specs?.processingTime || rawVisa.duration || '3 - 7 Days',
      stayDuration: rawVisa.specs?.stayDuration || rawVisa.stayDuration || '30 - 90 Days',
      entryType: rawVisa.specs?.entryType || rawVisa.entryType || 'Single / Multiple Entry',
      validity: rawVisa.specs?.validity || rawVisa.validity || '90 Days - 1 Year',
      visaType: rawVisa.specs?.visaType || rawVisa.processingType || rawVisa.badge || 'Electronic e-Visa',
      price: rawVisa.specs?.price || (rawVisa.priceUSD ? `From $${rawVisa.priceUSD}` : `From Rs ${rawVisa.pricePKR}`),
      pricePKR: rawVisa.specs?.pricePKR || `Rs ${rawVisa.pricePKR}`,
      ...(rawVisa.specs || {})
    },
    eligibility: rawVisa.eligibility || [
      'Valid passport with minimum 6 months validity from travel date.',
      'Confirmed return flight tickets and hotel booking confirmation.',
      'Sufficient financial funds demonstrated via 6-month bank statement.'
    ],
    requiredDocs: rawVisa.requiredDocs || [
      { title: 'Passport Scan', icon: 'passport' },
      { title: 'Photograph (White BG)', icon: 'passport' },
      { title: 'Hotel Booking', icon: 'hotel' }
    ],
    includedServices: rawVisa.includedServices || [
      'Direct Portal / Embassy Submission',
      'Document Pre-Screening & Verification',
      'Instant Email & SMS Status Updates',
      '24/7 Dedicated Visa Specialist Support'
    ],
    importantNotes: rawVisa.importantNotes || [
      'Single or Multiple entry valid as per consular immigration regulations.',
      'All government fee requirements are processed through official channels.'
    ]
  };

  // Inquiry form states
  const [prevVisaId, setPrevVisaId] = useState(visa.id);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('select visa');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Reset form submission state during render if visa changes
  if (visa.id !== prevVisaId) {
    setPrevVisaId(visa.id);
    setSubmitted(false);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    try {
      await inquiryService.submitInquiry({
        type: 'visa',
        name: fullName,
        email,
        contact,
        country_name: selectedCountry !== 'select visa'
          ? selectedCountry
          : (visa?.country || visa?.title || 'General'),
        message: message || `Visa inquiry for ${visa?.title || 'visa'}.`,
      });
    } catch (err) {
      console.error('Visa detail inquiry submission error:', err);
    }
    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    const text = `Hello World Track Aviation, I am inquiring regarding the ${visa.detailTitle || visa.title}. Please provide quotation and application guidance.`;
    window.open(COMPANY_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  // 4 Related Visas (Dubai, Azerbaijan, Malaysia, Thailand or first 4)
  const relatedVisas = allVisas.filter((v) => v.id !== (rawVisa ? rawVisa.id : id)).slice(0, 4);

  if (!rawVisa) return null;

  return (
    <div className="visa-detail-page-root">
      {/* 1. Header Bar & Floating Navbar */}
      <AppBar
        heroContent={
          <section className="visa-page-hero">
            <div className="visa-page-hero-overlay" />
            <div className="visa-page-hero-content">
              <h1 className="visa-page-hero-title">
                {visa.heroTitle || visa.title}
              </h1>
            </div>
          </section>
        }
      />

      {/* 3. Compact Breadcrumb Navigation */}
      <div className="visa-breadcrumb-row">
        <div className="detail-container breadcrumb-inner">
          <button
            type="button"
            className="breadcrumb-back-capsule"
            onClick={() => router.push('/#visa')}
          >
            <ArrowLeft size={13} />
            <span>Visa</span>
          </button>
          <span className="breadcrumb-slash">/</span>
          <span className="breadcrumb-current">
            {visa.detailTitle || visa.heroTitle || visa.title}
          </span>
        </div>
      </div>

      {/* 4. Main 2-Column Content Grid */}
      <div className="detail-container visa-page-main-grid">
        {/* Left Column: Full Editorial Content */}
        <div className="visa-detail-left">
          {/* Featured Airplane Wing Image */}
          <div className="visa-featured-media">
            <img
              src={
                visa.featuredImage ||
                'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80'
              }
              alt={visa.title}
              className="visa-featured-img"
            />
          </div>

          {/* About Section */}
          <section className="visa-detail-section">
            <h2 className="visa-section-heading">
              {visa.aboutTitle || `About ${visa.title}`}
            </h2>
            {visa.aboutText && visa.aboutText.includes('<') ? (
              <div
                className="visa-detail-paragraph visa-api-content"
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(visa.aboutText) }}
              />
            ) : (
              <p className="visa-detail-paragraph">
                {visa.aboutText ||
                  'The official electronic visa allows effortless entry for travelers visiting cultural capitals, nature reserves, and historical destinations.'}
              </p>
            )}
          </section>

          {/* Eligibility Requirements */}
          <section className="visa-detail-section">
            <h2 className="visa-section-heading">Eligibility Requirements</h2>
            <div className="visa-checklist">
              {(
                visa.eligibility || [
                  'Valid passport with minimum 3 months beyond intended departure.',
                  'Confirmed flight and hotel accommodation details.'
                ]
              ).map((item, idx) => (
                <div key={idx} className="visa-check-item">
                  <span className="visa-check-icon-wrap">
                    <Check size={14} className="visa-check-icon" />
                  </span>
                  <span className="visa-check-text">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Required Documents */}
          <section className="visa-detail-section">
            <h2 className="visa-section-heading">Required Documents</h2>
            <div className="visa-doc-badges">
              {(
                visa.requiredDocs || [
                  { title: 'Passport Copy', icon: 'passport' },
                  { title: 'Hotel Booking', icon: 'hotel' }
                ]
              ).map((doc, idx) => (
                <div key={idx} className="visa-doc-badge">
                  {doc.icon === 'hotel' ? (
                    <Building2 size={15} className="visa-doc-icon" />
                  ) : (
                    <Briefcase size={15} className="visa-doc-icon" />
                  )}
                  <span className="visa-doc-title">{doc.title}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Included Services */}
          <section className="visa-detail-section">
            <h2 className="visa-section-heading">Included services</h2>
            <div className="visa-checklist">
              {(
                visa.includedServices || [
                  'Direct ASAN portal submission',
                  'Pre-verification check',
                  'Email and SMS notification',
                  '24/7 client support'
                ]
              ).map((srv, idx) => (
                <div key={idx} className="visa-check-item">
                  <span className="visa-check-icon-wrap">
                    <Check size={14} className="visa-check-icon" />
                  </span>
                  <span className="visa-check-text">{srv}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Important Notes */}
          <section className="visa-detail-section">
            <h2 className="visa-section-heading">Important notes</h2>
            <div className="visa-notes-list">
              {(
                visa.importantNotes || [
                  'Single entry visa valid for 90 days from issue.',
                  'Non-refundable once processed by Ministry of Foreign Affairs'
                ]
              ).map((note, idx) => (
                <p key={idx} className="visa-note-item">
                  {note}
                </p>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar with 3 Cards */}
        <aside className="visa-detail-sidebar">
          {/* 1. Visa Specification Summary Card */}
          <div className="visa-specs-card">
            <span className="visa-specs-eyebrow">
              {visa.eyebrow || visa.country?.toUpperCase() || 'AZERBAIJAN'}
            </span>
            <h2 className="visa-specs-title">
              {visa.detailTitle || visa.heroTitle || visa.title}
            </h2>
            <p className="visa-specs-subtitle">
              {visa.detailDesc ||
                'Official ASAN e-Visa for Baku explorations, Gabala mountain excursions, and Caspian Sea holidays'}
            </p>

            <div className="visa-specs-list">
              {/* Processing Time */}
              <div className="visa-spec-row">
                <div className="visa-spec-left">
                  <Clock size={15} className="visa-spec-icon" />
                  <span>Processing Time</span>
                </div>
                <div className="visa-spec-value">
                  {visa.specs?.processingTime || visa.duration || '3 Working Days'}
                </div>
              </div>

              {/* Stay Duration */}
              <div className="visa-spec-row">
                <div className="visa-spec-left">
                  <Calendar size={15} className="visa-spec-icon" />
                  <span>Stay Duration</span>
                </div>
                <div className="visa-spec-value">
                  {visa.specs?.stayDuration || visa.stayDuration || '30 Days'}
                </div>
              </div>

              {/* Entry Type */}
              <div className="visa-spec-row">
                <div className="visa-spec-left">
                  <LogIn size={15} className="visa-spec-icon" />
                  <span>Entry Type</span>
                </div>
                <div className="visa-spec-value">
                  {visa.specs?.entryType || 'Single Entry'}
                </div>
              </div>

              {/* Validity */}
              <div className="visa-spec-row">
                <div className="visa-spec-left">
                  <FileText size={15} className="visa-spec-icon" />
                  <span>Validity</span>
                </div>
                <div className="visa-spec-value">
                  {visa.specs?.validity || visa.validity || '90 Days'}
                </div>
              </div>

              {/* Visa Type */}
              <div className="visa-spec-row">
                <div className="visa-spec-left">
                  <PassportIcon size={15} className="visa-spec-icon" />
                  <span>Visa Type</span>
                </div>
                <div className="visa-spec-value">
                  {visa.specs?.visaType || visa.processingType || 'Electronic ASAN Visa'}
                </div>
              </div>

              {/* Price */}
              <div className="visa-spec-row visa-spec-price-row">
                <div className="visa-spec-left">
                  <Tag size={15} className="visa-spec-icon" />
                  <span>Price</span>
                </div>
                <div className="visa-spec-value visa-price-combined">
                  <span className="visa-usd-bold">
                    {visa.specs?.price || `From $${visa.priceUSD}`}
                  </span>
                  <span className="visa-pkr-muted">
                    ({visa.specs?.pricePKR || `Rs ${visa.pricePKR}`})
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. "Send Us a Message" Card */}
          <div className="visa-inquiry-card">
            <h3 className="visa-inquiry-title">Send Us a Message</h3>
            <p className="visa-inquiry-subtitle">
              All inquiries are screened and assigned to a dedicated visa officer within 15 minutes
            </p>

            {submitted ? (
              <div className="visa-inquiry-success">
                <div className="success-icon-badge">
                  <Check size={20} />
                </div>
                <h4>Inquiry Received!</h4>
                <p>A dedicated visa officer will contact you within 15 minutes.</p>
                <button
                  type="button"
                  className="reset-inquiry-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="visa-inquiry-form">
                <div className="form-group-compact">
                  <label className="compact-label">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="compact-input"
                  />
                </div>

                <div className="form-group-compact">
                  <label className="compact-label">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="compact-input"
                  />
                </div>

                <div className="form-group-compact">
                  <label className="compact-label">Contact</label>
                  <input
                    type="tel"
                    required
                    placeholder="13445665432"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="compact-input"
                  />
                </div>

                <div className="form-group-compact">
                  <label className="compact-label">Select visa country</label>
                  <div className="select-wrapper">
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="compact-input compact-select"
                    >
                      <option value="select visa">select visa</option>
                      {allVisas.map((v) => (
                        <option key={v.id} value={v.country}>
                          {v.country}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="select-chevron" />
                  </div>
                </div>

                <div className="form-group-compact">
                  <label className="compact-label">Message Detail</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state your departure point, travel dates, or embassy requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="compact-input compact-textarea"
                  />
                </div>

                <button type="submit" className="visa-inquiry-submit-btn">
                  <span>Send Inquiry</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>

          {/* 3. 24/7 Support Consultation Box */}
          <div className="visa-support-box">
            <h4 className="visa-support-title">
              Still have questions regarding your upcoming trip?
            </h4>
            <p className="visa-support-desc">
              Our travel consultants are active 24/7 on WhatsApp to provide instant personalized support
            </p>

            <div className="visa-support-actions">
              <button
                type="button"
                className="visa-whatsapp-btn"
                onClick={handleWhatsAppChat}
              >
                {/* Inline SVG for exact WhatsApp Icon */}
                <svg
                  className="whatsapp-svg-icon"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.115-.515-1.422-.588-2.316-2.023-2.386-2.116-.071-.093-.578-.769-.578-1.467 0-.698.369-1.041.5-1.185.132-.144.288-.18.385-.18.096 0 .193.001.277.006.088.004.207-.034.323.246.12.288.409 1.002.446 1.074.036.072.06.156.012.252-.048.096-.072.156-.144.24-.072.084-.153.188-.218.252-.072.072-.148.15-.064.294.084.144.373.616.801.997.551.49 1.015.642 1.159.714.144.072.229.06.313-.036.084-.096.361-.42.457-.564.096-.144.193-.12.324-.072.132.048.842.397.986.469.144.072.241.108.277.168.036.06.036.348-.108.753z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </button>

              <a href="tel:+923001234567" className="visa-phone-btn">
                <Phone size={13} />
                <span>Call +92 300 1234567</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* 5. Related Visas Section */}
      <section className="visa-related-section">
        <div className="detail-container">
          <div className="visa-related-header">
            <h2 className="visa-related-title">Related Visas</h2>
            <button
              type="button"
              className="visa-view-all-link"
              onClick={() => router.push('/#visa')}
            >
              <span>View All</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="visa-related-grid">
            {relatedVisas.map((v) => (
              <VisaCard
                key={v.id}
                visa={v}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer (includes Newsletter Subscription Banner) */}
      <Footer />
    </div>
  );
}
