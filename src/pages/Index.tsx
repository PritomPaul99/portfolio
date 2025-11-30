import { Header } from "@/components/Header";
import { HomeSection } from "@/components/sections/HomeSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ResearchProjectsSection } from "@/components/sections/ResearchProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CompetitiveSection } from "@/components/sections/CompetitiveSection";
import { CVSection } from "@/components/sections/CVSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HomeSection />
        <EducationSection />
        <ResearchProjectsSection />
        <ExperienceSection />
        <CompetitiveSection />
        <CVSection />
        <ContactSection />
      </main>
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Pritom Paul. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
