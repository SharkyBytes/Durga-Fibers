
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const carouselImages = [
  {
    src: "/lovable-uploads/Candiani-Denim-mill-6-1024x681.jpg",
    alt: "Textile Manufacturing",
    title: "Premium Textile Manufacturing",
    description: "State-of-the-art facilities ensuring the highest quality textile production."
  },
  {
    src: "/lovable-uploads/premium_photo-1677575234800-a797dab45408.jpg",
    alt: "Agricultural Products",
    title: "Quality Agricultural Products",
    description: "Sourced directly from local farms, ensuring freshness and sustainability."
  },
  {
    src: "/lovable-uploads/tony-williams-H7_3bl3cSzQ-unsplash.jpg",
    alt: "Farming Operations",
    title: "Sustainable Farming Operations",
    description: "Supporting local farmers with ethical and sustainable practices."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateParallaxTransform = (factor) => {
    const moveX = (mousePosition.x - window.innerWidth / 2) * factor;
    const moveY = (mousePosition.y - window.innerHeight / 2) * factor;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-200 opacity-20 blur-3xl"
          style={{ transform: calculateParallaxTransform(-0.01) }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"
          style={{ transform: calculateParallaxTransform(-0.02) }}></div>
        <div className="absolute top-2/3 left-2/3 w-48 h-48 rounded-full bg-emerald-300 opacity-10 blur-2xl"
          style={{ transform: calculateParallaxTransform(-0.03) }}></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNTk2NjkiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iNyIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <div className={`flex items-center space-x-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border p-2 animate-pulse">
                  <img 
                    src="/lovable-uploads/Durga-fibers-logo.png" 
                    alt="Durga Fibers Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Durga Fibers</h1>
                  <p className="text-gray-600">Connecting Farms to World</p>
                </div>
              </div>
              
              <h2 className={`text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Global Trade
                <span className="block text-emerald-600 relative">
                  Excellence
                  <span className="absolute -bottom-2 left-0 w-24 h-1 bg-emerald-600"></span>
                </span>
              </h2>
              
              <p className={`text-xl text-gray-600 leading-relaxed max-w-2xl transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Leading exporter of premium agricultural products, oils, textiles, and raw materials. 
                Connecting Indian quality with global markets through trust, innovation, and excellence.
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg group relative overflow-hidden shadow-md">
                <a href="#products" className="relative z-10 flex items-center text-white no-underline">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="absolute inset-0 bg-emerald-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
            </div>
            
            <div className={`grid grid-cols-3 gap-8 pt-8 transition-all duration-1000 delay-900 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 animate-count">500+</div>
                <div className="text-gray-600">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 animate-count">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 animate-count">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Carousel */}
          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative w-full h-[700px] rounded-2xl overflow-hidden shadow-2xl">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                    index === currentSlide ? 'translate-x-0' : 
                    index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-white/90">{image.description}</p>
                  </div>
                </div>
              ))}
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
        
        {/* Founder's Vision Section */}
        <div className={`mt-24 bg-white rounded-2xl shadow-xl p-12 pt-16 pr-16 pl-16 relative overflow-hidden transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg p-3 border-2 border-emerald-500">
                <img 
                  src="/lovable-uploads/Durga-fibers-logo.png" 
                  alt="Durga Fibers Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Founder's Vision
            </h3>
            
            <blockquote className="text-lg lg:text-xl text-gray-600 italic leading-relaxed mb-8">
              "Our journey began with a simple vision - to bridge the gap between India's rich agricultural heritage 
              and global markets. Over the past 40+ years, we have built lasting relationships based on trust, 
              quality, and commitment. Today, Durga Fibers stands as a testament to the power of dedication 
              and the endless possibilities that arise when tradition meets innovation."
            </blockquote>
            
            <div className="text-center">
              <p className="text-xl font-semibold text-emerald-600 mb-2">Shailendra Hatwal</p>
              <p className="text-gray-500">Founder & CEO, Durga Fibers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
