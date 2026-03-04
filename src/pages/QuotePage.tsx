import { useState } from 'react';
import { Send, CheckCircle, Package, Ship, Plane, Truck, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Footer from '../sections/Footer';

const serviceTypes = [
  { value: 'personal', label: 'Personal & Household Effects', icon: <Package className="w-5 h-5" /> },
  { value: 'vehicles', label: 'Motor Vehicles', icon: <Truck className="w-5 h-5" /> },
  { value: 'machinery', label: 'Machinery', icon: <Ship className="w-5 h-5" /> },
  { value: 'cargo', label: 'General Cargo', icon: <Package className="w-5 h-5" /> },
  { value: 'air', label: 'Air Freight', icon: <Plane className="w-5 h-5" /> },
  { value: 'sea', label: 'Sea Freight', icon: <Ship className="w-5 h-5" /> },
  { value: 'insurance', label: 'Marine Insurance', icon: <CheckCircle className="w-5 h-5" /> },
  { value: 'storage', label: 'Storage', icon: <Package className="w-5 h-5" /> },
  { value: 'other', label: 'Other', icon: <ArrowRight className="w-5 h-5" /> },
];

const QuotePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    origin: '',
    destination: '',
    dimensions: '',
    weight: '',
    commodity: '',
    shipmentDetails: '',
    agreeToPrivacy: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare email data
    const emailSubject = `Quote Request from ${formData.fullName}`;
    const emailBody = `
Quote Request Details:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}

Service Type: ${serviceTypes.find(s => s.value === formData.serviceType)?.label || formData.serviceType}

Shipment Details:
- Origin: ${formData.origin}
- Destination: ${formData.destination}
- Dimensions: ${formData.dimensions}
- Weight: ${formData.weight}
- Commodity: ${formData.commodity}

Additional Details:
${formData.shipmentDetails}

---
This quote request was submitted from the Linsford Group website.
    `;

    // Create mailto link
    const mailtoLink = `mailto:Jason@linsfordgroup.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');

    // Show success dialog
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      origin: '',
      destination: '',
      dimensions: '',
      weight: '',
      commodity: '',
      shipmentDetails: '',
      agreeToPrivacy: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/contact-hero.jpg)' }}
        >
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <p className="text-coral font-montserrat font-semibold uppercase tracking-wider mb-4 animate-fade-in">Request Pricing</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in animation-delay-200">
            Get a Quote
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Fill in the details below and we'll provide you with a customized quote
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-card p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-navy mb-4">
                Request Your Custom Quote
              </h2>
              <p className="text-gray-600">
                Please provide as much detail as possible so we can give you an accurate estimate.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="border-b border-border-gray pb-6">
                <h3 className="text-lg font-montserrat font-semibold text-navy mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      placeholder="John Smith"
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
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Phone number <span className="text-coral">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Company (optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="border-b border-border-gray pb-6">
                <h3 className="text-lg font-montserrat font-semibold text-navy mb-4">Service Required</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceTypes.map((service) => (
                    <label
                      key={service.value}
                      className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                        formData.serviceType === service.value
                          ? 'border-coral bg-coral/5'
                          : 'border-border-gray hover:border-coral/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceType"
                        value={service.value}
                        checked={formData.serviceType === service.value}
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                      <div className={`${formData.serviceType === service.value ? 'text-coral' : 'text-gray-400'}`}>
                        {service.icon}
                      </div>
                      <span className={`text-sm font-medium ${formData.serviceType === service.value ? 'text-coral' : 'text-navy'}`}>
                        {service.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Shipment Details */}
              <div className="border-b border-border-gray pb-6">
                <h3 className="text-lg font-montserrat font-semibold text-navy mb-4">Shipment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Origin (From) <span className="text-coral">*</span>
                    </label>
                    <input
                      type="text"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="City, Country"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Destination (To) <span className="text-coral">*</span>
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="City, Country"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Dimensions (L x W x H)
                    </label>
                    <input
                      type="text"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g., 120cm x 80cm x 100cm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Weight
                    </label>
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g., 500 kg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-navy mb-2">
                      Commodity/Description <span className="text-coral">*</span>
                    </label>
                    <input
                      type="text"
                      name="commodity"
                      value={formData.commodity}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="What are you shipping?"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-montserrat font-semibold text-navy mb-4">Additional Information</h3>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Special Requirements or Notes
                  </label>
                  <textarea
                    name="shipmentDetails"
                    value={formData.shipmentDetails}
                    onChange={handleChange}
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Any additional details about your shipment (hazardous materials, temperature requirements, delivery timeline, etc.)"
                  />
                </div>
              </div>

              {/* Privacy Agreement */}
              <div className="flex items-start gap-3 pt-4">
                <input
                  type="checkbox"
                  name="agreeToPrivacy"
                  id="quoteAgreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 border border-border-gray rounded text-coral focus:ring-coral"
                />
                <label htmlFor="quoteAgreeToPrivacy" className="text-sm text-gray-600">
                  I have read and agree to the{' '}
                  <a href="/terms-and-conditions#privacy" className="text-coral hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and consent to being contacted regarding my quote request.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      REQUEST QUOTE
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  This will open your email client to send the request to Jason@linsfordgroup.com
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-coral" />
              </div>
              <h3 className="font-montserrat font-bold text-navy mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">
                We aim to respond to all quote requests within 24 hours during business days.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-7 h-7 text-coral" />
              </div>
              <h3 className="font-montserrat font-bold text-navy mb-2">Custom Solutions</h3>
              <p className="text-gray-600 text-sm">
                Every quote is tailored to your specific shipment requirements and timeline.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship className="w-7 h-7 text-coral" />
              </div>
              <h3 className="font-montserrat font-bold text-navy mb-2">Competitive Rates</h3>
              <p className="text-gray-600 text-sm">
                We offer competitive pricing without compromising on service quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-navy font-montserrat text-2xl">
              Quote Request Ready!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-gray-600 mb-2">
              Your quote request has been prepared!
            </p>
            <p className="text-gray-600 text-sm">
              An email draft has been opened in your default email client. Please send the email to complete your request.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Recipient: <span className="font-medium">Jason@linsfordgroup.com</span>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default QuotePage;
