import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { slug } = useParams();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productData: Record<string, any> = {
    "soybean-oil": {
      name: "Soybean Oil",
      category: "Premium Oils & Extracts", 
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800",
      description: "Premium quality soybean oil extracted from the finest soybeans sourced from certified farms. Rich in polyunsaturated fats, omega-6 fatty acids, and vitamin E, our soybean oil is perfect for cooking, baking, food processing, and industrial applications. Processed using advanced extraction methods to ensure maximum purity, nutritional value, and extended shelf life.",
      features: [
        "100% Pure Soybean Oil",
        "Rich in Vitamin E & Omega-6",
        "Low Saturated Fat Content",
        "Neutral Taste & Odor",
        "High Smoke Point (238°C)",
        "Cholesterol Free",
        "Non-GMO Certified",
        "Food Grade Quality"
      ],
      specifications: {
        "Free Fatty Acid": "Max 0.1%",
        "Moisture & Impurities": "Max 0.1%",
        "Iodine Value": "120-143 g I2/100g",
        "Saponification Value": "189-195 mg KOH/g",
        "Peroxide Value": "Max 2.0 meq O2/kg",
        "Color (Lovibond)": "Max 3.0 Red",
        "Packaging": "15L, 20L Jerry Cans, Bulk Tankers"
      }
    },
    "mustard-oil": {
      name: "Mustard Oil",
      category: "Premium Oils & Extracts",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800",
      description: "Traditional cold-pressed mustard oil with its distinctive pungent flavor and golden color. Extracted from premium quality mustard seeds using traditional wooden ghani method. Known for its antibacterial, antifungal properties and high nutritional value. Perfect for cooking, hair care, body massage, and Ayurvedic applications.",
      features: [
        "Cold Pressed & Unrefined",
        "Natural Antibacterial Properties",
        "Rich in Omega-3 & Omega-6",
        "Traditional Ghani Processing",
        "Distinctive Pungent Flavor",
        "Multi-purpose Use",
        "High Erucic Acid Content",
        "Chemical Free Processing"
      ],
      specifications: {
        "Free Fatty Acid": "Max 2.0%",
        "Moisture": "Max 0.2%",
        "Iodine Value": "92-125 g I2/100g",
        "Saponification Value": "170-184 mg KOH/g",
        "Erucic Acid": "22-60%",
        "Specific Gravity": "0.910-0.920",
        "Packaging": "1L, 5L, 15L Containers"
      }
    },
    "sunflower-oil": {
      name: "Sunflower Oil",
      category: "Premium Oils & Extracts",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
      description: "Premium refined sunflower oil extracted from high-quality sunflower seeds. Light in color and taste with excellent cooking properties. Rich in vitamin E and low in saturated fats, making it ideal for health-conscious consumers. Perfect for frying, baking, salad dressings, and food processing applications.",
      features: [
        "Light Golden Color",
        "Neutral Taste & Aroma",
        "High Vitamin E Content",
        "Low Saturated Fat",
        "High Smoke Point",
        "Long Shelf Life",
        "Heart Healthy",
        "Premium Refined Quality"
      ],
      specifications: {
        "Free Fatty Acid": "Max 0.1%",
        "Moisture": "Max 0.1%",
        "Iodine Value": "110-144 g I2/100g",
        "Saponification Value": "188-194 mg KOH/g",
        "Peroxide Value": "Max 2.0 meq O2/kg",
        "Color": "Max 2.0 Red",
        "Packaging": "1L, 5L, 15L, Bulk"
      }
    },
    "coconut-oil": {
      name: "Coconut Oil",
      category: "Premium Oils & Extracts",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
      description: "Pure virgin coconut oil extracted from fresh coconut meat using traditional methods. Rich in medium-chain triglycerides (MCTs) and lauric acid. Naturally solid at room temperature and melts at body temperature. Excellent for cooking, baking, skincare, haircare, and health applications.",
      features: [
        "100% Virgin Coconut Oil",
        "Rich in MCTs & Lauric Acid",
        "Natural Coconut Aroma",
        "Cold Pressed Method",
        "Solid at Room Temperature",
        "Multi-purpose Application",
        "Antimicrobial Properties",
        "Chemical Free Processing"
      ],
      specifications: {
        "Free Fatty Acid": "Max 0.5%",
        "Moisture": "Max 0.1%",
        "Iodine Value": "7-11 g I2/100g",
        "Saponification Value": "250-260 mg KOH/g",
        "Melting Point": "24-26°C",
        "Lauric Acid": "Min 45%",
        "Packaging": "500ml, 1L, 5L Jars"
      }
    },
    "wheat": {
      name: "Wheat",
      category: "Agricultural Products",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800",
      description: "Premium quality wheat grains sourced from the fertile plains of Rajasthan and Punjab. Our wheat varieties include Durum wheat for pasta production and common wheat for flour milling. Carefully cleaned, graded, and stored in optimal conditions to maintain nutritional value and prevent pest infestation.",
      features: [
        "High Protein Content (11-14%)",
        "Superior Gluten Quality",
        "Uniform Golden Color",
        "Low Moisture Content",
        "Pest & Chemical Free",
        "Machine Cleaned & Graded",
        "Multiple Varieties Available",
        "Export Quality Standards"
      ],
      specifications: {
        "Protein Content": "11-14%",
        "Moisture": "Max 14%",
        "Foreign Matter": "Max 2%",
        "Damaged/Broken Grains": "Max 6%",
        "Test Weight": "Min 78 kg/hl",
        "Gluten Content": "Min 28%",
        "Packaging": "50kg PP Bags, Bulk"
      }
    },
    "rice": {
      name: "Rice",
      category: "Agricultural Products",
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800",
      description: "Premium quality rice including Basmati, Non-Basmati, and specialty varieties. Sourced directly from paddy fields and processed in state-of-the-art mills. Our rice offers excellent cooking properties, aroma, and taste. Available in various grades suitable for domestic consumption and export markets.",
      features: [
        "Premium Basmati & Non-Basmati",
        "Long Grain Varieties",
        "Excellent Aroma & Taste",
        "Uniform Grain Size",
        "Low Broken Percentage",
        "Aged Rice Available",
        "Export Quality Processing",
        "Multiple Packaging Options"
      ],
      specifications: {
        "Average Grain Length": "6.0-7.5mm (Basmati)",
        "Moisture": "Max 14%",
        "Broken Grains": "Max 5%",
        "Foreign Matter": "Max 0.1%",
        "Chalky Grains": "Max 6%",
        "Damaged Grains": "Max 3%",
        "Packaging": "25kg, 50kg Bags"
      }
    },
    "turmeric": {
      name: "Turmeric",
      category: "Agricultural Products",
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800",
      description: "Premium quality turmeric rhizomes and powder from the spice gardens of Rajasthan. Rich in curcumin content with vibrant golden color and strong aroma. Our turmeric is naturally dried, processed hygienically, and tested for quality parameters. Widely used in culinary, pharmaceutical, and cosmetic applications.",
      features: [
        "High Curcumin Content (3-5%)",
        "Vibrant Golden Yellow Color",
        "Strong Natural Aroma",
        "Steam Sterilized",
        "Pesticide Residue Free",
        "Available as Whole & Powder",
        "Export Quality Standards",
        "Moisture Controlled Processing"
      ],
      specifications: {
        "Curcumin Content": "3-5%",
        "Moisture": "Max 10%",
        "Total Ash": "Max 9%",
        "Acid Insoluble Ash": "Max 1.5%",
        "Volatile Oil": "Min 4%",
        "Color Value": "Min 250 ASTA",
        "Packaging": "25kg, 50kg PP Bags"
      }
    },
    "cumin-seeds": {
      name: "Cumin Seeds",
      category: "Agricultural Products",
      image: "https://images.unsplash.com/photo-1596040810693-0de8379249b1?w=800",
      description: "Premium quality cumin seeds from the arid regions of Rajasthan and Gujarat. Known for their distinctive warm, earthy flavor and strong aroma. Our cumin seeds are carefully selected, cleaned, and processed to maintain their natural oils and flavor compounds. Essential spice for global cuisines and food processing industry.",
      features: [
        "High Essential Oil Content",
        "Strong Aromatic Flavor",
        "Uniform Brown Color",
        "Machine Cleaned & Sorted",
        "Pesticide Free",
        "High Purity Level",
        "Export Quality Standards",
        "Extended Shelf Life"
      ],
      specifications: {
        "Purity": "Min 99%",
        "Moisture": "Max 10%",
        "Total Ash": "Max 9.5%",
        "Acid Insoluble Ash": "Max 1.5%",
        "Volatile Oil": "Min 2.5%",
        "Admixture": "Max 1%",
        "Packaging": "25kg, 50kg Jute/PP Bags"
      }
    },
    "cotton-yarn": {
      name: "Cotton Yarn",
      category: "Textile Materials",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800",
      description: "High-quality cotton yarn spun from premium cotton fibers using modern ring spinning technology. Available in various counts from coarse to fine, suitable for different textile applications. Our cotton yarn offers excellent strength, uniformity, and dyeability for superior fabric production in apparel, home textiles, and industrial applications.",
      features: [
        "100% Pure Cotton",
        "High Tensile Strength",
        "Uniform Thickness & Twist",
        "Excellent Dyeability",
        "Low Hairiness Index",
        "Multiple Count Range",
        "Combed & Carded Quality",
        "Eco-friendly Processing"
      ],
      specifications: {
        "Count Range": "10s to 60s Ne",
        "Strength": "18-25 cN/tex",
        "Evenness (U%)": "8-12%",
        "Hairiness Index": "3.5-5.5",
        "Moisture": "7-8.5%",
        "Twist Factor": "3.8-4.2",
        "Packaging": "Cone, Hank, Cheese"
      }
    },
    "polyester-fabric": {
      name: "Polyester Fabric",
      category: "Textile Materials",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
      description: "Premium polyester fabrics manufactured from high-quality polyester yarns. Available in various constructions, weights, and finishes. Our polyester fabrics offer excellent durability, wrinkle resistance, and color fastness. Suitable for apparel, home furnishing, industrial applications, and technical textiles.",
      features: [
        "High Strength & Durability",
        "Wrinkle Resistant",
        "Excellent Color Fastness",
        "Quick Drying Properties",
        "Dimensional Stability",
        "Various Constructions",
        "Multiple Finish Options",
        "Cost Effective Solution"
      ],
      specifications: {
        "Weight Range": "80-300 GSM",
        "Width": "44\"-60\"",
        "Construction": "Plain, Twill, Dobby",
        "Shrinkage": "Max 3%",
        "Color Fastness": "Grade 4-5",
        "Tensile Strength": "Min 350 N",
        "Packaging": "Roll Packing"
      }
    },
    "silk-fabric": {
      name: "Silk Fabric",
      category: "Textile Materials",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800",
      description: "Luxurious silk fabrics woven from premium quality silk yarns. Our collection includes various types of silk fabrics with different weaves, textures, and finishes. Known for their natural luster, softness, and drape. Perfect for high-end apparel, home décor, and specialty textile applications.",
      features: [
        "100% Pure Silk",
        "Natural Luster & Sheen",
        "Soft Hand Feel",
        "Excellent Drape Quality",
        "Breathable & Comfortable",
        "Natural Temperature Regulation",
        "Hypoallergenic Properties",
        "Luxury Appearance"
      ],
      specifications: {
        "Weight Range": "60-200 GSM",
        "Width": "44\"-54\"",
        "Momme Weight": "12-30 mm",
        "Thread Count": "80-120 threads/inch",
        "Shrinkage": "Max 2%",
        "Color Fastness": "Grade 4",
        "Packaging": "Roll with tissue paper"
      }
    },
    "denim-fabric": {
      name: "Denim Fabric",
      category: "Textile Materials",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
      description: "Premium denim fabric manufactured from high-quality cotton yarns using traditional twill weave construction. Available in various weights, washes, and finishes. Our denim offers excellent durability, comfort, and style. Suitable for jeans, jackets, shirts, and fashion accessories.",
      features: [
        "100% Cotton Construction",
        "Traditional 3x1 Twill Weave",
        "Indigo Dyed Warp",
        "Various Weight Options",
        "Pre-shrunk Treatment",
        "Excellent Durability",
        "Comfort Stretch Available",
        "Sustainable Processing"
      ],
      specifications: {
        "Weight Range": "8-16 oz/sq.yd",
        "Width": "58\"-60\"",
        "Construction": "3x1 Twill",
        "Shrinkage": "Max 3%",
        "Tensile Strength": "Min 400 N",
        "Tear Strength": "Min 25 N",
        "Packaging": "Roll Packing"
      }
    },
    "raw-cotton": {
      name: "Raw Cotton",
      category: "Natural Cotton",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800",
      description: "Premium grade raw cotton picked from the finest cotton plants grown in the fertile cotton belt of India. Our raw cotton is carefully processed to remove impurities while maintaining fiber quality and length. Available in various grades suitable for spinning mills and textile manufacturers worldwide.",
      features: [
        "Premium Shankar-6 Variety",
        "Long Staple Length (28-32mm)",
        "High Micronaire Value",
        "Minimal Contamination",
        "Bright White Color Grade",
        "Machine Picked Quality",
        "Proper Ginning & Baling",
        "Export Quality Standards"
      ],
      specifications: {
        "Staple Length": "28-32 mm",
        "Micronaire": "3.5-4.9 μg/inch",
        "Strength": "28-32 g/tex",
        "Uniformity Index": "81-85%",
        "Moisture": "7.5-8.5%",
        "Trash Content": "Max 3%",
        "Packaging": "170kg Bales"
      }
    },
    "cotton-fiber": {
      name: "Cotton Fiber",
      category: "Natural Cotton",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
      description: "High-quality cotton fiber processed from premium raw cotton through advanced ginning and cleaning processes. Available in various grades and lengths suitable for different spinning applications. Our cotton fiber maintains excellent strength, uniformity, and cleanliness required for quality yarn production.",
      features: [
        "Superior Fiber Quality",
        "Consistent Length Distribution",
        "High Strength Parameters",
        "Excellent Cleanness",
        "Low Short Fiber Content",
        "Good Spinning Performance",
        "Bright Natural Color",
        "Minimal Neps & Trash"
      ],
      specifications: {
        "Upper Half Mean Length": "28-30 mm",
        "Uniformity Index": "82-84%",
        "Short Fiber Index": "Max 8%",
        "Strength": "29-31 g/tex",
        "Micronaire": "3.8-4.2",
        "Color Grade": "31-1 to 21-1",
        "Packaging": "Pressed Bales"
      }
    },
    "cotton-seeds": {
      name: "Cotton Seeds",
      category: "Natural Cotton",
      image: "https://images.unsplash.com/photo-1628436013780-b1356c5803ce?w=800",
      description: "Premium quality cotton seeds obtained as a by-product from cotton ginning process. Rich in oil content and protein, suitable for oil extraction, animal feed, and agricultural applications. Our cotton seeds are properly cleaned, graded, and stored to maintain quality and prevent deterioration.",
      features: [
        "High Oil Content (18-20%)",
        "Rich Protein Source",
        "Clean & Graded Quality",
        "Low Moisture Content",
        "Free from Foreign Matter",
        "Proper Storage Handling",
        "Multiple Applications",
        "Value Added By-product"
      ],
      specifications: {
        "Oil Content": "18-20%",
        "Protein Content": "20-25%",
        "Moisture": "Max 10%",
        "Foreign Matter": "Max 2%",
        "Damaged Seeds": "Max 5%",
        "Free Fatty Acid": "Max 2%",
        "Packaging": "50kg PP Bags"
      }
    },
    "cotton-waste": {
      name: "Cotton Waste",
      category: "Natural Cotton",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
      description: "High-quality cotton waste including comber noil, card waste, and spinning waste from textile mills. Excellent raw material for non-woven fabrics, wadding, regenerated yarn production, and industrial applications. Our cotton waste is properly sorted, cleaned, and baled for easy handling and processing.",
      features: [
        "Sorted & Cleaned Waste",
        "Various Waste Categories",
        "Consistent Quality Supply",
        "Eco-friendly Recycling",
        "Cost Effective Material",
        "Multiple Applications",
        "Proper Baling & Storage",
        "Sustainable Solution"
      ],
      specifications: {
        "Fiber Length": "5-25 mm",
        "Moisture": "Max 12%",
        "Foreign Matter": "Max 5%",
        "Color": "White to Light Yellow",
        "Bale Weight": "180-220 kg",
        "Density": "220-250 kg/m³",
        "Packaging": "Pressed Bales"
      }
    }
  };

  const product = productData[slug || ""];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            
            {/* Product Details */}
            <div className="p-8">
              <div className="mb-4">
                <span className="text-sm text-emerald-600 font-medium">{product.category}</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Button */}
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                Contact for Quote
              </Button>
            </div>
          </div>
          
          {/* Specifications */}
          <div className="border-t border-gray-200 p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-900">{key}</div>
                  <div className="text-emerald-600 font-semibold">{value as string}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
