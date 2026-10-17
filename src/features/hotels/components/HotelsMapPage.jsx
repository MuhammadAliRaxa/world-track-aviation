'use client';

// Hotels Map page component with live API integration & real geodesic distance
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import 'leaflet/dist/leaflet.css';
import {
  Search,
  ChevronLeft,
  Maximize2,
  Minimize2,
  Plus,
  Minus,
  Navigation,
  X,
  ArrowRight,
  MapPin,
  Compass,
} from 'lucide-react';
import { AppBar } from '../../../shared/components/AppBar';
import { Footer } from '../../../shared/components/Footer';
import { Modals } from '../../../shared/components/Modals';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { HOLY_CENTERS, DUAL_CITIES_BOUNDS } from '../data/hotelsMapData';
import { hotelService } from '../../../services/hotel.service';

/**
 * Calculates geodesic distance between two points in meters using Haversine formula
 */
function getHaversineDistanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

function normalizeMapHotel(hotel, index) {
  const rawCity = String(hotel.city || hotel.hotel_city || '').toLowerCase().trim();
  let isMadinah =
    rawCity === 'madinah' ||
    rawCity === 'medina' ||
    rawCity.includes('madin') ||
    rawCity.includes('medin');

  if (!isMadinah && !rawCity) {
    const locStr = String(hotel.location || hotel.address || hotel.category || '').toLowerCase();
    const nameStr = String(hotel.name || hotel.hotel_name || '').toLowerCase();
    isMadinah =
      locStr.includes('madina') ||
      locStr.includes('medina') ||
      nameStr.includes('madinah') ||
      nameStr.includes('madina');
  }

  const city = isMadinah ? 'madinah' : 'makkah';
  const sanctuaryCenter = isMadinah ? [24.4672, 39.6111] : [21.422487, 39.826206];
  const sanctuaryName = isMadinah ? "Prophet's Mosque" : 'Haram';

  let lat = parseFloat(hotel.lat || hotel.latitude);
  let lng = parseFloat(hotel.lng || hotel.longitude);

  const hasValidCoordinates =
    !isNaN(lat) &&
    !isNaN(lng) &&
    lat !== 0 &&
    lng !== 0 &&
    (Math.abs(lat) >= 0.1 || Math.abs(lng) >= 0.1);

  if (!hasValidCoordinates) {
    // Elegant procedural fallback in golden angle spiral around sanctuary
    const angle = (index || 0) * 2.39996323;
    const radius = 0.0015 + ((index || 0) % 7) * 0.0008;
    lat = sanctuaryCenter[0] + Math.cos(angle) * radius;
    lng = sanctuaryCenter[1] + Math.sin(angle) * radius;
  }

  const rawName = hotel.hotel_name || hotel.name || 'Verified Hotel';
  const shortName = rawName.length > 20 ? rawName.substring(0, 18) + '...' : rawName;
  const hotelSlug = hotel.slug || hotel.seo?.url_slug || hotel.id;

  // Real-time geodesic distance calculation from the Holy Sanctuary
  const computedMeters = getHaversineDistanceMeters(lat, lng, sanctuaryCenter[0], sanctuaryCenter[1]);
  const hasCustomDistance =
    hotel.distance &&
    isNaN(Number(hotel.distance)) &&
    !/^\d+$/.test(String(hotel.distance).trim());

  const formattedDistance = hasCustomDistance
    ? hotel.distance
    : `${computedMeters}m from ${sanctuaryName}`;

  return {
    id: hotel.id || String(index + 1),
    slug: hotelSlug,
    name: rawName,
    shortName,
    city,
    badge: /economy/i.test(hotel.category || '')
      ? 'ECONOMY'
      : (hotel.tag || (hotel.stars ? `${hotel.stars} STARS` : 'VERIFIED')),
    distance: formattedDistance,
    distanceMeters: computedMeters,
    price: hotel.price || (hotel.min_rate ? `SAR ${hotel.min_rate}` : 'Rates on Booking'),
    unit: hotel.unit || '/ night',
    image: hotel.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [lat, lng],
    description: hotel.description || `Experience comfortable lodging at ${rawName}.`,
    gate: hotel.address || hotel.hotel_address || 'Haram Walkway',
    stars: hotel.stars || 4,
  };
}

export function HotelsMapPage({
  h1 = 'Our Verified Hotels on the Map',
  heroIntro = "See exactly where each of our verified hotels sits in relation to the Haram in Makkah or Madinah before you commit to a booking. Every pin on this map reflects real availability, not a generic listing, so you know what's actually within walking distance of the Haramain.",
  initialHotels = [],
} = {}) {
  const router = useRouter();

  // State
  const [selectedCity, setSelectedCity] = useState('all'); // 'all' | 'makkah' | 'madinah'
  const [activeHotel, setActiveHotel] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 800);
  const [mapStyle, setMapStyle] = useState('satellite'); // 'street' | 'satellite' | 'night'
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCompactZoom, setIsCompactZoom] = useState(false);

  const [mapHotels, setMapHotels] = useState(() =>
    Array.isArray(initialHotels) && initialHotels.length > 0
      ? initialHotels.map(normalizeMapHotel)
      : []
  );
  const [loading, setLoading] = useState(
    !(Array.isArray(initialHotels) && initialHotels.length > 0)
  );

  // Fetch live API Hotels on mount ONLY if server did not provide initialHotels
  useEffect(() => {
    if (Array.isArray(initialHotels) && initialHotels.length > 0) {
      return;
    }

    let isMounted = true;
    setLoading(true);
    hotelService
      .getHotels()
      .then((items) => {
        if (!isMounted) return;
        const apiHotels = Array.isArray(items) && items.length > 0 ? items.map(normalizeMapHotel) : [];
        setMapHotels(apiHotels);
      })
      .catch((err) => {
        console.error('[HotelsMapPage] Error fetching hotels:', err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [initialHotels]);

  // Leaflet refs
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const tileLayerRef = useRef(null);
  const markersLayerGroupRef = useRef(null);
  const circlesLayerGroupRef = useRef(null);
  const leafletRef = useRef(null);
  const markersMapRef = useRef(new Map());

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filtered hotels based on city and search query
  const filteredHotels = mapHotels.filter((hotel) => {
    if (selectedCity !== 'all' && hotel.city !== selectedCity) {
      return false;
    }
    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase().trim();
      return (
        (hotel.name || '').toLowerCase().includes(q) ||
        (hotel.distance || '').toLowerCase().includes(q) ||
        (hotel.gate || '').toLowerCase().includes(q) ||
        (hotel.description || '').toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Tile layer configurations (100% free, no API key, no watermarks)
  const getTileConfig = (style) => {
    switch (style) {
      case 'satellite':
        return {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          attribution: 'Esri, Maxar, Earthstar Geographics',
          maxZoom: 19,
        };
      case 'night':
        return {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
          attribution: 'Esri, Garmin, &copy; OpenStreetMap contributors',
          maxZoom: 19,
        };
      case 'street':
      default:
        return {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
          attribution: 'Esri, HERE, Garmin, &copy; OpenStreetMap contributors',
          maxZoom: 19,
        };
    }
  };

  // Render Holy Centers and Hotel Marker Pins
  const renderCenterAndPins = useCallback((L, map, cityKey, currentActiveId) => {
    if (!circlesLayerGroupRef.current || !markersLayerGroupRef.current) return;

    circlesLayerGroupRef.current.clearLayers();
    markersLayerGroupRef.current.clearLayers();
    markersMapRef.current.clear();

    const citiesToRender =
      cityKey === 'all'
        ? ['makkah', 'madinah']
        : [cityKey === 'madinah' ? 'madinah' : 'makkah'];

    // 1. Holy Center Concentric Radar Rings & Halos
    citiesToRender.forEach((cKey) => {
      const centerInfo = HOLY_CENTERS[cKey];
      const isMakkah = cKey === 'makkah';
      const ringColor = isMakkah ? '#f59e0b' : '#10b981';
      const ringFill = isMakkah ? 'rgba(251, 191, 36, 0.18)' : 'rgba(16, 185, 129, 0.15)';

      // Inner Glowing Aura Circle
      const innerAura = L.circle(centerInfo.coordinates, {
        radius: 95,
        color: ringColor,
        weight: 1.5,
        fillColor: ringFill,
        fillOpacity: 0.35,
      });
      circlesLayerGroupRef.current.addLayer(innerAura);

      // Radii concentric rings (180m, 320m)
      const midRing = L.circle(centerInfo.coordinates, {
        radius: 180,
        color: ringColor,
        weight: 1.5,
        dashArray: '6, 6',
        fillColor: 'transparent',
      });
      circlesLayerGroupRef.current.addLayer(midRing);

      const outerRing = L.circle(centerInfo.coordinates, {
        radius: 320,
        color: ringColor,
        weight: 1.5,
        dashArray: '6, 6',
        fillColor: 'transparent',
      });
      circlesLayerGroupRef.current.addLayer(outerRing);

      // Holy Center Landmark Pin (Kaaba or Prophet's Mosque)
      const holyIconHtml = `
        <div class="hm-center-landmark ${isMakkah ? 'makkah' : 'madinah'}">
          <div class="hm-center-icon-box">
            ${isMakkah
          ? '<span class="hm-kaaba-symbol">🕋</span>'
          : '<span class="hm-dome-symbol">🕌</span>'
        }
          </div>
          <div class="hm-center-label-pill">
            ${centerInfo.name}
          </div>
        </div>
      `;

      const holyCenterIcon = L.divIcon({
        className: 'hm-custom-center-divicon',
        html: holyIconHtml,
        iconSize: [160, 70],
        iconAnchor: [80, 35],
      });

      const holyCenterMarker = L.marker(centerInfo.coordinates, {
        icon: holyCenterIcon,
        zIndexOffset: 100,
      });

      holyCenterMarker.on('click', () => {
        if (map.getZoom() < 13) {
          setSelectedCity(cKey);
          map.flyTo(centerInfo.coordinates, 16, { duration: 1.0 });
        }
      });

      circlesLayerGroupRef.current.addLayer(holyCenterMarker);
    });

    // 2. Hotel Pins
    const hotelsToDisplay = mapHotels.filter((h) => {
      const matchesCity = cityKey === 'all' ? true : h.city === cityKey;
      if (!matchesCity) return false;
      if (debouncedSearch.trim()) {
        const q = debouncedSearch.toLowerCase().trim();
        return (
          (h.name || '').toLowerCase().includes(q) ||
          (h.distance || '').toLowerCase().includes(q) ||
          (h.gate || '').toLowerCase().includes(q) ||
          (h.description || '').toLowerCase().includes(q)
        );
      }
      return true;
    });

    hotelsToDisplay.forEach((hotel) => {
      const isActive = hotel.id === currentActiveId;
      const markerHtml = `
        <div class="hm-hotel-marker-pill ${isActive ? 'active' : ''}" data-hotel-id="${hotel.id}">
          <span class="hm-marker-text">${hotel.shortName}</span>
          <div class="hm-marker-stem"></div>
        </div>
      `;

      const hotelIcon = L.divIcon({
        className: 'hm-custom-hotel-divicon',
        html: markerHtml,
        iconSize: [140, 36],
        iconAnchor: [70, 36],
      });

      const marker = L.marker(hotel.coordinates, {
        icon: hotelIcon,
        zIndexOffset: isActive ? 600 : 200,
      });

      marker.on('click', () => {
        handleSelectHotel(hotel);
      });

      markersLayerGroupRef.current.addLayer(marker);
      markersMapRef.current.set(hotel.id, marker);
    });
  }, [mapHotels, debouncedSearch]);

  // Handle Hotel Selection with instantaneous DOM class toggle (No layer thrashing)
  const handleSelectHotel = useCallback((hotel) => {
    setActiveHotel(hotel);
    setIsCardVisible(true);

    if (mapInstanceRef.current) {
      const targetLat = hotel.coordinates[0] - 0.001;
      const targetLng = hotel.coordinates[1];
      mapInstanceRef.current.flyTo([targetLat, targetLng], 16.5, {
        duration: 0.8,
      });

      // Update DOM classes directly without rebuilding entire map layers
      if (mapContainerRef.current) {
        const previousActiveEl = mapContainerRef.current.querySelector('.hm-hotel-marker-pill.active');
        if (previousActiveEl) {
          previousActiveEl.classList.remove('active');
        }
      }

      const activeMarker = markersMapRef.current.get(hotel.id);
      if (activeMarker) {
        const el = activeMarker.getElement()?.querySelector('.hm-hotel-marker-pill');
        if (el) el.classList.add('active');
        activeMarker.setZIndexOffset(600);
      }
    }
  }, []);

  // Initialize Leaflet Map
  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (typeof window === 'undefined' || !mapContainerRef.current) return;

      const L = await import('leaflet');
      leafletRef.current = L;

      if (!isMounted || !mapContainerRef.current) return;
      if (mapInstanceRef.current) return;

      const isAll = selectedCity === 'all';
      const initialCenter = isAll
        ? [22.9448, 39.7186]
        : selectedCity === 'madinah'
          ? HOLY_CENTERS.madinah.coordinates
          : HOLY_CENTERS.makkah.coordinates;

      const map = L.map(mapContainerRef.current, {
        center: initialCenter,
        zoom: isAll ? 7 : 16,
        minZoom: 5,
        maxZoom: 19,
        zoomControl: false,
        attributionControl: false,
      });

      if (isAll) {
        map.fitBounds(DUAL_CITIES_BOUNDS, {
          padding: [50, 50],
          maxZoom: 8,
        });
      }

      mapInstanceRef.current = map;

      // Base tile layer
      const tileConfig = getTileConfig('satellite');
      const tileLayer = L.tileLayer(tileConfig.url, {
        attribution: tileConfig.attribution,
        maxZoom: tileConfig.maxZoom,
        subdomains: tileConfig.subdomains || 'abc',
      }).addTo(map);

      tileLayerRef.current = tileLayer;

      // Layer groups
      circlesLayerGroupRef.current = L.layerGroup().addTo(map);
      markersLayerGroupRef.current = L.layerGroup().addTo(map);

      // Render initial center rings and pins
      renderCenterAndPins(L, map, 'all', null);

      // Zoom listener for compact/expanded pin styling
      const checkZoom = () => {
        setIsCompactZoom(map.getZoom() < 14);
      };
      checkZoom();
      map.on('zoomend', checkZoom);

      // Close active card when clicking on empty map area
      map.on('click', () => {
        setIsCardVisible(false);
        setActiveHotel(null);
        if (mapContainerRef.current) {
          const activeEl = mapContainerRef.current.querySelector('.hm-hotel-marker-pill.active');
          if (activeEl) activeEl.classList.remove('active');
        }
      });
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Tile Layer when mapStyle changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const applyTileLayer = (L) => {
      if (!mapInstanceRef.current) return;
      if (tileLayerRef.current) {
        mapInstanceRef.current.removeLayer(tileLayerRef.current);
      }

      const tileConfig = getTileConfig(mapStyle);
      const newLayer = L.tileLayer(tileConfig.url, {
        attribution: tileConfig.attribution,
        maxZoom: tileConfig.maxZoom,
        subdomains: tileConfig.subdomains || 'abc',
      }).addTo(mapInstanceRef.current);

      newLayer.bringToBack();
      tileLayerRef.current = newLayer;
    };

    if (leafletRef.current) {
      applyTileLayer(leafletRef.current);
    } else {
      import('leaflet').then((L) => {
        leafletRef.current = L;
        applyTileLayer(L);
      });
    }
  }, [mapStyle]);

  // Handle City Tab Change
  const handleCityChange = (cityKey) => {
    setSelectedCity(cityKey);
    setActiveHotel(null);
    setIsCardVisible(false);

    if (mapInstanceRef.current) {
      const applyChange = (L) => {
        if (cityKey === 'all') {
          mapInstanceRef.current.flyToBounds(DUAL_CITIES_BOUNDS, {
            padding: [50, 50],
            duration: 1.2,
            maxZoom: 8,
          });
        } else {
          const targetCenter =
            cityKey === 'madinah'
              ? HOLY_CENTERS.madinah.coordinates
              : HOLY_CENTERS.makkah.coordinates;

          mapInstanceRef.current.flyTo(targetCenter, 16, {
            duration: 1.0,
          });
        }

        renderCenterAndPins(L, mapInstanceRef.current, cityKey, null);
      };

      if (leafletRef.current) {
        applyChange(leafletRef.current);
      } else {
        import('leaflet').then((L) => {
          leafletRef.current = L;
          applyChange(L);
        });
      }
    }
  };

  // Zoom helpers
  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  // Fullscreen toggle
  const toggleEnlarge = () => {
    setIsEnlarged((prev) => !prev);
  };

  // Lock body scroll and invalidateSize on enlarge toggle
  useEffect(() => {
    if (isEnlarged) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isEnlarged) {
        setIsEnlarged(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const timers = [50, 150, 300, 500].map((delay) =>
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize({ pan: false, animate: false });
        }
      }, delay)
    );

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      timers.forEach(clearTimeout);
    };
  }, [isEnlarged]);

  // Keep pins updated when search query or mapHotels change
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const L = leafletRef.current;
    if (L) {
      renderCenterAndPins(L, mapInstanceRef.current, selectedCity, activeHotel?.id);
    } else {
      import('leaflet').then((mod) => {
        leafletRef.current = mod;
        renderCenterAndPins(mod, mapInstanceRef.current, selectedCity, activeHotel?.id);
      });
    }
  }, [mapHotels, selectedCity, debouncedSearch, renderCenterAndPins]);

  // Dynamic counts
  const allCount = mapHotels.length;
  const makkahCount = mapHotels.filter((h) => h.city === 'makkah').length;
  const madinahCount = mapHotels.filter((h) => h.city === 'madinah').length;

  return (
    <div className={`hotels-map-page-root ${isEnlarged ? 'hm-is-enlarged' : ''}`}>
      {/* ── 1. TopBar & Hero Banner (Hidden when enlarged) ── */}
      {!isEnlarged && (
        <AppBar
          onOpenContact={() => setIsContactOpen(true)}
          heroContent={
            <div className="tr-hero hm-hero-override">
              <div
                className="tr-hero-bg hm-hero-bg-override"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&auto=format&fit=crop&q=80')",
                }}
              />
              <div className="tr-hero-overlay hm-hero-overlay-dark" />
              <div className="tr-hero-body hm-hero-body-override">
                <h1 className="tr-hero-h1 hm-hero-title">{h1}</h1>
                <p className="tr-hero-intro">{heroIntro}</p>
              </div>
            </div>
          }
        />
      )}

      {/* ── 2. Main Body Container ── */}
      <div className={`hm-main-layout ${isEnlarged ? 'hm-main-enlarged' : ''}`}>
        <div className={isEnlarged ? 'hm-enlarged-container' : 'section-container'}>
          {/* Breadcrumb row */}
          {!isEnlarged && (
            <div className="hm-top-breadcrumb-row">
              <button
                type="button"
                className="hm-back-btn"
                onClick={() => router.push('/our-hotels/')}
              >
                <ChevronLeft size={16} />
                <span>Hotels Map</span>
              </button>
            </div>
          )}

          {/* Filter Pills Bar */}
          <div className={`hm-filter-bar-row ${isEnlarged ? 'hm-filter-bar-enlarged' : ''}`}>
            {isEnlarged && (
              <button
                type="button"
                className="hm-enlarge-exit-btn"
                onClick={toggleEnlarge}
                title="Exit Fullscreen (Esc)"
              >
                <ChevronLeft size={16} />
                <span>Exit Fullscreen</span>
                <kbd className="hm-esc-badge">ESC</kbd>
              </button>
            )}

            <div className="hm-filter-pills-group">
              <button
                type="button"
                className={`hm-filter-pill ${selectedCity === 'all' ? 'active' : ''}`}
                onClick={() => handleCityChange('all')}
              >
                All ({allCount})
              </button>

              <button
                type="button"
                className={`hm-filter-pill ${selectedCity === 'makkah' ? 'active' : ''}`}
                onClick={() => handleCityChange('makkah')}
              >
                <span className="hm-pill-icon">🕋</span>
                <span>Makkah</span>
                <span className="hm-pill-badge">{makkahCount}</span>
              </button>

              <button
                type="button"
                className={`hm-filter-pill ${selectedCity === 'madinah' ? 'active' : ''}`}
                onClick={() => handleCityChange('madinah')}
              >
                <span className="hm-pill-icon">🕌</span>
                <span>Madinah</span>
                <span className="hm-pill-badge">{madinahCount}</span>
              </button>
            </div>

            {/* Enlarge / Fullscreen button */}
            <div className="hm-filter-actions">
              <button
                type="button"
                className="hm-fullscreen-btn"
                onClick={toggleEnlarge}
                title={isEnlarged ? 'Exit Fullscreen (Esc)' : 'Enlarge Map'}
              >
                {isEnlarged ? (
                  <Minimize2 size={16} />
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* ── 3. Interactive Map Canvas Container ── */}
          <div className={`hm-map-card-wrapper ${isEnlarged ? 'hm-map-enlarged' : ''} ${isCompactZoom ? 'hm-compact-zoom' : ''}`}>
            {/* Dedicated Leaflet Map Canvas */}
            <div className="hm-map-canvas" ref={mapContainerRef} />

            {/* Top-Left: Search Bar */}
            <div className="hm-map-overlay-search">
              <Search size={15} className="hm-search-icon" />
              <input
                type="text"
                placeholder="Search hotel, landmark, gate..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="hm-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="hm-search-clear"
                  onClick={() => setSearchQuery('')}
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Top-Center: Map Style Switcher */}
            <div className="hm-map-overlay-styles">
              <button
                type="button"
                className={`hm-style-tab ${mapStyle === 'street' ? 'active' : ''}`}
                onClick={() => setMapStyle('street')}
              >
                Street
              </button>
              <button
                type="button"
                className={`hm-style-tab ${mapStyle === 'satellite' ? 'active' : ''}`}
                onClick={() => setMapStyle('satellite')}
              >
                Satellite
              </button>
              <button
                type="button"
                className={`hm-style-tab ${mapStyle === 'night' ? 'active' : ''}`}
                onClick={() => setMapStyle('night')}
              >
                Night
              </button>
            </div>

            {/* Top-Right: Zoom Controls */}
            <div className="hm-map-overlay-zoom">
              <button
                type="button"
                className="hm-zoom-btn"
                onClick={handleZoomIn}
                title="Zoom In"
              >
                <Plus size={16} />
              </button>
              <div className="hm-zoom-divider" />
              <button
                type="button"
                className="hm-zoom-btn"
                onClick={handleZoomOut}
                title="Zoom Out"
              >
                <Minus size={16} />
              </button>
            </div>

            {filteredHotels.length === 0 && !loading && (
              <div className="hm-empty-notice-toast">
                <MapPin size={14} />
                <span>No verified hotels currently available for this selection.</span>
              </div>
            )}

            {/* Bottom-Right Watermark */}
            <div className="hm-map-watermark">
              Leaflet | WorldTrack Holy Map
            </div>
          </div>

          {/* Bottom-Center: Floating Hotel Card Popup */}
          {activeHotel && isCardVisible && (
            <div className="hm-floating-hotel-popup animate-popup">
              <div className="hm-popup-inner">
                {/* Hotel Thumbnail */}
                <div
                  className="hm-popup-img-wrap"
                  onClick={() => router.push(`/our-hotels/${activeHotel.slug || activeHotel.id}/`)}
                  style={{ cursor: 'pointer' }}
                  title={`View ${activeHotel.name} details`}
                >
                  <img
                    src={activeHotel.image}
                    alt={activeHotel.name}
                    className="hm-popup-img"
                  />
                </div>

                {/* Middle Content */}
                <div
                  className="hm-popup-content"
                  onClick={() => router.push(`/our-hotels/${activeHotel.slug || activeHotel.id}/`)}
                  style={{ cursor: 'pointer' }}
                  title={`View ${activeHotel.name} details`}
                >
                  <div className="hm-popup-badge-row">
                    <span className="hm-popup-category-badge">
                      {activeHotel.badge}
                    </span>
                  </div>

                  <h4 className="hm-popup-title" title={activeHotel.name}>
                    {activeHotel.name}
                  </h4>

                  <div className="hm-popup-distance-row">
                    <Navigation size={12} className="hm-popup-nav-icon" />
                    <span>{activeHotel.distance}</span>
                  </div>

                  <div className="hm-popup-price-row">
                    {/rates on booking/i.test(activeHotel.price) || /contact/i.test(activeHotel.price) ? (
                      <span className="hm-popup-price rates-on-booking">Rates on Booking</span>
                    ) : (
                      <>
                        <span className="hm-popup-price">{activeHotel.price}</span>
                        <span className="hm-popup-unit"> {activeHotel.unit}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Right Side Actions */}
                <div className="hm-popup-actions">
                  <button
                    type="button"
                    className="hm-popup-close-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCardVisible(false);
                      if (mapContainerRef.current) {
                        const activeEl = mapContainerRef.current.querySelector('.hm-hotel-marker-pill.active');
                        if (activeEl) activeEl.classList.remove('active');
                      }
                    }}
                    title="Close"
                  >
                    <X size={15} />
                  </button>

                  <button
                    type="button"
                    className="hm-popup-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/our-hotels/${activeHotel.slug || activeHotel.id}/`);
                    }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── 4. Newsletter & Footer Section ── */}
      {!isEnlarged && <Footer onOpenContact={() => setIsContactOpen(true)} />}

      {/* ── 5. Global Modals ── */}
      <Modals
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
      />
    </div>
  );
}
