import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2, AlertCircle, ShieldCheck, HelpCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { CreatorFormData } from '../types';
import { AGENCY_INFO } from '../data';

export const CreatorOnboarding: React.FC = () => {
  const [formData, setFormData] = useState<CreatorFormData>({
    name: '',
    whatsapp: '',
    email: '',
    age: '',
    socialMediaLink: '',
    followerCount: '',
    avgViews: '',
    screenshotDriveLink: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation checks
    if (
      !formData.name.trim() ||
      !formData.whatsapp.trim() ||
      !formData.email.trim() ||
      !formData.age.trim() ||
      !formData.socialMediaLink.trim() ||
      !formData.followerCount.trim() ||
      !formData.avgViews.trim()
    ) {
      setErrorMessage('Please fill out all required fields marked with an asterisk (*).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Prepare WhatsApp formatted payload
    const formattedMessage = encodeURIComponent(
      `*🌟 NEW CREATOR ROSTER APPLICATION — LockIn Nepal*\n\n` +
      `*Full Name:* ${formData.name}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Email:* ${formData.email}\n` +
      `*Age:* ${formData.age}\n` +
      `*Primary Channel/Profile:* ${formData.socialMediaLink}\n` +
      `*Follower Count:* ${formData.followerCount}\n` +
      `*Average Video Views:* ${formData.avgViews}\n` +
      `*Analytics Drive Link:* ${formData.screenshotDriveLink || 'Will attach in WhatsApp'}\n\n` +
      `_Submitted via LockIn Nepal Creator Portal_`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Clean redirect to WhatsApp
      window.open(`https://wa.me/9779761315867?text=${formattedMessage}`, '_blank');
    }, 400);
  };

  return (
    <section id="creators" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-[#E50914] text-xs font-mono font-semibold uppercase tracking-wider">
            🔥 For Creators & Influencers
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Join the Official LockIn Nepal Talent Roster
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Get matched with paying brand deals, professional sponsorship contracts, and structured campaigns without pitching yourself 24/7.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-neutral-900/90 via-neutral-900/60 to-black/90 border border-white/10 shadow-2xl backdrop-blur-2xl relative">
            
            {/* Value cards for creators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-center">
                <span className="text-[#E50914] font-black text-base sm:text-lg block">Prompt Payouts</span>
                <span className="text-[11px] text-neutral-400">Direct eSewa, Khalti, or Bank transfer on completion</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-center">
                <span className="text-emerald-400 font-black text-base sm:text-lg block">Legal Protection</span>
                <span className="text-[11px] text-neutral-400">Structured SLAs safeguard your creative content rights</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-center">
                <span className="text-purple-400 font-black text-base sm:text-lg block">Brand Deals</span>
                <span className="text-[11px] text-neutral-400">Regular placement in tech, food, fashion, and lifestyle</span>
              </div>
            </div>

            {/* Error banner */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex items-center gap-3 text-red-300 text-xs animate-in fade-in">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success state banner */}
            {submitted && (
              <div className="mb-6 p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-emerald-200 text-xs animate-in fade-in">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-400" />
                  <div>
                    <h5 className="font-bold text-sm text-white">Application Submitted!</h5>
                    <p className="text-neutral-300">Your details have been queued and formatted for our talent board.</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/9779761315867`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition flex items-center gap-1.5 shrink-0"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Full Legal Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aayush Tamang"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    WhatsApp Active Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="e.g. 9812345678"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition"
                  />
                </div>
              </div>

              {/* Row 2: Email & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. creator@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    min="14"
                    max="80"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="e.g. 22"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition"
                  />
                </div>
              </div>

              {/* Row 3: Social Media Link & Follower Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Primary Social Profile Link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    name="socialMediaLink"
                    required
                    value={formData.socialMediaLink}
                    onChange={handleChange}
                    placeholder="https://instagram.com/yourhandle or TikTok"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Follower Count Tier <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="followerCount"
                    required
                    value={formData.followerCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-white text-sm focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition cursor-pointer"
                  >
                    <option value="">Select your audience tier</option>
                    <option value="1k - 10k (Nano)">1k – 10k (Nano Creator)</option>
                    <option value="10k - 50k (Micro)">10k – 50k (Micro Creator)</option>
                    <option value="50k - 100k (Mid-Tier)">50k – 100k (Mid-Tier Creator)</option>
                    <option value="100k+ (Macro / Celebrity)">100k+ (Macro / Celebrity)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Avg Views & Drive Link */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Average Views per Video / Reel <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="avgViews"
                    required
                    value={formData.avgViews}
                    onChange={handleChange}
                    placeholder="e.g. 15k - 40k views"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Analytics Screenshot (Google Drive / Imgur Link)
                  </label>
                  <input
                    type="url"
                    name="screenshotDriveLink"
                    value={formData.screenshotDriveLink}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-sm uppercase font-extrabold tracking-wider text-white bg-gradient-to-r from-[#E50914] via-[#C40710] to-[#800000] hover:from-[#FF1E27] hover:to-[#E50914] shadow-xl shadow-red-950/60 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{isSubmitting ? 'Routing Application...' : 'Submit Application & Join Roster'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No upfront fees • Automatic WhatsApp escrow & verification</span>
                </div>
              </div>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};
