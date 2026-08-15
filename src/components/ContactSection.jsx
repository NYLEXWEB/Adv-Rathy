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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F3] border-t border-[#E6E0D2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Container Card */}
        <div className="max-w-4xl mx-auto bg-[#F8F6F0] border border-[#E6E0D2] rounded-2xl p-8 sm:p-12 lg:p-14 shadow-xs space-y-8 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold text-[#BE9A5A] tracking-[0.2em] uppercase font-sans">
              ⟡ DIRECT LEGAL INQUIRY ⟡
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#14201D] tracking-wider uppercase">
              OFFICE &amp; CONTACT
            </h2>
            <p className="font-serif text-base sm:text-lg text-[#BE9A5A] italic">
              Send a direct legal inquiry to Adv. P. R. Rathy
            </p>
            <div className="w-16 h-[2px] bg-[#BE9A5A] mx-auto"></div>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="bg-[#FAF8F3] border border-[#BE9A5A]/50 rounded-xl p-8 text-center space-y-4 my-6">
              <div className="w-14 h-14 rounded-full bg-[#14201D] text-[#BE9A5A] flex items-center justify-center mx-auto border border-[#BE9A5A]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#14201D]">
                Inquiry Submitted Successfully
              </h3>
              <p className="text-sm text-[#565C58] max-w-md mx-auto leading-relaxed font-sans">
                Thank you for contacting Adv. P. R. Rathy. Our office will review your legal inquiry and respond to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-semibold text-[#BE9A5A] underline hover:text-[#14201D] transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#14201D] uppercase tracking-wider font-sans">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#E6E0D2] focus:border-[#BE9A5A] rounded-lg px-4 py-3 text-sm text-[#14201D] focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#14201D] uppercase tracking-wider font-sans">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#E6E0D2] focus:border-[#BE9A5A] rounded-lg px-4 py-3 text-sm text-[#14201D] focus:outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#14201D] uppercase tracking-wider font-sans">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#E6E0D2] focus:border-[#BE9A5A] rounded-lg px-4 py-3 text-sm text-[#14201D] focus:outline-none transition-colors"
                  />
                </div>

                {/* Practice Area Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#14201D] uppercase tracking-wider font-sans">
                    Practice Area Inquiry *
                  </label>
                  <select
                    value={formData.matterType}
                    onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#E6E0D2] focus:border-[#BE9A5A] rounded-lg px-4 py-3 text-sm text-[#14201D] focus:outline-none transition-colors"
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
                <label className="block text-xs font-bold text-[#14201D] uppercase tracking-wider font-sans">
                  Brief Description of Legal Inquiry *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your legal matter or notary inquiry details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FAF8F3] border border-[#E6E0D2] focus:border-[#BE9A5A] rounded-lg px-4 py-3 text-sm text-[#14201D] focus:outline-none transition-colors resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#14201D] hover:bg-[#1C2D29] text-white px-10 py-3.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all shadow-sm border border-[#BE9A5A]/40 group"
                >
                  <Send className="w-4 h-4 text-[#BE9A5A] group-hover:translate-x-1 transition-transform" />
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
              className="inline-flex items-center justify-center gap-2 bg-[#14201D] hover:bg-[#1C2D29] text-white py-3 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all border border-[#BE9A5A]/30 shadow-2xs font-sans"
            >
              <Phone className="w-3.5 h-3.5 text-[#BE9A5A]" />
              <span>CALL NOW</span>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all border border-[#BE9A5A]/60 shadow-2xs font-sans"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#BE9A5A]" />
              <span>WHATSAPP</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:advpraarathy123@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] py-3 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all border border-[#BE9A5A]/60 shadow-2xs font-sans"
            >
              <Mail className="w-3.5 h-3.5 text-[#14201D]" />
              <span>EMAIL</span>
            </a>

            {/* GET DIRECTIONS */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapAddressQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] py-3 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all border border-[#BE9A5A]/60 shadow-2xs font-sans"
            >
              <Navigation className="w-3.5 h-3.5 text-[#BE9A5A]" />
              <span>DIRECTIONS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
