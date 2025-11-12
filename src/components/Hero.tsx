import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { BookCallDialog } from "./BookCallDialog";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    "Web Designing",
    "Web Development", 
    "E-Commerce",
    "Dynamic Landing Pages"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight mb-3 animate-fade-in-up">
            We Build Powerful Websites.{" "}
            <span className="block mt-1 text-foreground/90">Digitally.</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Schedule a call with us to discuss your project and get a quote in minutes
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <BookCallDialog />
            <Button 
              onClick={() => scrollToSection('portfolio')}
              size="default" 
              variant="outline"
              className="border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background px-6 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              PORTFOLIO
            </Button>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 justify-center md:justify-start group"
              >
                <Check className="w-3.5 h-3.5 text-foreground flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs md:text-sm font-medium group-hover:text-foreground/80 transition-colors duration-300">{service}</span>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xs text-muted-foreground mb-4">Trusted by fast moving brands</p>
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
              <div className="text-center group cursor-default">
                <div className="text-2xl md:text-3xl font-display font-bold mb-1 group-hover:scale-110 transition-transform duration-300">
                  12<span className="text-muted-foreground">+</span>
                </div>
                <div className="text-xs text-muted-foreground">Happy clients</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-2xl md:text-3xl font-display font-bold mb-1 group-hover:scale-110 transition-transform duration-300">
                  15<span className="text-muted-foreground">+</span>
                </div>
                <div className="text-xs text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
