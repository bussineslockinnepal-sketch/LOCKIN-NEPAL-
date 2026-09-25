import React, { useState } from 'react';
import { Star, Quote, Building2, UserCheck, Sparkles, Filter } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'brand' | 'creator'>('all');

  const filteredTestimonials = TESTIMONIALS_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-[#E50914] text-xs font-mono font-semibold uppercase tracking-wider">
            ⭐ Client & Talent Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Trusted by Top Brands & Creators
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            See what founders, corporate marketing leads, and verified creators say about executing campaigns with LockIn Nepal Media Group.
          </p>

          {/* Filter Pills */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#E50914] text-white shadow-md shadow-red-900/40'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              All Reviews ({TESTIMONIALS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('brand')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                filter === 'brand'
                  ? 'bg-[#E50914] text-white shadow-md shadow-red-900/40'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Brands</span>
            </button>
            <button
              onClick={() => setFilter('creator')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                filter === 'creator'
                  ? 'bg-[#E50914] text-white shadow-md shadow-red-900/40'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Creators</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-neutral-900/70 via-neutral-900/30 to-black/80 border border-white/10 hover:border-red-500/40 backdrop-blur-2xl transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header: Type Badge + Star Ratings */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                      item.type === 'brand'
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    }`}
                  >
                    {item.type === 'brand' ? 'Corporate Brand' : 'Verified Talent'}
                  </span>
                </div>

                {/* Highlight metric badge */}
                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-950/40 border border-red-500/30 text-xs font-mono font-bold text-red-300">
                  <Sparkles className="w-3 h-3 text-[#E50914]" />
                  <span>Result: {item.highlightMetric}</span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-white/5 absolute -top-3 -left-3 pointer-events-none" />
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic relative z-10">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Author profile */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10 group-hover:border-[#E50914] transition-colors"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.author}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">
                    {item.role} • <span className="text-neutral-300">{item.organization}</span>
                  </div>
                  {item.handle && (
                    <div className="text-[11px] text-red-400 font-mono mt-0.5">
                      {item.handle}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Want to see our full campaign case studies?</h4>
            <p className="text-xs text-neutral-400 mt-0.5">Request a confidential presentation deck with analytics and conversion screenshots.</p>
          </div>
          <a
            href="mailto:business.lockinnepal@gmail.com?subject=Inquiry:%20Request%20Case%20Studies"
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-neutral-800 hover:bg-[#E50914] border border-white/10 transition whitespace-nowrap"
          >
            Request Deck via Email
          </a>
        </div>

      </div>
    </section>
  );
};
