import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#14201D] text-white border-t border-[#BE9A5A]/30 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#2A3B36]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#BE9A5A]/50 bg-[#1A2A26] flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#BE9A5A]" strokeWidth={1.5} />
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-wider block text-white">
                  ADV. P. R. RATHY
                </span>
                <span className="text-[10px] font-semibold text-[#BE9A5A] tracking-[0.2em] uppercase font-sans">
                  ADVOCATE &amp; NOTARY
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9DA3A0] leading-relaxed max-w-sm font-sans pt-2">
              22 years of dedicated legal practice in Civil &amp; Criminal matters across Wayanad District and various courts in Kerala. Committed to justice, integrity and trustworthy legal service.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#BE9A5A] tracking-wider uppercase">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-[#D0D4D2] font-sans">
              <li><a href="#home" className="hover:text-[#BE9A5A] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#BE9A5A] transition-colors">About Advocate</a></li>
              <li><a href="#practice-areas" className="hover:text-[#BE9A5A] transition-colors">Practice Areas</a></li>
              <li><a href="#experience" className="hover:text-[#BE9A5A] transition-colors">Legal Experience</a></li>
              <li><a href="#notary" className="hover:text-[#BE9A5A] transition-colors">Notary Public</a></li>
              <li><a href="#contact" className="hover:text-[#BE9A5A] transition-colors">Contact Office</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#BE9A5A] tracking-wider uppercase">
              OFFICE LOCATION
            </h4>
            <div className="space-y-2.5 text-xs text-[#D0D4D2] font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BE9A5A] shrink-0 mt-0.5" />
                <span>O.K. Khalid Building, Near Court Complex, Sultan Bathery, Wayanad District, Kerala – 673592</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BE9A5A] shrink-0" />
                <a href="tel:9745569225" className="font-mono hover:text-[#BE9A5A] transition-colors">97455 69225</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BE9A5A] shrink-0" />
                <a href="mailto:advpraarathy123@gmail.com" className="hover:text-[#BE9A5A] transition-colors">advpraarathy123@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Reserved Area for Future Disclaimer */}
        <div className="text-center text-[11px] text-[#7A8380] font-sans pt-2">
          {/* Legal disclaimer container pre-formatted for future approved text */}
          <div className="border border-dashed border-[#2A3B36] p-3 rounded-md mb-6 max-w-3xl mx-auto opacity-70">
            <p className="text-[10px] text-[#7A8380] italic">
              Notice: Information on this website is for informational purposes for Adv. P. R. Rathy (Advocate &amp; Notary). Official legal representation or notary services are provided in accordance with applicable rules and regulations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B9390]">
            <p>© {currentYear} Adv. P. R. Rathy. All Rights Reserved.</p>
            <p className="text-[11px]">Advocate &amp; Notary | Sultan Bathery, Wayanad, Kerala</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
