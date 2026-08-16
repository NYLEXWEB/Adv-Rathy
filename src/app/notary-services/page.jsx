import React from 'react';
import Header from '../../components/Header';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import { Scale, FileText, FileCheck, CheckCircle2, Shield, Calendar, MapPin, Phone, HelpCircle } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adv-p-r-rathy.in';

export const metadata = {
  title: 'Notary Public Services in Sultan Bathery, Wayanad | Adv. P. R. Rathy',
  description: 'Authorized Notary Public services in Sultan Bathery, Wayanad. Get document attestation, sworn affidavits, power of attorney, lease agreements notarized by Adv. P. R. Rathy (22+ years experience).',
  alternates: {
    canonical: '/notary-services',
  },
  openGraph: {
    title: 'Notary Public Services in Sultan Bathery, Wayanad | Adv. P. R. Rathy',
    description: 'Central Government authorized Notary Public services in Sultan Bathery, Wayanad. Affidavits, POA, rental agreements, and document notarization by Adv. P. R. Rathy.',
    url: `${siteUrl}/notary-services`,
    images: [
      {
        url: '/notary-public-advocate-hero-wayanad.webp',
        width: 1200,
        height: 630,
        alt: 'Notary Public Services in Sultan Bathery, Wayanad - Adv. P. R. Rathy',
      },
    ],
  },
};

export default function NotaryServicesPage() {
  const services = [
    {
      title: "Document Notarization & Certification",
      desc: "Verification and certification of official document copies, academic certificates, passports, visa documents, and commercial papers, establishing true copies of original records.",
      items: ["Certified True Copies", "Academic Certificate Attestation", "Passport & Visa Documents Verification", "Commercial Document Legalization"]
    },
    {
      title: "Sworn Affidavits & Oaths Attestation",
      desc: "Drafting, administration, and legal attestation of sworn affidavits and statutory declarations required for government agencies, courts, passport offices, and visa applications.",
      items: ["Affidavits for Passport/Visa", "Name Change/Correction Affidavits", "Income & Address Declarations", "Govt. Scheme Declarations"]
    },
    {
      title: "Power of Attorney (POA) Execution",
      desc: "Official witnessing, execution, and notary attestation of General Power of Attorney (GPA) and Special Power of Attorney (SPA) for property transactions, legal matters, and business.",
      items: ["General Power of Attorney (GPA)", "Special Power of Attorney (SPA)", "Property Management POA", "Financial Representative POA"]
    },
    {
      title: "Legal Agreements & Contracts Notarization",
      desc: "Notarial certification and statutory attestation of commercial agreements, partnership deeds, lease agreements, tenancy deeds, and memorandum of understanding.",
      items: ["Rental & Lease Agreements", "Partnership Deeds attestation", "Business & Commercial Contracts", "Loan & Indemnity Oaths"]
    },
    {
      title: "Declarations & Statutory Certificates",
      desc: "Attestation of statutory declarations, marriage declarations, child travel consent forms, and official certificates requiring validation by an appointed Notary Public.",
      items: ["Minor Travel Consent Forms", "Marriage Declarations", "Statutory Undertakings", "Financial Solvency Certificates"]
    },
    {
      title: "Document Verification & Attestation",
      desc: "Verify identity and credentials of signatories and administer statutory oaths for legal validity in India and overseas.",
      items: ["Identity Verification Certification", "Signature Verification", "Oaths & Affirmation Administration", "Overseas Document Attestations"]
    }
  ];

  const faqs = [
    {
      q: "What identification is required for document notarization in Sultan Bathery?",
      a: "To notarize or attest any document, you must present a valid government-issued photo identity proof such as Aadhaar Card, Passport, Voter ID Card, or Driving License, along with the original documents to be verified. The signing parties must be present in person."
    },
    {
      q: "Where is the Notary Public office of Adv. P. R. Rathy located?",
      a: "Our office is located at O.K. Khalid Building, Near Court Complex, Sultan Bathery, Wayanad District, Kerala – 673592. It is easily accessible and located in close proximity to the Sultan Bathery Court Complex."
    },
    {
      q: "Can documents be notarized in bulk for commercial or educational purposes?",
      a: "Yes. We offer bulk notarization and certified true copy attestations for educational certificates (for study abroad/visas), company incorporation papers, partnership agreements, and other corporate documents."
    },
    {
      q: "Are walk-in notary services available, or do I need an appointment?",
      a: "Walk-in services are available during our working hours (Monday to Saturday, 9:00 AM to 6:00 PM). However, to ensure immediate attestation and avoid waiting, we recommend booking an appointment by calling us at +91 97455 69225 or via WhatsApp."
    },
    {
      q: "What is the legal validity of a notarized document?",
      a: "Notarization serves to verify the authenticity of signatures, administer oaths, and confirm the identity of the signatories. This prevents fraud and makes the document legally admissible in courts of law, government offices, and international authorities."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const whatsappUrl = "https://wa.me/919745569225?text=Hello%20Adv.%20P.%20R.%20Rathy%2C%20I%20would%20like%20to%20schedule%20a%20notary%20service.";

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#111615] selection:bg-[#6B7E74] selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      
      <main className="pt-24 sm:pt-32">
        {/* Notary Hero Section */}
        <section className="relative w-full py-16 sm:py-24 bg-[#0D1110] text-white border-b border-[#6B7E74]/30 overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#6B7E74]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center justify-center gap-2 bg-[#6B7E74]/20 border border-[#6B7E74]/40 px-4 py-1.5 rounded-full text-xs font-bold text-[#6B7E74] tracking-widest uppercase">
              <Scale className="w-4 h-4 text-[#6B7E74]" />
              <span>CENTRAL GOVT. APPOINTED NOTARY</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-cinzel text-white uppercase">
              NOTARY PUBLIC SERVICES
            </h1>
            
            <p className="text-xl sm:text-2xl font-serif italic text-[#6B7E74] max-w-3xl mx-auto">
              Authorized Notarial Works, Document Attestations &amp; Legal Verifications in Sultan Bathery, Wayanad
            </p>
            
            <p className="text-xs sm:text-sm text-[#D0D4D2] max-w-2xl mx-auto leading-relaxed font-sans font-light">
              Adv. P. R. Rathy (B.A., LL.B.) is a government appointed Notary Public with 22 years of legal practice. Providing authentic notary stamps, sworn affirmations, contract attestations, and certified copy verifications under official seal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="tel:+919745569225"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6B7E74] hover:bg-[#586A61] text-white px-8 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOTARY PUBLIC</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all border border-[#6B7E74]"
              >
                <span>BOOK APPOINTMENT</span>
              </a>
            </div>
          </div>
        </section>

        {/* Quick Info Strip */}
        <section className="bg-[#FAF8F3] border-b border-[#E6E0D2] py-8 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#E6E0D2]">
              <div className="flex flex-col items-center justify-center space-y-1 py-2 sm:py-0">
                <Shield className="w-5 h-5 text-[#6B7E74] mb-1" />
                <span className="text-[10px] font-bold text-[#6B7E74] uppercase tracking-wider">OFFICIAL AUTHORITY</span>
                <p className="text-sm font-semibold text-[#0D1110]">Govt. Appointed Notary</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1 py-2 sm:py-0">
                <Calendar className="w-5 h-5 text-[#6B7E74] mb-1" />
                <span className="text-[10px] font-bold text-[#6B7E74] uppercase tracking-wider">WORKING DAYS</span>
                <p className="text-sm font-semibold text-[#0D1110]">Monday – Saturday (9AM - 6PM)</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1 py-2 sm:py-0">
                <MapPin className="w-5 h-5 text-[#6B7E74] mb-1" />
                <span className="text-[10px] font-bold text-[#6B7E74] uppercase tracking-wider">LOCATION</span>
                <p className="text-sm font-semibold text-[#0D1110]">Near Sultan Bathery Court</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Notary Services Grid */}
        <section className="py-16 sm:py-24 bg-[#F8F6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-semibold text-[#6B7E74] tracking-[0.2em] uppercase font-sans">
                CORE ELIGIBLE SERVICES
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0D1110] tracking-wider uppercase">
                NOTARIAL ACTS &amp; CERTIFICATIONS
              </h2>
              <div className="w-16 h-[2px] bg-[#6B7E74] mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#FAF8F3] border border-[#E6E0D2] rounded-2xl p-7 flex flex-col justify-between card-hover-effect"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0D1110] text-[#6B7E74] flex items-center justify-center border border-[#6B7E74]/30">
                      <FileText className="w-5 h-5" />
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-[#0D1110]">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs text-[#565C58] leading-relaxed font-sans">
                      {service.desc}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-[#E6E0D2]/50 text-xs font-sans">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#6B7E74] shrink-0 mt-0.5" />
                          <span className="text-[#222725]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notary FAQ Section */}
        <section className="py-16 sm:py-24 bg-[#FAF8F3] border-t border-b border-[#E6E0D2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold text-[#6B7E74] tracking-[0.2em] uppercase font-sans">
                COMMON INQUIRIES
              </span>
              <h2 className="font-cinzel text-3xl font-bold text-[#0D1110] tracking-wider uppercase">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="w-16 h-[2px] bg-[#6B7E74] mx-auto mt-2"></div>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#F8F6F0] border border-[#E6E0D2] rounded-xl p-6 sm:p-8 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#6B7E74] shrink-0 mt-0.5" />
                    <h3 className="font-serif text-lg font-bold text-[#0D1110] leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#565C58] leading-relaxed font-sans pl-8">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section for Direct Lead Conversion */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
