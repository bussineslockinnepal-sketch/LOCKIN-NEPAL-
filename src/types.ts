export interface CreatorFormData {
  name: string;
  whatsapp: string;
  email: string;
  age: string;
  socialMediaLink: string;
  followerCount: string;
  avgViews: string;
  screenshotDriveLink: string;
}

export interface BrandCampaignFormData {
  brandName: string;
  contactPerson: string;
  whatsappOrPhone: string;
  email: string;
  targetTier: 'Starter Campaign' | 'Growth Campaign' | 'Dominance Campaign' | 'Custom Strategy';
  budgetRange: string;
  brief: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  handle?: string;
  avatar: string;
  type: 'brand' | 'creator';
  rating: number;
  highlightMetric: string;
}

export interface ServiceTier {
  id: string;
  category: string;
  badge: string;
  reach: string;
  description: string;
  idealFor: string;
  iconName: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  priceNPR: string;
  usdEquivalent: string;
  tagline: string;
  deliverables: string[];
  features: string[];
  ctaText: string;
}
