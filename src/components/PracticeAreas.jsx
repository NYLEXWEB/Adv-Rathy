import React from 'react';
import { Scale, Gavel, FileCheck2 } from 'lucide-react';

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
      icon: FileCheck2,
      title: 'NOTARIAL SERVICES',
      description:
        'Notary Public services including notarial acts, attestations and other notarial works.',
    },
  ];

  return (
    <section id="practice-areas" className="py-16 sm:py-24 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Decorative Header */}
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
          {/* Top Gold Scales Emblem */}
          <div className="w-10 h-10 rounded-full border border-[#BE9A5A]/40 bg-[#FAF8F3] flex items-center justify-center mb-3 shadow-2xs">
            <Scale className="w-5 h-5 text-[#BE9A5A]" />
          </div>

          {/* Section Title with Lines */}
          <div className="flex items-center gap-4 sm:gap-6 w-full max-w-md justify-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#BE9A5A] to-[#BE9A5A]"></div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#14201D] tracking-[0.2em] text-center uppercase">
              PRACTICE AREAS
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#BE9A5A] to-[#BE9A5A]"></div>
          </div>
        </div>

        {/* 3 Practice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <div
                key={index}
                className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-lg p-8 sm:p-10 flex flex-col items-center text-center shadow-2xs hover:border-[#BE9A5A]/60 hover:shadow-md transition-all duration-300 group"
              >
                {/* Circular Gold Icon Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5EFDF] border border-[#BE9A5A]/40 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#F0E6CE] transition-all duration-300">
                  <IconComp className="w-8 h-8 sm:w-10 sm:h-10 text-[#BE9A5A]" strokeWidth={1.4} />
                </div>

                {/* Card Serif Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14201D] tracking-wider uppercase mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#565C58] leading-relaxed font-sans max-w-xs mb-6">
                  {card.description}
                </p>

                {/* Subtle Gold Accent Underline */}
                <div className="mt-auto w-10 h-[2px] bg-[#BE9A5A]/60 group-hover:w-16 group-hover:bg-[#BE9A5A] transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
