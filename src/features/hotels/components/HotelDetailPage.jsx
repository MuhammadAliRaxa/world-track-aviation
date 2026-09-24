'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Star,
  MapPin,
  Wifi,
  Clock,
  Calendar,
  MessageSquare,
  Phone,
  Bed,
  Waves,
  Dumbbell,
  Utensils,
  Car,
  Bell,
  Sparkles,
  Shirt,
  Briefcase,
  Ban,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Footprints,
  CalendarCheck,
  Building2,
  Navigation,
  X,
  Images,
  ExternalLink
} from 'lucide-react';
import { hotelService, inquiryService } from '../../../services';
import { AppBar, Footer, Modals } from '../../../shared';
import { COMPANY_CONFIG } from '../../../config/company';
import { GuestsPopup } from './GuestsPopup';
import { RoomTypePopup } from './RoomTypePopup';
import { HotelCard } from './HotelCard';

const sanitizeHtml = (html) =>
  typeof html === 'string'
    ? html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/on\w+="[^"]*"/g, '')
    : '';

export function HotelDetailPage({ initialHotel = null }) {
  const { id } = useParams();
  const router = useRouter();

  const [hotelState, setHotelState] = useState(initialHotel);
  const [allHotels, setAllHotels] = useState([]);

  useEffect(() => {
    const isMatchingInitial =
      initialHotel &&
      (String(initialHotel.id) === String(id) ||
        initialHotel.slug === id ||
        initialHotel?.seo?.url_slug === id ||
        (Array.isArray(initialHotel.aliases) && initialHotel.aliases.includes(id)));

    if (!isMatchingInitial) {
      hotelService.getHotelById(id).then((h) => {
        if (h) setHotelState(h);
      });
    }
    hotelService.getHotels().then(setAllHotels);
  }, [id, initialHotel]);

  const hotel =
    hotelState ||
    allHotels.find((h) => String(h.id) === String(id) || (h.aliases && h.aliases.includes(id))) ||
    null;


  // Gallery states
  const [prevHotelId, setPrevHotelId] = useState(hotel ? hotel.id : id);
  const [activeImage, setActiveImage] = useState(hotel ? hotel.image : '');
  const [selectedRoom, setSelectedRoom] = useState(hotel?.roomTypes?.[0]?.name || 'Double Bedroom');
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (hotel) {
      setActiveImage(hotel.image);
      setSelectedRoom(hotel.roomTypes?.[0]?.name || 'Double Bedroom');
    }
  }, [hotel]);

  // Form State
  const [checkIn, setCheckIn] = useState('2026-05-23');
  const [checkOut, setCheckOut] = useState('2026-08-30');
  const [guests, setGuests] = useState('2 Adults');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Pop up states for Guests & Room Type
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [isRoomTypeOpen, setIsRoomTypeOpen] = useState(false);

  // Guest counts: Adult (min 1, default 2), Child (default 0), Infant (default 0)
  const [guestCounts, setGuestCounts] = useState({
    Adult: 0,
    Child: 0,
    Infant: 0,
  });

  // Room counts: Double (default 1), Triple, Quad, Quint
  const [roomCounts, setRoomCounts] = useState({
    Double: 0,
    Triple: 0,
    Quad: 0,
    Quint: 0,
  });

  const guestsRef = useRef(null);
  const roomTypeRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (guestsRef.current && !guestsRef.current.contains(event.target)) {
        setIsGuestsOpen(false);
      }
      if (roomTypeRef.current && !roomTypeRef.current.contains(event.target)) {
        setIsRoomTypeOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const updateGuestCount = (type, delta) => {
    setGuestCounts((prev) => {
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
      setGuests(parts.join(', ') || 'Select Guests');
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
          parts.push(`${count > 1 ? `${count} ` : ''}${rType} Bedroom${count > 1 ? 's' : ''}`);
        }
      });
      setSelectedRoom(parts.join(', ') || 'Select Room Type');
      return nextCounts;
    });
  };

  // Adjust state during render if hotel changes
  if (hotel && hotel.id !== prevHotelId) {
    setPrevHotelId(hotel.id);
    setActiveImage(hotel.image);
    setSelectedRoom(hotel.roomTypes?.[0]?.name || 'Double Bedroom');
    setSubmitted(false);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    try {
      await inquiryService.submitInquiry({
        type: 'hotel',
        name,
        email,
        contact: phone,
        checkin_date: checkIn || '',
        checkout_date: checkOut || '',
        adults: guestCounts?.Adult || 1,
        children: guestCounts?.Child || 0,
        infants: guestCounts?.Infant || 0,
        room_type: selectedRoom,
        message: message || `Hotel inquiry for ${hotel?.name} (${hotel?.location}).`,
      });
    } catch (err) {
      console.error('Hotel inquiry submission error:', err);
    }
    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    if (!hotel) return;
    const text = `Hello World Track Aviation, I would like to inquire about *${hotel.name}* (${hotel.location}). Room: ${selectedRoom}, Check-in: ${checkIn}, Check-out: ${checkOut}. Please share rates and availability.`;
    window.open(COMPANY_CONFIG.getWhatsAppUrl(text), '_blank');
  };

  if (!hotel) {
    return (
      <div className="hotel-detail-page-root">
        <AppBar onOpenContact={() => setIsContactOpen(true)} />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="text-center p-8">
            <h2 className="text-xl font-semibold mb-2">Loading hotel details...</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Gallery images from API
  const galleryItems = Array.isArray(hotel.gallery) && hotel.gallery.length > 0
    ? hotel.gallery
    : (hotel.image ? [hotel.image] : []);

  // Direct Google Maps location link
  const hotelMapUrl =
    hotel.lat && hotel.lng
      ? `https://maps.google.com/?q=${hotel.lat},${hotel.lng}+(${encodeURIComponent(hotel.name)})`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${hotel.name}, ${hotel.address || hotel.location || ''}`)}`;

  // Amenities from API (hotel.amenities is mapped from facilities[] in the normalizer)
  const AMENITY_ICON_MAP = {
    'Free WiFi': Wifi, 'Free Wi-Fi': Wifi,
    'Swimming Pool': Waves,
    'Gym / Fitness': Dumbbell, 'Gym': Dumbbell, 'Fitness': Dumbbell,
    'Restaurant': Utensils,
    '24/7 Front Desk': Clock, 'Front Desk': Clock,
    'Airport Shuttle': Car, 'Shuttle Service': Car,
    'Room Service': Bell,
    'Parking': Car, 'Private Parking': Car,
    'Spa & Wellness': Sparkles, 'Spa': Sparkles,
    'Laundry Service': Shirt, 'Laundry': Shirt,
    'Business Center': Briefcase,
    'Non-Smoking Rooms': Ban,
  };
  const amenities = (hotel.amenities && hotel.amenities.length > 0)
    ? hotel.amenities.map((label) => ({ label, icon: AMENITY_ICON_MAP[label] || Bell }))
    : [
        { label: 'Free WiFi', icon: Wifi },
        { label: 'Swimming Pool', icon: Waves },
        { label: 'Gym / Fitness', icon: Dumbbell },
        { label: 'Restaurant', icon: Utensils },
        { label: '24/7 Front Desk', icon: Clock },
        { label: 'Airport Shuttle', icon: Car },
        { label: 'Room Service', icon: Bell },
        { label: 'Parking', icon: Car },
        { label: 'Spa & Wellness', icon: Sparkles },
        { label: 'Laundry Service', icon: Shirt },
        { label: 'Business Center', icon: Briefcase },
        { label: 'Non-Smoking Rooms', icon: Ban },
      ];

  // 4 Alternative Stays
  const alternativeHotels = allHotels.filter((h) => h.id !== (hotel ? hotel.id : id)).slice(0, 4);

  return (
    <div className="hotel-detail-page-root">
      {/* 1. Header Bar & Floating Nav Capsule */}
      <AppBar
        onOpenContact={() => setIsContactOpen(true)}
        heroContent={
          <section className="hotel-page-hero">
            <div className="hotel-page-hero-overlay" />
            <div className="hotel-page-hero-content">
              <p className="hotel-page-hero-title" role="doc-subtitle">{hotel.name}</p>
            </div>
          </section>
        }
      />

      {/* 3. Breadcrumb Row */}
      <div className="hotel-page-breadcrumb-row">
        <div className="detail-container breadcrumb-inner">
          <button
            type="button"
            className="breadcrumb-back-capsule"
            onClick={() => router.push('/#hotels')}
          >
            <ArrowLeft size={13} />
            <span>All Hotels</span>
          </button>
          <span className="breadcrumb-slash">/</span>
          <span className="breadcrumb-nav-link" onClick={() => router.push('/#hotels')}>Hotels</span>
          <span className="breadcrumb-slash">/</span>
          <span className="breadcrumb-nav-link">{hotel.category}</span>
          <span className="breadcrumb-slash">/</span>
          <span className="breadcrumb-current">{hotel.name}</span>
        </div>
      </div>

      {/* 4. Main 2-Column Content Layout */}
      <div className="detail-container hotel-page-main-grid">
        {/* Left Column (Header Info, Photos, Room Types, Amenities, Description, Map) */}
        <div className="hotel-grid-left">
          {/* Hotel Header Info (Title, Rating row, Address) */}
          <div className="hotel-left-header">
            <h1 className="hotel-title-main">{hotel.name}</h1>

            <div className="hotel-header-rating-row">
              <span className="hotel-score-pill">{hotel.rating || '9.6/10'}</span>
              <span className="hotel-reviews-count">{hotel.reviewsCount || '3,190 reviews'} reviews</span>
              <div className="hotel-header-stars">
                {[...Array(hotel.stars || 5)].map((_, i) => (
                  <Star key={`hotel-star-${hotel.id || 'curr'}-${i}`} size={14} fill="#f59e0b" stroke="#f59e0b" />
                ))}
              </div>
            </div>

            <div className="hotel-header-address">
              <MapPin size={14} className="address-pin-icon" />
              <span>{hotel.address || '80 Bras Basah Road, Marina Bay District, Singapore 189560'}</span>
              <a
                href={hotelMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#0284c7',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginLeft: '8px',
                  textDecoration: 'underline',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  cursor: 'pointer'
                }}
              >
                <span>View on Map</span>
                <ExternalLink size={11} />
              </a>
            </div>

            {/* Info Pills: Distance, Available From */}
            <div className="hotel-info-pills-row">
              {hotel.distance && (
                <div className="hotel-info-pill hotel-info-pill--distance">
                  <Navigation size={13} className="info-pill-icon" />
                  <span>{hotel.distance} from Masjid</span>
                </div>
              )}
              {hotel.available_from && (
                <div className="hotel-info-pill hotel-info-pill--available">
                  <CalendarCheck size={13} className="info-pill-icon" />
                  <span>Available from {hotel.available_from}</span>
                </div>
              )}
            </div>
          </div>

          {/* Main Photo Gallery Box */}
          <div className="hotel-photos-card">
            <div
              className="hotel-main-photo-wrapper"
              onClick={() => {
                setLightboxIndex(galleryItems.indexOf(activeImage) >= 0 ? galleryItems.indexOf(activeImage) : 0);
                setLightboxOpen(true);
              }}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={activeImage}
                alt={hotel.name}
                className="hotel-main-photo"
              />
              {/* Photo count badge on main image */}
              <div className="hotel-photo-count-badge">
                <Images size={14} />
                <span>{galleryItems.length} Photos</span>
              </div>
            </div>

            {/* Thumbnails Row — show first 4, last one has +N overlay */}
            <div className="hotel-thumbnails-grid">
              {galleryItems.slice(0, 4).map((imgUrl, index) => {
                const isLast = index === 3 && galleryItems.length > 4;
                const remaining = galleryItems.length - 4;
                return (
                  <div
                    key={`gallery-thumb-${hotel.id || 'curr'}-${index}`}
                    className={`hotel-thumbnail-item ${activeImage === imgUrl ? 'thumb-active' : ''}`}
                    onClick={() => {
                      if (isLast) {
                        setLightboxIndex(0);
                        setLightboxOpen(true);
                      } else {
                        setActiveImage(imgUrl);
                      }
                    }}
                  >
                    <img src={imgUrl} alt={`${hotel.name} - Photo ${index + 1}`} className="thumb-img" />
                    {isLast && (
                      <div className="thumb-more-overlay">
                        <span className="more-count">+{remaining}</span>
                        <span className="more-text">more photos</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Room Types Card */}
          <div className="hotel-room-types-box">
            {(hotel.roomTypes || [
              { id: 'r1', name: 'Double Bedroom', capacity: '2 Adults', price: 'PKR 16,500', unit: '/night' },
              { id: 'r2', name: 'Triple Bedroom', capacity: '3 Adults', price: 'PKR 24,900', unit: '/night' },
              { id: 'r3', name: 'Quad Bedroom', capacity: '4 Adults', price: 'PKR 31,900', unit: '/night' },
              { id: 'r4', name: 'Quint Bedroom', capacity: '5 Adults', price: 'PKR 37,900', unit: '/night' }
            ]).map((room) => {
              const isSelected = selectedRoom === room.name;
              return (
                <div
                  key={room.id}
                  className={`room-tier-row ${isSelected ? 'room-tier-selected' : ''}`}
                  onClick={() => setSelectedRoom(room.name)}
                >
                  <div className="room-tier-left">
                    <div className="room-bed-icon-wrap">
                      <Bed size={18} className="room-bed-svg" />
                    </div>
                    <div className="room-tier-info">
                      <h4 className="room-tier-title">{room.name}</h4>
                      <span className="room-tier-sub">{room.capacity}</span>
                    </div>
                  </div>

                  <div className="room-tier-right">
                    <span className="price-bold">{room.price}</span>
                    <span className="price-unit">{room.unit}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Amenities Section */}
          <div className="hotel-section-block amenities-section">
            <h3 className="hotel-section-heading">Amenities</h3>

            <div className="amenities-12-grid">
              {amenities.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={`amenity-${item.label}`} className="amenity-item-cell">
                    <IconComponent size={15} className="amenity-vector-icon" />
                    <span className="amenity-label-text">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description Section */}
          <div className="hotel-section-block description-section">
            <h3 className="hotel-section-heading">Description</h3>
            {hotel.description ? (
              <div
                className="hotel-description-text hotel-api-content"
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(hotel.description) }}
              />
            ) : (
              <p className="hotel-description-text">
                Experience a premium stay at {hotel.name} in {hotel.location}.
              </p>
            )}
          </div>

          {/* Hotel Location & Map Section */}
          <div className="hotel-section-block map-section">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <h3 className="hotel-section-heading" style={{ margin: 0 }}>Hotel Location</h3>
              <a
                href={hotelMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#0284c7',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer'
                }}
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>

            <div className="map-visual-container">
              {/* Real Google Maps Embed */}
              {hotel.lat && hotel.lng ? (
                <iframe
                  className="map-embed-iframe"
                  src={`https://maps.google.com/maps?q=${hotel.lat},${hotel.lng}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${hotel.name} location map`}
                />
              ) : (
                <iframe
                  className="map-embed-iframe"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(hotel.address || hotel.name + ' ' + hotel.location)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${hotel.name} location map`}
                />
              )}

              {/* Overlay Button to Open Location in Google Maps */}
              <a
                href={hotelMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-open-overlay-btn"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  zIndex: 10,
                  background: '#ffffff',
                  color: '#0f172a',
                  padding: '7px 12px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer'
                }}
              >
                <ExternalLink size={13} color="#0284c7" />
                <span>Open in Google Maps</span>
              </a>

              {/* Floating Address Box */}
              <div className="map-floating-box">
                <h4 className="map-box-hotel-name">{hotel.name}</h4>
                <p className="map-box-address">{hotel.address || hotel.location}</p>
                {hotel.distance && (
                  <p className="map-box-distance">
                    <Navigation size={12} />
                    <span>{hotel.distance} from Masjid</span>
                  </p>
                )}
                <a
                  href={hotelMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-box-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <ExternalLink size={12} />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Inquiry Form, 24/7 Support) */}
        <aside className="hotel-grid-right">
          {/* 1. "Send Us a Message" Form Card */}
          <div className="hotel-inquiry-card">
            <h3 className="inquiry-main-title">Send Us a Message</h3>
            <p className="inquiry-subtitle">
              All inquiries are screened and assigned to a dedicated case officer within 15 minutes.
            </p>

            {submitted ? (
              <div className="inquiry-completed-box">
                <CheckCircle2 size={42} className="inquiry-success-icon" />
                <h4>Message Received!</h4>
                <p>
                  Thank you <strong>{name || 'Traveler'}</strong>. Our senior hotel reservation officer has received your request and will contact you directly on <strong>{phone || '+92 329 2721721'}</strong>.
                </p>
                <button
                  type="button"
                  className="btn-send-inquiry-gold mt-4"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="inquiry-actual-form">
                {/* Check-in Date */}
                <div className="inquiry-row-field">
                  <label>Check-in Date</label>
                  <div className="input-with-calendar-icon">
                    <input
                      type="text"
                      required
                      placeholder="23 May 2026"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                    <Calendar size={15} className="calendar-field-icon" />
                  </div>
                </div>

                {/* Check-out Date */}
                <div className="inquiry-row-field">
                  <label>Check-out Date</label>
                  <div className="input-with-calendar-icon">
                    <input
                      type="text"
                      required
                      placeholder="30 Aug 2026"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                    <Calendar size={15} className="calendar-field-icon" />
                  </div>
                </div>

                {/* Guests */}
                <div className="inquiry-row-field" ref={guestsRef} style={{ position: 'relative' }}>
                  <label>Guests</label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsGuestsOpen((prev) => !prev);
                      setIsRoomTypeOpen(false);
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '11px 14px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      fontWeight: 500,
                      outline: 'none',
                    }}
                  >
                    <span>{guests}</span>
                    <ChevronDown
                      size={14}
                      className="select-chevron-icon"
                      style={{
                        transform: isGuestsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </button>

                  <GuestsPopup
                    isOpen={isGuestsOpen}
                    onClose={() => setIsGuestsOpen(false)}
                    counts={guestCounts}
                    onUpdateCount={updateGuestCount}
                  />
                </div>

                {/* Room Type */}
                <div className="inquiry-row-field" ref={roomTypeRef} style={{ position: 'relative' }}>
                  <label>Room Type</label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsRoomTypeOpen((prev) => !prev);
                      setIsGuestsOpen(false);
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '11px 14px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      fontWeight: 500,
                      outline: 'none',
                    }}
                  >
                    <span>{selectedRoom}</span>
                    <ChevronDown
                      size={14}
                      className="select-chevron-icon"
                      style={{
                        transform: isRoomTypeOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </button>

                  <RoomTypePopup
                    isOpen={isRoomTypeOpen}
                    onClose={() => setIsRoomTypeOpen(false)}
                    counts={roomCounts}
                    onUpdateCount={updateRoomCount}
                  />
                </div>

                {/* Name */}
                <div className="inquiry-row-field">
                  <label>Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email Address */}
                <div className="inquiry-row-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Contact */}
                <div className="inquiry-row-field">
                  <label>Contact</label>
                  <input
                    type="tel"
                    required
                    placeholder="03001231123"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* Message Detail */}
                <div className="inquiry-row-field">
                  <label>Message Detail</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state your departure point, travel dates, or embassy requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-send-inquiry-gold">
                  <span>Send Inquiry</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>

          {/* 2. 24/7 Questions Support Box */}
          <div className="hotel-questions-support-box">
            <h4 className="support-box-heading">Still have questions regarding your upcoming trip?</h4>
            <p className="support-box-text">
              Our travel consultants are active 24/7 on WhatsApp to provide instant personalized support.
            </p>

            <div className="support-buttons-group">
              <button
                type="button"
                className="btn-support-whatsapp"
                onClick={handleWhatsAppChat}
              >
                <MessageSquare size={14} />
                <span>Chat on WhatsApp</span>
              </button>

              <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="btn-support-call">
                <Phone size={13} />
                <span>Call +92 300 1234567</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* You Might Also Like Section */}
      {alternativeHotels && alternativeHotels.length > 0 && (
        <section className="detail-container similar-properties-section" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
          <div className="section-header-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <span className="section-eyebrow" style={{ textTransform: 'uppercase', color: '#0ea5e9', fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>Alternative Properties</span>
              <h2 className="section-title" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', margin: '4px 0 0 0' }}>You Might Also Like</h2>
            </div>
            <button
              type="button"
              className="view-all-link-btn"
              onClick={() => router.push('/#hotels')}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', color: '#0ea5e9', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
            >
              View All Properties <ArrowRight size={14} />
            </button>
          </div>
          
          <div className="hotels-4-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {alternativeHotels.map((altHotel) => (
              <HotelCard key={altHotel.id} hotel={altHotel} />
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="hotel-lightbox-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxOpen(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setLightboxOpen(false);
            if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
            if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
          }}
          tabIndex={0}
          ref={(el) => el && el.focus()}
        >
          {/* Close Button */}
          <button
            className="lightbox-close-btn"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close gallery"
          >
            <X size={22} />
          </button>

          {/* Counter */}
          <div className="lightbox-counter">
            {lightboxIndex + 1} / {galleryItems.length}
          </div>

          {/* Prev Button */}
          <button
            className="lightbox-nav-btn lightbox-nav-prev"
            onClick={() => setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Main Image */}
          <div className="lightbox-image-wrapper">
            <img
              src={galleryItems[lightboxIndex]}
              alt={`${hotel.name} - Photo ${lightboxIndex + 1}`}
              className="lightbox-main-image"
            />
          </div>

          {/* Next Button */}
          <button
            className="lightbox-nav-btn lightbox-nav-next"
            onClick={() => setLightboxIndex((prev) => (prev + 1) % galleryItems.length)}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Thumbnail Strip */}
          <div className="lightbox-thumbs-strip">
            {galleryItems.map((imgUrl, idx) => (
              <div
                key={`lb-thumb-${idx}`}
                className={`lightbox-thumb ${idx === lightboxIndex ? 'lightbox-thumb-active' : ''}`}
                onClick={() => setLightboxIndex(idx)}
              >
                <img src={imgUrl} alt={`Thumb ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}