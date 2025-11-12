import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import growiqMockup from "@/assets/growiq-mockup.jpg";
import alheneyahMockup from "@/assets/alheneyah-mockup.jpg";

export const Portfolio = () => {
  const projects = [
    {
      name: "GrowIQ",
      url: "https://growiqlearning.co.in",
      image: growiqMockup,
      description: "GrowIQ is an AI-integrated learning platform. CreoSite Solutions built a smooth, responsive website with a clean UI to represent their modern education model.",
      features: ["AI Integration", "Responsive Design", "Modern UI/UX", "Fast Performance"]
    },
    {
      name: "AlHeneyah Air Conditioning",
      url: "https://www.alheneyah.com",
      image: alheneyahMockup,
      description: "AlHeneyah is an AC repair, installation, and maintenance service provider. CreoSite Solutions developed their official website with professional layout and strong functionality.",
      features: ["Service Showcase", "WhatsApp Integration", "Mobile Responsive", "Contact Forms"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient-gold">Work</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects, real results. See how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-muted">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      asChild
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group/btn w-fit"
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};