import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="cv" className="min-h-screen py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-left max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">
            Curriculum Vitae
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete overview of my academic and professional journey
          </p>
        </div>

        {/* Main CV Content Card */}
        <div className="max-w-5xl mx-auto mb-8">
          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Personal Info & Education */}
              <div className="lg:col-span-1 space-y-8 border-r-0 lg:border-r border-border pr-0 lg:pr-8">
                {/* Personal Info Block */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {personalInfo.name}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>{personalInfo.location}</li>
                    <li>Email: {personalInfo.email}</li>
                    <li>Phone: {personalInfo.phone}</li>
                  </ul>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-4 text-sm">
                    <a
                      href={`https://github.com/${personalInfo.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      GitHub <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      LinkedIn <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Education Block */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Education
                  </h4>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="text-muted-foreground text-sm"
                      >
                        <p className="font-medium text-foreground text-base leading-snug">
                          {edu.degree}
                        </p>
                        <p className="mt-1">
                          {edu.institution}, {edu.period}
                        </p>
                        <p>CGPA: {edu.cgpa}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Research, Summary & Actions */}
              <div className="lg:col-span-2 space-y-8 pl-0 lg:pl-4 flex flex-col h-full">
                {/* Research Interests */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Research Interests
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {researchInterests.join(" • ")}
                  </p>
                </div>

                {/* Professional Summary */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Professional Summary
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-justify text-sm">
                    {professionalSummary}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 mt-auto">
                  <Button
                    asChild
                    className="gap-2 bg-[#374151] hover:bg-[#1f2937] text-white"
                  >
                    <a href={cvPath} download="Pritom_Paul_CV_2025.pdf">
                      <Download className="w-4 h-4" />
                      Download CV (PDF)
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a href={cvPath} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Online Version
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Statistics Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cvStatistics.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-md transition-shadow flex flex-col justify-center items-center"
            >
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4 py-2 bg-background/50 rounded-r inline-block text-left">
            "{cvQuote}"
          </blockquote>
        </div>
      </div>
    </section>
  );
};
