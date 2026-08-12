import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-paper-texture pt-8 pb-12 sm:pt-14 sm:pb-20 overflow-hidden border-b border-[#E6E0D2]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Hero Editorial Content */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left z-10 pt-2">
            
            {/* Small Editorial Tagline */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#BE9A5A] text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] uppercase font-sans">
              <span>⟡</span>
              <span>LEGAL ADVICE. TRUSTED REPRESENTATION.</span>
              <span>⟡</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#14201D] tracking-tight leading-[1.08] font-serif">
                Adv. P. R. Rathy
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#BE9A5A] font-serif italic tracking-wide">
                Advocate &amp; Notary
              </h2>
            </div>

            {/* Decorative Gold Divider */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-[#BE9A5A]/80 py-1">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#BE9A5A] to-[#BE9A5A]"></div>
              <span className="text-xs">❖</span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#BE9A5A] via-[#BE9A5A] to-transparent"></div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#565C58] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed font-sans">
              22 years of dedicated legal practice in <br className="hidden sm:inline" />
              Civil &amp; Criminal matters across Wayanad District <br className="hidden sm:inline" />
              and various courts in Kerala.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#14201D] hover:bg-[#1C2D29] text-white px-7 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm border border-[#BE9A5A]/40 group"
              >
                <Phone className="w-4 h-4 text-[#BE9A5A] group-hover:scale-110 transition-transform" />
                <span>CONTACT NOW</span>
              </a>

              <a
                href="mailto:advpraarathy123@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] px-7 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 border border-[#BE9A5A]/60 shadow-2xs group"
              >
                <Mail className="w-4 h-4 text-[#14201D] group-hover:scale-110 transition-transform" />
                <span>EMAIL US</span>
              </a>
            </div>

          </div>

          {/* Right Column: Refined Architectural & Legal Illustration */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Soft background radial glow */}
              <div className="absolute inset-0 bg-radial from-[#F5EFDF]/60 via-transparent to-transparent rounded-full blur-2xl pointer-events-none"></div>
              
              {/* Architectural Legal Sketch Image */}
              <img
                src="/hero section.png"
                alt="Advocate & Notary Legal Illustration - Courthouse and Justice Scales Sketch"
                className="relative z-10 w-full h-auto object-contain hero-img-blend mix-blend-multiply drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
