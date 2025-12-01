import { useState } from "react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xvgerogp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // For now, we'll show a toast message
  //   // To make this functional, you'll need to set up a backend endpoint
  //   setTimeout(() => {
  //     toast({
  //       title: "Message Sent!",
  //       description: "Thank you for your message. I'll get back to you soon.",
  //     });
  //     setFormData({ name: "", email: "", subject: "", message: "" });
  //     setIsSubmitting(false);
  //   }, 1000);
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
          Get In Touch
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            <Card className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">
                Contact Information
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm sm:text-base text-foreground">
                      Email
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-foreground">
                      Phone
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-foreground">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">
                Social Media
              </h3>
              <div className="space-y-2 md:space-y-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors touch-manipulation"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    GitHub
                  </span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors touch-manipulation"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    LinkedIn
                  </span>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm sm:text-base">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-1 touch-manipulation"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="mt-1 touch-manipulation"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-sm sm:text-base">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  className="mt-1 touch-manipulation"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm sm:text-base">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows={6}
                  className="mt-1 touch-manipulation resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full gap-2 touch-manipulation"
                size="lg"
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
