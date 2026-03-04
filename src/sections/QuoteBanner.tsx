import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const QuoteBanner = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = [
    'Whether', 'a', 'job', 'is',
    'big', 'or', 'small,', 'private',
    'individual,', 'small', 'or', 'large',
    'corporation',
    'we', 'apply', 'the', 'same', 'level', 'of',
    'service', 'to', 'all', 'our', 'valued', 'clients.'
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/container-ship.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-navy/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-medium text-white leading-relaxed mb-8">
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block mr-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50 + 200}ms` }}
            >
              {word}
            </span>
          ))}
        </p>
        
        <Link
          to="/get-quote"
          className={`inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded font-montserrat font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1500ms' }}
        >
          GET A QUOTE
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-white/20 rounded-full" />
      <div className="absolute top-10 right-10 w-16 h-16 border border-coral/30 rounded-full" />
    </section>
  );
};

export default QuoteBanner;
