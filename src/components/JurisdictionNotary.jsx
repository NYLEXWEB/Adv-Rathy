import React from 'react';
import { MapPin, Stamp, Scale, HeartHandshake, Gavel, FileCheck, CheckCircle2 } from 'lucide-react';

export default function JurisdictionNotary() {
  return (
    <section id="notary" className="py-16 sm:py-24 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* 1. NOTARY PUBLIC FEATURE SECTION (Featured Primary Focus) */}
        <div className="bg-[#14201D] text-white border-2 border-[#BE9A5A] rounded-2xl p-8 sm:p-12 lg:p-14 shadow-lg relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#BE9A5A]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#BE9A5A]/20 border border-[#BE9A5A]/40 text-[#BE9A5A] px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase font-sans">
                <Stamp className="w-3.5 h-3.5" />
                <span>PRIMARY PRACTICE FOCUS</span>
              </div>

              <div className="space-y-2">
                <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wider uppercase">
                  NOTARY PUBLIC
                </h2>
                <p className="font-serif text-lg text-[#BE9A5A] italic">
                  Authorized Notary Public &amp; Related Notarial Works
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#D0D4D2] leading-relaxed font-sans max-w-2xl font-normal">
                Adv. P. R. Rathy is an authorized Notary Public providing authentic notarial services, legal attestations, document verifications, and execution of official notarial works.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 bg-[#1C2D29] border border-[#BE9A5A]/30 p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#BE9A5A] shrink-0" />
                  <span className="text-xs text-white font-medium font-sans">Notarial Acts &amp; Attestations</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#1C2D29] border border-[#BE9A5A]/30 p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#BE9A5A] shrink-0" />
                  <span className="text-xs text-white font-medium font-sans">Legal Document Verifications</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#1C2D29] border border-[#BE9A5A]/30 p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#BE9A5A] shrink-0" />
                  <span className="text-xs text-white font-medium font-sans">Sworn Affidavits &amp; Declarations</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#1C2D29] border border-[#BE9A5A]/30 p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#BE9A5A] shrink-0" />
                  <span className="text-xs text-white font-medium font-sans">Official Notarial Documentation</span>
                </div>
              </div>
            </div>

            {/* Right Emblem Illustration */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-2 border-[#BE9A5A] bg-[#1C2D29] flex flex-col items-center justify-center text-center p-6 shadow-md space-y-2">
                <Stamp className="w-12 h-12 text-[#BE9A5A]" strokeWidth={1.4} />
                <span className="font-serif text-sm font-bold tracking-widest text-white uppercase">
                  NOTARY PUBLIC
                </span>
                <span className="text-[9px] font-mono text-[#BE9A5A] tracking-wider uppercase">
                  WAYANAD · KERALA
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 2. PRACTICE JURISDICTION SECTION */}
        <div id="experience" className="space-y-10">
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <span className="text-xs font-semibold text-[#BE9A5A] tracking-[0.2em] uppercase font-sans">
              COURT PRACTICE
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#14201D] tracking-wider uppercase">
              PRACTICE JURISDICTION
            </h2>
            <div className="w-16 h-[2px] bg-[#BE9A5A] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Wayanad District */}
            <div className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-2xl p-8 space-y-4 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#14201D] text-[#BE9A5A] flex items-center justify-center border border-[#BE9A5A]/30">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#14201D] uppercase">
                WAYANAD DISTRICT
              </h3>
              <p className="text-sm text-[#565C58] leading-relaxed font-sans">
                Civil and Criminal court practice across Wayanad District.
              </p>
              <div className="pt-3 border-t border-[#E6E0D2]">
                <span className="text-[10px] font-bold text-[#8C733E] tracking-wider uppercase font-sans">
                  PRIMARY COURT LOCATION
                </span>
                <p className="text-xs font-semibold text-[#14201D] font-mono">Sultan Bathery Court Complex</p>
              </div>
            </div>

            {/* Kerala Courts */}
            <div className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-2xl p-8 space-y-4 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#14201D] text-[#BE9A5A] flex items-center justify-center border border-[#BE9A5A]/30">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#14201D] uppercase">
                KERALA COURTS
              </h3>
              <p className="text-sm text-[#565C58] leading-relaxed font-sans">
                Practice before various courts in Kerala.
              </p>
              <div className="pt-3 border-t border-[#E6E0D2]">
                <span className="text-[10px] font-bold text-[#8C733E] tracking-wider uppercase font-sans">
                  STATE JURISDICTION
                </span>
                <p className="text-xs font-semibold text-[#14201D] font-mono">Bar Council of Kerala (2004)</p>
              </div>
            </div>

          </div>
        </div>

        {/* 3. PRACTICE CATEGORY BLOCKS (Family Court, Criminal, Civil) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Family Court */}
          <div className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] text-[#BE9A5A] flex items-center justify-center border border-[#BE9A5A]/30">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#14201D] uppercase">
                FAMILY COURT
              </h4>
            </div>
            <p className="text-xs text-[#565C58] leading-relaxed font-sans">
              Legal practice relating to Family Court matters.
            </p>
          </div>

          {/* Criminal */}
          <div className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] text-[#BE9A5A] flex items-center justify-center border border-[#BE9A5A]/30">
                <Gavel className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#14201D] uppercase">
                CRIMINAL
              </h4>
            </div>
            <p className="text-xs text-[#565C58] leading-relaxed font-sans">
              Legal practice relating to criminal proceedings.
            </p>
          </div>

          {/* Civil */}
          <div className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] text-[#BE9A5A] flex items-center justify-center border border-[#BE9A5A]/30">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#14201D] uppercase">
                CIVIL
              </h4>
            </div>
            <p className="text-xs text-[#565C58] leading-relaxed font-sans">
              Legal practice relating to civil matters.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
