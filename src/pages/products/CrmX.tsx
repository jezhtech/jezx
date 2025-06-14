
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartBar, Users, TrendingUp, Zap, CheckCircle, ArrowRight, Star, Play, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const CrmX = () => {
  const features = [
    {
      icon: ChartBar,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze your sales data to provide actionable insights and predict future trends.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Employee Performance Tracking",
      description: "Comprehensive monitoring of sales team performance with real-time metrics and automated reporting.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Smart Lead Management",
      description: "Intelligent lead scoring and automated follow-up systems that increase conversion rates by 300%.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks, email sequences, and sales workflows to save hours of manual work daily.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Increase sales productivity by 40%",
    "Reduce manual data entry by 80%",
    "Improve lead conversion rates by 300%",
    "Real-time performance insights",
    "Automated follow-up sequences",
    "Custom reporting dashboards",
    "Mobile-first responsive design",
    "Enterprise-grade security"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Sales Director",
      company: "TechCorp Inc.",
      content: "CrmX transformed our entire sales process. Our team's productivity increased by 45% in just the first month.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "GrowthLab",
      content: "The AI insights are incredibly accurate. We've seen our conversion rates triple since implementing CrmX.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
                <ChartBar className="w-5 h-5 text-jezx-cyan" />
                <span className="text-sm font-medium text-white/90">LLM Integrated CRM</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                <span className="text-gradient">crmX</span><br />
                Intelligent Sales Management
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-10">
                Revolutionary CRM platform powered by Large Language Models that transforms how sales teams work. From lead generation to deal closure, automate everything with AI intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="premium-button text-black font-semibold px-8 py-4 rounded-full text-lg">
                  <Play className="w-5 h-5 mr-3" />
                  Watch Demo
                </Button>
                <Button asChild variant="outline" className="border-jezx-cyan/30 text-jezx-cyan hover:bg-jezx-cyan/10 px-8 py-4 rounded-full text-lg">
                  <Link to="/consultation">
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule Demo
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="glass-card rounded-3xl p-8 hover:premium-glow transition-all duration-500">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient mb-2">300%</div>
                      <div className="text-white/70 text-sm">Conversion Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient mb-2">40%</div>
                      <div className="text-white/70 text-sm">Productivity Boost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient mb-2">80%</div>
                      <div className="text-white/70 text-sm">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                      <div className="text-white/70 text-sm">AI Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/30 via-transparent to-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Powerful <span className="text-gradient">AI Features</span>
            </h2>
            <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
              Experience the future of customer relationship management with AI-powered features that transform your sales process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover:premium-glow transition-all duration-500 hover:transform hover:scale-105 group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose <span className="text-gradient">crmX</span>?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Transform your sales operations with intelligent automation and data-driven insights that deliver measurable results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-white/80">
                    <CheckCircle className="w-5 h-5 text-jezx-cyan mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="glass-card rounded-3xl p-8 hover:premium-glow transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Start Your <span className="text-gradient">Free Trial</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-jezx-cyan/20">
                    <span className="text-white/70">Setup Time</span>
                    <span className="text-white font-bold">5 Minutes</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-jezx-cyan/20">
                    <span className="text-white/70">Free Trial Period</span>
                    <span className="text-white font-bold">14 Days</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-jezx-cyan/20">
                    <span className="text-white/70">Support</span>
                    <span className="text-white font-bold">24/7</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-white/70">Implementation</span>
                    <span className="text-white font-bold">Free</span>
                  </div>
                </div>
                <Button className="w-full premium-button text-black font-semibold py-4 rounded-full text-lg mt-6">
                  <Zap className="w-5 h-5 mr-3" />
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/30 via-transparent to-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover:premium-glow transition-all duration-500 hover:transform hover:scale-105 group">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare className="h-6 w-6 text-jezx-cyan" />
                    </div>
                    <div>
                      <div className="text-white font-bold">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                      <div className="text-jezx-cyan text-sm font-medium">{testimonial.company}</div>
                    </div>
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

export default CrmX;
