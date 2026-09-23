export interface BlogPost {
  id: string;
  category: string;
  badge: string;
  heroTitle: string;
  title: string;
  date: string;
  author: string;
  authorAvatar: string;
  readTime: string;
  image: string;
  summary: string;
  intro: string;
  section1?: {
    title: string;
    text: string;
  };
  section2?: {
    title: string;
    steps?: { name: string; desc: string }[];
    text?: string;
  };
  section3?: {
    title: string;
    duas?: string[];
    tips?: string[];
    text?: string;
  };
}

export interface BlogFilterParams {
  category?: string;
  searchQuery?: string;
}
