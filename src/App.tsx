import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { BrandSection } from './components/BrandSection';
import { CreatorOnboarding } from './components/CreatorOnboarding';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { NotFoundPage } from './components/NotFoundPage';
import { PricingPlan } from './types';
import { Flame, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedTierForBrand, setSelectedTierForBrand] = useState<string>('Growth Campaign');
  const [is404, setIs404] = useState(false);

  // Check URL path or hash to gracefully support inline 404 routing if unknown route
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path !== '/' && path !== '' && !path.startsWith('/#')) {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (is404) {
      setIs404(false);
      window.history.pushState(null, '', '/');
    }

    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPricingPlan = (plan: PricingPlan) => {
    setSelectedTierForBrand(plan.name);
    scrollToSection('brands');
  };

  const handleSelectServiceTier = (categoryName: string) => {
    if (categoryName.includes('Nano')) {
      setSelectedTierForBrand('Starter Campaign');
    } else if (categoryName.includes('Micro')) {
      setSelectedTierForBrand('Growth Campaign');
    } else {
      setSelectedTierForBrand('Dominance Campaign');
    }
    scrollToSection('brands');
  };

  if (is404) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col justify-between selection:bg-[#E50914]/30 selection:text-white">
        <Navbar onNavigate={scrollToSection} activeSection="" />
        <NotFoundPage onBackToHome={() => scrollToSection('hero')} />
        <Footer onNavigate={scrollToSection} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col justify-between selection:bg-[#E50914]/30 selection:text-white relative">
      
      {/* Top sticky navigation */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      <main className="flex-grow">
        {/* Hero Section */}
        <div id="hero">
          <Hero onScrollTo={scrollToSection} />
        </div>

        {/* About Agency Section */}
        <AboutSection onExploreServices={() => scrollToSection('services')} />

        {/* 3 Specialized Influencer Services (Nano, Micro, Macro & Celebs) */}
        <Services onSelectTier={handleSelectServiceTier} />

        {/* 3 Pricing Tiers (Starter, Growth, Dominance) */}
        <Pricing onSelectPlan={handleSelectPricingPlan} />

        {/* Client & Talent Testimonials Section */}
        <Testimonials />

        {/* For Corporate Brands Section with Intake Form */}
        <BrandSection initialTier={selectedTierForBrand} />

        {/* For Creators Onboarding Form */}
        <CreatorOnboarding />
      </main>

      {/* Floating Action Quick WhatsApp Button */}
      <aside aria-label="Quick Contact Hotline" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={AGENCY_INFO.whatsappBase}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-2xl shadow-emerald-950/80 hover:shadow-emerald-600/30 transition-all duration-200 border border-emerald-400/30 hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp Hotline"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
            Direct WhatsApp Desk
          </span>
        </a>
      </aside>

      {/* Comprehensive Footer */}
      <Footer onNavigate={scrollToSection} />

    </div>
  );
}
