
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Globe, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/ceo@durgafibers.com", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">Contact Us</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-emerald-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your global trade journey? Contact us today for 
            premium products and exceptional service.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card 
              className={`border-emerald-100 hover:shadow-lg transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-emerald-600 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:ceo@durgafibers.com" className="text-gray-700 hover:text-emerald-600 transition-colors">ceo@durgafibers.com</a>
              </CardContent>
            </Card>
            
            <Card 
              className={`border-emerald-100 hover:shadow-lg transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-emerald-600 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+919610835660" className="text-gray-700 hover:text-emerald-600 transition-colors">+91 96108 35660</a>
              </CardContent>
            </Card>
            
            <Card 
              className={`border-emerald-100 hover:shadow-lg transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-emerald-600 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Ward No 39, Samarth Pura<br />
                  Piprali Road, Sikar<br />
                  Rajasthan, India
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className={`border-emerald-100 hover:shadow-lg transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-emerald-600 flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Monday - Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div 
            className={`lg:col-span-2 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
          >
            <Card className="border-emerald-100 shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden fields for FormSubmit */}
                  <input type="hidden" name="_subject" value="New inquiry from Durga Fibers website" />
                  <input type="hidden" name="_next" value="https://durgafibers.com/thank-you" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input 
                        id="name"
                        name="name" 
                        type="text" 
                        required 
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input 
                        id="email"
                        name="email" 
                        type="email" 
                        required 
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        id="phone"
                        name="phone" 
                        type="tel" 
                        required
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input 
                        id="company"
                        name="company" 
                        type="text"
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Query *
                    </label>
                    <Textarea 
                      id="query"
                      name="query" 
                      required 
                      rows={6}
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                      placeholder="Tell us about your requirements, questions, or how we can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-emerald-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </Button>
                  
                  <div className="text-center text-sm text-gray-500 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    We respect your privacy and will never share your information
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
