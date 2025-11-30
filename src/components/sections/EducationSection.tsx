import { education } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen pt-24 pb-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span className="font-semibold">CGPA: {edu.cgpa}</span>
                  </div>
                  <ul className="space-y-2">
                    {edu.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
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
