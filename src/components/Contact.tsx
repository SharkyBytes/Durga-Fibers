
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your global trade journey? Contact us today for 
            premium products and exceptional service.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-emerald-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-emerald-600 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">ceo@durgafibers.com</p>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-emerald-600 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">+91 96108 35660</p>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-100">
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
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden fields for FormSubmit */}
                  <input type="hidden" name="_subject" value="New inquiry from Durga Fibers website" />
                  <input type="hidden" name="_next" value="https://durgafibers.com/thank-you" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input 
                      id="name"
                      name="name" 
                      type="text" 
                      required 
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
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
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      id="phone"
                      name="phone" 
                      type="tel" 
                      required
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="+1 (555) 123-4567"
                    />
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
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="Tell us about your requirements, questions, or how we can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
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
