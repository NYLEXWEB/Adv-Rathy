import React, { useState } from 'react';
import { Phone, Mail, Navigation, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    matterType: 'Civil Matter',
    message: '',
  });

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
        
        {/* Form Container Card */}
        <div className="max-w-4xl mx-auto bg-[#F8F6F0] border border-[#E6E0D2] rounded-2xl p-8 sm:p-12 lg:p-14 shadow-xs space-y-8 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold text-[#BE9A5A] tracking-[0.2em] uppercase font-sans">
              ⟡ INQUIRE &amp; CONSULT ⟡
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#14201D] tracking-wider uppercase">
              LEGAL CONSULTATION FORM
            </h2>
            <p className="font-serif text-base sm:text-lg text-[#BE9A5A] italic">
              Send a direct legal inquiry to Adv. P. R. Rathy
            </p>
            <div className="w-16 h-[2px] bg-[#BE9A5A] mx-auto"></div>
          </div>

          {/* Form / Submitted Success Message */}
          {submitted ? (
            <div className="bg-[#FAF8F3] border border-[#BE9A5A]/50 rounded-xl p-8 text-center space-y-4 my-6">
              <div className="w-14 h-14 rounded-full bg-[#14201D] text-[#BE9A5A] flex items-center justify-center mx-auto border border-[#BE9A5A]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#14201D]">
                Inquiry Submitted Successfully
              </h3>
              <p className="text-sm text-[#565C58] max-w-md mx-auto leading-relaxed">
                Thank you for contacting Adv. P. R. Rathy. Our office will review your inquiry and get back to you shortly.
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

                {/* Legal Matter Type */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#14201D] uppercase tracking-wider font-sans">
                    Legal Matter Type *
                  </label>
                  <select
                    value={formData.matterType}
                    onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#E6E0D2] focus:border-[#BE9A5A] rounded-lg px-4 py-3 text-sm text-[#14201D] focus:outline-none transition-colors"
                  >
                    <option value="Civil Matter">Civil Matter</option>
                    <option value="Criminal Matter">Criminal Matter</option>
                    <option value="Notary Service">Notary Public Service</option>
                    <option value="General Consultation">General Legal Inquiry</option>
                  </select>
                </div>

              </div>

              {/* Message Details */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#14201D] uppercase tracking-wider font-sans">
                  Brief Description of Legal Matter *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your legal matter or inquiry details here..."
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

          {/* Quick Direct Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-[#E6E0D2]">
            <a
              href="tel:9745569225"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] px-6 py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all border border-[#BE9A5A]/50"
            >
              <Phone className="w-3.5 h-3.5 text-[#BE9A5A]" />
              <span>CALL NOW: 97455 69225</span>
            </a>

            <a
              href="mailto:advpraarathy123@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] px-6 py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all border border-[#BE9A5A]/50"
            >
              <Mail className="w-3.5 h-3.5 text-[#14201D]" />
              <span>EMAIL DIRECTLY</span>
            </a>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapAddressQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF8F3] hover:bg-[#F2EBDC] text-[#14201D] px-6 py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all border border-[#BE9A5A]/50"
            >
              <Navigation className="w-3.5 h-3.5 text-[#BE9A5A]" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
