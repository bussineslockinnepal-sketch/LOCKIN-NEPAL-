import React from 'react';
import { Zap, Flame, Crown, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ServicesProps {
  onSelectTier: (categoryName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectTier }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#E50914]" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-purple-400" />;
      default:
        return <Zap className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="services" className="py-20 relative">
      {/* Background glow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-[#E50914] text-xs font-mono font-semibold uppercase tracking-wider">
            🎯 Specialized Roster Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Targeted Influencer Ecosystems
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We don't do generic web design or search engines. We engineer high-velocity creator distribution built specifically for the Nepali market across TikTok, Instagram, and YouTube.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((tier) => (
            <div
              key={tier.id}
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-neutral-900/80 via-neutral-900/40 to-black/80 border border-white/10 hover:border-red-500/50 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl hover:shadow-red-950/40"
            >
              <div>
                {/* Header of card */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-800/90 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(tier.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-red-500/10 border border-red-500/30 text-red-400">
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                  {tier.category}
                </h3>
                <div className="text-xs font-mono text-[#E50914] mb-3">
                  {tier.reach}
                </div>
                
                <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                  {tier.description}
                </p>

                {/* Ideal for tag */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs text-neutral-400">
                  <span className="text-white font-semibold block mb-0.5">Recommended For:</span>
                  {tier.idealFor}
                </div>

                {/* Features checklist with checkmarks */}
                <div className="space-y-3 pt-2 border-t border-white/5">
                  <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                    Core Capabilities:
                  </span>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectTier(tier.category)}
                  className="w-full py-3.5 px-4 rounded-xl text-xs uppercase font-bold tracking-wider text-white bg-neutral-900 group-hover:bg-[#E50914] border border-white/10 group-hover:border-red-500/60 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Select {tier.category}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
