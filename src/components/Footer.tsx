
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                <img 
                  src="/lovable-uploads/e3535517-870b-4414-a49c-ed95e4eea9ff.png" 
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
              <Facebook className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">Products</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300 text-sm">Premium Oils & Extracts</span></li>
              <li><span className="text-gray-300 text-sm">Agricultural Products</span></li>
              <li><span className="text-gray-300 text-sm">Textile Materials</span></li>
              <li><span className="text-gray-300 text-sm">Natural Cotton</span></li>
              <li><span className="text-gray-300 text-sm">Industrial Goods</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Ward No 39, Samarth Pura</p>
                  <p>Piprali Road, Sikar</p>
                  <p>Rajasthan, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-gray-300">+91 96108 35660</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-gray-300">ceo@durgafibers.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-gray-300">IEC: IVXPS3590H</span>
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
              © 2025 Durga Fibers. All rights reserved.
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
