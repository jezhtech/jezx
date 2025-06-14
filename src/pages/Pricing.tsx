
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and startups",
      icon: <Rocket className="w-6 h-6" />,
      popular: false,
      features: [
        "Up to 1,000 contacts",
        "Basic CRM features",
        "Email support",
        "Mobile app access",
        "Basic reporting",
        "1 user account"
      ]
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      icon: <Zap className="w-6 h-6" />,
      popular: true,
      features: [
        "Up to 10,000 contacts",
        "Advanced CRM features",
        "Priority support",
        "Advanced analytics",
        "Automation workflows",
        "Up to 5 user accounts",
        "API access",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      icon: <Crown className="w-6 h-6" />,
      popular: false,
      features: [
        "Unlimited contacts",
        "Full CRM suite",
        "24/7 dedicated support",
        "Custom reporting",
        "Advanced automation",
        "Unlimited user accounts",
        "White-label options",
        "Custom development",
        "On-premise deployment"
      ]
    }
  ];

  const productPricing = {
    crmX: {
      name: "crmX",
      description: "AI-integrated CRM platform",
      plans: pricingPlans
    },
    churchX: {
      name: "churchX",
      description: "Church management system",
      plans: [
        {
          name: "Parish",
          price: "$49",
          period: "/month",
          description: "For small parishes",
          icon: <Rocket className="w-6 h-6" />,
          popular: false,
          features: [
            "Up to 500 members",
            "Member management",
            "Event scheduling",
            "Basic reporting",
            "Email notifications"
          ]
        },
        {
          name: "Diocese",
          price: "$149",
          period: "/month",
          description: "For larger churches",
          icon: <Crown className="w-6 h-6" />,
          popular: true,
          features: [
            "Unlimited members",
            "Full sacramental records",
            "Financial management",
            "Advanced reporting",
            "Multi-location support",
            "Custom workflows"
          ]
        }
      ]
    },
    fleetX: {
      name: "fleetX",
      description: "Fleet management and taxi booking platform",
      plans: [
        {
          name: "Basic Fleet",
          price: "$79",
          period: "/month",
          description: "For small taxi operators",
          icon: <Rocket className="w-6 h-6" />,
          popular: false,
          features: [
            "Up to 20 vehicles",
            "Basic booking system",
            "Driver management",
            "Basic analytics",
            "Mobile app"
          ]
        },
        {
          name: "Premium Fleet",
          price: "$199",
          period: "/month",
          description: "For growing fleet operations",
          icon: <Zap className="w-6 h-6" />,
          popular: true,
          features: [
            "Up to 100 vehicles",
            "Advanced booking system",
            "Geofencing",
            "Fare rule settings",
            "Advanced analytics",
            "Multi-platform apps",
            "Payment integration"
          ]
        },
        {
          name: "Enterprise Fleet",
          price: "$399",
          period: "/month",
          description: "For large fleet operations",
          icon: <Crown className="w-6 h-6" />,
          popular: false,
          features: [
            "Unlimited vehicles",
            "Full fleet management",
            "Advanced geofencing",
            "Custom fare rules",
            "Real-time tracking",
            "White-label solution",
            "API access",
            "24/7 support"
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-jezx-cyan/20 to-jezx-cyan-light/10 rounded-full floating-element blur-sm"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-tr from-jezx-cyan-light/30 to-transparent rounded-full floating-element" style={{ animationDelay: "2s" }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-jezx-cyan/10 via-transparent to-transparent rounded-full animate-pulse-glow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8 group hover:premium-glow transition-all duration-500">
              <Star className="w-4 h-4 text-jezx-cyan animate-pulse" />
              <span className="text-sm font-medium text-white/90">Flexible Pricing for Every Business</span>
              <Star className="w-4 h-4 text-jezx-cyan animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-white">Choose Your</span>{" "}
              <span className="text-gradient block md:inline">Plan</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Scale your business with our{" "}
              <span className="text-gradient-secondary font-semibold">AI-powered software solutions</span>.
              Transparent pricing with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* CRM Pricing */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">crmX Pricing</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              AI-integrated CRM platform that makes sales management effortless for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productPricing.crmX.plans.map((plan, index) => (
              <Card key={index} className={`glass-card transition-all duration-500 hover:premium-glow hover:scale-105 ${plan.popular ? 'border-jezx-cyan ring-2 ring-jezx-cyan/20' : 'border-jezx-cyan/20'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="premium-button text-black font-semibold px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <p className="text-white/70 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-white/70 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-jezx-cyan mr-3 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full font-semibold ${plan.popular ? 'premium-button text-black' : 'glass-effect border-jezx-cyan/50 text-white hover:bg-jezx-cyan/10'}`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ChurchX Pricing */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">churchX Pricing</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive church management system for Roman Catholic parishes and dioceses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {productPricing.churchX.plans.map((plan, index) => (
              <Card key={index} className={`glass-card transition-all duration-500 hover:premium-glow hover:scale-105 ${plan.popular ? 'border-jezx-cyan ring-2 ring-jezx-cyan/20' : 'border-jezx-cyan/20'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="premium-button text-black font-semibold px-4 py-2">
                      Recommended
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <p className="text-white/70 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-white/70 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-jezx-cyan mr-3 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full font-semibold ${plan.popular ? 'premium-button text-black' : 'glass-effect border-jezx-cyan/50 text-white hover:bg-jezx-cyan/10'}`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FleetX Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">fleetX Pricing</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Advanced fleet management and taxi booking platform with geofencing and premium features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productPricing.fleetX.plans.map((plan, index) => (
              <Card key={index} className={`glass-card transition-all duration-500 hover:premium-glow hover:scale-105 ${plan.popular ? 'border-jezx-cyan ring-2 ring-jezx-cyan/20' : 'border-jezx-cyan/20'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="premium-button text-black font-semibold px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-jezx-cyan to-jezx-cyan-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <p className="text-white/70 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-white/70 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-jezx-cyan mr-3 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full font-semibold ${plan.popular ? 'premium-button text-black' : 'glass-effect border-jezx-cyan/50 text-white hover:bg-jezx-cyan/10'}`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
