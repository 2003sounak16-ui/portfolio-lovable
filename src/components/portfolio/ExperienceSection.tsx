import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Tech Solutions Pvt. Ltd.",
    location: "Remote",
    duration: "Jun 2024 - Aug 2024",
    description: [
      "Developed responsive web pages using HTML, CSS, and JavaScript",
      "Collaborated with the design team to implement UI/UX improvements",
      "Participated in code reviews and learned best practices",
    ],
    type: "Internship",
  },
  {
    title: "Campus Ambassador",
    company: "Coding Ninjas",
    location: "Kolkata, India",
    duration: "Jan 2024 - Present",
    description: [
      "Promoted coding courses and workshops among fellow students",
      "Organized coding events and competitions at the college level",
      "Connected students with learning resources and opportunities",
    ],
    type: "Part-time",
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    location: "Remote",
    duration: "2023 - Present",
    description: [
      "Built custom websites for small businesses and individuals",
      "Managed client communications and project timelines",
      "Delivered projects with focus on responsive design and performance",
    ],
    type: "Freelance",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full gradient-bg md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className="flex-1 pl-8 md:pl-0">
                    <Card className="border-0 shadow-card hover:shadow-primary transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <Briefcase className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-display text-lg font-semibold">
                                {exp.title}
                              </h3>
                              <p className="text-primary font-medium">
                                {exp.company}
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {exp.description.map((desc, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
