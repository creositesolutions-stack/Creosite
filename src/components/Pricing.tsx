import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter Website",
      price: "Starting at ₹4,999",
      description: "Perfect for small businesses getting started online",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form",
        "1 month support",
        "Social media links"
      ]
    },
    {
      name: "Business Website",
      price: "Starting at ₹20,000",
      description: "Complete solution for growing businesses",
      features: [
        "Up to 10 pages",
        "Custom design",
        "Advanced SEO",
        "WhatsApp integration",
        "Google Maps integration",
        "3 months support",
        "Basic analytics",
      ],
      popular: true
    },
    {
      name: "Premium Website",
      price: "Starting at ₹40,000",
      description: "Full-featured platform for established businesses",
      features: [
        "Unlimited pages",
        "Premium custom design",
        "Complete SEO package",
        "E-commerce ready",
        "Blog/News section",
        "6 months support",
        "Advanced analytics",
        "Priority updates",
        "Performance optimization"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Transparent <span className="text-gradient-gold">Pricing</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All packages include quality design and development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 bg-card border rounded-2xl transition-all duration-500 hover:shadow-lg hover:-translate-y-2 animate-fade-in-up ${
                  plan.popular 
                    ? 'border-accent shadow-lg scale-105' 
                    : 'border-border hover:border-accent/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold animate-scale-in">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  <p className="text-3xl font-display font-bold text-accent mb-3">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full font-semibold hover:scale-105 transition-transform ${
                    plan.popular 
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  asChild
                >
                  <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Started
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 text-sm">
            * All prices are indicative. Final quote will be provided after requirement discussion.
          </p>
        </div>
      </div>
    </section>
  );
};