export const HOLIDAY_PACKAGES = [];


export const DESTINATIONS = [
  { key: 'all', label: 'All Destinations' },
  { key: 'Dubai, UAE', label: 'Dubai, UAE' },
  { key: 'Baku, Azerbaijan', label: 'Baku, Azerbaijan' },
  { key: 'Singapore', label: 'Singapore' },
  { key: 'Istanbul, Turkey', label: 'Istanbul, Turkey' },
  { key: 'Makkah, Saudi Arabia', label: 'Makkah, Saudi Arabia' },
  { key: 'Madinah, Saudi Arabia', label: 'Madinah, Saudi Arabia' },
  { key: 'Hunza, Pakistan', label: 'Hunza, Pakistan' },
];

export const PRICE_RANGES = [
  { key: 'all', label: 'All Prices', min: 0, max: Infinity },
  { key: 'under60', label: 'Under PKR 60,000', min: 0, max: 60000 },
  { key: '60to120', label: 'PKR 60,000 – 120,000', min: 60000, max: 120000 },
  { key: '120to200', label: 'PKR 120,000 – 200,000', min: 120000, max: 200000 },
  { key: 'above200', label: 'PKR 200,000+', min: 200000, max: Infinity },
];
