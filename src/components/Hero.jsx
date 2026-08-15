import React from 'react';
import { Phone, Mail, MessageSquare, Scale } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/919745569225?text=Hello%20Adv.%20P.%20R.%20Rathy%2C%20I%20would%20like%20to%20make%20a%20legal%20enquiry.";

  return (
    <section 
      id="home" 
      className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#F8F6F0] border-b border-[#E6E0D2] overflow-hidden"
    >
      {/* Subtle Paper Texture & Soft Radial Warm Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#BE9A5A_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Hero Content Container - Perfectly Balanced & Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Top Gold Legal Scales Badge */}
        <div className="inline-flex items-center justify-center gap-2 bg-[#FAF8F3] border border-[#BE9A5A]/50 px-4 py-1.5 rounded-full shadow-2xs">
          <Scale className="w-4 h-4 text-[#BE9A5A]" strokeWidth={1.6} />
          <span className="text-[10px] sm:text-xs font-bold text-[#BE9A5A] tracking-[0.25em] uppercase font-sans">
            ADVOCATE &amp; NOTARY
          </span>
        </div>

        {/* Headlines */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#14201D] tracking-tight leading-[1.08] font-serif">
            Adv. P. R. Rathy
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#BE9A5A] font-serif italic tracking-wide">
            Advocate &amp; Notary
          </h2>
        </div>

        {/* Decorative Gold Divider */}
        <div className="flex items-center justify-center gap-3 text-[#BE9A5A] py-1">
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#BE9A5A] to-[#BE9A5A]"></div>
          <span className="text-xs">❖</span>
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-[#BE9A5A] via-[#BE9A5A] to-transparent"></div>
        </div>

        {/* Practice Experience & Priority Order */}
        <div className="space-y-2 max-w-2xl mx-auto font-sans">
          <p className="text-lg sm:text-2xl font-bold text-[#14201D] tracking-wide font-serif">
            22 Years of Legal Practice
          </p>
          <div className="inline-block bg-[#F4EFE6] border border-[#E6E0D2] px-4 py-2 rounded-xl">
            <p className="text-xs sm:text-sm text-[#8C733E] font-bold tracking-[0.2em] uppercase font-sans">
              Notary · Family Court · Criminal · Civil
            </p>
          </div>
        </div>

        {/* Direct Action Buttons: CALL NOW | WHATSAPP | EMAIL */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 sm:pt-4 max-w-md sm:max-w-none mx-auto">
          {/* CALL NOW */}
          <a
            href="tel:+919745569225"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#14201D] hover:bg-[#1C2D29] text-white px-8 py-3.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm border border-[#BE9A5A]/40 group"
          >
            <Phone className="w-4 h-4 text-[#BE9A5A] group-hover:scale-110 transition-transform" />
            <span>CALL NOW</span>
          </a>

          {/* WHATSAPP */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 border border-[#BE9A5A]/60 shadow-2xs group"
          >
            <MessageSquare className="w-4 h-4 text-[#BE9A5A] group-hover:scale-110 transition-transform" />
            <span>WHATSAPP</span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:advpraarathy123@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] px-8 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 border border-[#BE9A5A]/60 shadow-2xs group"
          >
            <Mail className="w-4 h-4 text-[#14201D] group-hover:scale-110 transition-transform" />
            <span>EMAIL</span>
          </a>
        </div>

      </div>
    </section>
  );
}
