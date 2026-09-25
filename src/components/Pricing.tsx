import React from 'react';
import { CheckCircle2, Flame, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-[#E50914] text-xs font-mono font-semibold uppercase tracking-wider">
            💎 Transparent Brand Packages
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineered For Guaranteed ROI
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Choose from structured brand campaign tiers with guaranteed impressions, contract protection, and verified engagement benchmarks.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isGrowth = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isGrowth
                    ? 'bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-black border-2 border-[#E50914] shadow-2xl shadow-red-950/50 scale-[1.02] z-10'
                    : 'bg-neutral-900/50 border border-white/10 hover:border-white/20 backdrop-blur-xl'
                }`}
              >
                {/* Popular Pill */}
                {isGrowth && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#E50914] to-red-700 text-white text-xs uppercase font-extrabold tracking-wider shadow-lg flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Most Popular Campaign</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 mb-6 min-h-[40px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 p-4 rounded-2xl bg-black/50 border border-white/5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {plan.priceNPR}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">/ campaign</span>
                    </div>
                    <div className="text-xs text-red-400/90 font-mono mt-1">
                      {plan.usdEquivalent} (Approx)
                    </div>
                  </div>

                  {/* Guaranteed Deliverables Box */}
                  <div className="mb-6 p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 text-xs">
                    <span className="text-red-400 font-bold block mb-1.5 uppercase tracking-wide flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Guaranteed Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-neutral-200">
                      {plan.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features list with checkmarks */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                      Included Management & QA:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to action button */}
                <div className="pt-8">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-4 px-4 rounded-xl text-xs uppercase font-extrabold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isGrowth
                        ? 'bg-gradient-to-r from-[#E50914] to-[#B0060E] hover:from-[#FF1E27] hover:to-[#E50914] text-white shadow-lg shadow-red-900/40 active:scale-95'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-white/10 active:scale-95'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center justify-center gap-1 mt-2.5 text-[11px] text-neutral-500">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Includes LockIn Nepal Contract Protection</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
