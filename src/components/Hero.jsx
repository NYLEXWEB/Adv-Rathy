import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden border-b border-[#E6E0D2]/50 bg-[#F8F6F0] -mt-20 sm:-mt-24 pt-24 sm:pt-28"
    >
      {/* Hero Background Image - Desktop (Extends behind floating navbar) */}
      <div 
        className="absolute inset-0 hidden sm:block bg-no-repeat bg-center lg:bg-right bg-cover pointer-events-none transition-all duration-300"
        style={{
          backgroundImage: `url('/hero section.png')`,
        }}
      />

      {/* Hero Background Image - Mobile (Extends behind floating navbar) */}
      <div 
        className="absolute inset-0 block sm:hidden bg-no-repeat bg-top bg-cover pointer-events-none"
        style={{
          backgroundImage: `url('/hero section mobile background .png')`,
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-14 lg:py-20">
        <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6 text-center lg:text-left pt-8 sm:pt-4">
          
          {/* Small Editorial Tagline */}
          <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[#BE9A5A] text-[10px] sm:text-[12px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase font-sans">
            <span>⟡</span>
            <span>LEGAL ADVICE. TRUSTED REPRESENTATION.</span>
            <span>⟡</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#14201D] tracking-tight leading-[1.1] font-serif">
              Adv. P. R. Rathy
            </h1>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-normal text-[#BE9A5A] font-serif italic tracking-wide">
              Advocate &amp; Notary
            </h2>
          </div>

          {/* Decorative Gold Divider */}
          <div className="flex items-center justify-center lg:justify-start gap-3 text-[#BE9A5A]/80 py-0.5 sm:py-1">
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#BE9A5A] to-[#BE9A5A]"></div>
            <span className="text-xs">❖</span>
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-[#BE9A5A] via-[#BE9A5A] to-transparent"></div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-lg text-[#565C58] max-w-lg sm:max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed font-sans px-2 sm:px-0">
            22 years of dedicated legal practice in <br className="hidden sm:inline" />
            Civil &amp; Criminal matters across Wayanad District <br className="hidden sm:inline" />
            and various courts in Kerala.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-3 px-4 sm:px-0">
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
      </div>
    </section>
  );
}
