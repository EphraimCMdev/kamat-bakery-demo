export interface Cake {
  id: string;
  title: string;
  category: 'Chocolate' | 'Celebration' | 'Floral' | 'Kids' | 'Anniversary' | 'Designer' | 'Classics';
  subtitle: string;
  description: string;
  flavorProfile: string;
  bestFor: string;
  image: string;
  alt: string;
  tiers?: string;
  isSignature?: boolean;
  isPopular?: boolean;
}

export interface CelebrationCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  popularStyles: string[];
}

export interface CustomCakeState {
  flavor: string;
  weight: string;
  occasion: string;
  tier: string;
  customMessage: string;
  themeNotes: string;
  customerName: string;
  phone: string;
  date: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
  tag: string;
}
