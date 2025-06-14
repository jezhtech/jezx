
import { Link } from "react-router-dom";
import { Sparkles, ExternalLink, ShoppingBag, Building2, Calendar, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
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
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/ef70d02e-cf58-4f14-99cf-d2ec71c1b788.png" 
                alt="JezX Logo" 
                className="h-12 w-auto"
              />
              <div>
                <span className="text-2xl font-bold text-gradient">JezX</span>
                <div className="text-sm text-jezx-cyan/80">Code the Future</div>
              </div>
            </Link>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Transforming businesses with innovative AI-powered software solutions that automate processes and drive unprecedented growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-white/60">
                <Mail className="w-5 h-5 mr-3 text-jezx-cyan" />
                <span>hello@jezx.dev</span>
              </div>
              <div className="flex items-center text-white/60">
                <Phone className="w-5 h-5 mr-3 text-jezx-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-white/60">
                <MapPin className="w-5 h-5 mr-3 text-jezx-cyan" />
                <span>San Francisco, CA</span>
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
              <li><Link to="/terms" className="text-white/70 hover:text-jezx-cyan transition-colors">Terms of Use</Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-jezx-cyan transition-colors">Privacy Policy</Link></li>
              <li><Link to="/security" className="text-white/70 hover:text-jezx-cyan transition-colors">Security</Link></li>
              <li><Link to="/policies" className="text-white/70 hover:text-jezx-cyan transition-colors">Other Policies</Link></li>
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
                  <Link to="/marketplace" className="text-white/70 hover:text-jezx-cyan transition-colors flex items-center">
                    {item}
                  </Link>
                </li>
              ))}
              <li><Link to="/marketplace" className="text-jezx-cyan font-medium hover:text-white transition-colors">View More →</Link></li>
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
                  <Link to={product.path} className="text-white/70 hover:text-jezx-cyan transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Links */}
        <div className="border-t border-jezx-cyan/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <Link to="/about" className="text-white/70 hover:text-jezx-cyan transition-colors flex items-center">
                <Building2 className="w-4 h-4 mr-2" />
                About Us
              </Link>
              <Link to="/careers" className="text-white/70 hover:text-jezx-cyan transition-colors">
                Careers
              </Link>
              <Link to="/consultation" className="text-white/70 hover:text-jezx-cyan transition-colors flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Link>
            </div>
            <div className="text-white/60 text-sm">
              © 2024 JezX. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
