import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
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
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <p className="section-label">WELCOME TO LINSFORD</p>
            
            <h2 className="section-title mb-6">
              <span className="text-navy block">Clearing &</span>
              <span className="text-coral block">forwarding</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Linsford Group has been a part of the Logistics industry for more than 30 years and still continues to provide solutions to our client's shipment needs. Although based in Cape Town, the Mother City – we have agents at most of the major ports, both locally and overseas. We are rated BEE Level Two, thus providing the partnership to your business or industry.
            </p>
            
            <Link
              to="/get-quote"
              className="btn-primary inline-block"
            >
              REQUEST A QUOTE
            </Link>
          </div>

          {/* Image */}
          <div 
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative overflow-hidden rounded-lg shadow-card group">
              <img
                src="/images/warehouse.jpg"
                alt="Modern warehouse interior"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-coral/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-navy/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
