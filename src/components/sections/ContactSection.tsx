import { useState } from "react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// NOTE: To use real emails in your local project:
// 1. Run: npm install @emailjs/browser
// 2. Uncomment the import below:
// import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { toast } = useToast();
  // const formRef = useRef(); // Uncomment for EmailJS

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- CONFIGURATION REQUIRED FOR REAL EMAILS ---
  // const SERVICE_ID = "YOUR_SERVICE_ID";
  // const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  // const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
  // ----------------------------------------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- SIMULATION MODE (For Preview) ---
    // Since we cannot use external libraries like emailjs in this preview,
    // we are simulating a successful send.
    setTimeout(() => {
      toast({
        title: "Message Sent (Simulation)",
        description: "In a real app, this would send an email via EmailJS.",
      });
      setFormData({ user_name: "", user_email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);

    // --- REAL IMPLEMENTATION (Uncomment in your project) ---
    /*
    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        {
          publicKey: PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({ user_name: "", user_email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast({
            title: "Failed to send",
            description: "Something went wrong. Please try emailing me directly.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
    */
  };

  return (
    <section id="contact" className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Get In Touch
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Social Media
              </h3>
              <div className="space-y-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">GitHub</span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send Me a Message
            </h3>
            {/* ref={formRef} would go here for EmailJS */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="user_name">Name</Label>
                <Input
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <Label htmlFor="user_email">Email</Label>
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows={6}
                />
              </div>
              <Button
                type="submit"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
