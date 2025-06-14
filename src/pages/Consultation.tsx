
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Video, CheckCircle, Users, Zap, Star } from "lucide-react";
import { useState } from "react";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    preferredDate: "",
    preferredTime: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const benefits = [
    "Free 30-minute consultation",
    "Expert project assessment",
    "Custom solution roadmap",
    "Technology recommendations",
    "Timeline and budget estimation",
    "No obligation discussion"
  ];

  const timeSlots = [
    "9:00 AM - 9:30 AM",
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "2:00 PM - 2:30 PM",
    "3:00 PM - 3:30 PM",
    "4:00 PM - 4:30 PM"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card rounded-3xl p-12 hover:premium-glow transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-400/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Consultation <span className="text-gradient">Booked!</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Thank you for scheduling a consultation with us. We'll send you a calendar invite and meeting details within the next few minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="premium-button text-black font-semibold px-8 py-4 rounded-full text-lg">
                  <a href="/">Return Home</a>
                </Button>
                <Button asChild variant="outline" className="border-jezx-cyan/30 text-jezx-cyan hover:bg-jezx-cyan/10 px-8 py-4 rounded-full text-lg">
                  <a href="/products">Explore Products</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Calendar className="w-5 h-5 text-jezx-cyan" />
              <span className="text-sm font-medium text-white/90">Free Consultation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Schedule Your <span className="text-gradient">Consultation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-5xl mx-auto leading-relaxed">
              Get expert advice on your AI and software development needs. Let's discuss how we can transform your business with innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Consultation Benefits */}
            <div className="lg:col-span-1">
              <div className="glass-card rounded-3xl p-8 hover:premium-glow transition-all duration-500 h-fit">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-jezx-cyan" />
                  What You'll Get
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-jezx-cyan mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-jezx-cyan/20">
                  <div className="flex items-center mb-4">
                    <Video className="w-6 h-6 mr-3 text-jezx-cyan" />
                    <span className="text-white font-semibold">Video Call</span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    We'll conduct the consultation via video call for the best experience.
                  </p>
                  
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 mr-3 text-jezx-cyan" />
                    <span className="text-white font-semibold">30 Minutes</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Focused discussion on your project needs and our solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-jezx-cyan/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gradient mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-jezx-cyan" />
                    Book Your Free Consultation
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="glass-effect border-jezx-cyan/30 text-white placeholder:text-white/50"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="glass-effect border-jezx-cyan/30 text-white placeholder:text-white/50"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white font-medium">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="glass-effect border-jezx-cyan/30 text-white placeholder:text-white/50"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="glass-effect border-jezx-cyan/30 text-white placeholder:text-white/50"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectType" className="text-white font-medium">Project Type *</Label>
                        <Input
                          id="projectType"
                          value={formData.projectType}
                          onChange={(e) => handleInputChange("projectType", e.target.value)}
                          required
                          className="glass-effect border-jezx-cyan/30 text-white placeholder:text-white/50"
                          placeholder="Web App, AI Integration, Custom Software"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-white font-medium">Budget Range</Label>
                        <Input
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                          className="glass-effect border-jezx-cyan/30 text-white placeholder:text-white/50"
                          placeholder="$10k - $50k"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-white font-medium">Project Timeline</Label>
                      <Input
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange("timeline", e.target.value)}
                        className="glass-effect border-jezx-cyan/30 text-white placeholder:text-white/50"
                        placeholder="3-6 months"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-white font-medium">Project Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        required
                        rows={4}
                        className="glass-effect border-jezx-cyan/30 text-white placeholder:text-white/50 resize-none"
                        placeholder="Please describe your project requirements, goals, and any specific challenges you're facing..."
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate" className="text-white font-medium">Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          required
                          className="glass-effect border-jezx-cyan/30 text-white"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime" className="text-white font-medium">Preferred Time *</Label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                          required
                          className="w-full glass-effect border border-jezx-cyan/30 rounded-md bg-transparent text-white p-3"
                        >
                          <option value="" className="bg-gray-900">Select time slot</option>
                          {timeSlots.map((slot, index) => (
                            <option key={index} value={slot} className="bg-gray-900">{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full premium-button text-black font-semibold py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-jezx-cyan/30 transform hover:scale-105 transition-all duration-300"
                    >
                      <Zap className="w-5 h-5 mr-3" />
                      Schedule Free Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
