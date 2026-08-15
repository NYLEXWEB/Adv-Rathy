import React from 'react';
import { Phone, Mail, MessageSquare, Scale } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/919745569225?text=Hello%20Adv.%20P.%20R.%20Rathy%2C%20I%20would%20like%20to%20make%20a%20legal%20enquiry.";

  return (
    <section 
      id="home" 
      className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 bg-[#F8F6F0] border-b border-[#E6E0D2] overflow-hidden"
    >
      {/* Hero Section Background Image Overlay - Extends seamlessly behind fixed Navbar */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none mix-blend-multiply transition-opacity duration-300"
        style={{ backgroundImage: "url('/hero%20section.jpg')" }}
      />

      {/* Subtle Paper Texture & Soft Radial Warm Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#6B7E74_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Hero Content Container - Perfectly Balanced & Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Top Legal Scales Badge */}
        <div className="inline-flex items-center justify-center gap-2 bg-[#FAF8F3]/90 border border-[#6B7E74]/50 px-4 py-1.5 rounded-full shadow-2xs backdrop-blur-xs">
          <Scale className="w-4 h-4 text-[#6B7E74]" strokeWidth={1.6} />
          <span className="text-[10px] sm:text-xs font-bold text-[#6B7E74] tracking-[0.25em] uppercase font-sans">
            ADVOCATE &amp; NOTARY
          </span>
        </div>

        {/* Headlines - Cormorant Garamond Font */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#0D1110] tracking-tight leading-[1.08] font-cormorant">
            Adv. P. R. Rathy
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6B7E74] font-cormorant italic tracking-wide">
            Advocate &amp; Notary
          </h2>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 text-[#6B7E74] py-1">
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#6B7E74] to-[#6B7E74]"></div>
          <span className="text-xs">❖</span>
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-[#6B7E74] via-[#6B7E74] to-transparent"></div>
        </div>

        {/* Practice Experience & Priority Order - Cormorant Garamond Font */}
        <div className="space-y-2 max-w-2xl mx-auto font-sans">
          <p className="text-xl sm:text-3xl font-bold text-[#0D1110] tracking-wide font-cormorant">
            22 Years of Legal Practice
          </p>
          <div className="inline-block bg-[#F4EFE6]/90 border border-[#E6E0D2] px-4 py-2 rounded-xl backdrop-blur-xs">
            <p className="text-xs sm:text-sm text-[#4F6157] font-bold tracking-[0.2em] uppercase font-sans">
              Notary · Family Court · Criminal · Civil
            </p>
          </div>
        </div>

        {/* Direct Action Buttons: CALL NOW | WHATSAPP | EMAIL */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 sm:pt-4 max-w-md sm:max-w-none mx-auto">
          {/* CALL NOW */}
          <a
            href="tel:+919745569225"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0D1110] hover:bg-[#181E1C] text-white px-8 py-3.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm border border-[#6B7E74]/40 group"
          >
            <Phone className="w-4 h-4 text-[#6B7E74] group-hover:scale-110 transition-transform" />
            <span>CALL NOW</span>
          </a>

          {/* WHATSAPP */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#0D1110] px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 border border-[#6B7E74]/60 shadow-2xs group"
          >
            <MessageSquare className="w-4 h-4 text-[#6B7E74] group-hover:scale-110 transition-transform" />
            <span>WHATSAPP</span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:advpraarathy123@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#0D1110] px-8 py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 border border-[#6B7E74]/60 shadow-2xs group"
          >
            <Mail className="w-4 h-4 text-[#0D1110] group-hover:scale-110 transition-transform" />
            <span>EMAIL</span>
          </a>
        </div>

      </div>
    </section>
  );
}
