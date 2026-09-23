// High-performance network CDN images for hotels (Fast global delivery, cached at edge)
const hotelSing1 = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';
const hotelSing2 = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80';
const hotelSing3 = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80';
const hotelSing4 = 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80';
const hotelMakkah = 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80';
const hotelMadina = 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80';
const hotelDubai = 'https://images.unsplash.com/photo-1512953706827-e64e9f88bf19?auto=format&fit=crop&w=800&q=80';
const hotelBaku = 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80';

export const HOTELS_DATA = [];

export const HOTEL_DESTINATIONS_FILTER = [
  { key: 'all', label: 'All Destinations', count: 12 },
  { key: 'makkah', label: 'Makkah, Saudi Arabia', count: 2 },
  { key: 'madinah', label: 'Madinah, Saudi Arabia', count: 2 },
  { key: 'dubai', label: 'Dubai, UAE', count: 2 },
  { key: 'singapore', label: 'Singapore', count: 4 },
  { key: 'baku', label: 'Baku, Azerbaijan', count: 1 },
  { key: 'istanbul', label: 'Istanbul, Turkey', count: 1 }
];

export const HOTEL_PRICE_TIERS = [
  { key: 'all', label: 'All Prices', min: 0, max: Infinity },
  { key: 'under-60k', label: 'Under PKR 60,000', sub: 'Smart & Budget Value', min: 0, max: 60000 },
  { key: '60k-120k', label: 'PKR 60,000 - 120,000', sub: '4★ & 5★ Comfort', min: 60000, max: 120000 },
  { key: '120k-200k', label: 'PKR 120,000 - 200,000', sub: 'Haram & Sea Views', min: 120000, max: 200000 },
  { key: '200k-plus', label: 'PKR 200,000+', sub: 'Royal Suites & Icons', min: 200000, max: Infinity }
];

export const HOTEL_STAR_FILTER = [
  { stars: 5, label: '5 Stars', count: 10 },
  { stars: 4, label: '4 Stars', count: 3 },
  { stars: 3, label: '3 Stars', count: 0 }
];

export const HOTEL_POPULAR_AMENITIES = [
  { id: 'wifi', label: 'Free High-Speed WiFi' },
  { id: 'breakfast', label: 'Breakfast Included' },
  { id: 'pool', label: 'Swimming Pool' },
  { id: 'shuttle', label: 'Haram Shuttle / Transit' },
  { id: 'spa', label: 'Luxury Spa / Wellness' },
  { id: 'dining', label: '24/7 Room Dining' },
  { id: 'transfer', label: 'Airport Transfer' }
];

export const HOTEL_ROOM_OCCUPANCIES = [
  { id: 'double', label: 'Double (2 Guests)' },
  { id: 'triple', label: 'Triple (3 Guests)' },
  { id: 'quad', label: 'Quad (4 Beds / Umrah Family)' },
  { id: 'quint', label: 'Quint (5 Beds / Group Suite)' }
];

const RESORT_IMAGE = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80';
export const HOTELS_CATALOG_12 = [];
