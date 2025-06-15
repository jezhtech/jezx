import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Code2, Sparkles, Star, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-27">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-full floating-element blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-tr from-jezx-cyan-light/30 to-transparent rounded-full floating-element" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-jezx-cyan/25 rounded-full floating-element" style={{ animationDelay: "4s" }}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-jezx-cyan/10 via-transparent to-transparent rounded-full animate-pulse-glow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8 group hover:premium-glow transition-all duration-500">
            <Star className="w-4 h-4 text-jezx-cyan animate-pulse" />
            <span className="text-sm font-medium text-white/90">World-Class Software Development Excellence</span>
            <Sparkles className="w-4 h-4 text-jezx-cyan animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">Code the</span>{" "}
            <span className="text-gradient block md:inline">Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Enterprise-Grade Software Development with{" "}
            <span className="text-gradient-secondary font-semibold">Advanced AI Integration</span>.
            We engineer, innovate, and deliver cutting-edge software solutions that transform businesses globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="premium-button text-black font-bold text-lg px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-jezx-cyan/40 transform hover:scale-105 transition-all duration-500 group"
            >
              Start Your Project 
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-effect border-jezx-cyan/50 text-white hover:bg-jezx-cyan/10 hover:border-jezx-cyan hover:premium-glow font-semibold text-lg px-10 py-4 rounded-full transition-all duration-500"
            >
              <Rocket className="mr-3 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Feature highlights with enhanced design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="glass-card p-8 rounded-2xl hover:premium-glow transition-all duration-500 hover:transform hover:scale-105 group morphing-shape">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse-glow">
                  <Cpu className="h-10 w-10 text-black" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-jezx-cyan/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">AI-Powered Development</h3>
              <p className="text-white/70 leading-relaxed">Enterprise-grade AI technology seamlessly integrated into custom software solutions, creating intelligent systems that evolve with your business needs.</p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:premium-glow transition-all duration-500 hover:transform hover:scale-105 group morphing-shape" style={{ animationDelay: "0.2s" }}>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse-glow">
                  <Zap className="h-10 w-10 text-black" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-jezx-cyan/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">Advanced Automation</h3>
              <p className="text-white/70 leading-relaxed">Industry-leading automation framework that transforms business processes, eliminates inefficiencies, and accelerates software development lifecycles.</p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:premium-glow transition-all duration-500 hover:transform hover:scale-105 group morphing-shape" style={{ animationDelay: "0.4s" }}>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse-glow">
                  <Code2 className="h-10 w-10 text-black" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-jezx-cyan/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">Enterprise Solutions</h3>
              <p className="text-white/70 leading-relaxed">Future-ready software architecture engineered to scale, designed specifically to address complex business challenges across industries worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
