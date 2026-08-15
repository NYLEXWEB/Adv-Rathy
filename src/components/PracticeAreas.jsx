import React from 'react';
import { FileText, HeartHandshake, Gavel, Scale, Star } from 'lucide-react';

export default function PracticeAreas() {
  const cards = [
    {
      id: '01',
      title: 'NOTARY',
      subtitle: 'PRIMARY PRACTICE FOCUS',
      description: 'Authorized Notary Public and related notarial works.',
      icon: FileText,
      featured: true,
    },
    {
      id: '02',
      title: 'FAMILY COURT',
      subtitle: 'FAMILY LAW PRACTICE',
      description: 'Legal practice relating to Family Court matters.',
      icon: HeartHandshake,
      featured: false,
    },
    {
      id: '03',
      title: 'CRIMINAL',
      subtitle: 'CRIMINAL DEFENSE',
      description: 'Legal practice relating to criminal proceedings and defense.',
      icon: Gavel,
      featured: false,
    },
    {
      id: '04',
      title: 'CIVIL',
      subtitle: 'CIVIL LITIGATION',
      description: 'Legal practice relating to civil court matters.',
      icon: Scale,
      featured: false,
    },
  ];

  return (
    <section id="practice-areas" className="py-16 sm:py-24 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 text-center">
          <div className="w-10 h-10 rounded-full border border-[#BE9A5A]/50 bg-[#FAF8F3] flex items-center justify-center mb-3 shadow-2xs">
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

        {/* 4 Practice Cards (01 Notary Featured -> 02 Family Court -> 03 Criminal -> 04 Civil) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  card.featured
                    ? 'bg-[#14201D] text-white border-2 border-[#BE9A5A] shadow-md ring-1 ring-[#BE9A5A]/30 lg:-translate-y-2'
                    : 'bg-[#FAF8F3] text-[#14201D] border border-[#E6E0D2] shadow-2xs hover:border-[#BE9A5A]/60'
                }`}
              >
                {/* Featured Badge for Notary */}
                {card.featured && (
                  <div className="absolute -top-3 right-6 bg-[#BE9A5A] text-[#14201D] text-[9px] font-bold tracking-[0.2em] px-3 py-1 rounded-full uppercase flex items-center gap-1 shadow-sm font-sans">
                    <Star className="w-3 h-3 fill-[#14201D]" />
                    <span>PRIMARY FOCUS</span>
                  </div>
                )}

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-xs font-bold ${card.featured ? 'text-[#BE9A5A]' : 'text-[#8C733E]'}`}>
                      {card.id}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        card.featured
                          ? 'bg-[#BE9A5A]/20 text-[#BE9A5A] border border-[#BE9A5A]/40'
                          : 'bg-[#F4EFE6] text-[#BE9A5A] border border-[#BE9A5A]/30'
                      }`}
                    >
                      <IconComp className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-4">
                    <h3 className={`font-serif text-xl sm:text-2xl font-bold uppercase ${card.featured ? 'text-white' : 'text-[#14201D]'}`}>
                      {card.title}
                    </h3>
                    <span className={`text-[10px] font-bold tracking-[0.18em] uppercase block font-sans ${card.featured ? 'text-[#BE9A5A]' : 'text-[#8C733E]'}`}>
                      {card.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed font-sans font-normal ${card.featured ? 'text-[#D0D4D2]' : 'text-[#565C58]'}`}>
                    {card.description}
                  </p>
                </div>

                {/* Bottom Gold Line Ornament */}
                <div className="pt-6 mt-6 border-t border-current/10 flex items-center gap-2">
                  <div className={`w-6 h-[1px] ${card.featured ? 'bg-[#BE9A5A]' : 'bg-[#BE9A5A]/60'}`}></div>
                  <span className={`text-[9px] ${card.featured ? 'text-[#BE9A5A]' : 'text-[#8C733E]'}`}>❖</span>
                  <div className={`w-full h-[1px] ${card.featured ? 'bg-[#BE9A5A]/40' : 'bg-[#BE9A5A]/30'}`}></div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
