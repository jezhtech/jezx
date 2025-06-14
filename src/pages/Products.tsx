
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Building2, Car, Eye, RefreshCw, Users, ChartBar, Calendar, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: "crmx",
      name: "crmX",
      subtitle: "LLM Integrated CRM",
      description: "Revolutionary CRM platform with AI integration for small to large companies. Makes sales manager work easier and helps company owners monitor employee performance and lead status comprehensively.",
      status: "Available",
      icon: ChartBar,
      features: ["AI-Powered Lead Management", "Employee Performance Analytics", "Automated Sales Pipeline", "Smart Reporting Dashboard"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "churchx",
      name: "churchX",
      subtitle: "Complete Church Management",
      description: "Comprehensive solution for Roman Catholic churches to manage entire church data and records from birth to death, including all sacramentals and parish accounts with advanced features.",
      status: "Available",
      icon: Building2,
      features: ["Sacramental Records Management", "Parish Financial System", "Member Lifecycle Tracking", "Advanced Church Analytics"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "fleetx",
      name: "fleetX",
      subtitle: "Premium Fleet Management",
      description: "Advanced taxi booking and premium vehicle rental platform with geofencing, fare rule settings, user web portal, booking system, admin panel, and driver management.",
      status: "Available",
      icon: Car,
      features: ["Geofencing Technology", "Dynamic Fare Rules", "Multi-Platform Booking", "Real-time Fleet Tracking"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "vissionx",
      name: "vissionX",
      subtitle: "Vision Analytics Platform",
      description: "Advanced computer vision and AI analytics platform for business intelligence and automation. Coming soon with cutting-edge features.",
      status: "Launching Soon",
      icon: Eye,
      features: ["Computer Vision AI", "Real-time Analytics", "Business Intelligence", "Automated Insights"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: "restorex",
      name: "restoreX",
      subtitle: "Data Recovery & Restoration",
      description: "Comprehensive data recovery and system restoration platform with AI-powered recovery algorithms. Launching soon with revolutionary features.",
      status: "Launching Soon",
      icon: RefreshCw,
      features: ["AI-Powered Recovery", "System Restoration", "Data Protection", "Automated Backup"],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      id: "ticketx",
      name: "ticketX",
      subtitle: "Smart Ticketing System",
      description: "Intelligent ticketing and support management platform with AI-powered ticket routing, automated responses, and comprehensive analytics for seamless customer service.",
      status: "Launching Soon",
      icon: Ticket,
      features: ["AI-Powered Ticket Routing", "Automated Responses", "Customer Analytics", "Multi-Channel Support"],
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">SaaS Products</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Our <span className="text-gradient">Product Suite</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-5xl mx-auto leading-relaxed">
              Discover our comprehensive collection of AI-powered SaaS products designed to transform businesses across industries with innovative automation and intelligent features.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="glass-card hover:premium-glow transition-all duration-500 hover:transform hover:scale-[1.02] group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center group-hover:animate-pulse-glow`}>
                        <product.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">{product.name}</h3>
                        <p className="text-jezx-cyan font-medium">{product.subtitle}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.status === "Available" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                        : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed mb-6">{product.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-white/60">
                        <div className="w-2 h-2 bg-jezx-cyan rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {(product.id === "crmx" || product.id === "churchx" || product.id === "fleetx") && (
                      <Button asChild className="premium-button text-black font-semibold px-6 py-3 rounded-full flex-1">
                        <Link to={`/products/${product.id}`} className="flex items-center justify-center">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    )}
                    {product.status === "Available" && (
                      <Button variant="outline" className="border-jezx-cyan/30 text-jezx-cyan hover:bg-jezx-cyan/10 px-6 py-3 rounded-full">
                        <Zap className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                    {product.status === "Launching Soon" && (
                      <Button disabled className="border-orange-500/30 text-orange-400 px-6 py-3 rounded-full flex-1">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/30 via-transparent to-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl p-12 text-center hover:premium-glow transition-all duration-500">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
                <Users className="w-5 h-5 text-jezx-cyan" />
                <span className="text-sm font-medium text-white/90">Custom Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Need a <span className="text-gradient">Custom Solution</span>?
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
                Our products are just the beginning. We specialize in creating custom AI-powered applications tailored to your specific business needs and industry requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="premium-button text-black font-semibold px-8 py-4 rounded-full text-lg">
                  <Link to="/contact">
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-jezx-cyan/30 text-jezx-cyan hover:bg-jezx-cyan/10 px-8 py-4 rounded-full text-lg">
                  <Link to="/about">
                    Learn About Us
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
