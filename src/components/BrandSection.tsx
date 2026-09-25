import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle2, AlertCircle, Phone, Mail, Sparkles, MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data';
import { BrandCampaignFormData } from '../types';

interface BrandSectionProps {
  initialTier?: string;
}

export const BrandSection: React.FC<BrandSectionProps> = ({ initialTier }) => {
  const [formData, setFormData] = useState<BrandCampaignFormData>({
    brandName: '',
    contactPerson: '',
    whatsappOrPhone: '',
    email: '',
    targetTier: (initialTier as any) || 'Growth Campaign',
    budgetRange: 'NPR 100k - 200k',
    brief: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.brandName.trim() || !formData.contactPerson.trim() || !formData.whatsappOrPhone.trim()) {
      setErrorMessage('Please fill in your Brand Name, Contact Person, and Phone / WhatsApp number.');
      return;
    }

    setSubmitted(true);
    setErrorMessage('');

    // Format for direct WhatsApp communication
    const message = encodeURIComponent(
      `*🎯 NEW BRAND INQUIRY — LockIn Nepal*\n\n` +
      `*Brand Name:* ${formData.brandName}\n` +
      `*Contact Person:* ${formData.contactPerson}\n` +
      `*Phone/WhatsApp:* ${formData.whatsappOrPhone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Target Tier:* ${formData.targetTier}\n` +
      `*Budget Range:* ${formData.budgetRange}\n` +
      `*Campaign Objective / Notes:* ${formData.brief || 'None specified'}\n\n` +
      `_Submitted via lockinnepal.com official portal_`
    );

    setTimeout(() => {
      window.open(`https://wa.me/9779761315867?text=${message}`, '_blank');
    }, 600);
  };

  return (
    <section id="brands" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Why Work With LockIn Nepal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-[#E50914] text-xs font-mono font-semibold uppercase tracking-wider">
              💼 For Corporate Brands
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Scale Your Brand With Nepal's Top Digital Talent
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Skip weeks of cold DMs, unread messages, and risky uncontracted creator deals. LockIn Nepal manages the entire pipeline: vetting, legal contracting, creative scripting, asset QA, and delivery.
            </p>

            {/* Value checklist */}
            <div className="space-y-4 pt-4">
              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 flex gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Zero Creator Flaking</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Strict SLA contracts and scheduled deliverables ensure your campaigns go live on the exact target date.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 flex gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full Usage Rights Included</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Every video asset created is cleared for your digital advertising ads and promotional amplification.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 flex gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Executive Access</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Direct WhatsApp bridge with a dedicated campaign strategist throughout your activation.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Hooks */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap gap-4 text-xs font-semibold">
              <a
                href={`tel:${AGENCY_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-200 hover:text-white hover:border-[#E50914] transition"
              >
                <Phone className="w-4 h-4 text-[#E50914]" />
                <span>Call Hotline: {AGENCY_INFO.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-200 hover:text-white hover:border-[#E50914] transition"
              >
                <Mail className="w-4 h-4 text-[#E50914]" />
                <span>{AGENCY_INFO.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Campaign Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-neutral-900/90 via-neutral-900/60 to-black border border-white/10 shadow-2xl relative">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-[#E50914]" />
                  <span>Initiate Brand Campaign Brief</span>
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Tell us about your brand goals. Our team will prepare a curated talent shortlist within 24 hours.
                </p>
              </div>

              {/* Inline Messages */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex items-center gap-3 text-red-300 text-xs animate-in fade-in">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 flex items-center gap-3 text-emerald-300 text-xs animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <div>
                    <span className="font-bold block">Inquiry Logged Successfully!</span>
                    Connecting you to LockIn Nepal WhatsApp Desk...
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Brand / Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="brandName"
                      required
                      value={formData.brandName}
                      onChange={handleChange}
                      placeholder="e.g. Kathmandu Coffee Co."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Contact Person & Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="e.g. Samir Thapa (Brand Lead)"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsappOrPhone"
                      required
                      value={formData.whatsappOrPhone}
                      onChange={handleChange}
                      placeholder="e.g. 9801234567"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. samir@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Campaign Package
                    </label>
                    <select
                      name="targetTier"
                      value={formData.targetTier}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-white text-sm focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition cursor-pointer"
                    >
                      <option value="Starter Campaign">Starter Campaign (NPR 45,000)</option>
                      <option value="Growth Campaign">Growth Campaign (NPR 115,000)</option>
                      <option value="Dominance Campaign">Dominance Campaign (NPR 280,000+)</option>
                      <option value="Custom Strategy">Custom Multi-Month Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-white text-sm focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition cursor-pointer"
                    >
                      <option value="NPR 40k - 80k">NPR 40k – 80k</option>
                      <option value="NPR 80k - 150k">NPR 80k – 150k</option>
                      <option value="NPR 150k - 300k">NPR 150k – 300k</option>
                      <option value="NPR 300k+">NPR 300k+ (Enterprise/Celebrity)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Campaign Goals / Target Audience / Product Brief
                  </label>
                  <textarea
                    rows={3}
                    name="brief"
                    value={formData.brief}
                    onChange={handleChange}
                    placeholder="Tell us what product you're launching, target demographics, and preferred platforms (TikTok, Instagram, YouTube)..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl text-sm uppercase font-extrabold tracking-wider text-white bg-gradient-to-r from-[#E50914] to-[#8B0000] hover:from-[#FF1E27] hover:to-[#E50914] shadow-xl shadow-red-950/60 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Submit & Chat on WhatsApp</span>
                  </button>
                  <p className="text-center text-[11px] text-neutral-500 mt-2">
                    Direct redirection to LockIn Nepal Official Desk • Response guaranteed within 2 hours
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
