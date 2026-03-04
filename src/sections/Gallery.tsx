import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  { src: '/images/gallery-1.jpg', alt: 'Forklift loading containers', title: 'Container Loading' },
  { src: '/images/gallery-2.jpg', alt: 'Port crane operations', title: 'Port Operations' },
  { src: '/images/gallery-3.jpg', alt: 'Container yard', title: 'Container Yard' },
  { src: '/images/gallery-4.jpg', alt: 'Air freight operations', title: 'Air Freight' },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 bg-light-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label">GALLERY</p>
          <h2 className="section-title text-navy">Clearing & forwarding</h2>
        </div>

        {/* Gallery Grid - Fixed Alignment */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {/* First image - tall */}
          <div
            className={`relative group cursor-pointer overflow-hidden rounded-lg transition-all duration-500 row-span-2 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
            onClick={() => setSelectedImage(galleryImages[0])}
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white mb-2" />
              <span className="text-white text-sm font-medium">{galleryImages[0].title}</span>
            </div>
          </div>

          {/* Other images - standard height */}
          {galleryImages.slice(1).map((image, index) => (
            <div
              key={image.src}
              className={`relative group cursor-pointer overflow-hidden rounded-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100 + 200}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white mb-2" />
                <span className="text-white text-sm font-medium">{image.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className={`text-center mt-10 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-coral font-montserrat font-semibold hover:underline"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

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
          
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
