
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Calendar, FileText, CheckCircle, Star, Play, MessageSquare, Heart, Book } from "lucide-react";
import { Link } from "react-router-dom";

const ChurchX = () => {
  const features = [
    {
      icon: Book,
      title: "Sacramental Records",
      description: "Complete lifecycle management from birth to death including baptism, confirmation, marriage, and last rites records.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Parish Member Management",
      description: "Comprehensive member database with family connections, contact information, and participation tracking.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Financial Management",
      description: "Complete parish accounting system with donations tracking, expense management, and financial reporting.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Calendar,
      title: "Event & Mass Scheduling",
      description: "Advanced scheduling system for masses, events, and sacramental ceremonies with automated notifications.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Complete sacramental record keeping",
    "Automated financial reporting",
    "Family tree and relationship tracking",
    "Multi-language support",
    "Secure data encryption",
    "Mobile-responsive design",
    "Automated backup systems",
    "Custom certificate generation"
  ];

  const testimonials = [
    {
      name: "Father Michael O'Connor",
      role: "Parish Priest",
      church: "St. Mary's Cathedral",
      content: "ChurchX has revolutionized how we manage our parish. The sacramental record system is incredibly comprehensive and user-friendly.",
      rating: 5
    },
    {
      name: "Sister Catherine Williams",
      role: "Parish Administrator",
      church: "Holy Trinity Church",
      content: "The financial management features have made our accounting so much more efficient. We can now generate reports in minutes instead of hours.",
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
                <Building2 className="w-5 h-5 text-jezx-cyan" />
                <span className="text-sm font-medium text-white/90">Church Management System</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                <span className="text-gradient">churchX</span><br />
                Complete Parish Management
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-10">
                Comprehensive digital solution designed specifically for Roman Catholic churches to manage all parish data, sacramental records, and administrative tasks with advanced security and ease of use.
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
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <Heart className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Serving Catholic Churches</h3>
                    <p className="text-white/70">Complete spiritual and administrative management</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient mb-1">100+</div>
                      <div className="text-white/70 text-sm">Churches Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient mb-1">50K+</div>
                      <div className="text-white/70 text-sm">Records Managed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient mb-1">99.9%</div>
                      <div className="text-white/70 text-sm">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient mb-1">24/7</div>
                      <div className="text-white/70 text-sm">Support</div>
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
              Comprehensive <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
              Everything your parish needs to efficiently manage spiritual life, administrative tasks, and community engagement.
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
                Why Choose <span className="text-gradient">churchX</span>?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Built specifically for Catholic parishes with deep understanding of church operations and sacramental requirements.
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
                  Special <span className="text-gradient">Church Pricing</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-jezx-cyan/20">
                    <span className="text-white/70">Small Parish</span>
                    <span className="text-white font-bold">$99/month</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-jezx-cyan/20">
                    <span className="text-white/70">Large Parish</span>
                    <span className="text-white font-bold">$199/month</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-jezx-cyan/20">
                    <span className="text-white/70">Setup & Training</span>
                    <span className="text-green-400 font-bold">Free</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-white/70">Support</span>
                    <span className="text-white font-bold">24/7</span>
                  </div>
                </div>
                <Button className="w-full premium-button text-black font-semibold py-4 rounded-full text-lg mt-6">
                  <Building2 className="w-5 h-5 mr-3" />
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
              Trusted by <span className="text-gradient">Catholic Parishes</span>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                      <div className="text-purple-400 text-sm font-medium">{testimonial.church}</div>
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

export default ChurchX;
