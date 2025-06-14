
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star, Send, Briefcase, Code, Rocket, Heart } from "lucide-react";

const Careers = () => {
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      type: "Full-time",
      location: "San Francisco, CA / Remote",
      experience: "5+ years",
      description: "Join our team to build cutting-edge AI-powered applications using React, Node.js, and modern technologies.",
      requirements: ["React.js", "Node.js", "TypeScript", "AI/ML Knowledge", "Database Design"],
      salary: "$120k - $180k"
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      type: "Full-time",
      location: "San Francisco, CA / Remote",
      experience: "3+ years",
      description: "Lead our AI initiatives and integrate machine learning capabilities into our software solutions.",
      requirements: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Data Science"],
      salary: "$140k - $200k"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      description: "Optimize our infrastructure and deployment processes for scalable, reliable software delivery.",
      requirements: ["AWS/GCP", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code"],
      salary: "$110k - $160k"
    },
    {
      id: 4,
      title: "UX/UI Designer",
      type: "Full-time",
      location: "San Francisco, CA / Remote",
      experience: "3+ years",
      description: "Design beautiful, intuitive interfaces for our AI-powered applications and create amazing user experiences.",
      requirements: ["Figma", "Design Systems", "User Research", "Prototyping", "Visual Design"],
      salary: "$90k - $140k"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Learning & Growth",
      description: "Annual learning budget, conference attendance, and skill development opportunities"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible working hours, unlimited PTO, and remote work options"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Culture",
      description: "Work on cutting-edge projects, hackathons, and contribute to open source"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle application submission
    console.log("Application submitted:", applicationForm);
    alert("Application submitted successfully! We'll review it and get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-full floating-element blur-sm"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-tr from-jezx-cyan-light/30 to-transparent rounded-full floating-element" style={{ animationDelay: "2s" }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-jezx-cyan/10 via-transparent to-transparent rounded-full animate-pulse-glow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8 group hover:premium-glow transition-all duration-500">
              <Briefcase className="w-4 h-4 text-jezx-cyan animate-pulse" />
              <span className="text-sm font-medium text-white/90">Join the Future of Software Development</span>
              <Star className="w-4 h-4 text-jezx-cyan animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-white">Build Your</span>{" "}
              <span className="text-gradient block md:inline">Career</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join our team of innovative developers and help shape the future of{" "}
              <span className="text-gradient-secondary font-semibold">AI-powered software solutions</span>.
              Work on cutting-edge projects with the latest technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="premium-button text-black font-bold text-lg px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-jezx-cyan/40 transform hover:scale-105 transition-all duration-500"
                onClick={() => document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-effect border-jezx-cyan/50 text-white hover:bg-jezx-cyan/10 hover:border-jezx-cyan hover:premium-glow font-semibold text-lg px-10 py-4 rounded-full transition-all duration-500"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Benefits
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Why Join JezX?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and our team members grow personally and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover:premium-glow transition-all duration-500 hover:transform hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="job-openings" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Open Positions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover exciting opportunities to work with cutting-edge technologies and innovative projects.
            </p>
          </div>

          <div className="grid gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="glass-card border-jezx-cyan/20 hover:border-jezx-cyan/40 transition-all duration-300 hover:premium-glow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-white mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="outline" className="border-jezx-cyan/50 text-jezx-cyan">
                          <Briefcase className="w-3 h-3 mr-1" />
                          {job.type}
                        </Badge>
                        <Badge variant="outline" className="border-jezx-cyan/50 text-jezx-cyan">
                          <MapPin className="w-3 h-3 mr-1" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="border-jezx-cyan/50 text-jezx-cyan">
                          <Clock className="w-3 h-3 mr-1" />
                          {job.experience}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient">{job.salary}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-6">{job.description}</p>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <Badge key={index} className="bg-jezx-cyan/20 text-jezx-cyan border-jezx-cyan/30">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button 
                    className="premium-button text-black font-semibold"
                    onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Apply Now</h2>
            <p className="text-xl text-white/70">
              Ready to join our team? Submit your application and let's build the future together.
            </p>
          </div>

          <Card className="glass-card border-jezx-cyan/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name *</label>
                    <Input
                      value={applicationForm.name}
                      onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                      required
                      className="bg-white/5 border-white/20 text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                      required
                      className="bg-white/5 border-white/20 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <Input
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                      className="bg-white/5 border-white/20 text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Position *</label>
                    <Input
                      value={applicationForm.position}
                      onChange={(e) => setApplicationForm({...applicationForm, position: e.target.value})}
                      required
                      className="bg-white/5 border-white/20 text-white"
                      placeholder="Position you're applying for"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Years of Experience</label>
                  <Input
                    value={applicationForm.experience}
                    onChange={(e) => setApplicationForm({...applicationForm, experience: e.target.value})}
                    className="bg-white/5 border-white/20 text-white"
                    placeholder="e.g., 5 years"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Cover Letter *</label>
                  <Textarea
                    value={applicationForm.coverLetter}
                    onChange={(e) => setApplicationForm({...applicationForm, coverLetter: e.target.value})}
                    required
                    className="bg-white/5 border-white/20 text-white min-h-[150px]"
                    placeholder="Tell us why you'd be a great fit for this position..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full premium-button text-black font-bold text-lg py-4 rounded-full hover:shadow-2xl hover:shadow-jezx-cyan/40 transform hover:scale-105 transition-all duration-500"
                >
                  <Send className="mr-3 h-5 w-5" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
