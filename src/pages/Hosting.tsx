
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Shield, Zap, Globe, Clock, Rocket, Sparkles, ArrowRight, CheckCircle, Star, Database, Network } from "lucide-react";
import { Link } from "react-router-dom";

const Hosting = () => {
  const features = [
    {
      icon: Server,
      title: "Enterprise Infrastructure",
      description: "High-performance servers with 99.9% uptime guarantee and global CDN distribution."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Military-grade encryption, DDoS protection, and automated security monitoring."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "SSD storage, advanced caching, and optimized performance for maximum speed."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide data centers ensuring low latency and optimal user experience."
    },
    {
      icon: Database,
      title: "Scalable Solutions",
      description: "Auto-scaling infrastructure that grows with your business needs."
    },
    {
      icon: Network,
      title: "Smart Analytics",
      description: "Real-time monitoring, performance insights, and intelligent optimization."
    }
  ];

  const comingSoonFeatures = [
    "AI-Powered Auto-Scaling",
    "Smart Load Balancing",
    "Advanced Analytics Dashboard",
    "Multi-Cloud Integration",
    "Serverless Architecture",
    "Edge Computing Network"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-full floating-element blur-sm"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-tr from-jezx-cyan-light/30 to-transparent rounded-full floating-element" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-jezx-cyan/25 rounded-full floating-element" style={{ animationDelay: "4s" }}></div>
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-jezx-cyan/10 via-transparent to-transparent rounded-full animate-pulse-glow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8 group hover:premium-glow transition-all duration-500">
              <Star className="w-4 h-4 text-jezx-cyan animate-pulse" />
              <span className="text-sm font-medium text-white/90">Coming Soon</span>
              <Sparkles className="w-4 h-4 text-jezx-cyan animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-white">Premium</span>{" "}
              <span className="text-gradient block md:inline">Hosting</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Revolutionary Cloud Hosting with{" "}
              <span className="text-gradient-secondary font-semibold">AI-Powered Infrastructure</span>.
              Experience unmatched performance, security, and scalability for your applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="premium-button text-black font-bold text-lg px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-jezx-cyan/40 transform hover:scale-105 transition-all duration-500 group"
              >
                Get Notified 
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-effect border-jezx-cyan/50 text-white hover:bg-jezx-cyan/10 hover:border-jezx-cyan hover:premium-glow font-semibold text-lg px-10 py-4 rounded-full transition-all duration-500"
              >
                <Clock className="mr-3 h-5 w-5" />
                Launching Q2 2025
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
              <Server className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Revolutionary Features</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Next-Gen <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Built from the ground up with cutting-edge technology and AI-powered automation to deliver unprecedented performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover:premium-glow transition-all duration-500 hover:transform hover:-translate-y-4 group">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse-glow transition-all duration-300">
                      <feature.icon className="h-10 w-10 text-black" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-jezx-cyan/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">{feature.title}</h3>
                  <p className="text-white/70 flex-grow leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/40 via-transparent to-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
                <Rocket className="w-5 h-5 text-jezx-cyan" />
                <span className="text-sm font-medium text-white/90">What's Coming</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Launching <span className="text-gradient">Soon</span>
              </h2>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                We're building the future of cloud hosting with revolutionary features that will transform how you deploy and manage your applications.
              </p>
              
              <div className="space-y-4 mb-12">
                {comingSoonFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-4 w-4 text-black" />
                    </div>
                    <span className="text-white/80 text-lg group-hover:text-white transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="premium-button text-black font-bold text-lg px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-jezx-cyan/40 transform hover:scale-105 transition-all duration-500 group"
              >
                Join Waitlist
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass-card rounded-3xl p-12 hover:premium-glow transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="text-7xl font-bold text-gradient mb-4">Q2</div>
                  <div className="text-white text-2xl font-semibold mb-4">2025 Launch</div>
                  <div className="text-jezx-cyan text-lg">Get Early Access</div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">500+</div>
                    <div className="text-white/70 text-sm">Beta Testers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">99.99%</div>
                    <div className="text-white/70 text-sm">Uptime Target</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">50ms</div>
                    <div className="text-white/70 text-sm">Global Latency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Globe className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Be the First</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to <span className="text-gradient">Transform</span> Hosting?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive waitlist and be among the first to experience the future of cloud hosting with our revolutionary platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="premium-button text-black font-semibold px-8 py-4 rounded-full text-lg"
              >
                <Rocket className="w-5 h-5 mr-3" />
                Join Waitlist
              </Button>
              <Button asChild variant="outline" className="border-jezx-cyan/30 text-jezx-cyan hover:bg-jezx-cyan/10 px-8 py-4 rounded-full text-lg">
                <Link to="/contact">
                  <Clock className="w-5 h-5 mr-3" />
                  Get Updates
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

export default Hosting;
