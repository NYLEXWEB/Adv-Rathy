import React from 'react';
import { Scale, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = "https://wa.me/919745569225?text=Hello%20Adv.%20P.%20R.%20Rathy%2C%20I%20would%20like%20to%20make%20a%20legal%20enquiry.";

  return (
    <footer className="bg-[#14201D] text-white border-t border-[#BE9A5A]/30 pt-16 pb-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#BE9A5A]/20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#BE9A5A]/20 border border-[#BE9A5A]/50 flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#BE9A5A]" strokeWidth={1.6} />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg font-bold text-white tracking-wider leading-tight">
                  ADV. P. R. RATHY
                </span>
                <span className="text-[10px] font-bold text-[#BE9A5A] tracking-[0.2em] uppercase">
                  ADVOCATE &amp; NOTARY
                </span>
              </div>
            </a>

            <p className="text-xs text-[#D0D4D2] leading-relaxed max-w-sm">
              22 years of legal practice in Notary Public, Family Court, Criminal, and Civil matters across Wayanad District and Kerala courts.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-mono text-[#BE9A5A] uppercase tracking-wider block">
                BAR COUNCIL ENROLLMENT: K/000931/2004 (21.11.2004)
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-white tracking-wider uppercase">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-[#D0D4D2]">
              <li><a href="#home" className="hover:text-[#BE9A5A] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#BE9A5A] transition-colors">About Adv. P. R. Rathy</a></li>
              <li><a href="#practice-areas" className="hover:text-[#BE9A5A] transition-colors">Practice Areas</a></li>
              <li><a href="#notary" className="hover:text-[#BE9A5A] transition-colors">Notary Public</a></li>
              <li><a href="#experience" className="hover:text-[#BE9A5A] transition-colors">Practice Jurisdiction</a></li>
              <li><a href="#contact" className="hover:text-[#BE9A5A] transition-colors">Contact Office</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-white tracking-wider uppercase">
              OFFICE LOCATION
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#D0D4D2]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BE9A5A] shrink-0 mt-0.5" />
                <span>O.K. Khalid Building, Near Court Complex, Sultan Bathery, Wayanad District, Kerala – 673592</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BE9A5A] shrink-0" />
                <a href="tel:+919745569225" className="hover:text-[#BE9A5A] font-mono">97455 69225</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#BE9A5A] shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#BE9A5A] font-sans font-bold text-[#BE9A5A]">WhatsApp Direct</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BE9A5A] shrink-0" />
                <a href="mailto:advpraarathy123@gmail.com" className="hover:text-[#BE9A5A] break-all">advpraarathy123@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Structured Disclaimer Container Placeholder (Ready for future client disclaimer text without layout changes) */}
        <div id="legal-disclaimer-placeholder" className="hidden border-t border-[#BE9A5A]/20 pt-6">
          {/* Disclaimer text slot for future addition */}
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8C9490]">
          <p>© {new Date().getFullYear()} Adv. P. R. Rathy (B.A., LL.B.). All rights reserved.</p>
          <p className="font-serif italic text-[#BE9A5A]/80">Advocate &amp; Notary — Sultan Bathery, Wayanad</p>
        </div>

      </div>
    </footer>
  );
}
