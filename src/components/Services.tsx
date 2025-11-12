import { Code, Palette, Search, Megaphone, Layers, HeadphonesIcon } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom-built, responsive websites tailored to your business needs with modern tech stack"
    },
    {
      icon: Layers,
      title: "Business Portfolio Sites",
      description: "Professional portfolios that showcase your work and attract clients effectively"
    },
    {
      icon: Megaphone,
      title: "Landing Pages",
      description: "High-converting landing pages for ads & marketing campaigns that drive results"
    },
    {
      icon: Palette,
      title: "Branding & UI/UX Design",
      description: "Beautiful, user-friendly designs that represent your brand perfectly"
    },
    {
      icon: Search,
      title: "SEO Setup & Optimization",
      description: "Get found on Google with our comprehensive SEO strategies and implementation"
    },
    {
      icon: HeadphonesIcon,
      title: "Digital Business Setup",
      description: "Complete digital presence including Google Maps, WhatsApp Business, and more"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What We <span className="text-gradient-gold">Do</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions designed to elevate your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};