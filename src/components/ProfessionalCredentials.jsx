import React from 'react';
import { Award, Calendar, GraduationCap, Briefcase } from 'lucide-react';

export default function ProfessionalCredentials() {
  return (
    <section className="bg-[#FAF8F3] border-b border-[#E6E0D2] py-8 sm:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Card Container */}
        <div className="bg-[#F4EFE6] border border-[#E6E0D2] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E0D2]">
            
            {/* 1. ENROLLMENT NO. */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5">
              <div className="flex items-center gap-2 text-[#BE9A5A]">
                <Award className="w-4 h-4 text-[#BE9A5A]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-sans text-[#8C733E]">
                  ENROLLMENT NO.
                </span>
              </div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#14201D] tracking-wider pt-0.5">
                K/000931/2004
              </span>
            </div>

            {/* 2. ENROLLMENT DATE */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5 pt-4 sm:pt-0 sm:pl-6 lg:pl-8">
              <div className="flex items-center gap-2 text-[#BE9A5A]">
                <Calendar className="w-4 h-4 text-[#BE9A5A]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-sans text-[#8C733E]">
                  ENROLLMENT DATE
                </span>
              </div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#14201D] tracking-wider pt-0.5">
                21.11.2004
              </span>
            </div>

            {/* 3. QUALIFICATION */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 pt-4 sm:pt-0 sm:pl-6 lg:pl-8">
              <div className="flex items-center gap-2 text-[#BE9A5A]">
                <GraduationCap className="w-4 h-4 text-[#BE9A5A]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-sans text-[#8C733E]">
                  QUALIFICATION
                </span>
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#14201D] tracking-wide pt-1">
                B.A., LL.B.
              </span>
            </div>

            {/* 4. PRACTICE EXPERIENCE */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 pt-4 sm:pt-0 sm:pl-6 lg:pl-8">
              <div className="flex items-center gap-2 text-[#BE9A5A]">
                <Briefcase className="w-4 h-4 text-[#BE9A5A]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-sans text-[#8C733E]">
                  PRACTICE EXPERIENCE
                </span>
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#14201D] tracking-wide pt-1">
                22 Years
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
