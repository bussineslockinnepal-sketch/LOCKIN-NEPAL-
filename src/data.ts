import { Testimonial, ServiceTier, PricingPlan } from './types';

export const AGENCY_INFO = {
  name: "LockIn Nepal Media Group",
  shortName: "LockIn Nepal",
  tagline: "Nepal's Dedicated Agency for Influencer & Creator Growth",
  subheadline: "Connecting corporate brands with top digital talent for structured, data-driven campaigns.",
  phone: "9761315867",
  phoneFormatted: "+977 9761315867",
  email: "business.lockinnepal@gmail.com",
  instagram: "lockinnepal.official",
  instagramUrl: "https://instagram.com/lockinnepal.official",
  whatsappBase: "https://wa.me/9779761315867",
  location: "Kathmandu, Nepal",
};

export const SERVICES_DATA: ServiceTier[] = [
  {
    id: "nano",
    category: "Nano Influencers",
    badge: "1k – 10k Followers",
    reach: "Hyper-Niche & Hyper-Local",
    description: "High-trust community leaders with industry-leading organic engagement rates and strong peer-to-peer recommendation power in Nepali communities.",
    idealFor: "FMCG trials, local cafes, boutique apparel, campus outreach, and grassroots app launches.",
    iconName: "Zap",
    features: [
      "Average Engagement Rate: 8% – 14%",
      "Direct word-of-mouth credibility across college networks & local zones",
      "Cost-effective multi-creator seeding (deploy 15-30 creators in a single blast)",
      "Native UGC format tailored for TikTok feeds & Instagram Reels",
      "Authentic, unpolished storytelling with genuine conversion pull"
    ]
  },
  {
    id: "micro",
    category: "Micro Influencers",
    badge: "10k – 100k Followers",
    reach: "Targeted Industry Authority",
    description: "Established category specialists across tech, fashion, food vlogging, fitness, travel, and lifestyle in Nepal with highly engaged loyal followings.",
    idealFor: "Consumer electronics, hospitality, fintech apps, fashion labels, and e-commerce campaigns.",
    iconName: "Flame",
    features: [
      "Average Engagement Rate: 4.5% – 8.5%",
      "Specialized niche authority (Tech reviewers, Foodies, Lifestyle vloggers)",
      "Structured video production with creative scripting & product integration",
      "Custom discount code attribution & tracked swipe-up conversions",
      "Full usage rights clearance for your paid social ads amplification"
    ]
  },
  {
    id: "macro",
    category: "Macro & Celebs",
    badge: "100k+ Followers",
    reach: "Mass National Awareness",
    description: "Nepal's household names, viral sensations, top YouTube creators, and celebrity personalities delivering monumental reach and top-of-mind brand dominance.",
    idealFor: "National brand campaigns, festive mega sales (Dashain/Tihar), nationwide app adoption, and brand prestige.",
    iconName: "Crown",
    features: [
      "Multi-million organic impressions across Nepal & the diaspora",
      "Exclusive celebrity ambassadorships & event appearances",
      "4K cinematic production, multi-camera studio sets & viral skits",
      "Omnichannel syndication: YouTube sponsor spots, IG Reels, TikTok, and press",
      "Complete contract negotiation, brand safety protocols & PR alignment"
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Campaign",
    badge: "Fast Launch",
    popular: false,
    priceNPR: "NPR 45,000",
    usdEquivalent: "~$335 USD",
    tagline: "High-impact local reach & hyper-authentic micro creator seeding.",
    deliverables: [
      "5 to 8 Selected Nano & Micro Creators",
      "Reels & TikTok Video Assets + Story Reposts",
      "Guaranteed ~150,000+ Targeted Impressions"
    ],
    features: [
      "Creator vetting & category matching (Tech/Food/Fashion/Lifestyle)",
      "Standard script guidance & brand message alignment",
      "Trackable link/promo code distribution",
      "Quality assurance review before public posting",
      "Final campaign performance analytics & engagement report"
    ],
    ctaText: "Launch Starter Campaign"
  },
  {
    id: "growth",
    name: "Growth Campaign",
    badge: "Most Popular",
    popular: true,
    priceNPR: "NPR 115,000",
    usdEquivalent: "~$860 USD",
    tagline: "Multi-creator execution, creative scripting & synchronized viral blitz.",
    deliverables: [
      "12 to 18 High-Performing Micro & Mid-Tier Creators",
      "Multi-format rollout (Reels, TikTok, YouTube Shorts + Stories)",
      "Guaranteed ~600,000+ Cross-Platform Impressions"
    ],
    features: [
      "Tailored creative storyline & viral trend integration",
      "End-to-end creator coordination, product logistics & scheduling",
      "Synchronized 'Blitz Week' posting schedule for maximum FOMO",
      "Whitelisting rights for paid social ads re-targeting",
      "Real-time tracking dashboard & mid-campaign optimization",
      "Dedicated LockIn Nepal Campaign Director"
    ],
    ctaText: "Launch Growth Campaign"
  },
  {
    id: "dominance",
    name: "Dominance Campaign",
    badge: "Full Scale",
    popular: false,
    priceNPR: "NPR 280,000+",
    usdEquivalent: "~$2,100+ USD",
    tagline: "Macro influencers & celebrities with end-to-end production & mass PR.",
    deliverables: [
      "Top-tier Macro Creators (100k-500k+) + 20 Micro Amplifiers",
      "Cinematic 4K integrations, YouTube sponsorships & VIP activations",
      "Guaranteed 2,000,000+ Nationwide Impressions"
    ],
    features: [
      "A-list talent procurement & strict brand safety contract escrow",
      "Professional scriptwriting, creative director & video shoot supervision",
      "Festive / Product Launch takeover package (Dashain, New Year, Black Friday)",
      "High-res raw asset delivery for television / billboard / digital usage",
      "Comprehensive sentiment analysis & executive ROI breakdown",
      "24/7 Priority support hotline with dedicated Account Head"
    ],
    ctaText: "Book Dominance Strategy"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote: "LockIn Nepal completely changed how we run product drops. Within 72 hours of launching the campaign, our mobile app downloads surged 340% across Kathmandu and Pokhara. Their creator selection was flawless.",
    author: "Prashant Shrestha",
    role: "Head of Growth",
    organization: "FinTech Nepal / Digital Wallet",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    type: "brand",
    rating: 5,
    highlightMetric: "+340% App Installs"
  },
  {
    id: "test-2",
    quote: "As a creator with 45k followers, dealing with brands directly used to mean delayed payments and vague briefs. LockIn Nepal provides rock-solid contracts, timely payouts, and scripts that actually respect my creative style.",
    author: "Sneha Tuladhar",
    role: "Lifestyle & Food Creator",
    organization: "IG: @sneha_bites",
    handle: "@sneha_bites",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    type: "creator",
    rating: 5,
    highlightMetric: "Reliable Payouts & Deals"
  },
  {
    id: "test-3",
    quote: "We partnered with LockIn Nepal for our festive autumn campaign. The synchronized release with 16 micro-creators generated 820,000 authentic views and drove our highest monthly D2C revenue to date.",
    author: "Aayush Maharjan",
    role: "Marketing Director",
    organization: "Himalayan Threads Apparel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    type: "brand",
    rating: 5,
    highlightMetric: "820K Organic Views"
  },
  {
    id: "test-4",
    quote: "LockIn placed me on three major brand campaigns in my first two months on the roster. They negotiate the best commercial rates and handle all client communications so I can focus purely on making videos.",
    author: "Bikash Gurung",
    role: "Tech & Gaming Reviewer",
    organization: "TikTok: @bikash_tech",
    handle: "@bikash_tech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    type: "creator",
    rating: 5,
    highlightMetric: "3x Monthly Creator Income"
  }
];

export const AGENCY_STATS = [
  { value: "450+", label: "Verified Nepali Creators", sub: "Nano, Micro & Macro" },
  { value: "18.5M+", label: "Total Campaign Reach", sub: "Across TikTok, IG & YT" },
  { value: "120+", label: "Successful Campaigns", sub: "Delivered on-time" },
  { value: "9.2%", label: "Avg Engagement Rate", sub: "2.8x industry average" },
];
