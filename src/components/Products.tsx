
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Premium Oils & Extracts",
      description: "High-quality cooking oils, essential oils, and natural extracts for global markets",
      image: "/lovable-uploads/96803b9d-3bd3-4f89-ae15-9ee43567ea2d.png",
      category: "Food & Beverages",
      subProducts: [
        { name: "Soybean Oil", slug: "soybean-oil" },
        { name: "Mustard Oil", slug: "mustard-oil" },
        { name: "Sunflower Oil", slug: "sunflower-oil" },
        { name: "Coconut Oil", slug: "coconut-oil" }
      ]
    },
    {
      id: 2,
      title: "Agricultural Products",
      description: "Fresh grains, pulses, spices, and processed agricultural commodities",
      image: "/lovable-uploads/3d81157d-e58f-4569-8dfb-8da8f2416b9b.png",
      category: "Agriculture",
      subProducts: [
        { name: "Wheat", slug: "wheat" },
        { name: "Rice", slug: "rice" },
        { name: "Turmeric", slug: "turmeric" },
        { name: "Cumin Seeds", slug: "cumin-seeds" }
      ]
    },
    {
      id: 3,
      title: "Textile Materials",
      description: "Premium cotton, synthetic fibers, and textile manufacturing materials",
      image: "/lovable-uploads/7d430275-1c90-4470-873a-508c805f85c0.png",
      category: "Textiles",
      subProducts: [
        { name: "Cotton Yarn", slug: "cotton-yarn" },
        { name: "Polyester Fabric", slug: "polyester-fabric" },
        { name: "Silk Fabric", slug: "silk-fabric" },
        { name: "Denim Fabric", slug: "denim-fabric" }
      ]
    },
    {
      id: 4,
      title: "Natural Cotton",
      description: "Pure cotton products and raw materials for textile industry",
      image: "/lovable-uploads/a4e44568-f246-4408-bdbf-b77f84c49f0c.png",
      category: "Raw Materials",
      subProducts: [
        { name: "Raw Cotton", slug: "raw-cotton" },
        { name: "Cotton Fiber", slug: "cotton-fiber" },
        { name: "Cotton Seeds", slug: "cotton-seeds" },
        { name: "Cotton Waste", slug: "cotton-waste" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Product Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of premium products, carefully sourced and 
            processed to meet international quality standards
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {product.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.subProducts.map((subProduct, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <Link 
                        to={`/product/${subProduct.slug}`}
                        className="text-emerald-600 hover:text-emerald-800 hover:underline transition-colors"
                      >
                        {subProduct.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
