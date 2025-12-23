import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";
import {
  personalInfo,
  education,
  researchInterests,
  professionalSummary,
  cvStatistics,
  cvQuote,
} from "@/data/portfolioData";

export const CVSection = () => {
  const cvPath = "/Pritom_Paul_CV_2025.pdf";

  return (
    <section
      id="cv"
      className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Curriculum Vitae
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Complete overview of my academic and professional journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
          {/* Main CV Card */}
          <Card className="p-4 sm:p-6 md:p-12">
            {/* Personal Info */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 md:mb-4">
                {personalInfo.name}
              </h3>
              <div className="space-y-1.5 md:space-y-2 text-sm sm:text-base text-muted-foreground">
                <p>{personalInfo.location}</p>
                <p className="break-all">Email: {personalInfo.email}</p>
                <p>Phone: {personalInfo.phone}</p>
                <div className="flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-3">
                  <a
                    href={`https://github.com/${personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1 touch-manipulation"
                  >
                    GitHub <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1 touch-manipulation"
                  >
                    LinkedIn <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-6 md:mb-8">
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 md:mb-4 border-b border-border pb-2">
                Education
              </h4>
              {education.map((edu, index) => (
                <div key={index} className="mb-3 md:mb-4">
                  <p className="font-semibold text-sm sm:text-base text-foreground">
                    {edu.degree}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    {edu.institution}, {edu.period}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    CGPA: {edu.cgpa}
                  </p>
                </div>
              ))}
            </div>

            {/* Research Interests */}
            <div className="mb-6 md:mb-8">
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 md:mb-4 border-b border-border pb-2">
                Research Interests
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                {researchInterests.join(" • ")}
              </p>
            </div>

            {/* Professional Summary */}
            <div className="mb-6 md:mb-8">
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 md:mb-4 border-b border-border pb-2">
                Professional Summary
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                {professionalSummary}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 w-full sm:w-auto touch-manipulation"
              >
                <a href={cvPath} download="Pritom_Paul_CV_2025.pdf">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  Download CV (PDF)
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 w-full sm:w-auto touch-manipulation"
              >
                <a href={cvPath} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  View Online Version
                </a>
              </Button>
            </div>
          </Card>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {cvStatistics.map((stat, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 md:p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Quote */}
          <Card className="p-4 sm:p-6 md:p-8 border-l-4 border-l-primary bg-accent/20">
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground italic leading-relaxed">
              {cvQuote}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
