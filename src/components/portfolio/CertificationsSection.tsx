import { Award, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Data Structures & Algorithms",
    issuer: "Coursera",
    date: "2024",
    credentialUrl: "https://coursera.org",
    type: "Course",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    credentialUrl: "https://udemy.com",
    type: "Course",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    credentialUrl: "https://ibm.com",
    type: "Certification",
  },
  {
    title: "Git & GitHub Essentials",
    issuer: "LinkedIn Learning",
    date: "2023",
    credentialUrl: "https://linkedin.com/learning",
    type: "Course",
  },
];

const achievements = [
  {
    title: "Hackathon Participant",
    description: "Participated in college-level hackathon building innovative solutions",
    year: "2024",
  },
  {
    title: "Academic Excellence",
    description: "Maintained consistent academic performance throughout semesters",
    year: "2023-24",
  },
  {
    title: "Tech Club Member",
    description: "Active member of the Computer Science club organizing events",
    year: "2023",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications & Courses
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={cert.title}
                    className="border-0 shadow-card hover:shadow-primary transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-base font-semibold">
                            {cert.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer}
                          </p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {cert.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {cert.date}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary/80"
                          asChild
                        >
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={achievement.title}
                    className="border-0 shadow-card hover:shadow-primary transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <Award className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h4 className="font-semibold">{achievement.title}</h4>
                            <Badge
                              variant="outline"
                              className="text-xs border-accent/30"
                            >
                              {achievement.year}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
