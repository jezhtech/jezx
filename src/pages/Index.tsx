import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { OrganizationStructuredData, ServiceStructuredData } from "@/components/StructuredData";
import ProjectInquiryDialog from "@/components/ProjectInquiryDialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Rocket, Settings, Users, ArrowRight, CheckCircle, Sparkles, Trophy, Target, Zap, Globe, Shield, Clock, Calendar, Star, Quote, TrendingUp, Award, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [showProjectDialog, setShowProjectDialog] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Software Development",
      description: "Enterprise-grade AI solutions engineered to learn, adapt, and evolve with your business, transforming how software serves users globally.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Future-Ready Development",
      description: "Building next-generation software using cutting-edge technologies, modern architectures, and revolutionary development methodologies.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Enterprise Process Automation",
      description: "Advanced software automation systems that transform operations, eliminate inefficiencies, and maximize business productivity worldwide.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Custom Software Engineering",
      description: "Bespoke enterprise software solutions meticulously designed to address complex business requirements across industries globally.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    { icon: Clock, text: "75% faster development lifecycle with AI-powered software engineering" },
    { icon: Target, text: "60% reduction in operational costs through intelligent software automation" },
    { icon: Zap, text: "Infinitely scalable cloud solutions engineered to grow with global businesses" },
    { icon: Shield, text: "24/7 enterprise-grade support with continuous software optimization" }
  ];

  const achievements = [
    { number: "500+", label: "AI Models Deployed", icon: Brain },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "50+", label: "Enterprise Clients", icon: Globe },
    { number: "24/7", label: "Expert Support", icon: Clock }
  ];

  const testimonials = [
    {
      name: "Binumon V R",
      role: "President, Dakshin Sahodaya School Complex",
      content: "I take great pride in the exceptional work undertaken by the team on the Dakshin Sahodaya Schools Complex website. Their expertise shines through, delivering a polished and impactful online presence that truly showcases their skills.  Jezh Technologyies initiative is leaving a positive imprint by nurturing AI skills among students across schools. Their commitment to fostering technological literacy is evident, making a significant impact on the landscape.",
      rating: 5,
      avatar: "BV",
      company: "Dakshin Sahodaya School Complex",
      industry: "Education"
    },
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "JezX transformed our entire business operations. Their AI-powered solutions reduced our processing time by 75% and increased our efficiency beyond expectations.",
      rating: 5,
      avatar: "SJ",
      company: "TechStart Inc.",
      industry: "Technology"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content: "The level of innovation and technical expertise at JezX is unmatched. They delivered a solution that perfectly aligned with our vision and exceeded our requirements.",
      rating: 5,
      avatar: "MC",
      company: "InnovateCorp",
      industry: "Innovation"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Digital Solutions",
      content: "Working with JezX was a game-changer. Their AI-integrated CRM system revolutionized how we manage our customer relationships and boosted our sales by 60%.",
      rating: 5,
      avatar: "ER",
      company: "Digital Solutions",
      industry: "Digital Services"
    },
    {
      name: "Rajesh Kumar",
      role: "Director, Adarsh Vidya Kendra",
      content: "The implementation of the Electronic Voting Machine system by JezX has truly revolutionized our internal election processes. The system is intuitive, secure, and has increased student participation in school governance by 45%. Their technical support has been exceptional throughout.",
      rating: 5,
      avatar: "RK",
      company: "Adarsh Vidya Kendra",
      industry: "Education"
    },
    {
      name: "Sophia Martinez",
      role: "Principal, Rojavannam International School",
      content: "JezX has been an invaluable technology partner for our institution. Their electronic voting system ensures transparency and efficiency, while their RoboFun initiative has sparked incredible interest in AI and robotics among our students. We've seen a 60% increase in participation in technology-related extracurricular activities.",
      rating: 5,
      avatar: "SM",
      company: "Rojavannam International School",
      industry: "Education"
    },
    {
      name: "David Wilson",
      role: "CEO, First Class Fleet",
      content: "The fleet management solution developed by JezX has transformed our logistics operations. Real-time tracking, predictive maintenance alerts, and route optimization have reduced our operational costs by 32% and improved customer satisfaction scores by an impressive 47%.",
      rating: 5,
      avatar: "DW",
      company: "First Class Fleet",
      industry: "Transportation"
    },
    {
      name: "Ahmed Hassan",
      role: "Director, Lagoon Technologies",
      content: "JezX delivered an enterprise-grade cloud solution that exceeded our expectations. Their team's technical prowess and attention to detail resulted in a 99.99% uptime reliability and seamless integration with our existing systems. They're not just vendors but strategic technology partners.",
      rating: 5,
      avatar: "AH",
      company: "Lagoon Technologies",
      industry: "Information Technology"
    },
    {
      name: "Priya Sharma",
      role: "Managing Director, Goyaka Tours & Travels",
      content: "The custom booking and customer management platform built by JezX revolutionized our business operations. Their solution streamlined our processes, reduced manual errors by 85%, and provided valuable business analytics that helped us expand into three new markets within a year.",
      rating: 5,
      avatar: "PS",
      company: "Goyaka Tours & Travels",
      industry: "Travel & Tourism"
    }
  ];

  const clients = [
    
  
    { name: "Dakshin Sahodaya School Complex", logo: "DS" },
    { name: "Adarsh Vidya Kendra", logo: "AV" },
    { name: "L G Construction", logo: "LG" },
    { name: "Rojavannam International School", logo: "RI" },
    { name: "Enyard", logo: "EY" },
    { name: "RoboFun", logo: "RF" },
    { name: "Sidone Infrastructure", logo: "SI" },
    { name: "Booba Taxi", logo: "BT" },
    { name: "First Class Fleet", logo: "FC" },
    { name: "BoobaZhop", logo: "BZ" },
    { name: "Ricspace", logo: "RS" },
    { name: "Lagoon Technologies", logo: "LT" },
    { name: "Goyaka Tours & Travels", logo: "GT" },
    { name: "Prince Group", logo: "PG" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Trophy, description: "Successfully delivered cutting-edge solutions", color: "from-yellow-500 to-orange-500" },
    { number: "98%", label: "Client Satisfaction", icon: Heart, description: "Consistently exceeding expectations", color: "from-red-500 to-pink-500" },
    { number: "150+", label: "Happy Clients", icon: Users, description: "Building lasting partnerships worldwide", color: "from-blue-500 to-cyan-500" },
    { number: "24/7", label: "Support Available", icon: Clock, description: "Always here when you need us", color: "from-green-500 to-emerald-500" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000); // Change testimonial every 8 seconds
    
    return () => clearInterval(interval);
  }, [currentTestimonial, autoRotate]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="JezX - Code the Future | Enterprise-Grade Software Development Solutions"
        description="JezX specializes in AI-powered custom software development that transforms businesses globally. Our enterprise-grade solutions help companies Code the Future with cutting-edge technology."
        keywords="Code the Future, Software Development, Enterprise Software, Custom Software Engineering, AI-Powered Development, Advanced Software Solutions"
      />
      <OrganizationStructuredData />
      <ServiceStructuredData />
      <Navigation />
      <HeroSection />
      
      {/* Services Section with Premium Design */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Global Software Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Code The Future <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We engineer advanced software systems powered by artificial intelligence and innovative development practices, delivering enterprise solutions that redefine industry standards worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card hover:premium-glow transition-all duration-500 hover:transform hover:-translate-y-4 group">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse-glow transition-all duration-300`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">{service.title}</h3>
                  <p className="text-white/70 flex-grow leading-relaxed">{service.description}</p>
                  <Button variant="ghost" className="mt-6 text-jezx-cyan hover:bg-jezx-cyan/10 group-hover:text-white transition-all duration-300">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section - Fixed Dashboard Layout */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-jezx-cyan/5 via-transparent to-jezx-cyan-light/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
              <TrendingUp className="w-5 h-5 text-jezx-cyan animate-pulse" />
              <span className="text-sm font-medium text-white/90">Software Development Metrics</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Code The Future <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Measurable results that showcase our commitment to software engineering excellence and technological innovation globally
            </p>
          </div>
          
          <div className="relative flex items-center justify-center min-h-[800px]">
            {/* Central Hub */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-full flex items-center justify-center z-10 animate-pulse-glow">
              <Trophy className="w-16 h-16 text-black" />
            </div>
            
            {/* Orbital Stats - Revolution Animation */}
            <div className="absolute w-[800px] h-[800px] flex items-center justify-center animate-revolve-slow" style={{animationDuration: '20s'}}>
              {stats.map((stat, index) => {
                const angle = (index * 360) / stats.length;
                const radius = 350;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)` ,
                      top: `calc(50% + ${y}px)` ,
                      transform: `translate(-50%, -50%)`
                    }}
                  >
                    <div className="glass-card p-8 rounded-3xl hover:premium-glow transition-all duration-500 group relative overflow-hidden w-72 animate-counter-rotate" style={{animationDuration: '20s'}}>
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      <div className="relative z-10 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <stat.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                          {stat.number}
                        </div>
                        <div className="text-white font-semibold mb-2">{stat.label}</div>
                        <div className="text-white/60 text-sm">{stat.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Animated Background Rings */}
            <div className="absolute w-[600px] h-[600px] border border-jezx-cyan/20 rounded-full animate-rotate-slow"></div>
            <div className="absolute w-[700px] h-[700px] border border-jezx-cyan-light/10 rounded-full animate-rotate-slow" style={{animationDirection: 'reverse', animationDuration: '25s'}}></div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Redesigned as Scrolling Marquee */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/30 via-transparent to-black/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-jezx-cyan rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-jezx-cyan-light rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-jezx-cyan rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Global Enterprise Partners</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Code The Future with <span className="text-gradient">Industry Leaders</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Engineering advanced software solutions alongside innovative organizations worldwide, transforming businesses through technology
            </p>
          </div>
          
          {/* Scrolling Marquee */}
          <div className="relative w-full overflow-hidden py-12">
            {/* First row scrolling left to right */}
            <div className="flex animate-scroll whitespace-nowrap mb-8">
              <div className="flex gap-12 clients-marquee">
                {clients.map((client, index) => (
                  <div key={`forward-${index}`} className="glass-card rounded-2xl p-6 hover:premium-glow transition-all duration-500 flex items-center gap-4 min-w-[220px]">
                    <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-jezx-cyan font-bold text-xl">
                        {client.logo}
                      </span>
                    </div>
                    <div className="text-white/80 font-medium">
                      {client.name}
                    </div>
                  </div>
                ))}
                {/* Duplicate set for continuous scrolling */}
                {clients.map((client, index) => (
                  <div key={`forward-dup-${index}`} className="glass-card rounded-2xl p-6 hover:premium-glow transition-all duration-500 flex items-center gap-4 min-w-[220px]">
                    <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-jezx-cyan font-bold text-xl">
                        {client.logo}
                      </span>
                    </div>
                    <div className="text-white/80 font-medium">
                      {client.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second row scrolling right to left */}
            <div className="flex animate-scroll-reverse whitespace-nowrap">
              <div className="flex gap-12 clients-marquee">
                {[...clients].reverse().map((client, index) => (
                  <div key={`reverse-${index}`} className="glass-card rounded-2xl p-6 hover:premium-glow transition-all duration-500 flex items-center gap-4 min-w-[220px]">
                    <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-jezx-cyan font-bold text-xl">
                        {client.logo}
                      </span>
                    </div>
                    <div className="text-white/80 font-medium">
                      {client.name}
                    </div>
                  </div>
                ))}
                {/* Duplicate set for continuous scrolling */}
                {[...clients].reverse().map((client, index) => (
                  <div key={`reverse-dup-${index}`} className="glass-card rounded-2xl p-6 hover:premium-glow transition-all duration-500 flex items-center gap-4 min-w-[220px]">
                    <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-jezx-cyan font-bold text-xl">
                        {client.logo}
                      </span>
                    </div>
                    <div className="text-white/80 font-medium">
                      {client.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-jezx-cyan/10 rounded-full animate-rotate-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-jezx-cyan-light/10 rounded-full animate-rotate-slow" style={{animationDirection: 'reverse', animationDuration: '25s'}}></div>
        </div>
      </section>

      {/* Client Stories Section - Redesigned as Interactive Carousel */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
              <Quote className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Enterprise Software Success</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Code The Future <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real-world testimonials from global organizations that have transformed their operations through our custom software development expertise
            </p>
          </div>
          
          {/* Interactive Testimonial Carousel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="glass-card p-12 md:p-16 relative overflow-hidden hover:premium-glow transition-all duration-500">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 text-6xl text-jezx-cyan font-serif">"</div>
                  <div className="absolute bottom-8 right-8 text-6xl text-jezx-cyan font-serif rotate-180">"</div>
                </div>
                
                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-8">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="max-h-80 overflow-y-auto custom-scrollbar mb-12">
                    <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed text-center font-light italic">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-full flex items-center justify-center mr-6 animate-pulse-glow">
                      <span className="text-black font-bold text-xl">{testimonials[currentTestimonial].avatar}</span>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold text-xl mb-1">{testimonials[currentTestimonial].name}</div>
                      <div className="text-jezx-cyan text-lg mb-1">{testimonials[currentTestimonial].role}</div>
                      <div className="text-white/60 text-sm">{testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].industry}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-12 space-x-8">
              <Button
                onClick={() => {
                  prevTestimonial();
                  setAutoRotate(false);
                }}
                variant="outline"
                size="lg"
                className="w-14 h-14 rounded-full border-jezx-cyan/30 text-jezx-cyan hover:bg-jezx-cyan/10 hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              {/* Play/Pause Button */}
              <Button
                onClick={() => setAutoRotate(!autoRotate)}
                variant="outline"
                size="lg"
                className="w-14 h-14 rounded-full border-jezx-cyan/30 text-jezx-cyan hover:bg-jezx-cyan/10 hover:scale-110 transition-all duration-300"
              >
                {autoRotate ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </Button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-3 overflow-x-auto py-2 px-1 max-w-md mx-auto">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setAutoRotate(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                      index === currentTestimonial
                        ? 'bg-jezx-cyan w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                onClick={() => {
                  nextTestimonial();
                  setAutoRotate(false);
                }}
                variant="outline"
                size="lg"
                className="w-14 h-14 rounded-full border-jezx-cyan/30 text-jezx-cyan hover:bg-jezx-cyan/10 hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/40 via-transparent to-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
                <Trophy className="w-5 h-5 text-jezx-cyan" />
                <span className="text-sm font-medium text-white/90">Software Engineering Excellence</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Code The Future <span className="text-gradient">Advantage</span>
              </h2>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                We don't just write code—we architect tomorrow's software solutions. Our AI-driven engineering approach ensures every system is intelligent, globally scalable, and transformative for businesses worldwide.
              </p>
              
              <div className="space-y-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-6 w-6 text-black" />
                    </div>
                    <span className="text-white/80 text-lg group-hover:text-white transition-colors duration-300">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="premium-button text-black font-bold text-lg px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-jezx-cyan/40 transform hover:scale-105 transition-all duration-500 group"
              >
                Start Your Software Development
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass-card rounded-3xl p-12 hover:premium-glow transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="text-7xl font-bold text-gradient mb-4">100%</div>
                  <div className="text-white text-2xl font-semibold mb-8">Software Development Satisfaction</div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="h-8 w-8 text-jezx-cyan" />
                      </div>
                      <div className="text-3xl font-bold text-gradient mb-2">{achievement.number}</div>
                      <div className="text-white/70 text-sm font-medium">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Rocket className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Custom Software Development</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Let's Code The <span className="text-gradient">Future</span> Together
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Partner with expert software engineers to build advanced AI-powered solutions that transform your business and drive unprecedented technological growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => setShowProjectDialog(true)}
                className="premium-button text-black font-semibold px-8 py-4 rounded-full text-lg"
              >
                <Rocket className="w-5 h-5 mr-3" />
                Start Your Development Project
              </Button>
              <Button asChild variant="outline" className="border-jezx-cyan/30 text-jezx-cyan hover:bg-jezx-cyan/10 px-8 py-4 rounded-full text-lg">
                <Link to="/consultation">
                  <Calendar className="w-5 h-5 mr-3" />
                  Schedule Software Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <ProjectInquiryDialog 
        open={showProjectDialog} 
        onOpenChange={setShowProjectDialog} 
      />
    </div>
  );
};

export default Index;
