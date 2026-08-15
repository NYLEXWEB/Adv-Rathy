import React from 'react';
import { Scale, Users, ShieldAlert, FileText, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function PracticeAreas() {
  const practiceAreas = [
    {
      id: 'notary',
      priority: 'PRIORITY 01',
      title: 'Notary Public',
      subtitle: 'Central Govt. Authorized Notary',
      icon: Scale,
      badge: 'OFFICIAL SERVICE',
      badgeColor: 'bg-[#0D1110] text-[#6B7E74] border-[#6B7E74]/40',
      description: 'Comprehensive Notary Public services including document attestation, affidavits, verification, and statutory execution under central appointment.',
      services: [
        'Affidavits & Declarations Attestation',
        'Power of Attorney Verification',
        'Document Legalization & Copies Certification',
        'Statutory Oath Administration',
      ],
      ctaText: 'REQUEST NOTARY ATTESTATION',
    },
    {
      id: 'family',
      priority: 'PRIORITY 02',
      title: 'Family Court Practice',
      subtitle: 'Matrimonial & Domestic Relations',
      icon: Users,
      badge: 'SPECIALIZED FOCUS',
      badgeColor: 'bg-[#F4EFE6] text-[#4F6157] border-[#6B7E74]/30',
      description: 'Dedicated legal representation in Family Court matters with absolute confidentiality, focus on dispute resolution, and protecting client rights.',
      services: [
        'Divorce Proceedings & Mutual Separation',
        'Child Custody & Guardianship Matters',
        'Maintenance & Alimony Claims',
        'Restitution of Conjugal Rights & Domestic Disputes',
      ],
      ctaText: 'CONSULT FAMILY LAWYER',
    },
    {
      id: 'criminal',
      priority: 'PRIORITY 03',
      title: 'Criminal Practice',
      subtitle: 'Defense & Legal Proceedings',
      icon: ShieldAlert,
      badge: 'COURT PRACTICE',
      badgeColor: 'bg-[#F4EFE6] text-[#4F6157] border-[#6B7E74]/30',
      description: 'Robust criminal defense across Magistrate & Sessions Courts, handling bail applications, trials, inquiries, and statutory legal defense.',
      services: [
        'Bail Applications & Anticipatory Bail',
        'Criminal Trial Defense & Proceedings',
        'Cheque Bounce (Sec 138 NI Act) Cases',
        'Police Station Legal Assistance & Appeals',
      ],
      ctaText: 'DISCUSS CRIMINAL DEFENSE',
    },
    {
      id: 'civil',
      priority: 'PRIORITY 04',
      title: 'Civil Litigation',
      subtitle: 'Property & Contracts',
      icon: FileText,
      badge: 'CIVIL DISPUTES',
      badgeColor: 'bg-[#F4EFE6] text-[#4F6157] border-[#6B7E74]/30',
      description: 'Full-spectrum civil litigation services covering property disputes, land matters, injunctions, and contract enforcement across Wayanad courts.',
      services: [
        'Property & Land Title Disputes',
        'Injunction Suits & Partition Claims',
        'Contract Breach & Recovery Suits',
        'Revenue & Land Registration Matters',
      ],
      ctaText: 'INQUIRE CIVIL MATTER',
    },
  ];

  const whatsappUrl = "https://wa.me/919745569225?text=Hello%20Adv.%20P.%20R.%20Rathy%2C%20I%20would%20like%20to%20consult%20regarding%20legal%20services.";

  return (
    <section id="practice-areas" className="py-20 sm:py-28 bg-[#FAF8F3] border-b border-[#E6E0D2] relative overflow-hidden">
      
      {/* Background Subtle Accent Art */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#6B7E74_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F4EFE6] border border-[#6B7E74]/30 px-3.5 py-1 rounded-full text-[10px] font-bold text-[#6B7E74] tracking-[0.2em] uppercase font-sans">
            <Scale className="w-3.5 h-3.5" />
            <span>PRIMARY PRACTICE AREAS</span>
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#0D1110] tracking-wider uppercase leading-tight">
            CORE LEGAL PRACTICE
          </h2>
          
          <p className="font-serif text-base sm:text-xl text-[#6B7E74] italic">
            Prioritized Legal Representation &amp; Notary Services — Adv. P. R. Rathy
          </p>
          
          <div className="w-20 h-[2px] bg-[#6B7E74] mx-auto mt-2"></div>
        </div>

        {/* 4 Cards Grid - Priority Order (1. Notary, 2. Family, 3. Criminal, 4. Civil) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            const isFeatured = area.id === 'notary';

            return (
              <div
                key={area.id}
                id={area.id}
                className={`group relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between card-hover-effect transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#0D1110] text-white border-2 border-[#6B7E74]/60 shadow-lg'
                    : 'bg-[#F8F6F0] text-[#111615] border border-[#E6E0D2] shadow-2xs hover:border-[#6B7E74]/40'
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Gold Top Accent Line Animation */}
                <div className={`absolute top-0 left-6 right-6 h-[2px] rounded-full transition-all duration-500 ${
                  isFeatured ? 'bg-[#6B7E74]' : 'bg-[#6B7E74]/0 group-hover:bg-[#6B7E74]'
                }`} />

                <div className="space-y-6">
                  
                  {/* Card Header: Priority & Badge */}
                  <div className="flex items-center justify-between border-b pb-4 border-[#E6E0D2]/30">
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                      isFeatured ? 'text-[#6B7E74]' : 'text-[#6B7E74]'
                    }`}>
                      {area.priority}
                    </span>
                    <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full border tracking-wider font-sans uppercase ${area.badgeColor}`}>
                      {area.badge}
                    </span>
                  </div>

                  {/* Title & Icon with Micro Animation */}
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 ${
                      isFeatured
                        ? 'bg-[#181E1C] border-[#6B7E74]/50 text-[#6B7E74] group-hover:border-[#6B7E74]'
                        : 'bg-[#FAF8F3] border-[#E6E0D2] text-[#0D1110] group-hover:border-[#6B7E74]/50 group-hover:text-[#6B7E74]'
                    }`}>
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>

                    <div>
                      <h3 className={`font-serif text-2xl font-bold leading-snug group-hover:text-[#6B7E74] transition-colors ${
                        isFeatured ? 'text-white' : 'text-[#0D1110]'
                      }`}>
                        {area.title}
                      </h3>
                      <p className={`text-xs font-sans font-medium tracking-wide ${
                        isFeatured ? 'text-[#6B7E74]' : 'text-[#6B7E74]'
                      }`}>
                        {area.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed font-sans ${
                    isFeatured ? 'text-[#D0D4D2]' : 'text-[#565C58]'
                  }`}>
                    {area.description}
                  </p>

                  {/* Key Services List */}
                  <div className="space-y-2 pt-2 border-t border-[#E6E0D2]/20">
                    <span className={`text-[10px] font-bold tracking-wider uppercase font-sans block ${
                      isFeatured ? 'text-[#6B7E74]' : 'text-[#4F6157]'
                    }`}>
                      KEY PRACTICE AREAS:
                    </span>
                    <ul className="space-y-1.5 text-xs font-sans">
                      {area.services.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isFeatured ? 'text-[#6B7E74]' : 'text-[#6B7E74]'
                          }`} />
                          <span className={isFeatured ? 'text-[#E0E4E2]' : 'text-[#222725]'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom CTA Link */}
                <div className="pt-6 mt-6 border-t border-[#E6E0D2]/30">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-between py-2.5 px-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 font-sans group/btn ${
                      isFeatured
                        ? 'bg-[#6B7E74] hover:bg-[#586A61] text-white shadow-xs'
                        : 'bg-[#FAF8F3] hover:bg-[#0D1110] text-[#0D1110] hover:text-white border border-[#E6E0D2]'
                    }`}
                  >
                    <span>{area.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Practice Strip Footer */}
        <div className="bg-[#0D1110] border border-[#6B7E74]/40 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-bold text-[#6B7E74] tracking-widest uppercase font-sans">
              COURT &amp; NOTARY JURISDICTION
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Wayanad District Courts &amp; High Court of Kerala
            </h4>
            <p className="text-xs text-[#D0D4D2] font-sans">
              Providing dedicated legal counsel, notary execution, and representation in all local and appellate courts.
            </p>
          </div>

          <a
            href="tel:+919745569225"
            className="shrink-0 bg-[#6B7E74] hover:bg-[#586A61] text-white px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all font-sans shadow-xs hover:shadow-md hover:scale-105 transform"
          >
            CALL 97455 69225 DIRECTLY
          </a>
        </div>

      </div>
    </section>
  );
}
