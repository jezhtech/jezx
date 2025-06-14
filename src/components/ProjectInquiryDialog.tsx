
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles, Send, CheckCircle } from "lucide-react";

interface ProjectInquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectInquiryDialog = ({ open, onOpenChange }: ProjectInquiryDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    requirement: "",
    description: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        requirement: "",
        description: ""
      });
      onOpenChange(false);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="glass-card border-jezx-cyan/30 max-w-md">
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
            <p className="text-white/70 text-lg">
              Our team will contact you shortly to discuss your project requirements.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-jezx-cyan/30 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient flex items-center">
            <Sparkles className="w-6 h-6 mr-3 text-jezx-cyan" />
            Start Your Project
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
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
          
          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-white font-medium">Mobile Number *</Label>
            <Input
              id="mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => handleInputChange("mobile", e.target.value)}
              required
              className="glass-effect border-jezx-cyan/30 text-white placeholder:text-white/50"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="requirement" className="text-white font-medium">Project Type *</Label>
            <Input
              id="requirement"
              value={formData.requirement}
              onChange={(e) => handleInputChange("requirement", e.target.value)}
              required
              className="glass-effect border-jezx-cyan/30 text-white placeholder:text-white/50"
              placeholder="Web Application, Mobile App, AI Integration, etc."
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
              placeholder="Please describe your project requirements, timeline, and any specific features you need..."
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full premium-button text-black font-semibold py-3 rounded-full hover:shadow-2xl hover:shadow-jezx-cyan/30 transform hover:scale-105 transition-all duration-300"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-3"></div>
                Sending...
              </div>
            ) : (
              <div className="flex items-center">
                <Send className="w-5 h-5 mr-3" />
                Send Project Details
              </div>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectInquiryDialog;
