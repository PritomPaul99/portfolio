import { researchExperience, projects, currentResearch } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlaskConical, Code, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ResearchProjectsSection = () => {
  return (
    <section id="research" className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Research & Projects
        </h2>

        <Tabs defaultValue="current" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="current">Current Research</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {currentResearch.title}
                    </h3>
                    <Badge variant="secondary">{currentResearch.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Started: {currentResearch.startDate}
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {currentResearch.description}
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            {researchExperience.map((research, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FlaskConical className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {research.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
                      <Badge variant="outline">{research.type}</Badge>
                      <span>•</span>
                      <span>{research.institution}</span>
                      <span>•</span>
                      <span>{research.period}</span>
                    </div>
                    {research.advisor && (
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-semibold">Advisor:</span> {research.advisor}
                      </p>
                    )}
                    <p className="text-foreground mb-4">{research.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {research.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {research.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="mt-2">
                          {project.type}
                        </Badge>
                      </div>
                      {project.github && (
                        <Button asChild variant="outline">
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
                    <p className="text-foreground mb-4 mt-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">
                        Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
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
