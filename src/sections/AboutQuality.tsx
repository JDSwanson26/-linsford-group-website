import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutQuality = () => {
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
      className="py-24 bg-light-gray overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative overflow-hidden rounded-l-lg shadow-card group h-[500px]">
              <img
                src="/images/container-ship.jpg"
                alt="Container ship at port"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Content Card */}
          <div 
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white p-8 lg:p-12 shadow-card-hover lg:-ml-20 relative z-10 rounded-lg">
              <p className="section-label">ABOUT LINSFORD</p>
              
              <h2 className="section-title mb-6">
                <span className="text-navy block">Quality import &</span>
                <span className="text-navy block">export</span>
                <span className="text-coral block">solutions.</span>
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Linsford Group has a reputation of being reliable, efficient and a trusted business partner. Our team consists of core members being part of the daily operation, with Customer Care being our key focus.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Owing to the experience and expertise of our members and staff, we are able to assist our clients with all aspects of clearing and forwarding, regarding any type of commodity. We will ensure that your shipment is imported or exported as per your requirements and utilizing the most affordable manner.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                In addition, we have mentored a long standing relationship with South African Revenue Services (SARS) customs, during the last 30 years and are in good standing with them.
              </p>
              
              <Link
                to="/services"
                className="inline-flex items-center gap-2 btn-outline"
              >
                VIEW SERVICES
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutQuality;
