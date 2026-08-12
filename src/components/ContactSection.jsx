import React from 'react';
import { Phone, Mail, MapPin, Navigation } from 'lucide-react';

export default function ContactSection() {
  const mapAddressQuery = encodeURIComponent(
    'O.K. Khalid Building, Near Court Complex, Sultan Bathery, Wayanad District, Kerala 673592'
  );

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F3] border-t border-[#E6E0D2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Frame */}
        <div className="max-w-4xl mx-auto bg-[#F8F6F0] border border-[#E6E0D2] rounded-2xl p-8 sm:p-12 lg:p-14 shadow-xs space-y-10 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold text-[#BE9A5A] tracking-[0.2em] uppercase font-sans">
              DIRECT LEGAL CONTACT
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#14201D] tracking-wider uppercase">
              Adv. P. R. Rathy
            </h2>
            <p className="font-serif text-lg text-[#BE9A5A] italic">
              Advocate &amp; Notary
            </p>
            <div className="w-16 h-[2px] bg-[#BE9A5A] mx-auto"></div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left pt-2">
            
            {/* Phone */}
            <div className="bg-[#FAF8F3] border border-[#E6E0D2] p-6 rounded-xl space-y-2 flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-full bg-[#14201D] text-[#BE9A5A] flex items-center justify-center mb-1">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-[#8C733E] uppercase tracking-wider font-sans">
                PHONE NUMBER
              </span>
              <a href="tel:9745569225" className="text-base font-bold text-[#14201D] font-mono hover:text-[#BE9A5A] transition-colors">
                97455 69225
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#FAF8F3] border border-[#E6E0D2] p-6 rounded-xl space-y-2 flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-full bg-[#14201D] text-[#BE9A5A] flex items-center justify-center mb-1">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-[#8C733E] uppercase tracking-wider font-sans">
                EMAIL ADDRESS
              </span>
              <a href="mailto:advpraarathy123@gmail.com" className="text-xs sm:text-sm font-semibold text-[#14201D] hover:text-[#BE9A5A] transition-colors break-all">
                advpraarathy123@gmail.com
              </a>
            </div>

            {/* Office Address */}
            <div className="bg-[#FAF8F3] border border-[#E6E0D2] p-6 rounded-xl space-y-2 flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-full bg-[#14201D] text-[#BE9A5A] flex items-center justify-center mb-1">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-[#8C733E] uppercase tracking-wider font-sans">
                OFFICE LOCATION
              </span>
              <p className="text-xs text-[#565C58] leading-relaxed">
                O.K. Khalid Building, Near Court Complex, Sultan Bathery, Wayanad – 673592
              </p>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-[#E6E0D2]">
            <a
              href="tel:9745569225"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#14201D] hover:bg-[#1C2D29] text-white px-8 py-3.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all shadow-sm border border-[#BE9A5A]/30"
            >
              <Phone className="w-4 h-4 text-[#BE9A5A]" />
              <span>CALL NOW</span>
            </a>

            <a
              href="mailto:advpraarathy123@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] px-8 py-3.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all border border-[#BE9A5A]/60 shadow-2xs"
            >
              <Mail className="w-4 h-4 text-[#14201D]" />
              <span>EMAIL US</span>
            </a>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapAddressQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] px-8 py-3.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all border border-[#BE9A5A]/60 shadow-2xs"
            >
              <Navigation className="w-4 h-4 text-[#BE9A5A]" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
