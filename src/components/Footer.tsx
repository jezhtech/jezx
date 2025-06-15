import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sparkles, ExternalLink, ShoppingBag, Building2, Calendar, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    if (location.pathname === path) {
      // If already on the same page, just scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // Navigate to the new page
      navigate(path);
    }
  };

  const marketplaceItems = [
    "JezX Developer Hoodie",
    "Code the Future T-Shirt", 
    "Mechanical Keyboard",
    "Developer Mug Set",
    "Laptop Stickers Pack"
  ];

  const latestProducts = [
    { name: "crmX", path: "/products/crmx" },
    { name: "churchX", path: "/products/churchx" },
    { name: "fleetX", path: "/products/fleetx" },
    { name: "vissionX", path: "/products/vissionx" },
    { name: "restoreX", path: "/products/restorex" }
  ];

  return (
    <footer className="bg-gradient-to-t from-black/80 to-transparent border-t border-jezx-cyan/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div 
              onClick={() => handleNavigation("/")}
              className="flex items-center space-x-3 mb-6 cursor-pointer"
            >
              <img 
                src="/logo/logo.png" 
                alt="JezX Logo" 
                className="h-16 w-auto transition-all duration-300 hover:scale-105"
              />
            </div>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Transforming businesses with innovative AI-powered software solutions that automate processes and drive unprecedented growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-white/60">
                <Mail className="w-5 h-5 mr-3 text-jezx-cyan" />
                <span>info@jezx.in</span>
              </div>
              <div className="flex items-center text-white/60">
                <Phone className="w-5 h-5 mr-3 text-jezx-cyan" />
                <span>+91 91505 37718</span>
              </div>
              <div className="flex items-center text-white/60">
                <MapPin className="w-5 h-5 mr-3 text-jezx-cyan" />
                <span>Nagercoil, Kanyakumari</span>
              </div>
            </div>
          </div>

          {/* Terms & Policy */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <div className="w-2 h-2 bg-jezx-cyan rounded-full mr-3"></div>
              Terms & Policy
            </h3>
            <ul className="space-y-4">
              <li><div onClick={() => handleNavigation("/terms")} className="text-white/70 hover:text-jezx-cyan transition-colors cursor-pointer">Terms of Use</div></li>
              <li><div onClick={() => handleNavigation("/privacy")} className="text-white/70 hover:text-jezx-cyan transition-colors cursor-pointer">Privacy Policy</div></li>
              <li><div onClick={() => handleNavigation("/security")} className="text-white/70 hover:text-jezx-cyan transition-colors cursor-pointer">Security</div></li>
              <li><div onClick={() => handleNavigation("/policies")} className="text-white/70 hover:text-jezx-cyan transition-colors cursor-pointer">Other Policies</div></li>
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <ShoppingBag className="w-5 h-5 mr-3 text-jezx-cyan" />
              Marketplace
            </h3>
            <ul className="space-y-4">
              {marketplaceItems.map((item, index) => (
                <li key={index}>
                  <div onClick={() => handleNavigation("/marketplace")} className="text-white/70 hover:text-jezx-cyan transition-colors flex items-center cursor-pointer">
                    {item}
                  </div>
                </li>
              ))}
              <li><div onClick={() => handleNavigation("/marketplace")} className="text-jezx-cyan font-medium hover:text-white transition-colors cursor-pointer">View More →</div></li>
            </ul>
          </div>

          {/* Latest Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <Sparkles className="w-5 h-5 mr-3 text-jezx-cyan" />
              Latest Products
            </h3>
            <ul className="space-y-4">
              {latestProducts.map((product, index) => (
                <li key={index}>
                  <div onClick={() => handleNavigation(product.path)} className="text-white/70 hover:text-jezx-cyan transition-colors cursor-pointer">
                    {product.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Links */}
        <div className="border-t border-jezx-cyan/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <div onClick={() => handleNavigation("/about")} className="text-white/70 hover:text-jezx-cyan transition-colors flex items-center cursor-pointer">
                <Building2 className="w-4 h-4 mr-2" />
                About Us
              </div>
              <div onClick={() => handleNavigation("/careers")} className="text-white/70 hover:text-jezx-cyan transition-colors cursor-pointer">
                Careers
              </div>
              <div onClick={() => handleNavigation("/consultation")} className="text-white/70 hover:text-jezx-cyan transition-colors flex items-center cursor-pointer">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </div>
            </div>
            <div className="text-white/60 text-sm">
              © 2025 JezX | Brand of <a href="https://www.jezhtechnologies.com" target="_blank" rel="noopener noreferrer" className="text-jezx-cyan hover:text-white transition-colors">Jezh Technologies</a>. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
