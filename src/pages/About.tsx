import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Helmet } from 'react-helmet-async';
import { OrganizationStructuredData, BreadcrumbStructuredData, AboutPageStructuredData } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Target, Lightbulb, Users2, Award, Zap, Sparkles, Rocket, Globe, Shield, Clock, TrendingUp, Star, Quote, ChevronLeft, ChevronRight, Building, Heart, Trophy } from "lucide-react";

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push boundaries and explore new possibilities with cutting-edge AI-driven development methodologies.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Every solution we create is designed to deliver measurable business impact and exponential growth.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "We think beyond conventional limits to solve complex challenges with elegant, intelligent solutions.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users2,
      title: "Partnership Excellence",
      description: "We work as an extension of your team, ensuring seamless collaboration and transparent communication.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "10+", label: "Years Innovation", icon: TrendingUp },
    { number: "500+", label: "AI Solutions", icon: Brain },
    { number: "100%", label: "Success Rate", icon: Award },
    { number: "Global", label: "Reach", icon: Globe }
  ];

  const approach = [
    {
      icon: Award,
      title: "Excellence Standards",
      description: "Every line of code is crafted with precision, ensuring robust, scalable, and maintainable enterprise solutions."
    },
    {
      icon: Zap,
      title: "Rapid Innovation",
      description: "AI-accelerated development processes that deliver exceptional results without compromising on quality or security."
    },
    {
      icon: Brain,
      title: "Intelligence Integration",
      description: "Seamless AI capability integration that enhances functionality, user experience, and business intelligence."
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

  const testimonials = [
    {
      name: "Binumon V R",
      role: "President, Dakshin Sahodaya School Complex",
      content: "I take great pride in the exceptional work undertaken by the team on the Dakshin Sahodaya Schools Complex website. Their expertise shines through, delivering a polished and impactful online presence that truly showcases their skills. Jezh Technologies initiative is leaving a positive imprint by nurturing AI skills among students across schools. Their commitment to fostering technological literacy is evident, making a significant impact on the landscape.",
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
    }
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
        title="About JezX | Enterprise Software Development & AI Innovation Leaders"
        description="JezX is a brand of Jezh Technologies focused on innovative AI-powered software development. Our team of global innovators is revolutionizing how businesses operate through intelligent automation and cutting-edge solutions."
        keywords="JezX, Jezh Technologies, Software Development, AI Innovation, Enterprise Solutions, Code the Future, Custom Software Engineering, About Us, Company Mission, Company Vision, Company Values"
        canonicalUrl="https://jezx.in/about"
        ogTitle="About JezX | Leaders in AI-Powered Software Development"
        ogDescription="Discover JezX's mission to revolutionize software development through AI innovation. Learn about our vision, values, and how we're transforming businesses globally."
        twitterTitle="About JezX | Code the Future with AI Innovation"
        twitterDescription="JezX brings together innovative minds from across the globe to transform businesses through intelligent automation and AI-powered solutions."
      />
      <Helmet>
        {/* Additional browser optimization meta tags */}
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Nagercoil" />
        <meta name="author" content="JezX Technologies" />
        <meta name="publisher" content="JezX Technologies" />
        <meta name="copyright" content="JezX Technologies" />
        <meta name="page-topic" content="Software Development Company" />
        <meta name="page-type" content="About Us" />
        <meta name="audience" content="All" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Helmet>
      <OrganizationStructuredData 
        url="https://jezx.in/about"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", item: "https://jezx.in/" },
          { name: "About Us", item: "https://jezx.in/about" }
        ]}
      />
      <AboutPageStructuredData />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">About JezX</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Pioneers of <span className="text-gradient">AI Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-5xl mx-auto leading-relaxed">
              JezX is a brand of Jezh Technologies, bringing together innovative minds from across the globe to revolutionize software development. We transform how businesses operate through intelligent automation, AI-powered solutions, and unparalleled technological innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
                <Target className="w-5 h-5 text-jezx-cyan" />
                <span className="text-sm font-medium text-white/90">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Revolutionizing <span className="text-gradient">Software Development</span>
              </h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                At JezX, we aspire to be a global leader in digital innovation. Our mission is to shape the future by creating intelligent, user-centric, and sustainable technologies that foster a connected world where businesses leverage IT to achieve unparalleled success, growth, and customer satisfaction.
              </p>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We're dedicated to revolutionizing software development by integrating cutting-edge AI technologies into every aspect of the development process. By combining artificial intelligence, automation, and human creativity, we deliver solutions that are not just functional, but truly transformative.
              </p>
              <Button 
                size="lg" 
                className="premium-button text-black font-bold text-lg px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-jezx-cyan/40 transform hover:scale-105 transition-all duration-500 group"
              >
                <Rocket className="mr-3 h-5 w-5" />
                Our Journey
              </Button>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="glass-card rounded-3xl p-10 hover:premium-glow transition-all duration-500">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="h-8 w-8 text-jezx-cyan" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                      <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/30 via-transparent to-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Our Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Principles That <span className="text-gradient">Drive Us</span>
            </h2>
            <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
              At JezX, we are committed to fostering an ethical work culture characterized by transparent practices and building trusted relationships with our clients. These core principles guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card hover:premium-glow transition-all duration-500 hover:transform hover:-translate-y-4 group">
                <CardContent className="p-8 text-center h-full">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse-glow`}>
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Brain className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Our Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Innovation Through <span className="text-gradient">Intelligence</span>
            </h2>
            <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
              We provide innovative, client-centric, and efficient technology services. We strive to empower businesses by delivering cutting-edge solutions that enhance operations, customer experiences, and overall growth. Our commitment lies in ethical practices, client satisfaction, and the continual pursuit of technological excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {approach.map((item, index) => (
              <Card key={index} className="glass-card hover:premium-glow transition-all duration-500 hover:transform hover:scale-105 group">
                <CardContent className="p-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                    <item.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
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
              Trusted By <span className="text-gradient">Industry Leaders</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We're proud to partner with innovative organizations worldwide, helping them transform their businesses through our advanced software solutions
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
              </div>
              <div className="flex gap-12 clients-marquee">
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
              </div>
              <div className="flex gap-12 clients-marquee">
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
              <Quote className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Client Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real-world testimonials from organizations that have transformed their operations through our custom software development expertise
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to <span className="text-gradient">Innovate</span> Together?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's explore how our AI-driven approach can transform your business and unlock new possibilities for growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="premium-button text-black font-bold text-lg px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-jezx-cyan/40 transform hover:scale-105 transition-all duration-500 group"
            >
              <Sparkles className="mr-3 h-6 w-6" />
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-effect border-jezx-cyan/50 text-white hover:bg-jezx-cyan/10 hover:border-jezx-cyan hover:premium-glow font-semibold text-lg px-10 py-4 rounded-full transition-all duration-500"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
