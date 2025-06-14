
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectInquiryDialog from "@/components/ProjectInquiryDialog";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProjectDialog, setShowProjectDialog] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Hosting", path: "/hosting" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-jezx-cyan/30 premium-glow' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ef70d02e-cf58-4f14-99cf-d2ec71c1b788.png" 
                  alt="JezX Logo" 
                  className="h-10 w-auto transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-jezx-cyan/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gradient">JezX</span>
                <div className="text-xs text-jezx-cyan/80">Code the Future</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link text-sm font-medium transition-all duration-300 ${
                    isActive(item.path) ? "text-jezx-cyan" : "text-white/90 hover:text-white"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
              
              <Button 
                onClick={() => setShowProjectDialog(true)}
                className="premium-button text-black font-semibold px-6 py-3 rounded-full hover:shadow-2xl hover:shadow-jezx-cyan/30 transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-jezx-cyan transition-all duration-300 transform hover:scale-110"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 ease-out ${
            isOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden`}>
            <div className="glass-effect rounded-2xl mt-4 mb-6 p-6">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block text-lg font-medium transition-all duration-300 hover:pl-4 ${
                      isActive(item.path)
                        ? "text-jezx-cyan"
                        : "text-white/90 hover:text-jezx-cyan"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button 
                    onClick={() => {
                      setShowProjectDialog(true);
                      setIsOpen(false);
                    }}
                    className="w-full premium-button text-black font-semibold py-3 rounded-full"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <ProjectInquiryDialog 
        open={showProjectDialog} 
        onOpenChange={setShowProjectDialog} 
      />
    </>
  );
};

export default Navigation;
