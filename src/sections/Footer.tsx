import { Link } from 'react-router-dom';
import { Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Disclaimer', href: '/terms-and-conditions#disclaimer' },
    { name: 'Privacy Policy', href: '/terms-and-conditions#privacy' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/images/logo.png" 
                alt="Linsford Group" 
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional customs clearing and freight forwarding services with over 30 years of experience.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Member of</span>
              <span className="font-semibold text-white">SAAFF</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-coral transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-coral transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                Unit C, Parc Dumont,<br />
                20 Railway Road,<br />
                Montague Gardens,<br />
                Cape Town, South Africa
              </p>
              <p>
                <a href="tel:+27215526577" className="hover:text-coral transition-colors">
                  +27 21 552 6577
                </a>
              </p>
              <p>
                <a href="mailto:info@linsfordgroup.co.za" className="hover:text-coral transition-colors">
                  info@linsfordgroup.co.za
                </a>
              </p>
              
              {/* Social */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © Linsford Group {new Date().getFullYear()}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-coral transition-colors duration-300 text-sm flex items-center gap-2"
          >
            Go to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
