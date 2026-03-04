import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn, Camera, ArrowRight } from 'lucide-react';
import Footer from '../sections/Footer';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  { 
    src: '/images/gallery-1.jpg', 
    alt: 'Forklift loading containers', 
    category: 'Warehousing',
    title: 'Container Loading Operations'
  },
  { 
    src: '/images/gallery-2.jpg', 
    alt: 'Port crane operations', 
    category: 'Port Operations',
    title: 'Gantry Crane at Work'
  },
  { 
    src: '/images/gallery-3.jpg', 
    alt: 'Container yard', 
    category: 'Storage',
    title: 'Organized Container Yard'
  },
  { 
    src: '/images/gallery-4.jpg', 
    alt: 'Air freight operations', 
    category: 'Air Freight',
    title: 'Air Cargo Handling'
  },
  { 
    src: '/images/warehouse.jpg', 
    alt: 'Modern warehouse interior', 
    category: 'Warehousing',
    title: 'State-of-the-Art Warehouse'
  },
  { 
    src: '/images/container-ship.jpg', 
    alt: 'Container ship at port', 
    category: 'Sea Freight',
    title: 'Container Ship Docking'
  },
];

const categories = ['All', 'Warehousing', 'Port Operations', 'Storage', 'Air Freight', 'Sea Freight'];

const GalleryPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

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

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/gallery-3.jpg)' }}
        >
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-coral" />
            <p className="text-coral font-montserrat font-semibold uppercase tracking-wider animate-fade-in">Visual Journey</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in animation-delay-200">
            Our Gallery
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Explore our operations through images of our facilities, equipment, and daily activities
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section ref={sectionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-montserrat text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-coral text-white'
                    : 'bg-light-gray text-navy hover:bg-coral/10 hover:text-coral'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.src}
                className={`relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                    <span className="text-coral text-sm font-medium uppercase tracking-wider mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-montserrat font-bold text-lg text-center">
                      {image.title}
                    </h3>
                    <ZoomIn className="w-8 h-8 text-white mt-4 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Let us handle your logistics needs with the same professionalism you see in our operations.
          </p>
          <a
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded font-montserrat font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
          >
            REQUEST A QUOTE
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-coral transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="max-w-5xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="text-coral text-sm font-medium uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="text-white font-montserrat font-bold text-xl mt-2">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default GalleryPage;
