import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Footer from '../sections/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    agreeToPrivacy: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
      agreeToPrivacy: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/contact-hero.jpg)' }}
        >
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4 animate-fade-in">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-fade-up">
              <p className="section-label">CONTACT US</p>
              <h2 className="section-title text-navy mb-8">Contact info</h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-coral/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-navy mb-2 uppercase text-sm tracking-wider">Phone</h4>
                    <div className="space-y-1">
                      <a href="tel:+27215526577" className="block text-gray-600 hover:text-coral transition-colors">
                        +27 21 552 6577
                      </a>
                      <a href="tel:+27215526801" className="block text-gray-600 hover:text-coral transition-colors">
                        +27 21 552 6801
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-coral/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-navy mb-2 uppercase text-sm tracking-wider">Email</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Exports:</p>
                        <p className="font-medium text-navy">Lynn Frey - Managing Member</p>
                        <a href="mailto:lynn@linsfordgroup.co.za" className="text-gray-600 hover:text-coral transition-colors">
                          lynn@linsfordgroup.co.za
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Imports:</p>
                        <p className="font-medium text-navy">Justin Hooper - Operations Executive</p>
                        <a href="mailto:justin@linsfordgroup.co.za" className="text-gray-600 hover:text-coral transition-colors">
                          justin@linsfordgroup.co.za
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-coral/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-navy mb-2 uppercase text-sm tracking-wider">Location</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Unit C Parc Dumont,<br />
                      20 Railway Road,<br />
                      Montague Gardens, 7441,<br />
                      Cape Town, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="animate-fade-up animation-delay-200">
              <h3 className="font-montserrat font-semibold text-xl text-navy mb-6">Send a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Full name*"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Email*"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Subject*"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeToPrivacy"
                    id="contactAgreeToPrivacy"
                    checked={formData.agreeToPrivacy}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 border border-border-gray rounded text-coral focus:ring-coral"
                  />
                  <label htmlFor="contactAgreeToPrivacy" className="text-sm text-gray-600">
                    I have read and agree to the{' '}
                    <a href="/terms-and-conditions#privacy" className="text-coral hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-navy font-montserrat text-2xl">
              Message Sent!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-600">
              Thank you for contacting us. One of our consultants will call you back shortly.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
};

export default ContactPage;
