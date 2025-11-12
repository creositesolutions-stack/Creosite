import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const BookCallDialog = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    place: "",
    availability: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Call Booked!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", businessName: "", place: "", availability: "" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group animate-scale-in"
        >
          <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          Book a Call
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Schedule Your Free Consultation</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll get back to you to schedule a call.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-card border-border focus:border-accent"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              placeholder="Your Business"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              required
              className="bg-card border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="place">Location</Label>
            <Input
              id="place"
              placeholder="City, Country"
              value={formData.place}
              onChange={(e) => setFormData({ ...formData, place: e.target.value })}
              className="bg-card border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="availability">Preferred Time/Date *</Label>
            <Input
              id="availability"
              placeholder="e.g., Weekdays 2-4 PM"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              required
              className="bg-card border-border focus:border-accent"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6"
          >
            Confirm Booking
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
