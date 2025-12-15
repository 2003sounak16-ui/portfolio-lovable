import { Code, Lightbulb, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: Code, label: "Projects", value: "6+" },
  { icon: Zap, label: "Skills", value: "15+" },
  { icon: Target, label: "Focus Areas", value: "4" },
  { icon: Lightbulb, label: "Ideas", value: "∞" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl gradient-bg p-1">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                        <span className="font-display text-4xl font-bold gradient-text">
                          SP
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Profile Photo
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-xl blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-xl blur-xl" />
              </div>
            </div>

            {/* About Content */}
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate Computer Science undergraduate focused on
                software development, problem-solving, and emerging technologies.
                With a strong foundation in programming and a curious mind, I'm
                constantly exploring new tools and frameworks to build impactful
                solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My journey in tech is driven by a desire to learn continuously
                and create real-world projects that make a difference. I believe
                in writing clean, efficient code and collaborating with others to
                bring innovative ideas to life.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card
                    key={stat.label}
                    className="border-0 shadow-card hover:shadow-primary transition-shadow duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 text-center">
                      <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <div className="font-display text-2xl font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
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
