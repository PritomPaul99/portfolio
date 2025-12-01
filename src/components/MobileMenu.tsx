import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research & Projects" },
  { id: "experience", label: "Experience" },
  { id: "competitive", label: "Competitive Experience" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" },
];

interface MobileMenuProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileMenu = ({ activeSection, onNavigate }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <nav className="fixed top-16 right-0 w-64 bg-card border-l border-border shadow-lg z-50 animate-slide-in-right">
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-md transition-all duration-200 text-sm font-medium",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </>
      )}
    </div>
  );
};
