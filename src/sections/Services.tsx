import { useEffect, useRef, useState } from 'react';
import { Package, Car, Cog, Container, Plus, Shield, Truck, Plane, Warehouse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  icon: React.ReactNode;
  title: string;
}

const mainServices: Service[] = [
  {
    icon: <Package className="w-12 h-12" />,
    title: 'Personal & Household Effects',
  },
  {
    icon: <Car className="w-12 h-12" />,
    title: 'Motor Vehicles & Rally/Touring Events',
  },
  {
    icon: <Cog className="w-12 h-12" />,
    title: 'Machinery',
  },
  {
    icon: <Container className="w-12 h-12" />,
    title: 'General Cargo',
  },
];

const additionalServices: Service[] = [
  { icon: <Shield className="w-8 h-8" />, title: 'Marine Insurance' },
  { icon: <Truck className="w-8 h-8" />, title: 'Cartage/Haulage' },
  { icon: <Plane className="w-8 h-8" />, title: 'Overseas Removals' },
  { icon: <Warehouse className="w-8 h-8" />, title: 'Storage' },
];

const Services = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label">SERVICES</p>
          <h2 className="section-title text-navy mb-6">Quality freight logistics</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Linsford Group offers you an all inclusive service, from the initial conceptualization of your
            shipment, giving you advice and information regarding the statutory requirements, the arrangements of permits,
            customs documentation and the logistics of your air or sea shipment, storage and warehouse facilities,
            as well as the haulage for the delivery to your final destination.
          </p>
          <p className="text-navy font-semibold mt-6">Our all inclusive service consists of:</p>
        </div>

        {/* Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainServices.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className={`service-card group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="text-navy group-hover:text-coral transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h3 className="mt-6 font-montserrat font-semibold text-navy group-hover:text-coral transition-colors duration-300">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Additional Services */}
        <div className={`bg-light-gray rounded-xl p-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Plus className="w-6 h-6 text-coral" />
            <h3 className="font-montserrat font-bold text-xl text-navy">Additional Services</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={service.title}
                className={`flex items-center gap-3 group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="text-navy group-hover:text-coral transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="text-sm font-medium text-navy group-hover:text-coral transition-colors duration-300">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* View All Services Link */}
        <div className={`text-center mt-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-coral font-montserrat font-semibold hover:underline"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
