import { Sparkles, Target, Users } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Empower local businesses with premium digital presence"
    },
    {
      icon: Sparkles,
      title: "Our Vision",
      description: "Modern, elegant designs that drive real results"
    },
    {
      icon: Users,
      title: "Our Approach",
      description: "Client-focused solutions with ongoing support"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Who We <span className="text-gradient-gold">Are</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              CreoSite Solutions is a modern tech initiative dedicated to building strong digital
              identities for local businesses. Our goal is to help offline businesses go digital with 
              elegant designs, smooth UI, and reliable systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};