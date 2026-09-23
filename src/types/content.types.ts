export interface FaqCategory {
  id: string;
  label: string;
}

export interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string | any;
  description: string;
  whatsappName: string;
  whatsappNumber: string;
  facebookUrl: string;
  instagramUrl: string;
}
