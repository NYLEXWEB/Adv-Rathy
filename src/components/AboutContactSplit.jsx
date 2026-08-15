import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Award, Calendar, GraduationCap, Briefcase } from 'lucide-react';

export default function AboutContactSplit() {
  const whatsappUrl = "https://wa.me/919745569225?text=Hello%20Adv.%20P.%20R.%20Rathy%2C%20I%20would%20like%20to%20make%20a%20legal%20enquiry.";

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF8F3] border-b border-[#E6E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: About Bio (Ivory Panel with Circle Profile Picture) */}
          <div className="lg:col-span-7 bg-[#F8F6F0] border border-[#E6E0D2] rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 shadow-2xs">
            <div className="space-y-6">
              
              {/* Header with Circle Profile Image */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                
                {/* Circle Profile Image */}
                <div className="relative shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#6B7E74] p-1 bg-[#FAF8F3] shadow-md">
                    <img
                      src="/profile.jpg"
                      alt="Adv. P. R. Rathy Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#0D1110] text-[#6B7E74] text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full border border-[#6B7E74]/40 font-sans uppercase shadow-xs">
                    22 YRS
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-xs font-semibold text-[#6B7E74] tracking-[0.2em] uppercase font-sans">
                    PROFESSIONAL PROFILE
                  </span>
                  <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0D1110] tracking-wider uppercase">
                    ABOUT ADV. P. R. RATHY
                  </h2>
                  <div className="w-16 h-[2px] bg-[#6B7E74] mx-auto sm:mx-0 mt-2"></div>
                </div>

              </div>

              {/* Verified Factual Bio */}
              <p className="text-base sm:text-lg text-[#0D1110] font-serif leading-relaxed">
                Adv. P. R. Rathy is an Advocate and Notary with 22 years of professional legal practice. His practice includes Notary, Family Court, Criminal and Civil matters.
              </p>

              <p className="text-xs sm:text-sm text-[#565C58] leading-relaxed font-sans font-normal">
                Enrolled with the Bar Council of Kerala on 21.11.2004 under Enrollment No. K/000931/2004, Adv. P. R. Rathy provides legal assistance and notary services across Wayanad District and various courts in Kerala.
              </p>

              {/* Verified Credentials Box */}
              <div className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-xl p-6 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#4F6157]">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-wider uppercase font-sans">QUALIFICATION</span>
                  </div>
                  <p className="font-serif text-base sm:text-lg font-bold text-[#0D1110]">B.A., LL.B.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#4F6157]">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-wider uppercase font-sans">PRACTICE EXPERIENCE</span>
                  </div>
                  <p className="font-serif text-base sm:text-lg font-bold text-[#0D1110]">22 Years</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#E6E0D2]">
                  <div className="flex items-center gap-1.5 text-[#4F6157]">
                    <Award className="w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-wider uppercase font-sans">ENROLLMENT NO.</span>
                  </div>
                  <p className="font-serif text-sm sm:text-base font-bold text-[#0D1110]">K/000931/2004</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#E6E0D2]">
                  <div className="flex items-center gap-1.5 text-[#4F6157]">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-wider uppercase font-sans">ENROLLMENT DATE</span>
                  </div>
                  <p className="font-serif text-sm sm:text-base font-bold text-[#0D1110]">21.11.2004</p>
                </div>
              </div>

            </div>

            {/* Bottom Accent */}
            <div className="flex items-center gap-3 text-[#6B7E74]/60 pt-4 border-t border-[#E6E0D2]">
              <div className="w-12 h-[1px] bg-[#6B7E74]/50"></div>
              <span className="text-xs font-serif italic text-[#4F6157]">Advocate &amp; Notary — Wayanad, Kerala</span>
            </div>
          </div>

          {/* Right Column: Office & Direct Contact Panel (Advocate Black) */}
          <div className="lg:col-span-5 bg-[#0D1110] text-white border border-[#6B7E74]/30 rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 shadow-md relative overflow-hidden">
            
            {/* Background Line Art Overlay */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
              <svg width="240" height="240" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-[#6B7E74]">
                <path d="M50 10 L50 90 M20 40 L80 40 M25 70 L75 70" strokeWidth="2" />
              </svg>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#6B7E74] tracking-[0.2em] uppercase font-sans">
                  OFFICE &amp; CONTACT
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase">
                  DIRECT CONTACT
                </h3>
                <div className="w-16 h-[2px] bg-[#6B7E74] mt-2"></div>
              </div>

              {/* Office Address */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#6B7E74]/20 text-[#6B7E74] flex items-center justify-center shrink-0 border border-[#6B7E74]/30 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#6B7E74] uppercase tracking-wider font-sans block mb-1">
                      OFFICE ADDRESS
                    </span>
                    <p className="text-xs sm:text-sm text-[#D0D4D2] leading-relaxed font-sans">
                      O.K. Khalid Building,<br />
                      Near Court Complex, Sultan Bathery,<br />
                      Wayanad District, Kerala – 673592
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#6B7E74]/20 text-[#6B7E74] flex items-center justify-center shrink-0 border border-[#6B7E74]/30 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#6B7E74] uppercase tracking-wider font-sans block mb-1">
                      PHONE &amp; WHATSAPP
                    </span>
                    <a href="tel:+919745569225" className="text-sm font-bold text-white font-mono hover:text-[#6B7E74] transition-colors block">
                      97455 69225
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#6B7E74]/20 text-[#6B7E74] flex items-center justify-center shrink-0 border border-[#6B7E74]/30 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#6B7E74] uppercase tracking-wider font-sans block mb-1">
                      EMAIL ADDRESS
                    </span>
                    <a href="mailto:advpraarathy123@gmail.com" className="text-xs sm:text-sm font-semibold text-white hover:text-[#6B7E74] transition-colors break-all">
                      advpraarathy123@gmail.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action CTAs: WhatsApp & Call */}
            <div className="space-y-3 relative z-10 pt-4 border-t border-[#6B7E74]/30">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#6B7E74] hover:bg-[#586A61] text-white px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all shadow-sm font-sans"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP DIRECT</span>
              </a>

              <a
                href="tel:+919745569225"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all border border-[#6B7E74]/50 font-sans"
              >
                <Phone className="w-4 h-4 text-[#6B7E74]" />
                <span>CALL 97455 69225</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
