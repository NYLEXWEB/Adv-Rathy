import React from 'react';
import { Users, Landmark, FileText, ShieldCheck } from 'lucide-react';

export default function ExperienceStats() {
  const stats = [
    {
      icon: Users,
      value: '22+',
      label: 'Years of Practice',
    },
    {
      icon: Landmark,
      value: 'Multiple',
      label: 'Courts in Kerala',
    },
    {
      icon: FileText,
      value: 'Hundreds',
      label: 'of Cases Handled',
    },
    {
      icon: ShieldCheck,
      value: 'Trusted',
      label: 'Legal Support',
    },
  ];

  return (
    <section id="experience" className="py-12 bg-[#FAF8F3] border-b border-[#E6E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-x-0 sm:divide-x divide-[#E6E0D2]/80">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="flex items-center justify-center gap-4 px-2 sm:px-4 py-2 group">
                <div className="w-12 h-12 rounded-full bg-[#F4EFE6] border border-[#BE9A5A]/30 flex items-center justify-center shrink-0 group-hover:border-[#BE9A5A] group-hover:bg-[#EFE6D5] transition-all">
                  <IconComponent className="w-6 h-6 text-[#BE9A5A]" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#14201D] leading-tight block">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#565C58] font-sans font-medium">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative Gold Diamond Divider Line */}
        <div className="flex items-center justify-center gap-3 text-[#BE9A5A]/60 pt-10">
          <div className="w-20 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#BE9A5A] to-[#BE9A5A]"></div>
          <span className="text-xs">❖</span>
          <div className="w-20 sm:w-32 h-[1px] bg-gradient-to-l from-transparent via-[#BE9A5A] to-[#BE9A5A]"></div>
        </div>
      </div>
    </section>
  );
}
