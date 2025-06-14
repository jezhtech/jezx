
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Target, Lightbulb, Users2, Award, Zap, Sparkles, Rocket, Globe, Shield, Clock, TrendingUp } from "lucide-react";

const About = () => {
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
              <span className="text-sm font-medium text-white/90">About JezX</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Pioneers of <span className="text-gradient">AI Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-5xl mx-auto leading-relaxed">
              We are visionaries in AI-driven software development, transforming how businesses operate through intelligent automation, revolutionary solutions, and unprecedented innovation.
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
                At JezX, we're dedicated to revolutionizing software development by integrating cutting-edge AI technologies into every aspect of the development process. Our mission is to create intelligent, scalable solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We believe that the future of software lies in the seamless integration of artificial intelligence, automation, and human creativity. By combining these elements, we deliver solutions that are not just functional, but truly transformative.
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
              These core principles guide everything we do and shape how we approach every project and client relationship with excellence and integrity.
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

      {/* Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Brain className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Innovation Through <span className="text-gradient">Intelligence</span>
            </h2>
            <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
              We combine the latest in AI technology with proven development methodologies to create solutions that are both innovative and reliable, setting new industry standards.
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
    </div>
  );
};

export default About;
