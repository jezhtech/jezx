import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
