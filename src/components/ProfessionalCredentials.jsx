import React from 'react';
import { Award, Calendar, GraduationCap, Briefcase } from 'lucide-react';

export default function ProfessionalCredentials() {
  const credentials = [
    {
      label: 'ENROLLMENT NO.',
      value: 'K/000931/2004',
      icon: Award,
    },
    {
      label: 'ENROLLMENT DATE',
      value: '21.11.2004',
      icon: Calendar,
    },
    {
      label: 'QUALIFICATION',
      value: 'B.A., LL.B.',
      icon: GraduationCap,
    },
    {
      label: 'PRACTICE EXPERIENCE',
      value: '22 Years',
      icon: Briefcase,
    },
  ];

  return (
    <section className="bg-[#FAF8F3] border-b border-[#E6E0D2] py-8 sm:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Container */}
        <div className="bg-[#F4EFE6] border border-[#E6E0D2] rounded-xl p-6 sm:p-8 shadow-2xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E0D2]">
            {credentials.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5 ${
                    index !== 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#BE9A5A] mb-1">
                    <IconComp className="w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-sans text-[#8C733E]">
                      {item.label}
                    </span>
                  </div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#14201D] tracking-wide">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
