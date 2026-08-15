import React, { useState } from 'react';
import { Phone, Mail, Navigation, Send, CheckCircle2, MessageSquare, MapPin, Building, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    matterType: 'Notary Service',
    message: '',
  });

  const whatsappUrl = "https://wa.me/919745569225?text=Hello%20Adv.%20P.%20R.%20Rathy%2C%20I%20would%20like%20to%20make%20a%20legal%20enquiry.";
  const mapAddressQuery = encodeURIComponent(
    'O.K. Khalid Building, Near Court Complex, Sultan Bathery, Wayanad District, Kerala 673592'
  );

  const officePhotos = [
    { src: '/image1.jpg', label: 'Office Premises', subtitle: 'Sultan Bathery' },
    { src: '/imaage2.jpg', label: 'Consultation Room', subtitle: 'Wayanad District' },
    { src: '/img3.jpg', label: 'Advocate Practice', subtitle: 'Near Court Complex' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F3] border-t border-[#E6E0D2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F4EFE6] border border-[#6B7E74]/30 px-3.5 py-1 rounded-full text-[10px] font-bold text-[#6B7E74] tracking-[0.2em] uppercase font-sans">
            <Building className="w-3.5 h-3.5" />
            <span>SULTAN BATHERY, WAYANAD</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0D1110] tracking-wider uppercase">
            OFFICE &amp; CONTACT
          </h2>
          <p className="font-serif text-base sm:text-lg text-[#6B7E74] italic">
            Direct Consultation &amp; Legal Inquiry — Adv. P. R. Rathy
          </p>
          <div className="w-16 h-[2px] bg-[#6B7E74] mx-auto"></div>
        </div>

        {/* 2-Column Rearranged Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Modern Unique 3-Image Gallery + Quick Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Desktop Unique Gallery Layout (Stacked & Staggered Modern Cards) */}
            <div className="hidden sm:flex flex-col gap-4">
              
              {/* Main Featured Large Image */}
              <div className="relative h-56 lg:h-64 rounded-2xl overflow-hidden border border-[#E6E0D2] shadow-sm group">
                <img
                  src={officePhotos[0].src}
                  alt={officePhotos[0].label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1110]/80 via-[#0D1110]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold text-[#6B7E74] tracking-widest uppercase block font-sans">
                      {officePhotos[0].subtitle}
                    </span>
                    <h3 className="font-serif text-lg font-bold">
                      {officePhotos[0].label}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#0D1110]/80 border border-[#6B7E74]/50 flex items-center justify-center text-[#6B7E74]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* 2 Secondary Grid Cards */}
              <div className="grid grid-cols-2 gap-4">
                {officePhotos.slice(1).map((photo, index) => (
                  <div
                    key={index}
                    className="relative h-36 lg:h-40 rounded-xl overflow-hidden border border-[#E6E0D2] shadow-2xs group"
                  >
                    <img
                      src={photo.src}
                      alt={photo.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1110]/75 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 text-white">
                      <span className="text-[9px] font-bold text-[#6B7E74] tracking-wider uppercase block font-sans">
                        {photo.subtitle}
                      </span>
                      <h4 className="font-serif text-xs font-bold">
                        {photo.label}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Mobile Auto-Scrolling Left Touch Gallery Marquee */}
            <div className="block sm:hidden overflow-hidden rounded-2xl border border-[#E6E0D2] bg-[#F8F6F0] p-2">
              <div className="overflow-x-auto no-scrollbar touch-pan-x">
                <div className="animate-scroll-left gap-3.5 pr-4">
                  {/* Render photos twice for infinite auto-scroll illusion */}
                  {[...officePhotos, ...officePhotos].map((photo, index) => (
                    <div
                      key={index}
                      className="w-[230px] shrink-0 h-40 rounded-xl overflow-hidden border border-[#E6E0D2] relative shadow-2xs"
                    >
                      <img
                        src={photo.src}
                        alt={photo.label}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1110]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 text-white">
                        <span className="text-[9px] font-bold text-[#6B7E74] tracking-wider uppercase block font-sans">
                          {photo.subtitle}
                        </span>
                        <h4 className="font-serif text-sm font-bold">
                          {photo.label}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-center text-[#565C58] font-sans pt-2 italic">
                 Swipe or hold to pause auto-scroll
              </p>
            </div>

            {/* Office Direct Info Card */}
            <div className="bg-[#0D1110] text-white border border-[#6B7E74]/30 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <h3 className="font-cinzel text-lg font-bold text-white tracking-wider uppercase">
                OFFICE LOCATION
              </h3>

              <div className="space-y-3 text-xs text-[#D0D4D2] font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#6B7E74] shrink-0 mt-0.5" />
                  <span>O.K. Khalid Building, Near Court Complex, Sultan Bathery, Wayanad District, Kerala – 673592</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#6B7E74] shrink-0" />
                  <a href="tel:+919745569225" className="font-mono font-bold text-white hover:text-[#6B7E74] transition-colors">
                    97455 69225
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#6B7E74] shrink-0" />
                  <a href="mailto:advpraarathy123@gmail.com" className="hover:text-[#6B7E74] transition-colors break-all">
                    advpraarathy123@gmail.com
                  </a>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-[#6B7E74]/30">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#6B7E74] hover:bg-[#586A61] text-white py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all shadow-xs font-sans"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WHATSAPP</span>
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapAddressQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all border border-[#6B7E74]/50 font-sans"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#6B7E74]" />
                  <span>MAPS</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Legal Consultation Contact Form */}
          <div className="lg:col-span-7 bg-[#F8F6F0] border border-[#E6E0D2] rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xs space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#6B7E74] tracking-[0.2em] uppercase font-sans">
                LEGAL CONSULTATION
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#0D1110] tracking-wider uppercase">
                SEND AN INQUIRY
              </h3>
              <p className="text-xs sm:text-sm text-[#565C58] font-sans">
                Fill out the form below to reach Adv. P. R. Rathy directly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#FAF8F3] border border-[#6B7E74]/50 rounded-xl p-8 text-center space-y-4 my-4">
                <div className="w-14 h-14 rounded-full bg-[#0D1110] text-[#6B7E74] flex items-center justify-center mx-auto border border-[#6B7E74]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#0D1110]">
                  Inquiry Submitted Successfully
                </h4>
                <p className="text-xs sm:text-sm text-[#565C58] max-w-md mx-auto leading-relaxed font-sans">
                  Thank you for contacting Adv. P. R. Rathy. Our office will review your legal inquiry and respond to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-[#6B7E74] underline hover:text-[#0D1110] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0D1110] uppercase tracking-wider font-sans">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#E6E0D2] focus:border-[#6B7E74] rounded-lg px-4 py-3 text-sm text-[#0D1110] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0D1110] uppercase tracking-wider font-sans">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#E6E0D2] focus:border-[#6B7E74] rounded-lg px-4 py-3 text-sm text-[#0D1110] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0D1110] uppercase tracking-wider font-sans">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#E6E0D2] focus:border-[#6B7E74] rounded-lg px-4 py-3 text-sm text-[#0D1110] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Practice Area Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#0D1110] uppercase tracking-wider font-sans">
                      Practice Area Inquiry *
                    </label>
                    <select
                      value={formData.matterType}
                      onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#E6E0D2] focus:border-[#6B7E74] rounded-lg px-4 py-3 text-sm text-[#0D1110] focus:outline-none transition-colors"
                    >
                      <option value="Notary Service">Notary Public Service</option>
                      <option value="Family Court">Family Court Practice</option>
                      <option value="Criminal Matter">Criminal Proceedings</option>
                      <option value="Civil Matter">Civil Litigation</option>
                    </select>
                  </div>

                </div>

                {/* Message Details */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#0D1110] uppercase tracking-wider font-sans">
                    Brief Description of Legal Inquiry *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your legal matter or notary inquiry details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#E6E0D2] focus:border-[#6B7E74] rounded-lg px-4 py-3 text-sm text-[#0D1110] focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0D1110] hover:bg-[#181E1C] text-white px-8 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all shadow-sm border border-[#6B7E74]/40 group"
                  >
                    <Send className="w-4 h-4 text-[#6B7E74] group-hover:translate-x-1 transition-transform" />
                    <span>SUBMIT LEGAL INQUIRY</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
