import React, { useState } from 'react';
import { Phone, Menu, X, Scale } from 'lucide-react';

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
    <header className="sticky top-0 z-50 bg-[#F8F6F0]/95 backdrop-blur-md border-b border-[#E6E0D2]/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3.5 group">
          {/* PR Monogram & Scale Icon */}
          <div className="w-12 h-12 rounded-full border border-[#BE9A5A]/50 bg-[#FAF8F3] flex items-center justify-center relative shadow-xs group-hover:border-[#BE9A5A] transition-colors">
            <Scale className="w-6 h-6 text-[#BE9A5A]" strokeWidth={1.5} />
            <span className="absolute text-[10px] font-bold text-[#BE9A5A] bottom-[3px] font-cinzel">PR</span>
          </div>

          <div className="flex flex-col">
            <span className="font-cinzel text-lg sm:text-xl font-bold text-[#14201D] tracking-wider leading-tight">
              ADV. P. R. RATHY
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#BE9A5A] tracking-[0.2em] font-sans uppercase">
              ADVOCATE & NOTARY
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
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
            className="flex items-center gap-2 bg-[#14201D] hover:bg-[#1C2D29] text-white px-4 py-2.5 rounded-full text-xs font-medium tracking-wider transition-all duration-200 border border-[#BE9A5A]/30 shadow-xs hover:border-[#BE9A5A]"
          >
            <Phone className="w-3.5 h-3.5 text-[#BE9A5A]" fill="#BE9A5A" />
            <span className="font-mono text-[13px] tracking-wider">97455 69225</span>
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="tel:9745569225"
            className="flex sm:hidden items-center justify-center w-9 h-9 rounded-full bg-[#14201D] text-[#BE9A5A] border border-[#BE9A5A]/30"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#14201D] hover:bg-[#FAF8F3] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F3] border-b border-[#E6E0D2] px-6 py-5 shadow-lg space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveNav(item.name);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-semibold tracking-wider py-2 border-b border-[#E6E0D2]/40 transition-colors ${
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
              className="flex items-center justify-center gap-2 bg-[#14201D] text-white py-3 rounded-lg text-sm font-medium tracking-wider w-full"
            >
              <Phone className="w-4 h-4 text-[#BE9A5A]" />
              <span>Call: 97455 69225</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
