import React from 'react';
import { Award, FileText, HeartHandshake, Scale } from 'lucide-react';

export default function QuickInfoStrip() {
  const items = [
    {
      number: '22 YEARS',
      label: 'LEGAL PRACTICE',
      desc: '22 years of professional legal practice.',
      icon: Award,
    },
    {
      number: 'NOTARY',
      label: 'PUBLIC',
      desc: 'Authorized Notary Public.',
      icon: FileText,
      featured: true,
    },
    {
      number: 'FAMILY COURT',
      label: 'PRACTICE',
      desc: 'Practice relating to Family Court matters.',
      icon: HeartHandshake,
    },
    {
      number: 'CIVIL & CRIMINAL',
      label: 'MATTERS',
      desc: 'Civil and Criminal court matters.',
      icon: Scale,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F8F6F0] border-b border-[#E6E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border flex flex-col items-center text-center transition-all ${
                  item.featured
                    ? 'bg-[#14201D] text-white border-[#BE9A5A]/50 shadow-sm'
                    : 'bg-[#FAF8F3] text-[#14201D] border-[#E6E0D2]'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    item.featured
                      ? 'bg-[#BE9A5A]/20 text-[#BE9A5A] border border-[#BE9A5A]/40'
                      : 'bg-[#F4EFE6] text-[#BE9A5A] border border-[#BE9A5A]/30'
                  }`}
                >
                  <IconComp className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <h3 className={`font-serif text-lg font-bold uppercase tracking-wider ${item.featured ? 'text-white' : 'text-[#14201D]'}`}>
                  {item.number}
                </h3>
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase font-sans mb-2 ${item.featured ? 'text-[#BE9A5A]' : 'text-[#8C733E]'}`}>
                  {item.label}
                </span>

                <p className={`text-xs leading-relaxed font-sans ${item.featured ? 'text-[#D0D4D2]' : 'text-[#565C58]'}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
