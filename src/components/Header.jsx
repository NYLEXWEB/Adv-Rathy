'use client';

import React, { useState } from 'react';
import { Phone, Menu, X, MessageSquare } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');

  const whatsappUrl = "https://wa.me/919745569225?text=Hello%20Adv.%20P.%20R.%20Rathy%2C%20I%20would%20like%20to%20make%20a%20legal%20enquiry.";

  const navItems = [
    { name: 'HOME', href: '/#home' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'PRACTICE AREAS', href: '/#practice-areas' },
    { name: 'EXPERIENCE', href: '/#experience' },
    { name: 'NOTARY SERVICES', href: '/notary-services' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <div className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all pointer-events-none">
      <header className="bg-[#F8F6F0]/85 backdrop-blur-md border border-[#E6E0D2] rounded-xl sm:rounded-2xl shadow-sm transition-all pointer-events-auto">
        <div className="px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand / Official Advocate Logo Image */}
          <a href="/#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#0D1110] border border-[#6B7E74]/50 flex items-center justify-center relative shadow-sm group-hover:border-[#6B7E74] transition-colors p-1">
              <img 
                src="/advocate-notary-logo.webp" 
                alt="Adv. P. R. Rathy Logo" 
                className="w-full h-full object-contain" 
                width={44}
                height={44}
              />
            </div>

            <div className="flex flex-col">
              <span className="font-cormorant text-lg sm:text-xl font-bold text-[#0D1110] tracking-wider leading-tight">
                ADV. P. R. RATHY
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-[#6B7E74] tracking-[0.2em] font-sans uppercase">
                ADVOCATE &amp; NOTARY
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveNav(item.name)}
                  className={`text-[12px] xl:text-[13px] font-semibold tracking-[0.12em] transition-colors py-1 ${
                    isActive
                      ? 'text-[#0D1110] nav-link-active font-bold'
                      : 'text-[#565C58] hover:text-[#0D1110]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Header CTA - WhatsApp (Large Screens Only) */}
          <div className="hidden sm:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0D1110] hover:bg-[#181E1C] text-white px-4 py-2 sm:py-2.5 rounded-lg text-xs font-medium tracking-wider transition-all duration-200 border border-[#6B7E74]/40 shadow-2xs hover:border-[#6B7E74] group"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#6B7E74] group-hover:scale-110 transition-transform" />
              <span className="font-sans font-bold tracking-wider text-xs uppercase text-white">WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Hamburger Menu Button Only */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#0D1110] hover:bg-[#F4EFE6] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F8F6F0] border-t border-[#E6E0D2] px-6 py-5 rounded-b-xl shadow-lg space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-2.5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xs font-semibold tracking-wider py-2 border-b border-[#E6E0D2]/40 transition-colors ${
                    activeNav === item.name ? 'text-[#6B7E74] pl-2 border-l-2 border-l-[#6B7E74]' : 'text-[#565C58]'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#0D1110] text-white py-2.5 rounded-lg text-xs font-bold tracking-wider w-full border border-[#6B7E74]/30 uppercase"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#6B7E74]" />
                <span>WhatsApp: 97455 69225</span>
              </a>
              <a
                href="tel:+919745569225"
                className="flex items-center justify-center gap-2 bg-[#F8F6F0] text-[#0D1110] py-2.5 rounded-lg text-xs font-bold tracking-wider w-full border border-[#E6E0D2] uppercase"
              >
                <Phone className="w-3.5 h-3.5 text-[#6B7E74]" />
                <span>Call: 97455 69225</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
