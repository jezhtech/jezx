import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import CrmX from "./pages/products/CrmX";
import ChurchX from "./pages/products/ChurchX";
import Hosting from "./pages/Hosting";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import Marketplace from "./pages/Marketplace";
import Admin from "./pages/Admin";
import Pricing from "./pages/Pricing";
import FleetX from "./pages/products/FleetX";

const queryClient = new QueryClient();

// Component to handle redirects
const RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // @ts-ignore - window.initialPath is set in index.html
    const initialPath = window.initialPath;
    if (initialPath && location.pathname === '/') {
      // Navigate to the initial path
      navigate('/' + initialPath, { replace: true });
      // @ts-ignore - Clear the initialPath
      window.initialPath = null;
    }
  }, [navigate, location]);
  
  return null;
};

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there's a hash in the URL, scroll to the element with that ID
    if (hash) {
      // Small delay to ensure the DOM is fully rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top with a small delay for smooth transition
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [pathname, hash]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RedirectHandler />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/crmx" element={<CrmX />} />
          <Route path="/products/churchx" element={<ChurchX />} />
          <Route path="/products/fleetx" element={<FleetX />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
