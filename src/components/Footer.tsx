import { Code } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <span className="text-2xl font-display font-bold">
                  CreoSite <span className="text-accent">Solutions</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building powerful websites that help businesses grow
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex gap-8 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors">
                Portfolio
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-accent transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {currentYear} CreoSite Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};