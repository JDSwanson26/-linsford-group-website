import { useEffect, useRef, useState } from 'react';
import { FileText, Download, ArrowRight, FileCheck, ClipboardList, BookOpen, Shield } from 'lucide-react';
import Footer from '../sections/Footer';

interface DownloadFile {
  icon: React.ReactNode;
  title: string;
  description: string;
  fileSize: string;
  fileType: string;
  downloadUrl: string;
}

const downloadFiles: DownloadFile[] = [
  {
    icon: <FileCheck className="w-10 h-10" />,
    title: 'Company Profile',
    description: 'Complete overview of Linsford Group, our services, certifications, and company information.',
    fileSize: '2.4 MB',
    fileType: 'PDF',
    downloadUrl: '#'
  },
  {
    icon: <ClipboardList className="w-10 h-10" />,
    title: 'Customs Clearance Guide',
    description: 'Step-by-step guide to the customs clearance process in South Africa.',
    fileSize: '1.8 MB',
    fileType: 'PDF',
    downloadUrl: '#'
  },
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: 'Import/Export Documentation Checklist',
    description: 'Comprehensive checklist of all required documents for importing and exporting goods.',
    fileSize: '856 KB',
    fileType: 'PDF',
    downloadUrl: '#'
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Marine Insurance Information',
    description: 'Details about our marine insurance coverage options and terms.',
    fileSize: '1.2 MB',
    fileType: 'PDF',
    downloadUrl: '#'
  },
  {
    icon: <FileText className="w-10 h-10" />,
    title: 'Standard Trading Terms & Conditions',
    description: 'Our standard terms and conditions for all freight forwarding services.',
    fileSize: '945 KB',
    fileType: 'PDF',
    downloadUrl: '/terms-and-conditions'
  },
  {
    icon: <ClipboardList className="w-10 h-10" />,
    title: 'Quote Request Form',
    description: 'Downloadable form to request a detailed quote for your shipment.',
    fileSize: '320 KB',
    fileType: 'PDF',
    downloadUrl: '#'
  },
];

const DownloadsPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);

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

  const handleDownload = (file: DownloadFile) => {
    if (file.downloadUrl === '/terms-and-conditions') {
      window.open(file.downloadUrl, '_blank');
      return;
    }
    
    setDownloading(file.title);
    
    // Simulate download
    setTimeout(() => {
      setDownloading(null);
      alert(`Download started: ${file.title}`);
    }, 1500);
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/warehouse.jpg)' }}
        >
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Download className="w-6 h-6 text-coral" />
            <p className="text-coral font-montserrat font-semibold uppercase tracking-wider animate-fade-in">Resources</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in animation-delay-200">
            Downloads
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Access important documents, guides, and forms for your shipping needs
          </p>
        </div>
      </section>

      {/* Downloads Content */}
      <section ref={sectionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label">DOCUMENTS</p>
            <h2 className="section-title text-navy mb-6">Available Downloads</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse our collection of documents to help you understand our services and prepare for your shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadFiles.map((file, index) => (
              <div
                key={file.title}
                className={`bg-white border border-border-gray rounded-xl p-6 hover:shadow-card-hover hover:border-coral transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-coral group-hover:scale-110 transition-transform duration-300">
                    {file.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-navy mb-2 group-hover:text-coral transition-colors">
                      {file.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {file.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 bg-light-gray px-3 py-1 rounded-full">
                        {file.fileType} • {file.fileSize}
                      </span>
                      <button
                        onClick={() => handleDownload(file)}
                        disabled={downloading === file.title}
                        className="flex items-center gap-2 text-coral font-medium text-sm hover:underline disabled:opacity-50"
                      >
                        {downloading === file.title ? (
                          <>Downloading...</>
                        ) : (
                          <>
                            Download
                            <Download className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">NEED HELP?</p>
              <h2 className="section-title text-navy mb-6">Can't Find What You're Looking For?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you need a specific document or have questions about any of our downloads, please don't hesitate to contact us. Our team is ready to assist you with any documentation needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-coral" />
                  </div>
                  <span className="text-gray-600">Custom documentation requests</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                    <Download className="w-5 h-5 text-coral" />
                  </div>
                  <span className="text-gray-600">Bulk document downloads</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-coral" />
                  </div>
                  <span className="text-gray-600">Certification documents</span>
                </div>
              </div>
            </div>
            
            <div className="bg-navy rounded-xl p-8 text-white">
              <h3 className="text-2xl font-montserrat font-bold mb-4">Contact Our Team</h3>
              <p className="text-white/80 mb-6">
                Reach out to us for any document requests or questions about our services.
              </p>
              <div className="space-y-4 mb-8">
                <p>
                  <span className="text-coral font-medium">Phone:</span><br />
                  <a href="tel:+27215526577" className="hover:underline">+27 21 552 6577</a>
                </p>
                <p>
                  <span className="text-coral font-medium">Email:</span><br />
                  <a href="mailto:info@linsfordgroup.co.za" className="hover:underline">info@linsfordgroup.co.za</a>
                </p>
              </div>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-coral text-white px-6 py-3 rounded font-montserrat font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
              >
                CONTACT US
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DownloadsPage;
