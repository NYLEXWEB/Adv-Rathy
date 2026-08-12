import React, { useState } from 'react';
import { Phone, Menu, X, Scale, Gavel } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PRACTICE AREAS', href: '#practice-areas' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'NOTARY', href: '#notary' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <div className="sticky top-3 sm:top-4 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all">
      <header className="bg-[#FAF8F3]/95 backdrop-blur-md border border-[#E6E0D2] rounded-xl sm:rounded-2xl shadow-md transition-all">
        <div className="px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand / Official Advocate Logo Emblem */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* Official Advocate Emblem SVG Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#14201D] border border-[#BE9A5A]/50 flex items-center justify-center relative shadow-sm group-hover:border-[#BE9A5A] transition-colors">
              {/* Official Advocate Scale & Gavel Symbol */}
              <div className="relative flex items-center justify-center text-[#BE9A5A]">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.6} />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel text-base sm:text-lg font-bold text-[#14201D] tracking-wider leading-tight">
                ADV. P. R. RATHY
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-[#BE9A5A] tracking-[0.2em] font-sans uppercase">
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
                      ? 'text-[#14201D] nav-link-active font-bold'
                      : 'text-[#565C58] hover:text-[#14201D]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="tel:9745569225"
              className="flex items-center gap-2 bg-[#14201D] hover:bg-[#1C2D29] text-white px-4 py-2 sm:py-2.5 rounded-lg text-xs font-medium tracking-wider transition-all duration-200 border border-[#BE9A5A]/40 shadow-2xs hover:border-[#BE9A5A]"
            >
              <Phone className="w-3.5 h-3.5 text-[#BE9A5A]" fill="#BE9A5A" />
              <span className="font-mono text-xs sm:text-[13px] tracking-wider">97455 69225</span>
            </a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            <a
              href="tel:9745569225"
              className="flex sm:hidden items-center justify-center w-8 h-8 rounded-lg bg-[#14201D] text-[#BE9A5A] border border-[#BE9A5A]/30"
              aria-label="Call Now"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#14201D] hover:bg-[#F4EFE6] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F3] border-t border-[#E6E0D2] px-6 py-5 rounded-b-xl shadow-lg space-y-4 animate-in fade-in duration-200">
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
                    activeNav === item.name ? 'text-[#BE9A5A] pl-2 border-l-2 border-l-[#BE9A5A]' : 'text-[#565C58]'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="tel:9745569225"
                className="flex items-center justify-center gap-2 bg-[#14201D] text-white py-2.5 rounded-lg text-xs font-medium tracking-wider w-full border border-[#BE9A5A]/30"
              >
                <Phone className="w-3.5 h-3.5 text-[#BE9A5A]" />
                <span>Call: 97455 69225</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
