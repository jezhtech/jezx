
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, MapPin, DollarSign, Users, Monitor, Smartphone, Calendar, ArrowRight, CheckCircle, Sparkles, Play, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const FleetX = () => {
  const features = [
    {
      icon: MapPin,
      title: "Advanced Geofencing",
      description: "Create virtual boundaries and automate actions when vehicles enter or exit designated areas.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Dynamic Fare Rules",
      description: "Set flexible pricing based on distance, time, demand, and custom business rules.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Monitor,
      title: "Admin Dashboard",
      description: "Comprehensive control panel for fleet management, analytics, and business insights.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Multi-Platform Booking",
      description: "Seamless booking experience across web, mobile apps, and API integrations.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase fleet utilization by 60%",
    "Real-time GPS tracking and route optimization",
    "Automated dispatch and driver assignment",
    "Comprehensive reporting and analytics",
    "24/7 customer support and maintenance"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
                <Car className="w-5 h-5 text-jezx-cyan" />
                <span className="text-sm font-medium text-white/90">Fleet Management</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                <span className="text-gradient">fleetX</span> Premium Fleet Management
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Advanced taxi booking and premium vehicle rental platform with geofencing, fare rule settings, user web portal, booking system, admin panel, and driver management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="premium-button text-black font-semibold px-8 py-4 rounded-full text-lg">
                  <Play className="w-5 h-5 mr-3" />
                  Watch Demo
                </Button>
                <Button asChild variant="outline" className="border-jezx-cyan/30 text-jezx-cyan hover:bg-jezx-cyan/10 px-8 py-4 rounded-full text-lg">
                  <Link to="/contact">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="glass-card rounded-3xl p-8 hover:premium-glow transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Car className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">Available Now</h3>
                <p className="text-white/70 text-center mb-6">Start transforming your fleet operations today</p>
                <div className="space-y-3">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-jezx-cyan mr-3 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive fleet management solution designed for modern transportation businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover:premium-glow transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/40 via-transparent to-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-gradient">fleetX</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 hover:premium-glow transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 hover:premium-glow transition-all duration-500">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Ready to Transform</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Start Your Fleet <span className="text-gradient">Revolution</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto">
              Join hundreds of fleet operators who trust fleetX to optimize their operations and maximize profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="premium-button text-black font-semibold px-8 py-4 rounded-full text-lg">
                <Zap className="w-5 h-5 mr-3" />
                Start Free Trial
              </Button>
              <Button asChild variant="outline" className="border-jezx-cyan/30 text-jezx-cyan hover:bg-jezx-cyan/10 px-8 py-4 rounded-full text-lg">
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-3" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FleetX;
