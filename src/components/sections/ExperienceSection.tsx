import { professionalExperience, volunteerExperience } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Heart } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen pt-24 pb-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Professional Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {professionalExperience.map((exp, index) => (
                <Card key={index} className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground">
                        {exp.title}
                      </h4>
                      <p className="text-lg text-primary font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Volunteer Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Volunteer Experience
            </h3>
            <div className="space-y-6">
              {volunteerExperience.map((exp, index) => (
                <Card key={index} className="p-8">
                  <h4 className="text-2xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-lg text-primary font-semibold mb-1">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
