import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    email: "",
    requirements: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // Google Form action and entry IDs (from your form)
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSe0sQF_8wGLaH5u0j_a3QDvd2QZmi1QxLxtAZRvh6WWjI6ywQ/formResponse";

  const entryIds = {
    name: "entry.157210267",
    phone: "entry.564748638",
    businessName: "entry.2115468381",
    email: "entry.397535092",
    requirements: "entry.1228788769",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a hidden iframe to receive the Google Forms response (avoids redirect)
    const iframeName = `hidden_iframe_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    // Create and submit a native form pointing to the hidden iframe
    const form = document.createElement("form");
    form.method = "POST";
    form.action = GOOGLE_FORM_ACTION;
    form.target = iframeName;

    function addInput(name: string, value: string) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value || "";
      form.appendChild(input);
    }

    addInput(entryIds.name, formData.name);
    addInput(entryIds.phone, formData.phone);
    addInput(entryIds.businessName, formData.businessName);
    addInput(entryIds.email, formData.email);
    addInput(entryIds.requirements, formData.requirements);

    document.body.appendChild(form);

    // onload indicates the iframe received a response from Google (submission complete)
    const onloadHandler = () => {
      // show inline message + toast
      setSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thanks — we received your message and will respond within 24 hours.",
      });

      // clear fields
      setFormData({ name: "", phone: "", businessName: "", email: "", requirements: "" });

      // cleanup after a short delay (so iframe can finish)
      setTimeout(() => {
        try { document.body.removeChild(form); } catch {}
        try { document.body.removeChild(iframe); } catch {}
      }, 1500);

      // remove listener
      iframe.removeEventListener("load", onloadHandler);
    };

    iframe.addEventListener("load", onloadHandler);

    // submit
    form.submit();

    // As a fallback, if onload doesn't trigger (rare), still show a success after 2s
    setTimeout(() => {
      if (!submitted) {
        setSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "Thanks — we received your message and will respond within 24 hours.",
        });
        setFormData({ name: "", phone: "", businessName: "", email: "", requirements: "" });
      }
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Get In <span className="text-gradient-gold">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business? Let's discuss your project and bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-2xl font-display font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a
                    href="mailto:info@creosites.com"
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all group hover:scale-105"
                  >
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-accent transition-all group-hover:rotate-6">
                      <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">info@creosites.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all group hover:scale-105"
                  >
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-accent transition-all group-hover:rotate-6">
                      <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 98765 43210</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all group hover:scale-105"
                  >
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-accent transition-all group-hover:rotate-6">
                      <MessageCircle className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium">Chat with us</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {/* Inline custom success message */}
              {submitted && (
                <div className="mb-6 transform transition-opacity duration-500 ease-out opacity-100 animate-fade-in-up">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-green-600/10 border border-green-600 text-green-300">
                    <div className="text-2xl">✅</div>
                    <div>
                      <div className="font-semibold">Thank you — message received!</div>
                      <div className="text-sm text-muted-foreground">We’ll get back to you within 24 hours.</div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-card border-border focus:border-accent"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-card border-border focus:border-accent"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="bg-card border-border focus:border-accent"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-card border-border focus:border-accent"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Tell us about your project requirements *"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    required
                    className="bg-card border-border focus:border-accent min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6"
                >
                  Send Message
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
