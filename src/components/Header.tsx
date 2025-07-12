
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Empty left side to maintain layout */}
            <div></div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#products" className="text-gray-700 hover:text-emerald-600 transition-colors">Products</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <a href="#contact" className="text-white no-underline">Contact</a>
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
                <a href="#products" className="text-gray-700 hover:text-emerald-600 transition-colors">Products</a>
                <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                  <a href="#contact" className="text-white no-underline">Contact</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
