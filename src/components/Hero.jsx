import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/919745569225?text=Hello%20Adv.%20P.%20R.%20Rathy%2C%20I%20would%20like%20to%20make%20a%20legal%20enquiry.";

  return (
    <section 
      id="home" 
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden border-b border-[#E6E0D2]/50 bg-[#F8F6F0] -mt-20 sm:-mt-24 pt-24 sm:pt-28"
    >
      {/* Desktop Background Image - Extends seamlessly behind navbar */}
      <div 
        className="absolute inset-0 hidden sm:block bg-no-repeat bg-center lg:bg-right bg-cover pointer-events-none transition-all duration-300"
        style={{
          backgroundImage: `url('/hero section.png')`,
        }}
      />

      {/* Mobile Background Image - Extends seamlessly behind navbar */}
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
          <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[#BE9A5A] text-[10px] sm:text-[12px] font-semibold tracking-[0.25em] uppercase font-sans">
            <span>⟡</span>
            <span>ADVOCATE &amp; NOTARY</span>
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

          {/* Supporting line & Practice Focus (NEW HIERARCHY: Notary · Family Court · Criminal · Civil) */}
          <div className="space-y-2 max-w-lg sm:max-w-xl mx-auto lg:mx-0 font-sans">
            <p className="text-base sm:text-xl text-[#14201D] font-bold tracking-wide">
              22 Years of Legal Practice
            </p>
            <p className="text-xs sm:text-sm text-[#8C733E] font-bold tracking-[0.18em] uppercase font-sans">
              Notary · Family Court · Criminal · Civil
            </p>
          </div>

          {/* Action Buttons: CALL NOW | WHATSAPP | EMAIL */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4 px-4 sm:px-0">
            {/* CALL NOW */}
            <a
              href="tel:+919745569225"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#14201D] hover:bg-[#1C2D29] text-white px-7 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm border border-[#BE9A5A]/40 group"
            >
              <Phone className="w-4 h-4 text-[#BE9A5A] group-hover:scale-110 transition-transform" />
              <span>CALL NOW</span>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] px-7 py-3.5 rounded-md text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 border border-[#BE9A5A]/60 shadow-2xs group"
            >
              <MessageSquare className="w-4 h-4 text-[#BE9A5A] group-hover:scale-110 transition-transform" />
              <span>WHATSAPP</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:advpraarathy123@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] px-7 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 border border-[#BE9A5A]/60 shadow-2xs group"
            >
              <Mail className="w-4 h-4 text-[#14201D] group-hover:scale-110 transition-transform" />
              <span>EMAIL</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
