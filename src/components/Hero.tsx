
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const carouselImages = [
  {
    src: "/lovable-uploads/49878813-8997-4101-9491-7855e4730939.png",
    alt: "Agricultural Products",
    title: "Premium Agricultural Products",
    description: "Sourced directly from local farms, ensuring the highest quality and freshness."
  },
  {
    src: "/lovable-uploads/96803b9d-3bd3-4f89-ae15-9ee43567ea2d.png",
    alt: "Oils & Extracts",
    title: "Finest Oils & Extracts",
    description: "Expertly extracted and processed to retain natural flavors and nutrients."
  },
  {
    src: "/lovable-uploads/7d430275-1c90-4470-873a-508c805f85c0.png",
    alt: "Textile Materials",
    title: "High-Quality Textile Materials",
    description: "Durable and versatile materials for various textile applications."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNTk2NjkiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iNyIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border p-2">
                  <img 
                    src="/lovable-uploads/e3535517-870b-4414-a49c-ed95e4eea9ff.png" 
                    alt="Durga Fibers Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Durga Fibers</h1>
                  <p className="text-gray-600">Connecting Farms to World</p>
                </div>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Global Trade
                <span className="block text-emerald-600">Excellence</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Leading exporter of premium agricultural products, oils, textiles, and raw materials. 
                Connecting Indian quality with global markets through trust, innovation, and excellence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                Explore Products
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg">
                Get Quote
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-gray-600">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Carousel */}
          <div className="relative">
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
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
          </div>
        </div>
        
        {/* Founder's Vision Section */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl p-12 pt-16 pr-16 pl-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg p-3">
                <img 
                  src="/lovable-uploads/e3535517-870b-4414-a49c-ed95e4eea9ff.png" 
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
              <p className="text-xl font-semibold text-emerald-600 mb-2">Shailendra Hatiwal</p>
              <p className="text-gray-500">Founder & CEO, Durga Fibers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
