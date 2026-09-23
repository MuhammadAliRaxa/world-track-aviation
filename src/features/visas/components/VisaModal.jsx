'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Clock, Calendar, FileText, MessageSquare, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../../../config/company';
import { inquiryService } from '../../../services/inquiry.service';

export function VisaModal({ visa, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelers: '1',
    travelDate: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!visa) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await inquiryService.submitInquiry({
        type: 'visa',
        name: formData.name,
        contact: formData.phone,
        email: formData.email || 'info@worldtracktravel.com',
        country_name: visa.country || visa.title || 'General',
        message: `Fast-Track Visa Application for ${visa.title}. Travelers: ${formData.travelers}. Expected Travel Date: ${formData.travelDate}`,
      });
    } catch (err) {
      console.error('Visa inquiry submission error:', err);
    }
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = `Hello World Track Aviation, I am inquiring about the ${visa.title} (Starting from $${visa.priceUSD} / PKR ${visa.pricePKR}). Please provide details.`;
    window.open(COMPANY_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="visa-detail-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn modal-close-btn-visa"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Top Header Banner */}
        <div className="visa-modal-header">
          <div className="visa-modal-header-image-box">
            <img src={visa.image} alt={visa.title} className="visa-modal-img" />
            <div className="visa-modal-header-gradient" />
            <div className="visa-modal-header-content">
              <span className="visa-modal-badge">{visa.badge}</span>
              <h2 className="visa-modal-title">{visa.title}</h2>
              <div className="visa-modal-meta-row">
                <span className="visa-modal-meta-item">
                  <Clock size={14} /> Processing: <strong>{visa.duration}</strong>
                </span>
                <span className="visa-modal-meta-item">
                  <Calendar size={14} /> Validity: <strong>{visa.validity}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="visa-modal-body-scroll">
          <div className="visa-modal-body-grid">
            {/* Left Column: Requirements & Inclusions */}
            <div className="visa-modal-info-col">
              <div className="visa-modal-price-hero">
                <div>
                  <span className="visa-price-label">Starting Package Fee</span>
                  <div className="visa-modal-price-val">
                    ${visa.priceUSD} <span>/ Approx Rs {visa.pricePKR}</span>
                  </div>
                </div>
                <div className="visa-processing-tag">
                  <ShieldCheck size={16} />
                  <span>{visa.processingType}</span>
                </div>
              </div>

              {/* Requirements */}
              <div className="visa-modal-section-block">
                <h4 className="visa-modal-block-title">
                  <FileText size={18} className="title-icon" />
                  Mandatory Requirements
                </h4>
                <ul className="visa-modal-req-list">
                  {visa.requirements.map((req, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="req-check-icon" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights & Features */}
              <div className="visa-modal-section-block">
                <h4 className="visa-modal-block-title">
                  <ShieldCheck size={18} className="title-icon" />
                  Service Inclusions
                </h4>
                <ul className="visa-modal-feature-list">
                  {visa.features.map((feat, idx) => (
                    <li key={idx}>
                      <span className="bullet-dot" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Quick Application / Inquiry Form */}
            <div className="visa-modal-form-col">
              <div className="visa-modal-form-box">
                <h3 className="visa-form-heading">Fast-Track Visa Application</h3>
                <p className="visa-form-sub">
                  Submit your details for instant document pre-audit & case officer assignment.
                </p>

                {submitted ? (
                  <div className="visa-form-success">
                    <CheckCircle2 size={44} className="success-icon" />
                    <h4>Application Received!</h4>
                    <p>
                      Our dedicated visa specialist will reach out to you within 15 minutes on WhatsApp/Phone.
                    </p>
                    <button
                      type="button"
                      className="btn-primary-blue full-width"
                      onClick={onClose}
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="visa-inquiry-form">
                    <div className="form-group-field">
                      <label>Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Muhammad Ali"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group-field">
                      <label>WhatsApp / Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group-row-2">
                      <div className="form-group-field">
                        <label>Applicants</label>
                        <select
                          value={formData.travelers}
                          onChange={(e) =>
                            setFormData({ ...formData, travelers: e.target.value })
                          }
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="3-5">Family (3-5)</option>
                          <option value="6+">Group (6+)</option>
                        </select>
                      </div>

                      <div className="form-group-field">
                        <label>Expected Travel</label>
                        <input
                          type="date"
                          value={formData.travelDate}
                          onChange={(e) =>
                            setFormData({ ...formData, travelDate: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn-primary-blue visa-submit-btn">
                      <Send size={16} />
                      <span>Start Visa Processing</span>
                    </button>

                    <div className="visa-form-divider">
                      <span>or instant chat</span>
                    </div>

                    <button
                      type="button"
                      className="whatsapp-inquiry-btn"
                      onClick={handleWhatsAppInquiry}
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp Directly</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
