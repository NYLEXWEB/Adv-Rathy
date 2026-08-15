import React, { useState } from 'react';
import { Phone, Mail, Navigation, Send, CheckCircle2, MessageSquare } from 'lucide-react';

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
    { src: '/image1.jpg', label: 'Office Exterior' },
    { src: '/imaage2.jpg', label: 'Consultation Area' },
    { src: '/img3.jpg', label: 'Advocate Office' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F3] border-t border-[#E6E0D2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Contact Container Card */}
        <div className="max-w-4xl mx-auto bg-[#F8F6F0] border border-[#E6E0D2] rounded-2xl p-8 sm:p-12 lg:p-14 shadow-xs space-y-8 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold text-[#6B7E74] tracking-[0.2em] uppercase font-sans">
              ⟡ DIRECT LEGAL INQUIRY ⟡
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#0D1110] tracking-wider uppercase">
              OFFICE &amp; CONTACT
            </h2>
            <p className="font-serif text-base sm:text-lg text-[#6B7E74] italic">
              Send a direct legal inquiry to Adv. P. R. Rathy
            </p>
            <div className="w-16 h-[2px] bg-[#6B7E74] mx-auto"></div>
          </div>

          {/* Modern Office Gallery Carousel (Touch-scrollable on mobile) */}
          <div className="space-y-2 pt-2">
            <div className="flex sm:grid sm:grid-cols-3 gap-3.5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 sm:pb-0">
              {officePhotos.map((photo, index) => (
                <div
                  key={index}
                  className="snap-center shrink-0 w-[220px] sm:w-auto h-36 sm:h-44 rounded-xl overflow-hidden border border-[#E6E0D2] relative group shadow-2xs"
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1110]/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white font-sans tracking-wide">
                    {photo.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="bg-[#FAF8F3] border border-[#6B7E74]/50 rounded-xl p-8 text-center space-y-4 my-6">
              <div className="w-14 h-14 rounded-full bg-[#0D1110] text-[#6B7E74] flex items-center justify-center mx-auto border border-[#6B7E74]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0D1110]">
                Inquiry Submitted Successfully
              </h3>
              <p className="text-sm text-[#565C58] max-w-md mx-auto leading-relaxed font-sans">
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
            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
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
                <div className="space-y-2">
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
                <div className="space-y-2">
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
                <div className="space-y-2">
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
              <div className="space-y-2">
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
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0D1110] hover:bg-[#181E1C] text-white px-10 py-3.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all shadow-sm border border-[#6B7E74]/40 group"
                >
                  <Send className="w-4 h-4 text-[#6B7E74] group-hover:translate-x-1 transition-transform" />
                  <span>SUBMIT LEGAL INQUIRY</span>
                </button>
              </div>
            </form>
          )}

          {/* Action CTAs: CALL NOW | WHATSAPP | EMAIL | GET DIRECTIONS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E6E0D2]">
            {/* CALL NOW */}
            <a
              href="tel:+919745569225"
              className="inline-flex items-center justify-center gap-2 bg-[#0D1110] hover:bg-[#181E1C] text-white py-3 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all border border-[#6B7E74]/30 shadow-2xs font-sans"
            >
              <Phone className="w-3.5 h-3.5 text-[#6B7E74]" />
              <span>CALL NOW</span>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#0D1110] py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all border border-[#6B7E74]/60 shadow-2xs font-sans"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#6B7E74]" />
              <span>WHATSAPP</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:advpraarathy123@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#0D1110] py-3 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all border border-[#6B7E74]/60 shadow-2xs font-sans"
            >
              <Mail className="w-3.5 h-3.5 text-[#0D1110]" />
              <span>EMAIL</span>
            </a>

            {/* GET DIRECTIONS */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapAddressQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#0D1110] py-3 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all border border-[#6B7E74]/60 shadow-2xs font-sans"
            >
              <Navigation className="w-3.5 h-3.5 text-[#6B7E74]" />
              <span>DIRECTIONS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
