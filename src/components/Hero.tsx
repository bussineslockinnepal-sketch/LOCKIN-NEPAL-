import React from 'react';
import { ArrowRight, Flame, Shield, CheckCircle2, TrendingUp, Sparkles, Phone, Mail } from 'lucide-react';
import { AGENCY_INFO, AGENCY_STATS } from '../data';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-to-tr from-[#E50914]/25 via-red-950/20 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top agency badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-red-500/30 shadow-lg shadow-red-950/30 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E50914]"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              Nepal's Premier Influencer Agency 🇳🇵
            </span>
            <span className="text-neutral-500">|</span>
            <span className="text-xs text-red-400 font-mono font-medium">Q3/Q4 Slots Open</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
            Nepal's Dedicated Agency for{' '}
            <span className="bg-gradient-to-r from-red-500 via-[#E50914] to-red-200 bg-clip-text text-transparent underline decoration-[#E50914]/50 decoration-wavy decoration-2">
              Influencer & Creator Growth
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Connecting corporate brands with top digital talent for structured, data-driven campaigns across TikTok, Instagram, and YouTube.
          </p>

          {/* Action Buttons - Zero Broken Buttons Guarantee */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onScrollTo('brands')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#E50914] to-[#800000] hover:from-[#FF1E27] hover:to-[#E50914] shadow-xl shadow-red-900/50 hover:shadow-red-600/40 border border-red-500/40 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Flame className="w-5 h-5 text-red-200 group-hover:scale-110 transition-transform" />
              <span>Launch Campaign</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onScrollTo('creators')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-neutral-100 bg-neutral-900/90 hover:bg-neutral-800/90 border border-white/15 hover:border-white/30 backdrop-blur-xl active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>Join Roster (For Creators)</span>
            </button>
          </div>

          {/* Rapid Trust Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
              <span>No Vanity Metrics</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
              <span>Direct WhatsApp Escrow & Contracts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
              <span>Real-Time Reach Dashboard</span>
            </div>
          </div>
        </div>

        {/* Agency Stats Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {AGENCY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-5 sm:p-6 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-[#E50914]/40 backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="text-2xl sm:text-4xl font-black text-white group-hover:text-[#E50914] transition-colors tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-neutral-200">
                {stat.label}
              </div>
              <div className="mt-0.5 text-[11px] text-neutral-500">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
