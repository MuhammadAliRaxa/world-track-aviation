'use client';

// Updated: Hotels Map page component with live API integration
import React, { useState, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { useRouter } from 'next/navigation';
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
import { HOTELS_MAP_DATA, HOLY_CENTERS, DUAL_CITIES_BOUNDS } from '../data/hotelsMapData';
import { hotelService } from '../../../services/hotel.service';

const CURATED_MAP_HOTELS = [
  // Makkah verified hotels
  {
    id: 'makkah-clock-royal',
    name: 'Makkah Clock Royal Tower',
    shortName: 'Clock Royal Tower',
    city: 'makkah',
    badge: '5 STARS',
    distance: '50m from Haram',
    price: 'SAR 850',
    unit: '/ night',
    coordinates: [21.4189, 39.8264],
    description: 'Iconic luxury hotel in Abraj Al Bait complex directly facing the Holy Kaaba.',
    gate: 'King Abdulaziz Gate',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'swissotel-makkah',
    name: 'Swissôtel Al Maqam Makkah',
    shortName: 'Swissôtel Al Maqam',
    city: 'makkah',
    badge: '5 STARS',
    distance: '100m from Haram',
    price: 'SAR 720',
    unit: '/ night',
    coordinates: [21.4195, 39.8248],
    description: 'Prestigious Haram-facing tower offering direct covered access to the Holy Mosque.',
    gate: 'Ajyad Tunnel Entrance',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pullman-zamzam-makkah',
    name: 'Pullman Zamzam Makkah',
    shortName: 'Pullman Zamzam',
    city: 'makkah',
    badge: '5 STARS',
    distance: '120m from Haram',
    price: 'SAR 680',
    unit: '/ night',
    coordinates: [21.4198, 39.8255],
    description: 'Modern 5-star sanctuary nestled in the Abraj Al Bait complex overlooking the Grand Mosque.',
    gate: 'King Fahd Gate',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hyatt-regency-makkah',
    name: 'Jabal Omar Hyatt Regency',
    shortName: 'Hyatt Regency Makkah',
    city: 'makkah',
    badge: '5 STARS',
    distance: '200m from Haram',
    price: 'SAR 640',
    unit: '/ night',
    coordinates: [21.4235, 39.8230],
    description: 'Hospitality crafted for pilgrims with effortless prayer access and stunning views.',
    gate: 'Ibrahim Al Khalil Road',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
  },
  // Madinah verified hotels
  {
    id: 'oberoi-madina',
    name: 'The Oberoi Madina',
    shortName: 'The Oberoi Madina',
    city: 'madinah',
    badge: '5 STARS',
    distance: '50m from Nabawi',
    price: 'SAR 790',
    unit: '/ night',
    coordinates: [24.4710, 39.6110],
    description: 'Supreme luxury adjacent to the sacred courtyard of Al-Masjid an-Nabawi.',
    gate: 'Women & Men Courtyard Gates',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dar-al-taqwa-madina',
    name: 'Dar Al Taqwa Hotel Madinah',
    shortName: 'Dar Al Taqwa',
    city: 'madinah',
    badge: '5 STARS',
    distance: '70m from Nabawi',
    price: 'SAR 650',
    unit: '/ night',
    coordinates: [24.4700, 39.6105],
    description: 'Unrivaled positioning just steps away from the Prophet’s Rawdah entrance.',
    gate: 'Bab Al Salam',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
  },
];

function normalizeMapHotel(hotel, index) {
  const locStr = String(hotel.location || hotel.category || hotel.address || hotel.city || '').toLowerCase();
  const nameStr = String(hotel.name || '').toLowerCase();
  const isMadinah =
    locStr.includes('madina') ||
    locStr.includes('medina') ||
    nameStr.includes('madinah') ||
    nameStr.includes('madina');
  const city = isMadinah ? 'madinah' : 'makkah';

  let lat = parseFloat(hotel.lat);
  let lng = parseFloat(hotel.lng);

  if (!lat || !lng || isNaN(lat) || isNaN(lng) || (Math.abs(lat) < 0.1 && Math.abs(lng) < 0.1)) {
    const center = isMadinah ? [24.4672, 39.6111] : [21.422487, 39.826206];
    const angle = index * 2.39996323;
    const radius = 0.0012 + (index % 6) * 0.0009;
    lat = center[0] + Math.cos(angle) * radius;
    lng = center[1] + Math.sin(angle) * radius;
  }

  const rawName = hotel.name || 'Verified Hotel';
  const shortName = rawName.length > 20 ? rawName.substring(0, 18) + '...' : rawName;

  return {
    id: hotel.id || String(index + 1),
    name: rawName,
    shortName,
    city,
    badge: hotel.tag || (hotel.stars ? `${hotel.stars} STARS` : 'VERIFIED'),
    distance: hotel.distance || (isMadinah ? '250m from Markaziah' : '180m from Haram'),
    price: hotel.price || 'Contact for Price',
    unit: hotel.unit || '/ night',
    image: hotel.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [lat, lng],
    description: hotel.description || `Experience comfortable lodging at ${rawName}.`,
    gate: hotel.address || 'Haram Walkway',
    stars: hotel.stars || 4,
  };
}

export function HotelsMapPage() {
  const router = useRouter();

  // State
  const [selectedCity, setSelectedCity] = useState('all'); // 'all' | 'makkah' | 'madinah'
  const [activeHotel, setActiveHotel] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [mapStyle, setMapStyle] = useState('satellite'); // 'street' | 'satellite' | 'night'
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [mapHotels, setMapHotels] = useState(CURATED_MAP_HOTELS);
  const [loading, setLoading] = useState(true);

  // Fetch API Hotels on mount
  useEffect(() => {
    let isMounted = true;
    hotelService
      .getHotels()
      .then((items) => {
        if (!isMounted) return;
        const apiHotels = Array.isArray(items) && items.length > 0 ? items.map(normalizeMapHotel) : [];
        const hasMakkah = apiHotels.some((h) => h.city === 'makkah');
        const hasMadinah = apiHotels.some((h) => h.city === 'madinah');

        const supplemental = [];
        if (!hasMakkah) {
          supplemental.push(...CURATED_MAP_HOTELS.filter((h) => h.city === 'makkah'));
        }
        if (!hasMadinah) {
          supplemental.push(...CURATED_MAP_HOTELS.filter((h) => h.city === 'madinah'));
        }

        setMapHotels([...apiHotels, ...supplemental]);
      })
      .catch(() => {})
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Refs for Leaflet
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const tileLayerRef = useRef(null);
  const markersLayerGroupRef = useRef(null);
  const circlesLayerGroupRef = useRef(null);
  const centerMarkerRef = useRef(null);

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

  // Tile layer URLs
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
          url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
          attribution: '&copy; OpenStreetMap &copy; CARTO',
          maxZoom: 19,
          subdomains: 'abcd',
        };
      case 'street':
      default:
        return {
          url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          fallbackUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
          maxZoom: 19,
          subdomains: 'abcd',
        };
    }
  };

  // Initialize Leaflet Map
  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (typeof window === 'undefined' || !mapContainerRef.current) return;

      // Dynamically import Leaflet
      const L = await import('leaflet');
      await import('leaflet/dist/leaflet.css');

      if (!isMounted || !mapContainerRef.current) return;

      // Prevent re-initialization
      if (mapInstanceRef.current) {
        return;
      }

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

      // Layer groups for markers and circles
      circlesLayerGroupRef.current = L.layerGroup().addTo(map);
      markersLayerGroupRef.current = L.layerGroup().addTo(map);

      // Render initial center rings and pins (no default hotel selected)
      renderCenterAndPins(L, map, 'all', null);
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

    import('leaflet').then((L) => {
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

      // Move tileLayer to back so markers remain visible
      newLayer.bringToBack();
      tileLayerRef.current = newLayer;
    });
  }, [mapStyle]);

  // Render Holy Center (Kaaba/Prophet's Mosque) and Hotel Marker Pins
  const renderCenterAndPins = (L, map, cityKey, currentActiveId) => {
    if (!circlesLayerGroupRef.current || !markersLayerGroupRef.current) return;

    circlesLayerGroupRef.current.clearLayers();
    markersLayerGroupRef.current.clearLayers();

    const citiesToRender =
      cityKey === 'all'
        ? ['makkah', 'madinah']
        : [cityKey === 'madinah' ? 'madinah' : 'makkah'];

    // 1. Holy Center Concentric Dashed Radar Rings & Halo
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

      // Radii concentric rings matching screenshot (180m, 320m)
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
            ${
              isMakkah
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
        zIndexOffset: isActive ? 500 : 200,
      });

      marker.on('click', () => {
        handleSelectHotel(hotel);
      });

      markersLayerGroupRef.current.addLayer(marker);
    });
  };

  // Handle Hotel Selection
  const handleSelectHotel = (hotel) => {
    setActiveHotel(hotel);
    setIsCardVisible(true);

    if (mapInstanceRef.current) {
      import('leaflet').then((L) => {
        // Pan smoothly with slight offset downward so card doesn't cover marker
        const targetLat = hotel.coordinates[0] - 0.001;
        const targetLng = hotel.coordinates[1];
        mapInstanceRef.current.flyTo([targetLat, targetLng], 16.5, {
          duration: 0.8,
        });

        renderCenterAndPins(L, mapInstanceRef.current, selectedCity, hotel.id);
      });
    }
  };

  // Handle City Tab Change
  const handleCityChange = (cityKey) => {
    setSelectedCity(cityKey);
    setActiveHotel(null);
    setIsCardVisible(false);

    if (mapInstanceRef.current) {
      import('leaflet').then((L) => {
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
      });
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

  // Enlarge / Expand mode toggle (Matches user's reference view)
  const toggleEnlarge = () => {
    setIsEnlarged((prev) => {
      const next = !prev;
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 150);
      return next;
    });
  };

  // Keep pins updated when search query, mapHotels, or city change
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    import('leaflet').then((L) => {
      renderCenterAndPins(L, mapInstanceRef.current, selectedCity, activeHotel?.id);
    });
  }, [mapHotels, selectedCity, debouncedSearch, activeHotel]);

  // Dynamic filter pill counts
  const allCount = mapHotels.length;
  const makkahCount = mapHotels.filter((h) => h.city === 'makkah').length;
  const madinahCount = mapHotels.filter((h) => h.city === 'madinah').length;

  return (
    <div className={`hotels-map-page-root ${isEnlarged ? 'hm-is-enlarged' : ''}`}>
      {/* ── 1. TopBar & Floating Navbar Hero Banner (Hidden when enlarged) ── */}
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
                <h1 className="tr-hero-h1 hm-hero-title">Our Verified Hotels on the Map</h1>
                <p className="tr-hero-intro">
                  See exactly where each of our verified hotels sits in relation to the Haram in Makkah or Madinah before you commit to a booking. Every pin on this map reflects real availability, not a generic listing, so you know what&apos;s actually within walking distance of the Haramain.
                </p>
              </div>
            </div>
          }
        />
      )}

      {/* ── 2. Main Body Container ── */}
      <div className={`hm-main-layout ${isEnlarged ? 'hm-main-enlarged' : ''}`}>
        <div className={isEnlarged ? 'hm-enlarged-container' : 'section-container'}>
          {/* Back button row (Hidden when enlarged) */}
          {!isEnlarged && (
            <div className="hm-top-breadcrumb-row">
              <button
                type="button"
                className="hm-back-btn"
                onClick={() => router.push('/hotels')}
              >
                <ChevronLeft size={16} />
                <span>Hotels Map</span>
              </button>
            </div>
          )}

          {/* Filter Pills Bar */}
          <div className={`hm-filter-bar-row ${isEnlarged ? 'hm-filter-bar-enlarged' : ''}`}>
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
                title={isEnlarged ? 'Exit Enlarge' : 'Enlarge Map'}
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
          <div
            className={`hm-map-card-wrapper ${isEnlarged ? 'hm-map-enlarged' : ''}`}
            ref={mapContainerRef}
          >
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

            {/* Bottom-Center: Floating Hotel Card Popup (Exact Match to Screenshot) */}
            {activeHotel && isCardVisible && (
              <div className="hm-floating-hotel-popup animate-popup">
                <div className="hm-popup-inner">
                  {/* Hotel Thumbnail */}
                  <div
                    className="hm-popup-img-wrap"
                    onClick={() => router.push(`/hotels/${activeHotel.id}`)}
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
                    onClick={() => router.push(`/hotels/${activeHotel.id}`)}
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
                      <span className="hm-popup-price">{activeHotel.price}</span>
                      <span className="hm-popup-unit"> {activeHotel.unit}</span>
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
                        router.push(`/hotels/${activeHotel.id}`);
                      }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom-Right Watermark */}
            <div className="hm-map-watermark">
              Leaflet | WorldTrack Holy Map
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. Newsletter & Footer Section ── */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* ── 5. Global Modals ── */}
      <Modals
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
      />
    </div>
  );
}
