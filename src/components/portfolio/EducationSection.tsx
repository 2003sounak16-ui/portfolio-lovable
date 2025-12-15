import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const coursework = [
  "Data Structures",
  "Algorithms",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Web Development",
  "Object-Oriented Programming",
  "Software Engineering",
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>

          {/* Education Card */}
          <Card className="border-0 shadow-card overflow-hidden">
            <div className="h-2 gradient-bg" />
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-display mb-2">
                      B.Tech in Computer Science & Engineering
                    </CardTitle>
                    <p className="text-muted-foreground font-medium">
                      Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex
                    </p>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="w-fit px-3 py-1 text-sm font-medium"
                >
                  Undergraduate
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Expected Graduation: 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kolkata, India</span>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Relevant Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <Badge
                      key={course}
                      variant="outline"
                      className="px-3 py-1 border-primary/30 hover:bg-primary/10 transition-colors"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
