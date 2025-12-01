import { education } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 bg-accent/20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-base sm:text-lg text-primary font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                    <span>{edu.location}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{edu.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="font-semibold">CGPA: {edu.cgpa}</span>
                  </div>
                  <ul className="space-y-2">
                    {edu.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm sm:text-base text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
