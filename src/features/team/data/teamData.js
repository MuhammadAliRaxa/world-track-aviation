import rawHabibImg from '../../../assets/habib_portrait.webp';

const habibImg = (rawHabibImg && typeof rawHabibImg === 'object' && rawHabibImg.src) ? rawHabibImg.src : rawHabibImg;

export const STATS_BANNER = [
  { id: 'satisfaction', value: '4.9 / 5.0', label: 'Overall Customer Satisfaction' },
  { id: 'tickets', value: '150,000+', label: 'Tickets & Visas Issued' },
  { id: 'pilgrims', value: '35,000+', label: 'Umrah Pilgrims Served' },
  { id: 'visas', value: '99.4%', label: 'Visa Approval Track Record' }
];

export const TEAM_MEMBERS = [];

