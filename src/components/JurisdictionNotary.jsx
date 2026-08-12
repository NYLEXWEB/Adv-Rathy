import React from 'react';
import { MapPin, FileCheck, Shield, CheckCircle2 } from 'lucide-react';

export default function JurisdictionNotary() {
  return (
    <section id="notary" className="py-16 sm:py-20 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#BE9A5A] text-xs font-semibold tracking-[0.2em] font-sans uppercase">
            <span>⟡</span> JURISDICTION &amp; NOTARY <span>⟡</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#14201D] tracking-wider uppercase">
            PRACTICE JURISDICTION &amp; NOTARY PUBLIC
          </h2>
          <div className="w-16 h-[2px] bg-[#BE9A5A] mx-auto"></div>
        </div>

        {/* 2 Column Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Practice Jurisdiction */}
          <div className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-xl p-8 sm:p-10 shadow-2xs space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#14201D] text-[#BE9A5A] flex items-center justify-center shrink-0 border border-[#BE9A5A]/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14201D] uppercase">
                  PRACTICE JURISDICTION
                </h3>
                <span className="text-xs text-[#BE9A5A] font-sans font-semibold tracking-wider uppercase">
                  WAYANAD &amp; KERALA COURTS
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-[#F4EFE6] p-4 rounded-lg border border-[#E6E0D2]">
                <CheckCircle2 className="w-5 h-5 text-[#BE9A5A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#14201D] text-sm font-sans">Wayanad District Courts</h4>
                  <p className="text-xs text-[#565C58] mt-1 leading-relaxed">
                    Representation and practice in Civil &amp; Criminal matters before Sub Courts, Munsiff Courts, Sessions &amp; Magistrate Courts in Wayanad District.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F4EFE6] p-4 rounded-lg border border-[#E6E0D2]">
                <CheckCircle2 className="w-5 h-5 text-[#BE9A5A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#14201D] text-sm font-sans">Various Courts in Kerala</h4>
                  <p className="text-xs text-[#565C58] mt-1 leading-relaxed">
                    Legal practice and representation across various appellate and specialized courts within the state of Kerala.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Notary Public Services */}
          <div className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-xl p-8 sm:p-10 shadow-2xs space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#14201D] text-[#BE9A5A] flex items-center justify-center shrink-0 border border-[#BE9A5A]/30">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14201D] uppercase">
                  NOTARY PUBLIC
                </h3>
                <span className="text-xs text-[#BE9A5A] font-sans font-semibold tracking-wider uppercase">
                  NOTARIAL ACTS &amp; ATTESTATION
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-[#F4EFE6] p-4 rounded-lg border border-[#E6E0D2]">
                <Shield className="w-5 h-5 text-[#BE9A5A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#14201D] text-sm font-sans">Official Notarial Services</h4>
                  <p className="text-xs text-[#565C58] mt-1 leading-relaxed">
                    Authorized Notary Public services including execution of notarial acts, document attestations, affidavits, and power of attorney verifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F4EFE6] p-4 rounded-lg border border-[#E6E0D2]">
                <Shield className="w-5 h-5 text-[#BE9A5A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#14201D] text-sm font-sans">Verification &amp; Authentication</h4>
                  <p className="text-xs text-[#565C58] mt-1 leading-relaxed">
                    Reliable authentication of legal instruments, oaths, declarations, and certified true copies with official seal.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
