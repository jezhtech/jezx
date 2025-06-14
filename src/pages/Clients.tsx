
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Building2, Zap, TrendingUp, Sparkles, Trophy, Users2, Target, Award } from "lucide-react";

const Clients = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp Solutions",
      company: "TechCorp",
      content: "JezX transformed our entire business process with their AI-powered automation. We've seen a 300% increase in efficiency since implementation.",
      rating: 5,
      industry: "Technology"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      company: "InnovateLab",
      content: "The custom AI application they developed for us has revolutionized how we handle data analysis. Absolutely exceptional work.",
      rating: 5,
      industry: "Data Analytics"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GlobalTrade Inc",
      company: "GlobalTrade",
      content: "Their automation solutions saved us countless hours and reduced operational costs by 40%. The ROI was immediate and substantial.",
      rating: 5,
      industry: "Trade & Logistics"
    },
    {
      name: "David Park",
      role: "Founder, StartupX",
      company: "StartupX",
      content: "JezX helped us build our MVP with AI features that impressed our investors. Their innovative approach was exactly what we needed.",
      rating: 5,
      industry: "Startup"
    }
  ];

  const industries = [
    {
      icon: Building2,
      name: "Enterprise Solutions",
      description: "Large-scale AI implementations for major corporations",
      projects: "15+ Projects",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      name: "Startups & Innovation",
      description: "Cutting-edge solutions for emerging companies",
      projects: "20+ Projects",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      name: "E-commerce & Retail",
      description: "AI-powered customer experience and automation",
      projects: "12+ Projects",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const caseStudies = [
    {
      title: "AI-Powered Customer Service Platform",
      client: "Major E-commerce Company",
      challenge: "Manual customer support was overwhelming their team",
      solution: "Developed an AI chatbot that handles 80% of customer queries automatically",
      result: "Reduced response time by 90% and increased customer satisfaction by 45%",
      technologies: ["Natural Language Processing", "Machine Learning", "Cloud Integration"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Intelligent Inventory Management System",
      client: "Manufacturing Corporation",
      challenge: "Inefficient inventory tracking and frequent stockouts",
      solution: "Created AI-driven predictive analytics for inventory optimization",
      result: "Reduced inventory costs by 35% and eliminated stockouts by 95%",
      technologies: ["Predictive Analytics", "IoT Integration", "Real-time Processing"],
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const achievements = [
    { number: "500+", label: "AI Solutions Delivered", icon: Target },
    { number: "99.9%", label: "Client Satisfaction", icon: Award },
    { number: "50+", label: "Global Clients", icon: Users2 },
    { number: "24/7", label: "Support Excellence", icon: Sparkles }
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
              <Trophy className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Our Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-5xl mx-auto leading-relaxed">
              Transforming businesses worldwide with AI-powered solutions that deliver unprecedented results and drive innovation across every industry.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl p-12 hover:premium-glow transition-all duration-500 animate-slide-up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-10 w-10 text-jezx-cyan" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">{achievement.number}</div>
                  <div className="text-white/70 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/30 via-transparent to-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Building2 className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Industry Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Excellence Across <span className="text-gradient">Every Sector</span>
            </h2>
            <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
              Our AI solutions span across various industries, bringing innovation and efficiency to every sector with tailored approaches and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="glass-card hover:premium-glow transition-all duration-500 hover:transform hover:-translate-y-4 group">
                <CardContent className="p-10 text-center h-full">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse-glow`}>
                      <industry.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300`}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">{industry.name}</h3>
                  <p className="text-white/70 leading-relaxed mb-6">{industry.description}</p>
                  <div className="text-jezx-cyan font-bold text-lg">{industry.projects}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Quote className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear from the companies we've helped transform with AI-powered solutions that deliver real business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover:premium-glow transition-all duration-500 hover:transform hover:scale-105 group">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Quote className="h-8 w-8 text-jezx-cyan" />
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">{testimonial.content}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-lg">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                      <div className="text-jezx-cyan text-sm font-medium">{testimonial.industry}</div>
                    </div>
                    
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/30 via-transparent to-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Target className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Real Projects, <span className="text-gradient">Real Results</span>
            </h2>
            <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
              Explore how we've helped our clients achieve their goals with innovative AI solutions that deliver measurable business impact and transformation.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="glass-card hover:premium-glow transition-all duration-500 hover:transform hover:scale-[1.02] group">
                <CardContent className="p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">{study.title}</h3>
                      <div className="text-jezx-cyan font-semibold text-lg">{study.client}</div>
                      
                      <div>
                        <h4 className="text-white font-bold text-lg mb-3 flex items-center">
                          <div className="w-2 h-2 bg-jezx-cyan rounded-full mr-3"></div>
                          Challenge:
                        </h4>
                        <p className="text-white/70 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-bold text-lg mb-3 flex items-center">
                          <div className="w-2 h-2 bg-jezx-cyan rounded-full mr-3"></div>
                          Solution:
                        </h4>
                        <p className="text-white/70 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className={`bg-gradient-to-br ${study.gradient} rounded-2xl p-8 border border-jezx-cyan/20 group-hover:border-jezx-cyan/40 transition-all duration-300`}>
                        <h4 className="text-white font-bold text-xl mb-4 flex items-center">
                          <Trophy className="w-6 h-6 text-jezx-cyan mr-3" />
                          Results:
                        </h4>
                        <p className="text-white/90 mb-6 text-lg leading-relaxed">{study.result}</p>
                        
                        <h4 className="text-white font-bold text-lg mb-4">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-3">
                          {study.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-jezx-cyan/20 text-jezx-cyan px-4 py-2 rounded-full text-sm font-medium border border-jezx-cyan/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
