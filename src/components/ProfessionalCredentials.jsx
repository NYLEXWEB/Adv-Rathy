'use client';

import React from 'react';
import { Award, Briefcase, GraduationCap, MapPin, Scale } from 'lucide-react';

export default function ProfessionalCredentials() {
  const credentials = [
    {
      icon: Award,
      label: 'ENROLLMENT NUMBER',
      value: 'K/000931/2004',
      sub: 'Bar Council of Kerala',
      isNumber: true,
    },
    {
      icon: Briefcase,
      label: 'ENROLLMENT DATE',
      value: '21.11.2004',
      sub: '22 Years Standing',
      isNumber: true,
    },
    {
      icon: GraduationCap,
      label: 'QUALIFICATION',
      value: 'B.A., LL.B.',
      sub: 'Professional Law Degree',
      isNumber: false,
    },
    {
      icon: Scale,
      label: 'NOTARY APPOINTMENT',
      value: 'Central Govt. Authorized (India)',
      sub: 'Notary Public Services',
      isNumber: false,
    },
    {
      icon: MapPin,
      label: 'LOCATION & COURTS',
      value: 'Sultan Bathery',
      sub: 'Wayanad District Courts',
      isNumber: false,
    },
  ];

  return (
    <section className="bg-[#FAF8F3] border-b border-[#E6E0D2] py-8 sm:py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Credentials Grid: 1 column on mobile screens (one by one), 2 on sm, 3 on md, 5 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#F8F6F0] border border-[#E6E0D2] rounded-xl p-5 text-center space-y-2 card-hover-effect transition-all duration-300 hover:border-[#6B7E74]/60"
              >
                {/* Icon with hover bounce */}
                <div className="w-9 h-9 rounded-lg bg-[#FAF8F3] border border-[#E6E0D2] flex items-center justify-center mx-auto text-[#6B7E74] group-hover:scale-110 group-hover:bg-[#0D1110] group-hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[9px] font-bold text-[#6B7E74] tracking-widest font-sans uppercase block">
                    {item.label}
                  </span>
                  <p className={`${item.isNumber ? 'font-sans font-bold' : 'font-cormorant font-bold'} text-lg sm:text-xl text-[#0D1110] tracking-tight group-hover:text-[#6B7E74] transition-colors mt-0.5`}>
                    {item.value}
                  </p>
                  <p className="text-[10px] text-[#565C58] font-sans font-medium">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
