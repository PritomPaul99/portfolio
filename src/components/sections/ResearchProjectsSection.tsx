import {
  researchExperience,
  projects,
  currentResearch,
} from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlaskConical, Code, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ResearchProjectsSection = () => {
  return (
    <section
      id="research"
      className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
          Research & Projects
        </h2>

        <Tabs defaultValue="current" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8 h-auto">
            <TabsTrigger
              value="current"
              className="text-xs sm:text-sm px-2 py-2 sm:px-3"
            >
              Current
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="text-xs sm:text-sm px-2 py-2 sm:px-3"
            >
              Research
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="text-xs sm:text-sm px-2 py-2 sm:px-3"
            >
              Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <Card className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                      {currentResearch.title}
                    </h3>
                    <Badge variant="secondary" className="w-fit">
                      {currentResearch.status}
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    Started: {currentResearch.startDate}
                  </p>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    {currentResearch.description}
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="space-y-4 md:space-y-6">
            {researchExperience.map((research, index) => (
              <Card key={index} className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">
                      {research.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-xs sm:text-sm text-muted-foreground mb-4">
                      <Badge variant="outline">{research.type}</Badge>
                      <span className="hidden sm:inline">•</span>
                      <span>{research.institution}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{research.period}</span>
                    </div>
                    {research.advisor && (
                      <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                        <span className="font-semibold">Advisor:</span>{" "}
                        {research.advisor}
                      </p>
                    )}
                    <p className="text-sm sm:text-base text-foreground mb-4">
                      {research.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm sm:text-base text-foreground mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {research.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm sm:text-base text-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {research.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs sm:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="space-y-4 md:space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-col gap-3 mb-2">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="mt-2 text-xs sm:text-sm"
                        >
                          {project.type}
                        </Badge>
                      </div>
                      {project.github && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full sm:w-auto touch-manipulation"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View on GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-foreground mb-4 mt-4">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm sm:text-base text-foreground mb-2">
                        Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm sm:text-base text-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs sm:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
