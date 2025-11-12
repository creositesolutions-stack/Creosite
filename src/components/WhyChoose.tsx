import { CheckCircle2 } from "lucide-react";

export const WhyChoose = () => {
  const advantages = [
    "Premium modern designs",
    "Fast development (7-10 days)",
    "SEO-ready structure",
    "Mobile friendly & responsive",
    "Affordable pricing for small businesses",
    "End-to-end support"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Why Choose <span className="text-gradient-gold">CreoSite</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence through every project, combining speed, quality, and affordability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-lg font-medium group-hover:text-accent transition-colors">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};