 import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Sparkles, Users2, Target, Award, CheckCircle, Rocket } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours with innovative solutions.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@jezx.in",
      description: "Get instant responses to your inquiries",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 91505 37718",
      description: "Direct line to our innovation team",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Nagercoil, Kanyakumari",
      description: "Our state-of-the-art headquarters",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "< 24 hours",
      description: "Lightning-fast professional responses",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const projectTypes = [
    "AI Application Development",
    "Process Automation",
    "Custom Software Development",
    "AI Integration",
    "Consulting Services",
    "Enterprise Solutions",
    "Startup MVP Development",
    "Other"
  ];

  const benefits = [
    { icon: Target, text: "Expert AI Development with cutting-edge technologies" },
    { icon: Rocket, text: "Rapid prototyping and lightning-fast delivery" },
    { icon: Users2, text: "Dedicated team of AI specialists and innovators" },
    { icon: Award, text: "24/7 premium support with continuous optimization" }
  ];

  const whyChooseUs = [
    "Proven track record with 500+ successful AI implementations",
    "Industry-leading expertise in machine learning and automation",
    "Custom solutions tailored to your specific business needs",
    "Transparent communication throughout the development process",
    "Post-launch support and continuous system optimization"
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
              <MessageSquare className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Let's Connect</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Ready to <span className="text-gradient">Transform</span> Your Business?
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-5xl mx-auto leading-relaxed">
              Let's discuss your vision and create AI-powered solutions that will revolutionize your industry and drive unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-card hover:premium-glow transition-all duration-500 hover:transform hover:-translate-y-4 group">
                <CardContent className="p-8 text-center h-full">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse-glow`}>
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">{info.title}</h3>
                  <div className="text-jezx-cyan font-bold text-lg mb-2">{info.content}</div>
                  <p className="text-white/60 text-sm leading-relaxed">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="glass-card hover:premium-glow transition-all duration-500">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-xl flex items-center justify-center mr-4">
                    <Send className="h-6 w-6 text-black" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Start Your <span className="text-gradient">AI Journey</span></h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white font-semibold mb-2 block">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-jezx-cyan/30 text-white placeholder-gray-400 focus:border-jezx-cyan focus:ring-2 focus:ring-jezx-cyan/20 rounded-xl h-12"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white font-semibold mb-2 block">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-jezx-cyan/30 text-white placeholder-gray-400 focus:border-jezx-cyan focus:ring-2 focus:ring-jezx-cyan/20 rounded-xl h-12"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-white font-semibold mb-2 block">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/10 border-jezx-cyan/30 text-white placeholder-gray-400 focus:border-jezx-cyan focus:ring-2 focus:ring-jezx-cyan/20 rounded-xl h-12"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white font-semibold mb-2 block">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/10 border-jezx-cyan/30 text-white placeholder-gray-400 focus:border-jezx-cyan focus:ring-2 focus:ring-jezx-cyan/20 rounded-xl h-12"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="project" className="text-white font-semibold mb-2 block">Project Type</Label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-jezx-cyan/30 text-white rounded-xl px-4 py-3 focus:border-jezx-cyan focus:outline-none focus:ring-2 focus:ring-jezx-cyan/20"
                    >
                      <option value="" className="bg-gray-800">Select your project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-gray-800">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white font-semibold mb-2 block">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/10 border-jezx-cyan/30 text-white placeholder-gray-400 focus:border-jezx-cyan focus:ring-2 focus:ring-jezx-cyan/20 resize-none rounded-xl"
                      placeholder="Tell us about your project vision, goals, and how we can help transform your business with AI..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full premium-button text-black font-bold text-lg py-4 rounded-xl hover:shadow-2xl hover:shadow-jezx-cyan/40 transform hover:scale-105 transition-all duration-500 group"
                    size="lg"
                  >
                    <Sparkles className="mr-3 h-5 w-5" />
                    Send Message
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Why Choose Us Section */}
            <div className="space-y-8">
              <Card className="glass-card hover:premium-glow transition-all duration-500">
                <CardContent className="p-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-xl flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Why Choose <span className="text-gradient">JezX</span>?</h3>
                  </div>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-10 h-10 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                          <benefit.icon className="h-5 w-5 text-jezx-cyan" />
                        </div>
                        <span className="text-white/80 group-hover:text-white transition-colors duration-300 leading-relaxed">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:premium-glow transition-all duration-500">
                <CardContent className="p-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-xl flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our <span className="text-gradient">Commitment</span></h3>
                  </div>
                  <div className="space-y-3">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="flex items-start group">
                        <CheckCircle className="h-5 w-5 text-jezx-cyan mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-jezx-cyan/10 to-jezx-cyan-light/10 backdrop-blur-sm border-jezx-cyan/30 hover:premium-glow transition-all duration-500">
                <CardContent className="p-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Rocket className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Schedule a free consultation to discuss your project and discover how we can transform your business with innovative AI solutions.
                  </p>
                  <Button 
                    size="lg" 
                    className="premium-button text-black font-bold px-8 py-3 rounded-full hover:shadow-xl hover:shadow-jezx-cyan/30 transition-all duration-300 group"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Schedule Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
