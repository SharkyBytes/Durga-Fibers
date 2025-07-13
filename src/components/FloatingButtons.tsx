
import { Phone, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingButtons = () => {
  // WhatsApp contact number
  const whatsappNumber = "+919610835660";
  const navigate = useNavigate();
  const location = useLocation();
  
  const handlePhoneClick = () => {
    // Check if we're on the product detail page
    if (location.pathname.includes('/product/')) {
      navigate('/#contact');
    } else {
      // On main page, just scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your products and services.");
    window.open(`https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact us by phone"
      >
        <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default FloatingButtons;
