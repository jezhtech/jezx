import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Star, Search, Filter, Plus, Minus } from "lucide-react";

const Marketplace = () => {
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "JezX Developer Hoodie",
      price: 79.99,
      image: "/placeholder.svg",
      category: "clothing",
      rating: 4.8,
      description: "Premium quality hoodie with JezX logo, perfect for coding sessions.",
      inStock: true
    },
    {
      id: 2,
      name: "Code the Future T-Shirt",
      price: 29.99,
      image: "/placeholder.svg",
      category: "clothing",
      rating: 4.9,
      description: "Comfortable cotton t-shirt with inspirational coding message.",
      inStock: true
    },
    {
      id: 3,
      name: "JezX Mechanical Keyboard",
      price: 149.99,
      image: "/placeholder.svg",
      category: "tech",
      rating: 4.7,
      description: "RGB mechanical keyboard designed for developers.",
      inStock: true
    },
    {
      id: 4,
      name: "Developer Mug Set",
      price: 24.99,
      image: "/placeholder.svg",
      category: "accessories",
      rating: 4.6,
      description: "Set of 2 mugs with funny developer quotes.",
      inStock: true
    },
    {
      id: 5,
      name: "JezX Laptop Stickers Pack",
      price: 12.99,
      image: "/placeholder.svg",
      category: "accessories",
      rating: 4.8,
      description: "Collection of premium vinyl stickers for your laptop.",
      inStock: true
    },
    {
      id: 6,
      name: "AI Programming Cap",
      price: 34.99,
      image: "/placeholder.svg",
      category: "clothing",
      rating: 4.5,
      description: "Stylish cap with AI-themed embroidery.",
      inStock: false
    }
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "clothing", name: "Clothing" },
    { id: "tech", name: "Tech Accessories" },
    { id: "accessories", name: "Accessories" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, count]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return total + (product ? product.price * count : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-full floating-element blur-sm"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Developer</span>{" "}
            <span className="text-gradient">Marketplace</span>
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Discover premium developer gear, clothing, and accessories designed for the modern programmer.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="pl-10 bg-white/5 border-white/20 text-white"
              />
            </div>
            
            <div className="flex gap-4 items-center">
              <Filter className="text-white/70 w-5 h-5" />
              <div className="flex gap-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "premium-button text-black" : "glass-effect border-white/20 text-white hover:bg-white/10"}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="glass-effect rounded-full px-4 py-2 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-jezx-cyan" />
                <span className="text-white">{getTotalItems()}</span>
                <span className="text-jezx-cyan font-bold">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="glass-card border-jezx-cyan/20 hover:border-jezx-cyan/40 transition-all duration-300 hover:premium-glow group">
                <CardHeader className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-t-lg flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-white/30'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-white/70 text-sm">({product.rating})</span>
                  </div>
                  
                  <CardTitle className="text-white text-lg mb-2">{product.name}</CardTitle>
                  <p className="text-white/70 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gradient">${product.price}</span>
                    {!product.inStock && (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {cart[product.id] ? (
                      <div className="flex items-center gap-2 flex-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(product.id)}
                          className="w-8 h-8 p-0 border-jezx-cyan/50 text-jezx-cyan hover:bg-jezx-cyan/10"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-white font-semibold min-w-[2ch] text-center">
                          {cart[product.id]}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => addToCart(product.id)}
                          className="w-8 h-8 p-0 border-jezx-cyan/50 text-jezx-cyan hover:bg-jezx-cyan/10"
                          disabled={!product.inStock}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                        className="flex-1 premium-button text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;
