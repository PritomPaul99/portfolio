import { competitiveProgramming } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users } from "lucide-react";

export const CompetitiveSection = () => {
  return (
    <section
      id="competitive"
      className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
          Competitive Programming Experience
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {competitiveProgramming.map((comp, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 break-words">
                      {comp.competition}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                        <Badge variant="secondary">{comp.year}</Badge>
                        <Badge variant="outline" className="text-xs">
                          {comp.achievement}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium break-words">
                          {comp.team}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-4 sm:p-6 md:p-8 mt-6 md:mt-8 bg-primary/5">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 md:mb-4">
              Competitive Programming Highlights
            </h3>
            <div className="space-y-2 md:space-y-3 text-sm sm:text-base text-foreground">
              <p className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>
                  Participated in multiple ICPC Asia Dhaka Regional Contests
                  (2021-2023)
                </span>
              </p>
              <p className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>
                  Competed in National Collegiate Programming Contest (NCPC)
                  Onsite 2023
                </span>
              </p>
              <p className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>
                  Demonstrated strong problem-solving and algorithmic thinking
                  skills
                </span>
              </p>
              <p className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>
                  Collaborated effectively with team members under time
                  constraints
                </span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
