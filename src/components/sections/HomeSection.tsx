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
    <section id="home" className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-primary font-semibold mb-1">
                {personalInfo.title}
              </p>
              <p className="text-lg text-muted-foreground">
                {personalInfo.department}
              </p>
              <p className="text-lg text-muted-foreground">
                {personalInfo.institution}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>

            <p className="text-base text-foreground leading-relaxed">
              {personalInfo.introduction}
            </p>
          </div>
        </div>

        {/* Research Interests */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Research Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Current Teaching */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Current Courses Teaching
          </h2>
          <div className="space-y-6">
            {currentCourses.map((semesterData, semesterIndex) => (
              <div key={semesterIndex}>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {semesterData.semester}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {semesterData.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="flex items-center gap-2 text-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{course}</span>
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
