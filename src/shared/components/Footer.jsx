'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Lock } from 'lucide-react';
import { Logo } from './Logo';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="main-footer-section" id="footer">
      <div className="section-container">
        {/* ─── Section 12 — Newsletter CTA ─── */}
        <div className="footer-newsletter-card">
          <div className="newsletter-inner-row">
            <div className="newsletter-text-col">
              <div className="newsletter-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#f59e0b" className="newsletter-envelope-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="newsletter-badge-label">LATEST PACKAGE UPDATES</span>
              </div>
              <h3 className="newsletter-heading">
                Stay Updated on New Umrah Packages &amp; Travel Deals
              </h3>
              <p className="newsletter-subtitle">
                Get the latest Umrah packages, flight deals, hotel offers, and travel updates directly in your inbox.
              </p>
            </div>

            <div className="newsletter-form-col">
              {subscribed ? (
                <div style={{ color: '#10b981', fontWeight: 700, fontSize: '14px', background: '#ecfdf5', padding: '12px 18px', borderRadius: '10px' }}>
                  ✓ Thank you for subscribing! You will receive our latest updates.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form-row">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    className="newsletter-email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="newsletter-subscribe-btn">
                    SUBSCRIBE FOR UPDATES
                  </button>
                </form>
              )}
              <div className="newsletter-privacy-note">
                <Lock size={12} className="newsletter-lock-icon" />
                <span>We protect your privacy. Unsubscribe anytime with 1-click.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Section 13 — Main Footer 4 Columns ─── */}
        <div className="footer-columns-grid">
          {/* Col 1: Brand Info + Badges + Social */}
          <div className="footer-col brand-col">
            <div className="footer-logo-capsule">
              <Logo />
            </div>
            <p className="footer-about-text">
              World Track Aviation is a travel agency in Islamabad, IATA-accredited and licensed by the Ministry of Religious Affairs (Govt. of Pakistan), with access to 500+ verified hotels and 15+ airline partners worldwide.
            </p>
            <div className="trust-pills-row">
              <span className="trust-pill-tag trust-pill-iata">IATA #27351170</span>
              <span className="trust-pill-tag trust-pill-lic">Ministry Lic # ID-2637</span>
              <span className="trust-pill-tag trust-pill-dts">DTS Approved</span>
            </div>
            <div className="footer-social-icons">
              <a
                href="https://web.facebook.com/worldtrackaviation/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-box facebook"
                aria-label="Facebook"
              >
                <FacebookIcon size={14} />
              </a>
              <a
                href="https://www.instagram.com/worldtrackaviation/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-box instagram"
                aria-label="Instagram"
              >
                <InstagramIcon size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Travel Services */}
          <div className="footer-col">
            <h4 className="footer-heading">TRAVEL SERVICES</h4>
            <ul className="footer-nav-list">
              <li><Link href="/umrah-packages">Umrah Packages</Link></li>
              <li><Link href="/umrah-group-packages">Group Umrah Packages</Link></li>
              <li><Link href="/customize-umrah-package">Custom Umrah Packages</Link></li>
              <li><Link href="/visas">Umrah and Visit Visas</Link></li>
              <li><Link href="/our-hotels">Hotel Bookings</Link></li>
              <li><Link href="/private-transport">Private Transport</Link></li>
              <li><Link href="/tour-packages">Tour Packages</Link></li>
              <li><Link href="/group-tickets">Group Tickets</Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul className="footer-nav-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/our-hotels">Hotels</Link></li>
              <li><Link href="/hotels-map">Hotels Map</Link></li>
              <li><Link href="/our-blogs">Blogs &amp; Articles</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Col 4: Branch Offices */}
          <div className="footer-col branch-offices-col">
            <h4 className="footer-heading">BRANCH OFFICES</h4>
            <div className="branch-offices-list">
              <div className="branch-office-item">
                <span className="branch-city">Islamabad Head Office:</span>
                <span className="branch-address">Office #4, Islamabad Center, Fazal-ul-Haq Road, Blue Area</span>
                <a href="tel:0512120721" className="branch-phone-link">
                  <Phone size={13} className="branch-phone-icon" />
                  <span>051-2120721</span>
                </a>
                <a href="https://wa.me/923350122252" target="_blank" rel="noreferrer" className="branch-phone-link">
                  <Phone size={13} className="branch-phone-icon" />
                  <span>+92 335 0122252</span>
                </a>
                <a href="https://wa.me/923292721721" target="_blank" rel="noreferrer" className="branch-phone-link">
                  <Phone size={13} className="branch-phone-icon" />
                  <span>+92 329 2721721</span>
                </a>
              </div>
              <div className="branch-office-divider" />
              <div className="branch-office-item">
                <span className="branch-city">Vehari:</span>
                <span className="branch-address">Main Multan Road, Vehari</span>
                <a href="tel:+923137943362" className="branch-phone-link">
                  <Phone size={13} className="branch-phone-icon" />
                  <span>+92 313 7943362</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="footer-bottom-row">
          <p className="footer-copyright-text">
            © 2026 World Track Travel &amp; Tourism (Pvt.) Ltd. All rights reserved.
          </p>
          <div className="footer-designer-credit">
            <span>Design and Developed by</span>
            <a
              href="https://evolixtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="evolix-credit-link"
              aria-label="evolix Technologies - Software Development Company"
            >
              <img
                src="/assets/evolix-logo.png"
                alt="evolix Technologies"
                className="evolix-logo-img"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
