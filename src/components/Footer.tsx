
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-24 w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                <img 
                  src="/lovable-uploads/Durga-fibers-logo.png" 
                  alt="Durga Fibers Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Durga Fibers</h3>
                <p className="text-xs text-gray-400">Connecting Farms to World</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading import-export company specializing in premium agricultural products, 
              textiles, and industrial materials for global markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group">
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
              </a>
              <a href="#" className="group">
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
              </a>
              <a href="#" className="group">
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
              </a>
              <a href="#" className="group">
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Our Products
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm flex items-center">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                Premium Oils & Extracts
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                Agricultural Products
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                Textile Materials
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                Natural Cotton
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                Industrial Goods
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0 group-hover:text-emerald-300 transition-colors" />
                <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                  <p>Ward No 39, Samarth Pura</p>
                  <p>Piprali Road, Sikar</p>
                  <p>Rajasthan, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-4 w-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <a href="tel:+919610835660" className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">+91 96108 35660</a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-4 w-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <a href="mailto:ceo@durgafibers.com" className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">ceo@durgafibers.com</a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Globe className="h-4 w-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">IEC: IVXPS3590H</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Durga Fibers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
