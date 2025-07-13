import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingButtons from "@/components/FloatingButtons";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleContactClick = () => {
    navigate('/#contact');
  };

  const productData: Record<string, any> = {
    // Edible Oils
    "desi-ghee": {
      name: "Desi Ghee",
      category: "Edible Oils", 
      image: "/lovable-uploads/desi ghee.jpg",
      description: "Premium quality traditional desi ghee made from pure cow milk using the ancient bilona method. Our ghee is rich in antioxidants, vitamins, and essential fatty acids. Known for its rich aroma, golden color, and authentic taste, it enhances the flavor of any dish while providing numerous health benefits according to Ayurveda.",
      features: [
        "100% Pure Cow Milk Ghee",
        "Traditional Bilona Method",
        "Rich in Vitamins A, D, E, and K",
        "High Smoke Point (250°C)",
        "No Preservatives or Additives",
        "Rich Golden Color",
        "Distinctive Nutty Aroma",
        "Long Shelf Life"
      ],
      specifications: {
        "Fat Content": "Min 99.7%",
        "Moisture": "Max 0.3%",
        "Free Fatty Acids": "Max 1.5%",
        "Reichert Value": "Min 28",
        "Polenske Value": "Min 1.5",
        "Butyro Refractometer Reading": "40-43",
        "Packaging": "200g, 500g, 1kg Glass/Tin Containers"
      }
    },
    "mustard-oil": {
      name: "Mustard Oil",
      category: "Edible Oils",
      image: "/lovable-uploads/mustard oil.jpg",
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
      category: "Edible Oils",
      image: "/lovable-uploads/Sunflower_oil_and_sunflower.jpg",
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
    "rice-bran-oil": {
      name: "Rice Bran Oil",
      category: "Edible Oils",
      image: "/lovable-uploads/rcie bran.jpg",
      description: "Premium quality rice bran oil extracted from the outer layer of rice grains. Known as 'Heart Oil' due to its balanced fatty acid composition and cholesterol-lowering properties. Rich in oryzanol, tocopherols, and tocotrienols with high antioxidant properties. Ideal for cooking, frying, and as a healthy alternative to traditional oils.",
      features: [
        "High Oryzanol Content (1.5-2.0%)",
        "Balanced Fatty Acid Profile",
        "High Smoke Point (232°C)",
        "Mild Nutty Flavor",
        "Excellent Oxidative Stability",
        "Cholesterol Lowering Properties",
        "Rich in Natural Antioxidants",
        "Refined to Premium Quality"
      ],
      specifications: {
        "Free Fatty Acid": "Max 0.1%",
        "Moisture": "Max 0.1%",
        "Iodine Value": "90-105 g I2/100g",
        "Saponification Value": "180-195 mg KOH/g",
        "Oryzanol Content": "Min 1.5%",
        "Peroxide Value": "Max 2.0 meq O2/kg",
        "Packaging": "1L, 5L, 15L Containers"
      }
    },
    "flex-seeds-oil": {
      name: "Flaxseed Oil",
      category: "Edible Oils",
      image: "/lovable-uploads/flaxseeds.jpg",
      description: "Cold-pressed flaxseed oil extracted from premium quality flaxseeds. One of the richest plant sources of omega-3 fatty acids, particularly alpha-linolenic acid (ALA). Our flaxseed oil is minimally processed to retain its nutritional benefits and delicate nutty flavor. Ideal for dietary supplementation, salad dressings, and cold food applications.",
      features: [
        "Rich in Omega-3 Fatty Acids (50-60%)",
        "Cold-Pressed Extraction",
        "High Alpha-Linolenic Acid Content",
        "Nutty Flavor Profile",
        "Unrefined & Natural",
        "High Nutritional Value",
        "Vegetarian Source of Omega-3",
        "Dark Glass Bottle Packaging"
      ],
      specifications: {
        "Alpha-Linolenic Acid": "Min 50%",
        "Peroxide Value": "Max 5.0 meq O2/kg",
        "Moisture": "Max 0.1%",
        "Iodine Value": "170-200 g I2/100g",
        "Specific Gravity": "0.925-0.935",
        "Refractive Index": "1.480-1.483",
        "Packaging": "250ml, 500ml Dark Glass Bottles"
      }
    },
    "groundnut-oil": {
      name: "Groundnut Oil",
      category: "Edible Oils",
      image: "/lovable-uploads/COLD-PRESSED-GROUNDNUT-OIL-.jpg",
      description: "Premium quality groundnut (peanut) oil extracted from selected peanuts. Known for its distinctive nutty flavor and aroma that enhances the taste of food. Rich in monounsaturated fats, vitamin E, and resveratrol. Ideal for deep frying, stir-frying, and traditional Indian cooking due to its high smoke point and stability.",
      features: [
        "Distinctive Nutty Flavor",
        "High Smoke Point (230°C)",
        "Rich in Monounsaturated Fats",
        "Good Source of Vitamin E",
        "Excellent Oxidative Stability",
        "Long Shelf Life",
        "Cold Pressed Option Available",
        "Refined to Premium Quality"
      ],
      specifications: {
        "Free Fatty Acid": "Max 0.25%",
        "Moisture": "Max 0.1%",
        "Iodine Value": "85-100 g I2/100g",
        "Saponification Value": "188-195 mg KOH/g",
        "Peroxide Value": "Max 5.0 meq O2/kg",
        "Color (Lovibond)": "Max 2.5 Red",
        "Packaging": "1L, 5L, 15L Containers"
      }
    },

    // Yarn Products
    "ring-spun-yarn": {
      name: "Ring Spun Yarn",
      category: "Yarn",
      image: "/lovable-uploads/ring spun yarnn.jpg",
      description: "Premium quality ring spun yarn manufactured using the finest cotton fibers and advanced spinning technology. Our ring spun yarn offers exceptional strength, softness, and uniformity, making it ideal for high-quality fabrics. The traditional ring spinning process creates yarn with minimal hairiness and maximum durability, perfect for premium apparel, home textiles, and specialty applications.",
      features: [
        "Superior Strength and Durability",
        "Excellent Softness and Comfort",
        "Minimal Hairiness",
        "High Uniformity and Evenness",
        "Better Dye Absorption",
        "Reduced Pilling Tendency",
        "Versatile Count Range (Ne 6s-120s)",
        "Suitable for Premium Applications"
      ],
      specifications: {
        "Raw Material": "100% Cotton (Medium/Long Staple)",
        "Count Range": "Ne 6s to 120s",
        "Twist Multiplier": "3.8-4.5 (Warp), 3.2-3.8 (Weft)",
        "Strength (CSP)": "2000-2800",
        "Unevenness (U%)": "8-11%",
        "Imperfections (IPI)": "100-250 per km",
        "Hairiness Index": "3.0-4.5",
        "Packaging": "Cones, Cheese, Hanks as per requirement"
      }
    },
    "open-end-yarn": {
      name: "Open End Yarn",
      category: "Yarn",
      image: "/lovable-uploads/open end yarn.jpg",
      description: "Cost-effective open end (rotor) spun yarn produced using modern spinning technology. Our open end yarn offers excellent bulkiness, good absorbency, and uniform appearance. The rotor spinning process creates yarn with characteristic bulkiness and matte appearance, making it ideal for denim, towels, home textiles, and industrial applications where durability and cost-effectiveness are priorities.",
      features: [
        "High Production Efficiency",
        "Excellent Bulkiness and Volume",
        "Good Absorbency Properties",
        "Uniform Appearance",
        "Matte Finish",
        "Excellent Durability",
        "Cost-Effective Production",
        "Ideal for Denim and Industrial Applications"
      ],
      specifications: {
        "Raw Material": "100% Cotton",
        "Count Range": "Ne 4s to 20s",
        "Twist Multiplier": "3.8-4.2",
        "Strength (CSP)": "1600-2200",
        "Unevenness (U%)": "11-14%",
        "Imperfections (IPI)": "150-300 per km",
        "Hairiness Index": "4.5-6.0",
        "Packaging": "Cones of various weights as per requirement"
      }
    },

    // Existing products can remain below
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
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800",
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
    },
    
    // Cotton Products
    "shankar-6-cotton": {
      name: "Shankar 6 Cotton",
      category: "Cotton",
      image: "/lovable-uploads/shankar cotton.jpg",
      description: "Shankar 6 is India's most popular medium staple cotton variety, widely recognized for its consistent quality and versatility. Grown primarily in Gujarat and Maharashtra, this cotton variety offers excellent spinning performance and is suitable for producing medium to fine count yarns. Its balanced fiber properties make it a preferred choice for textile mills worldwide.",
      features: [
        "Medium Staple Length",
        "Bright White Color",
        "Good Fiber Strength",
        "Consistent Quality",
        "Excellent Spinning Performance",
        "Low Trash Content",
        "Versatile Applications",
        "Export Quality Standard"
      ],
      specifications: {
        "Staple Length": "28-30 mm",
        "Micronaire": "3.8-4.2",
        "Strength": "28-30 g/tex",
        "Uniformity Ratio": "45-48%",
        "Trash Content": "2-3%",
        "Moisture": "7.5-8.5%",
        "Color Grade": "Middling to Strict Middling",
        "Packaging": "170 kg Compressed Bales"
      }
    },
    "v-797-cotton": {
      name: "V 797 Cotton",
      category: "Cotton",
      image: "/lovable-uploads/v797.jpg",
      description: "V 797 is a short staple cotton variety primarily grown in Gujarat, India. Known for its coarse but strong fibers, this cotton type is particularly suitable for producing coarser count yarns and blended fabrics. Its natural creamy to light yellow color and high maturity make it ideal for specific industrial applications and traditional textile products.",
      features: [
        "Short Staple Length",
        "High Fiber Maturity",
        "Coarse but Strong Fibers",
        "Natural Creamy to Light Yellow Color",
        "Drought Resistant Variety",
        "Suitable for Coarse Count Yarns",
        "Good Absorbency",
        "Cost-Effective Option"
      ],
      specifications: {
        "Staple Length": "20-22 mm",
        "Micronaire": "6.0-7.0",
        "Strength": "22-24 g/tex",
        "Uniformity Ratio": "42-45%",
        "Trash Content": "3-4%",
        "Moisture": "7.5-8.5%",
        "Color Grade": "Light Spotted to Spotted",
        "Packaging": "170 kg Compressed Bales"
      }
    },
    "j-34-cotton": {
      name: "J 34 Cotton",
      category: "Cotton",
      image: "/lovable-uploads/j34.jpg",
      description: "J 34 is a premium medium-long staple cotton variety grown primarily in Northern India. Recognized for its excellent fiber properties, this cotton offers superior strength, fineness, and uniformity. It's particularly valued for producing fine count yarns and high-quality fabrics for premium apparel and home textiles.",
      features: [
        "Medium-Long Staple Length",
        "Excellent Fiber Fineness",
        "Superior Strength",
        "High Uniformity",
        "Bright White Color",
        "Low Short Fiber Content",
        "Premium Spinning Performance",
        "Suitable for Fine Count Yarns"
      ],
      specifications: {
        "Staple Length": "30-32 mm",
        "Micronaire": "3.5-4.0",
        "Strength": "30-32 g/tex",
        "Uniformity Ratio": "48-50%",
        "Trash Content": "1.5-2.5%",
        "Moisture": "7.5-8.5%",
        "Color Grade": "Strict Middling to Good Middling",
        "Packaging": "170 kg Compressed Bales"
      }
    },
    "mech1-bunny-cotton": {
      name: "Mech1/Bunny Cotton",
      category: "Cotton",
      image: "/lovable-uploads/mech1.jpg",
      description: "Mech1/Bunny Cotton is a superior quality hybrid cotton variety known for its exceptional fiber characteristics. Primarily grown in the central and southern regions of India, this cotton offers excellent length, strength, and uniformity. It's highly sought after for producing premium quality yarns for high-end textile applications.",
      features: [
        "Long Staple Length",
        "High Fiber Maturity",
        "Excellent Tensile Strength",
        "Superior Uniformity",
        "Very Low Trash Content",
        "Bright White Color",
        "Excellent Dyeability",
        "Premium Quality Standard"
      ],
      specifications: {
        "Staple Length": "31-33 mm",
        "Micronaire": "3.5-4.0",
        "Strength": "31-33 g/tex",
        "Uniformity Ratio": "48-52%",
        "Trash Content": "1-2%",
        "Moisture": "7.5-8.5%",
        "Color Grade": "Good Middling",
        "Packaging": "170 kg Compressed Bales"
      }
    },
    "dch-32-cotton": {
      name: "DCH 32 Cotton",
      category: "Cotton",
      image: "/lovable-uploads/dch32.jpg",
      description: "DCH 32 (Deviraj Cotton Hybrid) is an extra-long staple cotton variety grown in specific regions of South India. Known for its exceptional fiber length and fineness, DCH 32 is comparable to Egyptian cotton in quality. This premium cotton variety is ideal for producing superfine count yarns for luxury fabrics, high-end garments, and specialty textiles.",
      features: [
        "Extra-Long Staple Length",
        "Exceptional Fiber Fineness",
        "Superior Strength",
        "Excellent Uniformity",
        "Silky Luster",
        "Minimal Short Fiber Content",
        "Premium Spinning Performance",
        "Luxury Textile Applications"
      ],
      specifications: {
        "Staple Length": "34-36 mm",
        "Micronaire": "3.0-3.5",
        "Strength": "32-34 g/tex",
        "Uniformity Ratio": "50-54%",
        "Trash Content": "0.5-1.5%",
        "Moisture": "7.5-8.5%",
        "Color Grade": "Good Middling to Strict Good Middling",
        "Packaging": "170 kg Compressed Bales"
      }
    },
    "mcu5-cotton": {
      name: "MCU5 Cotton",
      category: "Cotton",
      image: "/lovable-uploads/mcu5.jpg",
      description: "MCU5 (Madras Cambodia Uganda) is a superior long staple cotton variety traditionally grown in Tamil Nadu, India. This cotton variety is known for its excellent fiber properties including good length, strength, and fineness. MCU5 is particularly valued for its consistent quality and is suitable for producing fine count yarns for premium textile applications.",
      features: [
        "Long Staple Length",
        "Good Fiber Fineness",
        "High Strength",
        "Consistent Quality",
        "Good Maturity",
        "Low Trash Content",
        "Excellent Spinning Performance",
        "Premium Textile Applications"
      ],
      specifications: {
        "Staple Length": "32-34 mm",
        "Micronaire": "3.3-3.8",
        "Strength": "30-32 g/tex",
        "Uniformity Ratio": "48-52%",
        "Trash Content": "1.5-2.5%",
        "Moisture": "7.5-8.5%",
        "Color Grade": "Strict Middling to Good Middling",
        "Packaging": "170 kg Compressed Bales"
      }
    },
    
    // Animal Feed Products
    "rice-bran": {
      name: "Rice Bran",
      category: "Animal Feeds",
      image: "/lovable-uploads/rice bran.jpg",
      description: "Premium quality rice bran, a nutritious by-product obtained during rice milling. Our rice bran is rich in protein, essential oils, vitamins, and minerals, making it an excellent feed ingredient for various livestock including cattle, poultry, and fish. Properly processed and stabilized to prevent rancidity and maintain nutritional value.",
      features: [
        "High Protein Content (12-15%)",
        "Rich in Essential Oils",
        "Excellent Source of B Vitamins",
        "High in Antioxidants",
        "Good Fiber Content",
        "Properly Stabilized",
        "Consistent Quality",
        "Cost-Effective Feed Ingredient"
      ],
      specifications: {
        "Crude Protein": "12-15%",
        "Crude Fat": "15-20%",
        "Crude Fiber": "8-12%",
        "Moisture": "Max 10%",
        "Ash": "8-12%",
        "Free Fatty Acids": "Max 10%",
        "Calcium": "0.05-0.1%",
        "Packaging": "50kg PP Bags"
      }
    },
    "cotton-seed-oil-cake": {
      name: "Cotton Seed Oil Cake",
      category: "Animal Feeds",
      image: "/lovable-uploads/cotton seed oil cake.jpg",
      description: "Nutritious cotton seed oil cake produced as a by-product after oil extraction from cotton seeds. Rich in protein, fiber, and essential nutrients, our cotton seed oil cake is an excellent feed ingredient for ruminants like cattle, buffalo, and sheep. Properly processed to reduce gossypol content while maintaining nutritional quality.",
      features: [
        "High Protein Content (20-25%)",
        "Good Fiber Source",
        "Rich in Essential Minerals",
        "Controlled Gossypol Levels",
        "Excellent Palatability",
        "Consistent Quality",
        "Cost-Effective Protein Source",
        "Suitable for Ruminant Diets"
      ],
      specifications: {
        "Crude Protein": "20-25%",
        "Crude Fat": "5-8%",
        "Crude Fiber": "20-25%",
        "Moisture": "Max 10%",
        "Ash": "5-7%",
        "Gossypol": "Max 0.12%",
        "Calcium": "0.15-0.25%",
        "Packaging": "50kg PP Bags"
      }
    },
    "soya-husk": {
      name: "Soya Husk",
      category: "Animal Feeds",
      image: "/lovable-uploads/soya husk.jpg",
      description: "High-quality soya husk obtained as a by-product during soybean processing. Our soya husk is an excellent source of dietary fiber for livestock feed formulations. It helps in improving digestion, preventing constipation, and enhancing overall gut health in animals. Properly processed and cleaned to ensure consistent quality.",
      features: [
        "High Fiber Content",
        "Low Protein Content",
        "Good Bulk Density",
        "Improves Feed Palatability",
        "Aids Digestion",
        "Prevents Constipation",
        "Cost-Effective Filler",
        "Consistent Quality"
      ],
      specifications: {
        "Crude Fiber": "30-35%",
        "Crude Protein": "10-12%",
        "Moisture": "Max 10%",
        "Ash": "4-6%",
        "Bulk Density": "0.25-0.35 g/cm³",
        "Particle Size": "Mostly 1-3 mm",
        "Foreign Matter": "Max 2%",
        "Packaging": "50kg PP Bags"
      }
    },
    "bird-feed": {
      name: "Bird Feed",
      category: "Animal Feeds",
      image: "/lovable-uploads/bird feed.jpg",
      description: "Premium quality bird feed formulated specifically for various bird species including poultry, pet birds, and wild birds. Our bird feed contains a balanced blend of grains, seeds, and essential nutrients to support optimal growth, health, and productivity. Available in different formulations to meet specific nutritional requirements.",
      features: [
        "Balanced Nutritional Profile",
        "Multiple Grain Varieties",
        "Essential Vitamin & Mineral Mix",
        "Species-Specific Formulations",
        "High Palatability",
        "Supports Healthy Growth",
        "Enhances Feather Quality",
        "Promotes Optimal Health"
      ],
      specifications: {
        "Crude Protein": "12-18%",
        "Crude Fat": "3-6%",
        "Crude Fiber": "4-8%",
        "Moisture": "Max 12%",
        "Calcium": "0.8-1.2%",
        "Phosphorus": "0.4-0.6%",
        "Metabolizable Energy": "2800-3200 kcal/kg",
        "Packaging": "1kg, 5kg, 25kg Bags"
      }
    },
    "channa-husk": {
      name: "Channa Husk",
      category: "Animal Feeds",
      image: "/lovable-uploads/channa husk.jpg",
      description: "High-quality channa (chickpea) husk obtained as a by-product during chickpea processing. Our channa husk is an excellent source of dietary fiber for livestock feed formulations. It provides bulk to the feed while contributing some nutritional value. Properly processed and cleaned to ensure consistent quality and safety.",
      features: [
        "Good Fiber Source",
        "Moderate Protein Content",
        "Improves Feed Texture",
        "Aids Digestion",
        "Cost-Effective Ingredient",
        "Consistent Quality",
        "Low Moisture Content",
        "Properly Cleaned"
      ],
      specifications: {
        "Crude Fiber": "25-30%",
        "Crude Protein": "8-12%",
        "Moisture": "Max 10%",
        "Ash": "3-5%",
        "Bulk Density": "0.30-0.40 g/cm³",
        "Particle Size": "Mostly 1-2 mm",
        "Foreign Matter": "Max 2%",
        "Packaging": "50kg PP Bags"
      }
    },
    "groundnut-cake": {
      name: "Groundnut Cake",
      category: "Animal Feeds",
      image: "/lovable-uploads/groundnut cake.jpg",
      description: "Protein-rich groundnut (peanut) cake produced as a by-product after oil extraction from peanuts. Our groundnut cake is an excellent protein supplement for livestock feed formulations. It contains high-quality protein with good amino acid profile, making it particularly valuable for dairy cattle, poultry, and fish feed applications.",
      features: [
        "High Protein Content (40-45%)",
        "Good Amino Acid Profile",
        "Moderate Fat Content",
        "Excellent Palatability",
        "Enhances Milk Production",
        "Improves Growth Rate",
        "Consistent Quality",
        "Premium Feed Ingredient"
      ],
      specifications: {
        "Crude Protein": "40-45%",
        "Crude Fat": "6-8%",
        "Crude Fiber": "6-8%",
        "Moisture": "Max 10%",
        "Ash": "5-7%",
        "Aflatoxin": "Below Detectable Limits",
        "Calcium": "0.1-0.2%",
        "Packaging": "50kg PP Bags"
      }
    },
    "maize-doc": {
      name: "Maize DOC",
      category: "Animal Feeds",
      image: "/lovable-uploads/maize DOC.jpg",
      description: "High-quality Maize Distillers Oil Cake (DOC), a nutritious by-product obtained during corn ethanol production. Rich in protein, fiber, and essential nutrients, our Maize DOC is an excellent feed ingredient for various livestock including cattle, poultry, and swine. Properly dried and processed to ensure consistent quality and nutritional value.",
      features: [
        "High Protein Content (25-30%)",
        "Good Energy Source",
        "Rich in Digestible Fiber",
        "Concentrated Nutrients",
        "Excellent Amino Acid Profile",
        "Good Palatability",
        "Consistent Quality",
        "Cost-Effective Protein Source"
      ],
      specifications: {
        "Crude Protein": "25-30%",
        "Crude Fat": "8-12%",
        "Crude Fiber": "7-9%",
        "Moisture": "Max 12%",
        "Ash": "4-6%",
        "Metabolizable Energy": "2800-3000 kcal/kg",
        "Total Digestible Nutrients": "80-85%",
        "Packaging": "50kg PP Bags"
      }
    }
  };

  const product = productData[slug as string];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Product Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/#products">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  // Import FloatingButtons component
  useEffect(() => {
    // Import FloatingButtons component dynamically
    const importFloatingButtons = async () => {
      const FloatingButtons = (await import('@/components/FloatingButtons')).default;
      const floatingButtonsContainer = document.createElement('div');
      document.body.appendChild(floatingButtonsContainer);
      
      // Render FloatingButtons component
      const root = ReactDOM.createRoot(floatingButtonsContainer);
      root.render(<FloatingButtons />);
      
      return () => {
        document.body.removeChild(floatingButtonsContainer);
      };
    };
    
    importFloatingButtons();
  }, []);

  return (
    <div className="bg-gray-50 py-24">
      <FloatingButtons />
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/#products" className="text-emerald-600 hover:text-emerald-800 flex items-center text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Products
          </Link>
        </div>
        
        {/* Product Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="h-[400px] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white self-start"
                onClick={handleContactClick}
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Key Features */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              Key Features
            </h2>
            <ul className="space-y-4">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technical Specifications */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </span>
              Technical Specifications
            </h2>
            <div className="space-y-4">
              {Object.entries(product.specifications).map(([key, value]: [string, any], index: number) => (
                <div key={index} className="grid grid-cols-2 gap-4 py-3 border-b border-gray-100 last:border-0">
                  <div className="text-gray-600 font-medium">{key}</div>
                  <div className="text-gray-800">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Interested in our {product.name}?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team for detailed product information, pricing, and customized solutions for your business needs.
          </p>
          <Button 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
            onClick={handleContactClick}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
