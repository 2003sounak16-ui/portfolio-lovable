import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS to showcase projects and skills.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A full-stack task management application with user authentication, CRUD operations, and real-time updates.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that displays current conditions and forecasts using data from a public API.",
    tech: ["JavaScript", "HTML", "CSS", "API Integration"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "E-Commerce Landing Page",
    description:
      "A responsive e-commerce landing page with product showcases, testimonials, and contact form.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Algorithm Visualizer",
    description:
      "An interactive tool to visualize sorting and searching algorithms for educational purposes.",
    tech: ["React", "JavaScript", "CSS Animations"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Blog Platform",
    description:
      "A simple blog platform where users can create, read, update, and delete blog posts.",
    tech: ["Python", "Flask", "SQLite", "Bootstrap"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="border-0 shadow-card hover:shadow-primary transition-all duration-300 group flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-secondary rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Folder className="h-16 w-16 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 gradient-bg text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gradient-bg text-primary-foreground hover:opacity-90"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
