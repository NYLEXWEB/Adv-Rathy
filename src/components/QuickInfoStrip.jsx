import React from 'react';
import { Landmark, Scale, MapPin, FileCheck } from 'lucide-react';

export default function QuickInfoStrip() {
  const infoItems = [
    {
      icon: Landmark,
      titleLine1: '22 YEARS',
      titleLine2: 'OF EXPERIENCE',
      description: 'Over two decades of professional legal practice and court experience.',
    },
    {
      icon: Scale,
      titleLine1: 'CIVIL & CRIMINAL',
      titleLine2: 'MATTERS',
      description: 'Handling a wide range of civil and criminal legal matters with dedication.',
    },
    {
      icon: MapPin,
      titleLine1: 'COURTS ACROSS',
      titleLine2: 'KERALA',
      description: 'Practice in courts across Wayanad District and various courts in Kerala.',
    },
    {
      icon: FileCheck,
      titleLine1: 'NOTARY',
      titleLine2: 'PUBLIC',
      description: 'Authorized Notary Public offering a wide range of notarial services.',
    },
  ];

  return (
    <section className="bg-[#FAF8F3] border-y border-[#E6E0D2] py-10 sm:py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#E6E0D2]">
          {infoItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4 sm:px-6 pt-6 lg:pt-0 first:pt-0 group"
              >
                {/* Circular Dark Icon Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#14201D] flex items-center justify-center mb-4 shadow-sm border border-[#BE9A5A]/30 group-hover:scale-105 group-hover:border-[#BE9A5A] transition-all duration-300">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-[#BE9A5A]" strokeWidth={1.5} />
                </div>

                {/* Heading */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#14201D] tracking-wider leading-snug uppercase mb-1">
                  <span>{item.titleLine1}</span> <br />
                  <span>{item.titleLine2}</span>
                </h3>

                {/* Decorative underline */}
                <div className="w-8 h-[2px] bg-[#BE9A5A]/60 my-2.5 group-hover:w-12 transition-all duration-300"></div>

                {/* Supporting Text */}
                <p className="text-xs sm:text-sm text-[#565C58] max-w-xs leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
