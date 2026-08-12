import React from 'react';
import { Scale, Gavel, FileText } from 'lucide-react';

export default function PracticeAreas() {
  const cards = [
    {
      icon: Scale,
      title: 'CIVIL MATTERS',
      description:
        'Representation and legal assistance in various civil matters before appropriate courts and tribunals.',
    },
    {
      icon: Gavel,
      title: 'CRIMINAL MATTERS',
      description:
        'Strong representation and legal assistance in criminal proceedings and related matters.',
    },
    {
      icon: FileText,
      title: 'NOTARIAL SERVICES',
      description:
        'Notary Public services including notarial acts, attestations and other notarial works.',
    },
  ];

  return (
    <section id="practice-areas" className="py-16 sm:py-24 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Classical Legal Ornamentation */}
        <div className="flex flex-col items-center justify-center mb-14 sm:mb-18">
          {/* Top Gold Scales Emblem */}
          <div className="w-10 h-10 rounded-full border border-[#BE9A5A]/50 bg-[#FAF8F3] flex items-center justify-center mb-3 shadow-2xs">
            <Scale className="w-5 h-5 text-[#BE9A5A]" strokeWidth={1.5} />
          </div>

          {/* Section Title flanked by delicate gold lines */}
          <div className="flex items-center gap-4 sm:gap-6 w-full max-w-lg justify-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#BE9A5A]/70 to-[#BE9A5A]"></div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#14201D] tracking-[0.25em] text-center uppercase">
              PRACTICE AREAS
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#BE9A5A]/70 to-[#BE9A5A]"></div>
          </div>
        </div>

        {/* 3 Editorial Practice Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <div
                key={index}
                className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-lg p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 relative group"
              >
                {/* Circular Antique Gold Badge */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F3ECE0] border border-[#BE9A5A]/40 flex items-center justify-center mb-6">
                  <IconComp className="w-8 h-8 sm:w-9 sm:h-9 text-[#BE9A5A]" strokeWidth={1.4} />
                </div>

                {/* Card Title - High Contrast Serif */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14201D] tracking-wider uppercase mb-3 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#565C58] leading-relaxed font-sans max-w-xs mb-6 font-normal">
                  {card.description}
                </p>

                {/* Small Decorative Gold Underline Separator */}
                <div className="mt-auto flex items-center gap-2 text-[#BE9A5A]/70">
                  <div className="w-6 h-[1px] bg-[#BE9A5A]/50"></div>
                  <span className="text-[9px]">❖</span>
                  <div className="w-6 h-[1px] bg-[#BE9A5A]/50"></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
