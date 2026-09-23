'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Info,
  Building2,
  Globe2,
  Ticket,
  Compass,
  Palmtree,
  Plane,
  ChevronRight,
  MessageSquare,
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import { Logo } from './Logo';
import { PassportIcon } from './icons/PassportIcon';

export function Navbar({ onOpenContact: _onOpenContact, activeCategory = 'all', onSelectCategory }) {
  const router = useRouter();
  const currentPath = usePathname() || '';
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const [mounted, setMounted] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close desktop dropdown on outside click or escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnterDropdown = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleMouseLeaveDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 280);
  };

  const toggleDropdown = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileSubmenu = (name) => {
    setExpandedMobileMenu((prev) => (prev === name ? null : name));
  };

  const closeAll = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  const _handleNavCategory = (cat) => {
    if (currentPath !== '/') {
      router.push(`/#${cat}`);
    } else {
      onSelectCategory?.(cat);
    }
    closeAll();
  };

  return (
    <div className="navbar-floating-container">
      <nav className="header-glass-pill">
        {/* Logo */}
        <Link
          href="/"
          className="header-logo-anchor"
          onClick={() => {
            if (currentPath === '/') {
              onSelectCategory?.('all');
            }
            closeAll();
          }}
          title="World Track - Home"
        >
          <Logo white />
        </Link>

        {/* Desktop Nav Links */}
        <div className="header-nav-list">
          {/* Home */}
          <Link
            href="/"
            className="header-nav-btn"
            onClick={() => {
              onSelectCategory?.('all');
              closeAll();
            }}
          >
            <Home size={15} />
            <span>Home</span>
          </Link>

          {/* About us */}
          <Link
            href="/about-us"
            className={`header-nav-btn ${currentPath === '/about-us' || currentPath === '/about' ? 'active-nav-btn' : ''}`}
            onClick={closeAll}
          >
            <Info size={15} />
            <span>About us</span>
          </Link>

          {/* Hotels */}
          <Link
            href="/our-hotels"
            className={`header-nav-btn ${
              ['/our-hotels', '/hotels', '/hotel'].includes(currentPath) || activeCategory === 'hotels'
                ? 'active-nav-btn'
                : ''
            }`}
            onClick={closeAll}
          >
            <Building2 size={15} />
            <span>Hotels</span>
          </Link>

          {/* Visa */}
          <Link
            href="/visas"
            className={`header-nav-btn ${
              currentPath.startsWith('/visas') || currentPath.startsWith('/visa') || activeCategory === 'visa'
                ? 'active-nav-btn'
                : ''
            }`}
            onClick={closeAll}
          >
            <PassportIcon size={15} />
            <span>Visa</span>
          </Link>

          {/* Umrah Services dropdown */}
          <div
            ref={dropdownRef}
            className="nav-item-dropdown-container"
            data-open={activeDropdown === 'umrah'}
            onMouseEnter={() => handleMouseEnterDropdown('umrah')}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <button
              type="button"
              className={`header-nav-btn ${
                ['/umrah-group-packages', '/umrah-packages', '/customize-umrah-package', '/custom-umrah', '/private-transport', '/transport'].includes(currentPath)
                  ? 'active-nav-btn'
                  : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleDropdown('umrah');
              }}
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'umrah'}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10a8 8 0 0 1 16 0v10H4V10Z" />
                <path d="M12 2v4" />
                <path d="M9 16v4" />
                <path d="M15 16v4" />
              </svg>
              <span>Umrah Services</span>
              <ChevronDown size={13} className={`nav-arrow ${activeDropdown === 'umrah' ? 'nav-arrow-rotated' : ''}`} />
            </button>
            <div
              className="nav-dropdown-flyout"
            >
              <Link href="/umrah-packages" className="flyout-link" onClick={closeAll}>Umrah Packages</Link>
              <Link href="/customize-umrah-package" className="flyout-link" onClick={closeAll}>Custom Umrah Package</Link>
              <Link href="/umrah-group-packages" className="flyout-link" onClick={closeAll}>Group Umrah Package</Link>
              <Link href="/private-transport" className="flyout-link" onClick={closeAll}>Private Transport</Link>
            </div>
          </div>

          {/* Tours */}
          <Link
            href="/tour-packages"
            className={`header-nav-btn ${['/tour-packages', '/tours'].includes(currentPath) ? 'active-nav-btn' : ''}`}
            onClick={closeAll}
          >
            <Globe2 size={15} />
            <span>Tours</span>
          </Link>

          {/* Group Tickets */}
          <Link
            href="/group-tickets"
            className={`header-nav-btn ${currentPath === '/group-tickets' ? 'active-nav-btn' : ''}`}
            onClick={closeAll}
          >
            <Ticket size={15} />
            <span>Group Tickets</span>
          </Link>
        </div>

        {/* Contact us — Yellow/Amber pill, sits outside the nav list so it stays pinned to the end */}
        <Link
          href="/contact-us"
          className="header-contact-btn"
          onClick={closeAll}
        >
          Contact us
        </Link>

        {/* Mobile toggle button */}
        <button
          type="button"
          className="header-mobile-toggle"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Simple & Elegant Mobile Navigation Drawer */}
      {mounted && mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div className="mobile-drawer-overlay" onClick={closeAll}>
          <div
            className="mobile-drawer-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="mobile-drawer-header">
              <a
                href="/"
                className="mobile-drawer-logo-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPath !== '/') {
                    router.push('/');
                  } else {
                    onSelectCategory?.('all');
                  }
                  closeAll();
                }}
              >
                <Logo variant="dark" />
              </a>
              <button
                type="button"
                className="mobile-drawer-close-btn"
                onClick={closeAll}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="mobile-drawer-body">
              <nav className="mobile-drawer-nav-list">
                {/* Home */}
                <button
                  type="button"
                  className={`mobile-nav-item ${currentPath === '/' && activeCategory === 'all' ? 'active' : ''}`}
                  onClick={() => {
                    if (currentPath !== '/') {
                      router.push('/');
                    } else {
                      onSelectCategory?.('all');
                    }
                    closeAll();
                  }}
                >
                  <div className="mobile-nav-item-left">
                    <Home size={18} className="mobile-nav-icon" />
                    <span className="mobile-nav-title">Home</span>
                  </div>
                </button>

                {/* About us */}
                <button
                  type="button"
                  className={`mobile-nav-item ${currentPath === '/about-us' || currentPath === '/about' ? 'active' : ''}`}
                  onClick={() => {
                    router.push('/about-us');
                    closeAll();
                  }}
                >
                  <div className="mobile-nav-item-left">
                    <Info size={18} className="mobile-nav-icon" />
                    <span className="mobile-nav-title">About us</span>
                  </div>
                </button>

                {/* Hotels */}
                <button
                  type="button"
                  className={`mobile-nav-item ${
                    ['/our-hotels', '/hotels', '/hotel'].includes(currentPath) || activeCategory === 'hotels' ? 'active' : ''
                  }`}
                  onClick={() => {
                    router.push('/our-hotels');
                    closeAll();
                  }}
                >
                  <div className="mobile-nav-item-left">
                    <Building2 size={18} className="mobile-nav-icon" />
                    <span className="mobile-nav-title">Hotels</span>
                  </div>
                </button>

                {/* Visa */}
                <button
                  type="button"
                  className={`mobile-nav-item ${
                    currentPath.startsWith('/visas') || currentPath.startsWith('/visa') || activeCategory === 'visa' ? 'active' : ''
                  }`}
                  onClick={() => {
                    router.push('/visas');
                    closeAll();
                  }}
                >
                  <div className="mobile-nav-item-left">
                    <PassportIcon size={18} className="mobile-nav-icon" />
                    <span className="mobile-nav-title">Visa</span>
                  </div>
                </button>

                {/* Umrah Services (Clean Accordion) */}
                <div className="mobile-nav-accordion">
                  <button
                    type="button"
                    className={`mobile-nav-item mobile-nav-accordion-header ${
                      ['/umrah-group-packages', '/umrah-packages', '/customize-umrah-package', '/custom-umrah', '/private-transport', '/transport'].includes(currentPath) || expandedMobileMenu === 'umrah'
                        ? 'active'
                        : ''
                    }`}
                    onClick={() => toggleMobileSubmenu('umrah')}
                  >
                    <div className="mobile-nav-item-left">
                      <Compass size={18} className="mobile-nav-icon" />
                      <span className="mobile-nav-title">Umrah Services</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`mobile-accordion-chevron ${expandedMobileMenu === 'umrah' ? 'rotate-open' : ''}`}
                    />
                  </button>

                  {expandedMobileMenu === 'umrah' && (
                    <div className="mobile-accordion-sublist">
                      <button
                        type="button"
                        className={`mobile-sub-nav-item ${currentPath === '/umrah-packages' ? 'active' : ''}`}
                        onClick={() => {
                          router.push('/umrah-packages');
                          closeAll();
                        }}
                      >
                        Umrah Packages
                      </button>
                      <button
                        type="button"
                        className={`mobile-sub-nav-item ${['/customize-umrah-package', '/custom-umrah'].includes(currentPath) ? 'active' : ''}`}
                        onClick={() => {
                          router.push('/customize-umrah-package');
                          closeAll();
                        }}
                      >
                        Custom Umrah Package
                      </button>
                      <button
                        type="button"
                        className={`mobile-sub-nav-item ${['/umrah-group-packages'].includes(currentPath) ? 'active' : ''}`}
                        onClick={() => {
                          router.push('/umrah-group-packages');
                          closeAll();
                        }}
                      >
                        Group Umrah Package
                      </button>
                      <button
                        type="button"
                        className={`mobile-sub-nav-item ${['/private-transport', '/transport'].includes(currentPath) ? 'active' : ''}`}
                        onClick={() => {
                          router.push('/private-transport');
                          closeAll();
                        }}
                      >
                        Private Transport
                      </button>
                    </div>
                  )}
                </div>

                {/* Tours */}
                <button
                  type="button"
                  className={`mobile-nav-item ${['/tour-packages', '/tours'].includes(currentPath) ? 'active' : ''}`}
                  onClick={() => {
                    router.push('/tour-packages');
                    closeAll();
                  }}
                >
                  <div className="mobile-nav-item-left">
                    <Globe2 size={18} className="mobile-nav-icon" />
                    <span className="mobile-nav-title">Tours</span>
                  </div>
                </button>

                {/* Group Tickets */}
                <button
                  type="button"
                  className={`mobile-nav-item ${currentPath === '/group-tickets' ? 'active' : ''}`}
                  onClick={() => {
                    router.push('/group-tickets');
                    closeAll();
                  }}
                >
                  <div className="mobile-nav-item-left">
                    <Ticket size={18} className="mobile-nav-icon" />
                    <span className="mobile-nav-title">Group Tickets</span>
                  </div>
                </button>
              </nav>

              {/* Drawer Bottom / Simple Theme Actions */}
              <div className="mobile-drawer-bottom">
                <button
                  type="button"
                  className="mobile-drawer-contact-btn"
                  onClick={() => {
                    router.push('/contact-us');
                    closeAll();
                  }}
                >
                  Contact Us
                </button>

                <div className="mobile-drawer-quick-contacts">
                  <a
                    href="https://wa.me/923350122252"
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-quick-contact-pill whatsapp"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:0512120721"
                    className="mobile-quick-contact-pill call"
                  >
                    <PhoneCall size={15} />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}