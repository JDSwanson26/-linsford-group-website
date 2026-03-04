import { useEffect, useRef, useState } from 'react';
import { Package, Car, Cog, Container, Plus, Shield, Truck, Plane, Warehouse, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '../sections/Footer';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const mainServices: Service[] = [
  {
    icon: <Package className="w-16 h-16" />,
    title: 'Personal & Household Effects',
    description: 'We handle the import and export of personal belongings and household goods with care and efficiency. Whether you are relocating internationally or sending items overseas, we ensure smooth customs clearance.',
    features: [
      'Door-to-door service',
      'Packing and crating',
      'Customs documentation',
      'Insurance options',
      'Tracking throughout'
    ]
  },
  {
    icon: <Car className="w-16 h-16" />,
    title: 'Motor Vehicles & Rally/Touring Events',
    description: 'Specialized logistics for vehicle transportation, including classic cars, rally vehicles, and touring event equipment. We handle all permits and customs requirements.',
    features: [
      'Vehicle export/import permits',
      'Rally event logistics',
      'Temporary import permits',
      'Carnet de Passages',
      'Specialized transport'
    ]
  },
  {
    icon: <Cog className="w-16 h-16" />,
    title: 'Machinery',
    description: 'Heavy machinery and industrial equipment shipping with specialized handling. From factory equipment to construction machinery, we manage the entire process.',
    features: [
      'Heavy lift coordination',
      'Oversized cargo handling',
      'Import permits for machinery',
      'Installation coordination',
      'Project cargo management'
    ]
  },
  {
    icon: <Container className="w-16 h-16" />,
    title: 'General Cargo',
    description: 'Comprehensive freight forwarding for all types of commercial cargo. We offer flexible solutions for businesses of all sizes.',
    features: [
      'FCL and LCL shipping',
      'Air freight options',
      'Consolidation services',
      'Warehousing solutions',
      'Distribution networks'
    ]
  },
];

const additionalServices = [
  { icon: <Shield className="w-10 h-10" />, title: 'Marine Insurance', description: 'Comprehensive cargo insurance for all shipments' },
  { icon: <Truck className="w-10 h-10" />, title: 'Cartage/Haulage', description: 'Local and long-distance trucking services' },
  { icon: <Plane className="w-10 h-10" />, title: 'Overseas Removals', description: 'Complete international relocation services' },
  { icon: <Warehouse className="w-10 h-10" />, title: 'Storage', description: 'Secure warehousing and storage facilities' },
];

const ServicesPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/container-ship.jpg)' }}
        >
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <p className="text-coral font-montserrat font-semibold uppercase tracking-wider mb-4 animate-fade-in">What We Offer</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in animation-delay-200">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Comprehensive customs clearing and freight forwarding solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section ref={sectionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label">SERVICES</p>
            <h2 className="section-title text-navy mb-6">Quality Freight Logistics</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Linsford Group offers you an all inclusive service, from the initial conceptualization of your
              shipment, giving you advice and information regarding the statutory requirements, the arrangements of permits,
              customs documentation and the logistics of your air or sea shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className={`bg-white border border-border-gray rounded-xl p-8 hover:shadow-card-hover hover:border-coral transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="text-coral group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-montserrat font-bold text-navy mb-3 group-hover:text-coral transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-coral flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Plus className="w-6 h-6 text-coral" />
              <p className="section-label mb-0">ADDITIONAL SERVICES</p>
            </div>
            <h2 className="section-title text-navy">Comprehensive Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={service.title}
                className={`bg-white rounded-xl p-6 text-center hover:shadow-card-hover transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="text-coral mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-montserrat font-bold text-navy mb-2 group-hover:text-coral transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contact us today for a personalized quote tailored to your specific shipping requirements.
          </p>
          <a
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded font-montserrat font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
          >
            GET A QUOTE
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;
