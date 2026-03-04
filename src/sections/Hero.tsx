import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const lRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !lRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);
      
      // Parallax effect for the giant L
      lRef.current.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + progress * 0.3})`;
      lRef.current.style.opacity = `${0.4 - progress * 0.4}`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/container-ship.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Giant L Lettermark */}
      <div
        ref={lRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform will-change-transform z-10"
      >
        <span 
          className="text-[50vh] font-montserrat font-bold text-coral opacity-30 select-none"
          style={{ 
            textShadow: '0 0 100px rgba(232, 90, 110, 0.3)',
            animation: 'float 8s ease-in-out infinite'
          }}
        >
          L
        </span>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold mb-4 text-white animate-fade-in">
          Linsford<span className="text-coral">Group</span>
        </h1>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold mb-2 text-center">
          <span className="text-white animate-fade-in inline-block animation-delay-100">Import & Export</span>
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold mb-6 text-center">
          <span 
            className="text-coral animate-fade-in inline-block animation-delay-300"
          >
            Solutions.
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-500">
          Linsford Group are customs clearing and freight forwarding agents.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-700">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded font-montserrat font-semibold uppercase tracking-wider hover:bg-white hover:text-navy transition-all duration-300"
          >
            EXPLORE SERVICES
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/get-quote"
            className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded font-montserrat font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
          >
            GET A QUOTE
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-20 left-10 w-3 h-3 bg-coral rounded-full animate-pulse-soft z-20" />
      <div className="absolute top-32 right-20 w-2 h-2 bg-white rounded-full animate-pulse-soft animation-delay-200 z-20" />
      <div className="absolute bottom-40 right-32 w-2 h-2 bg-coral rounded-full animate-pulse-soft animation-delay-400 z-20" />
    </section>
  );
};

export default Hero;
