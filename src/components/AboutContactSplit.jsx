import React from 'react';
import { GraduationCap, Briefcase, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function AboutContactSplit() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl overflow-hidden border border-[#E6E0D2] shadow-sm grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT SIDE: About Adv. P. R. Rathy (Ivory Light Panel) */}
          <div className="bg-[#FAF8F3] p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              {/* Heading */}
              <div>
                <h2 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-[#14201D] tracking-wider uppercase">
                  ABOUT ADV. P. R. RATHY
                </h2>
                <div className="w-12 h-[2px] bg-[#BE9A5A] mt-2"></div>
              </div>

              {/* Main Content Paragraphs */}
              <p className="text-sm sm:text-base text-[#565C58] leading-relaxed font-sans">
                Adv. P. R. Rathy is an Advocate and Notary with 22 years of professional practice in Civil and Criminal matters. He appears before courts across Wayanad District and various courts in Kerala.
              </p>

              <p className="text-xs sm:text-sm text-[#565C58] leading-relaxed font-sans">
                Committed to providing reliable legal services with integrity, professionalism and client-focused approach.
              </p>
            </div>

            {/* Bottom 2 Qualification & Experience Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E6E0D2]/60">
              {/* Qualification Box */}
              <div className="bg-[#F4EFE6] border border-[#E6E0D2] rounded-lg p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-[#14201D] text-[#BE9A5A] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#8C733E] uppercase tracking-wider block font-sans">
                    QUALIFICATION
                  </span>
                  <span className="text-sm font-bold text-[#14201D] font-serif">
                    B.A., LL.B.
                  </span>
                </div>
              </div>

              {/* Experience Box */}
              <div className="bg-[#F4EFE6] border border-[#E6E0D2] rounded-lg p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-[#14201D] text-[#BE9A5A] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#8C733E] uppercase tracking-wider block font-sans">
                    EXPERIENCE
                  </span>
                  <span className="text-sm font-bold text-[#14201D] font-serif">
                    22 Years
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Office & Contact (Deep Dark Panel) */}
          <div className="bg-dark-panel p-8 sm:p-12 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Subtle Lady Justice Line Art SVG Overlay */}
            <div className="absolute right-[-20px] bottom-[-20px] w-64 h-80 opacity-15 pointer-events-none text-[#BE9A5A]">
              <svg viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth="1.5">
                {/* Lady Justice outline SVG representation */}
                <path d="M100 20 C100 20, 105 35, 100 45 C95 55, 90 70, 95 85 C100 100, 110 120, 105 140" />
                <circle cx="100" cy="30" r="12" />
                {/* Scales */}
                <path d="M60 70 L140 70 M60 70 L40 110 M60 70 L80 110 M140 70 L120 110 M140 70 L160 110" />
                <path d="M35 110 Q60 120 85 110 M115 110 Q140 120 165 110" />
                {/* Sword */}
                <path d="M105 120 L105 240 M95 130 L115 130" />
              </svg>
            </div>

            <div className="space-y-6 relative z-10">
              {/* Header with Gold Line */}
              <div className="flex items-center gap-3">
                <h2 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-wider uppercase">
                  OFFICE &amp; CONTACT
                </h2>
                <div className="h-[1px] w-12 bg-[#BE9A5A]"></div>
              </div>

              {/* Contact Information List */}
              <div className="space-y-5 pt-2 text-xs sm:text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#BE9A5A]/15 border border-[#BE9A5A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#BE9A5A]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-[#D0D4D2] leading-relaxed">
                    <p className="font-medium text-white">O.K. Khalid Building,</p>
                    <p>Near Court Complex,</p>
                    <p>Sultan Bathery, Wayanad District,</p>
                    <p>Kerala – 673592.</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#BE9A5A]/15 border border-[#BE9A5A]/30 flex items-center justify-center shrink-0 text-[#BE9A5A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:9745569225" className="text-white hover:text-[#BE9A5A] font-mono text-sm tracking-wider transition-colors">
                    97455 69225
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#BE9A5A]/15 border border-[#BE9A5A]/30 flex items-center justify-center shrink-0 text-[#BE9A5A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:advpraarathy123@gmail.com" className="text-[#D0D4D2] hover:text-white transition-colors">
                    advpraarathy123@gmail.com
                  </a>
                </div>

                {/* Office Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#BE9A5A]/15 border border-[#BE9A5A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#BE9A5A]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-[#D0D4D2] leading-relaxed">
                    <p className="font-medium text-white">Mon - Sat : 10:00 AM - 6:00 PM</p>
                    <p className="text-xs text-[#9DA3A0]">(Sunday by Appointment)</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
