import React from 'react';
import { Phone, Mail, Instagram, ArrowUp, ShieldCheck, MapPin } from 'lucide-react';
import { AGENCY_INFO } from '../data';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-red-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E50914] to-black p-0.5 shadow-md border border-red-500/30">
                <div className="w-full h-full bg-[#0D0D0D] rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-lg tracking-tighter text-white">
                    L<span className="text-[#E50914]">N</span>
                  </span>
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                LockIn Nepal
              </span>
            </button>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Nepal's premier influencer marketing and talent management agency. Bridging brands with verified nano, micro, and celebrity digital creators for high-converting campaigns.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <MapPin className="w-4 h-4 text-[#E50914]" />
              <span>Kathmandu Valley & Nationwide Network, Nepal</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition cursor-pointer"
                >
                  About Agency
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Influencer Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Pricing & Tiers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Client Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Portals */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Portals
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('brands')}
                  className="hover:text-red-400 transition cursor-pointer text-left"
                >
                  Launch Campaign (Brands)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('creators')}
                  className="hover:text-red-400 transition cursor-pointer text-left"
                >
                  Creator Roster Application
                </button>
              </li>
              <li>
                <a
                  href={AGENCY_INFO.whatsappBase}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  Direct WhatsApp Hotline
                </a>
              </li>
            </ul>
          </div>

          {/* Clickable Contact Hooks */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-500 block mb-0.5">Phone Call / SMS:</span>
                <a
                  href={`tel:${AGENCY_INFO.phone}`}
                  className="hover:text-[#E50914] transition font-mono font-medium flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E50914]" />
                  <span>{AGENCY_INFO.phoneFormatted}</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-500 block mb-0.5">Business Inquiries:</span>
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="hover:text-[#E50914] transition break-all flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E50914] shrink-0" />
                  <span>{AGENCY_INFO.email}</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-500 block mb-0.5">Official Instagram:</span>
                <a
                  href={AGENCY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-400 transition flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                  <span>@{AGENCY_INFO.instagram}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {AGENCY_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-neutral-400">Kathmandu, Nepal 🇳🇵</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 transition cursor-pointer flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#E50914]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
