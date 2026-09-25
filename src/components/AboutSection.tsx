import React from 'react';
import { Target, TrendingUp, ShieldAlert, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onExploreServices: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onExploreServices }) => {
  return (
    <section id="about" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[#1A0507] via-neutral-900 to-black border border-red-500/30 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-[#E50914] text-xs font-mono font-bold">
                  <span>THE LOCKIN STANDARD</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Nepal's Digital Marketing is Broken. We Fixed It.
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Before LockIn Nepal, brands wasted millions on fake followers, non-converting celebrity posts, and disorganized creator DMs. We introduced structured creative direction, contract escrow, and verified conversion metrics.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-neutral-200">
                    <div className="w-6 h-6 rounded-md bg-red-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                    </div>
                    <span>Audited follower authenticity (Zero bot inflation)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-200">
                    <div className="w-6 h-6 rounded-md bg-red-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                    </div>
                    <span>Direct SLA agreements protecting brand investments</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-200">
                    <div className="w-6 h-6 rounded-md bg-red-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                    </div>
                    <span>Post-campaign analytic reports & sentiment insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-[#E50914] text-xs font-mono font-semibold uppercase tracking-wider">
              🚀 About LockIn Nepal Media Group
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Data-Driven Creator Deployments Built for Direct Conversion
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              We operate exclusively at the intersection of cultural relevance and performance marketing. By curating Nepal's highest-converting digital creators across TikTok, Instagram, and YouTube, we guarantee that every brand rupee spent drives measurable engagement, awareness, and direct consumer action.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5">
                <Target className="w-5 h-5 text-[#E50914] mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Precision Audience Matching</h4>
                <p className="text-xs text-neutral-400">We pair your product only with creators whose audience demographics match your buyer profile.</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5">
                <TrendingUp className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Viral Creative Scripting</h4>
                <p className="text-xs text-neutral-400">Our creative directors craft video hooks tailored to current Nepali meme culture and audio trends.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E50914] hover:text-white transition group cursor-pointer"
              >
                <span>View Creator Tiers & Roster</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
