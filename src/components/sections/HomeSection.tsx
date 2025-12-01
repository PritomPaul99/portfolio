import {
  personalInfo,
  researchInterests,
  currentCourses,
} from "@/data/portfolioData";
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

export const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1">
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-4 md:space-y-6 order-2">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl text-primary font-semibold mb-1">
                {personalInfo.title}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                {personalInfo.department}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                {personalInfo.institution}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="break-words">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors touch-manipulation"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors touch-manipulation"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>

            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              {personalInfo.introduction}
            </p>
          </div>
        </div>

        {/* Research Interests */}
        <Card className="p-4 sm:p-6 md:p-8 mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 md:mb-4">
            Research Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs sm:text-sm px-2 sm:px-3 py-1"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Current Teaching */}
        <Card className="p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 md:mb-4">
            Teaching
          </h2>
          <div className="space-y-4 md:space-y-6">
            {currentCourses.map((semesterData, semesterIndex) => (
              <div key={semesterIndex}>
                <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 md:mb-3">
                  {semesterData.semester}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
                  {semesterData.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="flex items-start gap-2 text-foreground text-sm sm:text-base"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span className="break-words">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
