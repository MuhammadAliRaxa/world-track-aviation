export const UMRAH_PACKAGES = [];

export const UMRAH_FILTER_CATEGORIES = [
  { key: 'all', label: 'All Packages', count: 12 },
  { key: 'five_star', label: 'Five star Umrah package', count: 6 },
  { key: 'four_star', label: 'Four star Umrah package', count: 2 },
  { key: 'three_star', label: 'Three star Umrah Package', count: 2 },
];

export const UMRAH_PRICE_TIERS = [
  { key: 'all', label: 'All Prices', sub: '', min: 0, max: Infinity },
  { key: 'under60', label: 'Under PKR 60,000', sub: 'Smart & Budget Value', min: 0, max: 60000 },
  { key: '60to120', label: 'PKR 60,000 – 120,000', sub: '4★ & 3★ Comfort', min: 60000, max: 120000 },
  { key: '120to200', label: 'PKR 120,000 – 200,000', sub: 'Haram & Sea Views', min: 120000, max: 200000 },
  { key: 'above200', label: 'PKR 200,000+', sub: 'Royal Suites & VVIP', min: 200000, max: Infinity },
];

export const UMRAH_STAR_RATINGS = [
  { stars: 5, label: '5 Stars', count: 6 },
  { stars: 4, label: '4 Stars', count: 2 },
  { stars: 3, label: '3 Stars', count: 2 },
];
