import { MessageSquare, Pen, Code, CheckSquare, Rocket, Headphones } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Requirement Discussion",
      description: "We understand your business goals and project requirements"
    },
    {
      icon: Pen,
      title: "Design & Wireframe",
      description: "Creating visual concepts and wireframes for your approval"
    },
    {
      icon: Code,
      title: "Development",
      description: "Building your website with clean code and modern technology"
    },
    {
      icon: CheckSquare,
      title: "Review & Testing",
      description: "Thorough testing across all devices and browsers"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Deploying your website and making it live"
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "Ongoing support to keep your website running smoothly"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Development <span className="text-gradient-gold">Process</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to deliver your project efficiently and effectively
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row gap-8 items-center animate-fade-in-up ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] group">
                      <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                          <step.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                        </div>
                        <h3 className="text-xl font-display font-semibold group-hover:text-accent transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Center number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-display font-bold text-2xl flex items-center justify-center shadow-lg shadow-accent/30">
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};