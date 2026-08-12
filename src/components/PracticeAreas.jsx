import React, { useState } from 'react';
import { Scale, Gavel, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

export default function PracticeAreas() {
  const [activeTab, setActiveTab] = useState(0);

  const practiceAreas = [
    {
      id: '01',
      title: 'CIVIL MATTERS',
      subtitle: 'Civil Litigation & Dispute Resolution',
      icon: Scale,
      summary:
        'Representation and comprehensive legal assistance in various civil matters before appropriate courts and tribunals.',
      details: [
        'Property & Land Disputes Resolution',
        'Contractual & Injunction Suits',
        'Money Suits & Recovery Proceedings',
        'Appellate Proceedings & Civil Revisions',
        'Family & Succession Legal Matters',
      ],
    },
    {
      id: '02',
      title: 'CRIMINAL MATTERS',
      subtitle: 'Criminal Defense & Proceedings',
      icon: Gavel,
      summary:
        'Strong representation and legal assistance in criminal proceedings, trial court defense, and related legal matters.',
      details: [
        'Bail & Anticipatory Bail Applications',
        'Trial Court Defense & Proceedings',
        'Criminal Appeals & Revision Petitions',
        'Private Complaints & Statutory Remedies',
        'Legal Counsel in Criminal Proceedings',
      ],
    },
    {
      id: '03',
      title: 'NOTARIAL SERVICES',
      subtitle: 'Authorized Notary Public Works',
      icon: FileText,
      summary:
        'Authorized Notary Public services including execution of notarial acts, attestations, affidavits, and legal verifications.',
      details: [
        'Document Attestations & Verification',
        'Affidavits & Sworn Declarations',
        'Power of Attorney Authentication',
        'Notarial Certificate Issuance',
        'Execution of Official Notarial Acts',
      ],
    },
  ];

  return (
    <section id="practice-areas" className="py-16 sm:py-24 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
          <div className="w-11 h-11 rounded-full border border-[#BE9A5A]/50 bg-[#FAF8F3] flex items-center justify-center mb-3 shadow-2xs">
            <Scale className="w-5 h-5 text-[#BE9A5A]" strokeWidth={1.5} />
          </div>

          <div className="flex items-center gap-4 sm:gap-6 w-full max-w-lg justify-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#BE9A5A]/80 to-[#BE9A5A]"></div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#14201D] tracking-[0.25em] text-center uppercase">
              PRACTICE AREAS
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#BE9A5A]/80 to-[#BE9A5A]"></div>
          </div>
        </div>

        {/* Desktop & Tablet: Classical Editorial Unified Panel */}
        <div className="hidden lg:grid grid-cols-12 bg-[#FAF8F3] border border-[#E6E0D2] rounded-2xl overflow-hidden shadow-xs">
          
          {/* Left Column: Interactive Practice Selector List */}
          <div className="col-span-4 border-r border-[#E6E0D2] bg-[#F4EFE6]/60 p-6 space-y-3">
            <span className="text-[10px] font-bold text-[#8C733E] uppercase tracking-[0.2em] px-3 font-sans">
              SELECT PRACTICE AREA
            </span>
            
            {practiceAreas.map((area, idx) => {
              const IconComponent = area.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#14201D] text-white shadow-sm border border-[#BE9A5A]/40'
                      : 'hover:bg-[#EAE3D5] text-[#14201D]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#BE9A5A]' : 'text-[#8C733E]'}`}>
                      {area.id}
                    </span>
                    <div>
                      <h3 className={`font-serif text-sm font-bold tracking-wider uppercase ${isActive ? 'text-white' : 'text-[#14201D]'}`}>
                        {area.title}
                      </h3>
                      <span className={`text-[11px] block font-sans ${isActive ? 'text-[#D0D4D2]' : 'text-[#565C58]'}`}>
                        {area.subtitle}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#BE9A5A] translate-x-1' : 'text-[#8C733E] opacity-0 group-hover:opacity-100'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Editorial Display for Active Area */}
          <div className="col-span-8 p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between border-b border-[#E6E0D2] pb-6">
                <div>
                  <span className="text-xs font-bold text-[#BE9A5A] tracking-[0.2em] font-mono uppercase block mb-1">
                    AREA OF PRACTICE // {practiceAreas[activeTab].id}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#14201D] uppercase">
                    {practiceAreas[activeTab].title}
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-full bg-[#14201D] text-[#BE9A5A] flex items-center justify-center border border-[#BE9A5A]/40">
                  {React.createElement(practiceAreas[activeTab].icon, { className: "w-7 h-7", strokeWidth: 1.5 })}
                </div>
              </div>

              {/* Summary Paragraph */}
              <p className="text-sm text-[#565C58] leading-relaxed font-sans font-normal">
                {practiceAreas[activeTab].summary}
              </p>

              {/* Verified Practice Scope Bullet Points */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-[#14201D] uppercase tracking-wider block font-sans">
                  SCOPE OF LEGAL ASSISTANCE:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {practiceAreas[activeTab].details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 bg-[#F4EFE6] p-3 rounded-lg border border-[#E6E0D2]">
                      <CheckCircle2 className="w-4 h-4 text-[#BE9A5A] shrink-0" />
                      <span className="text-xs text-[#14201D] font-medium font-sans">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Gold Ornament */}
            <div className="flex items-center gap-3 text-[#BE9A5A]/60 pt-4 border-t border-[#E6E0D2]/60">
              <div className="w-12 h-[1px] bg-[#BE9A5A]/50"></div>
              <span className="text-xs">❖ ADV. P. R. RATHY</span>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#BE9A5A]/50 to-transparent"></div>
            </div>

          </div>

        </div>

        {/* Mobile & Small Screen: Stacked Classical Legal Publication View */}
        <div className="block lg:hidden space-y-6">
          {practiceAreas.map((area) => {
            const IconComp = area.icon;
            return (
              <div
                key={area.id}
                className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-xl p-6 space-y-5 shadow-2xs"
              >
                <div className="flex items-center gap-3.5 border-b border-[#E6E0D2] pb-4">
                  <div className="w-11 h-11 rounded-full bg-[#14201D] text-[#BE9A5A] flex items-center justify-center shrink-0 border border-[#BE9A5A]/30">
                    <IconComp className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#BE9A5A] tracking-wider font-mono">
                      {area.id} // PRACTICE
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#14201D] uppercase">
                      {area.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#565C58] leading-relaxed">
                  {area.summary}
                </p>

                <div className="space-y-2 pt-1">
                  {area.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#14201D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#BE9A5A] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
