import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Phone, Mail, Instagram } from 'lucide-react';
import { AGENCY_INFO } from '../data';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'brands', label: 'For Brands' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'creators', label: 'For Creators' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0D0D0D]/85 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Clickable to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] rounded-lg p-1 transition"
            aria-label="LockIn Nepal Media Group - Scroll to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E50914] to-black p-0.5 shadow-lg shadow-red-950/40 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#0D0D0D] rounded-[10px] flex items-center justify-center border border-red-500/30">
                <span className="font-black text-xl tracking-tighter text-white">
                  L<span className="text-[#E50914]">N</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                LockIn Nepal
                <span className="inline-block w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 group-hover:text-red-400 transition-colors">
                Media Group
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-white bg-white/10 shadow-inner'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Direct Contact & Primary CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${AGENCY_INFO.phone}`}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 transition-all flex items-center gap-1.5"
              title="Call LockIn Nepal Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#E50914]" />
              <span>{AGENCY_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={() => handleNavClick('brands')}
              className="px-4 py-2 rounded-lg text-xs uppercase font-bold tracking-wider text-white bg-gradient-to-r from-[#E50914] to-[#B0060E] hover:from-[#FF1E27] hover:to-[#E50914] shadow-md shadow-red-950/40 hover:shadow-red-600/30 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Launch Campaign</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E50914] transition"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D]/98 backdrop-blur-2xl border-b border-neutral-800 px-5 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1.5 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition cursor-pointer flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#E50914]/15 text-[#E50914] border border-[#E50914]/30'
                    : 'text-neutral-200 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-neutral-500">→</span>
              </button>
            ))}
          </div>

          {/* Mobile Direct Hooks */}
          <div className="mt-6 pt-5 border-t border-neutral-800/80 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <a
                href={`tel:${AGENCY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-200 hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#E50914]" />
                <span>Call Us</span>
              </a>
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-200 hover:text-white"
              >
                <Mail className="w-4 h-4 text-[#E50914]" />
                <span>Email Us</span>
              </a>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => handleNavClick('brands')}
                className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#E50914] to-black border border-red-500/40 shadow-lg shadow-red-950/60 active:scale-98 transition"
              >
                Launch Campaign (For Brands)
              </button>
              <button
                onClick={() => handleNavClick('creators')}
                className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-white/10 active:scale-98 transition flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Join Influencer Roster</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
