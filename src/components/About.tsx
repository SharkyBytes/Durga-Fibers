
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Users, Zap } from "lucide-react";

const About = () => {
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Leading the Future of 
                <span className="text-emerald-600"> Global Trade</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Durga Fibers has been at the forefront of international trade for over a decade, 
                specializing in premium agricultural products, textiles, and industrial materials. 
                Our commitment to quality and reliability has made us a trusted partner for 
                businesses worldwide.
              </p>
              <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
                <div className="text-sm font-medium text-emerald-800 mb-2">Company Details</div>
                <div className="space-y-1 text-emerald-700">
                  <div><strong>IEC Code:</strong> IVXPS3590H</div>
                  <div><strong>GSTIN:</strong> 08IVXPS3590H1ZG</div>
                  <div><strong>State:</strong> Rajasthan (Code: 08)</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <feature.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
