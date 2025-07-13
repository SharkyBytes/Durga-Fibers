
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Users, Zap, CheckCircle } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateParallaxTransform = (factor) => {
    const moveX = (mousePosition.x - window.innerWidth / 2) * factor;
    const moveY = (mousePosition.y - window.innerHeight / 2) * factor;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Established trade networks across 50+ countries with reliable logistics partnerships"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring premium quality products meet international standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with deep industry knowledge and market expertise"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Efficient supply chain management ensuring timely delivery worldwide"
    }
  ];

  const achievements = [
    "Trusted by 500+ global clients across 5 continents",
    "ISO 9001:2015 certified quality management system",
    "Consistent 98% on-time delivery rate",
    "Award-winning export quality standards"
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-emerald-100 opacity-30 blur-3xl"
          style={{ transform: calculateParallaxTransform(-0.01) }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-100 opacity-30 blur-3xl"
          style={{ transform: calculateParallaxTransform(-0.02) }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className={`inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                About Durga Fibers
              </span>
              <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Leading the Future of 
                <span className="text-emerald-600"> Global Trade</span>
              </h2>
              <p className={`text-lg text-gray-600 leading-relaxed mb-6 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Durga Fibers has been at the forefront of international trade for over a decade, 
                specializing in premium agricultural products, textiles, and industrial materials. 
                Our commitment to quality and reliability has made us a trusted partner for 
                businesses worldwide.
              </p>
              <div className={`bg-emerald-50 p-6 rounded-lg border border-emerald-100 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-sm font-medium text-emerald-800 mb-2">Company Details</div>
                <div className="space-y-1 text-emerald-700">
                  <div><strong>IEC Code:</strong> IVXPS3590H</div>
                  <div><strong>GSTIN:</strong> 08IVXPS3590H1ZG</div>
                  <div><strong>State:</strong> Rajasthan (Code: 08)</div>
                </div>
              </div>
            </div>
            
            {/* Achievements */}
            <div className={`transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Achievements</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`group p-6 hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-emerald-100 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Vision & Mission */}
        <div className={`mt-20 grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-800 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center mr-3 text-emerald-700">V</span>
              Our Vision
            </h3>
            <p className="text-emerald-700">
              To become the leading global trade facilitator connecting premium Indian products with international markets, 
              driving sustainable growth and creating value for all stakeholders through innovation and excellence.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3 text-blue-700">M</span>
              Our Mission
            </h3>
            <p className="text-blue-700">
              To provide high-quality products and exceptional service to our global clients, 
              while supporting local producers and maintaining the highest standards of business ethics and sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
