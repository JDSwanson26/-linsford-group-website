import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    agreeToPrivacy: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
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
    <section
      id="downloads"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label">SEND US A MESSAGE</p>
          <h2 className="section-title text-navy mb-4">Get in touch</h2>
          <p className="text-gray-600">Complete the form below and one of our consultants will call you back.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-navy mb-2">Physical Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Unit C, Parc Dumont,<br />
                    20 Railway Road,<br />
                    Montague Gardens,<br />
                    Cape Town, South Africa
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-navy mb-2">Contact Us</h4>
                  <div className="space-y-1">
                    <p className="text-gray-600">
                      <span className="font-medium text-navy">T</span>{' '}
                      <a href="tel:+27215526577" className="hover:text-coral transition-colors">+27 21 552 6577</a>
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium text-navy">M</span>{' '}
                      <a href="tel:+27215526801" className="hover:text-coral transition-colors">+27 21 552 6801</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-navy mb-2">Email</h4>
                  <div className="space-y-1">
                    <p className="text-gray-600">
                      <span className="font-medium text-navy">Exports:</span><br />
                      Lynn Frey - Managing Member<br />
                      <a href="mailto:lynn@linsfordgroup.co.za" className="hover:text-coral transition-colors">lynn@linsfordgroup.co.za</a>
                    </p>
                    <p className="text-gray-600 mt-3">
                      <span className="font-medium text-navy">Imports:</span><br />
                      Justin Hooper - Operations Executive<br />
                      <a href="mailto:justin@linsfordgroup.co.za" className="hover:text-coral transition-colors">justin@linsfordgroup.co.za</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-navy mb-2">Follow Us</h4>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-coral transition-colors"
                  >
                    @linsford_group
                  </a>
                </div>
              </div>

              {/* Get Quote CTA */}
              <div className="pt-4">
                <Link
                  to="/get-quote"
                  className="inline-flex items-center gap-2 bg-coral text-white px-6 py-3 rounded font-montserrat font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
                >
                  REQUEST A QUOTE
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Full name <span className="text-coral">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Email <span className="text-coral">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Subject <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Tell us more about your requirements..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToPrivacy"
                  id="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 border border-border-gray rounded text-coral focus:ring-coral"
                />
                <label htmlFor="agreeToPrivacy" className="text-sm text-gray-600">
                  I have read and agree to the{' '}
                  <Link to="/terms-and-conditions#privacy" className="text-coral hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button type="submit" className="btn-primary w-full md:w-auto">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default ContactForm;
