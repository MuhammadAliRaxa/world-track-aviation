export const VISA_CATEGORIES = [
  { id: 'all', label: 'All Visas' },
  { id: 'fast-track', label: '⚡ Popular Fast-Track' },
  { id: 'middle-east', label: 'Middle East' },
  { id: 'central-asia', label: 'Central Asia' },
  { id: 'far-east', label: 'Far East' },
  { id: 'europe-uk', label: 'Europe & UK' }
];

export const VISA_DATA = [];

export const VISA_BENEFITS = [
  {
    id: 'audit',
    icon: 'shield-check',
    title: 'Pre-Audit Document Verification',
    description: 'Our visa assistance starts before your file even reaches the embassy. Every passport copy and photo goes through document verification first, so we catch mistakes that usually cause rejections.',
    bgColor: '#ffffff',
    borderColor: '#e2e8f0',
    iconColor: '#0284c7'
  },
  {
    id: 'fast-track',
    icon: 'zap',
    title: 'Fast-Track 24–48h Delivery',
    description: "Once your e-Visa is approved, it's sent straight to your email and WhatsApp within a day or two, so you're not left waiting on visa processing updates.",
    bgColor: '#fffdf5',
    borderColor: '#fef08a',
    iconColor: '#d97706'
  },
  {
    id: 'case-officer',
    icon: 'headphones',
    title: 'Dedicated Visa Case Officer',
    description: 'One visa case officer manages your entire application, offering direct visa assistance for Schengen, UK, and USA visa applications from start to finish.',
    bgColor: '#f0fdf9',
    borderColor: '#99f6e4',
    iconColor: '#0d9488'
  }
];

export const VISA_COUNTRIES_FILTER = [
  { key: 'all', label: 'All Countries', count: 18 },
  { key: 'dubai', label: 'Dubai / UAE', count: 1 },
  { key: 'baku', label: 'Baku, Azerbaijan', count: 1 },
  { key: 'malaysia', label: 'Malaysia', count: 1 },
  { key: 'singapore', label: 'Singapore', count: 1 },
  { key: 'saudi', label: 'Saudi Arabia', count: 1 },
  { key: 'schengen', label: 'Europe / Schengen', count: 3 },
  { key: 'uk', label: 'United Kingdom', count: 1 },
  { key: 'canada', label: 'Canada', count: 4 },
  { key: 'australia', label: 'Australia', count: 1 },
  { key: 'bahrain', label: 'Bahrain', count: 1 },
  { key: 'thailand', label: 'Thailand', count: 1 },
  { key: 'turkey', label: 'Turkey', count: 1 }
];

export const VISA_PRICE_TIERS = [
  { key: 'all', label: 'All Prices', min: 0, max: Infinity },
  { key: 'under-60k', label: 'Under PKR 60,000', sub: 'Smart & Budget Value', min: 0, max: 60000 },
  { key: '60k-120k', label: 'PKR 60,000 - 120,000', sub: '4★ & 5★ Comfort', min: 60000, max: 120000 },
  { key: '120k-200k', label: 'PKR 120,000 - 200,000', sub: 'Haram & Sea Views', min: 120000, max: 200000 },
  { key: '200k-plus', label: 'PKR 200,000+', sub: 'Royal Suites & Icons', min: 200000, max: Infinity }
];

export const VISA_CATALOG_12 = [
  {
    id: 'australia-tourist',
    title: 'Australia Tourist Visa',
    country: 'Australia',
    countryKey: 'singapore',
    duration: '15-20 days',
    pricePKR: '55,000',
    priceNumeric: 55000,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #f59e0b 0%, #84cc16 35%, #10b981 55%, #06b6d4 75%, #0080f6 100%)'
  },
  {
    id: 'canada-visitor-1',
    title: 'Canada Visitor Visa',
    country: 'Canada',
    countryKey: 'dubai',
    duration: '10-15 days',
    pricePKR: '60,000',
    priceNumeric: 60000,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1517935703635-27c946452995?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #ef4444 0%, #f97316 40%, #eab308 70%, #10b981 100%)'
  },
  {
    id: 'canada-visitor-2',
    title: 'Canada Visitor Visa',
    country: 'Canada',
    countryKey: 'malaysia',
    duration: '10-15 days',
    pricePKR: '60,000',
    priceNumeric: 60000,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #ec4899 100%)'
  },
  {
    id: 'schengen-1',
    title: 'Schengen Visa',
    country: 'Europe / Schengen',
    countryKey: 'singapore',
    duration: '10-15 days',
    pricePKR: '50,000',
    priceNumeric: 50000,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%)'
  },
  {
    id: 'schengen-2',
    title: 'Schengen Visa',
    country: 'Europe / Schengen',
    countryKey: 'indonesia',
    duration: '10-15 days',
    pricePKR: '50,000',
    priceNumeric: 50000,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)'
  },
  {
    id: 'dubai-uae',
    title: 'Dubai (UAE) Visit Visa',
    country: 'United Arab Emirates',
    countryKey: 'dubai',
    duration: '2-3 days',
    pricePKR: '44,500',
    priceNumeric: 44500,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #f59e0b 0%, #84cc16 35%, #10b981 55%, #06b6d4 75%, #0080f6 100%)'
  },
  {
    id: 'new-zealand-visitor',
    title: 'New Zealand Visitor Visa',
    country: 'New Zealand',
    countryKey: 'singapore',
    duration: '20-25 days',
    pricePKR: '65,000',
    priceNumeric: 65000,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #6366f1 100%)'
  },
  {
    id: 'canada-visitor-3',
    title: 'Canada Visitor Visa',
    country: 'Canada',
    countryKey: 'malaysia',
    duration: '10-15 days',
    pricePKR: '60,000',
    priceNumeric: 60000,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #f59e0b 0%, #10b981 50%, #0080f6 100%)'
  },
  {
    id: 'canada-visitor-4',
    title: 'Canada Visitor Visa',
    country: 'Canada',
    countryKey: 'indonesia',
    duration: '10-15 days',
    pricePKR: '60,000',
    priceNumeric: 60000,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1519832979-6fa011b87667?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)'
  },
  {
    id: 'singapore-tourist',
    title: 'Singapore Tourist Visa',
    country: 'Singapore',
    countryKey: 'singapore',
    duration: '3-5 days',
    pricePKR: '48,000',
    priceNumeric: 48000,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)'
  },
  {
    id: 'azerbaijan',
    title: 'Baku, Azerbaijan Express Visa',
    country: 'Azerbaijan',
    countryKey: 'baku',
    duration: '3 days',
    pricePKR: '16,500',
    priceNumeric: 16500,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%)'
  },
  {
    id: 'bahrain-tourist',
    title: 'Bahrain Tourist Visa',
    country: 'Bahrain',
    countryKey: 'bahrain',
    duration: '3-5 days',
    pricePKR: '32,000',
    priceNumeric: 32000,
    badge: 'E-VISA',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
    accentGradient: 'linear-gradient(90deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)'
  }
];
